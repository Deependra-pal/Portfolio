import Icon from "../ui/Icon";
import { offices } from "../../data/company";

// Visual placeholder for the office map. Swap the inner block for a real
// embed (e.g. Google Maps iframe) once the location coordinates are confirmed.
const MapPlaceholder = () => (
  <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100">
    <div className="grid h-72 place-items-center bg-[linear-gradient(135deg,#eef2ff_0%,#f8fafc_50%,#ecfeff_100%)] sm:h-full sm:min-h-[420px]">
      {/* faux map grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative flex flex-col items-center gap-3 px-6 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/30">
          <Icon name="pin" className="h-7 w-7" />
        </span>
        <p className="text-sm font-semibold text-slate-700">
          {offices[0].city} &middot; {offices[0].lines.join(", ")}
        </p>
        <span className="rounded-md bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
          TODO: Embed interactive map
        </span>
      </div>
    </div>
  </div>
);

export default MapPlaceholder;
