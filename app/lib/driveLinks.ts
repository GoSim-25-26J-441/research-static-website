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
    thesisComponent1: "",
    thesisComponent2: "",
    thesisComponent3: "",
    thesisComponent4: "",
    thesisFinalComponent: "",
    component1Proposal: "",
    component2Proposal: "",
    component3Proposal: "",
    component4Proposal: "",
  },
  slides: {
    proposal: "",
    pp1: "",
    pp2: "",
    final: "",
  },
} as const;

function envStr(key: string): string {
  const raw = (import.meta.env as Record<string, string | boolean | undefined>)[
    key
  ];
  return typeof raw === "string" ? raw.trim() : "";
}

export const driveLinks = {
  documents: {
    projectCharter:
      envStr("VITE_DRIVE_CHARTER") || fallback.documents.projectCharter,
    proposal: envStr("VITE_DRIVE_PROPOSAL") || fallback.documents.proposal,
    checklists:
      envStr("VITE_DRIVE_CHECKLISTS") || fallback.documents.checklists,
    finalReport:
      envStr("VITE_DRIVE_FINAL_REPORT") || fallback.documents.finalReport,
    thesisComponent1:
      envStr("VITE_DRIVE_THESIS_COMPONENT_1") ||
      fallback.documents.thesisComponent1,
    thesisComponent2:
      envStr("VITE_DRIVE_THESIS_COMPONENT_2") ||
      fallback.documents.thesisComponent2,
    thesisComponent3:
      envStr("VITE_DRIVE_THESIS_COMPONENT_3") ||
      fallback.documents.thesisComponent3,
    thesisComponent4:
      envStr("VITE_DRIVE_THESIS_COMPONENT_4") ||
      fallback.documents.thesisComponent4,
    thesisFinalComponent:
      envStr("VITE_DRIVE_THESIS_FINAL_COMPONENT") ||
      fallback.documents.thesisFinalComponent,
    component1Proposal:
      envStr("VITE_DRIVE_COMPONENT_1_PROPOSAL") ||
      envStr("VITE_DRIVE_COMPONENT_1_PROPORSAL") ||
      fallback.documents.component1Proposal,
    component2Proposal:
      envStr("VITE_DRIVE_COMPONENT_2_PROPOSAL") ||
      envStr("VITE_DRIVE_COMPONENT_2_PROPORSAL") ||
      fallback.documents.component2Proposal,
    component3Proposal:
      envStr("VITE_DRIVE_COMPONENT_3_PROPOSAL") ||
      envStr("VITE_DRIVE_COMPONENT_3_PROPORSAL") ||
      fallback.documents.component3Proposal,
    component4Proposal:
      envStr("VITE_DRIVE_COMPONENT_4_PROPOSAL") ||
      envStr("VITE_DRIVE_COMPONENT_4_PROPORSAL") ||
      fallback.documents.component4Proposal,
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
