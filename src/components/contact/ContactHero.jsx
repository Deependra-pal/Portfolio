import Container from "../ui/Container";
import { company } from "../../data/company";

const ContactHero = () => (
  <section
    data-animate="hero"
    className="relative overflow-hidden bg-slate-950 pt-16 text-white"
  >
    <div
      className="pointer-events-none absolute inset-0 opacity-70"
      aria-hidden="true"
    >
      <div className="absolute -left-20 top-4 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl" />
      <div className="absolute right-0 -top-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_55%)]" />
    </div>

    <Container className="relative py-20 text-center sm:py-24">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
        Contact {company.name}
      </span>
      <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
        Let&rsquo;s build something great together
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
        {company.supportStatement}
      </p>
    </Container>
  </section>
);

export default ContactHero;
