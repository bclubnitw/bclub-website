"use client";

import { useState } from "react";
import Image from "next/image";
import { BMUN_COMMITTEES, Committee, Delegation } from "../data/bmunData";
import NameplateCard from "./NameplateCard";

export default function ClassifiedDossier() {
  const [unsealed, setUnsealed] = useState(false);
  const [activeCommitteeId, setActiveCommitteeId] = useState<"ecofin" | "ecosoc">("ecofin");
  const [selectedBloc, setSelectedBloc] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const currentCommittee: Committee = BMUN_COMMITTEES[activeCommitteeId];
  const isEcofin = activeCommitteeId === "ecofin";

  const handleToggle = (no: number) => {
    setFlippedCards((prev) => ({ ...prev, [no]: !prev[no] }));
  };

  const filteredPortfolios = currentCommittee.portfolios.filter((p: Delegation) => {
    const matchesBloc = selectedBloc === "All" || p.bloc === selectedBloc;
    const matchesSearch =
      p.delegation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.stance.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBloc && matchesSearch;
  });

  return (
    <div className="w-full">
      {!unsealed ? (
        <div className="relative min-h-[88vh] flex flex-col items-center justify-center py-12 px-4 overflow-hidden">
          
          {/* Deep Blue Base with Red Vignette */}
          <div className="pointer-events-none absolute inset-0 bg-[#070e24]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,#9d1b19_0%,transparent_60%)] opacity-30" />

          {/* Draft Posters Integration (Left & Right) */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
            <div className="absolute -left-16 top-10 w-80 h-125 border-4 border-black rotate-[-8deg] opacity-60 shadow-[20px_20px_0px_rgba(0,0,0,0.5)] hidden md:block">
              <Image src="/bmun_poster1.jpeg" alt="BMUN Draft" fill className="object-cover grayscale mix-blend-luminosity" />
              <div className="absolute inset-0 bg-red-600 mix-blend-multiply opacity-80" />
            </div>
            <div className="absolute -right-16 bottom-0 w-80 h-125 border-4 border-black rotate-6 opacity-60 shadow-[20px_20px_0px_rgba(0,0,0,0.5)] hidden md:block">
              <Image src="/bmun_poster2.jpeg" alt="BMUN Draft" fill className="object-cover grayscale mix-blend-luminosity" />
              <div className="absolute inset-0 bg-red-600 mix-blend-multiply opacity-80" />
            </div>
          </div>

          {/* Central Dossier - Propaganda Poster Style */}
          <div className="relative z-10 w-full max-w-2xl bg-[#f83a2e] border-4 border-black p-8 sm:p-14 shadow-[20px_20px_0px_rgba(0,0,0,0.8)]">
            
            {/* Tagline / Header */}
            <div className="flex items-center justify-between mb-8 border-b-4 border-black pb-4">
              <span className="font-mono text-xs sm:text-sm font-black text-black tracking-[0.3em] uppercase">
                CONFIDENTIAL DOSSIER
              </span>
              <span className="font-display text-xl font-black text-white tracking-widest uppercase drop-shadow-[2px_2px_0px_#000]">
                BMUN 2026
              </span>
            </div>

            {/* Collage Cutout Title */}
            <div className="space-y-4 pb-8">
              <h1 className="font-display uppercase text-5xl sm:text-7xl font-black text-white tracking-tighter leading-none" style={{ textShadow: "6px 6px 0px #000" }}>
                THE ALLIANCES<br/>ARE FORMING
              </h1>
              <p className="font-sans text-black font-bold text-base sm:text-lg leading-snug max-w-lg pt-4">
                The global macroeconomic order is fracturing. Access declassified intelligence for 
                <span className="uppercase font-black text-white" style={{ textShadow: "1.5px 1.5px 0px #000" }}> ECOFIN & ECOSOC.</span> Inspect committee agendas and verify official state and corporate stances.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                type="button"
                onClick={() => setUnsealed(true)}
                className="w-full px-8 py-5 bg-black hover:bg-white hover:text-black text-white font-display uppercase tracking-widest text-xl font-black transition-colors duration-200 shadow-[8px_8px_0px_rgba(255,255,255,0.3)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] border-2 border-black flex items-center justify-center gap-3 cursor-pointer"
              >
                UNSEAL INTELLIGENCE MATRIX
              </button>
            </div>
          </div>
        </div>
      ) : (

        /* ========================================================
           PHASE 2: UNSEALED MATIRX
           ======================================================== */
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12 animate-fade-in">
          
          {/* Header Action Ribbon */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 border-4 border-black bg-white shadow-[8px_8px_0px_#000]">
            <div className="flex items-center gap-3">
              <span className="h-4 w-4 bg-red-600 border-2 border-black animate-pulse" />
              <h2 className="font-display uppercase text-2xl font-black text-black tracking-wide">
                EXECUTIVE INTELLIGENCE MATRIX
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setUnsealed(false)}
              className="text-xs font-mono font-bold uppercase tracking-widest text-white bg-black hover:bg-red-600 px-4 py-2 transition-colors border-2 border-black"
            >
              RE-SEAL DOSSIER
            </button>
          </div>

          {/* Committee Switcher Tabs */}
          <div className="w-full flex gap-4 border-b-4 border-black pb-4 overflow-x-auto scrollbar-none">
            <button
              onClick={() => { setActiveCommitteeId("ecofin"); setSelectedBloc("All"); setSearchQuery(""); }}
              className={`flex-1 min-w-25 text-center px-6 py-4 font-display uppercase tracking-widest text-2xl font-black border-4 border-black transition-all ${
                activeCommitteeId === "ecofin" ? "bg-red-600 text-white shadow-[6px_6px_0px_#000]" : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              ECOFIN
            </button>
            <button
              onClick={() => { setActiveCommitteeId("ecosoc"); setSelectedBloc("All"); setSearchQuery(""); }}
              className={`flex-1 min-w-25 text-center px-6 py-4 font-display uppercase tracking-widest text-2xl font-black border-4 border-black transition-all ${
                activeCommitteeId === "ecosoc" ? "bg-cyan-500 text-black shadow-[6px_6px_0px_#000]" : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              ECOSOC
            </button>
          </div>

          {/* Committee Briefing Card */}
          <div className={`border-4 border-black p-8 sm:p-12 shadow-[12px_12px_0px_#000] space-y-8 ${isEcofin ? "bg-[#f4f1ea]" : "bg-[#0b1636]"}`}>
            <div>
              <span className={`font-mono text-sm font-bold tracking-widest uppercase ${isEcofin ? "text-red-600" : "text-cyan-400"}`}>
                UN MANDATE BRIEFING {isEcofin ? "($ € £ ¥)" : "(>>>>>>)"}
              </span>
              <h3 className={`font-display uppercase text-3xl sm:text-5xl font-black tracking-tight mt-2 ${isEcofin ? "text-black" : "text-white"}`}>
                {currentCommittee.fullName}
              </h3>
            </div>

            <div className={`p-6 border-4 border-black ${isEcofin ? "bg-red-600 text-white" : "bg-black text-cyan-400"}`}>
              <span className="font-mono text-xs uppercase tracking-widest font-black block mb-2 opacity-80">OFFICIAL AGENDA:</span>
              <p className="font-sans text-xl sm:text-2xl font-bold leading-tight">
                "{currentCommittee.agenda}"
              </p>
            </div>
          </div>

          {/* Roster Controls */}
          <div className="space-y-6 bg-white/5 p-6 border-2 border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <h3 className="font-display uppercase text-2xl font-bold text-white tracking-widest">
                VERIFIED NAMEPLATES ({filteredPortfolios.length})
              </h3>
              <input
                type="text"
                placeholder="Search delegation or stance..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-80 px-4 py-3 bg-white text-black font-mono font-bold border-4 border-black focus:border-red-500 focus:outline-none placeholder-gray-500"
              />
            </div>
            
            <div className="flex flex-wrap gap-3">
              {currentCommittee.blocs.map((bloc) => (
                <button
                  key={bloc}
                  onClick={() => setSelectedBloc(bloc)}
                  className={`px-4 py-1.5 font-mono text-xs uppercase font-bold border-2 border-black transition-all ${
                    selectedBloc === bloc ? "bg-white text-black shadow-[4px_4px_0px_#000]" : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                  }`}
                >
                  {bloc}
                </button>
              ))}
            </div>
          </div>

          {/* Nameplates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolios.map((item) => (
              <NameplateCard 
                key={item.no} 
                item={item} 
                committeeId={activeCommitteeId} 
                isFlipped={!!flippedCards[item.no]} 
                onToggle={() => handleToggle(item.no)} 
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}