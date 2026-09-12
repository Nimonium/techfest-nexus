import { createFileRoute } from "@tanstack/react-router";

import { CompetitionsSection } from "@/components/site/CompetitionsSection";
import { EventsSection } from "@/components/site/EventsSection";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import {
  FinalCtaSection,
  IntroSection,
  StatsSection,
  TimelineSection,
} from "@/components/site/HomeSections";
import { Navbar } from "@/components/site/Navbar";
import { RoboticsSection } from "@/components/site/RoboticsSection";
import { SpeakersPreview } from "@/components/site/SpeakersPreview";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Techfest ’26 — IIT Bombay | Asia’s Largest Science & Tech Festival" },
      {
        name: "description",
        content:
          "Techfest, IIT Bombay — Asia's largest science and technology festival. Three days of competitions, robotics, AI summits, workshops and exhibitions. Dec 17–19, 2026.",
      },
      { property: "og:title", content: "Techfest ’26 — IIT Bombay" },
      {
        property: "og:description",
        content:
          "Asia's largest science and technology festival. Competitions, robotics, workshops and exhibitions — Dec 17–19, 2026 at IIT Bombay.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="grain relative min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:bg-signal focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <IntroSection />
        <EventsSection />
        <CompetitionsSection />
        <RoboticsSection />
        <SpeakersPreview />
        <TimelineSection />
        <StatsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
