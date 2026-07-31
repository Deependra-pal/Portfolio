import { useState } from "react";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Icon from "../components/ui/Icon";
import Button from "../components/ui/Button";
import Reveal from "../components/motion/Reveal";
import FAQ from "../components/common/FAQ";
import { contact } from "../data/company";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const contactFaqs = [
    {
      question: "Is there a fee for initial discovery consultations?",
      answer: "No. All initial consultation and wireframe briefings are free of charge."
    },
    {
      question: "How fast will we receive a proposal after submitting details?",
      answer: "We deliver preliminary proposals and budget ranges within 2 to 3 business days."
    },
    {
      question: "Do you sign Non-Disclosure Agreements (NDAs)?",
      answer: "Yes. We routinely sign NDAs prior to reviewing system specifications or database schemas."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill out all required fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-[#080c16] text-slate-100 min-h-screen bg-grid-saas">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-40 border-b border-white/5 bg-[#080c16]">
        <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
          <div className="absolute left-1/3 top-10 h-80 w-80 rounded-full bg-brand-cyan/5 blur-[100px]" />
        </div>

        <Container className="relative py-16 sm:py-20 lg:py-24 text-center max-w-3xl">
          <Reveal y={10}>
            <span className="saas-badge">
              Get In Touch &bull; Contact Channels
            </span>
          </Reveal>

          <Reveal y={15} delay={0.15}>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl text-white font-display">
              Let's discuss <span className="gradient-saas-text">your project.</span>
            </h1>
          </Reveal>

          <Reveal y={15} delay={0.3}>
            <p className="mx-auto mt-6 text-base leading-relaxed text-slate-400">
              Technical consultation and discovery sessions. Get in touch with our engineering team directly or book a virtual meeting via Calendly.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 2. Form & Directory Split Layout */}
      <Section id="channels" className="bg-[#0c1322] border-b border-white/5 py-20 bg-dot-matrix">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Left Column: Form inside saas-card */}
          <Reveal y={15}>
            <div className="saas-card p-6 sm:p-8 lg:p-10 relative overflow-hidden">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-cyan/5 blur-2xl" />
              <h2 className="text-xl font-bold text-white sm:text-2xl font-display">Send a Message</h2>
              <p className="mt-2 text-xs text-slate-400">
                Our technical sales representatives reply within 24 hours.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-2xl border border-brand-emerald/20 bg-brand-emerald/5 p-6 text-sm text-brand-emerald leading-relaxed font-semibold">
                  Thank you. Your message has been received. Our team will contact you within 24 business hours.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  {error && (
                    <div className="rounded-xl border border-brand-rose/20 bg-brand-rose/5 p-4 text-xs text-brand-rose">
                      &bull; {error}
                    </div>
                  )}

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-400 font-display">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-brand-cyan/50 focus:outline-none"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-400 font-display">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-650 focus:border-brand-cyan/50 focus:outline-none"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-400 font-display">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-660 focus:border-brand-cyan/50 focus:outline-none"
                      placeholder="Technical scope, quote inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-400 font-display">
                      Message Details *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-670 focus:border-brand-cyan/50 focus:outline-none"
                      placeholder="Detail your system specifications, timeline targets..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full btn-saas-primary py-3.5 rounded-xl font-bold" icon="arrowRight">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Right Column: Direct Directory */}
          <div className="space-y-8">
            <Reveal y={15} delay={0.1}>
              <div className="saas-card p-6 sm:p-8 relative overflow-hidden">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-cyan/5 blur-2xl" />
                <h3 className="text-lg font-bold text-white font-display">Direct Communication</h3>
                <ul className="mt-6 space-y-4 text-xs sm:text-sm text-slate-350 font-semibold">
                  <li className="flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-cyan/10 text-brand-cyan shrink-0">
                      <Icon name="mail" className="h-4.5 w-4.5" />
                    </span>
                    <a href="mailto:info@probeyservices.com" className="hover:text-brand-cyan transition font-mono">
                      info@probeyservices.com
                    </a>
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-cyan/10 text-brand-cyan shrink-0">
                      <Icon name="phone" className="h-4.5 w-4.5" />
                    </span>
                    <span className="font-mono">
                      HQ Support: +91 120 313 2126
                    </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-cyan/10 text-brand-cyan shrink-0">
                      <Icon name="chat" className="h-4.5 w-4.5" />
                    </span>
                    <a href="https://wa.me/919773901990" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition font-mono">
                      WhatsApp: +91 97739 01990
                    </a>
                  </li>
                </ul>

                <p className="mt-6 text-xxs font-bold uppercase tracking-wider text-slate-500 font-display">
                  Operation Hours
                </p>
                <p className="mt-1 text-xs text-slate-300 font-semibold font-mono">
                  Mon &ndash; Fri | 09:30 AM &ndash; 06:30 PM (IST)
                </p>
              </div>
            </Reveal>

            {/* Address maps card */}
            <Reveal y={15} delay={0.2}>
              <div className="saas-card p-6 relative overflow-hidden">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-cyan/5 blur-2xl" />
                <h3 className="text-base font-bold text-white flex items-center gap-2 font-display">
                  <Icon name="pin" className="h-4.5 w-4.5 text-brand-cyan" />
                  Primary Office Address
                </h3>
                <p className="mt-2.5 text-xs text-slate-400 leading-relaxed font-semibold">
                  Sector 63, H-150, Noida, UP, India.
                </p>
              </div>
            </Reveal>

            {/* Additional office directory listings */}
            <Reveal y={15} delay={0.3}>
              <div className="saas-card p-6 relative overflow-hidden">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-cyan/5 blur-2xl" />
                <h3 className="text-xxs font-bold uppercase tracking-widest text-slate-500 font-display mb-4">
                  Global Administrative Offices
                </h3>
                <div className="space-y-3 text-xxs sm:text-xs text-slate-400 font-semibold font-mono">
                  <p>&bull; Toronto: 895 Don Mills Road, ON, Canada.</p>
                  <p>&bull; London: 32 London Bridge Street, UK.</p>
                  <p>&bull; Delaware: Wilmington, Delaware, USA.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* 3. Pre-sales FAQs */}
      <Section id="presales-faqs" className="bg-[#080c16] py-24 border-b border-white/5">
        <Reveal y={15}>
          <SectionHeading
            align="center"
            eyebrow="FAQs"
            title="Common Pre-sales Questions"
            description="Find answers to onboarding processes, initial wireframe pricing, and NDAs."
            className="mb-14"
            invert
          />
        </Reveal>
        <Reveal y={15} delay={0.15}>
          <FAQ faqs={contactFaqs} dark={true} />
        </Reveal>
      </Section>

      {/* 4. Scheduling CTA */}
      <section className="bg-slate-950 py-16 sm:py-20 relative overflow-hidden bg-dot-matrix">
        <Container className="text-center max-w-2xl">
          <Reveal y={15}>
            <h2 className="text-2xl font-bold text-white font-display">Direct Scheduling</h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-400 sm:text-sm">
              Skip the forms and book a 30-minute virtual briefing directly with our engineering coordinators.
            </p>
            <div className="mt-8">
              <Button as="a" href={contact.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-saas-primary px-8 py-3.5 rounded-full text-white font-bold shadow-lg">
                Open Calendly Booking
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
