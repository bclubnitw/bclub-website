"use client";

import { useState } from "react";
import { BMUN_COMMITTEES, Committee, Delegation } from "../data/bmunData"

export default function ClassifiedDossier() {
  const [unsealed, setUnsealed] = useState(false);
  const [activeCommitteeId, setActiveCommitteeId] = useState<"ecofin" | "ecosoc">("ecofin");
  const [selectedBloc, setSelectedBloc] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const currentCommittee: Committee = BMUN_COMMITTEES[activeCommitteeId];

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
          PHASE 1: THE CLASSIFIED DESK (BEFORE UNSEALING)
          ======================================================== */}
      {!unsealed ? (
        <div className="relative min-h-[85vh] flex flex-col items-center justify-center py-16 px-4">
          
          {/* Scattered background memo paper artifacts */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30 select-none">
            <div className="absolute top-10 left-[8%] w-52 p-4 bg-white border border-dashed border-bclub-charcoal/30 rotate-[-8deg] shadow-sm hidden md:block">
              <p className="font-mono text-[10px] text-red-600 font-bold uppercase">RESTRICTED MEMO</p>
              <p className="font-mono text-[9px] text-bclub-slate mt-1">Ref: UNGA-2/ECOFIN-2026. Offshore flow audits pending authorization.</p>
            </div>
            <div className="absolute bottom-12 right-[10%] w-60 p-4 bg-white border border-dashed border-bclub-charcoal/30 rotate-[6deg] shadow-sm hidden md:block">
              <p className="font-mono text-[10px] text-amber-600 font-bold uppercase">COUNCIL DISPATCH</p>
              <p className="font-mono text-[9px] text-bclub-slate mt-1">ECOSOC Session: Corporate voting seats confirmed for Big Tech delegates.</p>
            </div>
            <div className="absolute top-28 right-[15%] w-48 p-3 bg-white/70 border border-bclub-charcoal/20 rotate-[14deg] shadow-xs hidden lg:block">
              <p className="font-mono text-[9px] tracking-wider text-bclub-navy font-semibold uppercase">NITW BUSINESS CLUB</p>
              <p className="font-mono text-[8px] text-bclub-slate">BMUN Secretariat Directive 01/26</p>
            </div>
          </div>

          {/* Central Classified Folder */}
          <div className="relative z-10 w-full max-w-2xl bg-[#fdfbf7] border-2 border-bclub-dark rounded-sm p-8 sm:p-12 shadow-[0_20px_50px_rgba(17,19,24,0.12)]">
            
            {/* Folder Tab Effect */}
            <div className="absolute -top-4 left-6 bg-bclub-dark text-bclub-ice px-4 py-1 text-[11px] font-mono tracking-widest uppercase font-semibold">
              CASE FILE: BMUN-2026-X
            </div>

            {/* Red Classified Stamp */}
            <div className="inline-block border-2 border-red-600/80 px-3 py-1 text-red-700 font-mono text-xs sm:text-sm font-black uppercase tracking-[0.25em] rotate-[-2deg] mb-6 shadow-xs">
              TOP SECRET // EYES ONLY
            </div>

            {/* Document Header */}
            <div className="space-y-3 pb-6 border-b border-bclub-charcoal/20">
              <span className="font-mono text-xs text-bclub-slate uppercase tracking-wider block">
                NATIONAL INSTITUTE OF TECHNOLOGY, WARANGAL • BUSINESS CLUB
              </span>
              <h1 className="font-display uppercase text-3xl sm:text-5xl font-extrabold text-bclub-dark tracking-wide leading-tight">
                Business Model United Nations 2026
              </h1>
              <p className="font-sans text-sm sm:text-base text-bclub-charcoal leading-relaxed pt-2">
                You have reached the briefing repository for <strong className="text-bclub-navy font-semibold">BMUN 2026</strong>. 
                Declassify the dossier below to inspect the agendas, factions, and full delegate portfolio rosters for <strong>ECOFIN</strong> and <strong>ECOSOC</strong>.
              </p>
            </div>

            {/* Verification Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-6 text-xs font-mono text-bclub-slate border-b border-bclub-charcoal/15">
              <div>
                <span className="block text-[10px] uppercase text-bclub-charcoal/60">CLEARANCE:</span>
                <span className="font-semibold text-bclub-dark">LEVEL 4 SECRETARIAT</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase text-bclub-charcoal/60">COMMITTEES:</span>
                <span className="font-semibold text-bclub-navy">ECOFIN & ECOSOC</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase text-bclub-charcoal/60">ALLOCATION:</span>
                <span className="font-semibold text-bclub-teal">MANUAL ASSIGNMENT</span>
              </div>
            </div>

            {/* Declassify CTA Button */}
            <div className="pt-8 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="button"
                onClick={() => setUnsealed(true)}
                className="w-full sm:w-auto px-8 py-4 bg-bclub-dark hover:bg-bclub-navy text-bclub-ice font-display uppercase tracking-widest text-lg font-bold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>DECLASSIFY & ACCESS DOSSIER</span>
                <span className="font-mono text-bclub-teal group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <span className="font-mono text-[11px] text-bclub-slate tracking-tight">
                *Clicking authorizes full intelligence briefing
              </span>
            </div>
          </div>
        </div>
      ) : (

        /* ========================================================
           PHASE 2: THE UNSEALED DOSSIER (COMMITTEES + PORTFOLIOS)
           ======================================================== */
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-12 animate-fade-in">
          
          {/* Header Bar with Seal Status */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 bg-white border border-bclub-charcoal/15 shadow-xs">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-bclub-cyan font-bold block">
                  DOSSIER STATUS: UNSEALED // PUBLIC ACCESS
                </span>
                <h2 className="font-display uppercase text-2xl font-bold text-bclub-dark tracking-wide">
                  BMUN 2026 Executive Briefing
                </h2>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setUnsealed(false)}
              className="text-xs font-mono uppercase tracking-wider text-bclub-slate hover:text-bclub-dark border border-bclub-charcoal/20 px-3 py-1.5 transition-colors cursor-pointer"
            >
              [ RE-SEAL DOSSIER ]
            </button>
          </div>

          {/* Committee Switcher Tabs */}
          {/* Committee Switcher Tabs (Responsive & Zero-Scrollbar) */}
          <div className="relative w-full">
            <div className="flex w-full border-b-2 border-bclub-charcoal/20 gap-1 sm:gap-4 overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <button
                type="button"
                onClick={() => {
                  setActiveCommitteeId("ecofin");
                  setSelectedBloc("All");
                  setSearchQuery("");
                }}
                className={`flex-1 sm:flex-initial text-center px-4 sm:px-8 py-3.5 font-display uppercase tracking-wider text-base sm:text-xl font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeCommitteeId === "ecofin"
                    ? "border-bclub-teal text-bclub-dark bg-white shadow-xs"
                    : "border-transparent text-bclub-slate hover:text-bclub-dark hover:bg-white/40"
                }`}
              >
                <span className="block sm:inline">ECOFIN</span>
                <span className="hidden sm:inline"> • Second Committee</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveCommitteeId("ecosoc");
                  setSelectedBloc("All");
                  setSearchQuery("");
                }}
                className={`flex-1 sm:flex-initial text-center px-4 sm:px-8 py-3.5 font-display uppercase tracking-wider text-base sm:text-xl font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeCommitteeId === "ecosoc"
                    ? "border-bclub-teal text-bclub-dark bg-white shadow-xs"
                    : "border-transparent text-bclub-slate hover:text-bclub-dark hover:bg-white/40"
                }`}
              >
                <span className="block sm:inline">ECOSOC</span>
                <span className="hidden sm:inline"> • Algorithmic Labor</span>
              </button>
            </div>

            {/* Mobile Subtitle Cue: Informs user which committee they are actively viewing */}
            <div className="sm:hidden mt-2 flex items-center justify-between px-1 text-[11px] font-mono text-bclub-slate">
              <span>ACTIVE COMMITTEE:</span>
              <span className="font-bold text-bclub-navy uppercase">
                {activeCommitteeId === "ecofin" ? "UNGA-2 ECOFIN" : "ECOSOC SPECIAL SESSION"}
              </span>
            </div>
          </div>

          {/* Committee Executive Briefing Card */}
          <div className="bg-white border border-bclub-charcoal/15 p-6 sm:p-10 shadow-xs space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs text-bclub-cyan font-bold tracking-widest uppercase">
                COMMITTEE SPECIFICATION
              </span>
              <h3 className="font-display uppercase text-2xl sm:text-3xl font-extrabold text-bclub-dark">
                {currentCommittee.fullName}
              </h3>
            </div>

            {/* Agenda Box */}
            <div className="p-5 bg-bclub-ice/70 border-l-4 border-bclub-navy">
              <span className="font-mono text-xs uppercase tracking-wider text-bclub-slate font-bold block mb-1">
                OFFICIAL AGENDA:
              </span>
              <p className="font-sans text-base sm:text-lg font-semibold text-bclub-dark leading-snug">
                "{currentCommittee.agenda}"
              </p>
            </div>

            {/* What Discussion to Expect */}
            <div className="space-y-3 pt-2">
              <h4 className="font-display uppercase tracking-wider text-sm font-bold text-bclub-navy">
                WHAT DISCUSSION TO EXPECT // BATTLEGROUNDS & POWER DYNAMICS
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentCommittee.discussionExpectations.map((item, idx) => (
                  <div key={idx} className="p-4 bg-white border border-bclub-charcoal/10 rounded-xs flex gap-3 text-sm text-bclub-charcoal">
                    <span className="font-mono text-bclub-teal font-bold">{`0${idx + 1}`}</span>
                    <p className="leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Manual Allocation Notice Banner */}
          <div className="p-5 bg-amber-500/10 border-l-4 border-amber-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="font-display uppercase tracking-wider text-sm font-bold text-amber-900">
                PORTFOLIO ALLOCATION DIRECTIVE
              </h4>
              <p className="font-sans text-xs sm:text-sm text-amber-950">
                Country, bloc, and corporate seat allocations are processed <strong>manually</strong> by the BMUN Executive Board based on your application preferences and background.
              </p>
            </div>
            {/* <a
              href="mailto:bclub@nitw.ac.in"
              className="px-4 py-2 bg-bclub-dark text-white font-mono text-xs uppercase tracking-widest hover:bg-bclub-navy transition-colors whitespace-nowrap"
            >
              Contact Secretariat
            </a> */}
          </div>

          {/* Portfolios Section */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-xs text-bclub-slate uppercase tracking-wider">
                  INTELLIGENCE ROSTER
                </span>
                <h3 className="font-display uppercase text-2xl font-bold text-bclub-dark">
                  Delegation Portfolios & Verified Stances ({filteredPortfolios.length} Entries)
                </h3>
              </div>

              {/* Search Bar */}
              <div className="w-full sm:w-72">
                <input
                  type="text"
                  placeholder="Search country, corp, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-white border border-bclub-charcoal/20 focus:border-bclub-teal focus:outline-none font-sans"
                />
              </div>
            </div>

            {/* Bloc Filter Chips */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-bclub-slate uppercase mr-2">Filter Bloc:</span>
              {currentCommittee.blocs.map((bloc) => (
                <button
                  key={bloc}
                  type="button"
                  onClick={() => setSelectedBloc(bloc)}
                  className={`px-3 py-1 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                    selectedBloc === bloc
                      ? "bg-bclub-dark text-white font-bold"
                      : "bg-white border border-bclub-charcoal/15 text-bclub-charcoal hover:border-bclub-teal"
                  }`}
                >
                  {bloc}
                </button>
              ))}
            </div>

            {/* Portfolios Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredPortfolios.map((item) => (
                <div
                  key={item.no}
                  className="bg-white border border-bclub-charcoal/15 p-5 flex flex-col justify-between shadow-xs hover:border-bclub-teal transition-all group"
                >
                  <div>
                    {/* Card Top: Number & Bloc Badge */}
                    <div className="flex items-center justify-between pb-3 border-b border-bclub-charcoal/10 mb-3">
                      <span className="font-mono text-xs text-bclub-slate">
                        NO. {item.no < 10 ? `0${item.no}` : item.no}
                      </span>
                      <span
                        className={`font-mono text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full ${
                          item.bloc === "Corporation"
                            ? "bg-purple-100 text-purple-900 border border-purple-300"
                            : item.bloc === "Financial Hub"
                            ? "bg-blue-100 text-blue-900 border border-blue-300"
                            : item.bloc === "Offshore Hub"
                            ? "bg-emerald-100 text-emerald-900 border border-emerald-300"
                            : item.bloc === "Emerging Power"
                            ? "bg-amber-100 text-amber-900 border border-amber-300"
                            : "bg-bclub-ice text-bclub-navy border border-bclub-charcoal/10"
                        }`}
                      >
                        {item.bloc}
                      </span>
                    </div>

                    {/* Delegation Name */}
                    <h4 className="font-display uppercase text-xl font-bold text-bclub-dark tracking-wide mb-2 group-hover:text-bclub-navy transition-colors">
                      {item.delegation}
                    </h4>

                    {/* Stance */}
                    <p className="font-sans text-xs text-bclub-slate leading-relaxed">
                      {item.stance}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-bclub-charcoal/5 flex items-center justify-between text-[10px] font-mono text-bclub-cyan uppercase font-semibold">
                    <span>PORTFOLIO CONFIRMED</span>
                    <span>OCT 2026</span>
                  </div>
                </div>
              ))}
            </div>

            {filteredPortfolios.length === 0 && (
              <div className="text-center py-16 bg-white border border-dashed border-bclub-charcoal/20">
                <p className="font-mono text-sm text-bclub-slate">No delegations match your search/filter criteria.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}