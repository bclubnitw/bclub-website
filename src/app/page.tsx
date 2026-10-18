"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HomePage() {
  // Animation timeline state: "initial" -> "settling" -> "complete"
  const [animStage, setAnimStage] = useState<"initial" | "settling" | "complete">("initial");

  useEffect(() => {
    // Stage 1: Brief moment at large size, then start shrinking & settling
    const timer1 = setTimeout(() => {
      setAnimStage("settling");
    }, 700);

    // Stage 2: Logo reaches anchored position; reveal text lockup and tagline
    const timer2 = setTimeout(() => {
      setAnimStage("complete");
    }, 1400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const isInitial = animStage === "initial";
  const isComplete = animStage === "complete";

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bclub-ice px-6">
      {/* Subtle grid background accent */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(var(--color-bclub-dark) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Hero Unit / In-Hero Anchor */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Animated Logo Container */}
        <div
          className={`relative transition-all duration-700 ease-out flex items-center justify-center ${
            isInitial
              ? "w-64 h-64 sm:w-80 sm:h-80 scale-110 opacity-100"
              : "w-36 h-36 sm:w-44 sm:h-44 scale-100 opacity-100"
          }`}
        >
          <Image
            src="/bclub_logo_no_bg.svg"
            alt="Business Club, NIT Warangal Logo"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Text Lockup: Appears and settles right under the logo */}
        <div
          className={`flex flex-col items-center transition-all duration-700 ease-out ${
            isComplete
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 pointer-events-none"
          }`}
        >
          {/* Estd. 2015 */}
          <span className="mt-4 font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-bclub-slate font-medium">
            ESTD. 2015
          </span>

          {/* Business Club, NITW */}
          <h1 className="mt-1 font-display uppercase font-extrabold tracking-wider text-bclub-dark text-4xl sm:text-6xl md:text-7xl leading-tight">
            Business Club, NITW
          </h1>

          {/* Distinct Divider Bar */}
          <div className="my-5 flex items-center gap-2">
            <span className="h-[2px] w-8 bg-bclub-teal rounded-full" />
            <span className="h-1.5 w-1.5 rounded-full bg-bclub-navy" />
            <span className="h-[2px] w-8 bg-bclub-teal rounded-full" />
          </div>

          {/* Official Tagline */}
          <p className="font-display uppercase tracking-[0.22em] text-sm sm:text-base md:text-lg font-bold text-bclub-navy">
            LEARN. TEACH. INNOVATE. EVOLVE
          </p>
        </div>
      </div>
    </main>
  );
}