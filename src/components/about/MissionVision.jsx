import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/Icon";
import { company } from "../../data/company";

const isTodo = (value) =>
  typeof value === "string" && value.startsWith("TODO");

const PillarCard = ({ icon, label, value }) => (
  <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white p-8">
    <span className="grid h-12 w-12 place-items-center rounded-xl bg-indigo-600/10 text-indigo-600">
      <Icon name={icon} className="h-6 w-6" />
    </span>
    <h3 className="mt-6 text-xl font-semibold text-slate-900">{label}</h3>
    {isTodo(value) ? (
      <p className="mt-3 rounded-lg border border-dashed border-amber-300 bg-amber-50 p-3 text-sm font-medium text-amber-700">
        {value}
      </p>
    ) : (
      <p className="mt-3 leading-relaxed text-slate-600">{value}</p>
    )}
  </div>
);

const MissionVision = () => (
  <Section id="mission" className="bg-white">
    <SectionHeading
      eyebrow="Who We Are"
      title="Driven by purpose, delivered with commitment"
      description="A software and digital services company partnering with organizations to design, build, and grow their digital presence."
    />

    <div className="mt-12 grid gap-6 md:grid-cols-2">
      <PillarCard icon="target" label="Our Mission" value={company.mission} />
      <PillarCard icon="sparkles" label="Our Vision" value={company.vision} />
    </div>
  </Section>
);

export default MissionVision;
