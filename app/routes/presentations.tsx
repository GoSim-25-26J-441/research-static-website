import { Link } from "react-router";

import { OpenButton } from "~/components/OpenButton";
import { PageHero } from "~/components/PageHero";
import { driveSlideUrl, type SlideDriveKey } from "~/lib/driveLinks";

import type { Route } from "./+types/presentations";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Research Project Website | Presentations" },
    {
      name: "description",
      content:
        "Proposal, progress, and final presentation decks with links when available.",
    },
  ];
}

const SLIDES: { label: string; key: SlideDriveKey; blurb: string }[] = [
  {
    label: "Proposal Presentation",
    key: "proposal",
    blurb: "Scope, novelty, and plan—what assessors see first.",
  },
  {
    label: "Progress Presentation 1",
    key: "pp1",
    blurb: "Early implementation evidence and risks.",
  },
  {
    label: "Progress Presentation 2",
    key: "pp2",
    blurb: "Deeper demo, metrics, and comparison to objectives.",
  },
  {
    label: "Final Presentation",
    key: "final",
    blurb: "End-state story, evaluation, and future work.",
  },
];

export default function PresentationsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
      <PageHero
        eyebrow="Slides & demos"
        title="Presentation slides"
        lead={
          <p>
            Slide decks for each assessment checkpoint. When a deck is ready,
            use <span className="text-zinc-400">Open</span> to view it in a new tab.
            Add or swap rows as your timeline evolves.
          </p>
        }
        footer={
          <Link
            to="/documents"
            className="inline-flex rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-300"
          >
            Project documents
          </Link>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {SLIDES.map((s) => {
          const href = driveSlideUrl(s.key);
          return (
            <article
              key={s.key}
              className="flex flex-col rounded-2xl border border-white/10 bg-zinc-900/50 p-5 shadow-lg backdrop-blur-sm transition hover:border-emerald-400/35"
            >
              <h2 className="text-base font-semibold text-white">{s.label}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                {s.blurb}
              </p>
              <div className="mt-4">
                <OpenButton href={href} />
              </div>
            </article>
          );
        })}
      </div>

      <section className="mt-12 rounded-2xl border border-white/10 bg-zinc-900/40 p-6 sm:p-8">
        <h3 className="text-sm font-semibold text-white">Speaker checklist</h3>
        <ul className="mt-3 space-y-2 text-sm text-zinc-400">
          <li className="flex gap-2">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-400/80" />
            One slide that maps objectives → what was built → evidence.
          </li>
          <li className="flex gap-2">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-400/80" />
            Backup offline recording or screenshots if live demo can fail.
          </li>
          <li className="flex gap-2">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-400/80" />
            Align narrative with the{" "}
            <Link to="/domain" className="text-emerald-400 hover:underline">
              Domain
            </Link>{" "}
            page so terminology matches.
          </li>
        </ul>
      </section>

      <p className="mt-10 text-center text-sm text-zinc-500">
        <Link to="/milestones" className="text-emerald-400 hover:underline">
          Milestones
        </Link>
        {" · "}
        <Link to="/contact" className="text-emerald-400 hover:underline">
          Contact
        </Link>
      </p>
    </div>
  );
}
