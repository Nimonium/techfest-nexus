import { createFileRoute } from "@tanstack/react-router";

import { ItemList, PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Techfest '26, IIT Bombay" },
      {
        name: "description",
        content:
          "Competitions, robotics arenas, hackathons, workshops, lectures and exhibitions at Techfest '26, IIT Bombay.",
      },
      { property: "og:title", content: "Events — Techfest '26, IIT Bombay" },
      {
        property: "og:description",
        content: "Six arenas of engineering, code, machines and ideas at IIT Bombay.",
      },
    ],
  }),
  component: EventsPage,
});

const items = [
  {
    code: "01",
    title: "Competitions",
    meta: "Registrations open",
    body: "Head-to-head engineering challenges judged across three days of the festival.",
  },
  {
    code: "02",
    title: "Robotics",
    meta: "Arena // Main Ground",
    body: "Autonomous and manual machines built for combat, precision and speed.",
  },
  {
    code: "03",
    title: "Hackathons",
    meta: "36 hours",
    body: "Overnight builds on AI, systems, climate technology and open data.",
  },
  {
    code: "04",
    title: "Workshops",
    meta: "Limited seats",
    body: "Hands-on sessions with practitioners from industry and research labs.",
  },
  {
    code: "05",
    title: "Lectures",
    meta: "Convocation Hall",
    body: "Talks from the people building the systems that shape the next decade.",
  },
  {
    code: "06",
    title: "Exhibitions",
    meta: "Open access",
    body: "Drones, prototypes, humanoids and installations across the campus.",
  },
];

function EventsPage() {
  return (
    <PageShell
      tag="Event System"
      title={
        <>
          Enter the
          <br />
          arena.
        </>
      }
      intro="Six arenas. Hundreds of events. Every one of them built to be entered, not watched."
    >
      <ItemList items={items} />
    </PageShell>
  );
}
