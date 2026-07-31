import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/Icon";
import { values } from "../../data/company";

const OurApproach = () => (
  <Section id="approach" className="bg-slate-50">
    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
      <SectionHeading
        eyebrow="Our Approach"
        title="How we turn collaboration into results"
        description="Every engagement is built on the same foundation — the principles that guide how we work with the teams we serve."
      />

      <div className="grid gap-5 sm:grid-cols-1">
        {values.map((value, index) => (
          <div
            key={value.title}
            data-animate="card"
            className="flex gap-5 rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7"
          >
            <div className="flex flex-col items-center">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-indigo-600 text-white">
                <Icon name={value.icon} className="h-6 w-6" strokeWidth={1.7} />
              </span>
              <span className="mt-3 text-xs font-semibold text-slate-300">
                0{index + 1}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                {value.title}
              </h3>
              <p className="mt-2 leading-relaxed text-slate-600">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default OurApproach;
