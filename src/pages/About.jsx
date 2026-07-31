import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Icon from "../components/ui/Icon";
import Reveal from "../components/motion/Reveal";
import { offices } from "../data/company";

const About = () => {
  const milestones = [
    { year: "2019", title: "Corporate Inception", desc: "Probey Services incorporated in Noida, India, delivering customized full-stack PHP and Javascript sites." },
    { year: "2021", title: "Enterprise Realignment", desc: "Integrated headless Shopify, custom REST/GraphQL APIs, and native mobile services (Swift/Kotlin)." },
    { year: "2023", title: "Global Contact Expansion", desc: "Established support operations centers in Toronto, Delaware, and London to service Western clients." },
    { year: "2026", title: "Modern Authority", desc: "Built an international squad of 100+ designers, developers, and consultants shipping enterprise systems." }
  ];

  return (
    <div className="bg-[#080c16] text-slate-100 min-h-screen bg-grid-saas">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-40 border-b border-white/5 bg-[#080c16]">
        <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
          <div className="absolute left-1/3 top-10 h-80 w-80 rounded-full bg-brand-cyan/5 blur-[100px]" />
        </div>

        <Container className="relative py-20 sm:py-24 lg:py-32 text-center max-w-4xl">
          <Reveal y={10}>
            <span className="saas-badge">
              Our Journey &bull; Who We Are
            </span>
          </Reveal>

          <Reveal y={15} delay={0.15}>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl text-white font-display">
              Bespoke digital platforms <span className="gradient-saas-text">executed globally.</span>
            </h1>
          </Reveal>

          <Reveal y={15} delay={0.3}>
            <p className="mx-auto mt-8 text-base leading-relaxed text-slate-400 sm:text-lg font-semibold">
              Professional software engineers operating across international time zones.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 2. Company Story Positioning Card */}
      <Section id="story" className="bg-[#0c1322] border-b border-white/5 py-20 bg-dot-matrix">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <Reveal y={15}>
            <SectionHeading
              eyebrow="Our Positioning"
              title="A software agency designed for speed"
              description="Registered under CIN U74999UP2019PTC124494."
              invert
            />
          </Reveal>
          <Reveal y={15} delay={0.15}>
            <div className="saas-card p-6 sm:p-8 lg:p-10 space-y-6 relative overflow-hidden">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-cyan/5 blur-2xl" />
              <p className="text-xs sm:text-sm leading-relaxed text-slate-350">
                Registered under CIN U74999UP2019PTC124494, Probey Services began as a specialized web engineering hub. Today, we are an international vendor of high-speed headless storefronts, native iOS/Android platforms, and technical marketing systems. We operate transparently on client workflows, delivering security, scalability, and measurable results.
              </p>
              <div className="border-t border-white/5 pt-6 flex flex-wrap gap-6 text-xs sm:text-sm text-slate-400">
                <div>
                  <h4 className="font-bold text-slate-500 uppercase tracking-widest text-xxs font-display">Founded</h4>
                  <p className="mt-1 font-bold text-white text-sm font-mono">2019</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-500 uppercase tracking-widest text-xxs font-display">Registrations</h4>
                  <p className="mt-1 font-semibold text-slate-350 font-mono">CIN U74999UP2019PTC124494</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 3. Milestones Timeline */}
      <Section id="timeline" className="bg-[#080c16] py-24 border-b border-white/5">
        <Reveal y={15}>
          <SectionHeading
            align="center"
            eyebrow="Milestones"
            title="Our journey of scaling code"
            description="Our transition from local code integration into a global technical vendor."
            className="mb-20"
            invert
          />
        </Reveal>

        <div className="relative mx-auto max-w-3xl timeline-line">
          <div className="space-y-16">
            {milestones.map((ms, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={ms.year} className="relative flex flex-col sm:flex-row sm:justify-between">
                  <div className="absolute left-4 top-1.5 z-10 grid h-8 w-8 place-items-center rounded-full bg-brand-cyan font-bold text-[10px] text-white sm:left-1/2 sm:-translate-x-1/2 shadow-lg font-mono">
                    {ms.year.slice(2)}
                  </div>

                  <div className={`pl-12 sm:w-[45%] sm:pl-0 ${isEven ? "sm:order-1 sm:text-right" : "sm:order-2"}`}>
                    <Reveal y={15}>
                      <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider font-mono mb-2 inline-block">
                        // milestone_{ms.year}
                      </span>
                      <h4 className="text-base font-bold text-white font-display">{ms.title}</h4>
                      <p className="mt-2 text-xs leading-relaxed text-slate-400">{ms.desc}</p>
                    </Reveal>
                  </div>

                  <div className="hidden sm:block sm:w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 4. Mission, Vision & Core Values */}
      <Section id="mission-values" className="bg-[#0c1322] border-b border-white/5 py-24 bg-dot-matrix">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          {/* Mission & Vision */}
          <div className="space-y-6">
            <Reveal y={15}>
              <div className="saas-card p-6">
                <span className="saas-badge text-[9px] py-1 px-3">
                  Our Mission
                </span>
                <p className="mt-4 text-sm leading-relaxed text-slate-350 font-display font-semibold">
                  To replace unstable, unoptimized visual platforms with fast, compiled headless systems and native apps that drive transactions.
                </p>
              </div>
            </Reveal>

            <Reveal y={15} delay={0.1}>
              <div className="saas-card p-6">
                <span className="saas-badge text-[9px] py-1 px-3 bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan">
                  Our Vision
                </span>
                <p className="mt-4 text-sm leading-relaxed text-slate-350 font-display font-semibold">
                  To become the premier global software partner for mid-market and enterprise retail brands looking to scale their digital infrastructure.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Core Values */}
          <div>
            <Reveal y={15}>
              <SectionHeading
                eyebrow="Core Values"
                title="Our operational guidelines"
                description="Principles that direct our software design and delivery timelines."
                invert
              />
            </Reveal>
            <div className="mt-8 space-y-6">
              {[
                { title: "Code Integrity", desc: "Clean, documented repositories with optimal performance metrics." },
                { title: "Uptime Assurance", desc: "Fail-safe, serverless edge hosting options that ensure continuous transaction loops." },
                { title: "Communication Transparency", desc: "Milestone-driven logs with direct Slack and Git progress updates." }
              ].map((val, idx) => (
                <Reveal key={val.title} y={15} delay={idx * 0.1}>
                  <div className="flex gap-4">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-cyan/10 text-brand-cyan mt-1 font-mono text-xs font-bold">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-white text-sm font-display">{val.title}</h4>
                      <p className="mt-1 text-xs text-slate-400 leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Why Clients Choose Us */}
      <Section id="why-us" className="bg-[#080c16] py-24 border-b border-white/5">
        <Reveal y={15}>
          <SectionHeading
            align="center"
            eyebrow="Operational Strengths"
            title="Why businesses partner with Probey Services"
            description="Clear strategic justifications to align with our technical delivery teams."
            className="mb-16"
            invert
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: "code", title: "No Vendor Lock-in", desc: "We write standard, clean frameworks that are easy for internal teams to maintain and modify without software dependency leaks." },
            { icon: "zap", title: "Lighthouse Speed Focus", desc: "We target 90+ core speeds to improve search rankings, lower organic customer costs, and increase transaction checkouts." },
            { icon: "shield", title: "Certified Security Standard", desc: "We construct applications following strict keychain and transaction encryption parameters." }
          ].map((item, idx) => (
            <Reveal key={item.title} y={15} delay={idx * 0.08}>
              <div className="saas-card p-6 flex flex-col justify-between h-full relative overflow-hidden">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-cyan/5 blur-2xl" />
                <div>
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-cyan/10 text-brand-cyan mb-5">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-bold text-white font-display">{item.title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate-400">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 6. Global Presence (Offices Grid) */}
      <Section id="offices" className="bg-[#0c1322] py-24 bg-dot-matrix">
        <Reveal y={15}>
          <SectionHeading
            align="center"
            eyebrow="Global Presence"
            title="Administrative centers"
            description="Administrative offices coordinating active developer timelines."
            className="mb-16"
            invert
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((off, idx) => (
            <Reveal key={off.city} y={15} delay={idx * 0.06}>
              <div className="saas-card p-6 flex flex-col justify-between h-full relative overflow-hidden">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-cyan/5 blur-2xl" />
                <div>
                  <span className="saas-badge text-[8px] py-0.5 px-2.5">
                    {off.region} Region
                  </span>
                  <h3 className="mt-4 text-base font-bold text-white flex items-center gap-2 font-display">
                    <Icon name="pin" className="h-4 w-4 text-brand-cyan" />
                    {off.city} Office
                  </h3>
                  <p className="mt-2 text-xxs text-slate-450 leading-relaxed font-semibold">
                    {off.role || "Technical Coordination & Operations Center"}
                  </p>
                </div>
                <div className="mt-6 border-t border-white/5 pt-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-display">Contact</p>
                  <p className="mt-1 text-xs text-slate-350 font-mono">info@probeyservices.com</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default About;
