import { createFileRoute } from "@tanstack/react-router";

import { AccessForm } from "@/components/site/AccessForm";
import { PageShell } from "@/components/site/PageShell";

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
      showRegisterCta={false}
    >
      <AccessForm mode="register" />
    </PageShell>
  );
}
