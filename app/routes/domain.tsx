import type { ReactNode } from "react";
import { Link } from "react-router";

import { PageHero } from "~/components/PageHero";

import type { Route } from "./+types/domain";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Research Project Website | Domain" },
    {
      name: "description",
      content:
        "Literature survey, gap, problem, objectives, methodology, and technologies for the research project.",
    },
  ];
}

function Card({
  title,
  hint,
  children,
}: {
  title: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-lg backdrop-blur-sm md:p-7">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      {hint ? (
        <p className="mt-2 text-xs leading-relaxed text-zinc-500">{hint}</p>
      ) : null}
      <div className="mt-3 text-sm leading-relaxed text-zinc-300">{children}</div>
    </section>
  );
}

export default function DomainPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
      <PageHero
        eyebrow="Research foundation"
        title="Domain & research context"
        lead={
          <>
            <p>
              This page mirrors the original HTML site: six blocks you can fill
              as literature reviews complete and your problem statement stabilizes.
              Keep language concrete—assessors should see traceability from gap →
              objectives → methodology.
            </p>
            <p className="mt-3 text-zinc-500">
              Domain details can be refined as research progresses.
            </p>
          </>
        }
        footer={
          <>
            <Link
              to="/milestones"
              className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View milestones
            </Link>
            <Link
              to="/documents"
              className="inline-flex rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-300"
            >
              Open documents
            </Link>
          </>
        }
      />

      <div className="grid gap-6 md:grid-cols-2">
        <Card
          title="Literature Survey"
          hint="Cite primary studies; group themes; call out conflicting results."
        >
          <p>
            Summarize the key findings from existing studies relevant to your
            project.
          </p>
        </Card>
        <Card
          title="Research Gap"
          hint="One paragraph on what is missing today—not only 'no tool exists'."
        >
          <p>
            Explain what current solutions miss and why your work is needed.
          </p>
        </Card>
        <Card
          title="Research Problem"
          hint="Prefer a single crisp problem statement you can measure against."
        >
          <p>Define the specific problem your team is solving.</p>
        </Card>
        <Card title="Research Objectives" hint="SMART-style bullets work well here.">
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Objective 1</li>
            <li>Objective 2</li>
            <li>Objective 3</li>
          </ul>
        </Card>
        <Card
          title="Methodology"
          hint="Include data sources, experiments, baselines, and validation steps."
        >
          <p>
            Provide your approach, data handling method, and evaluation process.
          </p>
        </Card>
        <Card
          title="Technologies Used"
          hint="Map each stack choice to a part of your architecture or pipeline."
        >
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Frontend stack</li>
            <li>Tools and frameworks</li>
            <li>Supporting platforms</li>
          </ul>
        </Card>
      </div>

      <section className="mt-12 rounded-2xl border border-emerald-400/25 bg-emerald-950/15 p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-white">Traceability checklist</h2>
        <ul className="mt-4 space-y-2.5 text-sm text-zinc-300">
          <li className="flex gap-2">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-400/80" />
            Each objective should tie back to the gap and forward to a milestone
            or deliverable.
          </li>
          <li className="flex gap-2">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-400/80" />
            Methodology should name how you will know the solution succeeded.
          </li>
          <li className="flex gap-2">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-400/80" />
            Technologies should appear again in documents or repo README when
            frozen.
          </li>
        </ul>
        <p className="mt-6 text-sm text-zinc-500">
          Back to{" "}
          <Link to="/" className="font-medium text-emerald-400 hover:underline">
            Home
          </Link>{" "}
          or continue to{" "}
          <Link to="/presentations" className="font-medium text-emerald-400 hover:underline">
            Presentations
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
