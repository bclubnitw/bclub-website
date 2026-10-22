import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FrenzyClient from "./FrenzyClient";

export const metadata: Metadata = {
  title: "Business Frenzy | Technozion '26",
  description: "Build it. Trade it. Bid for it. Run a smartphone company for a day at Business Club NITW.",
};

export default function BusinessFrenzy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bclub-dark text-bclub-ice pt-28 pb-28 selection:bg-bclub-teal selection:text-bclub-dark relative overflow-hidden">
        {/* Ambient Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-bclub-teal/5 blur-[160px] rounded-full z-0"
        />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FrenzyClient />
        </div>
      </main>
      <Footer />
    </>
  );
}