import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import ProjectCard from "../components/common/ProjectCard";
import Reveal from "../components/motion/Reveal";
import FAQ from "../components/common/FAQ";
import { contact } from "../data/company";
import { projectsData } from "../data/projects";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const featuredProjects = projectsData.slice(0, 3);

  // GSAP Refs
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const mockupRef = useRef(null);
  const graphLineRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(badgeRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.1 })
      .fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.75 }, "-=0.3")
      .fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
      .fromTo(ctaRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.45")
      .fromTo(mockupRef.current, { opacity: 0, y: 30, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 0.8 }, "-=0.3");

    if (graphLineRef.current) {
      gsap.fromTo(
        graphLineRef.current,
        { strokeDashoffset: 500, strokeDasharray: 500 },
        { strokeDashoffset: 0, duration: 2, ease: "power2.inOut", delay: 1.2 }
      );
    }
  }, []);

  const homeFaqs = [
    {
      question: "What makes Probey Services different from standard digital agencies?",
      answer: "We construct custom architectures rather than cheap visual builders. We target sub-second load times and scale capabilities natively."
    },
    {
      question: "Do you support global delivery?",
      answer: "Yes. With 9 offices across India, the US, UK, and Canada, we scale team alignments to match international time zones."
    },
    {
      question: "How do we initiate a consultation?",
      answer: "Book a call directly through our Calendly calendar link or send an inquiry via our contact form."
    }
  ];

  return (
    <div className="bg-[#09090b] text-zinc-150 min-h-screen bg-grid-saas">
      {/* 1. SaaS Hero Section */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-40 border-b border-zinc-800 bg-[#09090b]">
        <Container className="relative py-16 sm:py-24 text-center max-w-5xl">
          <div ref={badgeRef} className="opacity-0">
            <span className="saas-badge">
              Headless Architectures &bull; Shipped to Edge
            </span>
          </div>

          <h1 ref={titleRef} className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7.5xl text-white font-display opacity-0">
            We build digital systems that shape businesses.
          </h1>

          <p ref={descRef} className="mx-auto mt-8 max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base opacity-0">
            Custom software development, headless web architectures, and high-performance mobile apps built for scale. Probey Services designs and engineers custom software platforms that resolve operational bottlenecks, deliver compiled execution speeds, and maximize transaction conversion rates.
          </p>

          <div ref={ctaRef} className="mt-10 flex flex-col justify-center items-center gap-4 sm:flex-row opacity-0">
            <Button as={Link} to="/contact" className="btn-saas-primary text-xs px-8 py-3.5 rounded-md">
              Partner With Us
            </Button>
            <Button as={Link} to="/services" className="btn-saas-secondary text-xs px-8 py-3.5 rounded-md">
              Explore Capabilities
            </Button>
          </div>

          {/* Minimalist Dashboard Mockup */}
          <div ref={mockupRef} className="mx-auto mt-16 max-w-4xl rounded-xl border border-zinc-800 bg-zinc-950 p-2 shadow-sm opacity-0">
            <div className="flex items-center justify-between rounded-t-lg bg-zinc-900 px-4 py-3 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-zinc-800" />
                <span className="h-2 w-2 rounded-full bg-zinc-800" />
                <span className="h-2 w-2 rounded-full bg-zinc-800" />
                <span className="ml-3 font-mono text-[10px] text-zinc-500">https://portfolio.probeyservices.com/dashboard</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
                <span className="text-[10px] font-mono text-zinc-400">9 Active Edge Nodes</span>
              </div>
            </div>
            
            <div className="p-6 sm:p-8 bg-[#09090b] rounded-b-lg text-left">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-800 pb-5 mb-6">
                <div>
                  <h4 className="text-xs font-semibold text-zinc-550 uppercase tracking-wider font-display">Workspace Overview</h4>
                  <h3 className="text-lg font-bold text-white mt-1 font-display">System Integrity Metrics</h3>
                </div>
                <div className="flex gap-2">
                  <span className="rounded border border-zinc-800 bg-zinc-900 px-3 py-1 text-xxs font-mono text-zinc-300">STATUS: ACTIVE</span>
                  <span className="rounded border border-zinc-800 bg-zinc-900 px-3 py-1 text-xxs font-mono text-zinc-300">SPEED: 0.18s</span>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-[1.8fr_1.2fr]">
                <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-5 relative overflow-hidden">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 font-display">Data pipeline throughput</p>
                  <div className="h-32 mt-4 flex items-end">
                    <svg className="w-full h-full" viewBox="0 0 500 100" preserveAspectRatio="none">
                      <path
                        ref={graphLineRef}
                        d="M0,80 Q50,20 100,50 T200,30 T300,70 T400,20 T500,40"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 font-display">Lighthouse Speed Performance</p>
                    <p className="text-xl font-bold text-white mt-1 font-mono">99 / 100</p>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 font-display">Verified System Uptime</p>
                    <p className="text-xl font-bold text-white mt-1 font-mono">100.00%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Trust Indicators Logo Row */}
      <section className="bg-zinc-950 border-b border-zinc-800 py-10">
        <Container>
          <div className="flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale hover:opacity-80 transition duration-500">
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 font-display">SUNASA</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 font-display">SAMYAKK</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 font-display">PERFUMANIA</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 font-display">GUEKA</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 font-display">FRAGRANTORS</span>
          </div>
        </Container>
      </section>

      {/* 3. Company Introduction */}
      <Section id="introduction" className="bg-[#09090b] py-24 border-b border-zinc-800">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal y={15}>
            <SectionHeading
              eyebrow="Engineering beyond boilerplate"
              title="Why custom code is the only architecture for digital growth"
              description="A clear technical justification for why your product layout needs bespoke engineering."
              invert
            />
          </Reveal>
          <Reveal y={15} delay={0.15}>
            <div className="saas-card p-6 sm:p-8 lg:p-10 space-y-6 relative overflow-hidden">
              <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                Most agencies build on heavy, unoptimized visual builders that bloat page speed, expose systems to plugins risks, and damage search positioning. At Probey Services, we build custom. By separating your presentation layer from database engines, we deliver compiled web pages and native mobile products that execute instantly, scale automatically, and keep security standards strict.
              </p>
              <div className="pt-4 border-t border-zinc-800">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-zinc-350 transition"
                >
                  Read Our Story
                  <Icon name="arrowRight" className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 4. Services Overview */}
      <Section id="services" className="bg-zinc-950/40 border-b border-zinc-800 py-24 relative overflow-hidden bg-dot-matrix">
        <Reveal y={15}>
          <SectionHeading
            align="center"
            eyebrow="Core agency disciplines"
            title="Everything you need to scale storefront execution"
            description="Explore our primary capabilities to scale digital infrastructures."
            className="mb-16"
            invert
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "globe",
              title: "Web Development",
              desc: "Headless e-commerce pipelines, bespoke Next.js and React portals, and custom API-driven corporate hubs.",
              slug: "web-development"
            },
            {
              icon: "phone",
              title: "Mobile App Development",
              desc: "Native iOS (Swift) and Android (Kotlin) app architectures, and compiled cross-platform Flutter platforms.",
              slug: "app-development"
            },
            {
              icon: "target",
              title: "SEO & Marketing",
              desc: "Growth campaigns, technical on/off-page audits, schema optimization, and analytics event triggers.",
              slug: "services"
            },
            {
              icon: "sparkles",
              title: "Creative Design",
              desc: "High-fidelity Figma wireframes, UI/UX interaction blueprints, and clean identity layouts.",
              slug: "services"
            }
          ].map((item, idx) => (
            <Reveal key={item.title} y={15} delay={idx * 0.08}>
              <div className="saas-card p-6 flex flex-col justify-between h-full group">
                <div>
                  <span className="grid h-9 w-9 place-items-center rounded border border-zinc-800 bg-zinc-900 text-zinc-300">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-white font-display group-hover:text-zinc-300 transition-colors">{item.title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-zinc-400">{item.desc}</p>
                </div>
                <div className="mt-6 border-t border-zinc-800 pt-4">
                  <Link
                    to={`/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-zinc-350 transition"
                  >
                    View Details
                    <Icon name="arrowRight" className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5. Featured Solutions (Projects) */}
      <Section id="projects" className="bg-[#09090b] py-24 border-b border-zinc-800">
        <Reveal y={15}>
          <SectionHeading
            align="center"
            eyebrow="Featured Solutions"
            title="Featured solutions in action"
            description="Excerpts of custom client configurations built by our developers."
            className="mb-16"
            invert
          />
        </Reveal>

        <div className="space-y-12 max-w-5xl mx-auto">
          {featuredProjects.map((project, idx) => (
            <Reveal key={project.id} y={20} delay={idx * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button as={Link} to="/services" className="btn-saas-secondary text-xs px-6 py-2.5 text-zinc-300 font-semibold rounded-md" icon="arrowRight">
            Explore More Capabilities
          </Button>
        </div>
      </Section>

      {/* 6. Stepped Development Process Map */}
      <Section id="process" className="bg-zinc-950/40 border-b border-zinc-800 py-24 relative overflow-hidden bg-dot-matrix">
        <Reveal y={15}>
          <SectionHeading
            align="center"
            eyebrow="Workflow"
            title="From trigger to action in seconds"
            description="A transparent, milestone-driven lifecycle to ship secure codebases."
            className="mb-16"
            invert
          />
        </Reveal>

        {/* Dynamic visual pipeline row */}
        <div className="grid gap-6 sm:grid-cols-4 max-w-4xl mx-auto">
          {[
            { step: "01", title: "Discovery", desc: "Audit database requirements & outline roadmaps." },
            { step: "02", title: "Prototyping", desc: "Figma interactive layouts & designs." },
            { step: "03", title: "Performance Coding", desc: "Clean semantic code & api syncing." },
            { step: "04", title: "Release & QA", desc: "Device matrix audits & DNS launched." }
          ].map((item, idx) => (
            <Reveal key={item.step} y={15} delay={idx * 0.08}>
              <div className="saas-card p-6 relative h-full">
                <span className="absolute top-4 right-4 text-xs font-bold text-zinc-400 font-mono">
                  {item.step}
                </span>
                <h4 className="mt-2 text-base font-bold text-white font-display">{item.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Metrics panel box */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Reveal y={15}>
            <div className="saas-card p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left bg-zinc-950">
              {[
                { label: "Tasks Automated", val: "10M+" },
                { label: "Teams Onboard", val: "5,000+" },
                { label: "Uptime SLA", val: "99.9%" },
                { label: "Integrations", val: "120+" }
              ].map((stat, idx) => (
                <div key={stat.label} className="w-full sm:w-auto relative">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 font-display">{stat.label}</p>
                  <p className="mt-1.5 text-2xl font-bold text-white font-mono">{stat.val}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 7. Client Benefits */}
      <Section id="benefits" className="bg-[#09090b] py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <Reveal y={15}>
            <SectionHeading
              eyebrow="Business advantages"
              title="Business advantages of custom engineering"
              description="A clear comparison linking engineering choices to business revenue results."
              invert
            />
          </Reveal>

          <div className="grid gap-6">
            {[
              {
                icon: "activity",
                title: "Maximize Ad Spend Performance",
                desc: "Faster landing page speed lowers bounce rates, increasing Google and Meta ad efficiency."
              },
              {
                icon: "shield",
                title: "System Security",
                desc: "Custom API layers protect transaction data and keep core databases isolated from public access."
              },
              {
                icon: "sparkles",
                title: "Full Editorial Freedom",
                desc: "Intuitive headless CMS blocks allow marketing teams to adjust content and publish blocks without developer resources."
              }
            ].map((val, idx) => (
              <Reveal key={val.title} y={15} delay={idx * 0.1}>
                <div className="saas-card flex gap-5 p-6 sm:p-8">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded border border-zinc-800 bg-zinc-900 text-zinc-300">
                    <Icon name={val.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white font-display leading-tight">{val.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-400">{val.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* 8. FAQ Accordion */}
      <Section id="faqs" className="bg-zinc-950/40 border-y border-zinc-800 py-24">
        <Reveal y={15}>
          <SectionHeading
            align="center"
            eyebrow="FAQ"
            title="Answers to technical cooperation queries"
            description="Review basic operational details and communication matrices."
            className="mb-14"
            invert
          />
        </Reveal>
        <Reveal y={15} delay={0.15}>
          <FAQ faqs={homeFaqs} dark={true} />
        </Reveal>
      </Section>

      {/* 9. Final Contact CTA */}
      <section className="bg-zinc-950 py-20 sm:py-24 border-t border-zinc-800">
        <Container>
          <Reveal y={20}>
            <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 px-8 py-16 text-center text-white sm:px-12 sm:py-20 shadow-sm bg-grid-saas animate-none">
              <div className="relative mx-auto max-w-2xl">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-white font-display">
                  Ready to deploy something exceptional?
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-xs text-zinc-400 sm:text-sm">
                  Schedule a virtual discovery session with our engineers to align on timelines, budgets, and architecture.
                </p>

                <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button as="a" href={contact.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-saas-primary text-xs px-8 py-3.5 rounded-md font-bold text-zinc-950">
                    Book Discovery Call
                    <Icon name="calendar" className="h-4 w-4" strokeWidth={2} />
                  </Button>
                  <Button as={Link} to="/contact" className="btn-saas-secondary text-xs px-8 py-3.5 rounded-md">
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

export default Home;
