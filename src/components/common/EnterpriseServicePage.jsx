import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Icon from "../ui/Icon";
import FAQ from "./FAQ";
import ProjectCard from "./ProjectCard";
import Reveal from "../motion/Reveal";
import { contact } from "../../data/company";
import { projectsData } from "../../data/projects";

const EnterpriseServicePage = ({ service }) => {
  if (!service) return null;

  // Filter projects relevant to the service page
  const relevantProjects = projectsData.filter((p) => {
    if (service.id === "web-development") {
      return ["sunasa", "samyakk", "panna", "gueka"].includes(p.id);
    } else {
      return ["perfumania", "gueka", "samyakk"].includes(p.id);
    }
  });

  return (
    <div className="bg-[#09090b] text-zinc-150 min-h-screen bg-grid-saas">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-40 border-b border-zinc-800 bg-[#09090b]">
        <Container className="relative py-20 sm:py-24 lg:py-32 text-center">
          <Reveal y={10}>
            <span className="saas-badge">
              Enterprise Delivery &bull; {service.title}
            </span>
          </Reveal>

          <Reveal y={15} delay={0.15}>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl text-white font-display">
              {service.subtitle || service.title}
            </h1>
          </Reveal>

          <Reveal y={15} delay={0.3}>
            <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              {service.description}
            </p>
          </Reveal>

          <Reveal y={15} delay={0.45}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button as="a" href={contact.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-saas-primary text-xs px-8 py-3.5 rounded-md font-bold text-zinc-950 shadow-sm">
                {service.ctaButton || "Book Discovery Session"}
                <Icon name="calendar" className="h-4 w-4" strokeWidth={2} />
              </Button>
              <Button as="a" href="/contact" className="btn-saas-secondary text-xs px-8 py-3.5 rounded-md">
                Contact Engineering
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 2. Service Overview */}
      <Section id="overview" className="bg-zinc-950/45 border-b border-zinc-800 py-20 bg-dot-matrix">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <Reveal y={15}>
            <SectionHeading
              eyebrow="Capabilities"
              title={service.overviewTitle || "Modern architectural execution"}
              description="How we build digital products that scale, load immediately, and drive transactions."
              invert
            />
          </Reveal>
          <Reveal y={15} delay={0.15}>
            <div className="saas-card p-6 sm:p-8 lg:p-10 relative overflow-hidden">
              <p className="text-xs leading-relaxed text-zinc-350 sm:text-sm font-semibold">
                {service.overview}
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 3. Business Challenges & Solutions */}
      <Section id="challenges" className="bg-[#09090b] py-24 border-b border-zinc-800">
        <Reveal y={15}>
          <SectionHeading
            align="center"
            eyebrow="Hurdles & Solutions"
            title="Solving critical product challenges"
            description="We audit legacy problems and apply technical solutions that recover lost leads and minimize downtime."
            className="mb-16"
            invert
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Challenges Column */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xs font-bold text-zinc-400 border-l-2 border-zinc-800 pl-4 font-display uppercase tracking-wider">
              Common Product Obstacles
            </h3>
            {service.challenges.map((ch, idx) => (
              <Reveal key={ch.title} y={15} delay={idx * 0.1}>
                <Card className="border border-red-500/10 bg-red-950/5 p-6 rounded-lg">
                  <div className="flex gap-4">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded bg-red-500/10 text-red-500 text-xs font-bold mt-1 font-mono">
                      !
                    </span>
                    <div>
                      <h4 className="font-bold text-white text-sm font-display">{ch.title}</h4>
                      <p className="mt-1.5 text-xs text-zinc-450 leading-relaxed">{ch.description}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>

          {/* Solutions Column */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xs font-bold text-zinc-450 border-l-2 border-zinc-800 pl-4 font-display uppercase tracking-wider">
              Our Engineering Response
            </h3>
            {service.solutions.map((sol, idx) => (
              <Reveal key={sol.title} y={15} delay={idx * 0.1}>
                <Card className="border border-zinc-800 bg-zinc-900/50 p-6 rounded-lg">
                  <div className="flex gap-4">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded bg-zinc-850 text-white text-xs font-bold mt-1 font-mono">
                      ✓
                    </span>
                    <div>
                      <h4 className="font-bold text-white text-sm font-display">{sol.title}</h4>
                      <p className="mt-1.5 text-xs text-zinc-455 leading-relaxed">{sol.description}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. Key Features Grid */}
      <Section id="features" className="bg-zinc-950/45 border-b border-zinc-800 py-24 bg-dot-matrix">
        <Reveal y={15}>
          <SectionHeading
            align="center"
            eyebrow="Key Features"
            title="What we bring to every codebase"
            description="Highly tailored engineering frameworks constructed natively for scalability."
            className="mb-16"
            invert
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {service.features.map((feature, idx) => (
            <Reveal key={feature.title} y={15} delay={idx * 0.1}>
              <div className="saas-card p-6 sm:p-8 flex gap-5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded border border-zinc-805 bg-zinc-900 text-zinc-300">
                  <Icon name={feature.icon || "sparkles"} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-white leading-tight font-display">{feature.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-450">{feature.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4.5 Types of Solutions We Build */}
      {service.solutionsList && (
        <Section id="solutions-built" className="bg-[#09090b] py-24 border-b border-zinc-800">
          <Reveal y={15}>
            <SectionHeading
              align="center"
              eyebrow="Deployment Scope"
              title="Types of solutions we build"
              description="Bespoke software configurations structured for operational demands."
              className="mb-16"
              invert
            />
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {service.solutionsList.map((sol, idx) => (
              <Reveal key={sol.title} y={15} delay={idx * 0.08}>
                <div className="saas-card p-6 sm:p-8">
                  <span className="saas-badge">
                    Platform Solution
                  </span>
                  <h4 className="mt-4 text-base font-bold text-white font-display">{sol.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">{sol.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* 5. Development Workflow Timeline */}
      <Section id="workflow" className="bg-zinc-950/45 border-b border-zinc-800 py-24 bg-dot-matrix">
        <Reveal y={15}>
          <SectionHeading
            align="center"
            eyebrow="Lifecycle"
            title="Our development workflow"
            description="A transparent, milestone-driven execution layout to ship code safely."
            className="mb-20"
            invert
          />
        </Reveal>

        <div className="relative mx-auto max-w-3xl timeline-line">
          <div className="space-y-14">
            {service.workflow.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.title} className="relative flex flex-col sm:flex-row sm:justify-between">
                  {/* Step counter tag */}
                  <div className="absolute left-4 top-1.5 z-10 grid h-7 w-7 place-items-center rounded border border-zinc-800 bg-zinc-900 font-bold text-[9px] text-white sm:left-1/2 sm:-translate-x-1/2 font-mono">
                    {step.step || `0${index + 1}`}
                  </div>

                  {/* Card wrapper */}
                  <div className={`pl-12 sm:w-[45%] sm:pl-0 ${isEven ? "sm:order-1 sm:text-right" : "sm:order-2"}`}>
                    <Reveal y={15}>
                      <Card className="bg-[#121214] border border-zinc-800 p-6 rounded-lg relative overflow-hidden">
                        <h4 className="text-base font-bold text-white font-display">{step.title}</h4>
                        <p className="mt-2 text-xs leading-relaxed text-zinc-405">{step.description}</p>
                      </Card>
                    </Reveal>
                  </div>

                  <div className="hidden sm:block sm:w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 6. Technology Stack */}
      <Section id="stack" className="bg-[#09090b] py-24 border-b border-zinc-800">
        <Reveal y={15}>
          <SectionHeading
            align="center"
            eyebrow="Technology"
            title="Tools & platforms we master"
            description="We build using modern, compiled platforms that ensure high processing speeds."
            className="mb-12"
            invert
          />
        </Reveal>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {service.technologies.map((tech, idx) => (
            <Reveal key={tech} y={10} delay={idx * 0.05}>
              <span className="rounded border border-zinc-800 bg-[#121214] px-5 py-3 text-xs font-semibold text-zinc-400 hover:border-zinc-700 hover:text-white transition cursor-default">
                {tech}
              </span>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 7. Business Benefits */}
      <Section id="benefits" className="bg-zinc-950/45 border-b border-zinc-800 py-24 bg-dot-matrix">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <Reveal y={15}>
              <SectionHeading
                eyebrow="ROI Gains"
                title="Business advantages"
                description="We optimize architectures to recover transaction volumes and support business conversions."
                invert
              />
            </Reveal>
            <div className="mt-8 space-y-5">
              {service.benefits.map((benefit, idx) => (
                <Reveal key={benefit.title} y={15} delay={idx * 0.1}>
                  <div className="flex gap-4">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded border border-zinc-850 bg-zinc-900 text-zinc-350 mt-1 font-mono text-xs">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-white text-base font-display">{benefit.title}</h4>
                      <p className="mt-1 text-xs text-zinc-405 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Industries Served */}
          <div>
            <Reveal y={15}>
              <SectionHeading
                eyebrow="Target Verticals"
                title="Industries we service"
                description="Our developers understand specialized industry catalogs and transaction requirements."
                invert
              />
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.industries.map((ind, idx) => (
                <Reveal key={ind} y={10} delay={idx * 0.05}>
                  <div className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-[#121214] p-4">
                    <span className="grid h-5 w-5 place-items-center rounded bg-zinc-900 text-zinc-400">
                      <Icon name="check" className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-xs font-semibold text-zinc-400">{ind}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 8. Case Studies Preview */}
      {relevantProjects.length > 0 && (
        <Section id="portfolio-preview" className="bg-[#09090b] py-24 border-b border-zinc-800">
          <Reveal y={15}>
            <SectionHeading
              align="center"
              eyebrow="Case Studies"
              title="Featured solutions in action"
              description="Excerpts of custom client configurations shipped by our software engineering teams."
              className="mb-16"
              invert
            />
          </Reveal>

          <div className="space-y-10 max-w-4xl mx-auto">
            {relevantProjects.map((proj, idx) => (
              <Reveal key={proj.id} y={20} delay={idx * 0.1}>
                <ProjectCard project={proj} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* 9. FAQs Accordion */}
      <Section id="faq" className="bg-zinc-950/45 border-b border-zinc-800 py-24 bg-dot-matrix">
        <Reveal y={15}>
          <SectionHeading
            align="center"
            eyebrow="FAQ"
            title="Service FAQs"
            description="Find detailed answers to common architectural and integration questions."
            className="mb-14"
            invert
          />
        </Reveal>
        <Reveal y={15} delay={0.15}>
          <FAQ faqs={service.faqs} dark={true} />
        </Reveal>
      </Section>

      {/* 10. CTA Block */}
      <section className="bg-zinc-950 py-20 sm:py-24 border-t border-zinc-800">
        <Container>
          <Reveal y={20}>
            <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 px-8 py-16 text-center text-white sm:px-12 sm:py-20 shadow-sm bg-grid-saas">
              <div className="relative mx-auto max-w-2xl">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-white font-display">
                  {service.ctaTitle || "Scale your website's performance"}
                </h2>
                <p className="mt-4 text-xs text-zinc-450 sm:text-sm">
                  {service.ctaDesc || "Get in touch with our web engineers to audit your site's speed and outline a headless roadmap."}
                </p>
                <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button as="a" href={contact.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-saas-primary px-8 py-3.5 rounded-md font-bold text-zinc-950">
                    {service.ctaButton || "Book Discovery Session"}
                    <Icon name="calendar" className="h-4 w-4" strokeWidth={2} />
                  </Button>
                  <Button as="a" href="/contact" className="btn-saas-secondary rounded-md px-8">
                    Send Us a Message
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
};

export default EnterpriseServicePage;
