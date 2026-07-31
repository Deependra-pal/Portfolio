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
      className={`fixed left-1/2 -translate-x-1/2 w-[92%] max-w-[1400px] z-[999] rounded-2xl border transition-all duration-300 ${
        scrolled
          ? "top-4 bg-[#030f0d]/80 backdrop-blur-lg border-white/10 shadow-2xl py-1.5"
          : "top-6 bg-[#030f0d]/40 backdrop-blur-md border-white/5 py-2.5"
      }`}
    >
      <Container className="flex h-14 items-center justify-between">
        
        {/* Logo Symbol with rotating indicator hover */}
        <RouteLink to="/" className="flex items-center gap-2.5 group select-none">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-teal-500/20 bg-teal-950/40 text-xs font-bold text-[#c5e32b] transition-transform duration-500 group-hover:rotate-[360deg] font-display">
            P
          </span>
          <span className="text-sm font-bold tracking-wider text-white transition-colors group-hover:text-[#c5e32b] font-display uppercase">
            {company.name}
          </span>
        </RouteLink>

        {/* Desktop Links with active slide indicators */}
        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <RouteLink
              key={link.label}
              to={link.href}
              className={({ isActive }) =>
                `relative rounded-lg px-4 py-2 font-display text-[11px] font-bold uppercase tracking-wider transition-colors ${
                  isActive
                    ? "text-[#c5e32b] bg-white/5"
                    : "text-zinc-300 hover:text-white hover:bg-white/5"
                }`
              }
            >
              {link.label}
            </RouteLink>
          ))}
        </nav>

        {/* Action CTA with notch design styling */}
        <div className="hidden md:block">
          <Button
            as={RouteLink}
            to="/contact"
            style={{ clipPath: "polygon(0 0, 100% 0, 90% 50%, 100% 100%, 0 100%)" }}
            className="btn-saas-primary text-xxs font-bold pl-5 pr-8 py-2.5 bg-[#c5e32b] text-zinc-950 rounded-md border-0"
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
          className="grid h-9 w-9 place-items-center rounded-lg border border-teal-900/30 bg-teal-950/20 text-teal-400 hover:bg-teal-900/40 md:hidden"
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
        className={`overflow-hidden rounded-b-2xl bg-[#030f0d]/95 backdrop-blur-md md:hidden transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-[440px] border-t border-white/5" : "max-h-0"
        }`}
      >
        <Container className="flex flex-col gap-1 py-6">
          {navLinks.map((link) => (
            <RouteLink
              key={link.label}
              to={link.href}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 text-xs font-bold tracking-wider uppercase transition-colors ${
                  isActive
                    ? "bg-white/5 text-[#c5e32b]"
                    : "text-zinc-300 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {link.label}
            </RouteLink>
          ))}
          
          <div className="border-t border-white/5 my-3 pt-3">
            <p className="px-4 text-[9px] font-bold uppercase tracking-widest text-[#c5e32b] font-display">
              Services Pages
            </p>
            <div className="grid grid-cols-2 gap-1 mt-2">
              {serviceGroups.slice(0, 2).map((g) => (
                <RouteLink
                  key={g.key}
                  to={`/${g.slug}`}
                  className="rounded-lg px-4 py-2 text-xs font-semibold text-zinc-300 hover:bg-white/5 hover:text-white font-display"
                >
                  {g.label}
                </RouteLink>
              ))}
            </div>
          </div>

          <Button as={RouteLink} to="/contact" className="mt-4 w-full btn-saas-primary py-3 rounded-full bg-[#c5e32b] text-zinc-950 font-bold text-xs" icon="arrowRight">
            Get Started
          </Button>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
