import { Link } from "react-router";

import { PageHero } from "~/components/PageHero";

import type { Route } from "./+types/contact";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Research Project Website | Contact Us" },
    {
      name: "description",
      content:
        "Phone, email, and inquiry template for the research team (SLIIT project).",
    },
  ];
}

const PHONE_DISPLAY = "+94 77 864 0678";
const PHONE_TEL = "+94778640678";
const PRIMARY_EMAIL = "IT22000644@my.sliit.lk";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
      <PageHero
        eyebrow="Reach the group"
        title="Contact us"
        lead={
          <>
            <p>
              Use the channels below for sponsors, assessors, or collaborators.
              Prefer email for anything that needs a paper trail; include context
              so the right member can reply.
            </p>

          </>
        }
        footer={
          <Link
            to="/about"
            className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Meet the team
          </Link>
        }
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-xl backdrop-blur-sm sm:p-8">
          <h2 className="text-lg font-semibold text-white">General contacts</h2>
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Phone
              </dt>
              <dd className="mt-1">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="text-lg font-medium text-emerald-400 hover:underline"
                >
                  {PHONE_DISPLAY}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${PRIMARY_EMAIL}`}
                  className="break-all text-lg font-medium text-emerald-400 hover:underline"
                >
                  {PRIMARY_EMAIL}
                </a>
              </dd>
            </div>
          </dl>
          <p className="mt-6 text-xs leading-relaxed text-zinc-500">
            Typical response: within a few working days during term—adjust this
            line to match your SLA.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-xl backdrop-blur-sm sm:p-8">
          <h2 className="text-lg font-semibold text-white">Email template</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Copy, adjust bracketed fields, and send from your own mailbox.
          </p>
          <div className="mt-5 space-y-3 rounded-xl border border-white/10 bg-zinc-950/60 p-4 text-sm">
            <p>
              <span className="text-zinc-500">Subject:</span>{" "}
              <span className="text-zinc-200">Inquiry about ArcFind</span>
            </p>
            <div className="border-t border-white/10 pt-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Body
              </p>
              <pre className="mt-2 whitespace-pre-wrap font-sans text-sm leading-relaxed text-zinc-300">
                {`Hello Team,

I would like to know more about [topic].

Regards,
[Your Name]`}
              </pre>
            </div>
          </div>
          <a
            href={`mailto:${PRIMARY_EMAIL}?subject=${encodeURIComponent("Inquiry about ArcFind")}`}
            className="mt-5 inline-flex rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-300"
          >
            Open mail with subject
          </a>
        </section>
      </div>

      <section className="mt-10 rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
        <h3 className="text-sm font-semibold text-white">Before you write</h3>
        <ul className="mt-3 space-y-2 text-sm text-zinc-400">
          <li className="flex gap-2">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-400/80" />
            Mention whether you are an assessor, industry partner, or student.
          </li>
          <li className="flex gap-2">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-400/80" />
            Link to any prior thread or ticket ID if you are following up.
          </li>
          <li className="flex gap-2">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-400/80" />
            For deliverables, check{" "}
            <Link to="/documents" className="text-emerald-400 hover:underline">
              Documents
            </Link>{" "}
            first—your answer may already be published.
          </li>
        </ul>
      </section>

      <p className="mt-10 text-center text-sm text-zinc-500">
        <Link to="/" className="text-emerald-400 hover:underline">
          Home
        </Link>
        {" · "}
        <Link to="/domain" className="text-emerald-400 hover:underline">
          Domain
        </Link>
      </p>
    </div>
  );
}
