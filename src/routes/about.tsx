import { createFileRoute } from "@tanstack/react-router";

import { ItemList, PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Techfest '26, IIT Bombay" },
      {
        name: "description",
        content:
          "Techfest, IIT Bombay is Asia's largest science and technology festival, student-run since 1998.",
      },
      { property: "og:title", content: "About — Techfest '26, IIT Bombay" },
      {
        property: "og:description",
        content: "A student-run festival turning engineering into an experience since 1998.",
      },
    ],
  }),
  component: AboutPage,
});

const items = [
  {
    code: "A-01",
    title: "Student Run",
    meta: "Since 1998",
    body: "Organised end to end by students of IIT Bombay, every single year.",
  },
  {
    code: "A-02",
    title: "Open To All",
    meta: "1000+ institutions",
    body: "Participants arrive from across India and more than thirty countries.",
  },
  {
    code: "A-03",
    title: "Non Profit",
    meta: "Free entry",
    body: "Exhibitions, lectures and shows stay open to the public at no cost.",
  },
];

function AboutPage() {
  return (
    <PageShell
      tag="Node 01"
      title={
        <>
          A launchpad
          <br />
          for the future.
        </>
      }
      intro="Techfest brings students, innovators, engineers, researchers and creators to IIT Bombay to explore the ideas shaping tomorrow."
    >
      <ItemList items={items} />
    </PageShell>
  );
}
