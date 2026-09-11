import { createFileRoute } from "@tanstack/react-router";

import { ItemList, PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/workshops")({
  head: () => ({
    meta: [
      { title: "Workshops — Techfest '26, IIT Bombay" },
      {
        name: "description",
        content:
          "Hands-on workshops in robotics, embedded systems, applied AI, drones and rapid prototyping at Techfest '26.",
      },
      { property: "og:title", content: "Workshops — Techfest '26, IIT Bombay" },
      {
        property: "og:description",
        content: "Practitioner-led, hands-on sessions across three days at IIT Bombay.",
      },
    ],
  }),
  component: WorkshopsPage,
});

const items = [
  {
    code: "W-01",
    title: "Embedded Systems",
    meta: "2 days / Beginner",
    body: "From bare-metal firmware to a working sensor node you take home.",
  },
  {
    code: "W-02",
    title: "Applied AI",
    meta: "1 day / Intermediate",
    body: "Fine-tuning, evaluation and shipping small models on real constraints.",
  },
  {
    code: "W-03",
    title: "Drone Build",
    meta: "2 days / All levels",
    body: "Frame, flight controller, tuning and a supervised first flight.",
  },
  {
    code: "W-04",
    title: "Rapid Prototyping",
    meta: "1 day / All levels",
    body: "CAD to printed part in a single session inside the campus fab lab.",
  },
  {
    code: "W-05",
    title: "Computer Vision",
    meta: "1 day / Intermediate",
    body: "Detection and tracking pipelines running live on edge hardware.",
  },
  {
    code: "W-06",
    title: "Space Systems",
    meta: "1 day / Beginner",
    body: "CubeSat subsystems, link budgets and ground station basics.",
  },
];

function WorkshopsPage() {
  return (
    <PageShell
      tag="Hands On"
      title={
        <>
          Learn by
          <br />
          building.
        </>
      }
      intro="Small cohorts, real hardware, practitioners who ship. Seats are limited and allocated on registration."
    >
      <ItemList items={items} />
    </PageShell>
  );
}
