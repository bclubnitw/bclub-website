"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/team" },
  { name: "Connect", href: "/connect" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Reveal the brand logo/text in navbar once scrolled past 120px
//       if (window.scrollY > 120) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

  return (
    <header
      className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#ebf4f6]/90 backdrop-blur-md border-b border-bclub-charcoal/10 shadow-xs"}
    >
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Brand Lockup (Left): Only visible once scrolled past hero */}
        <Link
          href="/"
          className={`flex items-center gap-3 transition-all duration-500 opacity-100 translate-y-0}`}
        >
          <div className="relative w-8 h-8">
            <Image
              src="/bclub_logo_no_bg.svg"
              alt="BClub Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-display uppercase font-bold text-lg tracking-wider text-bclub-dark">
            BClub, <span className="text-bclub-cyan">NITW</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-sans text-sm font-semibold tracking-wide text-bclub-charcoal hover:text-bclub-cyan transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Button (Three Strips) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none z-50"
          aria-label="Toggle Navigation Menu"
        >
          <span
            className={`h-0.5 w-6 bg-bclub-dark rounded-full transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-bclub-dark rounded-full transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-bclub-dark rounded-full transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#ebf4f6] border-b border-bclub-charcoal/10 px-6 py-6 transition-all duration-300 shadow-md ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-sans text-base font-semibold text-bclub-charcoal hover:text-bclub-cyan transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}