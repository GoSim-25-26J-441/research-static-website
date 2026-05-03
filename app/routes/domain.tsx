import type { ReactNode } from "react";

import type { Route } from "./+types/domain";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Research Project Website | Domain" },
    { name: "description", content: "Domain and research context." },
  ];
}

function Card({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-lg backdrop-blur-sm">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      <div className="mt-3 text-sm leading-relaxed text-zinc-300">{children}</div>
    </section>
  );
}

export default function DomainPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <p className="mb-8 text-sm text-zinc-400">
        Domain and research context — aligned with the original HTML site
        structure.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        <Card title="Literature Survey">
          <p>
            Summarize the key findings from existing studies relevant to your
            project.
          </p>
        </Card>
        <Card title="Research Gap">
          <p>
            Explain what current solutions miss and why your work is needed.
          </p>
        </Card>
        <Card title="Research Problem">
          <p>Define the specific problem your team is solving.</p>
        </Card>
        <Card title="Research Objectives">
          <ul className="list-disc space-y-1 pl-5">
            <li>Objective 1</li>
            <li>Objective 2</li>
            <li>Objective 3</li>
          </ul>
        </Card>
        <Card title="Methodology">
          <p>
            Provide your approach, data handling method, and evaluation process.
          </p>
        </Card>
        <Card title="Technologies Used">
          <ul className="list-disc space-y-1 pl-5">
            <li>Frontend stack</li>
            <li>Tools and frameworks</li>
            <li>Supporting platforms</li>
          </ul>
        </Card>
      </div>
      <p className="mt-10 text-center text-xs text-zinc-500">
        Domain details can be refined as research progresses.
      </p>
    </div>
  );
}
