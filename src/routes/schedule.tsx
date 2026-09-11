import { createFileRoute } from "@tanstack/react-router";

import { ItemList, PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Schedule — Techfest '26, IIT Bombay" },
      {
        name: "description",
        content:
          "Three days of competitions, lectures, exhibitions and night shows at Techfest '26, IIT Bombay.",
      },
      { property: "og:title", content: "Schedule — Techfest '26, IIT Bombay" },
      {
        property: "og:description",
        content: "The day-by-day running order for Techfest '26 at IIT Bombay.",
      },
    ],
  }),
  component: SchedulePage,
});

const items = [
  {
    code: "D-01",
    title: "Day One",
    meta: "18 Dec 2026 / 09:00 IST",
    body: "Opening address, qualifier rounds, exhibition floor opens across the campus.",
  },
  {
    code: "D-02",
    title: "Day Two",
    meta: "19 Dec 2026 / 08:00 IST",
    body: "Robotics arenas, hackathon build window, keynote lectures through the evening.",
  },
  {
    code: "D-03",
    title: "Day Three",
    meta: "20 Dec 2026 / 08:00 IST",
    body: "Grand finales, drone show, awards and closing night across the main ground.",
  },
];

function SchedulePage() {
  return (
    <PageShell
      tag="Running Order"
      title={
        <>
          Three days.
          <br />
          One signal.
        </>
      }
      intro="Timings are indicative and locked closer to the festival. Registered participants get the live running order."
    >
      <ItemList items={items} />
    </PageShell>
  );
}
