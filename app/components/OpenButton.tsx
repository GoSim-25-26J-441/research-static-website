const base =
  "inline-flex min-w-[4.5rem] items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold transition";

export function OpenButton({ href }: { href?: string }) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} border-emerald-500/35 bg-emerald-500/10 text-emerald-300 hover:border-emerald-400/50 hover:bg-emerald-500/20`}
      >
        Open
      </a>
    );
  }
  return (
    <span
      className={`${base} cursor-not-allowed border-white/10 bg-zinc-800/40 text-zinc-500 select-none`}
      aria-disabled="true"
    >
      Open
    </span>
  );
}
