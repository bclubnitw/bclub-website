export interface ClubEvent {
  id: string;
  title: string;
  tagline?: string | null;
  date: string;               // Start date: ISO format "YYYY-MM-DD"
  endDate?: string | null;    // Optional end date for multi-day events: "YYYY-MM-DD"
  time?: string | null;       // e.g. "5:30 PM IST"
  academicYear: string;       // e.g. "2026-27"
  venue: string;              // e.g. "Auditorium / E-Classroom"
  description: string;
  poster?: string | null;     // File name in public/events/ (e.g. "trading_pit.jpg")
  registrationLink?: string | null; // Unstop / Form link
  registrationDeadline?: string | null; // e.g. "2026-10-23"
  whatsappLink?: string | null;
  poc?: string | null;
  href?: string | null;       // Internal route (e.g. "/bmun")
}

export const CLUB_EVENTS: ClubEvent[] = [
  // ==========================================
  // UPCOMING EVENTS (Academic Year 2026-27)
  // ==========================================
  {
    id: "bmun-2026",
    title: "BMUN 2026",
    tagline: "Crisis Simulation & Geopolitical Strategy Summit",
    date: "2026-10-25",
    endDate: null,
    time: null,
    academicYear: "2026-27",
    venue: "TBA",
    description:
      "A dual-chamber geopolitical simulation featuring high-stakes debate across the UN Economic and Social Council (ECOSOC) and the Economic and Financial Committee (ECOFIN). Delegates navigate simulated international liquidity crunches, defense subsidies, and global monetary sanction regimes in real-time.",
    poster: "bmun_poster1.jpeg",
    registrationLink: null,
    registrationDeadline: null,
    whatsappLink: null,
    poc: null,
    href: "/BMUN",
  },

  // ==========================================
  // PAST EVENTS (Academic Year 2026-27 & 2025-26)
  // ==========================================
  {
    id: "fresher-recruitment-2026",
    title: "Fresher's Recruitment 2026",
    tagline: "Want to learn, build, and grow alongside ambitious people? This is your opportunity.",
    date: "2026-09-17",
    endDate: null,
    time: null,
    academicYear: "2025-26",
    venue: "COOPS",
    description:
      "Whether you already have experience or are just getting started, we're looking for people who are willing to learn, take initiative, and build. \n If you're curious about business, finance, consulting, product, startups, or simply want to learn, build, and grow alongside ambitious people — this is your opportunity. ",
    poster: "fresher_recruitment_2026.jpeg",
    registrationLink: "https://forms.gle/jP4gSuakkVLkcZEu6",
    registrationDeadline: "2026-09-11",
    whatsappLink: "https://chat.whatsapp.com/F5SfuC9uUZG2zOMHV7YhOp?s=cl&p=a&mlu=4",
    poc: "Devansh : +91 89193 18869 & Tanuj : +91 88300 98463",
    href: null,
  },
  {
    id: "orientation-2026",
    title: "Fresher's Orientation",
    tagline: "Yo-r introduction to how the club operates",
    date: "2026-08-27",
    endDate: null,
    time: "6:30 PM",
    academicYear: "2025-26",
    venue: "MME Seminar Hall (2nd floor)",
    description: "Curious about what the Business Club is all about?\nRight after Trading Pit, we're hosting our official Orientation Session - your introduction to how the club operates, what we build, and how you can be a part of it.",
    poster: "orientation_2026.jpeg",
    registrationLink: null,
    registrationDeadline: null,
    whatsappLink: null,
    poc: null,
    href: null,
  },
  {
    id: "trading-pit-2026",
    title: "Trading Pit 2026",
    tagline: "Live Open-Outcry Floor Simulation",
    date: "2026-08-26",
    endDate: null,
    time: "04:30 PM - 07:00 PM IST",
    academicYear: "2026-27",
    venue: "COOPS 301",
    description:
      "A recreation of a fast-paced 1980s open-outcry trading pit. Participants traded commodity and currency derivatives responding to breaking geopolitical news flashes, arbitrage discrepancies, and high-frequency order book shocks under capital liquidity constraints.",
    poster: "trading_pit_2026.jpeg",
    registrationLink: null,
    registrationDeadline: null,
    whatsappLink: "https://chat.whatsapp.com/FM2oEQysZXE4BlfxtEftue?s=cl&p=a&ilr=4",
    poc: null,
    href: null,
  },
  {
    id: "lifestyle-casebook-2026",
    title: "Lifestyle Casebook",
    tagline: "Case Comp to build a business!",
    date: "2026-08-16",
    endDate: null,
    time: "1 PM to 7 PM",
    academicYear: "2026-27",
    venue: "MBA classroom 2nd floor",
    description:
      "Prize pool: ₹12000\nTeam Size: 1 - 4\nWhether you're into problem solving, design, presenting ideas, this one's for you. Get your team ready. Your next big idea could be the winner. ",
    poster: "lifestyle_casecomp_2026.jpeg",
    registrationLink: null,
    registrationDeadline: null,
    whatsappLink: null,
    poc: null,
    href: null,
  },
];