import Container from "../ui/Container";
import { stats } from "../../data/company";

// Numbers not published on the current site render as a visible TODO badge
// rather than fabricated figures.
const StatValue = ({ value }) =>
  value === "TODO" ? (
    <span className="rounded-md bg-amber-100 px-2 py-1 text-sm font-semibold text-amber-700">
      TODO
    </span>
  ) : (
    <span className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
      {value}
    </span>
  );

const StatsStrip = () => (
  <section data-animate="section" className="border-b border-slate-100 bg-white">
    <Container className="grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center text-center">
          <StatValue value={stat.value} />
          <p className="mt-2 text-sm font-medium text-slate-500">{stat.label}</p>
        </div>
      ))}
    </Container>
  </section>
);

export default StatsStrip;
