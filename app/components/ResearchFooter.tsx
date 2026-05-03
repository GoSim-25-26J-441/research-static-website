import { Link } from "react-router";

import { NAV_LINKS, SITE_NAME } from "~/lib/siteNav";

const year = new Date().getFullYear();

export function ResearchFooter() {
  return (
    <footer className="relative z-10 bg-[#111827] text-white">
      <div className="border-b-2 border-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-4 py-4 sm:px-6 md:justify-end lg:px-8">
          <p className="text-center text-sm font-medium text-white/95">
            Structured research documentation and team showcase.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div>
            <h2 className="mb-4 border-b-2 border-white pb-1 text-2xl font-bold">
              {SITE_NAME}
            </h2>
            <p className="mb-4 w-full max-w-md text-justify text-xs font-thin leading-relaxed text-white/80 md:w-[90%]">
              This site presents our research project: domain knowledge,
              milestones, documents, presentations, and team information—in line
              with the GO-SIM / ArcFind marketing visual language.
            </p>
            <p className="text-xs font-semibold leading-relaxed text-white/90">
              Final-year research project at SLIIT.
            </p>
          </div>

          <div>
            <h3 className="mb-4 border-b border-white pb-3 text-xs font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    <span className="text-white/60" aria-hidden>
                      ›
                    </span>
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 border-b border-white pb-3 text-xs font-semibold uppercase tracking-wider text-white">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/GoSim-25-26J-441"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <span className="text-white/60" aria-hidden>
                    ›
                  </span>
                  GitHub (GO-SIM)
                </a>
              </li>
              <li>
                <a
                  href="mailto:IT22000644@my.sliit.lk"
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <span className="text-white/60" aria-hidden>
                    ›
                  </span>
                  Primary contact email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 text-xs text-gray-500 md:flex-row md:items-center md:justify-between">
            <span>© {year} Research Group. All rights reserved.</span>
            <span className="text-gray-600">
              Static site — content migrated from the HTML research project site.
            </span>
            <nav className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="transition-colors hover:text-gray-300"
              >
                Contact
              </Link>
              <span className="text-gray-700" aria-hidden>
                ●
              </span>
              <a
                href="https://github.com/GoSim-25-26J-441"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gray-300"
              >
                GitHub
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
