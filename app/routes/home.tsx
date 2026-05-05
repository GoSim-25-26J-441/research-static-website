import { Link } from "react-router";

import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Research Project Website | Home" },
    {
      name: "description",
      content:
        "Structured research showcase: domain, milestones, documents, presentations, team, and contact — SLIIT final-year project.",
    },
  ];
}

const EXPLORE_LINKS = [
  {
    to: "/domain",
    title: "Domain",
    body: "Literature survey, research gap, problem, objectives, methodology, and technologies.",
  },
  {
    to: "/milestones",
    title: "Milestones",
    body: "Assessment timeline: proposals, progress reviews, final evaluation, and viva.",
  },
  {
    to: "/documents",
    title: "Documents",
    body: "Charters, proposals, checklists, and reports with download links as they are published.",
  },
  {
    to: "/presentations",
    title: "Presentations",
    body: "Slide decks for proposal, progress, and final presentations.",
  },
  {
    to: "/about",
    title: "About us",
    body: "Team roster, member contacts, and highlights you can update over the year.",
  },
  {
    to: "/contact",
    title: "Contact",
    body: "General phone and email, plus a ready-to-use inquiry template.",
  },
] as const;

const GLANCE = [
  { label: "Institution", value: "SLIIT — final-year research" },
  { label: "Focus", value: "GO-BASED SIMULATION FOR MICROSERVICES PERFORMANCE PREDICTION" },
  { label: "Site role", value: "Central showcase for project progress and evidence" },
  { label: "Status", value: "Completed — final evaluation submitted" },
] as const;

const DELIVERABLES = [
  "Project charter & proposal (see Documents)",
  "Progress presentations & demo artifacts",
  "Technical documentation & repository links",
  "Final report (group + individual)",
  "Assessment evidence (slides, screenshots, logs)",
] as const;

function CardShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-zinc-900/50 shadow-lg backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
      {/* Hero — keeps original welcome copy + HTML subtitle as eyebrow */}
      <section className="overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-zinc-900/80 via-zinc-900/50 to-emerald-950/25 p-6 shadow-xl backdrop-blur-sm sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/90">
          A structured project showcase site
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Welcome
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-zinc-200 sm:text-base">
          This website presents our final-year research project, "GO-BASED SIMULATION FOR MICROSERVICES PERFORMANCE PREDICTION", including domain context, milestones, documents, presentations, and team details.
          <br />
          <br />
          The project provides a pre-deployment workflow to process design inputs, generate architecture models, detect anti-patterns, simulate runtime behavior, and compare multi-cloud costs before implementation.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/domain"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow transition hover:bg-zinc-100"
          >
            Read the domain section
          </Link>
          <Link
            to="/milestones"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            View milestones
          </Link>
        </div>
      </section>

      {/* Original two-column blocks — same bullets & links, tightened copy */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-lg backdrop-blur-sm md:p-7">
          <h2 className="text-lg font-semibold text-white">Project Snapshot</h2>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-300">
            <li>Design-time prediction of latency, throughput, and resource usage</li>
            <li>Early anti-pattern detection and architecture refinement support</li>
            <li>Integrated cloud cost analysis across major cloud providers</li>
          </ul>
        </article>
        <article className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-lg backdrop-blur-sm md:p-7">
          <h2 className="text-lg font-semibold text-white">Quick Access</h2>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-300">
            <li>
              <Link className="font-medium text-emerald-400 hover:underline" to="/domain">
                Explore domain details
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-emerald-400 hover:underline"
                to="/milestones"
              >
                Review assessment milestones
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-emerald-400 hover:underline"
                to="/documents"
              >
                Open project documents
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-emerald-400 hover:underline"
                to="/presentations"
              >
                Presentation slides
              </Link>
            </li>
          </ul>
        </article>
      </div>

      {/* Abstract & scope — editable body copy */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white">Abstract &amp; scope</h2>

        <CardShell className="mt-5 p-6 sm:p-8">
          <div className="space-y-4 text-sm leading-relaxed text-zinc-300">
            <p>
              <strong className="text-zinc-100">Problem context.</strong>{" "}
              Modern microservice systems are often deployed without reliable
              pre-deployment evidence about latency, throughput, resource usage,
              and cost behavior. Existing evaluations typically happen late,
              after implementation and environment setup, making redesigns costly
              and time-consuming. This research targets that gap by bringing
              prediction and architecture feedback to the design phase; detailed
              motivation and literature grounding are documented under{" "}
              <Link to="/domain" className="text-emerald-400 hover:underline">
                Domain
              </Link>
              .
            </p>
            <p>
              <strong className="text-zinc-100">Proposed contribution.</strong>{" "}
              We are building a pre-deployment decision-support framework that
              transforms architecture and workload inputs into simulation-ready
              models, highlights performance anti-patterns, and compares cloud
              hosting cost scenarios before coding begins. Evaluation focuses on
              prediction fidelity, decision quality, and practical usefulness to
              developers and architects.
            </p>
            <p>
              <strong className="text-zinc-100">Ethics &amp; feasibility.</strong>{" "}
              The study avoids sensitive personal data and uses controlled
              benchmark inputs, synthetic traces, and documented assumptions.
              Feasibility risks are managed through incremental milestones,
              reproducible experiment scripts, and fallback strategies for
              tooling or cloud API constraints.
            </p>
          </div>
        </CardShell>
      </section>

      {/* At a glance */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white">Project at a glance</h2>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {GLANCE.map((row) => (
            <CardShell key={row.label} className="p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
                {row.label}
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-100">{row.value}</p>
            </CardShell>
          ))}
        </div>
      </section>

      {/* Explore grid */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white">Explore this site</h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EXPLORE_LINKS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group rounded-2xl border border-white/10 bg-zinc-900/40 p-5 transition hover:border-emerald-400/45 hover:bg-zinc-900/70"
            >
              <h3 className="text-base font-semibold text-white group-hover:text-emerald-300">
                {item.title}
                <span className="ml-1 text-emerald-400 opacity-0 transition group-hover:opacity-100">
                  →
                </span>
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
