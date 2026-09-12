import { Link } from "@tanstack/react-router";

import { Reveal, SectionTag } from "./primitives";
import { SpeakerGrid } from "./Speakers";

export function SpeakersPreview() {
  return (
    <section className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <SectionTag>Signal // Speakers</SectionTag>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-tight mt-8 text-[clamp(2.4rem,6vw,5rem)]">
                Minds on
                <br />
                the Main Stage.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Link
              to="/speakers"
              className="group inline-flex items-center gap-3 font-mono text-[0.7rem] tracking-[0.22em] text-muted-foreground uppercase transition-colors hover:text-signal"
            >
              All Speakers
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 md:mt-20">
          <SpeakerGrid />
        </div>
      </div>
    </section>
  );
}
