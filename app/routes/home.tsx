import { Link } from "react-router";

import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Research Project Website | Home" },
    {
      name: "description",
      content:
        "Research project showcase: domain, milestones, documents, presentations, and team.",
    },
  ];
}

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <section className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-xl backdrop-blur-sm sm:p-8">
        <h1 className="text-2xl font-semibold tracking-tight text-white">
          Welcome
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-zinc-300">
          This website presents our research project with clear sections for
          domain knowledge, project milestones, documents, presentations, and
          team details.
        </p>
        <p className="mt-3 text-sm text-zinc-500">
          Update this section with your actual project abstract and key value.
        </p>
      </section>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-lg backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-white">Project Snapshot</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
            <li>Research focus and context</li>
            <li>Core objectives and expected outcomes</li>
            <li>Technologies and implementation strategy</li>
          </ul>
        </article>
        <article className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-lg backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-white">Quick Access</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
            <li>
              <Link className="text-sky-400 hover:underline" to="/domain">
                Explore domain details
              </Link>
            </li>
            <li>
              <Link className="text-sky-400 hover:underline" to="/milestones">
                Review assessment milestones
              </Link>
            </li>
            <li>
              <Link className="text-sky-400 hover:underline" to="/documents">
                Open project documents
              </Link>
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
}
