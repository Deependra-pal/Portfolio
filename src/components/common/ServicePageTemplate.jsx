import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Icon from "../ui/Icon";
import FAQ from "./FAQ";
import { contact } from "../../data/company";

const ServicePageTemplate = ({ service }) => {
  if (!service) return null;

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 pt-20 text-white sm:pt-24 lg:pt-28">
        {/* Glowing backdrop vectors */}
        <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden="true">
          <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-[100px]" />
          <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cyan-500/15 blur-[100px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_60%)]" />
        </div>

        <Container className="relative py-20 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
              Services &bull; {service.title}
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              {service.subtitle || service.title}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              {service.description}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button as="a" href={contact.bookingUrl} target="_blank" rel="noopener noreferrer" size="lg" icon="calendar">
                Book a Free Discovery Call
              </Button>
              <Button as="a" href="/contact" variant="invert" size="lg" icon="arrowRight">
                Contact Our Team
              </Button>
            </div>
          </div>
        </Container>

        {/* Diagonal Section Transition */}
        <div className="h-16 bg-gradient-to-b from-transparent to-slate-50" aria-hidden="true" />
      </section>

      {/* 2. Service Overview Section */}
      <Section id="overview" className="bg-slate-50 border-b border-slate-100">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeading
            eyebrow="Overview"
            title="Smarter engineering for digital products"
            description="We prioritize technical excellence to build web and mobile interfaces that scale smoothly and deliver results."
          />
          <div className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm sm:p-9">
            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              {service.overview}
            </p>
          </div>
        </div>
      </Section>

      {/* 3. Key Features Section */}
      <Section id="features" className="bg-white">
        <SectionHeading
          align="center"
          eyebrow="Key Features"
          title="What we bring to the table"
          description="Crafted layouts, modular engineering patterns, and performance metrics built into every delivery."
          className="mb-14"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {service.features.map((feature) => (
            <Card key={feature.title} interactive className="flex gap-5 border border-slate-100 bg-slate-50/[0.3] p-6 hover:bg-white sm:p-8">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-indigo-600/10 text-indigo-600">
                <Icon name={feature.icon || "sparkles"} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 4. Development Process Timeline */}
      <Section id="process" className="bg-slate-50 border-y border-slate-100">
        <SectionHeading
          align="center"
          eyebrow="Process"
          title="Our development lifecycle"
          description="A structured, collaborative approach to take products from whiteboard concepts to live releases."
          className="mb-16"
        />

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical timeline center line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-indigo-100 sm:left-1/2 sm:-translate-x-1/2" aria-hidden="true" />

          <div className="space-y-12">
            {service.process.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.title} className="relative flex flex-col sm:flex-row sm:justify-between">
                  {/* Circle Indicator */}
                  <div className="absolute left-4 top-1.5 z-10 grid h-8.5 w-8.5 place-items-center rounded-full bg-indigo-600 font-bold text-xs text-white sm:left-1/2 sm:-translate-x-1/2">
                    {step.step}
                  </div>

                  {/* Spacer or Card (Left side) */}
                  <div className={`pl-12 sm:w-[45%] sm:pl-0 ${isEven ? "sm:order-1" : "sm:order-2"}`}>
                    <Card className="border border-slate-200 bg-white p-6 shadow-sm">
                      <h4 className="text-lg font-bold text-slate-900">{step.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                    </Card>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden sm:block sm:w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 5. Technologies Section */}
      <Section id="technologies" className="bg-white">
        <SectionHeading
          align="center"
          eyebrow="Stack"
          title="Technologies we utilize"
          description="We use modern, developer-approved toolsets to build applications with responsive layouts and fast indexing."
          className="mb-12"
        />
        <div className="flex flex-wrap justify-center gap-3">
          {service.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-indigo-300 hover:bg-indigo-50/50 hover:text-indigo-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </Section>

      {/* 6. Benefits & Why Choose Us Section */}
      <Section id="benefits" className="bg-slate-50 border-y border-slate-100">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Benefits"
              title="Real business advantages"
              description="Our codebases translate directly into structural gains for your operational processes."
            />
            <div className="mt-8 space-y-4">
              {service.benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-600 mt-1">
                    <Icon name="check" className="h-4.5 w-4.5" strokeWidth={3} />
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900">{benefit.title}</h4>
                    <p className="mt-1 text-sm text-slate-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Expertise"
              title="Why partner with us?"
              description="A track record of shipping custom platforms rather than basic templated configurations."
            />
            <div className="mt-8 space-y-5">
              {service.whyChooseUs.map((point) => (
                <Card key={point.title} className="border border-slate-200/60 bg-white p-5 shadow-sm">
                  <h4 className="font-bold text-slate-900">{point.title}</h4>
                  <p className="mt-1.5 text-sm text-slate-600">{point.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 7. FAQ Section */}
      <Section id="faq" className="bg-white">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Find answers to common operational questions regarding our delivery scopes."
          className="mb-14"
        />
        <FAQ faqs={service.faqs} />
      </Section>

      {/* 8. CTA Section */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 to-violet-950 px-8 py-12 text-center text-white sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-xl" />
            </div>
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                Ready to accelerate your {service.title.toLowerCase()} project?
              </h2>
              <p className="mt-4 text-sm text-indigo-200 sm:text-base">
                Book a brief consultation with our technical team to discuss implementation strategies.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button as="a" href={contact.bookingUrl} target="_blank" rel="noopener noreferrer" variant="ghost" className="border-transparent bg-white text-indigo-900 hover:bg-slate-50">
                  Schedule Call
                  <Icon name="calendar" className="h-4 w-4" strokeWidth={2} />
                </Button>
                <Button as="a" href="/contact" variant="invert" icon="arrowRight">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ServicePageTemplate;
