"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "./components/HeroSection";
import QuizSection from "./components/QuizSection";
import EndScreen from "./components/EndScreen";

export default function BusinessFrenzyPage() {
  const [view, setView] = useState<"intro" | "quiz" | "register">("intro");
  const [score, setScore] = useState(0);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bclub-dark text-bclub-ice pt-24 pb-28 selection:bg-bclub-teal selection:text-bclub-dark relative overflow-hidden">
        
        {/* Cinematic Background Poster Overlay - Mobile Fixed */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-bclub-dark">
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src="/events/BusinessFrenzy.jpeg"
              alt="Background Overlay"
              fill
              className="object-contain sm:object-cover object-top opacity-15 mix-blend-screen"
              priority
            />
            {/* Gradients to fade out the poster edges seamlessly */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-bclub-dark/80 to-bclub-dark" />
            <div className="absolute inset-0 bg-linear-to-r from-bclub-dark via-transparent to-bclub-dark hidden sm:block" />
          </div>
          {/* Ambient Radial Teal Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-150 bg-bclub-teal/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {view === "intro" && (
            <HeroSection onStartQuiz={() => setView("quiz")} onSkip={() => setView("register")} />
          )}
          
          {view === "quiz" && (
            <QuizSection 
              onComplete={(finalScore) => {
                setScore(finalScore);
                setView("register");
              }} 
            />
          )}

          {view === "register" && (
            <EndScreen 
              score={score} 
              onRestart={() => {
                setScore(0);
                setView("intro");
              }} 
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}