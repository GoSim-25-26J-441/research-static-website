export const SITE_NAME = "Research Project Website";

/** Served from `public/assets/logo/logo.png` (same URL as after build: `/assets/logo/logo.png`). */
export const SITE_LOGO_SRC = "/assets/logo/logo.png";

export const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/domain", label: "Domain", end: false },
  { to: "/milestones", label: "Milestones", end: false },
  { to: "/documents", label: "Documents", end: false },
  { to: "/presentations", label: "Presentations", end: false },
  { to: "/about", label: "About Us", end: false },
  { to: "/contact", label: "Contact Us", end: false },
] as const;
