import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink as RouteLink } from "react-router-dom";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { company, navLinks, serviceGroups } from "../../data/company";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-200 ${
        scrolled
          ? "border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md shadow-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between lg:h-18">
        {/* Minimal Logo Symbol */}
        <RouteLink to="/" className="flex items-center gap-2 group">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 font-display text-sm font-bold text-white transition-colors group-hover:border-zinc-700">
            P
          </span>
          <span className="text-sm font-bold tracking-tight text-white transition-colors group-hover:text-zinc-350 font-display">
            {company.name}
          </span>
        </RouteLink>

        {/* Desktop Links */}
        <nav className="hidden items-center gap-1.5 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <RouteLink
              key={link.label}
              to={link.href}
              className={({ isActive }) =>
                `rounded-md px-3.5 py-1.5 font-display text-[11px] font-semibold uppercase tracking-wider transition-colors ${
                  isActive
                    ? "text-white bg-zinc-900 border border-zinc-800"
                    : "text-zinc-400 hover:text-white"
                }`
              }
            >
              {link.label}
            </RouteLink>
          ))}
        </nav>

        {/* Action CTA */}
        <div className="hidden md:block">
          <Button
            as={RouteLink}
            to="/contact"
            className="btn-saas-primary text-xs px-5 py-2.5 rounded-md"
            icon="arrowRight"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Hamburg menu trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="grid h-9 w-9 place-items-center rounded-lg border border-zinc-800 text-zinc-450 hover:bg-zinc-900 md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-full bg-current transition-transform duration-200 ${
                open ? "translate-y-[7px] rotate-45 bg-white" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-full bg-current transition-transform duration-200 ${
                open ? "-translate-y-[7px] -rotate-45 bg-white" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      {/* Mobile Menu Drawer */}
      <div
        className={`overflow-hidden border-t border-zinc-800 bg-zinc-950/95 shadow-xl backdrop-blur-md md:hidden transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-[440px]" : "max-h-0"
        }`}
      >
        <Container className="flex flex-col gap-1 py-6">
          {navLinks.map((link) => (
            <RouteLink
              key={link.label}
              to={link.href}
              className={({ isActive }) =>
                `rounded-md px-4 py-3 text-xs font-semibold tracking-wider uppercase transition-colors ${
                  isActive
                    ? "bg-zinc-900 text-white border-l-2 border-white"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`
              }
            >
              {link.label}
            </RouteLink>
          ))}
          
          <div className="border-t border-zinc-850 my-3 pt-3">
            <p className="px-4 text-[9px] font-bold uppercase tracking-widest text-zinc-500 font-display">
              Services Pages
            </p>
            <div className="grid grid-cols-2 gap-1 mt-2">
              {serviceGroups.slice(0, 2).map((g) => (
                <RouteLink
                  key={g.key}
                  to={`/${g.slug}`}
                  className="rounded-md px-4 py-2 text-xs font-semibold text-zinc-405 hover:bg-zinc-900 hover:text-white font-display"
                >
                  {g.label}
                </RouteLink>
              ))}
            </div>
          </div>

          <Button as={RouteLink} to="/contact" className="mt-4 w-full btn-saas-primary py-3 rounded-md" icon="arrowRight">
            Get Started
          </Button>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
