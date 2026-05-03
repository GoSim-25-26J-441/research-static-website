import type { Route } from "./+types/milestones";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Research Project Website | Milestones" },
    { name: "description", content: "Assessments and progress tracking." },
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
    marks: "XX%",
    description: "Initial concept and scope presentation.",
  },
  {
    title: "Progress Presentation 1",
    date: "2026-01-06",
    marks: "XX%",
    description: "Early progress review and feedback.",
  },
  {
    title: "Progress Presentation 2",
    date: "2026-03-10",
    marks: "XX%",
    description: "Mid-to-late stage implementation update.",
  },
  {
    title: "Final Assessment",
    date: "2026-xx-xx",
    marks: "XX%",
    description: "Final product demonstration and evaluation.",
  },
  {
    title: "Viva",
    date: "2026-05-05",
    marks: "XX%",
    description: "Individual and group understanding assessment.",
  },
];

export default function MilestonesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <section className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-xl backdrop-blur-sm sm:p-8">
        <h1 className="text-xl font-semibold text-white">Assessment Milestones</h1>
        <p className="mt-2 text-sm text-zinc-500">
          Expand each item to view assessment details, date, and marks.
        </p>
        <div className="mt-6 space-y-3">
          {MILESTONES.map((m) => (
            <details
              key={m.title}
              open={m.defaultOpen}
              className="rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3"
            >
              <summary className="cursor-pointer text-sm font-semibold text-zinc-100">
                {m.title}
              </summary>
              <div className="mt-3 space-y-2 border-t border-white/5 pt-3 text-sm text-zinc-300">
                <p>
                  <span className="text-zinc-500">Date:</span> {m.date}
                </p>
                <p>
                  <span className="text-zinc-500">Marks Allocated:</span> {m.marks}
                </p>
                <p>
                  <span className="text-zinc-500">Description:</span> {m.description}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>
      <p className="mt-8 text-center text-xs text-zinc-500">
        Use these milestone cards as the dropdown-style menu.
      </p>
    </div>
  );
}
