import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-[#080c16]/80 shadow-[0_4px_30px_rgba(8,12,22,0.5)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between lg:h-20">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-cyan to-brand-blue text-base font-bold text-white shadow-lg">
            P
          </span>
          <span className="text-base font-bold tracking-tight text-white transition-colors group-hover:text-brand-cyan font-display">
            {company.name}
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className={({ isActive }) =>
                `relative rounded-full px-4 py-1.5 font-display text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? "text-brand-cyan bg-brand-cyan/5"
                    : "text-slate-400 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Action button */}
        <div className="hidden md:block">
          <Button
            as={Link}
            to="/contact"
            className="btn-saas-primary text-xs px-6 py-2.5"
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
          className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-slate-450 transition-colors hover:bg-white/5 md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-full bg-current transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45 bg-white" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-full bg-current transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45 bg-white" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      {/* Mobile Menu Drawer */}
      <div
        className={`overflow-hidden border-t border-white/5 bg-[#080c16]/95 shadow-2xl backdrop-blur-2xl md:hidden transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-[440px]" : "max-h-0"
        }`}
      >
        <Container className="flex flex-col gap-1 py-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 text-sm font-semibold tracking-wider uppercase transition-all ${
                  isActive
                    ? "bg-brand-emerald/5 text-brand-emerald border-l-2 border-brand-emerald"
                    : "text-slate-400 hover:bg-white/[0.02] hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          
          <div className="border-t border-white/5 my-3 pt-3">
            <p className="px-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display">
              Services Pages
            </p>
            <div className="grid grid-cols-2 gap-1 mt-2">
              {serviceGroups.slice(0, 2).map((g) => (
                <Link
                  key={g.key}
                  to={`/${g.slug}`}
                  className="rounded-lg px-4 py-2.5 text-xs font-semibold text-slate-405 hover:bg-white/5 hover:text-white font-display"
                >
                  {g.label}
                </Link>
              ))}
            </div>
          </div>

          <Button as={Link} to="/contact" className="mt-4 w-full btn-saas-primary py-3" icon="arrowRight">
            Get Started
          </Button>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
