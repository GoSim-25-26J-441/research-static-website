import { Link } from "react-router";

import { PageHero } from "~/components/PageHero";

import type { Route } from "./+types/about";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Research Project Website | About Us" },
    {
      name: "description",
      content:
        "Research team members, photos, achievements, and highlights for the SLIIT project.",
    },
  ];
}

const MEMBERS = [
  {
    name: "Manilka Dikkumbura",
    email: "IT22000644@my.sliit.lk",
    image: "Screenshot 2026-04-26 022803.png",
    role: "Team lead / coordination",
  },
  {
    name: "Christy Kingsley",
    email: "IT22051448@my.sliit.lk",
    image: "Screenshot 2026-04-26 022744.png",
    role: "Implementation & documentation",
  },
  {
    name: "Malith Rajapaksha",
    email: "IT22352330@my.sliit.lk",
    image: "Screenshot 2026-04-26 022713.png",
    role: "Architecture & integration",
  },
  {
    name: "Shenal Perera",
    email: "IT22347794@my.sliit.lk",
    image: "Screenshot 2026-04-26 022826.png",
    role: "Quality & evaluation",
  },
] as const;

function memberPhotoSrc(file: string) {
  return `/assets/images/members/${encodeURIComponent(file)}`;
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
      <PageHero
        eyebrow="People behind the project"
        title="About us"
        lead={
          <>
            <p>
              Official roster and contact emails for the research group. Photos
              load from{" "}
              <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-sm text-zinc-200">
                public/assets/images/members/
              </code>{" "}
              using the same filenames as the original HTML site.
            </p>

          </>
        }
        footer={
          <Link
            to="/contact"
            className="inline-flex rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-300"
          >
            Contact the team
          </Link>
        }
      />

      <section className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-xl backdrop-blur-sm sm:p-8">
        <h2 className="text-lg font-semibold text-white">Group members</h2>
        <ul className="mt-4 space-y-2 text-sm text-zinc-300">
          {MEMBERS.map((m) => (
            <li key={m.email} className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="font-medium text-zinc-100">{m.name}</span>
              <span className="text-zinc-600">—</span>
              <a
                href={`mailto:${m.email}`}
                className="text-emerald-400 hover:underline"
              >
                {m.email}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {MEMBERS.map((m) => (
            <figure
              key={m.email}
              className="flex flex-col rounded-xl border border-white/10 bg-zinc-950/40 p-3 text-center"
            >
              <img
                src={memberPhotoSrc(m.image)}
                alt={m.name}
                className="mx-auto size-28 rounded-full object-cover object-top ring-2 ring-white/10 sm:size-32"
                loading="lazy"
              />
              <figcaption className="mt-3 space-y-1">
                <span className="block text-xs font-semibold text-zinc-100">
                  {m.name}
                </span>
                <span className="block text-[10px] leading-snug text-zinc-500">
                  {m.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-lg backdrop-blur-sm sm:p-8">
        <h2 className="text-lg font-semibold text-white">Achievements / highlights</h2>
        <p className="mt-2 text-sm text-zinc-500">
          Turn this into a living list as you ship milestones and collect evidence.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
          <li>Add research or competition achievements.</li>
          <li>Add publication or prototype milestones.</li>
        </ul>
        <div className="mt-6 rounded-xl border border-emerald-400/20 bg-emerald-950/15 p-4 text-xs leading-relaxed text-zinc-400">
          Tip: link each bullet to a document or slide when you have something
          public—readers jump straight to proof.
        </div>
      </section>

      <p className="mt-10 text-center text-sm text-zinc-500">
        <Link to="/documents" className="text-emerald-400 hover:underline">
          Documents
        </Link>
        {" · "}
        <Link to="/" className="text-emerald-400 hover:underline">
          Home
        </Link>
      </p>
    </div>
  );
}
