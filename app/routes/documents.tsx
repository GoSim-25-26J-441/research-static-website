import { Link } from "react-router";

import { OpenButton } from "~/components/OpenButton";
import { PageHero } from "~/components/PageHero";
import { driveDocUrl, type DocumentDriveKey } from "~/lib/driveLinks";

import type { Route } from "./+types/documents";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Research Project Website | Documents" },
    {
      name: "description",
      content:
        "Project charter, proposal, checklists, and research paper with status and links.",
    },
  ];
}

const DOC_DEFS: {
  name: string;
  key: DocumentDriveKey;
  footnote: string;
}[] = [
    { name: "Project Charter", key: "projectCharter", footnote: "Available" },
    { name: "Proposal Document", key: "proposal", footnote: "Available" },
    {
      name: "Checklist Documents",
      key: "checklists",
      footnote: "Available",
    },
    {
      name: "Research Paper",
      key: "finalReport",
      footnote: "Available",
    },
  ];

export default function DocumentsPage() {
  const rows = DOC_DEFS.map((d) => {
    const href = driveDocUrl(d.key);
    return { ...d, href };
  });

  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
      <PageHero
        eyebrow="Evidence & write-ups"
        title="Project documents"

        footer={
          <Link
            to="/presentations"
            className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            View presentations
          </Link>
        }
      />

      <section className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-xl backdrop-blur-sm sm:p-8">
        <h2 className="text-lg font-semibold text-white">Document register</h2>
        <p className="mt-2 text-sm text-zinc-500">
          Use <span className="text-zinc-400">Open</span> to view the file in a new
          tab.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-zinc-950/60">
                <th className="px-4 py-3 font-semibold text-zinc-200">Document</th>
                <th className="px-4 py-3 font-semibold text-zinc-200">Status</th>
                <th className="px-4 py-3 font-semibold text-zinc-200">Open</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-zinc-300">
              {rows.map((r) => (
                <tr key={r.key} className="bg-zinc-900/30">
                  <td className="px-4 py-3 font-medium text-zinc-100">{r.name}</td>
                  <td className="px-4 py-3 align-middle">
                    <p className="max-w-56 text-sm text-zinc-400">{r.footnote}</p>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <OpenButton href={r.href} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>



      <p className="mt-10 text-center text-sm text-zinc-500">
        <Link to="/milestones" className="text-emerald-400 hover:underline">
          Milestones
        </Link>
        {" · "}
        <Link to="/" className="text-emerald-400 hover:underline">
          Home
        </Link>
      </p>
    </div>
  );
}
