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

// Replace with your actual Google Form link
const REGISTRATION_LINK = "https://docs.google.com/spreadsheets/d/1a0XIJiSUG7PDiiFrIOiGbRHOoacOmHyJhS8Dfes9HIk/edit?usp=sharing";

export default function FrenzyClient() {
  const [view, setView] = useState<"intro" | "quiz" | "register">("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionSelect = (index: number) => {
    if (selectedOption === null) setSelectedOption(index);
  };

  const handleNext = () => {
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
    } else {
      setView("register");
    }
  };

  if (view === "intro") {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-in fade-in duration-500">
        {/* Left: Briefing */}
        <div className="space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-bclub-navy/70 border border-bclub-teal/30 rounded-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-bclub-teal animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-bclub-teal font-semibold">
                TECHNOZION '26 // OCT 30
              </span>
            </div>
            <h1 className="font-display uppercase text-5xl sm:text-6xl font-black tracking-tight text-white leading-none">
              BUSINESS <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-bclub-teal via-bclub-cyan to-white">
                FRENZY
              </span>
            </h1>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-sm text-bclub-teal uppercase tracking-widest font-bold">
              Build it. Trade it. Bid for it.
            </h3>
            <p className="font-sans text-bclub-ice/80 text-lg leading-relaxed">
              Run a smartphone company for a day. Best phone at the smartest cost wins.
            </p>
            <ul className="font-sans text-sm text-bclub-ice/70 space-y-3 bg-bclub-charcoal/30 border border-bclub-slate/20 p-5 rounded-xs">
              <li><strong className="text-white">1. Get a market:</strong> Budget, Mid-range or Flagship.</li>
              <li><strong className="text-white">2. Get four cards:</strong> Screen, Battery, Processor, Camera, each in three quality levels.</li>
              <li><strong className="text-white">3. Trade smart:</strong> What you pay is what your phone costs, and scarce cards cost more.</li>
              <li><strong className="text-white">4. Bid for new tech:</strong> Fresh features drop mid-game. Flagship and Mid-range get extra cash; Budget teams earn by selling their premium cards.</li>
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => setView("quiz")}
              className="px-6 py-3 bg-bclub-teal hover:bg-bclub-cyan text-bclub-dark font-display uppercase font-extrabold text-sm tracking-wider transition-all shadow-[0_0_15px_rgba(55,183,195,0.4)] flex items-center gap-2"
            >
              <span>START WARM-UP QUIZ</span>
              <span>↗</span>
            </button>
            <button
              onClick={() => setView("register")}
              className="px-6 py-3 bg-transparent border border-bclub-slate/40 hover:border-bclub-teal text-bclub-ice hover:text-white font-mono uppercase text-xs tracking-wider transition-all"
            >
              SKIP & REGISTER
            </button>
          </div>
        </div>

        {/* Right: Poster */}
        <div className="relative aspect-4/5 w-full max-w-md mx-auto lg:ml-auto bg-bclub-dark/90 border border-bclub-slate/30 rounded-xs overflow-hidden flex items-center justify-center shadow-[0_0_40px_rgba(10,39,83,0.5)]">
          <Image
            src="/events/BusinessFrenzy.jpeg"
            alt="Business Frenzy Poster"
            fill
            className="object-contain p-2 relative z-10"
            priority
          />
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
        <div className="flex items-center justify-between mb-8 font-mono text-xs uppercase tracking-widest text-bclub-slate">
          <span>Warm-Up Protocol</span>
          <span className="text-bclub-teal">Question {currentQuestion + 1} // {QUIZ_QUESTIONS.length}</span>
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
              className="px-8 py-3 bg-white hover:bg-gray-200 text-bclub-dark font-display uppercase font-extrabold text-sm tracking-wider transition-all flex items-center gap-2"
            >
              {currentQuestion < QUIZ_QUESTIONS.length - 1 ? "NEXT QUESTION ↗" : "COMPLETE BRIEFING ↗"}
            </button>
          </div>
        )}
      </div>
    );
  }

  // Register View
  return (
    <div className="max-w-2xl mx-auto text-center space-y-8 animate-in zoom-in-95 duration-500 min-h-[50vh] flex flex-col justify-center items-center">
      <div className="w-16 h-16 rounded-full bg-bclub-teal/20 flex items-center justify-center border border-bclub-teal/40 mx-auto">
        <svg className="w-8 h-8 text-bclub-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <div>
        <h2 className="font-display uppercase text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
          READY TO RUN <br className="hidden sm:block" /> THE MARKET?
        </h2>
        <p className="font-sans text-bclub-ice/80 text-lg">
          Secure your company's spot on the trading floor.
        </p>
      </div>

      <div className="pt-4 flex flex-col items-center gap-4 w-full sm:w-auto">
        <a
          href={REGISTRATION_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-8 py-4 bg-bclub-teal hover:bg-bclub-cyan text-bclub-dark font-display uppercase font-extrabold text-base tracking-wider transition-all shadow-[0_0_20px_rgba(55,183,195,0.4)] hover:shadow-[0_0_30px_rgba(55,183,195,0.6)] hover:-translate-y-1 inline-flex items-center justify-center gap-2"
        >
          <span>OFFICIAL REGISTRATION PORTAL</span>
          <span>↗</span>
        </a>
        
        <button
          onClick={() => setView("intro")}
          className="text-xs font-mono text-bclub-slate hover:text-white uppercase tracking-widest transition-colors mt-4"
        >
          ← Return to Briefing
        </button>
      </div>
    </div>
  );
}