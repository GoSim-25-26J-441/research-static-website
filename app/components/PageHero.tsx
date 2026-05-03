import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead?: ReactNode;
  /** e.g. action buttons row */
  footer?: ReactNode;
};

export function PageHero({ eyebrow, title, lead, footer }: PageHeroProps) {
  return (
    <section className="mb-10 overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-zinc-900/80 via-zinc-900/50 to-emerald-950/25 p-6 shadow-xl backdrop-blur-sm sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/90">
        {eyebrow}
      </p>
      <h1 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h1>
      {lead ? (
        <div className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base">
          {lead}
        </div>
      ) : null}
      {footer ? <div className="mt-6 flex flex-wrap gap-3">{footer}</div> : null}
    </section>
  );
}
