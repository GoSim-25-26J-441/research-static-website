import { Link } from "react-router";

import { PageHero } from "~/components/PageHero";

import type { Route } from "./+types/milestones";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Research Project Website | Milestones" },
    {
      name: "description",
      content:
        "Assessment timeline: proposal, progress reviews, final assessment, and viva with dates and mark placeholders.",
    },
  ];
}

type Milestone = {
  title: string;
  defaultOpen?: boolean;
  date: string;
  marks: string;
  description: string;
};

const MILESTONES: Milestone[] = [
  {
    title: "Project Proposal",
    defaultOpen: true,
    date: "2025-08-15",
    marks: "6%",
    description: "Initial concept and scope presentation.",
  },
  {
    title: "Progress Presentation 1",
    date: "2026-01-06",
    marks: "15%",
    description: "Early progress review and feedback.",
  },
  {
    title: "Progress Presentation 2",
    date: "2026-03-10",
    marks: "18%",
    description: "Mid-to-late stage implementation update.",
  },
  {
    title: "Final Assessment",
    date: "2026-05-05",
    marks: "10%",
    description: "Final product demonstration and evaluation.",
  },
  {
    title: "Viva",
    date: "2026-05-05",
    marks: "10%",
    description: "Individual and group understanding assessment.",
  },
];

export default function MilestonesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
      <PageHero
        eyebrow="Assessments & progress"
        title="Assessment milestones"
        lead={
          <>
            <p>
              Expand each item for date, allocated marks, and a short narrative.
              Replace <span className="font-mono text-zinc-400">XX%</span> and
              placeholder dates when the timetable is confirmed.
            </p>
            <p className="mt-3 text-zinc-500">
              Use these milestone cards as the dropdown-style menu—same structure
              as the original HTML site.
            </p>
          </>
        }
        footer={
          <Link
            to="/documents"
            className="inline-flex rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-300"
          >
            Linked documents
          </Link>
        }
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
        <section className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-xl backdrop-blur-sm sm:p-8">
          <h2 className="sr-only">Milestone list</h2>
          <div className="space-y-3">
            {MILESTONES.map((m) => (
              <details
                key={m.title}
                open={m.defaultOpen}
                className="group rounded-xl border border-white/10 bg-zinc-950/50 px-4 py-3 open:border-emerald-500/25"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold text-zinc-100 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center gap-2">
                    <span
                      className="size-2 shrink-0 rounded-full bg-emerald-400/90 transition group-open:ring-2 group-open:ring-emerald-400/40"
                      aria-hidden
                    />
                    {m.title}
                  </span>
                </summary>
                <div className="mt-3 space-y-2 border-t border-white/5 pt-3 text-sm text-zinc-300">
                  <p>
                    <span className="text-zinc-500">Date:</span> {m.date}
                  </p>
                  <p>
                    <span className="text-zinc-500">Marks allocated:</span> {m.marks}
                  </p>
                  <p>
                    <span className="text-zinc-500">Description:</span> {m.description}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-5">
            <h3 className="text-sm font-semibold text-white">Before each review</h3>
            <ul className="mt-3 space-y-2 text-xs leading-relaxed text-zinc-400">
              <li>Freeze a tag in Git and note the hash in your slides.</li>
              <li>Export diagrams or metrics as images for offline demo.</li>
              <li>Align demo script with objectives on the Domain page.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-5">
            <h3 className="text-sm font-semibold text-white">Artifacts</h3>
            <p className="mt-2 text-xs leading-relaxed text-zinc-400">
              Slide decks are linked from{" "}
              <Link to="/presentations" className="text-emerald-400 hover:underline">
                Presentations
              </Link>{" "}
              page.
            </p>
          </div>
        </aside>
      </div>

      <p className="mt-10 text-center text-xs text-zinc-500">
        Need the team roster? See{" "}
        <Link to="/about" className="text-emerald-400 hover:underline">
          About us
        </Link>
        .
      </p>
    </div>
  );
}
