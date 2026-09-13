import { createFileRoute } from "@tanstack/react-router";

import { AccessForm } from "@/components/site/AccessForm";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — Techfest '26, IIT Bombay" },
      { name: "description", content: "Log in to your Techfest '26 participant dashboard." },
      { property: "og:title", content: "Login — Techfest '26, IIT Bombay" },
      { property: "og:description", content: "Access your Techfest '26 participant dashboard." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <PageShell
      tag="Participant Access"
      title={<>Welcome<br />back.</>}
      intro="Access your registrations, team entries and festival schedule from one place."
      showRegisterCta={false}
    >
      <AccessForm mode="login" />
    </PageShell>
  );
}