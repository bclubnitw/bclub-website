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
        
        {/* Cinematic Background Poster Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/events/BusinessFrenzy.jpeg"
            alt="Background"
            fill
            className="object-cover opacity-10 sm:opacity-[0.07] mix-blend-screen"
            priority
          />
          {/* Gradients to fade out the poster edges and ensure text readability */}
          <div className="absolute inset-0 bg-linear-to-b from-bclub-dark via-transparent to-bclub-dark" />
          <div className="absolute inset-0 bg-linear-to-r from-bclub-dark/80 via-transparent to-bclub-dark/80" />
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