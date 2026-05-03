import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Research Project Website | Contact Us" },
    { name: "description", content: "General communication details." },
  ];
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-xl backdrop-blur-sm sm:p-8">
          <h1 className="text-xl font-semibold text-white">General Contacts</h1>
          <p className="mt-4 text-sm text-zinc-300">Phone: +94 77 864 0678</p>
          <p className="mt-2 text-sm text-zinc-300">Email: IT22000644@my.sliit.lk</p>
        </section>
        <section className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-xl backdrop-blur-sm sm:p-8">
          <h2 className="text-xl font-semibold text-white">Email Template</h2>
          <p className="mt-4 text-sm text-zinc-300">
            <strong className="text-white">Subject:</strong> Inquiry about ArcFind
          </p>
          <p className="mt-3 text-sm text-zinc-300">
            <strong className="text-white">Body:</strong>
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            Hello Team,
            <br />
            I would like to know more about [topic].
            <br />
            Regards,
            <br />
            [Your Name]
          </p>
        </section>
      </div>
      <p className="mt-10 text-center text-xs text-zinc-500">
        Replace placeholders with official team contacts.
      </p>
    </div>
  );
}
