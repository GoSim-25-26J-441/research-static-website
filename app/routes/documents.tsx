import type { Route } from "./+types/documents";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Research Project Website | Documents" },
    { name: "description", content: "Project documentation links." },
  ];
}

type Row = { name: string; status: string; href?: string; pending?: boolean };

const ROWS: Row[] = [
  {
    name: "Project Charter",
    status: "Available",
    href: "/assets/docs/project-charter.pdf",
  },
  {
    name: "Proposal Document",
    status: "Available",
    href: "/assets/docs/proposal.pdf",
  },
  {
    name: "Checklist Documents",
    status: "Pending / Add files",
    pending: true,
  },
  {
    name: "Final Report (Main + Individual)",
    status: "Pending / Add files",
    pending: true,
  },
];

export default function DocumentsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <section className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-xl backdrop-blur-sm sm:p-8">
        <h1 className="text-xl font-semibold text-white">Project Documents</h1>
        <p className="mt-2 text-sm text-zinc-500">
          Keep only links here. Add new files to{" "}
          <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-zinc-200">
            public/assets/docs/
          </code>{" "}
          and update this page.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-zinc-950/60">
                <th className="px-4 py-3 font-semibold text-zinc-200">Document</th>
                <th className="px-4 py-3 font-semibold text-zinc-200">Status</th>
                <th className="px-4 py-3 font-semibold text-zinc-200">Link</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-zinc-300">
              {ROWS.map((r) => (
                <tr key={r.name} className="bg-zinc-900/30">
                  <td className="px-4 py-3">{r.name}</td>
                  <td className="px-4 py-3">{r.status}</td>
                  <td className="px-4 py-3">
                    {r.href ? (
                      <a
                        href={r.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-sky-400 hover:underline"
                      >
                        Open
                      </a>
                    ) : (
                      <span className="text-zinc-500">
                        {r.pending ? "Update link after upload" : "—"}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <p className="mt-8 text-center text-xs text-zinc-500">
        Files should stay within repository size constraints.
      </p>
    </div>
  );
}
