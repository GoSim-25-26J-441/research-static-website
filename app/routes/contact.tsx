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

      <div className="flex justify-center">
        <section className="w-full max-w-3xl rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-xl backdrop-blur-sm sm:p-8">
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
        </section>


      </div>

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
