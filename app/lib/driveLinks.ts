/**
 * External URLs for documents and slides (full https links).
 * Set strings in `fallback` below and/or override via Vite env vars — env wins when set.
 */

const fallback = {
  documents: {
    projectCharter: "",
    proposal: "",
    checklists: "",
    finalReport: "",
  },
  slides: {
    proposal: "",
    pp1: "",
    pp2: "",
    final: "",
  },
} as const;

function envStr(key: string): string {
  const raw = (import.meta.env as Record<string, string | boolean | undefined>)[key];
  return typeof raw === "string" ? raw.trim() : "";
}

export const driveLinks = {
  documents: {
    projectCharter: envStr("VITE_DRIVE_CHARTER") || fallback.documents.projectCharter,
    proposal: envStr("VITE_DRIVE_PROPOSAL") || fallback.documents.proposal,
    checklists: envStr("VITE_DRIVE_CHECKLISTS") || fallback.documents.checklists,
    finalReport: envStr("VITE_DRIVE_FINAL_REPORT") || fallback.documents.finalReport,
  },
  slides: {
    proposal: envStr("VITE_DRIVE_SLIDES_PROPOSAL") || fallback.slides.proposal,
    pp1: envStr("VITE_DRIVE_SLIDES_PP1") || fallback.slides.pp1,
    pp2: envStr("VITE_DRIVE_SLIDES_PP2") || fallback.slides.pp2,
    final: envStr("VITE_DRIVE_SLIDES_FINAL") || fallback.slides.final,
  },
} as const;

export type DocumentDriveKey = keyof typeof driveLinks.documents;
export type SlideDriveKey = keyof typeof driveLinks.slides;

export function driveDocUrl(key: DocumentDriveKey): string | undefined {
  const u = driveLinks.documents[key];
  return u && /^https?:\/\//i.test(u) ? u : undefined;
}

export function driveSlideUrl(key: SlideDriveKey): string | undefined {
  const u = driveLinks.slides[key];
  return u && /^https?:\/\//i.test(u) ? u : undefined;
}
