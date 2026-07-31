import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Icon from "../components/ui/Icon";
import Button from "../components/ui/Button";
import Reveal from "../components/motion/Reveal";
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
      footerNote: "Executed as customized campaigns during web deployments"
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
      footerNote: "Collaborative wireframing aligned before code initialization"
    }
  ];

  return (
    <div className="bg-[#020308] text-slate-100 min-h-screen bg-grid-saas">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-40 border-b border-white/5 bg-[#020308]">
        <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
          <div className="absolute left-1/3 top-10 h-80 w-80 rounded-full bg-brand-emerald/5 blur-[100px]" />
        </div>

        <Container className="relative py-20 sm:py-24 lg:py-32 text-center max-w-4xl">
          <Reveal y={10}>
            <span className="saas-badge">
              Capabilities Directory &bull; Scaled Performance
            </span>
          </Reveal>

          <Reveal y={15} delay={0.15}>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl text-white font-display">
              Custom software engineered <span className="gradient-saas-text">for performance.</span>
            </h1>
          </Reveal>

          <Reveal y={15} delay={0.3}>
            <p className="mx-auto mt-8 text-base leading-relaxed text-slate-400 sm:text-lg font-semibold">
              Decoupled frameworks, native mobile apps, and search campaign optimization. We deploy stable systems that accelerate performance, secure customer data, and scale without server crashes.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 2. Service Categories Matrix */}
      <Section id="categories-matrix" className="bg-[#060a16] border-b border-white/5 py-24 bg-dot-matrix">
        <Reveal y={15}>
          <SectionHeading
            align="center"
            eyebrow="All Disciplines"
            title="Service categories directory"
            description="Explore our execution methodologies mapped across platforms."
            className="mb-16"
            invert
          />
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
          {serviceCategories.map((cat, idx) => (
            <Reveal key={cat.title} y={15} delay={idx * 0.08}>
              <div className="saas-card p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-full group relative overflow-hidden">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-emerald/5 blur-2xl" />
                <div>
                  <div className="flex items-center gap-4">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-emerald/10 text-brand-emerald">
                      <Icon name={cat.icon} className="h-5.5 w-5.5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-brand-emerald transition-colors font-display">
                        {cat.title}
                      </h3>
                      <p className="text-[10px] font-bold text-slate-500 tracking-wider uppercase font-mono mt-0.5">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-8 space-y-3.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-400 leading-normal font-semibold">
                        <Icon name="check" className="h-4 w-4 shrink-0 text-brand-emerald mt-0.5" strokeWidth={2.4} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 border-t border-white/5 pt-6 flex items-center justify-between">
                  {cat.hasDetailPage ? (
                    <Button
                      as={Link}
                      to={`/${cat.slug}`}
                      className="btn-saas-primary text-xs px-5 py-2.5"
                      icon="arrowRight"
                    >
                      Explore details
                    </Button>
                  ) : (
                    <span className="text-[10px] font-bold text-slate-500 uppercase font-mono">
                      // {cat.footerNote}
                    </span>
                  )}

                  <Link
                    to="/contact"
                    className="text-xs font-semibold text-brand-cyan hover:text-cyan-450 transition font-display"
                  >
                    Inquire Project
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3. Tech Stack Matrix */}
      <Section id="tech-matrix" className="bg-[#020308] py-24 border-b border-white/5">
        <Reveal y={15}>
          <SectionHeading
            align="center"
            eyebrow="Tech Stack"
            title="Core development stack"
            description="Our technical teams write codebases using modern languages and compiled dependencies."
            className="mb-14"
            invert
          />
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
          {/* Web Stack */}
          <Reveal y={15}>
            <div className="saas-card p-6 relative overflow-hidden">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-emerald/5 blur-2xl" />
              <h4 className="text-xs font-bold text-brand-emerald font-display uppercase tracking-wider mb-4">
                Web Architectures
              </h4>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Vite", "Node.js", "GraphQL", "WordPress REST", "Shopify API", "Tailwind CSS"].map((tech) => (
                  <span key={tech} className="bg-slate-900 border border-white/5 text-slate-350 px-3 py-1.5 rounded-lg text-xxs font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Mobile Stack */}
          <Reveal y={15} delay={0.1}>
            <div className="saas-card p-6 relative overflow-hidden">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-cyan/5 blur-2xl" />
              <h4 className="text-xs font-bold text-brand-cyan font-display uppercase tracking-wider mb-4">
                Mobile Architectures
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Swift", "SwiftUI", "Kotlin", "Jetpack Compose", "Flutter", "Dart", "Firebase", "SQLite"].map((tech) => (
                  <span key={tech} className="bg-slate-900 border border-white/5 text-slate-350 px-3 py-1.5 rounded-lg text-xxs font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Analytics Stack */}
          <Reveal y={15} delay={0.2}>
            <div className="saas-card p-6 relative overflow-hidden">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/5 blur-2xl" />
              <h4 className="text-xs font-bold text-indigo-400 font-display uppercase tracking-wider mb-4">
                Campaign Integration
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Google Analytics 4", "Tag Manager", "Schema.org", "Algolia Search", "REST APIs", "Vercel Serverless"].map((tech) => (
                  <span key={tech} className="bg-slate-900 border border-white/5 text-slate-350 px-3 py-1.5 rounded-lg text-xxs font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 4. Why Work With Us */}
      <Section id="work-with-us" className="bg-[#060a16] border-t border-white/5 py-24 bg-dot-matrix">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal y={15}>
            <SectionHeading
              eyebrow="Pillars of Execution"
              title="Shipped on time, built to perform"
              description="How we align code quality with clear business delivery schedules."
              invert
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
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-emerald/10 text-brand-emerald mt-1 font-mono text-xs font-bold">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-white text-base font-display">{p.title}</h4>
                    <p className="mt-1 text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center border-t border-white/5 pt-10">
          <Button as={Link} to="/contact" size="lg" className="btn-saas-primary px-8 py-3 rounded-full text-white font-bold">
            Schedule a Capabilities Briefing
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Services;
