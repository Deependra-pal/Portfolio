import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Icon from "../ui/Icon";
import { company, aboutDetails } from "../../data/company";

const MissionVision = () => (
  <Section id="who-we-are" className="bg-white scroll-mt-20">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
      {/* Left Column: Who We Are & Why Choose Us */}
      <div>
        <SectionHeading
          eyebrow="Who We Are"
          title="A partner in your digital transformation"
          description="We guide companies through technical strategy and design execution, delivering responsive platforms and data campaigns."
        />
        <p className="mt-6 text-slate-600 leading-relaxed text-sm sm:text-base">
          {aboutDetails.whoWeAre}
        </p>

        {/* Why Clients Choose Us */}
        <div className="mt-10">
          <h4 className="text-lg font-bold text-slate-900 mb-5">Why Clients Partner With Us</h4>
          <div className="space-y-4">
            {aboutDetails.whyChooseUs.map((point) => (
              <div key={point.title} className="flex gap-4">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-indigo-50 text-indigo-600 mt-0.5">
                  <Icon name="check" className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <div>
                  <h5 className="font-bold text-slate-800 text-sm sm:text-base">{point.title}</h5>
                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Mission & Vision */}
      <div className="grid gap-6">
        <Card className="border border-slate-200 bg-slate-50/50 p-6 sm:p-8">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/10">
            <Icon name="target" className="h-6 w-6" />
          </span>
          <h3 className="mt-6 text-xl font-bold text-slate-900">Our Mission</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            {company.mission}
          </p>
        </Card>

        <Card className="border border-slate-200 bg-slate-50/50 p-6 sm:p-8">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/10">
            <Icon name="sparkles" className="h-6 w-6" />
          </span>
          <h3 className="mt-6 text-xl font-bold text-slate-900">Our Vision</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            {company.vision}
          </p>
        </Card>
      </div>
    </div>
  </Section>
);

export default MissionVision;
