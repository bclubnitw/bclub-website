import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClassifiedDossier from "./component/ClassifiedDossier";

export const metadata: Metadata = {
  title: "BMUN 2026 // Classified Intelligence | Business Club NITW",
  description:
    "Official classified intelligence briefing and interactive nameplate placards for Business Model United Nations (BMUN) 2026 by Business Club, NIT Warangal.",
};

export default function BMUNPage() {
  return (
    <>
      <Navbar />
      {/* Immersive War-Room canvas */}
      <main className="min-h-screen bg-[#070e24] text-white pt-20 pb-16 selection:bg-[#37b7c3] selection:text-[#070e24]">
        <ClassifiedDossier />
      </main>
      <Footer />
    </>
  );
}