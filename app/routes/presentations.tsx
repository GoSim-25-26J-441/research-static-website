import type { Route } from "./+types/presentations";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Research Project Website | Presentations" },
    { name: "description", content: "Slides used in assessments." },
  ];
}

const SLIDES: { label: string; href: string }[] = [
  { label: "Proposal Presentation", href: "/assets/slides/proposal.pdf" },
  { label: "Progress Presentation 1", href: "/assets/slides/pp1.pdf" },
  { label: "Progress Presentation 2", href: "/assets/slides/pp2.pdf" },
  { label: "Final Presentation", href: "/assets/slides/final.pdf" },
];

export default function PresentationsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <section className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-xl backdrop-blur-sm sm:p-8">
        <h1 className="text-xl font-semibold text-white">Presentation Slides</h1>
        <p className="mt-2 text-sm text-zinc-500">
          Add slide files to{" "}
          <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-zinc-200">
            public/assets/slides/
          </code>{" "}
          and keep links updated.
        </p>
        <ul className="mt-6 list-disc space-y-3 pl-5 text-sm text-zinc-300">
          {SLIDES.map((s) => (
            <li key={s.href}>
              {s.label} —{" "}
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sky-400 hover:underline"
              >
                Open Slides
              </a>
            </li>
          ))}
        </ul>
      </section>
      <p className="mt-8 text-center text-xs text-zinc-500">
        Keep placeholders for future presentations as needed.
      </p>
    </div>
  );
}
