import speaker1 from "@/assets/speaker-1.jpg";
import speaker2 from "@/assets/speaker-2.jpg";
import speaker3 from "@/assets/speaker-3.jpg";
import speaker4 from "@/assets/speaker-4.jpg";

import { Reveal } from "./primitives";

type Speaker = {
  code: string;
  name: string;
  role: string;
  topic: string;
  image: string;
};

const speakers: Speaker[] = [
  {
    code: "SPK/01",
    name: "Dr. Ananya Rao",
    role: "Quantum Systems Lead, TIFR",
    topic: "Error-corrected qubits at room scale",
    image: speaker1,
  },
  {
    code: "SPK/02",
    name: "Kabir Menon",
    role: "Founder, Orbital Labs",
    topic: "Small launch vehicles from Indian soil",
    image: speaker2,
  },
  {
    code: "SPK/03",
    name: "Prof. Leena Iyer",
    role: "Robotics, IIT Bombay",
    topic: "Dexterous manipulation in the wild",
    image: speaker3,
  },
  {
    code: "SPK/04",
    name: "Rohan Deshpande",
    role: "Principal Engineer, Frontier AI",
    topic: "Compute, scaling and what comes next",
    image: speaker4,
  },
];

export function SpeakerGrid() {
  return (
    <div className="grid gap-px border border-border bg-border sm:grid-cols-2 xl:grid-cols-4">
      {speakers.map((s, i) => (
        <Reveal key={s.name} delay={i * 0.06}>
          <article className="group relative h-full bg-background p-5 transition-colors hover:bg-surface/50">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={s.image}
                alt={`Portrait of ${s.name}`}
                loading="lazy"
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
              />
              <span className="label-mono absolute top-3 left-3 bg-background/80 px-2 py-1 text-signal">
                {s.code}
              </span>
            </div>
            <h2 className="font-display mt-5 text-xl font-bold tracking-tight uppercase">
              {s.name}
            </h2>
            <p className="mt-1 font-mono text-xs tracking-wider text-signal">{s.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.topic}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
