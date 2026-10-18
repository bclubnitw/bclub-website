import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClassifiedDossier from "./component/ClassifiedDossier"

export const metadata: Metadata = {
  title: "BMUN 2026 // Classified Intelligence | Business Club NITW",
  description:
    "Official classified intelligence briefing and portfolios for the Business Model United Nations (BMUN) 2026 by Business Club, NIT Warangal.",
};

export default function BMUNPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bclub-ice pt-24 pb-16">
        <ClassifiedDossier />
      </main>
      <Footer />
    </>
  );
}