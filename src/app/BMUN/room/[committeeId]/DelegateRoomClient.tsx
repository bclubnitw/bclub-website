"use client";

import { useEffect, useState, use } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { getOrCreateDeviceId } from "@/utils/bmunSession";

export default function DelegateRoomClient({ params }: { params: Promise<{ committeeId: string }> }) {
  const unwrappedParams = use(params);
  const committeeId = unwrappedParams.committeeId;
  const isEcofin = committeeId === "ecofin";

  const searchParams = useSearchParams();
  const delegation = searchParams.get("delegation") || "UNKNOWN DELEGATION";

  const [roomState, setRoomState] = useState<{ is_open: boolean; buzzing_open: boolean } | null>(null);
  const [lineup, setLineup] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  
  // Presence error state (Identity Collision)
  const [presenceError, setPresenceError] = useState<boolean>(false);

  useEffect(() => {
    const deviceId = getOrCreateDeviceId();

    const fetchState = async () => {
      const { data: roomData } = await supabase.from("bmun_rooms").select("*").eq("id", committeeId).single();
      if (roomData) setRoomState(roomData);

      const { data: buzzData } = await supabase.from("bmun_buzzes").select("*").eq("room_id", committeeId).order("buzzed_at", { ascending: true });
      if (buzzData) setLineup(buzzData);
    };
    fetchState();

    const roomSub = supabase
      .channel(`room_${committeeId}`, {
        config: {
          presence: { key: deviceId },
        },
      })
      .on("postgres_changes", { event: "UPDATE", schema: "public", table: "bmun_rooms", filter: `id=eq.${committeeId}` }, (payload) => {
        setRoomState(payload.new as any);
      })
      .on("postgres_changes", { event: "*", schema: "public", table: "bmun_buzzes"}, () => {
        supabase.from("bmun_buzzes").select("*").eq("room_id", committeeId).order("buzzed_at", { ascending: true })
          .then(({ data }) => { if (data) setLineup(data); });
      })
      // PRESENCE SYNC: Check for Identity Collisions
      .on("presence", { event: "sync" }, () => {
        const state = roomSub.presenceState();
        const activeDelegates: any[] = [];
        
        Object.values(state).forEach((presences) => {
          presences.forEach((p: any) => {
            if (p.delegation === delegation) activeDelegates.push(p);
          });
        });

        if (activeDelegates.length > 1) {
          activeDelegates.sort((a, b) => a.joinedAt - b.joinedAt);
          if (activeDelegates[0].deviceId !== deviceId) {
            setPresenceError(true);
            roomSub.untrack();
          }
        } else if (activeDelegates.length === 1 && activeDelegates[0].deviceId !== deviceId) {
           setPresenceError(true);
        }
      })
      .subscribe(async (status) => {
        if (status === "SUBSCRIBED") {
          await roomSub.track({ delegation, deviceId, joinedAt: Date.now() });
        }
      });

    return () => { supabase.removeChannel(roomSub); };
  }, [committeeId, delegation]);

  // Derive hasBuzzed strictly from the lineup array
  const myRank = lineup.findIndex((b) => b.delegation === delegation) + 1;
  const hasBuzzed = myRank > 0;

  const handleBuzz = async () => {
    if (!roomState?.buzzing_open || hasBuzzed || loading) return;
    
    setLoading(true);

    // OPTIMISTIC UPDATE: Instantly inject a placeholder into the queue.
    // This locks the button immediately (hasBuzzed becomes true) and prevents double-clicks.
    setLineup((prev) => [...prev, { id: "optimistic-lock", delegation, status: "TRANSMITTING..." }]);

    const { error } = await supabase.from("bmun_buzzes").insert({
      room_id: committeeId,
      delegation: delegation,
      status: "QUEUED",
    });

    setLoading(false);

    if (error) {
      // If network fails, rip the optimistic record back out so they can try again.
      setLineup((prev) => prev.filter((b) => b.id !== "optimistic-lock"));
      if (error.code === "23505") alert("You are already in the speaker lineup!");
      else alert("Error transmitting buzz. Check connection.");
    }
    // If successful, we do nothing! The Realtime subscription will fire in ~50ms 
    // and overwrite our "optimistic-lock" with the real, permanent DB record.
  };

  if (presenceError) {
    return (
      <div className="min-h-screen bg-[#070e24] flex items-center justify-center p-6 text-center">
        <div className="border-4 border-red-600 bg-red-950/40 p-8 max-w-md w-full">
          <span className="font-mono text-red-500 font-bold tracking-widest uppercase mb-4 block">IDENTITY COLLISION</span>
          <h1 className="font-display text-2xl text-white uppercase font-black">{delegation} is Active</h1>
          <p className="font-sans text-gray-400 mt-4 text-sm">Another device is currently connected as this delegation. If this is an error, wait 15 seconds for their session to clear, then refresh.</p>
          <Link href={`/BMUN`} className="mt-8 inline-block font-mono text-xs text-white border-b border-white hover:text-cyan-400">Return to Lobby</Link>
        </div>
      </div>
    );
  }

  if (!roomState) return <div className="min-h-screen bg-black flex items-center justify-center text-white font-mono uppercase tracking-widest animate-pulse">Initializing Secure Channel...</div>;

  if (!roomState.is_open) {
    return (
      <div className="min-h-screen bg-[#070e24] flex items-center justify-center p-6 text-center">
        <div className="border-4 border-red-600 bg-red-950/40 p-8 max-w-md w-full">
          <span className="font-mono text-red-500 font-bold tracking-widest uppercase mb-4 block">ACCESS DENIED</span>
          <h1 className="font-display text-2xl text-white uppercase font-black">Room Locked by Executive Board</h1>
          <p className="font-sans text-gray-400 mt-4 text-sm">Please wait for the Dais to open the session floor.</p>
          <Link href={`/BMUN`} className="mt-8 inline-block font-mono text-xs text-white border-b border-white hover:text-cyan-400">Return to Dossier</Link>
        </div>
      </div>
    );
  }

  return (
    <main className={`min-h-screen ${isEcofin ? "bg-[#f4f1ea] text-black" : "bg-[#0b1636] text-white"} p-4 sm:p-8 selection:bg-black selection:text-white`}>
      <div className="max-w-2xl mx-auto space-y-6">
        <div className={`border-4 border-black p-4 flex items-center justify-between shadow-[6px_6px_0px_#000] ${isEcofin ? "bg-white" : "bg-[#070e24]"}`}>
          <div>
            <span className={`font-mono text-[10px] font-bold tracking-widest uppercase block ${isEcofin ? "text-red-600" : "text-cyan-400"}`}>
              {committeeId} • SECURE TERMINAL
            </span>
            <h1 className="font-display text-xl sm:text-2xl font-black uppercase mt-1">
              {delegation}
            </h1>
          </div>
          <div className="text-right">
            <span className="font-mono text-[10px] text-gray-500 block">FLOOR STATUS</span>
            <span className={`font-mono text-xs sm:text-sm font-black uppercase tracking-widest ${roomState.buzzing_open ? "text-emerald-500 animate-pulse" : "text-red-600"}`}>
              {roomState.buzzing_open ? "BUZZERS OPEN" : "FLOOR LOCKED"}
            </span>
          </div>
        </div>

        <button
          onClick={handleBuzz}
          disabled={!roomState.buzzing_open || hasBuzzed || loading}
          className={`w-full aspect-[2/1] sm:aspect-video flex flex-col items-center justify-center border-4 border-black transition-all duration-100 ${
            !roomState.buzzing_open 
              ? "bg-gray-300 dark:bg-gray-800 opacity-50 cursor-not-allowed"
              : hasBuzzed
              ? "bg-emerald-500 text-black shadow-[8px_8px_0px_#000] translate-y-1 translate-x-1"
              : isEcofin
              ? "bg-red-600 hover:bg-red-500 text-white shadow-[12px_12px_0px_#000] hover:shadow-[16px_16px_0px_#000] active:shadow-[4px_4px_0px_#000] active:translate-y-2 active:translate-x-2 cursor-pointer"
              : "bg-cyan-500 hover:bg-cyan-400 text-black shadow-[12px_12px_0px_#000] hover:shadow-[16px_16px_0px_#000] active:shadow-[4px_4px_0px_#000] active:translate-y-2 active:translate-x-2 cursor-pointer"
          }`}
        >
          <span className="font-mono text-sm sm:text-base font-black tracking-[0.3em] opacity-80 uppercase">
            {hasBuzzed ? "TRANSMISSION SENT" : roomState.buzzing_open ? "GSL RECOGNITION" : "STANDBY"}
          </span>
          <span className="font-display text-4xl sm:text-6xl font-black uppercase mt-2 tracking-widest">
            {hasBuzzed ? "QUEUED" : "BUZZ IN"}
          </span>
        </button>

        <div className={`border-4 border-black shadow-[8px_8px_0px_#000] p-6 ${isEcofin ? "bg-white" : "bg-[#070e24]"}`}>
          <div className="flex items-center justify-between mb-4 border-b-2 border-black/20 pb-2">
            <h3 className="font-display text-lg sm:text-xl uppercase font-black tracking-widest">General Speakers List</h3>
            {hasBuzzed && (
              <span className={`font-mono text-xs font-bold px-2 py-1 border-2 border-black ${isEcofin ? "bg-red-100 text-red-800" : "bg-cyan-900 text-cyan-300"}`}>
                YOUR RANK: #{myRank}
              </span>
            )}
          </div>
          
          {lineup.length === 0 ? (
            <p className="font-mono text-xs text-gray-500 uppercase text-center py-8">Queue is currently empty.</p>
          ) : (
            <ul className="space-y-3">
              {lineup.map((buzz, idx) => (
                <li key={buzz.id} className={`flex items-center justify-between border-2 border-black p-3 ${buzz.delegation === delegation ? (isEcofin ? "bg-red-600 text-white" : "bg-cyan-500 text-black") : (isEcofin ? "bg-gray-50" : "bg-gray-900")}`}>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold opacity-60">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <span className="font-display font-black uppercase tracking-wider text-sm sm:text-base">
                      {buzz.delegation}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-widest opacity-70">
                    {buzz.status}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* TERMINATE SESSION BUTTON */}
        <div className="text-center pt-6 pb-4">
          <Link
            href="/BMUN"
            className={`font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase border-b transition-colors ${
              isEcofin 
                ? "text-gray-500 hover:text-red-600 border-transparent hover:border-red-600" 
                : "text-gray-500 hover:text-cyan-400 border-transparent hover:border-cyan-400"
            }`}
          >
            [ TERMINATE SECURE SESSION ]
          </Link>
        </div>
      </div>
    </main>
  );
}