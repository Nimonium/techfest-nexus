import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export const navLinks = [
  { label: "Events", to: "/events" },
  { label: "Competitions", to: "/competitions" },
  { label: "Workshops", to: "/workshops" },
  { label: "Speakers", to: "/speakers" },
  { label: "Schedule", to: "/schedule" },
  { label: "About", to: "/about" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-10 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex size-7 shrink-0 items-center justify-center border border-signal/60 font-mono text-[0.6rem] text-signal">
            TF
          </span>
          <span className="min-w-0 leading-none">
            <span className="block font-display text-sm font-bold tracking-[0.2em] uppercase">
              Techfest
            </span>
            <span className="label-mono block text-[0.6rem]">IIT Bombay</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-signal"
              activeProps={{ className: "text-signal" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-4 lg:flex">
          <Link
            to="/login"
            className="font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-foreground"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="border border-signal/60 px-5 py-2.5 font-mono text-[0.7rem] tracking-[0.18em] text-signal uppercase transition-all duration-300 hover:bg-signal hover:text-primary-foreground"
          >
            Register Now
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 shrink-0 flex-col items-center justify-center gap-1.5 justify-self-end border border-border lg:hidden"
        >
          <span
            className={cn(
              "block h-px w-4 bg-foreground transition-transform duration-300",
              open && "translate-y-[3.5px] rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-px w-4 bg-foreground transition-transform duration-300",
              open && "-translate-y-[3.5px] -rotate-45",
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="tech-grid-fine fixed inset-x-0 top-[69px] bottom-0 z-40 overflow-y-auto border-t border-border bg-background/98 px-5 py-8 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col">
              {navLinks.map((l, i) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between border-b border-border py-5 font-display text-3xl font-bold tracking-tight uppercase"
                >
                  {l.label}
                  <span className="label-mono">0{i + 1}</span>
                </Link>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="bg-signal px-6 py-4 text-center font-mono text-[0.7rem] tracking-[0.22em] text-primary-foreground uppercase"
              >
                Register Now →
              </Link>
              <Link
                to="/register"
                onClick={() => setOpen(false)}
                className="border border-border-strong px-6 py-4 text-center font-mono text-[0.7rem] tracking-[0.22em] uppercase"
              >
                Login
              </Link>
            </div>
            <p className="label-mono mt-10">IITB // Mumbai — TF/26</p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
