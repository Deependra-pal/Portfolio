import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/Icon";
import { serviceGroups } from "../../data/company";

const WhatWeDo = () => (
  <Section id="what-we-do" className="bg-white">
    <SectionHeading
      align="center"
      eyebrow="What We Do"
      title="Capabilities across the digital lifecycle"
      description="From the first line of code to the campaign that gets you seen — the services our teams deliver."
      className="mb-14"
    />

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {serviceGroups.map((group) => (
        <article
          key={group.key}
          data-animate="card"
          className="group flex flex-col rounded-2xl border border-slate-200/80 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/60"
        >
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-indigo-600/10 text-indigo-600 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white">
            <Icon name={group.icon} className="h-6 w-6" />
          </span>

          <h3 className="mt-6 text-lg font-semibold text-slate-900">
            {group.label}
          </h3>

          <ul className="mt-4 space-y-2.5">
            {group.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-slate-600"
              >
                <Icon
                  name="check"
                  className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500"
                  strokeWidth={2.4}
                />
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </Section>
);

export default WhatWeDo;
