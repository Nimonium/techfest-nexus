/**
 * Purely 2D animated hero composition: technical grid, orbit arcs, circuit
 * traces, signal waves and drifting particles rendered as inline SVG + CSS.
 */
export function HeroVisual() {
  const particles = Array.from({ length: 26 }, (_, i) => ({
    x: (i * 37) % 100,
    y: (i * 61) % 100,
    d: 6 + (i % 7) * 1.6,
    delay: (i % 9) * 0.7,
    r: i % 5 === 0 ? 1.8 : 1,
  }));

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* base grid + vignette */}
      <div className="tech-grid absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,oklch(0.82_0.145_200/0.13),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_82%_18%,oklch(0.65_0.21_292/0.18),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--background)_0%,transparent_28%,transparent_62%,var(--background)_100%)]" />

      {/* orbit arcs */}
      <svg
        className="animate-spin-slow absolute top-1/2 left-1/2 h-[150vmin] w-[150vmin] -translate-x-1/2 -translate-y-1/2 opacity-45"
        viewBox="0 0 800 800"
        fill="none"
      >
        <circle cx="400" cy="400" r="220" stroke="oklch(0.82 0.145 200 / 0.28)" strokeWidth="0.7" />
        <circle
          cx="400"
          cy="400"
          r="310"
          stroke="oklch(0.65 0.21 292 / 0.28)"
          strokeWidth="0.7"
          strokeDasharray="3 12"
        />
        <circle cx="400" cy="400" r="380" stroke="oklch(1 0 0 / 0.07)" strokeWidth="0.7" />
        <circle cx="620" cy="400" r="3" fill="oklch(0.82 0.145 200)" />
        <circle cx="400" cy="90" r="2" fill="oklch(0.87 0.21 145)" />
        <circle cx="180" cy="400" r="2" fill="oklch(0.65 0.21 292)" />
      </svg>

      {/* circuit traces */}
      <svg
        className="absolute inset-0 h-full w-full opacity-60"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <g stroke="oklch(0.82 0.145 200 / 0.4)" strokeWidth="1">
          <path className="animate-dash" d="M0 160 H320 L380 220 H620" />
          <path className="animate-dash" d="M1440 700 H1080 L1020 640 H760" />
          <path className="animate-dash" d="M0 760 H180 L260 680 V520 H420" />
          <path className="animate-dash" d="M1440 220 H1240 L1160 300 V430" />
        </g>
        <g fill="oklch(0.82 0.145 200)">
          <circle cx="380" cy="220" r="3" />
          <circle cx="1020" cy="640" r="3" />
          <circle cx="260" cy="520" r="3" />
          <circle cx="1160" cy="430" r="3" />
        </g>
        <g stroke="oklch(0.87 0.21 145 / 0.5)" strokeWidth="1">
          <path d="M0 470 h90 l18 -26 18 52 18 -52 18 26 h120" />
          <path d="M1440 470 h-90 l-18 -26 -18 52 -18 -52 -18 26 h-120" />
        </g>
      </svg>

      {/* particles */}
      <div className="absolute inset-0">
        {particles.map((p, i) => (
          <span
            key={i}
            className="animate-drift absolute rounded-full bg-signal/70"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.r * 2,
              height: p.r * 2,
              animationDuration: `${p.d}s`,
              animationDelay: `${p.delay}s`,
              opacity: 0.15 + (i % 5) * 0.12,
            }}
          />
        ))}
      </div>

      {/* scanning sweep */}
      <div className="animate-scanline absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_bottom,transparent,oklch(0.82_0.145_200/0.09),transparent)]" />
    </div>
  );
}
