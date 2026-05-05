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
    linkedin:
      import.meta.env.VITE_LINKEDIN_MANILKA_DIKKUMBURA ||
      "https://www.linkedin.com/",
  },
  {
    name: "Christy Kingsley",
    email: "IT22051448@my.sliit.lk",
    image: "Screenshot 2026-04-26 022744.png",
    role: "Implementation & documentation",
    linkedin:
      import.meta.env.VITE_LINKEDIN_CHRISTY_KINGSLEY ||
      "https://www.linkedin.com/",
  },
  {
    name: "Malith Rajapaksha",
    email: "IT22352330@my.sliit.lk",
    image: "Screenshot 2026-04-26 022713.png",
    role: "Architecture & integration",
    linkedin:
      import.meta.env.VITE_LINKEDIN_MALITH_RAJAPAKSHA ||
      "https://www.linkedin.com/",
  },
  {
    name: "Shenal Perera",
    email: "IT22347794@my.sliit.lk",
    image: "Screenshot 2026-04-26 022826.png",
    role: "Quality & evaluation",
    linkedin:
      import.meta.env.VITE_LINKEDIN_SHENAL_PERERA ||
      "https://www.linkedin.com/",
  },
] as const;

const SUPERVISORS = [
  {
    name: "Mr. Vishan Jayasinghearachchi",
    image: "vishanj_20260426_1777221097.jpeg",
    role: "Supervisor",
  },
  {
    name: "Mr. Jeewaka Perera",
    image: "jeewakap_20260427_1777280142.jpeg",
    role: "Co-Supervisor",
  },

] as const;

function memberPhotoSrc(file: string) {
  return `/assets/images/members/${encodeURIComponent(file)}`;
}

function LinkedInIcon({ className = "size-3.5 text-blue-500" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M4.98 3.5a2.48 2.48 0 1 0 0 4.96 2.48 2.48 0 0 0 0-4.96ZM3 9h4v12H3V9Zm7 0h3.84v1.71h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.53c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.92V21h-4V9Z" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
      <PageHero
        eyebrow="People behind the project"
        title="About us"

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
              <span className="text-zinc-600">|</span>
              <a
                href={m.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-emerald-400 hover:underline"
              >
                <LinkedInIcon />
                LinkedIn
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

        <div className="mt-12">
          <h3 className="text-base font-semibold text-white">Supervisors</h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {SUPERVISORS.map((s) => (
              <figure
                key={s.name}
                className="flex flex-col rounded-xl border border-white/10 bg-zinc-950/40 p-3 text-center"
              >
                <img
                  src={memberPhotoSrc(s.image)}
                  alt={s.name}
                  className="mx-auto size-28 rounded-full object-cover object-top ring-2 ring-white/10 sm:size-32"
                  loading="lazy"
                />
                <figcaption className="mt-3 space-y-1">
                  <span className="block text-xs font-semibold text-zinc-100">
                    {s.name}
                  </span>
                  <span className="block text-[10px] leading-snug text-zinc-500">
                    {s.role}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-lg backdrop-blur-sm sm:p-8">
        <h2 className="text-lg font-semibold text-white">Achievements / highlights</h2>

        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
          <li>Applicant for the Slasscom and MERcon Conferences</li>
        </ul>
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
