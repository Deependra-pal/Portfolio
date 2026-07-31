import Container from "../ui/Container";
import Button from "../ui/Button";
import { company } from "../../data/company";

const AboutHero = () => (
  <section
    data-animate="hero"
    className="relative overflow-hidden bg-slate-950 pt-16 text-white"
  >
    {/* Decorative background */}
    <div
      className="pointer-events-none absolute inset-0 opacity-70"
      aria-hidden="true"
    >
      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl" />
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_55%)]" />
    </div>

    <Container className="relative py-20 sm:py-24 lg:py-32">
      <div className="max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
          About {company.name}
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          Building digital products that move businesses forward
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          {company.approachStatement}
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button as="a" href="/contact" size="lg" icon="arrowRight">
            Start a Project
          </Button>
          <Button
            as="a"
            href="#what-we-do"
            size="lg"
            variant="invert"
          >
            Explore Our Work
          </Button>
        </div>
      </div>
    </Container>

    {/* Bottom fade into next (light) section */}
    <div className="h-16 bg-gradient-to-b from-transparent to-white" aria-hidden="true" />
  </section>
);

export default AboutHero;
