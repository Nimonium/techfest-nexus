import type { ReactNode } from "react";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Cta, GridBackdrop, HudLabel, Reveal, SectionTag } from "./primitives";

export function PageShell({
  tag,
  title,
  intro,
  children,
  showRegisterCta = true,
}: {
  tag: string;
  title: ReactNode;
  intro: string;
  children?: ReactNode;
  showRegisterCta?: boolean;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative overflow-hidden border-b border-border px-5 pt-36 pb-20 md:px-10 md:pt-48 md:pb-28">
          <GridBackdrop />
          <div className="relative mx-auto max-w-[1600px]">
            <Reveal>
              <SectionTag>{tag}</SectionTag>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="display-tight mt-6 text-[clamp(2.75rem,10vw,8rem)]">{title}</h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
                {intro}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap gap-4">
                {showRegisterCta && (
                  <Cta to="/register">
                    Register Now <span aria-hidden>→</span>
                  </Cta>
                )}
                <Cta to="/" variant="outline">
                  Back to home
                </Cta>
              </div>
            </Reveal>
            <div className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-4">
              <HudLabel label="Sys.Status" value="ONLINE" live />
              <HudLabel label="Node" value="TF/26" />
              <HudLabel label="Location" value="IITB // MUMBAI" />
              <HudLabel label="Window" value="DEC 2026" />
            </div>
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export function ItemList({
  items,
}: {
  items: { code: string; title: string; meta: string; body: string }[];
}) {
  return (
    <section className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1600px] border-t border-border">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05}>
            <article className="group grid grid-cols-[auto_minmax(0,1fr)] gap-x-6 gap-y-3 border-b border-border py-8 transition-colors hover:bg-surface/40 md:grid-cols-[6rem_minmax(0,1fr)_minmax(0,1fr)_auto] md:items-baseline md:px-4">
              <span className="font-mono text-xs text-signal">{item.code}</span>
              <h2 className="font-display text-2xl font-bold tracking-tight uppercase md:text-3xl">
                {item.title}
              </h2>
              <p className="col-span-2 max-w-md text-sm text-muted-foreground md:col-span-1">
                {item.body}
              </p>
              <span className="label-mono col-span-2 md:col-span-1 md:justify-self-end">
                {item.meta}
              </span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
