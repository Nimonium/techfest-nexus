import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { SpeakerGrid } from "@/components/site/Speakers";

export const Route = createFileRoute("/speakers")({
  head: () => ({
    meta: [
      { title: "Speakers — Techfest '26, IIT Bombay" },
      {
        name: "description",
        content:
          "The researchers, founders and engineers speaking at Techfest '26, IIT Bombay this December.",
      },
      { property: "og:title", content: "Speakers — Techfest '26, IIT Bombay" },
      {
        property: "og:description",
        content: "The minds shaping tomorrow, on stage at IIT Bombay.",
      },
    ],
  }),
  component: SpeakersPage,
});

function SpeakersPage() {
  return (
    <PageShell
      tag="Lecture Series"
      title={
        <>
          The minds
          <br />
          shaping tomorrow.
        </>
      }
      intro="Illustrative line-up for this concept. The 2026 roster is announced closer to the festival."
    >
      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <SpeakerGrid />
        </div>
      </section>
    </PageShell>
  );
}
