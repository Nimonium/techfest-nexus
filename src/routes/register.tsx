import { createFileRoute } from "@tanstack/react-router";

import { ItemList, PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Register — Techfest '26, IIT Bombay" },
      {
        name: "description",
        content:
          "Register for Techfest '26 at IIT Bombay: competitions, workshops, hackathons and exhibitions this December.",
      },
      { property: "og:title", content: "Register — Techfest '26, IIT Bombay" },
      {
        property: "og:description",
        content: "One registration, access to every arena of Techfest '26.",
      },
    ],
  }),
  component: RegisterPage,
});

const items = [
  {
    code: "R-01",
    title: "Create Your ID",
    meta: "Step one",
    body: "One Techfest ID gives you access to every competition, workshop and show.",
  },
  {
    code: "R-02",
    title: "Pick Your Arenas",
    meta: "Step two",
    body: "Choose competitions and workshops; team entries add members by ID.",
  },
  {
    code: "R-03",
    title: "Confirm & Arrive",
    meta: "Step three",
    body: "Passes, accommodation options and the running order land in your inbox.",
  },
];

function RegisterPage() {
  return (
    <PageShell
      tag="Access"
      title={
        <>
          Register for
          <br />
          Techfest &apos;26.
        </>
      }
      intro="Registration for the 2026 edition opens this season. This concept page shows the flow participants will follow."
    >
      <ItemList items={items} />
    </PageShell>
  );
}
