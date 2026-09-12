import { Link } from "@tanstack/react-router";

import { Reveal, SectionTag } from "./primitives";

/* Unique abstract 2D glyph per category — no generic icons. */
function Glyph({ kind }: { kind: number }) {
  const stroke = "currentColor";
  const common = { fill: "none", stroke, strokeWidth: 1.2 } as const;
  return (
    <svg viewBox="0 0 64 64" className="size-14 text-signal/80 transition-colors duration-500 group-hover:text-signal" aria-hidden>
      {kind === 0 && (
        <g {...common}>
          <circle cx="32" cy="32" r="20" />
          <circle cx="32" cy="32" r="9" strokeDasharray="3 5" />
          <path d="M32 4v10M32 50v10M4 32h10M50 32h10" />
        </g>
      )}
      {kind === 1 && (
        <g {...common}>
          <path d="M8 48 24 16l8 20 8-28 16 40" />
          <path d="M8 56h48" strokeDasharray="4 4" />
        </g>
      )}
      {kind === 2 && (
        <g {...common}>
          <rect x="10" y="10" width="20" height="20" />
          <rect x="34" y="34" width="20" height="20" strokeDasharray="4 3" />
          <path d="M30 30h8M34 30v4" />
        </g>
      )}
      {kind === 3 && (
        <g {...common}>
          <path d="M6 32h10l6-14 8 28 8-36 8 22h12" />
        </g>
      )}
      {kind === 4 && (
        <g {...common}>
          <path d="M32 8 54 20v24L32 56 10 44V20Z" />
          <path d="M32 8v24m0 0L10 20m22 12 22-12" strokeDasharray="3 4" />
        </g>
      )}
      {kind === 5 && (
        <g {...common}>
          <path d="M12 44c8-24 32-24 40 0" />
          <circle cx="32" cy="44" r="5" />
          <path d="M12 56h40" strokeDasharray="2 4" />
        </g>
      )}
    </svg>
  );
}

const categories = [
  { n: "01", name: "Competitions", desc: "National championships across code, machines and design.", meta: "₹40L+ PRIZE POOL" },
  { n: "02", name: "Robotics", desc: "Combat bots, drones and autonomous systems in the arena.", meta: "12 ARENA EVENTS" },
  { n: "03", name: "AI & Data", desc: "Summits and hackathons on the intelligence frontier.", meta: "8 TRACKS" },
  { n: "04", name: "Workshops", desc: "Hands-on labs with industry engineers and researchers.", meta: "30+ SESSIONS" },
  { n: "05", name: "Exhibitions", desc: "Prototypes and research from labs across the world.", meta: "LIVE DEMOS" },
  { n: "06", name: "Ozone & Gaming", desc: "Esports, VR zones and late-night interactive arenas.", meta: "ALL NIGHT" },
];

export function EventsSection() {
  return (
    <section id="categories" className="relative py-24 md:py-40">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <SectionTag>Event System // Node 02</SectionTag>
        </Reveal>
        <div className="mt-8 mb-14 grid gap-8 md:mb-20 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-end">
          <Reveal delay={0.05}>
            <h2 className="display-tight text-[clamp(2.4rem,6vw,5.5rem)]">
              Six Worlds.
              <br />
              <span className="text-stroke">One Festival.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground lg:justify-self-end">
              Every category is its own universe — pick one, or move through all of
              them across three days on campus.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.n} delay={(i % 3) * 0.08} y={30} className="h-full">
              <Link
                to="/events"
                className="group relative flex h-full min-h-64 flex-col justify-between gap-10 overflow-hidden bg-background p-7 transition-colors duration-500 hover:bg-surface md:p-9"
              >
                <div className="tech-grid-fine pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between">
                  <span className="font-mono text-sm text-muted-foreground transition-colors duration-500 group-hover:text-signal">
                    /{c.n}
                  </span>
                  <Glyph kind={i} />
                </div>
                <div className="relative">
                  <p className="label-mono mb-3 text-signal/70">{c.meta}</p>
                  <h3 className="display-tight text-2xl tracking-normal md:text-3xl">{c.name}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {c.desc}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.22em] text-muted-foreground uppercase transition-all duration-500 group-hover:gap-4 group-hover:text-signal">
                    Enter <span aria-hidden>→</span>
                  </span>
                </div>
                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-signal transition-transform duration-500 group-hover:scale-x-100" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
