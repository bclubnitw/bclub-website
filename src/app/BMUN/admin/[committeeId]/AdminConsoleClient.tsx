"use client";

import { useEffect, useState, use } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminConsoleClient({ params }: { params: Promise<{ committeeId: string }> }) {
  // 1. Unwrap params safely inside the client boundary
  const unwrappedParams = use(params);
  const committeeId = unwrappedParams.committeeId;
  const isEcofin = committeeId === "ecofin";

  const [roomState, setRoomState] = useState<{ is_open: boolean; buzzing_open: boolean } | null>(null);
  const [lineup, setLineup] = useState<any[]>([]);

  useEffect(() => {
    const fetchState = async () => {
      const { data: roomData } = await supabase.from("bmun_rooms").select("*").eq("id", committeeId).single();
      if (roomData) setRoomState(roomData);

      const { data: buzzData } = await supabase.from("bmun_buzzes").select("*").eq("room_id", committeeId).order("buzzed_at", { ascending: true });
      if (buzzData) setLineup(buzzData);
    };
    fetchState();

    const roomSub = supabase
      .channel(`admin_room_${committeeId}`)
      .on("postgres_changes", { event: "UPDATE", schema: "public", table: "bmun_rooms", filter: `id=eq.${committeeId}` }, (payload) => {
        setRoomState(payload.new as any);
      })
      .on("postgres_changes", { event: "*", schema: "public", table: "bmun_buzzes"}, () => {
        supabase.from("bmun_buzzes").select("*").eq("room_id", committeeId).order("buzzed_at", { ascending: true })
          .then(({ data }) => { if (data) setLineup(data); });
      })
      .subscribe();

    return () => { supabase.removeChannel(roomSub); };
  }, [committeeId]);

  const toggleRoomLock = async () => {
    if (!roomState) return;
    await supabase.from("bmun_rooms").update({ is_open: !roomState.is_open }).eq("id", committeeId);
  };

  const toggleBuzzing = async () => {
    if (!roomState) return;
    await supabase.from("bmun_rooms").update({ buzzing_open: !roomState.buzzing_open }).eq("id", committeeId);
  };

  const clearQueue = async () => {
    if (confirm("WARNING: This will permanently delete the entire speaker lineup. Proceed?")) {
      await supabase.from("bmun_buzzes").delete().eq("room_id", committeeId);
    }
  };

  const removeBuzz = async (id: number) => {
    await supabase.from("bmun_buzzes").delete().eq("id", id);
  };

  if (!roomState) return <div className="min-h-screen bg-black text-red-500 font-mono flex items-center justify-center">Authenticating EB Credentials...</div>;

  // ... (Keep the rest of the Admin return JSX exactly as you have it)
  return (
    <main className={`min-h-screen ${isEcofin ? "bg-[#9d1b19] text-white" : "bg-[#070e24] text-cyan-400"} p-4 sm:p-8 font-mono`}>
      {/* ... Your Admin JSX ... */}
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="border-4 border-black bg-black p-6 text-white shadow-[12px_12px_0px_rgba(0,0,0,0.5)]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-red-500 font-bold tracking-widest text-xs uppercase animate-pulse">
              LEVEL 5 SECRETARIAT ACCESS
            </span>
            <span className="text-xs text-gray-500 uppercase">Live Socket Active</span>
          </div>
          <h1 className="font-display text-4xl uppercase font-black tracking-widest text-white">
            {committeeId} COMMAND CONSOLE
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_#000] text-black">
            <h2 className="font-bold uppercase tracking-widest mb-4">1. Room Access Control</h2>
            <button
              onClick={toggleRoomLock}
              className={`w-full py-4 font-display text-xl uppercase font-black border-4 border-black transition-colors ${
                roomState.is_open ? "bg-emerald-500 hover:bg-emerald-400 text-black" : "bg-gray-300 hover:bg-gray-400 text-gray-600"
              }`}
            >
              {roomState.is_open ? "ROOM UNLOCKED (DELEGATES CAN JOIN)" : "ROOM LOCKED (DELEGATES BLOCKED)"}
            </button>
            <p className="text-[10px] mt-2 text-gray-600">Toggle this to allow delegates to enter the terminal from the dossier.</p>
          </div>

          <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_#000] text-black">
            <h2 className="font-bold uppercase tracking-widest mb-4">2. Floor Buzzers</h2>
            <button
              onClick={toggleBuzzing}
              className={`w-full py-4 font-display text-xl uppercase font-black border-4 border-black transition-colors ${
                roomState.buzzing_open ? "bg-red-600 text-white animate-pulse" : "bg-gray-300 hover:bg-gray-400 text-gray-600"
              }`}
            >
              {roomState.buzzing_open ? "BUZZERS LIVE (ACCEPTING INPUT)" : "BUZZERS DISABLED"}
            </button>
            <p className="text-[10px] mt-2 text-gray-600">Open the floor to allow delegates to join the General Speakers List.</p>
          </div>
        </div>

        <div className="border-4 border-black bg-white p-6 shadow-[12px_12px_0px_#000] text-black">
          <div className="flex items-center justify-between mb-6 border-b-4 border-black pb-4">
            <h2 className="font-display text-2xl uppercase font-black">Live Speakers Lineup</h2>
            <button
              onClick={clearQueue}
              className="bg-black text-white font-mono text-xs font-bold uppercase px-4 py-2 hover:bg-red-600 transition-colors"
            >
              PURGE QUEUE
            </button>
          </div>

          {lineup.length === 0 ? (
            <p className="text-sm font-bold text-gray-400 uppercase text-center py-10 border-2 border-dashed border-gray-300">
              NO DELEGATIONS IN QUEUE
            </p>
          ) : (
            <div className="space-y-2">
              {lineup.map((buzz, idx) => (
                <div key={buzz.id} className="flex items-center justify-between border-2 border-black p-3 bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="bg-black text-white px-2 py-1 font-bold text-sm">#{idx + 1}</span>
                    <span className="font-display text-lg font-black uppercase tracking-wider">{buzz.delegation}</span>
                  </div>
                  <button
                    onClick={() => removeBuzz(buzz.id)}
                    className="text-red-600 hover:text-white hover:bg-red-600 border border-red-600 px-3 py-1 text-[10px] font-bold uppercase transition-colors"
                  >
                    DISMISS
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}