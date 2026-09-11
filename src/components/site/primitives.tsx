import { Link } from "@tanstack/react-router";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import {
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

/* ---------------- Scroll reveal ---------------- */

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Monospace HUD label ---------------- */

export function HudLabel({
  label,
  value,
  live = false,
  className,
}: {
  label: string;
  value: string;
  live?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex min-w-0 flex-col gap-1", className)}>
      <span className="label-mono flex items-center gap-1.5">
        {live && (
          <span className="animate-pulse-dot inline-block size-1.5 shrink-0 rounded-full bg-neon" />
        )}
        <span className="truncate">{label}</span>
      </span>
      <span className="truncate font-mono text-xs tracking-wider text-foreground">
        {value}
      </span>
    </div>
  );
}

export function SectionTag({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-signal/70" />
      <span className="label-mono text-signal">{children}</span>
    </div>
  );
}

/* ---------------- Magnetic CTA ---------------- */

type CtaProps = {
  to: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
} & Omit<ComponentProps<typeof Link>, "to" | "children" | "className">;

export function Cta({ to, children, variant = "solid", className, ...rest }: CtaProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 20 });
  const sy = useSpring(y, { stiffness: 260, damping: 20 });

  const base =
    "group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 font-mono text-[0.7rem] uppercase tracking-[0.22em] transition-colors duration-300";
  const styles = {
    solid: "bg-signal text-primary-foreground hover:bg-foreground",
    outline:
      "border border-border-strong text-foreground hover:border-signal hover:text-signal",
    ghost: "text-muted-foreground hover:text-signal",
  } as const;

  return (
    <motion.div style={{ x: sx, y: sy }} className="inline-flex">
      <Link
        ref={ref}
        to={to}
        onMouseMove={(e) => {
          const r = ref.current?.getBoundingClientRect();
          if (!r) return;
          x.set((e.clientX - (r.left + r.width / 2)) * 0.18);
          y.set((e.clientY - (r.top + r.height / 2)) * 0.28);
        }}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        className={cn(base, styles[variant], className)}
        {...rest}
      >
        {children}
      </Link>
    </motion.div>
  );
}

/* ---------------- Animated counter ---------------- */

export function Counter({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 22 });
  const rounded = useTransform(spring, (v) => Math.round(v).toLocaleString("en-US"));
  const [text, setText] = useState("0");

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, mv, value]);

  useEffect(() => rounded.on("change", setText), [rounded]);

  return (
    <span ref={ref} className={className}>
      {text}
      {suffix}
    </span>
  );
}

/* ---------------- Ambient background layers ---------------- */

export function GridBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="tech-grid absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,transparent_10%,var(--background)_80%)]" />
    </div>
  );
}

export function ScanLine() {
  return (
    <div
      aria-hidden
      className="animate-scanline pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(to_bottom,transparent,oklch(0.82_0.145_200/0.07),transparent)]"
    />
  );
}
