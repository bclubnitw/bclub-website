import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventsClient from "./EventsClient";
import { CLUB_EVENTS } from "@/constants/events";

export const metadata: Metadata = {
  title: "Events | Business Club NIT Warangal",
  description:
    "Explore upcoming initiatives, simulations, case challenges, and archived summits hosted by Business Club, NIT Warangal.",
};

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bclub-dark text-bclub-ice pt-28 pb-28 selection:bg-bclub-teal selection:text-bclub-dark relative overflow-hidden">
        {/* Subtle Ambient Navy/Teal Radial Aura */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(10,39,83,0.7),rgba(17,19,24,0))]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none fixed top-1/4 left-1/2 -translate-x-1/2 w-175 h-175 bg-bclub-teal/5 blur-[160px] rounded-full z-0"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Header Section */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-bclub-navy/70 border border-bclub-teal/30 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-bclub-teal animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-bclub-teal font-semibold">
                SCHEDULE & ARCHIVES // BCLUB NITW
              </span>
            </div>

            <h1 className="font-display uppercase text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none">
              SUMMITS, SIMULATIONS <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-bclub-teal via-bclub-cyan to-white">
                & STRATEGIC OPERATIONS.
              </span>
            </h1>

            <p className="font-sans text-bclub-ice/70 text-base sm:text-lg leading-relaxed pt-2">
              From open-outcry floor simulations to geopolitical crisis councils, explore live registrations and historical archives of our campus initiatives.
            </p>
          </div>

          {/* Interactive Client View */}
          <EventsClient events={CLUB_EVENTS} />
        </div>
      </main>
      <Footer />
    </>
  );
}