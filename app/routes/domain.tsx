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
            Recent studies show strong progress in separate areas of microservice engineering: AI-assisted architecture design[1], anti-pattern detection[2][3], simulation-based performance prediction,[4] and cloud cost-aware deployment planning[5]. Prior work confirms that each area can improve design quality, but most solutions focus on one concern at a time rather than supporting a continuous pre-deployment decision process.
          </p>
          <h3 className="mt-4 text-sm font-semibold text-zinc-100">References</h3>
          <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-xs leading-relaxed text-zinc-400">
            <li>
              M. Söylemez, B. Tekinerdogan, and A. Kolukısa Tarhan, "Challenges and
              Solution Directions of Microservice Architectures: A Systematic
              Literature Review," <em>Applied Sciences</em>, vol. 12, no. 11, Art. no. 5507,
              2022.
            </li>
            <li>
              D. Narváez, N. Battaglia, A. Fernández, and G. Rossi, "Designing
              Microservices Using AI: A Systematic Literature Review," <em>Software</em>, vol.
              4, no. 1, Art. no. 6, 2025.
            </li>
            <li>
              A. Koenig, B. Allaert, and E. Renaux, "NEURAL-UML: Intelligent
              Recognition System of Structural Elements in UML Class Diagram," in
              <em>Proc. ACM/IEEE Int. Conf. Model Driven Engineering Languages and
                Systems Companion (MODELS-C)</em>, 2023, pp. 605-613.
            </li>
            <li>
              T. Hübener, M. R. V. Chaudron, Y. Luo, P. Vallen, J. van der Kogel, and
              T. Liefheid, "Automatic Anti-Pattern Detection in Microservice
              Architectures Based on Distributed Tracing," in <em>Proc. IEEE/ACM 44th
                Int. Conf. Software Engineering: Software Engineering in Practice
                (ICSE-SEIP)</em>, 2022, pp. 75-76.
            </li>
            <li>
              H. Farsi, D. Allaki, A. En-Nouaary, and M. Dahchour, "A Graph-based
              Solution to Deal with Cyclic Dependencies in Microservices
              Architecture," in <em>Proc. 9th Int. Conf. Future Internet of Things and Cloud
                (FiCloud)</em>, 2022.
            </li>
          </ol>
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
            <li>TypeScript, Next.js, and Tailwind CSS for the research web interface</li>
            <li>LLM-assisted design input interpretation            </li>
            <li>Graph-based architecture modeling with rule-based anti-pattern detection</li>
            <li>Scenario-driven discrete-event simulation using YAML configurations</li>
            <li>REST-based backend orchestration with persistent run/result management</li>
            <li>Multi-cloud cost comparison workflows for AWS and Azure</li>

          </ul>
        </Card>
      </div>


    </div>
  );
}
