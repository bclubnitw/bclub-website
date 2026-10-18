const pillars = [
  {
    index: "01",
    tag: "LEARN",
    title: "Analytical Foundations",
    description:
      "Deep dives into equity research, financial modeling, valuation metrics, and consulting problem-solving frameworks.",
  },
  {
    index: "02",
    tag: "TEACH",
    title: "Peer-Led Knowledge",
    description:
      "Student-run bootcamps, masterclasses, and hands-on teardowns designed to demystify complex corporate ecosystems.",
  },
  {
    index: "03",
    tag: "INNOVATE",
    title: "High-Stakes Simulations",
    description:
      "Flagship trading leagues, case competitions, and business hackathons that test strategic execution under real constraints.",
  },
  {
    index: "04",
    tag: "EVOLVE",
    title: "Leadership & Impact",
    description:
      "A disciplined pipeline preparing NITW talent for top consulting, product, fintech, and entrepreneurial ventures.",
  },
];

export default function AboutSection() {
  return (
    <section className="relative w-full pt-24 pb-12 px-6 bg-bclub-dark border-t border-bclub-slate/20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        
        {/* Top Split: Section Tagline & Mission Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-bclub-teal font-semibold">
              Who We Are
            </span>
            <h2 className="font-display uppercase font-extrabold text-4xl sm:text-5xl text-white tracking-wide leading-tight">
              Bridging Tech & High Finance
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6 text-bclub-ice/80 font-sans text-base sm:text-lg leading-relaxed">
            <p>
              Founded in 2015, <strong className="text-white font-semibold">Business Club, NIT Warangal</strong> serves as the premier student-led catalyst for financial acumen, strategic consulting, and corporate leadership on campus.
            </p>
            <p className="text-bclub-ice/65 text-sm sm:text-base">
              <span className="font-bold text-bclub-cyan">Our mission </span>is to translate engineering precision into business intuition — empowering students with the analytical rigor, market literacy, and strategic mindset required to thrive in dynamic global markets.
            </p>
          </div>
        </div>

        {/* The Four Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.index}
              className="group relative flex flex-col justify-between p-8 bg-bclub-charcoal/50 border border-bclub-slate/25 hover:border-bclub-teal/60 transition-all duration-300 shadow-xs hover:shadow-[0_4px_25px_rgba(10,39,83,0.35)] rounded-xs"
            >
              {/* Top Accent Strip on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-bclub-teal transition-all duration-300" />

              <div>
                {/* Number & Pillar Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-bclub-slate tracking-widest">
                    {pillar.index}
                  </span>
                  <span className="font-display font-bold text-xs uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-bclub-dark/80 text-bclub-cyan border border-bclub-slate/30 group-hover:scale-110 group-hover:bg-bclub-teal/15 group-hover:border-bclub-teal/40 group-hover:text-bclub-teal transition-all duration-300">
                    {pillar.tag}
                  </span>
                </div>

                {/* Pillar Header */}
                <h3 className="font-display font-bold uppercase text-2xl text-white tracking-wide mb-3 group-hover:text-bclub-teal transition-colors">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-bclub-ice/60 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}