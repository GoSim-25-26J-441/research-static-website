import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Research Project Website | About Us" },
    { name: "description", content: "Team and contributor information." },
  ];
}

const MEMBERS = [
  {
    name: "Manilka Dikkumbura",
    email: "IT22000644@my.sliit.lk",
    image: "Screenshot 2026-04-26 022803.png",
  },
  {
    name: "Christy Kingsley",
    email: "IT22051448@my.sliit.lk",
    image: "Screenshot 2026-04-26 022744.png",
  },
  {
    name: "Malith Rajapaksha",
    email: "IT22352330@my.sliit.lk",
    image: "Screenshot 2026-04-26 022713.png",
  },
  {
    name: "Shenal Perera",
    email: "IT22347794@my.sliit.lk",
    image: "Screenshot 2026-04-26 022826.png",
  },
] as const;

function memberPhotoSrc(file: string) {
  return `/assets/images/members/${encodeURIComponent(file)}`;
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <section className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-xl backdrop-blur-sm sm:p-8">
        <h1 className="text-xl font-semibold text-white">Group Members</h1>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-300">
          {MEMBERS.map((m) => (
            <li key={m.email}>
              {m.name} — {m.email}
            </li>
          ))}
        </ul>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {MEMBERS.map((m) => (
            <figure
              key={m.email}
              className="rounded-xl border border-white/10 bg-zinc-950/40 p-3 text-center"
            >
              <img
                src={memberPhotoSrc(m.image)}
                alt={m.name}
                className="mx-auto h-24 w-full max-w-[140px] rounded-lg object-cover object-top"
                loading="lazy"
              />
              <figcaption className="mt-2 text-xs font-medium text-zinc-200">
                {m.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-lg backdrop-blur-sm sm:p-8">
        <h2 className="text-lg font-semibold text-white">Achievements / Highlights</h2>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-300">
          <li>Add research or competition achievements.</li>
          <li>Add publication or prototype milestones.</li>
        </ul>
      </section>

      <p className="mt-8 text-center text-xs text-zinc-500">
        Update member details once finalized. Place member images under{" "}
        <code className="rounded bg-zinc-800 px-1 py-0.5 text-zinc-200">
          public/assets/images/members/
        </code>
        .
      </p>
    </div>
  );
}
