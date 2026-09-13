import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";

type AccessFormProps = {
  mode: "login" | "register";
};

export function AccessForm({ mode }: AccessFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSubmitted(true);
  }

  return (
    <section className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1600px] gap-12 border-t border-border pt-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(20rem,0.65fr)] lg:justify-between">
        <div>
          <p className="label-mono text-signal">TF/26 // Secure Access</p>
          <h2 className="display-tight mt-5 max-w-2xl text-4xl sm:text-6xl">
            {mode === "register" ? "Create your Techfest ID." : "Return to your dashboard."}
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
            {mode === "register"
              ? "Enter your details to begin registration for competitions, workshops and festival access."
              : "Use the email linked to your Techfest ID to continue."}
          </p>
        </div>

        {submitted ? (
          <div role="status" className="border border-signal/50 bg-surface p-7 sm:p-9">
            <p className="label-mono text-signal">Signal received</p>
            <h3 className="mt-5 font-display text-2xl font-bold uppercase">
              {mode === "register" ? "Registration started" : "Login request received"}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              This concept preview does not create live accounts yet, but the form and validation are working.
            </p>
            <Button
              type="button"
              variant="outline"
              onClick={() => setSubmitted(false)}
              className="mt-7 h-auto rounded-none border-border-strong px-6 py-3 font-mono text-[0.7rem] tracking-[0.18em] uppercase hover:border-signal hover:text-signal"
            >
              Edit details
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-5" aria-label={mode === "register" ? "Registration form" : "Login form"}>
            {mode === "register" && (
              <label className="grid gap-2">
                <span className="label-mono">Full name</span>
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="h-12 border border-input bg-surface px-4 text-sm outline-none transition-colors focus:border-signal"
                  placeholder="Your name"
                />
              </label>
            )}
            <label className="grid gap-2">
              <span className="label-mono">Email address</span>
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                className="h-12 border border-input bg-surface px-4 text-sm outline-none transition-colors focus:border-signal"
                placeholder="you@example.com"
              />
            </label>
            <label className="grid gap-2">
              <span className="label-mono">Password</span>
              <input
                required
                minLength={8}
                type="password"
                name="password"
                autoComplete={mode === "register" ? "new-password" : "current-password"}
                className="h-12 border border-input bg-surface px-4 text-sm outline-none transition-colors focus:border-signal"
                placeholder="Minimum 8 characters"
              />
            </label>
            {mode === "register" && (
              <label className="grid gap-2">
                <span className="label-mono">Institution</span>
                <input
                  required
                  name="institution"
                  autoComplete="organization"
                  className="h-12 border border-input bg-surface px-4 text-sm outline-none transition-colors focus:border-signal"
                  placeholder="College or organisation"
                />
              </label>
            )}
            <Button
              type="submit"
              className="mt-2 h-auto rounded-none bg-signal px-6 py-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase hover:bg-foreground"
            >
              {mode === "register" ? "Create Techfest ID →" : "Login →"}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}