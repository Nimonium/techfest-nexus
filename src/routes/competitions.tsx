import { createFileRoute } from "@tanstack/react-router";

import { ItemList, PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/competitions")({
  head: () => ({
    meta: [
      { title: "Competitions — Techfest '26, IIT Bombay" },
      {
        name: "description",
        content:
          "Robotics, AI and coding, aeromodelling, drone racing, innovation and engineering challenges at Techfest '26.",
      },
      { property: "og:title", content: "Competitions — Techfest '26, IIT Bombay" },
      {
        property: "og:description",
        content: "Build. Break. Rebuild. The flagship challenges of Techfest '26.",
      },
    ],
  }),
  component: CompetitionsPage,
});

const items = [
  {
    code: "C-01",
    title: "Robowars",
    meta: "Prize pool ₹12L / Closes 12 Oct",
    body: "Armoured machines, one arena, elimination brackets until a single bot stands.",
  },
  {
    code: "C-02",
    title: "AI & Coding",
    meta: "Online qualifier / Closes 28 Sep",
    body: "Model building and algorithmic rounds against live, hidden datasets.",
  },
  {
    code: "C-03",
    title: "Aeromodelling",
    meta: "On campus / Closes 05 Oct",
    body: "Fixed-wing craft designed, fabricated and flown against a payload brief.",
  },
  {
    code: "C-04",
    title: "Drone Challenge",
    meta: "Qualifiers live / Closes 18 Oct",
    body: "First-person racing plus autonomous navigation through a shifting course.",
  },
  {
    code: "C-05",
    title: "Innovation Challenge",
    meta: "Rolling review",
    body: "Working prototypes solving a stated problem, judged on evidence not slides.",
  },
  {
    code: "C-06",
    title: "Engineering Design",
    meta: "Team of 4 / Closes 22 Oct",
    body: "A constrained mechanical brief released 48 hours before the build window.",
  },
];

function CompetitionsPage() {
  return (
    <PageShell
      tag="Challenge Index"
      title={
        <>
          Build. Break.
          <br />
          Rebuild.
        </>
      }
      intro="Every flagship challenge of Techfest '26, with entry windows, formats and prize pools."
    >
      <ItemList items={items} />
    </PageShell>
  );
}
