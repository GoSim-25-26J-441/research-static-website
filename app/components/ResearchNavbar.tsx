import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";

import { NAV_LINKS, SITE_LOGO_SRC, SITE_NAME } from "~/lib/siteNav";

function navLinkClass({ isActive }: { isActive: boolean }) {
  return [
    "rounded-full px-3 py-1.5 text-sm font-medium tracking-tight transition-colors duration-200",
    isActive
      ? "bg-white/12 text-white ring-1 ring-white/15"
      : "text-zinc-400 hover:bg-white/10 hover:text-white",
  ].join(" ");
}

export function ResearchNavbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [navReady, setNavReady] = useState(false);
  const [desktopNavHidden, setDesktopNavHidden] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTicking = useRef(false);

  useEffect(() => {
    const t = window.setTimeout(() => setNavReady(true), 80);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    setDesktopNavHidden(false);
  }, [pathname]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const isDesktop = () => mq.matches;

    const onScroll = () => {
      if (!isDesktop()) {
        setDesktopNavHidden(false);
        return;
      }
      if (scrollTicking.current) return;
      scrollTicking.current = true;
      requestAnimationFrame(() => {
        scrollTicking.current = false;
        const y = window.scrollY;
        const delta = y - lastScrollY.current;
        lastScrollY.current = y;

        if (y < 56) {
          setDesktopNavHidden(false);
          return;
        }
        if (delta > 5) setDesktopNavHidden(true);
        else if (delta < -5) setDesktopNavHidden(false);
      });
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDesktop()) return;
      if (e.clientY < 52) setDesktopNavHidden(false);
    };

    const onMqChange = () => {
      if (!mq.matches) setDesktopNavHidden(false);
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    mq.addEventListener("change", onMqChange);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      mq.removeEventListener("change", onMqChange);
    };
  }, []);

  const NAV_SPREAD_PX = 100;

  const currentIndex = NAV_LINKS.findIndex((l) =>
    l.end ? pathname === l.to : pathname === l.to || pathname.startsWith(`${l.to}/`),
  );
  const activeIndex = currentIndex === -1 ? 0 : currentIndex;

  return (
    <>
      {desktopNavHidden && (
        <div
          aria-hidden
          className="pointer-events-auto fixed top-0 right-0 left-0 z-60 hidden h-16 cursor-default md:block"
          onMouseEnter={() => setDesktopNavHidden(false)}
        />
      )}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out md:will-change-transform ${
          desktopNavHidden ? "md:pointer-events-none md:-translate-y-full" : ""
        }`}
      >
        <div className="pointer-events-auto px-3 pt-3 md:px-5 md:pt-4">
          <nav className="relative mx-auto flex h-13 max-w-6xl flex-row items-center justify-between gap-2 px-2 md:h-14 md:gap-3 md:rounded-full md:px-4">
            <div className="flex w-full flex-row items-center">
              <div className="flex min-w-0 shrink-0 items-center pl-1 md:min-w-0 md:pl-0">
                <Link
                  to="/"
                  aria-label={`${SITE_NAME} home`}
                  className="flex max-w-full items-center gap-3 rounded-xl p-1.5 pr-2 ring-1 ring-transparent transition hover:bg-white/5 md:gap-3.5"
                >
                  <img
                    src={SITE_LOGO_SRC}
                    alt=""
                    width={28}
                    height={28}
                    className="size-6 shrink-0 rounded-xl object-contain ring-1 ring-white/10 md:size-10"
                    decoding="async"
                  />
                  <div className="flex min-w-0 flex-col leading-tight">
                    <span className="truncate text-lg font-semibold tracking-tight text-white md:text-xl">
                      {SITE_NAME}
                    </span>
                    <span className="hidden truncate text-xs text-zinc-500 sm:block md:text-sm">
                      Research showcase
                    </span>
                  </div>
                </Link>
              </div>

              <div className="relative hidden min-h-0 min-w-0 flex-1 justify-start md:flex md:pl-1">
                <div className="relative h-11 w-[78%] min-w-0 max-w-none overflow-hidden rounded-full bg-black/25 px-1 ring-1 ring-white/10 md:h-12">
                  <ul className="absolute inset-0 flex items-center justify-center">
                    {NAV_LINKS.map((l, index) => {
                      const total = NAV_LINKS.length;
                      let distance = index - activeIndex;
                      if (distance > total / 2) distance -= total;
                      if (distance < -total / 2) distance += total;
                      const absDistance = Math.abs(distance);
                      if (absDistance > 2) return null;

                      const translateX = distance * NAV_SPREAD_PX;
                      const styles = [
                        { opacity: 1, size: "text-[0.85rem]", scale: 1 },
                        { opacity: 0.72, size: "text-sm", scale: 0.94 },
                        { opacity: 0.38, size: "text-xs", scale: 0.88 },
                      ][Math.min(absDistance, 2)];

                      return (
                        <li
                          key={l.to}
                          className="pointer-events-auto absolute top-1/2 left-1/2"
                          style={{
                            transform: navReady
                              ? `translate(calc(-50% + ${translateX}px), -50%) scale(${styles.scale})`
                              : "translate(-50%, -50%) scale(0.7)",
                            opacity: navReady ? styles.opacity : 0,
                            transition: "all 0.65s cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDelay: navReady
                              ? `${absDistance * 0.06}s`
                              : "0s",
                            zIndex: 10 - absDistance,
                          }}
                        >
                          <NavLink
                            to={l.to}
                            end={l.end}
                            className={({ isActive: a }) =>
                              `${styles.size} ${navLinkClass({ isActive: a })}`
                            }
                          >
                            {l.label}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="ml-auto flex size-10 items-center justify-center text-zinc-200 transition hover:bg-white/10 hover:text-white md:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </nav>

          {open && (
            <div className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80 shadow-[0_16px_48px_rgba(0,0,0,0.5)] backdrop-blur-2xl md:hidden">
              <div className="px-4 py-5">
                <div className="space-y-1">
                  {NAV_LINKS.map((l) => (
                    <NavLink
                      key={l.to}
                      to={l.to}
                      end={l.end}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        [
                          "block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                          isActive
                            ? "bg-white/10 text-white ring-1 ring-white/10"
                            : "text-zinc-400 hover:bg-white/6 hover:text-white",
                        ].join(" ")
                      }
                    >
                      {l.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
