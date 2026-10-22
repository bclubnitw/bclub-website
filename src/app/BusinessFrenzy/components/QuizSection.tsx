"use client";

import { useState } from "react";

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

export default function QuizSection({ onComplete }: { onComplete: (score: number) => void }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (index: number) => {
    if (selectedOption !== null) return; 
    
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
      onComplete(score);
    }
  };

  const q = QUIZ_QUESTIONS[currentQuestion];
  const hasAnswered = selectedOption !== null;
  const isCorrect = selectedOption === q.answerIndex;

  return (
    <div className="max-w-3xl mx-auto min-h-[70vh] flex flex-col justify-center animate-in fade-in slide-in-from-bottom-8 duration-500 relative z-10 backdrop-blur-sm bg-bclub-dark/40 p-6 sm:p-10 rounded-2xl border border-bclub-slate/20">
      
      {/* Live Score Tracker */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 font-mono text-xs uppercase tracking-widest border-b border-bclub-slate/30 pb-4 gap-4">
        <span className="text-bclub-slate">Warm-Up Protocol</span>
        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
          <span className="text-bclub-teal">Q: {currentQuestion + 1} / {QUIZ_QUESTIONS.length}</span>
          <span className="bg-bclub-charcoal/80 border border-bclub-slate/40 px-3 py-1.5 text-white rounded-sm">SCORE: {score}</span>
        </div>
      </div>

      <h2 className="font-display text-2xl sm:text-3xl text-white font-bold tracking-wide mb-8 leading-snug">
        {q.question}
      </h2>

      <div className="space-y-3">
        {q.options.map((opt, idx) => {
          let btnClass = "border-bclub-slate/30 bg-bclub-charcoal/60 hover:border-bclub-teal/50 hover:bg-bclub-navy/40 text-bclub-ice";
          
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
              className={`w-full text-left p-4 sm:p-5 border rounded-lg transition-all font-sans text-sm sm:text-base cursor-pointer ${btnClass}`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {hasAnswered && (
        <div className="mt-8 p-5 border border-bclub-teal/30 bg-bclub-navy/60 backdrop-blur-md rounded-lg animate-in fade-in duration-300">
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
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-200 text-bclub-dark font-display uppercase font-extrabold text-sm tracking-wider transition-all flex justify-center items-center gap-2 shadow-[4px_4px_0px_#37b7c3] hover:-translate-y-0.5"
          >
            {currentQuestion < QUIZ_QUESTIONS.length - 1 ? "NEXT QUESTION ↗" : "VIEW FINAL RANK ↗"}
          </button>
        </div>
      )}
    </div>
  );
}