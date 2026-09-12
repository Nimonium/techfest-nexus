import roboticsImg from "@/assets/robotics.jpg";

import { Cta, HudLabel, Reveal, SectionTag } from "./primitives";

const readouts = [
  { label: "ACTUATOR ARRAY", value: "SERVO ×12 // NOMINAL" },
  { label: "VISION FEED", value: "60FPS // LOCKED" },
  { label: "ARENA TEMP", value: "23.4°C // STABLE" },
  { label: "SIGNAL", value: "ACTIVE // 2.4GHZ" },
];

export function RoboticsSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-40">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <SectionTag>Node 03 // Robotics Arena</SectionTag>
        </Reveal>

        <div className="mt-8 grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
          <div>
            <Reveal delay={0.05}>
              <h2 className="display-tight text-[clamp(2.6rem,6.5vw,6rem)]">
                Where
                <br />
                Machines
                <br />
                <span className="text-signal">Come Alive.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
                Combat robotics, autonomous drones and machines built from scratch —
                tested live in the arena in front of thousands. No simulations. Real
                metal, real stakes.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-10">
                <Cta to="/competitions" variant="outline">
                  Enter the Arena →
                </Cta>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8">
                {readouts.map((r) => (
                  <HudLabel key={r.label} label={r.label} value={r.value} live={r.label === "SIGNAL"} />
                ))}
              </div>
            </Reveal>
          </div>

          {/* Machine viewport */}
          <Reveal delay={0.1} y={40}>
            <div className="relative border border-border-strong">
              <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                <span className="label-mono">CAM-01 // ARENA FEED</span>
                <span className="label-mono flex items-center gap-2 text-neon">
                  <span className="animate-pulse-dot inline-block size-1.5 rounded-full bg-neon" />
                  REC
                </span>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={roboticsImg}
                  alt="A competition robot in the Techfest arena at IIT Bombay"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                {/* HUD overlays */}
                <div className="tech-grid-fine pointer-events-none absolute inset-0 opacity-60" />
                <div className="animate-scanline pointer-events-none absolute inset-x-0 top-0 h-16 bg-[linear-gradient(to_bottom,transparent,oklch(0.87_0.21_145/0.12),transparent)]" />

                {/* circuit traces + sensor points */}
                <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 400 300" fill="none" aria-hidden>
                  <g stroke="oklch(0.82 0.145 200 / 0.55)" strokeWidth="1">
                    <path className="animate-dash" d="M0 40 H120 L160 80 H280" />
                    <path className="animate-dash" d="M400 250 H300 L260 210 H120" />
                  </g>
                  <g stroke="oklch(0.87 0.21 145 / 0.8)" strokeWidth="1">
                    <circle cx="160" cy="80" r="10" strokeDasharray="3 4" />
                    <circle cx="260" cy="210" r="10" strokeDasharray="3 4" />
                    <path d="M160 70v20M150 80h20M260 200v20M250 210h20" />
                  </g>
                  <g fill="oklch(0.87 0.21 145)">
                    <circle cx="160" cy="80" r="2" />
                    <circle cx="260" cy="210" r="2" />
                  </g>
                </svg>

                {/* corner brackets */}
                <div className="pointer-events-none absolute inset-4" aria-hidden>
                  {["top-0 left-0 border-t border-l", "top-0 right-0 border-t border-r", "bottom-0 left-0 border-b border-l", "bottom-0 right-0 border-b border-r"].map((pos) => (
                    <span key={pos} className={`absolute size-5 border-signal/80 ${pos}`} />
                  ))}
                </div>

                <span className="label-mono absolute bottom-3 left-3 bg-background/70 px-2 py-1 backdrop-blur-sm">
                  19.1334° N / 72.9133° E
                </span>
                <span className="label-mono absolute right-3 bottom-3 bg-background/70 px-2 py-1 text-signal backdrop-blur-sm">
                  UNIT: IRC-MK.IV
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
