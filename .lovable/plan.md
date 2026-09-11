# Techfest IIT Bombay — Futuristic Landing Page Concept

An original, cinematic landing page concept for Techfest '26 — dark, high-contrast, typography-led, with 2D motion only (no 3D/WebGL).

## Visual language

- Base: deep black / charcoal, subtle film grain, thin technical grid lines.
- Accents: electric cyan, deep blue, violet, occasional neon green. White display type.
- Type: Space Grotesk for oversized headlines (tight tracking, uppercase), IBM Plex Mono for labels, metadata and HUD readouts.
- Sharp corners, hairline glowing borders, asymmetric grids, generous whitespace. No glassmorphism blobs, no rounded card soup.

## Page structure (single scrolling home page)

1. **Navbar** — sticky, transparent, blurs and darkens on scroll. TECHFEST / IIT BOMBAY lockup left, section links center, LOGIN + REGISTER NOW right. Mobile: full-screen hamburger panel.
2. **Hero** — full-screen. Eyebrow `TECHFEST '26 / IIT BOMBAY`, headline "THE FUTURE STARTS HERE.", supporting line, two CTAs. Animated 2D composition behind: drifting particle field, orbit arcs, signal waves, circuit traces, scanning sweep, floating monospace labels. Bottom-left `SCROLL TO EXPLORE ↓`, corner live panel with date/location.
3. **Intro** — asymmetric editorial block, "MORE THAN A FESTIVAL. A LAUNCHPAD FOR THE FUTURE." + animated technical SVG graphic + metadata labels + `DISCOVER TECHFEST →`.
4. **Event categories — "ENTER THE ARENA"** — six numbered wide cards (01 Competitions → 06 Exhibitions). Horizontal scroll-snap track on desktop, stacked on mobile. Hover: border glow, visual shift, arrow travel, type animation.
5. **Featured competitions — "BUILD. BREAK. REBUILD."** — grid of six: Robotics, AI & Coding, Aeromodelling, Drone Challenge, Innovation, Engineering. Title, one-line description, deadline/status chip, `VIEW CHALLENGE →`.
6. **Robotics feature — "WHERE MACHINES COME ALIVE."** — full-bleed dark panel with animated circuit paths, sensor dots, data streams, scan line; CTA.
7. **Speakers — "THE MINDS SHAPING TOMORROW"** — editorial cards, monochrome portraits with cyan duotone overlay; name, role, organization, topic. Placeholder speakers, clearly fictional.
8. **Timeline** — vertical, five steps (Discover → Experience) with a progress line that fills on scroll.
9. **Legacy — "YEARS OF BUILDING THE FUTURE."** — horizontal milestone rail, oversized years (2002 through 2025) with the listed milestones.
10. **Numbers** — 50K+, 100+, 1000+, 20+ with counters that run on entering view.
11. **Final CTA** — "READY TO BUILD WHAT'S NEXT?" over an animated grid/circuit backdrop, two buttons.
12. **Footer** — lockup, link columns, socials, Powai address, copyright, "ENGINEERING TOMORROW."

Small monospace HUD labels (SYSTEM STATUS / LOCATION / EVENTS / PARTICIPANTS) recur between sections as texture, not as big stat blocks.

## Secondary pages

`/register`, `/events`, `/competitions`, `/workshops`, `/speakers`, `/about` — lightweight pages in the same visual language (shared nav/footer, headline, short intro, relevant content block). All nav and CTA buttons route to them.

## Motion

Scroll reveals, text slide-ups, light parallax, animated grid and particles, marquee strip, number counters, magnetic hover on primary buttons, navbar transition. Restrained overall; everything respects reduced-motion preferences.

## Responsive

Desktop cinematic and asymmetric; tablet simplifies the grid; mobile is a clean vertical stack with compact sticky nav, horizontally scrollable event cards, no horizontal overflow, and lighter animation.

## Technical notes

- TanStack Start routes: rewrite `src/routes/index.tsx` as the landing page, add one route file per secondary page, each with its own head() metadata.
- Components under `src/components/`: Navbar, Hero, Intro, EventCategories, CompetitionGrid, RoboticsFeature, Speakers, Timeline, Legacy, Stats, FinalCTA, Footer, plus shared HUD/reveal primitives.
- Design tokens (dark base, cyan/violet/neon accents, grain, glow shadows, fonts) added to `src/styles.css`; fonts loaded via `<link>` in `__root.tsx`. No hardcoded color utilities in components.
- Motion for React for scroll/reveal animations; CSS keyframes for ambient loops; Lucide for icons.
- Hero visual and section graphics built as inline SVG + CSS, no 3D.
- Photography: generated technology/robotics/campus imagery with monochrome + cyan grading, dark overlays, grain.
- Semantic HTML, single H1 per page, alt text, keyboard-reachable nav.
