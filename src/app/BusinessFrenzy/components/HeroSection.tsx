"use client";
import { useState } from "react";

const PHASES = [
  { 
    id: "01", 
    short: "MARKET", 
    title: "Pick Your Battlefield", 
    desc: "Are you building for the masses, or targeting the elite? Claim your demographic: Budget, Mid-Range, or Flagship." 
  },
  { 
    id: "02", 
    short: "SOURCE", 
    title: "Acquire The Tech", 
    desc: "Secure the core components: Screen, Battery, Processor, and Camera. Each exists in 3 quality tiers. Choose wisely." 
  },
  { 
    id: "03", 
    short: "TRADE", 
    title: "Ruthless Negotiation", 
    desc: "Scarcity drives the market. Negotiate with rival OEMs to lower production costs. What you pay is what it costs." 
  },
  { 
    id: "04", 
    short: "SHOCK", 
    title: "Survive The Drop", 
    desc: "Mid-game tech drops. Sudden consumer shifts. Adapt your manufacturing strategy immediately or face bankruptcy." 
  }
];

export default function HeroSection({ 
  onStartQuiz, 
  onSkip 
}: { 
  onStartQuiz: () => void; 
  onSkip: () => void;
}) {
  const [activePhase, setActivePhase] = useState(0);

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
      <div className="text-center mb-16 sm:mb-24 relative">
        <h1 className="relative font-display uppercase text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none drop-shadow-2xl">
          BUSINESS <br />
          <span className="text-transparent bg-clip-text bg-linear-to-br from-bclub-teal via-bclub-cyan to-white">
            FRENZY
          </span>
        </h1>
        <p className="mt-6 font-sans text-bclub-ice/90 text-base sm:text-xl max-w-2xl mx-auto font-medium">
          Build it. Trade it. Bid for it. <br className="sm:hidden"/> Run a smartphone company for a day.
        </p>
      </div>

      {/* Dynamic Terminal: The Dry Run */}
      <div className="w-full max-w-4xl mx-auto bg-bclub-dark/60 backdrop-blur-xl border border-bclub-slate/20 rounded-2xl overflow-hidden mb-16 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
        <div className="flex items-center px-4 py-3 bg-bclub-charcoal/80 border-b border-bclub-slate/20">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="ml-4 font-mono text-[10px] uppercase tracking-widest text-bclub-slate font-bold">
            Simulation Overview // Booting Sequence
          </span>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Left: Phase Navigation */}
          <div className="w-full md:w-1/3 bg-bclub-charcoal/30 p-4 border-r border-bclub-slate/20 flex flex-row md:flex-col gap-2 overflow-x-auto">
            {PHASES.map((phase, idx) => {
              const isActive = activePhase === idx;
              return (
                <button
                  key={phase.id}
                  onClick={() => setActivePhase(idx)}
                  className={`flex items-center gap-3 p-3 sm:p-4 rounded-lg text-left transition-all shrink-0 md:shrink border ${
                    isActive 
                      ? "bg-bclub-navy/50 border-bclub-teal/50 shadow-[0_0_15px_rgba(55,183,195,0.1)]" 
                      : "bg-transparent border-transparent hover:bg-bclub-charcoal/50 text-bclub-slate hover:text-white"
                  }`}
                >
                  <span className={`font-mono text-xs sm:text-sm font-bold ${isActive ? "text-bclub-teal" : "text-bclub-slate"}`}>
                    {phase.id}
                  </span>
                  <span className={`font-display uppercase tracking-wider text-sm sm:text-base font-bold ${isActive ? "text-white" : ""}`}>
                    {phase.short}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Display Window */}
          <div className="w-full md:w-2/3 p-6 sm:p-10 flex flex-col justify-center min-h-[300px]">
            
            {/* Changing Visuals */}
            <div className="h-32 mb-8 flex items-center justify-center">
              {activePhase === 0 && (
                <div className="flex items-end gap-4 h-full">
                  <div className="w-8 h-1/3 bg-bclub-slate/20 rounded-t-sm" />
                  <div className="w-8 h-2/3 bg-bclub-teal/50 rounded-t-sm border border-bclub-teal shadow-[0_0_15px_rgba(55,183,195,0.4)]" />
                  <div className="w-8 h-full bg-bclub-slate/20 rounded-t-sm" />
                </div>
              )}
              {activePhase === 1 && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-12 h-12 rounded bg-bclub-navy/50 border border-bclub-cyan flex items-center justify-center shadow-[0_0_10px_rgba(55,183,195,0.3)]">
                    <svg className="w-6 h-6 text-bclub-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>
                  </div>
                  <div className="w-12 h-12 rounded bg-bclub-navy/50 border border-bclub-cyan flex items-center justify-center shadow-[0_0_10px_rgba(55,183,195,0.3)]">
                    <svg className="w-6 h-6 text-bclub-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                  </div>
                  <div className="w-12 h-12 rounded bg-bclub-navy/50 border border-bclub-cyan flex items-center justify-center shadow-[0_0_10px_rgba(55,183,195,0.3)]">
                    <svg className="w-6 h-6 text-bclub-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/></svg>
                  </div>
                  <div className="w-12 h-12 rounded bg-bclub-navy/50 border border-bclub-cyan flex items-center justify-center shadow-[0_0_10px_rgba(55,183,195,0.3)]">
                    <svg className="w-6 h-6 text-bclub-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  </div>
                </div>
              )}
              {activePhase === 2 && (
                <div className="relative w-32 h-16 flex items-center justify-center">
                  <svg className="w-12 h-12 text-emerald-400 absolute left-0 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                  <svg className="w-12 h-12 text-red-400 absolute right-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17H3m0 0v-8m0 8l8-8 4 4 6-6"/></svg>
                </div>
              )}
              {activePhase === 3 && (
                <div className="w-full max-w-[200px] border-2 border-red-500/50 bg-red-500/10 rounded-sm p-4 text-center animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                  <span className="font-mono text-xs text-red-400 tracking-[0.2em] font-bold">SYSTEM OVERRIDE</span>
                </div>
              )}
            </div>

            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <span className="font-mono text-xs text-bclub-teal font-bold mb-2 block">PHASE {PHASES[activePhase].id}</span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide mb-3">
                {PHASES[activePhase].title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-bclub-ice/80 leading-relaxed">
                {PHASES[activePhase].desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Hook & CTAs */}
      <div className="flex flex-col items-center max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-2 mb-2">
          <span className="font-mono text-[10px] sm:text-xs text-amber-500 font-bold tracking-widest uppercase block bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded inline-block">
            WARNING: THE TRADING FLOOR IS RUTHLESS
          </span>
          <p className="font-sans text-sm sm:text-base text-white">
            <strong>Do you have it in you?</strong>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onStartQuiz}
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-200 text-bclub-dark cursor-pointer font-display uppercase font-extrabold text-sm sm:text-base tracking-widest transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:-translate-y-1 flex items-center justify-center gap-3 rounded-sm"
          >
            <span>START APTITUDE CALIBRATION</span>
            <span>↗</span>
          </button>
          <button
            onClick={onSkip}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-bclub-slate/40 hover:border-white text-bclub-slate hover:text-white font-mono uppercase text-xs tracking-widest transition-all text-center cursor-pointer backdrop-blur-sm rounded-sm"
          >
            Skip & Register
          </button>
        </div>
      </div>
    </div>
  );
}