import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { aboutDetails } from "../../data/company";

const AboutProcess = () => (
  <Section id="process" className="bg-white border-b border-slate-100">
    <SectionHeading
      align="center"
      eyebrow="Workflow"
      title="How we work together"
      description="Our engineering process aligns deliverables with milestones, keeping expectations clear at every step."
      className="mb-16"
    />

    <div className="relative mx-auto max-w-4xl">
      {/* Central visual line */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-indigo-100 sm:left-1/2 sm:-translate-x-1/2" aria-hidden="true" />

      <div className="space-y-12">
        {aboutDetails.developmentProcess.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={step.title} className="relative flex flex-col sm:flex-row sm:justify-between">
              {/* Step Circle */}
              <div className="absolute left-4 top-1 z-10 grid h-8 w-8 place-items-center rounded-full bg-indigo-600 font-bold text-xs text-white sm:left-1/2 sm:-translate-x-1/2">
                {step.step}
              </div>

              {/* Card placement */}
              <div className={`pl-12 sm:w-[45%] sm:pl-0 ${isEven ? "sm:order-1" : "sm:order-2"}`}>
                <Card className="border border-slate-200 bg-slate-50/[0.3] p-5 sm:p-6">
                  <h4 className="text-base font-bold text-slate-900 sm:text-lg">{step.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">{step.description}</p>
                </Card>
              </div>

              {/* Spacer on the alternate column */}
              <div className="hidden sm:block sm:w-[45%]" />
            </div>
          );
        })}
      </div>
    </div>
  </Section>
);

export default AboutProcess;
