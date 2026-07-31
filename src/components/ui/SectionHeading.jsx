const alignment = {
  left: "items-start text-left",
  center: "mx-auto items-center text-center",
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  invert = true,
  className = "",
}) => (
  <div
    className={`flex max-w-3xl flex-col gap-4 ${alignment[align]} ${className}`}
  >
    {eyebrow && (
      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#2563eb] font-mono">
        <span className="h-px w-6 bg-zinc-800" aria-hidden="true" />
        {eyebrow}
      </span>
    )}
    {title && (
      <h2
        className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-white font-display"
      >
        {title}
      </h2>
    )}
    {description && (
      <p
        className="text-sm leading-relaxed text-zinc-400 sm:text-base font-semibold"
      >
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
