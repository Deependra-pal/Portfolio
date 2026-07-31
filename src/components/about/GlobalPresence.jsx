import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/Icon";
import { company, offices } from "../../data/company";

const GlobalPresence = () => (
  <Section id="presence" className="bg-slate-950 text-white">
    <div
      className="pointer-events-none absolute inset-0 opacity-60"
      aria-hidden="true"
    >
      <div className="absolute left-1/3 top-0 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
    </div>

    <div className="relative">
      <SectionHeading
        align="center"
        invert
        eyebrow={company.presence.eyebrow}
        title={company.presence.title}
        description="Local teams, one standard of quality — wherever your business operates."
        className="mb-14"
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {offices.map((office) => (
          <div
            key={office.city}
            data-animate="card"
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-indigo-400/40 hover:bg-white/[0.07]"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">{office.city}</h3>
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-indigo-300">
                <Icon name="pin" className="h-5 w-5" />
              </span>
            </div>
            <span className="mt-1 inline-block text-xs font-medium uppercase tracking-wider text-indigo-300/80">
              {office.region}
            </span>
            <address className="mt-4 space-y-0.5 text-sm not-italic leading-relaxed text-slate-400">
              {office.lines.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </address>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default GlobalPresence;
