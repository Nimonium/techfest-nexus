import { Link } from "@tanstack/react-router";

import { navLinks } from "./Navbar";

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "X", href: "https://x.com" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <p className="display-tight text-4xl sm:text-5xl">Techfest</p>
            <p className="label-mono mt-2">IIT Bombay</p>
            <p className="mt-8 max-w-xs text-sm text-muted-foreground">
              Asia&apos;s largest science and technology festival — reimagined for 2026.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <p className="label-mono mb-2">Explore</p>
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="w-fit font-mono text-xs tracking-wider text-muted-foreground uppercase transition-colors hover:text-signal"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/register"
              className="w-fit font-mono text-xs tracking-wider text-muted-foreground uppercase transition-colors hover:text-signal"
            >
              Contact
            </Link>
          </nav>

          <div className="flex flex-col gap-3">
            <p className="label-mono mb-2">Signal</p>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="w-fit font-mono text-xs tracking-wider text-muted-foreground uppercase transition-colors hover:text-signal"
              >
                {s.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="label-mono mb-2">Location</p>
            <p className="font-mono text-xs leading-relaxed tracking-wider text-muted-foreground uppercase">
              IIT Bombay
              <br />
              Powai, Mumbai
              <br />
              India — 400076
            </p>
            <p className="label-mono mt-4 text-signal">19.1334° N / 72.9133° E</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-mono">© 2026 Techfest, IIT Bombay</p>
          <p className="font-mono text-xs tracking-[0.3em] text-signal uppercase">
            Engineering Tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
}
