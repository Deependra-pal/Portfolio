import { useEffect, useState } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { company, navLinks } from "../../data/company";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-slate-200/70 bg-white/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between lg:h-20">
        <a href="/" className="flex items-center gap-2.5">
          {/* TODO: swap for the official Probey Services logo asset. */}
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-600 text-sm font-bold text-white">
            P
          </span>
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            {company.name}
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            as="a"
            href={company.eyebrow ? "/contact" : "/contact"}
            size="md"
            icon="arrowRight"
          >
            Get in Touch
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-full bg-current transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-full bg-current transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-slate-200/70 bg-white/95 backdrop-blur md:hidden ${
          open ? "max-h-96" : "max-h-0"
        } transition-[max-height] duration-300 ease-out`}
      >
        <Container className="flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              {link.label}
            </a>
          ))}
          <Button as="a" href="/contact" className="mt-2" icon="arrowRight">
            Get in Touch
          </Button>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
