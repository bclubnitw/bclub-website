"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
    
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
            <div className="mt-8 flex items-center justify-center gap-4">
                {/* LinkedIn */}
                <a
                href="https://www.linkedin.com/company/bclub-nitw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Business Club NITW on LinkedIn"
                className="group flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-bclub-charcoal/15 bg-white text-bclub-navy shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-bclub-teal hover:bg-bclub-teal/10 hover:text-bclub-cyan hover:shadow-md"
                >
                <svg
                    className="h-4.5 w-4.5 sm:h-5 sm:w-5 fill-current transition-transform duration-300 group-hover:scale-110"
                    viewBox="0 0 24 24"
                >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                </a>

                {/* Instagram */}
                <a
                href="https://instagram.com/bclubnitw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Business Club NITW on Instagram"
                className="group flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-bclub-charcoal/15 bg-white text-bclub-navy shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-bclub-teal hover:bg-bclub-teal/10 hover:text-bclub-cyan hover:shadow-md"
                >
                <svg
                    className="h-5 w-5 sm:h-5.5 sm:w-5.5 fill-current transition-transform duration-300 group-hover:scale-110"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
                </a>
            </div>
            </div>

            {/* Social Links */}
        </div>
    </main>
      )

}

