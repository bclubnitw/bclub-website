"use client";

import { useState } from "react";
import Image from "next/image";
import { BMUN_COMMITTEES, Committee, Delegation } from "../data/bmunData";

export default function ClassifiedDossier() {
  const [unsealed, setUnsealed] = useState(false);
  const [activeCommitteeId, setActiveCommitteeId] = useState<"ecofin" | "ecosoc">("ecofin");
  const [selectedBloc, setSelectedBloc] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const currentCommittee: Committee = BMUN_COMMITTEES[activeCommitteeId];

  const toggleCardFlip = (no: number) => {
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
      {/* ========================================================
          PHASE 1: THE CLASSIFIED WAR ROOM DESK (BEFORE UNSEALING)
          ======================================================== */}
      {!unsealed ? (
        <div className="relative min-h-[88vh] flex flex-col items-center justify-center py-12 px-4 overflow-hidden">
          
          {/* Geopolitical Grid & Radial Glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,#1333a2_0%,transparent_75%)] opacity-25" />
          <div 
            className="pointer-events-none absolute inset-0 opacity-15"
            style={{
              backgroundImage: `linear-gradient(#37b7c3 1px, transparent 1px), linear-gradient(90deg, #37b7c3 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Background Angled Posters & Memos */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
            {/* Left Angled Poster Backdrop */}
            <div className="absolute -left-12 top-16 w-72 sm:w-80 h-[420px] rounded-sm border-2 border-white/10 overflow-hidden rotate-[-14deg] opacity-25 shadow-2xl hidden md:block">
              <Image
                src="/bmun_poster.jpeg"
                alt="BMUN Poster Backdrop"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070e24] via-transparent to-transparent" />
            </div>

            {/* Right Angled Poster Backdrop */}
            <div className="absolute -right-12 bottom-10 w-72 sm:w-80 h-[420px] rounded-sm border-2 border-white/10 overflow-hidden rotate-[12deg] opacity-25 shadow-2xl hidden md:block">
              <Image
                src="/bmun_poster.jpeg"
                alt="BMUN Poster Backdrop"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070e24] via-transparent to-transparent" />
            </div>

            {/* Tactical Memos */}
            <div className="absolute top-8 right-[12%] w-56 p-3 bg-[#0d1c47] border border-cyan-500/30 rotate-[6deg] opacity-60 hidden lg:block font-mono text-[9px]">
              <span className="text-red-400 font-bold block mb-1">INTERCEPT: WAR ROOM DISPATCH</span>
              <p className="text-cyan-200/80">62 Global Portfolios allocated for UNGA-2 & ECOSOC Special Session.</p>
            </div>
          </div>

          {/* Central Tactical Classified Dossier */}
          <div className="relative z-10 w-full max-w-2xl bg-[#0c1a40] border-2 border-cyan-500/40 rounded-xs p-6 sm:p-12 shadow-[0_0_60px_rgba(19,51,162,0.45)] backdrop-blur-md">
            
            {/* Top Security Header Tab */}
            <div className="absolute -top-3.5 left-6 bg-[#e11d48] text-white px-3.5 py-0.5 text-[10px] font-mono tracking-widest uppercase font-black flex items-center gap-1.5 shadow-md">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
              RESTRICTED DOSSIER // LEVEL 4 CLEARANCE
            </div>

            {/* Poster Chromatic Hook */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <span className="inline-block border border-red-500/80 bg-red-950/40 px-3 py-1 text-red-400 font-mono text-xs font-black uppercase tracking-[0.22em] rotate-[-1deg]">
                TOP SECRET // BMUN 2026
              </span>
              <span className="font-display uppercase text-sm sm:text-base tracking-[0.2em] font-bold text-cyan-300 drop-shadow-[0_0_8px_rgba(55,183,195,0.6)]">
                THE ALLIANCES ARE FORMING
              </span>
            </div>

            {/* Dossier Title */}
            <div className="space-y-3 pb-6 border-b border-white/10">
              <span className="font-mono text-[11px] text-cyan-400 tracking-wider uppercase block">
                BUSINESS CLUB NITW • EXECUTIVE BRIEFING MATRIX
              </span>
              <h1 className="font-display uppercase text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
                BUSINESS MUN 2026
              </h1>
              <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed pt-2">
                The global macroeconomic order is fracturing. Access declassified intelligence for <strong>ECOFIN</strong> and <strong>ECOSOC</strong>, inspect committee agendas, and analyze official state and corporate nameplates.
              </p>
            </div>

            {/* Intelligence Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-5 text-xs font-mono border-b border-white/10 text-gray-300">
              <div>
                <span className="block text-[10px] text-gray-400 uppercase">ASSEMBLY</span>
                <span className="font-bold text-cyan-300">ECOFIN & ECOSOC</span>
              </div>
              <div>
                <span className="block text-[10px] text-gray-400 uppercase">ALLOCATION</span>
                <span className="font-bold text-amber-300">MANUAL EB REVIEW</span>
              </div>
              <div>
                <span className="block text-[10px] text-gray-400 uppercase">STATUS</span>
                <span className="font-bold text-emerald-400">OCT 2026 READY</span>
              </div>
            </div>

            {/* CTA Declassify Button */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setUnsealed(true)}
                className="w-full sm:w-auto px-8 py-4 bg-[#1333a2] hover:bg-[#1a44d6] text-white border border-cyan-400/50 font-display uppercase tracking-widest text-lg font-bold transition-all duration-300 shadow-[0_0_20px_rgba(19,51,162,0.6)] hover:shadow-[0_0_30px_rgba(55,183,195,0.7)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>DECLASSIFY & ACCESS DOSSIER</span>
                <span className="font-mono text-cyan-300 group-hover:translate-x-1.5 transition-transform">→</span>
              </button>
              
              <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider">
                DELEGATE ACCESS ONLY
              </span>
            </div>
          </div>
        </div>
      ) : (

        /* ========================================================
           PHASE 2: UNSEALED WAR ROOM (COMMITTEES + NAMEPLATE PLACARDS)
           ======================================================== */
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-10 animate-fade-in">
          
          {/* Header Action Ribbon */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 bg-[#0b1636] border border-cyan-500/20 shadow-lg">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#37b7c3]" />
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-400 font-bold block">
                  SECURITY DIRECTIVE // ALLIANCES ACTIVE
                </span>
                <h2 className="font-display uppercase text-2xl font-bold text-white tracking-wide">
                  BMUN 2026 Executive Intelligence Matrix
                </h2>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setUnsealed(false)}
              className="text-xs font-mono uppercase tracking-wider text-gray-300 hover:text-white border border-white/20 bg-white/5 hover:bg-white/10 px-3.5 py-1.5 transition-colors cursor-pointer"
            >
              [ RE-SEAL DOSSIER ]
            </button>
          </div>

          {/* Committee Switcher Tabs */}
          <div className="w-full">
            <div className="flex w-full border-b border-cyan-500/20 gap-2 sm:gap-4 overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <button
                type="button"
                onClick={() => {
                  setActiveCommitteeId("ecofin");
                  setSelectedBloc("All");
                  setSearchQuery("");
                }}
                className={`flex-1 sm:flex-initial text-center px-6 sm:px-10 py-3.5 font-display uppercase tracking-wider text-base sm:text-xl font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeCommitteeId === "ecofin"
                    ? "border-cyan-400 text-cyan-300 bg-[#10204d] shadow-[0_0_15px_rgba(55,183,195,0.25)]"
                    : "border-transparent text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>ECOFIN</span>
                <span className="hidden sm:inline"> • Second Committee</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveCommitteeId("ecosoc");
                  setSelectedBloc("All");
                  setSearchQuery("");
                }}
                className={`flex-1 sm:flex-initial text-center px-6 sm:px-10 py-3.5 font-display uppercase tracking-wider text-base sm:text-xl font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeCommitteeId === "ecosoc"
                    ? "border-cyan-400 text-cyan-300 bg-[#10204d] shadow-[0_0_15px_rgba(55,183,195,0.25)]"
                    : "border-transparent text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>ECOSOC</span>
                <span className="hidden sm:inline"> • Algorithmic Labor</span>
              </button>
            </div>

            <div className="sm:hidden mt-2 flex items-center justify-between px-1 text-[11px] font-mono text-gray-400">
              <span>ACTIVE COMMITTEE:</span>
              <span className="font-bold text-cyan-300 uppercase">
                {activeCommitteeId === "ecofin" ? "UNGA-2 ECOFIN" : "ECOSOC SPECIAL SESSION"}
              </span>
            </div>
          </div>

          {/* Committee Specification & Briefing */}
          <div className="bg-[#0b1636] border border-cyan-500/20 p-6 sm:p-10 shadow-lg space-y-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-cyan-400 font-bold tracking-widest uppercase">
                  UN MANDATE BRIEFING
                </span>
                {activeCommitteeId === "ecosoc" && (
                  <span className="font-mono text-xs text-cyan-300 font-bold tracking-widest">
                    &gt;&gt;&gt;&gt;&gt;&gt;&gt;
                  </span>
                )}
                {activeCommitteeId === "ecofin" && (
                  <span className="font-mono text-xs text-amber-400 font-bold tracking-widest">
                    $ € £ ¥
                  </span>
                )}
              </div>
              <h3 className="font-display uppercase text-2xl sm:text-4xl font-extrabold text-white">
                {currentCommittee.fullName}
              </h3>
            </div>

            {/* Agenda Box */}
            <div className="p-5 bg-[#070e24] border-l-4 border-cyan-400 shadow-inner">
              <span className="font-mono text-xs uppercase tracking-wider text-cyan-300 font-bold block mb-1">
                OFFICIAL AGENDA:
              </span>
              <p className="font-sans text-base sm:text-lg font-semibold text-gray-100 leading-snug">
                "{currentCommittee.agenda}"
              </p>
            </div>

            {/* Discussion Points */}
            <div className="space-y-3 pt-2">
              <h4 className="font-display uppercase tracking-wider text-sm font-bold text-cyan-300">
                WHAT DISCUSSION TO EXPECT // BATTLEGROUNDS & POWER DYNAMICS
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentCommittee.discussionExpectations.map((item, idx) => (
                  <div key={idx} className="p-4 bg-[#0e1c45] border border-cyan-500/15 rounded-xs flex gap-3 text-sm text-gray-300">
                    <span className="font-mono text-cyan-400 font-bold">{`0${idx + 1}`}</span>
                    <p className="leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Allocation Notice */}
          <div className="p-5 bg-amber-500/10 border-l-4 border-amber-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="font-display uppercase tracking-wider text-sm font-bold text-amber-400">
                PORTFOLIO ALLOCATION DIRECTIVE
              </h4>
              <p className="font-sans text-xs sm:text-sm text-amber-200">
                Country, bloc, and corporate seat allocations are processed <strong>manually</strong> by the BMUN Executive Board based on candidate preferences and track record.
              </p>
            </div>
            {/* <a
              href="mailto:bclub@nitw.ac.in"
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-mono text-xs uppercase tracking-widest font-bold transition-colors whitespace-nowrap"
            >
              Contact Secretariat
            </a> */}
          </div>

          {/* Nameplate Tickets / Placards Grid */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider">
                  DELEGATION NAMEPLATES
                </span>
                <h3 className="font-display uppercase text-2xl font-bold text-white">
                  Official Printable Nameplate Placards ({filteredPortfolios.length} Entries)
                </h3>
                <span className="font-mono text-[11px] text-gray-400 block mt-0.5">
                  Click any placard to flip and inspect the delegation's verified committee stance.
                </span>
              </div>

              {/* Search Bar */}
              <div className="w-full sm:w-72">
                <input
                  type="text"
                  placeholder="Search delegation or stance..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-[#0a1533] border border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none font-sans"
                />
              </div>
            </div>

            {/* Filter Chips */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-gray-400 uppercase mr-2">Filter Bloc:</span>
              {currentCommittee.blocs.map((bloc) => (
                <button
                  key={bloc}
                  type="button"
                  onClick={() => setSelectedBloc(bloc)}
                  className={`px-3 py-1 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    selectedBloc === bloc
                      ? "bg-cyan-500 text-black font-bold shadow-[0_0_10px_rgba(55,183,195,0.5)]"
                      : "bg-[#0c1a40] border border-cyan-500/20 text-gray-300 hover:border-cyan-400"
                  }`}
                >
                  {bloc}
                </button>
              ))}
            </div>

            {/* The Nameplate Placards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPortfolios.map((item) => {
                const isFlipped = !!flippedCards[item.no];

                return (
                  <div
                    key={item.no}
                    onClick={() => toggleCardFlip(item.no)}
                    className="cursor-pointer group relative select-none"
                  >
                    {/* Authentic Nameplate Placard Design */}
                    <div className="relative bg-[#070e24] border-2 border-cyan-400/40 rounded-xs shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-cyan-300 hover:shadow-[0_0_25px_rgba(55,183,195,0.35)] transition-all duration-300 flex flex-col justify-between overflow-hidden min-h-[300px]">
                      
                      {/* Nameplate Top Bar */}
                      <div className="bg-[#0b1636] border-b border-cyan-500/30 px-4 py-2 flex items-center justify-between text-[10px] font-mono tracking-wider text-gray-300">
                        <div className="flex items-center gap-2">
                          <span className="text-cyan-400 font-bold">PRESENTED BY BCLUB NITW</span>
                          <span>•</span>
                          <span>BMUN 2026</span>
                        </div>
                        <span className="font-bold text-cyan-300 uppercase">
                          {activeCommitteeId}
                        </span>
                      </div>

                      {/* Motifs & Sub-Committee Ribbon */}
                      <div className="px-4 py-1.5 bg-[#09122c] border-b border-cyan-500/20 flex items-center justify-between font-mono text-[9px] text-gray-400">
                        <span className="truncate max-w-[210px] uppercase">
                          {activeCommitteeId === "ecofin"
                            ? "UNGA SECOND COMMITTEE · ECONOMIC & FINANCIAL"
                            : "UN ECONOMIC & SOCIAL COUNCIL · SPECIAL SESSION"}
                        </span>
                        
                        {activeCommitteeId === "ecofin" ? (
                          <span className="text-amber-400 tracking-widest font-bold">
                            $ € £ ¥
                          </span>
                        ) : (
                          <span className="text-cyan-400 tracking-widest font-bold">
                            &gt;&gt;&gt;&gt;&gt;&gt;
                          </span>
                        )}
                      </div>

                      {/* Card Body: Face vs Flipped Stance */}
                      {!isFlipped ? (
                        <div className="p-6 flex flex-col items-center justify-center text-center space-y-4 my-auto">
                          {/* Bloc Badge */}
                          <span
                            className={`font-mono text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border ${
                              item.bloc === "Corporation"
                                ? "bg-purple-950/70 text-purple-300 border-purple-500/50"
                                : item.bloc === "Financial Hub"
                                ? "bg-blue-950/70 text-blue-300 border-blue-500/50"
                                : item.bloc === "Offshore Hub"
                                ? "bg-emerald-950/70 text-emerald-300 border-emerald-500/50"
                                : item.bloc === "Emerging Power"
                                ? "bg-amber-950/70 text-amber-300 border-amber-500/50"
                                : "bg-cyan-950/70 text-cyan-300 border-cyan-500/50"
                            }`}
                          >
                            {item.bloc}
                          </span>

                          {/* Massive Delegation Name (Exact Font Styling as on the PDF Placards) */}
                          <h4 className="font-display uppercase text-3xl sm:text-4xl font-black text-white tracking-wider leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                            {item.delegation}
                          </h4>

                          {/* Simulated Bottom Fold-Line Indicator */}
                          <div className="w-full flex items-center gap-2 pt-2 opacity-50">
                            <span className="h-[1px] flex-1 bg-dashed border-t border-dashed border-gray-600" />
                            <span className="font-mono text-[8px] text-gray-400 uppercase tracking-widest">
                              [ TABLE PLACARD FOLD ]
                            </span>
                            <span className="h-[1px] flex-1 bg-dashed border-t border-dashed border-gray-600" />
                          </div>
                        </div>
                      ) : (
                        /* Flipped View: Verified Stance */
                        <div className="p-6 space-y-3 bg-[#0a1738] flex-1 flex flex-col justify-center">
                          <div className="flex items-center justify-between border-b border-white/10 pb-2">
                            <span className="font-display uppercase text-lg font-bold text-cyan-300">
                              {item.delegation}
                            </span>
                            <span className="font-mono text-[10px] text-amber-300 uppercase">
                              STANCE OCT 2026
                            </span>
                          </div>
                          <p className="font-sans text-xs text-gray-200 leading-relaxed">
                            {item.stance}
                          </p>
                        </div>
                      )}

                      {/* Placard Base Footer */}
                      <div className="bg-[#0b1636] border-t border-cyan-500/20 px-4 py-2 flex items-center justify-between text-[10px] font-mono text-gray-400">
                        <span>SEAT #{item.no < 10 ? `0${item.no}` : item.no}</span>
                        <span className="text-cyan-400 group-hover:underline">
                          {isFlipped ? "CLICK TO SHOW PLACARD" : "CLICK TO VIEW STANCE →"}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredPortfolios.length === 0 && (
              <div className="text-center py-16 bg-[#0b1636] border border-dashed border-cyan-500/20">
                <p className="font-mono text-sm text-gray-400">No delegations match your search or filter criteria.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}