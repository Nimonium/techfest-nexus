import { Link } from "@tanstack/react-router";

import { Reveal, SectionTag } from "./primitives";

const competitions = [
  { n: "C-01", name: "International Robotics Challenge", meta: "ARENA // TEAM ×5", prize: "₹8,00,000", tag: "FLAGSHIP" },
  { n: "C-02", name: "Codefest Hackathon", meta: "36H // TEAM ×4", prize: "₹6,00,000", tag: "LIVE" },
  { n: "C-03", name: "Drone Racing League", meta: "FPV // SOLO", prize: "₹3,50,000", tag: "QUALIFIERS OPEN" },
  { n: "C-04", name: "AI for Impact", meta: "ML // TEAM ×3", prize: "₹4,00,000", tag: "NEW" },
  { n: "C-05", name: "Bridge-It Structural Design", meta: "CIVIL // TEAM ×3", prize: "₹2,00,000", tag: "ON-SITE" },
];

export function CompetitionsSection() {
  return (
    <section className="relative border-y border-border bg-surface/40 py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <Reveal>
              <SectionTag>Data Stream // Competitions</SectionTag>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-tight mt-8 text-[clamp(2.4rem,6vw,5.5rem)]">
                Compete or
                <br />
                Watch History.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Link
              to="/competitions"
              className="group inline-flex items-center gap-3 border border-border-strong px-6 py-3.5 font-mono text-[0.7rem] tracking-[0.22em] uppercase transition-all duration-300 hover:border-signal hover:text-signal"
            >
              All Competitions
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-border md:mt-20">
          {competitions.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.04} y={16}>
              <Link
                to="/competitions"
                className="group grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-x-5 gap-y-2 border-b border-border py-6 transition-colors duration-300 hover:bg-background/60 md:grid-cols-[7rem_minmax(0,1fr)_auto_auto_auto] md:items-center md:gap-x-8 md:px-4 md:py-7"
              >
                <span className="font-mono text-sm text-signal">{c.n}</span>
                <span className="display-tight text-xl tracking-normal transition-colors duration-300 group-hover:text-signal md:text-3xl">
                  {c.name}
                </span>
                <span className="label-mono col-start-2 md:col-start-auto">{c.meta}</span>
                <span className="font-mono text-sm text-foreground md:text-base">{c.prize}</span>
                <span className="label-mono col-start-2 flex items-center gap-2 text-neon md:col-start-auto">
                  <span className="animate-pulse-dot inline-block size-1.5 rounded-full bg-neon" />
                  {c.tag}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
