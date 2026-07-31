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
    <div className="bg-[#061a17] text-[#0f172a] min-h-screen">
      
      {/* 1. Hero Section (Deep Teal - Dark) */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-40 border-b border-teal-950 bg-gradient-to-b from-[#030f0d] to-[#061a17] text-white">
        <Container className="relative py-20 sm:py-24 lg:py-32 text-center z-10">
          <Reveal y={10}>
            <span className="saas-badge text-teal-350">
              Enterprise Delivery &bull; {service.title}
            </span>
          </Reveal>

          <Reveal y={15} delay={0.15}>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl text-white font-display">
              {service.subtitle || service.title}
            </h1>
          </Reveal>

          <Reveal y={15} delay={0.3}>
            <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-zinc-350 sm:text-base">
              {service.description}
            </p>
          </Reveal>

          <Reveal y={15} delay={0.45}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button as="a" href={contact.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-saas-primary text-xs px-8 py-3.5 shadow-sm font-bold bg-teal-500 hover:bg-teal-600 text-zinc-950 rounded-full border-0">
                {service.ctaButton || "Book Discovery Session"}
                <Icon name="calendar" className="h-4 w-4" strokeWidth={2} />
              </Button>
              <Button as="a" href="/contact" className="btn-saas-secondary text-xs px-8 py-3.5 rounded-full border-teal-800 text-teal-100 hover:bg-teal-950/30">
                Contact Engineering
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 2. Service Overview (Warm Sand - Light) */}
      <Section id="overview" className="bg-[#f4f2ee] border-b border-zinc-200 py-20 text-[#0f172a]">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <Reveal y={15}>
            <SectionHeading
              eyebrow="Capabilities"
              title={service.overviewTitle || "Modern architectural execution"}
              description="How we build digital products that scale, load immediately, and drive transactions."
              invert={false}
            />
          </Reveal>
          <Reveal y={15} delay={0.15}>
            <div className="saas-card p-6 sm:p-8 lg:p-10 bg-white rounded-2xl border border-zinc-200/80 shadow-sm">
              <p className="text-xs leading-relaxed text-zinc-700 sm:text-sm font-semibold">
                {service.overview}
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 3. Business Challenges & Solutions (Warm Sand Light - Light) */}
      <Section id="challenges" className="bg-[#faf9f6] py-24 border-b border-zinc-200 text-[#0f172a]">
        <Reveal y={15}>
          <SectionHeading
            align="center"
            eyebrow="Hurdles & Solutions"
            title="Solving critical product challenges"
            description="We audit legacy problems and apply technical solutions that recover lost leads and minimize downtime."
            className="mb-16"
            invert={false}
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Challenges Column */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xs font-bold text-zinc-500 border-l-2 border-zinc-350 pl-4 font-display uppercase tracking-wider">
              Common Product Obstacles
            </h3>
            {service.challenges.map((ch, idx) => (
              <Reveal key={ch.title} y={15} delay={idx * 0.1}>
                <Card className="border border-rose-100 bg-[#fff5f5] p-6 rounded-2xl">
                  <div className="flex gap-4">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded bg-rose-50 text-rose-800 text-xs font-bold mt-1 font-mono">
                      !
                    </span>
                    <div>
                      <h4 className="font-bold text-rose-950 text-sm font-display">{ch.title}</h4>
                      <p className="mt-1.5 text-xs text-rose-900 leading-relaxed">{ch.description}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>

          {/* Solutions Column */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xs font-bold text-zinc-500 border-l-2 border-zinc-350 pl-4 font-display uppercase tracking-wider">
              Our Engineering Response
            </h3>
            {service.solutions.map((sol, idx) => (
              <Reveal key={sol.title} y={15} delay={idx * 0.1}>
                <Card className="border border-teal-100 bg-[#f0f9f9] p-6 rounded-2xl">
                  <div className="flex gap-4">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded bg-teal-50 text-teal-800 text-xs font-bold mt-1 font-mono">
                      ✓
                    </span>
                    <div>
                      <h4 className="font-bold text-teal-950 text-sm font-display">{sol.title}</h4>
                      <p className="mt-1.5 text-xs text-teal-900 leading-relaxed">{sol.description}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. Key Features Grid (Deep Teal - Dark) */}
      <Section id="features" className="bg-[#061a17] border-b border-teal-950 py-24 text-white">
        <Reveal y={15}>
          <SectionHeading
            align="center"
            eyebrow="Key Features"
            title="What we bring to every codebase"
            description="Highly tailored engineering frameworks constructed natively for scalability."
            className="mb-16"
            invert={true}
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 text-white">
          {service.features.map((feature, idx) => (
            <Reveal key={feature.title} y={15} delay={idx * 0.1}>
              <div className="saas-card p-6 sm:p-8 flex gap-5 bg-[#0a2522] border-0 rounded-2xl">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded border border-teal-900 bg-[#061a17] text-teal-350">
                  <Icon name={feature.icon || "sparkles"} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-white leading-tight font-display">{feature.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-350">{feature.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4.5 Types of Solutions We Build (Warm Sand - Light) */}
      {service.solutionsList && (
        <Section id="solutions-built" className="bg-[#f4f2ee] py-24 border-b border-zinc-200 text-[#0f172a]">
          <Reveal y={15}>
            <SectionHeading
              align="center"
              eyebrow="Deployment Scope"
              title="Types of solutions we build"
              description="Bespoke software configurations structured for operational demands."
              className="mb-16"
              invert={false}
            />
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 text-[#0f172a]">
            {service.solutionsList.map((sol, idx) => (
              <Reveal key={sol.title} y={15} delay={idx * 0.08}>
                <div className="saas-card p-6 sm:p-8 bg-white border border-zinc-200/85 rounded-2xl shadow-sm">
                  <span className="saas-badge text-teal-800 bg-zinc-50 border-0">Platform Solution</span>
                  <h4 className="mt-4 text-base font-bold text-zinc-950 font-display">{sol.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-600">{sol.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* 5. Development Workflow Timeline (Warm Sand Light - Light) */}
      <Section id="workflow" className="bg-[#faf9f6] border-b border-zinc-200 py-24 text-[#0f172a]">
        <Reveal y={15}>
          <SectionHeading
            align="center"
            eyebrow="Lifecycle"
            title="Our development workflow"
            description="A transparent, milestone-driven execution layout to ship code safely."
            className="mb-20"
            invert={false}
          />
        </Reveal>

        <div className="relative mx-auto max-w-3xl border-l border-zinc-200 pl-8 space-y-14">
          {service.workflow.map((step, index) => (
            <Reveal key={step.title} y={15} delay={index * 0.08}>
              <div className="relative text-[#0f172a]">
                <span className="absolute -left-12 top-0.5 grid h-8 w-8 place-items-center rounded-full border border-teal-650 bg-white font-mono text-xs font-bold text-teal-700">
                  {step.step || `0${index + 1}`}
                </span>
                <div className="saas-card bg-white border border-zinc-200/80 p-6 rounded-2xl shadow-sm">
                  <h4 className="text-base font-bold text-zinc-950 font-display">{step.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-600">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 6. Technology Stack (Void Black / Dark Teal Accent) */}
      <Section id="stack" className="bg-[#030f0d] py-24 border-b border-teal-950 text-white">
        <Reveal y={15}>
          <SectionHeading
            align="center"
            eyebrow="Technology"
            title="Tools & platforms we master"
            description="We build using modern, compiled platforms that ensure high processing speeds."
            className="mb-12"
            invert={true}
          />
        </Reveal>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {service.technologies.map((tech, idx) => (
            <Reveal key={tech} y={10} delay={idx * 0.05}>
              <span className="rounded-full border border-teal-900 bg-[#0a2522] px-5 py-3 text-xs font-semibold text-teal-100 hover:border-teal-700 hover:text-white transition duration-200 cursor-default font-mono">
                {tech}
              </span>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 7. Business Benefits (Deep Teal - Dark) */}
      <Section id="benefits" className="bg-[#061a17] border-b border-teal-900 py-24 text-white">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <Reveal y={15}>
              <SectionHeading
                eyebrow="ROI Gains"
                title="Business advantages"
                description="We optimize architectures to recover transaction volumes and support business conversions."
                invert={true}
              />
            </Reveal>
            <div className="mt-8 space-y-5 text-white">
              {service.benefits.map((benefit, idx) => (
                <Reveal key={benefit.title} y={15} delay={idx * 0.1}>
                  <div className="flex gap-4">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded border border-teal-900 bg-teal-950 text-teal-100 mt-1 font-mono text-xs">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-white text-base font-display">{benefit.title}</h4>
                      <p className="mt-1 text-xs text-zinc-350 leading-relaxed">{benefit.description}</p>
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
                invert={true}
              />
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.industries.map((ind, idx) => (
                <Reveal key={ind} y={10} delay={idx * 0.05}>
                  <div className="flex items-center gap-3 rounded-xl border border-teal-900 bg-[#0a2522] p-4">
                    <span className="grid h-5 w-5 place-items-center rounded bg-teal-950 text-teal-350">
                      <Icon name="check" className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-xs font-semibold text-teal-100">{ind}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 8. Case Studies Preview (Warm Sand - Light) */}
      {relevantProjects.length > 0 && (
        <Section id="portfolio-preview" className="bg-[#f4f2ee] py-24 border-b border-zinc-200">
          <Reveal y={15}>
            <SectionHeading
              align="center"
              eyebrow="Case Studies"
              title="Featured solutions in action"
              description="Excerpts of custom client configurations shipped by our software engineering teams."
              className="mb-16"
              invert={false}
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

      {/* 9. FAQs Accordion (Warm Sand Light - Light) */}
      <Section id="faq" className="bg-[#faf9f6] border-b border-zinc-200 py-24">
        <Reveal y={15}>
          <SectionHeading
            align="center"
            eyebrow="FAQ"
            title="Service FAQs"
            description="Find detailed answers to common architectural and integration questions."
            className="mb-14"
            invert={false}
          />
        </Reveal>
        <Reveal y={15} delay={0.15}>
          <FAQ faqs={service.faqs} dark={false} />
        </Reveal>
      </Section>

      {/* 10. CTA Block (Deep Teal - Dark) */}
      <section className="bg-[#061a17] py-20 sm:py-24 border-t border-teal-950 text-white">
        <Container>
          <Reveal y={20}>
            <div className="relative overflow-hidden rounded-2xl border border-teal-900/60 bg-[#030f0d] px-8 py-16 text-center text-white sm:px-12 sm:py-20 shadow-sm bg-grid-saas">
              <div className="relative mx-auto max-w-2xl">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-white font-display">
                  {service.ctaTitle || "Scale your website's performance"}
                </h2>
                <p className="mt-4 text-xs text-teal-200/80 sm:text-sm">
                  {service.ctaDesc || "Get in touch with our web engineers to audit your site's speed and outline a headless roadmap."}
                </p>
                <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button as="a" href={contact.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-saas-primary text-xs px-8 py-3.5 rounded-full font-bold bg-teal-500 hover:bg-teal-600 text-zinc-950 border-0">
                    {service.ctaButton || "Book Discovery Session"}
                    <Icon name="calendar" className="h-4 w-4" strokeWidth={2} />
                  </Button>
                  <Button as="a" href="/contact" className="btn-saas-secondary rounded-full px-8 py-3.5 border-teal-800 text-teal-100 hover:bg-teal-950/30">
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
