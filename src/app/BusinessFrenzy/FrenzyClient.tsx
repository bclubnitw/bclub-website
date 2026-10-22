"use client";

import { useState } from "react";
import Image from "next/image";

const QUIZ_QUESTIONS = [
  {
    question: "It's the night before exams. Your hostel-mate's charger just died and you have the only spare one on the floor. You:",
    options: [
      "Give it free. Friendship is priceless",
      "Pretend you don't have one",
      "Hide it inside your pillow cover",
      "Post 'charger available, best offer wins' on the hostel group"
    ],
    answerIndex: 3,
    feedback: "One charger, ten desperate people. Congratulations, you just ran an auction."
  },
  {
    question: "Why does the 2 AM Maggi from the only open stall cost double the lunchtime price?",
    options: [
      "Night Maggi is cooked with extra love",
      "Inflation only works after midnight",
      "One stall, hundreds of hungry students: low supply, high demand",
      "The noodles are imported from the moon"
    ],
    answerIndex: 2,
    feedback: "Deficiency pushes prices up. Watch for it with the cards too."
  },
  {
    question: "You want a new flagship phone and need to convince your parents. Best pitch?",
    options: [
      "It'll last me four years, so it's cheaper than buying a new budget phone every year",
      "Everyone in my class has one",
      "It has four cameras. I counted.",
      "Silent puppy eyes at the dinner table"
    ],
    answerIndex: 0,
    feedback: "Sell the value, not the specs. (Silent puppy eyes work too, but judges are immune.)"
  },
  {
    question: "You're ordering biryani for 10 friends with ₹1,500. What's the product manager move?",
    options: [
      "Let the loudest friend decide",
      "Order only what you like, they'll adjust",
      "Ask who's veg and who's spice-proof, then split the budget to fit",
      "Order one giant handi and pray"
    ],
    answerIndex: 2,
    feedback: "Know your customer, then build within budget. That's your whole job in this event."
  },
  {
    question: "A new phone launches and suddenly your perfectly fine two-year-old phone feels ancient. What happened?",
    options: [
      "It secretly got slower overnight",
      "A shiny new feature launch made the old one feel less valuable",
      "Mercury is in retrograde",
      "Your phone is jealous and sulking"
    ],
    answerIndex: 1,
    feedback: "New launches change what customers value. Expect the same twist mid-game."
  }
];

const REGISTRATION_LINK = "https://forms.gle/your-google-form-link-here";

