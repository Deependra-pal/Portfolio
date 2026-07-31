import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Icon from "../components/ui/Icon";
import Button from "../components/ui/Button";
import Reveal from "../components/motion/Reveal";
import TiltCard from "../components/motion/TiltCard";
import { contact } from "../data/company";


const Services = () => {
  const serviceCategories = [
    {
      slug: "web-development",
      title: "Web Development",
      subtitle: "Headless & Custom Web Architecture",
      icon: "globe",
      items: [
        "Next.js Web Portals",
        "Headless Shopify storefronts",
        "Custom REST/GraphQL Integrations",
        "Custom WordPress CMS hubs"
      ],
      hasDetailPage: true
    },
    {
      slug: "app-development",
      title: "Mobile App Development",
      subtitle: "Compiled iOS & Android Platforms",
      icon: "phone",
      items: [
        "Native Swift & SwiftUI iOS apps",
        "Native Kotlin Android apps",
        "Cross-platform Flutter engines",
        "Offline-first Database caches"
      ],
      hasDetailPage: true
    },
    {
      slug: "contact",
      title: "SEO & Campaign Architecture",
      subtitle: "Organic Visibility campaigns",
      icon: "target",
      items: [
        "Technical On-page audits",
        "Custom Schema schemas",
        "Page Speed optimization",
        "Google Analytics 4 event triggers"
      ],
      hasDetailPage: false,
      footerNote: "Executed as campaigns during web deployments"
    },
    {
      slug: "contact",
      title: "Creative UI/UX Design",
      subtitle: "Digital Identity & Design files",
      icon: "sparkles",
      items: [
        "Figma design systems",
        "Interactive prototypes",
        "Checkout flow layouts",
        "Custom SVG asset creation"
      ],
      hasDetailPage: false,
      footerNote: "Wireframing aligned before code initialization"
    }
  ];

  return (
    <div className="bg-[#030f0d] text-[#faf9f6] min-h-screen relative">
      
      {/* Visual Film Grain Noise overlay */}
      <div className="bg-noise" />

      {/* 1. Hero Section (Deep Teal - Dark) */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-40 border-b border-white/5 bg-gradient-to-b from-[#030f0d] to-[#061a17] text-white">
        <Container className="relative py-20 sm:py-24 lg:py-32 text-center max-w-4xl z-10">
          <Reveal y={10}>
            <span className="saas-badge bg-white/5 text-[#c5e32b] border-white/10 select-none">
              Capabilities Directory &bull; Scaled Performance
            </span>
          </Reveal>

          <Reveal y={15} delay={0.15}>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl text-white font-display">
              Custom software engineered for performance.
            </h1>
          </Reveal>

          <Reveal y={15} delay={0.3}>
            <p className="mx-auto mt-8 text-sm leading-relaxed text-zinc-300 sm:text-base font-semibold">
              Decoupled frameworks, native mobile apps, and search campaign optimization. We deploy stable systems that accelerate performance, secure customer data, and scale without server crashes.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 2. Service Categories Matrix (Obsidian Green - Dark) */}
      <Section id="categories-matrix" className="bg-[#061a17] border-b border-white/5 py-24 text-white">
        <Reveal y={15}>
          <SectionHeading
            align="center"
            eyebrow="All Disciplines"
            title="Service categories directory"
            description="Explore our execution methodologies mapped across platforms."
            className="mb-16"
            invert={true}
          />
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
          {serviceCategories.map((cat, idx) => (
            <Reveal key={cat.title} y={15} delay={idx * 0.08}>
              <TiltCard maxTilt={8} scale={1.015} className="h-full">
                <div className="glass-card p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-full group border-white/10 rounded-3xl shadow-2xl neon-glow-teal">
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-teal-950/40 text-teal-400 border border-teal-900/30">
                        <Icon name={cat.icon} className="h-5.5 w-5.5" />
                      </span>
                      <div>
                        <h3 className="text-base font-bold text-white font-display">
                          {cat.title}
                        </h3>
                        <p className="text-[9px] font-bold text-[#c5e32b] tracking-wider uppercase font-mono mt-0.5">
                          {cat.subtitle}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-8 space-y-3.5">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-xs text-zinc-300 leading-normal font-semibold">
                          <Icon name="check" className="h-4 w-4 shrink-0 text-[#c5e32b] mt-0.5" strokeWidth={2.4} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10 border-t border-white/5 pt-6 flex items-center justify-between font-display">
                    {cat.hasDetailPage ? (
                      <Button
                        as={Link}
                        to={`/${cat.slug}`}
                        style={{ clipPath: "polygon(0 0, 100% 0, 88% 50%, 100% 100%, 0 100%)" }}
                        className="btn-saas-primary text-xs px-5 py-2.5 rounded-md font-bold bg-[#c5e32b] text-zinc-950 border-0"
                      >
                        Explore details
                      </Button>
                    ) : (
                      <span className="text-[9px] font-bold text-zinc-400 uppercase font-mono">
                        // {cat.footerNote}
                      </span>
                    )}

                    <Link
                      to="/contact"
                      className="text-xs font-semibold text-[#c5e32b] hover:text-[#b0cc20] transition"
                    >
                      Inquire Project &rarr;
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}

        </div>
      </Section>

      {/* 3. Tech Stack Matrix (Obsidian Deep - Dark) */}
      <Section id="tech-matrix" className="bg-[#030f0d] py-24 border-b border-white/5 text-white">
        <Reveal y={15}>
          <SectionHeading
            align="center"
            eyebrow="Tech Stack"
            title="Core development stack"
            description="Our technical teams write codebases using modern languages and compiled dependencies."
            className="mb-14"
            invert={true}
          />
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
          {/* Web Stack */}
          <Reveal y={15}>
            <div className="glass-card p-6 border-white/10 rounded-2xl shadow-xl neon-glow-teal">
              <h4 className="text-[10px] font-bold text-white font-display uppercase tracking-wider mb-4">
                Web Architectures
              </h4>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Vite", "Node.js", "GraphQL", "WordPress REST", "Shopify API", "Tailwind CSS"].map((tech) => (
                  <span key={tech} className="bg-teal-950/40 border border-teal-900/30 text-teal-300 px-3 py-1.5 rounded-md text-xxs font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Mobile Stack */}
          <Reveal y={15} delay={0.1}>
            <div className="glass-card p-6 border-white/10 rounded-2xl shadow-xl neon-glow-lime">
              <h4 className="text-[10px] font-bold text-white font-display uppercase tracking-wider mb-4">
                Mobile Architectures
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Swift", "SwiftUI", "Kotlin", "Jetpack Compose", "Flutter", "Dart", "Firebase", "SQLite"].map((tech) => (
                  <span key={tech} className="bg-teal-950/40 border border-teal-900/30 text-teal-300 px-3 py-1.5 rounded-md text-xxs font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Analytics Stack */}
          <Reveal y={15} delay={0.2}>
            <div className="glass-card p-6 border-white/10 rounded-2xl shadow-xl neon-glow-teal">
              <h4 className="text-[10px] font-bold text-white font-display uppercase tracking-wider mb-4">
                Campaign Integration
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Google Analytics 4", "Tag Manager", "Schema.org", "Algolia Search", "REST APIs", "Vercel Serverless"].map((tech) => (
                  <span key={tech} className="bg-teal-950/40 border border-teal-900/30 text-teal-300 px-3 py-1.5 rounded-md text-xxs font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 4. Why Work With Us (Obsidian Green - Dark) */}
      <Section id="work-with-us" className="bg-[#061a17] pt-24 pb-48 border-white/5 text-white">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal y={15}>
            <SectionHeading
              eyebrow="Pillars of Execution"
              title="Shipped on time, built to perform"
              description="How we align code quality with clear business delivery schedules."
              invert={true}
            />
          </Reveal>

          <div className="space-y-6">
            {[
              { title: "Performance SLA", desc: "We optimize assets and script loads to maximize site performance, lowering bounce rates." },
              { title: "Direct Developer Channel", desc: "Speak directly to technical leads, avoiding communication lags and project manager filters." },
              { title: "Zero Downtime Migration", desc: "We safely coordinate server transitions and domain mappings to avoid client checkout downtime." }
            ].map((p, idx) => (
              <Reveal key={p.title} y={15} delay={idx * 0.1}>
                <div className="flex gap-4">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded border border-teal-900 bg-teal-950 text-teal-400 mt-1 font-mono text-xs">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-white text-base font-display">{p.title}</h4>
                    <p className="mt-1 text-xs text-zinc-300 leading-relaxed font-semibold">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center border-t border-white/5 pt-10">
          <Button as={Link} to="/contact" style={{ clipPath: "polygon(0 0, 100% 0, 92% 50%, 100% 100%, 0 100%)" }} className="btn-saas-primary text-xs pl-6 pr-10 py-3.5 rounded-md font-bold bg-[#c5e32b] text-zinc-950 border-0">
            Schedule a Capabilities Briefing
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Services;
