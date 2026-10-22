"use client";

// Replace with your actual Google Form link
const REGISTRATION_LINK = "https://docs.google.com/spreadsheets/d/1a0XIJiSUG7PDiiFrIOiGbRHOoacOmHyJhS8Dfes9HIk/edit?usp=sharing";

export default function EndScreen({ score, onRestart }: { score: number, onRestart: () => void }) {
  
    const getRank = () => {
        if (score === 5) return { title: "MASTER STRATEGIST", color: "text-emerald-400" };
        if (score >= 3) return { title: "SEASONED HUSTLER", color: "text-bclub-teal" };
        return { title: "MARKET ROOKIE", color: "text-amber-400" };
    };

    const getMotivation = () => {
        if (score === 5) return "Flawless logic. But theory is easy—let's see if you can survive the actual trading floor.";
        if (score >= 3) return "Solid instincts. You've got the basics down, now it's time to build a real empire.";
        return "Rough start, but that's exactly why you need to be there. Come learn the ropes, adapt, and outsmart the competition.";
    };

  const rank = getRank();

  return (
    <div className="max-w-2xl mx-auto text-center space-y-8 animate-in zoom-in-95 duration-500 min-h-[70vh] flex flex-col justify-center items-center relative z-10">
      
      {/* Score Result Card */}
      <div className="w-full bg-bclub-charcoal/60 backdrop-blur-xl border border-bclub-slate/30 p-8 sm:p-12 rounded-2xl shadow-[0_0_50px_rgba(10,39,83,0.5)] mb-4">
        <span className="font-mono text-xs sm:text-sm text-bclub-slate uppercase tracking-widest block mb-6">
          APTITUDE ASSESSMENT COMPLETE
        </span>
        <div className="flex justify-center items-end gap-2 mb-6">
          <span className="font-display text-8xl sm:text-9xl font-black text-white leading-none drop-shadow-lg">{score}</span>
          <span className="font-display text-4xl sm:text-5xl font-bold text-bclub-slate leading-none pb-2">/ 5</span>
        </div>
        <div className="space-y-2">
          <p className="font-mono text-[10px] sm:text-xs text-bclub-ice/60 uppercase tracking-widest">ASSIGNED CORPORATE RANK</p>
          <h3 className={`font-display text-3xl sm:text-4xl font-black tracking-wider ${rank.color} drop-shadow-md`}>
            {rank.title}
          </h3>
        </div>
      </div>
      
        <div className="space-y-4">
            <h2 className="font-display uppercase text-4xl sm:text-5xl font-black tracking-tight text-white mb-2">
                READY TO RUN <br className="hidden sm:block" /> THE MARKET?
            </h2>
            
            {/* Dynamic pitch based on their score */}
            <p className="font-sans text-bclub-ice/90 text-base sm:text-lg max-w-lg mx-auto">
                {getMotivation()}
            </p>
            
            {/* Universal encouragement */}
            <p className="font-mono text-bclub-teal text-xs sm:text-sm font-bold uppercase tracking-widest pt-2">
                Zero prior experience required. Just sharp instincts.
            </p>
        </div>  

      <div className="pt-6 flex flex-col items-center gap-6 w-full sm:w-auto">
        <a
          href={REGISTRATION_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-8 sm:px-12 py-5 bg-bclub-teal hover:bg-bclub-cyan text-bclub-dark font-display uppercase font-extrabold text-base sm:text-lg tracking-wider transition-all shadow-[0_0_30px_rgba(55,183,195,0.4)] hover:shadow-[0_0_50px_rgba(55,183,195,0.6)] hover:-translate-y-1 inline-flex items-center justify-center gap-3"
        >
          <span>REGISTER NOW</span>
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </a>
        
        <button
          onClick={onRestart}
          className="text-xs font-mono text-bclub-slate hover:text-white uppercase tracking-widest transition-colors border-b border-transparent hover:border-white pb-0.5 mt-4"
        >
          ← Restart Briefing
        </button>
      </div>
    </div>
  );
}