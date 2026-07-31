import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Icon from "../ui/Icon";
import { aboutDetails } from "../../data/company";

const WhatWeDo = () => (
  <Section id="expertise" className="bg-slate-50 border-y border-slate-100">
    <SectionHeading
      align="center"
      eyebrow="Our Expertise"
      title="Advanced capabilities across channels"
      description="We bring high-end engineering practices and growth analytics to modern software teams."
      className="mb-14"
    />

    <div className="grid gap-6 sm:grid-cols-2">
      {aboutDetails.expertise.map((exp, idx) => {
        // Choose appropriate icon based on index
        let iconName = "sparkles";
        if (idx === 0) iconName = "globe";
        else if (idx === 1) iconName = "phone";
        else if (idx === 2) iconName = "megaphone";

        return (
          <Card
            key={exp.title}
            interactive
            className="flex gap-5 border border-slate-200 bg-white p-6 sm:p-8"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-indigo-600/10 text-indigo-600">
              <Icon name={iconName} className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-slate-900 leading-tight">
                {exp.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                {exp.description}
              </p>
            </div>
          </Card>
        );
      })}
    </div>
  </Section>
);

export default WhatWeDo;
