import { Outlet } from "react-router";

import { ResearchFooter } from "~/components/ResearchFooter";
import { ResearchNavbar } from "~/components/ResearchNavbar";
import { ResearchNetworkDock } from "~/components/ResearchNetworkDock";

export default function SiteLayout() {
  return (
    <div className="relative flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(52,211,153,0.18),transparent)]" />
      <ResearchNetworkDock />
      <ResearchNavbar />
      <main className="relative z-10 flex-1 pt-24 md:pt-28">
        <Outlet />
      </main>
      <ResearchFooter />
    </div>
  );
}