export default function FrenzyClient() {
  const [view, setView] = useState<"intro" | "quiz" | "register">("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (index: number) => {
    if (selectedOption !== null) return; // Prevent double clicking
    
    setSelectedOption(index);
    if (index === QUIZ_QUESTIONS[currentQuestion].answerIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setView("register");
    }
  };

  // Determine Rank based on score
  const getRank = () => {
    if (score === 5) return { title: "VISIONARY FOUNDER", color: "text-emerald-400" };
    if (score >= 3) return { title: "VP OF PRODUCT", color: "text-bclub-teal" };
    return { title: "INTERN ANALYST", color: "text-amber-400" };
  };

  if (view === "intro") {
    return (
      // Changed to flex-col to force poster to top on mobile, then row on desktop
      <div className="flex flex-col lg:flex-row gap-12 items-center animate-in fade-in duration-500">
        
        {/* Right/Top: Poster (Prioritized on Mobile) */}
        <div className="w-full lg:w-1/2 order-first lg:order-last flex justify-center mt-6 lg:mt-0">
          <div className="relative aspect-[4/5] w-full max-w-[320px] sm:max-w-sm lg:max-w-md bg-bclub-dark/80 border-2 border-bclub-teal/30 rounded-xl overflow-hidden flex items-center justify-center shadow-[0_0_60px_rgba(55,183,195,0.15)] group">
            {/* Animated Glow Behind Poster */}
            <div className="absolute inset-0 bg-gradient-to-tr from-bclub-navy/40 to-bclub-teal/20 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            <Image
              src="/events/BusinessFrenzy.jpeg"
              alt="Business Frenzy Poster"
              fill
              className="object-contain p-3 relative z-10 transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* Left/Bottom: Briefing */}
        <div className="w-full lg:w-1/2 space-y-8 order-last lg:order-first">
          
          {/* Technozion Spotlight Badge */}
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-bclub-dark border-2 border-bclub-slate/30 shadow-[0_0_15px_rgba(255,255,255,0.05)] rounded-full mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white font-bold">
                OFFICIAL TECHNOZION '26 EVENT
              </span>
            </div>

            <h1 className="font-display uppercase text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none">
              BUSINESS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bclub-teal via-bclub-cyan to-white">
                FRENZY
              </span>
            </h1>
          </div>

          <div className="space-y-6">
            <h3 className="font-mono text-sm sm:text-base text-bclub-teal uppercase tracking-widest font-bold">
              Build it. Trade it. Bid for it.
            </h3>
            
            {/* 2x2 Bento Box Grid for Rules */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Box 1 */}
              <div className="bg-bclub-charcoal/40 border border-bclub-slate/20 p-5 rounded-lg hover:border-bclub-teal/50 transition-colors group">
                <div className="mb-3 text-bclub-teal group-hover:scale-110 transition-transform origin-left">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                </div>
                <h4 className="font-display font-bold text-white uppercase text-sm mb-1 tracking-wide">1. Secure a Market</h4>
                <p className="font-sans text-xs text-bclub-ice/70 leading-relaxed">Choose your battleground: Budget, Mid-range, or Flagship sector.</p>
              </div>

              {/* Box 2 */}
              <div className="bg-bclub-charcoal/40 border border-bclub-slate/20 p-5 rounded-lg hover:border-bclub-teal/50 transition-colors group">
                <div className="mb-3 text-bclub-cyan group-hover:scale-110 transition-transform origin-left">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>
                </div>
                <h4 className="font-display font-bold text-white uppercase text-sm mb-1 tracking-wide">2. Source Tech</h4>
                <p className="font-sans text-xs text-bclub-ice/70 leading-relaxed">Acquire Screen, Battery, Processor, and Camera cards at varying tiers.</p>
              </div>

              {/* Box 3 */}
              <div className="bg-bclub-charcoal/40 border border-bclub-slate/20 p-5 rounded-lg hover:border-bclub-teal/50 transition-colors group">
                <div className="mb-3 text-bclub-teal group-hover:scale-110 transition-transform origin-left">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                </div>
                <h4 className="font-display font-bold text-white uppercase text-sm mb-1 tracking-wide">3. Trade Ruthlessly</h4>
                <p className="font-sans text-xs text-bclub-ice/70 leading-relaxed">Scarcity dictates price. Negotiate components to minimize production cost.</p>
              </div>

              {/* Box 4 */}
              <div className="bg-bclub-charcoal/40 border border-bclub-slate/20 p-5 rounded-lg hover:border-bclub-teal/50 transition-colors group">
                <div className="mb-3 text-amber-400 group-hover:scale-110 transition-transform origin-left">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h4 className="font-display font-bold text-white uppercase text-sm mb-1 tracking-wide">4. Mid-Game Bids</h4>
                <p className="font-sans text-xs text-bclub-ice/70 leading-relaxed">Survive sudden tech drops and market shifts to emerge as the top OEM.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <button
              onClick={() => setView("quiz")}
              className="w-full sm:w-auto px-6 py-3.5 bg-bclub-teal hover:bg-bclub-cyan text-bclub-dark font-display uppercase font-extrabold text-sm tracking-wider transition-all shadow-[0_0_15px_rgba(55,183,195,0.4)] flex items-center justify-center gap-2"
            >
              <span>PROVE YOUR WORTH (QUIZ)</span>
              <span>↗</span>
            </button>
            <button
              onClick={() => setView("register")}
              className="w-full sm:w-auto px-6 py-3.5 bg-transparent border border-bclub-slate/40 hover:border-bclub-teal text-bclub-ice hover:text-white font-mono uppercase text-xs tracking-widest transition-all text-center"
            >
              SKIP & REGISTER
            </button>
          </div>
        </div>

      </div>
    );
  }

  if (view === "quiz") {
    const q = QUIZ_QUESTIONS[currentQuestion];
    const hasAnswered = selectedOption !== null;
    const isCorrect = selectedOption === q.answerIndex;

    return (
      <div className="max-w-3xl mx-auto min-h-[60vh] flex flex-col justify-center animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        {/* Live Score Tracker */}
        <div className="flex items-center justify-between mb-8 font-mono text-xs uppercase tracking-widest border-b border-bclub-slate/30 pb-4">
          <span className="text-bclub-slate">Warm-Up Protocol</span>
          <div className="flex items-center gap-4">
            <span className="text-bclub-teal">Q: {currentQuestion + 1} // {QUIZ_QUESTIONS.length}</span>
            <span className="bg-bclub-dark border border-bclub-slate/40 px-2 py-1 text-white">SCORE: {score}</span>
          </div>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl text-white font-bold tracking-wide mb-8 leading-snug">
          {q.question}
        </h2>

        <div className="space-y-3">
          {q.options.map((opt, idx) => {
            let btnClass = "border-bclub-slate/30 bg-bclub-charcoal/30 hover:border-bclub-teal/50 hover:bg-bclub-navy/30 text-bclub-ice";
            
            if (hasAnswered) {
              if (idx === q.answerIndex) {
                btnClass = "border-emerald-500 bg-emerald-500/10 text-emerald-400 font-semibold shadow-[0_0_15px_rgba(16,185,129,0.15)]";
              } else if (idx === selectedOption) {
                btnClass = "border-red-500/50 bg-red-500/10 text-red-300 opacity-60";
              } else {
                btnClass = "border-bclub-slate/20 bg-transparent opacity-40";
              }
            }

            return (
              <button
                key={idx}
                disabled={hasAnswered}
                onClick={() => handleOptionSelect(idx)}
                className={`w-full text-left p-4 sm:p-5 border rounded-xs transition-all font-sans text-sm sm:text-base ${btnClass}`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {hasAnswered && (
          <div className="mt-8 p-5 border border-bclub-teal/30 bg-bclub-navy/40 rounded-xs animate-in fade-in duration-300">
            <span className={`font-mono text-xs uppercase tracking-widest font-bold block mb-2 ${isCorrect ? "text-emerald-400" : "text-amber-400"}`}>
              {isCorrect ? "CORRECT ASSESSMENT" : "MARKET CORRECTION"}
            </span>
            <p className="font-sans text-white text-sm">
              {q.feedback}
            </p>
          </div>
        )}

        {hasAnswered && (
          <div className="mt-8 flex justify-end">
            <button
              onClick={handleNext}
              className="px-8 py-3 bg-white hover:bg-gray-200 text-bclub-dark font-display uppercase font-extrabold text-sm tracking-wider transition-all flex items-center gap-2 shadow-[4px_4px_0px_#37b7c3] hover:shadow-[6px_6px_0px_#37b7c3] hover:-translate-y-0.5 active:shadow-[2px_2px_0px_#37b7c3] active:translate-y-0.5"
            >
              {currentQuestion < QUIZ_QUESTIONS.length - 1 ? "NEXT QUESTION ↗" : "COMPLETE BRIEFING ↗"}
            </button>
          </div>
        )}
      </div>
    );
  }

  // Register View (End Screen)
  const rank = getRank();

  return (
    <div className="max-w-2xl mx-auto text-center space-y-8 animate-in zoom-in-95 duration-500 min-h-[60vh] flex flex-col justify-center items-center">
      
      {/* Score Result Card */}
      <div className="w-full bg-bclub-charcoal/40 border border-bclub-slate/30 p-8 rounded-xl shadow-[0_0_40px_rgba(10,39,83,0.3)] mb-4">
        <span className="font-mono text-xs text-bclub-slate uppercase tracking-widest block mb-4">
          APTITUDE ASSESSMENT COMPLETE
        </span>
        <div className="flex justify-center items-end gap-2 mb-4">
          <span className="font-display text-7xl font-black text-white leading-none">{score}</span>
          <span className="font-display text-4xl font-bold text-bclub-slate leading-none">/ 5</span>
        </div>
        <div className="space-y-1">
          <p className="font-mono text-[10px] text-bclub-ice/60 uppercase tracking-widest">ASSIGNED CORPORATE RANK</p>
          <h3 className={`font-display text-2xl font-black tracking-wider ${rank.color}`}>
            {rank.title}
          </h3>
        </div>
      </div>
      
      <div>
        <h2 className="font-display uppercase text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
          READY TO RUN <br className="hidden sm:block" /> THE MARKET?
        </h2>
        <p className="font-sans text-bclub-ice/80 text-lg">
          Secure your company's spot on the trading floor.
        </p>
      </div>

      <div className="pt-2 flex flex-col items-center gap-6 w-full sm:w-auto">
        <a
          href={REGISTRATION_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-10 py-4 bg-bclub-teal hover:bg-bclub-cyan text-bclub-dark font-display uppercase font-extrabold text-base tracking-wider transition-all shadow-[0_0_20px_rgba(55,183,195,0.4)] hover:shadow-[0_0_35px_rgba(55,183,195,0.6)] hover:-translate-y-1 inline-flex items-center justify-center gap-3"
        >
          <span>OFFICIAL REGISTRATION PORTAL</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </a>
        
        <button
          onClick={() => {
            setScore(0);
            setCurrentQuestion(0);
            setSelectedOption(null);
            setView("intro");
          }}
          className="text-xs font-mono text-bclub-slate hover:text-white uppercase tracking-widest transition-colors border-b border-transparent hover:border-white pb-0.5"
        >
          ← Restart Briefing
        </button>
      </div>
    </div>
  );
}