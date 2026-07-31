import Container from "../ui/Container";
import Button from "../ui/Button";
import { company } from "../../data/company";

const AboutHero = () => (
  <section
    data-animate="hero"
    className="relative overflow-hidden bg-slate-950 pt-20 text-white sm:pt-24 lg:pt-28"
  >
    {/* Decorative background grid and blurs */}
    <div
      className="pointer-events-none absolute inset-0 opacity-70 animate-fade-in"
      aria-hidden="true"
    >
      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-cyan-500/15 blur-[100px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_55%)]" />
    </div>

    <Container className="relative py-20 sm:py-24 lg:py-32">
      <div className="max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
          About Our Agency
        </span>

        <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          Crafting software that scales, marketing that converts
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          At {company.name}, our success is determined by transparent communication, mutual understanding, and a shared dedication to achieving your growth goals.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button as="a" href="/contact" size="lg" icon="arrowRight">
            Start a Project
          </Button>
          <Button
            as="a"
            href="#who-we-are"
            size="lg"
            variant="invert"
            icon="arrowRight"
          >
            Read Our Story
          </Button>
        </div>
      </div>
    </Container>

    <div className="h-16 bg-gradient-to-b from-transparent to-white" aria-hidden="true" />
  </section>
);

export default AboutHero;
