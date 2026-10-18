import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CLUB_MEMBERS, ClubMember } from "@/constants/members";

export const metadata: Metadata = {
  title: "Members | Business Club NIT Warangal",
  description:
    "Meet the cohort driving finance, consulting, product management, and strategic initiatives at Business Club, NIT Warangal.",
};

const BATCH_METADATA: Record<number, { title: string; subtitle: string }> = {
  4: {
    title: "Final Years",
    subtitle: "Class of 2026",
  },
  3: {
    title: "Pre-Final Year",
    subtitle: "Class of 2027",
  },
  2: {
    title: "2nd Years",
    subtitle: "Class of 2028",
  },
  1: {
    title: "1st Years",
    subtitle: "Class of 2029",
  },
};

export default function MembersPage() {
  const years: (4 | 3 | 2 | 1)[] = [4, 3, 2, 1];

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
          className="pointer-events-none fixed top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-bclub-teal/5 blur-[140px] rounded-full z-0" 
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Header Section */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-bclub-navy/70 border border-bclub-teal/30 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-bclub-teal animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-bclub-teal font-semibold">
                PEOPLE // BCLUB NITW
              </span>
            </div>

            <h1 className="font-display uppercase text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none">
              THE INTELLECT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bclub-teal via-bclub-cyan to-white">
                BEHIND THE MOVES.
              </span>
            </h1>

            <p className="font-sans text-bclub-ice/70 text-base sm:text-lg leading-relaxed pt-2">
              From macroeconomic modeling to student-run investment strategies, our multidisciplinary cohort leads strategic corporate insights, case tournaments, and campus initiatives.
            </p>
          </div>

          {/* Grouped by Year */}
          <div className="space-y-24">
            {years.map((year) => {
              const membersInYear = CLUB_MEMBERS.filter((m) => m.year === year);
              if (membersInYear.length === 0) return null;

              const meta = BATCH_METADATA[year];

              return (
                <section key={year} className="space-y-8">
                  {/* Batch Section Header */}
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-bclub-slate/30 pb-4 gap-2">
                    <div>
                      <h2 className="font-display uppercase text-2xl sm:text-3xl font-extrabold tracking-wide text-white">
                        {meta.title}
                      </h2>
                      <span className="font-mono text-xs text-bclub-cyan uppercase tracking-wider block mt-1">
                        {meta.subtitle}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-bclub-teal uppercase tracking-widest font-bold">
                      {membersInYear.length} MEMBERS
                    </span>
                  </div>

                  {/* Members Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {membersInYear.map((member) => (
                      <MemberCard key={member.id} member={member} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

function MemberCard({ member }: { member: ClubMember }) {
  const isGenSec = member.position?.toLowerCase().includes("general secretary");

  return (
    <div
      className={`group relative rounded-sm transition-all duration-300 flex flex-col justify-between overflow-hidden backdrop-blur-md border ${
        isGenSec
          ? "bg-gradient-to-b from-bclub-navy/90 via-[#0d1e3d] to-bclub-dark border-bclub-teal shadow-[0_0_30px_rgba(55,183,195,0.2)] hover:border-bclub-cyan"
          : "bg-bclub-charcoal/40 border-bclub-slate/30 hover:border-bclub-teal/50 hover:bg-bclub-navy/30 hover:shadow-[0_4px_25px_rgba(10,39,83,0.4)]"
      }`}
    >
      {/* Top Media / Avatar */}
      <div className="relative aspect-square w-full bg-bclub-dark/80 overflow-hidden border-b border-bclub-slate/20">
        {member.image ? (
          <Image
            src={`/team/${member.image}`}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          /* Placeholder Initials Avatar */
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-bclub-navy/40 to-bclub-dark text-bclub-slate select-none">
            <span className="text-4xl font-mono font-extrabold tracking-widest text-bclub-teal/40 group-hover:text-bclub-teal/70 transition-colors">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-bclub-slate/60 mt-2">
              PORTRAIT PENDING
            </span>
          </div>
        )}

        {/* Position Tag for Gen Sec */}
        {member.position && (
          <div className="absolute top-3 left-3 bg-bclub-teal text-bclub-dark text-[10px] font-mono font-black uppercase tracking-widest px-2.5 py-1 shadow-lg">
            {member.position}
          </div>
        )}
      </div>

      {/* Info Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-display uppercase text-lg sm:text-xl font-bold text-white tracking-wide leading-snug group-hover:text-bclub-teal transition-colors">
            {member.name}
          </h3>
          <p className="font-sans text-xs text-bclub-ice/60 mt-1 font-normal">
            {member.degree} • {member.department}
          </p>
        </div>

        {/* Footer Ribbon */}
        <div className="pt-3 border-t border-bclub-slate/20 flex items-center justify-between text-xs font-mono">
          <span className="text-bclub-slate uppercase text-[11px] font-semibold">
            {member.year === 4
              ? "4TH YEAR"
              : member.year === 3
              ? "3RD YEAR"
              : member.year === 2
              ? "2ND YEAR"
              : "1ST YEAR"}
          </span>

          {member.linkedin ? (
            <Link
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bclub-teal hover:text-white flex items-center gap-1 font-bold uppercase text-[11px] transition-colors"
            >
              <span>CONNECT</span>
              <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </Link>
          ) : (
            <span className="text-bclub-slate/50 uppercase text-[10px]">OFFLINE</span>
          )}
        </div>
      </div>
    </div>
  );
}