import Container from "../ui/Container";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { company, contact } from "../../data/company";

const CtaSection = () => (
  <section data-animate="section" className="bg-white py-20 sm:py-24">
    <Container>
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-700 px-8 py-14 text-center sm:px-12 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
        >
          <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">
            {company.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {company.tagline}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-indigo-100 sm:text-lg">
            {company.supportStatement}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              as="a"
              href={contact.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="ghost"
              className="border-transparent bg-white text-indigo-700 hover:bg-indigo-50"
            >
              Book a Discovery Call
              <Icon name="calendar" className="h-4 w-4" strokeWidth={2} />
            </Button>
            <Button
              as="a"
              href="/contact"
              size="lg"
              variant="invert"
              icon="arrowRight"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default CtaSection;
