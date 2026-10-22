"use client";
import { useState } from "react";

const PHASES = [
  { 
    id: "01", 
    short: "DEMOGRAPHIC", 
    title: "Select Target Market", 
    desc: "Are you building phones for the masses or the 1%? Lock in your segment: Budget, Mid-Range, or Flagship. This dictates your entire capital strategy." 
  },
  { 
    id: "02", 
    short: "SUPPLY CHAIN", 
    title: "Procure Components", 
    desc: "A phone needs a Screen, Battery, Processor, and Camera. Secure these 4 core components across 3 quality tiers before supplies run dry." 
  },
  { 
    id: "03", 
    short: "THE PIT", 
    title: "Floor Trading", 
    desc: "Scarcity drives the price. Negotiate with rival OEMs on the trading floor to acquire missing components. What you pay is your final production cost." 
  },
  { 
    id: "04", 
    short: "VOLATILITY", 
    title: "Survive Tech Drops", 
    desc: "Mid-game market shocks alter consumer demand. Sell premium inventory for quick capital or upgrade your flagship specs to survive the shift." 
  }
];

export default function HeroSection({ 
  onStartQuiz, 
  registration_link
}: { 
  onStartQuiz: () => void; 
  registration_link: string | null
}) {
  const [activePhase, setActivePhase] = useState(0);

  const nextPhase = () => setActivePhase((prev) => Math.min(prev + 1, 3));
  const prevPhase = () => setActivePhase((prev) => Math.max(prev - 1, 0));

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] animate-in fade-in zoom-in-95 duration-700 pt-8 sm:pt-0">
      
      {/* The Blockbuster Technozion Spotlight */}
      <div className="text-center space-y-4 mb-8">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-bclub-dark/80 backdrop-blur-md border border-bclub-teal/30 shadow-[0_0_15px_rgba(55,183,195,0.15)] rounded-full">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bclub-teal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-bclub-cyan"></span>
          </span>
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white font-bold">
            OCTOBER 30TH • TECHNOZION '26
          </span>
        </div>
      </div>

      {/* Main Title */}
      {/* Main Title */}
      <div className="text-center mb-12 sm:mb-20 relative">
        <style>{`
          @keyframes cinematicReveal {
            0% { opacity: 0; transform: translateY(30px) scale(0.95); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
          .anim-title {
            animation: cinematicReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .anim-subtitle {
            opacity: 0; /* Keeps it hidden before delay starts */
            animation: cinematicReveal 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
          }
        `}</style>

        <h1 className="anim-title relative font-display uppercase text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none drop-shadow-2xl">
          BUSINESS <br />
          <span className="text-transparent bg-clip-text bg-linear-to-br from-bclub-teal via-bclub-cyan to-white">
            FRENZY
          </span>
        </h1>
        <p className="anim-subtitle mt-6 font-sans text-bclub-ice/90 text-base sm:text-xl max-w-2xl mx-auto font-medium">
          Build it. Trade it. Bid for it. <br className="sm:hidden"/> Run a <strong className="text-white">smartphone</strong> company for a day.
        </p>
      </div>

      {/* Dynamic Terminal: The Smartphone OEM Simulation */}
      <div className="w-full max-w-4xl mx-auto bg-bclub-dark/80 backdrop-blur-xl border border-bclub-slate/20 rounded-2xl overflow-hidden mb-16 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
        
        {/* Terminal Header */}
        <div className="flex items-center px-4 py-3 bg-bclub-charcoal/90 border-b border-bclub-slate/30">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="ml-4 font-mono text-[10px] uppercase tracking-widest text-bclub-slate font-bold hidden sm:inline-block">
            HOW IT WORKS // EVENT STAGES
            </span>
        </div>

        {/* Step Progress Bar (Solves mobile overflow) */}
        <div className="grid grid-cols-4 bg-bclub-charcoal/40 border-b border-bclub-slate/20">
          {PHASES.map((phase, idx) => {
            const isActive = activePhase === idx;
            return (
              <button
                key={phase.id}
                onClick={() => setActivePhase(idx)}
                className={`py-3 sm:py-4 px-1 text-center border-b-2 transition-colors flex flex-col items-center justify-center gap-1 ${
                  isActive 
                    ? "border-bclub-teal bg-bclub-teal/5" 
                    : "border-transparent hover:bg-bclub-charcoal/50"
                }`}
              >
                <span className={`font-mono text-[10px] sm:text-xs font-bold ${isActive ? "text-bclub-teal" : "text-bclub-slate"}`}>
                  PHASE {phase.id}
                </span>
                <span className={`font-display text-[10px] sm:text-sm uppercase tracking-wider hidden sm:block ${isActive ? "text-white" : "text-bclub-slate"}`}>
                  {phase.short}
                </span>
              </button>
            );
          })}
        </div>

        {/* Display Window */}
        <div className="flex flex-col md:flex-row p-6 sm:p-10 gap-8 sm:gap-12 min-h-[380px] items-center">
          
          {/* Left: Changing Visuals */}
          <div className="w-full md:w-1/2 flex items-center justify-center h-48 sm:h-full">
            {activePhase === 0 && (
              <div className="flex items-end gap-6 h-32">
                <div className="w-12 h-1/2 bg-bclub-slate/20 border border-bclub-slate/30 rounded-md relative flex items-center justify-center">
                  <span className="font-mono text-[8px] text-bclub-slate uppercase -rotate-90">Budget</span>
                </div>
                <div className="w-12 h-3/4 bg-bclub-slate/20 border border-bclub-slate/30 rounded-md relative flex items-center justify-center">
                  <span className="font-mono text-[8px] text-bclub-slate uppercase -rotate-90">Mid-Tier</span>
                </div>
                <div className="w-16 h-full bg-bclub-teal/20 border border-bclub-teal rounded-md shadow-[0_0_20px_rgba(55,183,195,0.3)] relative flex items-center justify-center">
                  <span className="font-mono text-[10px] text-bclub-teal uppercase -rotate-90 font-bold">Flagship</span>
                </div>
              </div>
            )}
            {activePhase === 1 && (
              <div className="grid grid-cols-2 gap-4 w-full max-w-[240px]">
                <div className="aspect-square rounded border border-bclub-cyan/50 bg-bclub-cyan/10 flex flex-col items-center justify-center shadow-[0_0_15px_rgba(55,183,195,0.15)] relative">
                  <span className="absolute top-1 right-1 font-mono text-[8px] text-bclub-cyan">T1</span>
                  <svg className="w-8 h-8 text-bclub-cyan mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>
                  <span className="font-mono text-[9px] uppercase text-bclub-ice/70">Processor</span>
                </div>
                <div className="aspect-square rounded border border-bclub-slate/30 bg-bclub-charcoal/50 flex flex-col items-center justify-center relative">
                  <span className="absolute top-1 right-1 font-mono text-[8px] text-bclub-slate">T3</span>
                  <svg className="w-8 h-8 text-bclub-slate mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                  <span className="font-mono text-[9px] uppercase text-bclub-slate">Display</span>
                </div>
                <div className="aspect-square rounded border border-bclub-slate/30 bg-bclub-charcoal/50 flex flex-col items-center justify-center relative">
                  <span className="absolute top-1 right-1 font-mono text-[8px] text-bclub-slate">T2</span>
                  <svg className="w-8 h-8 text-bclub-slate mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/></svg>
                  <span className="font-mono text-[9px] uppercase text-bclub-slate">Camera</span>
                </div>
                <div className="aspect-square rounded border border-bclub-cyan/50 bg-bclub-cyan/10 flex flex-col items-center justify-center shadow-[0_0_15px_rgba(55,183,195,0.15)] relative">
                  <span className="absolute top-1 right-1 font-mono text-[8px] text-bclub-cyan">T1</span>
                  <svg className="w-8 h-8 text-bclub-cyan mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  <span className="font-mono text-[9px] uppercase text-bclub-ice/70">Battery</span>
                </div>
              </div>
            )}
            {activePhase === 2 && (
              <div className="w-full max-w-60 space-y-3">
                <div className="flex justify-between items-center bg-emerald-500/10 border border-emerald-500/30 p-3 rounded">
                  <span className="font-mono text-xs text-emerald-400">BID: T1 CPU</span>
                  <span className="font-mono text-sm text-emerald-300 font-bold">₹ 4,500</span>
                </div>
                <div className="flex justify-between items-center bg-red-500/10 border border-red-500/30 p-3 rounded">
                  <span className="font-mono text-xs text-red-400">ASK: T3 CAM</span>
                  <span className="font-mono text-sm text-red-300 font-bold">₹ 1,200</span>
                </div>
                <div className="h-px w-full bg-bclub-slate/20 my-2" />
                <div className="flex justify-between items-center px-2">
                  <span className="font-mono text-[10px] text-bclub-slate uppercase">Est. Production Cost</span>
                  <span className="font-mono text-xs text-white">₹ 12,400</span>
                </div>
              </div>
            )}
            {activePhase === 3 && (
              <div className="w-full max-w-60 border-l-2 border-red-500 bg-linear-to-r from-red-500/20 to-transparent p-4 animate-pulse">
                <span className="font-mono text-[10px] text-red-400 tracking-[0.2em] font-bold block mb-1">MARKET SHOCK</span>
                <span className="font-display text-white text-lg uppercase tracking-wider leading-tight block">
                  New Camera Tech Unlocked
                </span>
                <span className="font-sans text-[10px] text-bclub-ice/70 mt-2 block">
                  Flagship valuations increased. Budget valuations dropped. Adjust inventory.
                </span>
              </div>
            )}
          </div>

          {/* Right: Text Content & Controls */}
          <div className="w-full md:w-1/2 flex flex-col justify-center animate-in fade-in slide-in-from-right-4 duration-300">
            <span className="font-mono text-[10px] sm:text-xs text-bclub-teal font-bold mb-2 block uppercase tracking-widest">
              PHASE {PHASES[activePhase].id} // {PHASES[activePhase].short}
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-bold text-white uppercase tracking-wide mb-4 leading-tight">
              {PHASES[activePhase].title}
            </h3>
            <p className="font-sans text-sm sm:text-base text-bclub-ice/80 leading-relaxed min-h-20">
              {PHASES[activePhase].desc}
            </p>

            {/* Next / Prev Controls */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-bclub-slate/20">
              <button 
                onClick={prevPhase} 
                disabled={activePhase === 0}
                className="w-10 h-10 rounded-full border border-bclub-slate/40 flex items-center justify-center text-bclub-ice hover:text-white hover:border-bclub-teal hover:bg-bclub-teal/10 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:border-bclub-slate/40 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
              </button>
              <button 
                onClick={nextPhase} 
                disabled={activePhase === 3}
                className="flex-1 h-10 rounded bg-bclub-slate/10 border border-bclub-slate/30 text-xs font-mono uppercase tracking-widest text-bclub-ice hover:bg-bclub-teal/20 hover:text-white hover:border-bclub-teal disabled:opacity-30 disabled:hover:bg-bclub-slate/10 disabled:hover:border-bclub-slate/30 transition-all flex items-center justify-center gap-2"
              >
                <span>{activePhase === 3 ? "Simulation Complete" : "Next Phase"}</span>
                {activePhase !== 3 && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* The Hook & CTAs */}
      <div className="flex flex-col items-center max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-3 mb-2">
          <span className="font-mono text-[10px] sm:text-xs text-amber-500 font-bold tracking-widest uppercase block bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded inline-block">
            WARNING: THE TRADING FLOOR IS RUTHLESS
          </span>
          <p className="font-sans text-sm sm:text-base text-bclub-ice/90">
            Are you a <strong className="text-white">Master Strategist</strong> or just winging it? Take this quick warm-up quiz to test your basic business logic and secure your starting rank.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onStartQuiz}
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-200 text-bclub-dark cursor-pointer font-display uppercase font-extrabold text-sm sm:text-base tracking-widest transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:-translate-y-1 flex items-center justify-center gap-3 rounded-sm"
          >
            <span>TAKE WARM-UP QUIZ</span>
            <span>↗</span>
          </button>
          {registration_link &&
            <a
              href={registration_link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-bclub-slate/40 hover:border-white text-bclub-slate hover:text-white font-mono uppercase text-xs tracking-widest transition-all text-center cursor-pointer backdrop-blur-sm rounded-sm"
              >
                Skip & Register
            </a>
          }
        </div>
      </div>
    </div>
  );
}