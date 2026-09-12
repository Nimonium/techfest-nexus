import { motion } from "motion/react";

import { HeroVisual } from "./HeroVisual";
import { Cta, HudLabel } from "./primitives";

const ease = [0.16, 1, 0.3, 1] as const;

function TitleLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden">
      <HeroVisual />

      <div className="relative mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-end px-5 pt-32 pb-10 md:px-10 md:pb-14">
        {/* top HUD strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mb-10 grid grid-cols-2 gap-6 border-b border-border pb-6 md:grid-cols-4"
        >
          <HudLabel label="SYS.ONLINE" value="TF/26 — SIGNAL ACTIVE" live />
          <HudLabel label="Node 01" value="IITB // MUMBAI" />
          <HudLabel label="Event System" value="DEC 17 — 19, 2026" className="hidden md:flex" />
          <HudLabel label="Data Stream" value="BUILD / COMPETE / CONNECT" className="hidden md:flex" />
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="label-mono mb-6 flex items-center gap-3 text-signal"
            >
              <span className="animate-pulse-dot inline-block size-1.5 rounded-full bg-neon" />
              Asia&apos;s Largest Science &amp; Technology Festival
            </motion.p>

            <h1 className="display-tight text-[clamp(3.2rem,11.5vw,10.5rem)]">
              <TitleLine delay={0.25}>The Future</TitleLine>
              <TitleLine delay={0.38}>
                Starts <span className="text-stroke">Here.</span>
              </TitleLine>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75, ease }}
            className="flex flex-col gap-8 lg:items-end lg:text-right"
          >
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
              Three days of competitions, robotics, workshops and ideas — engineered
              by students, staged at IIT Bombay, built for the ones who build next.
            </p>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Cta to="/register">Register Now →</Cta>
              <Cta to="/events" variant="outline">
                Explore Events
              </Cta>
            </div>
          </motion.div>
        </div>
      </div>

      {/* marquee */}
      <div className="relative border-t border-border bg-background/60 backdrop-blur-sm">
        <div className="flex overflow-hidden py-3" aria-hidden>
          <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8 whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, r) => (
              <span key={r} className="flex items-center gap-8">
                {[
                  "Techfest ’26",
                  "IIT Bombay",
                  "Robotics",
                  "AI Summits",
                  "Hackathons",
                  "Competitions",
                  "Workshops",
                  "Exhibitions",
                ].map((w) => (
                  <span key={w} className="flex items-center gap-8">
                    <span className="font-mono text-[0.7rem] tracking-[0.28em] text-muted-foreground uppercase">
                      {w}
                    </span>
                    <span className="size-1 rounded-full bg-signal/60" />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
