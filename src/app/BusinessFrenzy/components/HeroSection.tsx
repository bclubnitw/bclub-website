"use client";

export default function HeroSection({ 
  onStartQuiz, 
  onSkip 
}: { 
  onStartQuiz: () => void; 
  onSkip: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] animate-in fade-in zoom-in-95 duration-700">
      
      {/* The Blockbuster Technozion Spotlight */}
      <div className="text-center space-y-4">
        <p className="font-mono text-xs sm:text-sm text-bclub-slate uppercase tracking-[0.3em] font-bold">
          This October 30th • Technozion '26
        </p>
        <div className="w-px h-12 bg-linear-to-b from-bclub-teal to-transparent mx-auto" />
      </div>

      {/* Main Title */}
      <div className="text-center mb-16 relative">
        {/* <h1 className="font-display uppercase text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-none mix-blend-overlay opacity-20 absolute inset-0 -top-8 sm:-top-12 blur-sm pointer-events-none">
          FRENZY
        </h1> */}
        <h1 className="relative font-display uppercase text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none drop-shadow-2xl">
          BUSINESS <br />
          <span className="text-transparent bg-clip-text bg-linear-to-br from-bclub-teal via-bclub-cyan to-white">
            FRENZY
          </span>
        </h1>
        <p className="mt-6 font-sans text-bclub-ice/80 text-lg sm:text-xl max-w-2xl mx-auto">
          Build it. Trade it. Bid for it. <br className="sm:hidden"/> Run a smartphone company for a day.
        </p>
      </div>

      {/* The Dry Run - Visual Mechanics */}
      <div className="w-full max-w-4xl mx-auto space-y-8 mb-20 relative">
        {/* Connecting Line */}
        <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-bclub-teal/50 via-bclub-slate/20 to-transparent -translate-x-1/2 hidden sm:block" />

        <MechanicBlock 
          step="01"
          title="Pick Your Battlefield"
          desc="Are you building for the masses, or targeting the elite? Choose your market segment: Budget, Mid-Range, or Flagship."
          visual="📊 Market Segment"
          align="left"
        />
        <MechanicBlock 
          step="02"
          title="Source The Tech"
          desc="Secure the core components: Screen, Battery, Processor, and Camera. Each comes in 3 quality tiers. Choose wisely."
          visual="🔋 📱 ⚙️ 📷"
          align="right"
        />
        <MechanicBlock 
          step="03"
          title="Ruthless Trading"
          desc="Scarcity drives the price. Negotiate with other teams to lower your production costs. What you pay is what it costs."
          visual="🤝 Trade & Negotiate"
          align="left"
        />
        <MechanicBlock 
          step="04"
          title="Survive The Drop"
          desc="Mid-game shocks. New tech drops. Consumer demands shift. Adapt your strategy or go bankrupt."
          visual="📉 Market Shock"
          align="right"
        />
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-6 w-full max-w-md">
        <button
          onClick={onStartQuiz}
          className="w-full px-8 py-4 bg-bclub-teal hover:bg-bclub-cyan text-bclub-dark cursor-pointer font-display uppercase font-extrabold text-base tracking-widest transition-all shadow-[0_0_30px_rgba(55,183,195,0.3)] hover:shadow-[0_0_50px_rgba(55,183,195,0.5)] hover:-translate-y-1 flex items-center justify-center gap-3"
        >
          <span>PROVE YOUR WORTH</span>
          <span>↗</span>
        </button>
        <button
          onClick={onSkip}
          className="w-full px-8 py-4 bg-transparent border border-bclub-slate/40 hover:border-white text-bclub-slate hover:text-white font-mono uppercase text-xs tracking-widest transition-all text-center cursor-pointer backdrop-blur-sm"
        >
          SKIP WARM-UP
        </button>
      </div>
    </div>
  );
}

// Helper component for the alternating mechanic blocks
function MechanicBlock({ step, title, desc, visual, align }: { step: string, title: string, desc: string, visual: string, align: 'left' | 'right' }) {
  const isLeft = align === 'left';
  
  return (
    <div className={`relative flex flex-col sm:flex-row items-center gap-6 sm:gap-12 w-full ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
      {/* Visual / Icon Box */}
      <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
        <div className={`w-full sm:w-64 aspect-video bg-bclub-charcoal/40 backdrop-blur-md border border-bclub-teal/20 rounded-xl flex items-center justify-center text-2xl shadow-lg ${isLeft ? 'sm:ml-auto' : 'sm:mr-auto'}`}>
          <span className="font-mono text-bclub-cyan/70 tracking-widest text-sm sm:text-base">{visual}</span>
        </div>
      </div>

      {/* Center Node (Hidden on Mobile) */}
      <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-bclub-dark border-2 border-bclub-teal rounded-full items-center justify-center z-10 shadow-[0_0_15px_rgba(55,183,195,0.4)]">
        <span className="font-mono text-xs font-bold text-white">{step}</span>
      </div>

      {/* Text Content */}
      <div className={`w-full sm:w-1/2 text-center sm:text-left ${!isLeft && 'sm:text-right'}`}>
        <span className="sm:hidden font-mono text-xs text-bclub-teal font-bold mb-2 block">STEP {step}</span>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide mb-3">{title}</h3>
        <p className="font-sans text-sm sm:text-base text-bclub-ice/70 leading-relaxed max-w-sm mx-auto sm:mx-0">{desc}</p>
      </div>
    </div>
  );
}