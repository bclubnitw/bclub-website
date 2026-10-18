import Link from "next/link";
import Image from "next/image";
import { SOCIAL_MEDIA } from "@/constants/social_media";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-bclub-dark text-white border-t border-bclub-charcoal">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Identity Lockup */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9">
                <Image
                  src="/bclub_logo_no_bg.svg"
                  alt="Business Club NITW Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-display uppercase font-bold text-xl tracking-wider text-white">
                Business Club, <span className="text-bclub-teal">NITW</span>
              </span>
            </div>
            
            <p className="font-sans text-sm text-bclub-slate max-w-sm leading-relaxed">
              The premier student-led catalyst for financial intelligence, consulting strategy, and corporate leadership at the National Institute of Technology, Warangal.
            </p>

            <span className="font-mono text-xs tracking-widest text-bclub-cyan uppercase font-medium">
              ESTD. 2015 • LEARN. TEACH. INNOVATE. EVOLVE
            </span>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="font-display uppercase text-sm font-bold tracking-widest text-white/80">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 font-sans text-sm text-bclub-slate">
              <li>
                <Link href="/" className="hover:text-bclub-teal transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-bclub-teal transition-colors">
                  Events & Competitions
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-bclub-teal transition-colors">
                  Executive Team
                </Link>
              </li>
              <li>
                <Link href="/connect" className="hover:text-bclub-teal transition-colors">
                  Connect With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Connect (LinkedIn, Instagram, Gmail) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="font-display uppercase text-sm font-bold tracking-widest text-white/80">
              Connect
            </h4>
            <p className="font-sans text-sm text-bclub-slate">
              Reach out for event collaborations, recruitment queries, or strategic partnerships.
            </p>

            <div className="flex flex-col gap-3 font-sans text-sm">
              {/* LinkedIn */}
              <a
                href={`${SOCIAL_MEDIA.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-bclub-slate hover:text-bclub-teal transition-colors group"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-white/5 border border-white/10 group-hover:border-bclub-teal/50 transition-colors">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.67 1.67 0 0 0-1.67 1.67 1.67 1.67 0 0 0 1.67 1.66 1.67 1.67 0 0 0 1.67-1.66 1.67 1.67 0 0 0-1.67-1.67Z" />
                  </svg>
                </span>
                <span>LinkedIn</span>
              </a>

              {/* Instagram */}
              <a
                href={`${SOCIAL_MEDIA.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-bclub-slate hover:text-bclub-teal transition-colors group"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-white/5 border border-white/10 group-hover:border-bclub-teal/50 transition-colors">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </span>
                <span>Instagram</span>
              </a>

              {/* Gmail / Email */}
              <a
                href={`${SOCIAL_MEDIA.email}`}
                className="flex items-center gap-3 text-bclub-slate hover:text-bclub-teal transition-colors group"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-white/5 border border-white/10 group-hover:border-bclub-teal/50 transition-colors">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </span>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-bclub-slate">
          <p>© {currentYear} Business Club, NIT Warangal. All rights reserved.</p>
          <p className="font-mono text-[11px] text-white/40">
            ENGINEERED WITH ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}