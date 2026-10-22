"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  {name: "Business Frenzy", href:"/BusinessFrenzy", highlight: true},
  // { name: "BMUN", href: "/BMUN" },
  { name: "Events", href: "/events" },
  { name: "Members", href: "/members" },
  // { name: "Connect", href: "/connect" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-bclub-dark/85 backdrop-blur-md border-b border-bclub-slate/20 shadow-md"}
    >
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Brand Lockup (Left): Only visible once scrolled past hero */}
        <Link
          href="/"
          className={`flex items-center gap-3 transition-all duration-500 opacity-100 translate-y-0`}
        >
          <div className="relative w-8 h-8">
            <Image
              src="/bclub_logo_no_bg.svg"
              alt="BClub Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-display uppercase font-bold text-lg tracking-wider text-white">
            BClub, <span className="text-bclub-teal">NITW</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        {/* 2. Desktop Navigation Links (Update the map function) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-sans text-sm font-semibold tracking-wide transition-colors ${
                link.highlight 
                  ? "text-bclub-teal animate-pulse drop-shadow-[0_0_8px_rgba(55,183,195,0.6)]" 
                  : "text-bclub-ice/75 hover:text-bclub-teal"
              }`}
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
            className={`h-0.5 w-6 bg-bclub-ice rounded-full transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2 bg-bclub-teal" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-bclub-ice rounded-full transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-bclub-ice rounded-full transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2 bg-bclub-teal" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-bclub-dark/95 backdrop-blur-xl border-b border-bclub-slate/20 px-6 py-6 transition-all duration-300 shadow-xl ${
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
              className="font-sans text-base font-semibold text-bclub-ice/85 hover:text-bclub-teal transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}