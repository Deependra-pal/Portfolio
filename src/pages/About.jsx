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
    <div className="bg-[#030f0d] text-[#faf9f6] min-h-screen relative">
      
      {/* Visual Film Grain Noise overlay */}
      <div className="bg-noise" />

      {/* 1. Hero Section (Deep Teal - Dark) */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-40 border-b border-teal-950 bg-gradient-to-b from-[#030f0d] to-[#061a17] text-white">
        <Container className="relative py-20 sm:py-24 lg:py-32 text-center max-w-4xl z-10">
          <Reveal y={10}>
            <span className="saas-badge bg-white/5 text-teal-350 border-white/10 select-none">
              Our Journey &bull; Who We Are
            </span>
          </Reveal>

          <Reveal y={15} delay={0.15}>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl text-white font-display">
              Bespoke digital platforms executed globally.
            </h1>
          </Reveal>

          <Reveal y={15} delay={0.3}>
            <p className="mx-auto mt-8 text-sm leading-relaxed text-zinc-350 sm:text-base font-semibold">
              Professional software engineers operating across international time zones.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 2. Company Story (Obsidian Green - Dark) */}
      <Section id="story" className="bg-[#061a17] border-b border-white/5 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <Reveal y={15}>
            <SectionHeading
              eyebrow="Our Positioning"
              title="A software agency designed for speed"
              description="Registered under CIN U74999UP2019PTC124494."
              invert={true}
            />
          </Reveal>
          <Reveal y={15} delay={0.15}>
            <div className="glass-card p-6 sm:p-8 lg:p-10 rounded-3xl border-white/10 shadow-2xl neon-glow-teal">
              <p className="text-xs sm:text-sm leading-relaxed text-zinc-300">
                Registered under CIN U74999UP2019PTC124494, Probey Services began as a specialized web engineering hub. Today, we are an international vendor of high-speed headless storefronts, native iOS/Android platforms, and technical marketing systems. We operate transparently on client workflows, delivering security, scalability, and measurable results.
              </p>
              <div className="border-t border-white/5 mt-6 pt-6 flex flex-wrap gap-6 text-xs sm:text-sm text-zinc-400">
                <div>
                  <h4 className="font-bold text-zinc-500 uppercase tracking-widest text-[10px] font-display">Founded</h4>
                  <p className="mt-1 font-bold text-[#c5e32b] text-sm font-mono">2019</p>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-500 uppercase tracking-widest text-[10px] font-display">Registrations</h4>
                  <p className="mt-1 font-semibold text-zinc-300 font-mono">CIN U74999UP2019PTC124494</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 3. Milestones Timeline (Obsidian Deep - Dark) */}
      <Section id="timeline" className="bg-[#030f0d] py-24 border-b border-white/5">
        <Reveal y={15}>
          <SectionHeading
            align="center"
            eyebrow="Milestones"
            title="Our journey of scaling code"
            description="Our transition from local code integration into a global technical vendor."
            className="mb-20"
            invert={true}
          />
        </Reveal>

        <div className="relative mx-auto max-w-3xl border-l border-white/5 pl-8 space-y-16">
          {milestones.map((ms, index) => (
            <Reveal key={ms.year} y={15} delay={index * 0.08}>
              <div className="relative">
                <span className="absolute -left-12 top-0.5 grid h-8 w-8 place-items-center rounded-full border border-teal-500 bg-teal-950 font-mono text-xs font-bold text-[#c5e32b] shadow-lg">
                  {ms.year.slice(2)}
                </span>
                <h4 className="text-base font-bold text-white font-display">{ms.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">{ms.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4. Mission & Values (Deep Teal - Dark) */}
      <Section id="mission-values" className="bg-[#061a17] border-b border-white/5 py-24 text-white">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          {/* Mission & Vision */}
          <div className="space-y-6">
            <Reveal y={15}>
              <div className="glass-card p-6 border-white/10 rounded-2xl">
                <span className="saas-badge bg-white/5 text-[#c5e32b] border-white/10">Our Mission</span>
                <p className="mt-4 text-sm leading-relaxed text-zinc-300 font-display">
                  To replace unstable, unoptimized visual platforms with fast, compiled headless systems and native apps that drive transactions.
                </p>
              </div>
            </Reveal>

            <Reveal y={15} delay={0.1}>
              <div className="glass-card p-6 border-white/10 rounded-2xl">
                <span className="saas-badge bg-white/5 text-[#c5e32b] border-white/10">Our Vision</span>
                <p className="mt-4 text-sm leading-relaxed text-zinc-300 font-display">
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
                invert={true}
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
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded border border-teal-900 bg-teal-950 text-teal-400 mt-1 font-mono text-xs">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-white text-sm font-display">{val.title}</h4>
                      <p className="mt-1 text-xs text-zinc-450 leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Why Clients Choose Us (Obsidian Green - Dark) */}
      <Section id="why-us" className="bg-[#061a17] py-24 border-b border-white/5">
        <Reveal y={15}>
          <SectionHeading
            align="center"
            eyebrow="Operational Strengths"
            title="Why businesses partner with Probey Services"
            description="Clear strategic justifications to align with our technical delivery teams."
            className="mb-16"
            invert={true}
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3 text-white">
          {[
            { icon: "code", title: "No Vendor Lock-in", desc: "We write standard, clean frameworks that are easy for internal teams to maintain and modify without software dependency leaks." },
            { icon: "zap", title: "Lighthouse Speed Focus", desc: "We target 90+ core speeds to improve search rankings, lower organic customer costs, and increase transaction checkouts." },
            { icon: "shield", title: "Certified Security Standard", desc: "We construct applications following strict keychain and transaction encryption parameters." }
          ].map((item, idx) => (
            <Reveal key={item.title} y={15} delay={idx * 0.08}>
              <div className="glass-card p-6 flex flex-col justify-between h-full border-white/10 rounded-2xl shadow-2xl neon-glow-lime">
                <div>
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-teal-950/40 text-teal-400 border border-teal-900/30 mb-5">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-bold text-white font-display">{item.title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-zinc-300">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 6. Global Presence (Obsidian Deep - Dark) */}
      <Section id="offices" className="bg-[#030f0d] pt-24 pb-48 border-b border-white/5">
        <Reveal y={15}>
          <SectionHeading
            align="center"
            eyebrow="Global Presence"
            title="Administrative centers"
            description="Administrative offices coordinating active developer timelines."
            className="mb-16"
            invert={true}
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-white">
          {offices.map((off, idx) => (
            <Reveal key={off.city} y={15} delay={idx * 0.06}>
              <div className="glass-card p-6 flex flex-col justify-between h-full border-white/10 rounded-2xl shadow-2xl neon-glow-teal">
                <div>
                  <span className="saas-badge rounded-md bg-white/5 text-teal-350 border-white/5">
                    {off.region} Region
                  </span>
                  <h3 className="mt-4 text-base font-bold text-white flex items-center gap-2 font-display">
                    <Icon name="pin" className="h-4 w-4 text-[#c5e32b]" />
                    {off.city} Office
                  </h3>
                  <p className="mt-2 text-xxs text-zinc-400 leading-relaxed font-semibold">
                    {off.role || "Technical Coordination & Operations Center"}
                  </p>
                </div>
                <div className="mt-6 border-t border-white/5 pt-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 font-display">Contact</p>
                  <p className="mt-1 text-xs text-[#c5e32b] font-mono">info@probeyservices.com</p>
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
