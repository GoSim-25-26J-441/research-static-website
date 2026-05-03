import { Link } from "react-router";

import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
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
  { label: "Focus", value: "Architecture, tooling & evaluation" },
  { label: "Site role", value: "Single hub for assessors & visitors" },
  { label: "Status", value: "Active — content updated each sprint" },
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
          This website presents our research project with clear sections for
          domain knowledge, project milestones, documents, presentations, and
          team details.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-500">
          Update this section with your actual project abstract and key value.
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
          <p className="mt-2 text-sm text-zinc-500">
            High-level framing you can refine as the research matures.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-300">
            <li>Research focus and context</li>
            <li>Core objectives and expected outcomes</li>
            <li>Technologies and implementation strategy</li>
          </ul>
        </article>
        <article className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-lg backdrop-blur-sm md:p-7">
          <h2 className="text-lg font-semibold text-white">Quick Access</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Jump straight to the artifacts assessors ask for first.
          </p>
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
        <p className="mt-2 text-sm text-zinc-500">
          Replace the paragraphs below with your final abstract, novelty, and
          scope boundaries.
        </p>
        <CardShell className="mt-5 p-6 sm:p-8">
          <div className="space-y-4 text-sm leading-relaxed text-zinc-300">
            <p>
              <strong className="text-zinc-100">Problem context.</strong>{" "}
              Summarize the industry or academic setting, why existing approaches
              fall short, and what users or systems stand to gain from your
              solution. Tie this to the gap you document under{" "}
              <Link to="/domain" className="text-emerald-400 hover:underline">
                Domain
              </Link>
              .
            </p>
            <p>
              <strong className="text-zinc-100">Proposed contribution.</strong>{" "}
              State the artifact you will deliver (platform, framework, study,
              dataset, etc.), the evaluation you will run, and how success will
              be measured against your objectives.
            </p>
            <p>
              <strong className="text-zinc-100">Ethics &amp; feasibility.</strong>{" "}
              Briefly note data handling, participant involvement (if any), and
              major risks or dependencies (hardware, licenses, APIs).
            </p>
          </div>
        </CardShell>
      </section>

      {/* At a glance */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white">Project at a glance</h2>
        <p className="mt-2 text-sm text-zinc-500">
          Snapshot row for visitors — swap values anytime.
        </p>
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
        <p className="mt-2 max-w-2xl text-sm text-zinc-500">
          Each area mirrors the original HTML site structure, now in one React
          experience with shared navigation and visuals.
        </p>
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
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.body}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Deliverables + milestone teaser */}
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <CardShell className="p-6 sm:p-7">
          <h2 className="text-lg font-semibold text-white">Expected deliverables</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Check off internally; public links live under Documents &amp;
            Presentations.
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-zinc-300">
            {DELIVERABLES.map((d) => (
              <li key={d} className="flex gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-400/85" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </CardShell>
        <CardShell className="p-6 sm:p-7">
          <h2 className="text-lg font-semibold text-white">Assessment rhythm</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Dates and weightings are maintained on the milestones page.
          </p>
          <ol className="mt-4 space-y-3 text-sm text-zinc-300">
            <li className="flex gap-3">
              <span className="font-mono text-xs text-zinc-500">01</span>
              <span>Project proposal — scope, risks, and plan sign-off.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-xs text-zinc-500">02</span>
              <span>Progress presentations — demos, metrics, and pivots.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-xs text-zinc-500">03</span>
              <span>Final assessment &amp; viva — outcomes and Q&amp;A.</span>
            </li>
          </ol>
          <div className="mt-6">
            <Link
              to="/milestones"
              className="text-sm font-semibold text-emerald-400 hover:underline"
            >
              Open full milestone breakdown
            </Link>
          </div>
        </CardShell>
      </div>

      {/* Bottom CTA */}
      <section className="mt-12 rounded-2xl border border-emerald-400/30 bg-emerald-950/20 px-6 py-8 text-center sm:px-10">
        <h2 className="text-lg font-semibold text-white sm:text-xl">
          Questions for the team?
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-zinc-400">
          Use the contact page for phone, email, and a copy-paste inquiry
          template you can tailor before sending.
        </p>
        <Link
          to="/contact"
          className="mt-5 inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-2.5 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-300"
        >
          Go to contact
        </Link>
      </section>
    </div>
  );
}
