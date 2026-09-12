import { Link } from "@tanstack/react-router";

import { Counter, Cta, GridBackdrop, Reveal, SectionTag } from "./primitives";

/* ---------- Editorial intro ---------- */

export function IntroSection() {
  return (
    <section className="relative py-24 md:py-40">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <SectionTag>TF/26 // Manifesto</SectionTag>
        </Reveal>
        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <Reveal delay={0.05} className="lg:col-span-8">
            <p className="font-display text-[clamp(1.5rem,3.4vw,2.9rem)] leading-[1.15] font-medium tracking-tight text-foreground">
              For three days every December, the IIT Bombay campus becomes a
              working prototype of the future —{" "}
              <span className="text-signal">175,000 minds</span>, one arena, and
              machines that were sketches a year ago.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-4 lg:self-end">
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground lg:justify-self-end">
              Now in its 30th edition, Techfest remains entirely student-run —
              the largest festival of its kind in Asia.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Timeline ---------- */

const days = [
  { d: "DAY 01", date: "DEC 17", items: ["Opening ceremony", "Robotics qualifiers", "AI Summit — keynote", "Ozone night arena"] },
  { d: "DAY 02", date: "DEC 18", items: ["Hackathon finals", "Drone racing heats", "Exhibitions open", "Technoholix night"] },
  { d: "DAY 03", date: "DEC 19", items: ["IRC grand final", "Startup conclave", "Prize distribution", "Closing concert"] },
];

export function TimelineSection() {
  return (
    <section className="relative border-y border-border bg-surface/40 py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <SectionTag>Signal Active // Program</SectionTag>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-tight mt-8 text-[clamp(2.4rem,6vw,5rem)]">
                Three Days.
                <span className="text-stroke"> Zero Sleep.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Link
              to="/schedule"
              className="group inline-flex items-center gap-3 font-mono text-[0.7rem] tracking-[0.22em] text-muted-foreground uppercase transition-colors hover:text-signal"
            >
              Full Schedule
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px border border-border bg-border md:mt-20 md:grid-cols-3">
          {days.map((day, i) => (
            <Reveal key={day.d} delay={i * 0.1} y={30} className="h-full">
              <div className="group flex h-full flex-col bg-background p-7 transition-colors duration-500 hover:bg-surface md:p-9">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-sm text-signal">{day.d}</span>
                  <span className="label-mono">{day.date}</span>
                </div>
                <div className="mt-8 flex-1">
                  {day.items.map((item, j) => (
                    <div key={item} className="flex items-center gap-4 border-t border-border py-4 first:border-t-0 first:pt-0">
                      <span className="label-mono w-8 shrink-0">{String(j + 1).padStart(2, "0")}</span>
                      <span className="font-display text-lg font-medium tracking-tight">{item}</span>
                    </div>
                  ))}
                </div>
                <span className="mt-6 block h-0.5 w-full origin-left scale-x-0 bg-signal transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Stats ---------- */

const stats = [
  { value: 175000, suffix: "+", label: "Footfall" },
  { value: 30, suffix: "", label: "Editions" },
  { value: 2500, suffix: "+", label: "Colleges" },
  { value: 25, suffix: "+", label: "Countries" },
];

export function StatsSection() {
  return (
    <section className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <SectionTag>Legacy // By the Numbers</SectionTag>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-px border border-border bg-border lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} y={20} className="h-full">
              <div className="flex h-full flex-col gap-3 bg-background p-7 md:p-10">
                <span className="display-tight text-[clamp(2.2rem,4.5vw,4.5rem)] text-signal">
                  <Counter value={s.value} suffix={s.suffix} />
                </span>
                <span className="label-mono">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-border py-28 md:py-44">
      <GridBackdrop />
      <div className="animate-scanline pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(to_bottom,transparent,oklch(0.82_0.145_200/0.07),transparent)]" />
      <div className="relative mx-auto max-w-[1600px] px-5 text-center md:px-10">
        <Reveal>
          <p className="label-mono flex items-center justify-center gap-3 text-signal">
            <span className="animate-pulse-dot inline-block size-1.5 rounded-full bg-neon" />
            SYS.ONLINE // Registration Open
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display-tight mx-auto mt-8 max-w-5xl text-[clamp(2.8rem,9vw,8.5rem)]">
            Be There
            <br />
            <span className="text-stroke">When It Starts.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Cta to="/register">Register Now →</Cta>
            <Cta to="/about" variant="ghost">
              About Techfest
            </Cta>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="label-mono mt-14">DEC 17–19, 2026 — IIT Bombay, Powai, Mumbai</p>
        </Reveal>
      </div>
    </section>
  );
}
