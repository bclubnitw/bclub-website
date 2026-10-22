"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "./components/HeroSection";
import QuizSection from "./components/QuizSection";
import EndScreen from "./components/EndScreen";
import { CLUB_EVENTS } from "@/constants/events";

export default function BusinessFrenzyPage() {
  const [view, setView] = useState<"intro" | "quiz" | "register">("intro");
  const [score, setScore] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [view]);

  // Cleaned up: Use .find() instead of .filter()
  const event_details = CLUB_EVENTS.find((event) => event.id === "business-frenzy-2026");

  if (!event_details) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-bclub-dark text-bclub-ice pt-24 pb-28 flex justify-center items-center">
          <span className="font-mono text-bclub-slate uppercase tracking-widest">Event Not Found</span>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bclub-dark text-bclub-ice pt-24 pb-28 selection:bg-bclub-teal selection:text-bclub-dark relative overflow-hidden">
        
        {/* Cinematic Background Poster Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-bclub-dark">
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src={`/events/${event_details.poster}`}
              alt="Background Overlay"
              fill
              className="object-contain sm:object-cover object-top opacity-15 mix-blend-screen"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-bclub-dark/80 to-bclub-dark" />
            <div className="absolute inset-0 bg-linear-to-r from-bclub-dark via-transparent to-bclub-dark hidden sm:block" />
          </div>
          {/* Fallback to arbitrary brackets to ensure cross-version Tailwind compatibility */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-bclub-teal/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {view === "intro" && (
            <HeroSection 
              onStartQuiz={() => setView("quiz")} 
              registration_link={event_details.registrationLink ?? null} 
            />
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
              registration_link={event_details.registrationLink ?? null}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}