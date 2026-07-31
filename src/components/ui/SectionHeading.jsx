const alignment = {
  left: "items-start text-left",
  center: "mx-auto items-center text-center",
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
  className = "",
}) => (
  <div
    className={`flex max-w-2xl flex-col gap-4 ${alignment[align]} ${className}`}
  >
    {eyebrow && (
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
        <span className="h-px w-6 bg-indigo-400" aria-hidden="true" />
        {eyebrow}
      </span>
    )}
    {title && (
      <h2
        className={`text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.6rem] ${
          invert ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
    )}
    {description && (
      <p
        className={`text-base leading-relaxed sm:text-lg ${
          invert ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
