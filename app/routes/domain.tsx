import type { ReactNode } from "react";
import { Link } from "react-router";

import { PageHero } from "~/components/PageHero";

import type { Route } from "./+types/domain";

export function meta({ }: Route.MetaArgs) {
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
        >
          <p>
            Recent studies show strong progress in separate areas of microservice engineering: AI-assisted architecture design, anti-pattern detection, simulation-based performance prediction, and cloud cost-aware deployment planning. Prior work confirms that each area can improve design quality, but most solutions focus on one concern at a time rather than supporting a continuous pre-deployment decision process.
          </p>
        </Card>
        <Card
          title="Research Gap"
        >
          <p>
            Existing approaches remain fragmented and provide limited support for converting mixed early-stage inputs (chat, diagrams, and partial specifications) into structured architecture models that can be validated, simulated, and evaluated for cost in one workflow. There is a clear need for a unified framework that links these stages with traceability and iterative refinement.
          </p>
        </Card>
        <Card
          title="Research Problem"
        >
          <p>Microservice design decisions are often made when requirements are incomplete and deployment assumptions are uncertain. This makes it difficult to identify structural flaws, predict runtime behavior, and estimate deployment cost before implementation, increasing the risk of expensive redesigns in later development stages.</p>
        </Card>
        <Card title="Research Objectives">
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Transform early multimodal design inputs into structured architecture representations.</li>
            <li>Detect and explain microservice anti-patterns with actionable refinement suggestions.</li>
            <li>Predict runtime performance through scenario-based simulation before deployment.</li>
            <li>Analyze multi-cloud pricing and select the most cost-effective cloud platform for deployment with pricing details.</li>
          </ul>
        </Card>
        <Card
          title="Methodology"

        >
          <p>
            The study follows a modular pipeline with four connected stages: Design Input Processing, Architecture Model Generation with Anti-Pattern Detection, Realtime Performance Simulation, and Cost Analysis with Suggestions. Outputs of each stage are reused by the next stage, while versioning and persistence support iterative re-analysis and evidence-based design improvement.          </p>
        </Card>
        <Card
          title="Technologies Used"
        >
          <ul className="list-disc space-y-1.5 pl-5">
            <li>LLM-assisted design input interpretation</li>
            <li>Graph-based architecture modeling and rule-based analysis</li>
            <li>Realtime/discrete-event simulation using YAML scenarios</li>
            <li>Interactive visualization and centralized backend orchestration</li>
            <li>Multi-cloud pricing analysis (AWS and Azure)</li>

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
