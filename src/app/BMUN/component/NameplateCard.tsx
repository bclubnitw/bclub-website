"use client";

import { Delegation } from "../data/bmunData";

interface NameplateCardProps {
  item: Delegation;
  committeeId: "ecofin" | "ecosoc";
  isFlipped: boolean;
  onToggle: () => void;
}

export default function NameplateCard({ item, committeeId, isFlipped, onToggle }: NameplateCardProps) {
  // ECOFIN uses the aggressive Red/Black theme from the new posters.
  // ECOSOC uses the deep Cobalt/Cyan tech theme.
  const isEcofin = committeeId === "ecofin";
  
  const themeColors = isEcofin
    ? {
        border: "border-red-600/80",
        hoverBorder: "hover:border-red-500",
        shadow: "shadow-[8px_8px_0px_rgba(0,0,0,0.9)] hover:shadow-[12px_12px_0px_rgba(0,0,0,0.9)]",
        bg: "bg-[#f4f1ea]", // rough paper off-white
        headerBg: "bg-red-700",
        headerText: "text-white",
        textColor: "text-black",
        accent: "text-red-600",
      }
    : {
        border: "border-cyan-500/50",
        hoverBorder: "hover:border-cyan-400",
        shadow: "shadow-[8px_8px_0px_rgba(0,0,0,0.9)] hover:shadow-[12px_12px_0px_rgba(0,0,0,0.9)]",
        bg: "bg-[#0b1636]", // deep cobalt
        headerBg: "bg-black",
        headerText: "text-cyan-400",
        textColor: "text-white",
        accent: "text-cyan-400",
      };

  return (
    <div
      onClick={onToggle}
      className={`cursor-pointer group relative select-none transition-all duration-200 border-2 ${themeColors.border} ${themeColors.hoverBorder} ${themeColors.shadow} ${themeColors.bg} flex flex-col justify-between overflow-hidden min-h-[320px]`}
    >
      {/* Halftone / Noise Overlay for paper texture */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* Nameplate Top Bar */}
      <div className={`${themeColors.headerBg} ${themeColors.headerText} border-b-2 border-black px-4 py-2 flex items-center justify-between text-[11px] font-mono tracking-widest uppercase font-bold`}>
        <div className="flex items-center gap-2">
          <span>BCLUB NITW</span>
          <span className="opacity-50">•</span>
          <span>BMUN 2026</span>
        </div>
        <span>{committeeId}</span>
      </div>

      {/* Ribbon Banner */}
      <div className={`px-4 py-1.5 border-b-2 border-black flex items-center justify-between font-mono text-[9px] font-bold tracking-widest uppercase ${isEcofin ? "bg-[#e5dfd3] text-black" : "bg-[#070e24] text-gray-400"}`}>
        <span className="truncate max-w-52.5">
          {isEcofin ? "UNGA SECOND COMMITTEE" : "UN ECONOMIC & SOCIAL COUNCIL"}
        </span>
        <span className={themeColors.accent}>
          {isEcofin ? "$ € £ ¥" : ">>>>>>"}
        </span>
      </div>

      {/* Card Body */}
      {!isFlipped ? (
        <div className="p-6 flex flex-col items-center justify-center text-center space-y-5 my-auto relative z-10">
          <span className={`font-mono text-[10px] uppercase font-bold tracking-widest px-3 py-1 border-2 border-black ${isEcofin ? "bg-white text-black shadow-[3px_3px_0px_#000]" : "bg-black text-cyan-400 shadow-[3px_3px_0px_#37b7c3]"}`}>
            {item.bloc}
          </span>

          {/* Collage-style massive offset text */}
          <h4 
            className={`font-display uppercase text-4xl sm:text-5xl font-black tracking-wider leading-none ${themeColors.textColor}`}
            style={{ textShadow: isEcofin ? "3px 3px 0px rgba(193, 0, 7, 0.4)" : "3px 3px 0px rgba(0,0,0,1)" }}
          >
            {item.delegation}
          </h4>
        </div>
      ) : (
        <div className={`p-6 space-y-3 flex-1 flex flex-col justify-center relative z-10 ${isEcofin ? "bg-red-700 text-white" : "bg-[#070e24] text-white"}`}>
            <div className="flex items-center justify-between border-b-2 border-black/30 pb-2">
                <span className="font-display uppercase text-xl font-bold tracking-wide">
                {item.delegation}
                </span>
                <span className={`font-mono text-[10px] uppercase font-bold ${isEcofin ? "text-red-200" : "text-amber-400"}`}>
                STANCE OCT '26
                </span>
            </div>
            <p className="font-sans text-xs leading-relaxed font-medium">
                {item.stance}
            </p>

          {/* {////////////////////////} */}
            <div className="pt-4 border-t-2 border-black/20 mt-4">
                <a
                    href={`/BMUN/room/${committeeId}?delegation=${encodeURIComponent(item.delegation)}`}
                    className={`block w-full py-2 text-center font-display uppercase tracking-widest text-sm font-black border-2 transition-colors ${
                    isEcofin 
                        ? "bg-white text-red-700 border-black hover:bg-black hover:text-white" 
                        : "bg-black text-cyan-400 border-cyan-400 hover:bg-cyan-400 hover:text-black"
                    }`}
                >
                    JOIN {committeeId.toUpperCase()} SESSION
                </a>
            </div>
        </div>
      )}

      {/* Base Footer */}
      <div className={`border-t-2 border-black px-4 py-3 flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-widest ${isEcofin ? "bg-white text-black" : "bg-black text-cyan-400"}`}>
        <span>SEAT #{item.no < 10 ? `0${item.no}` : item.no}</span>
        <span className="group-hover:underline">
          {isFlipped ? "HIDE STANCE" : "INSPECT STANCE"}
        </span>
      </div>
    </div>
  );
}