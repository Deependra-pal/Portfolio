import TextReveal from "../motion/TextReveal";
import Reveal from "../motion/Reveal";

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
      <Reveal y={10} duration={0.5}>
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#c5e32b] font-mono">
          <span className="h-px w-6 bg-current/30" aria-hidden="true" />
          {eyebrow}
        </span>
      </Reveal>
    )}
    {title && (
      <TextReveal
        as="h2"
        text={title}
        type="words"
        stagger={0.05}
        duration={0.7}
        className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-white font-display"
      />
    )}
    {description && (
      <Reveal y={15} delay={0.15} duration={0.6}>
        <p className="text-sm leading-relaxed text-zinc-400 sm:text-base font-semibold">
          {description}
        </p>
      </Reveal>
    )}
  </div>
);

export default SectionHeading;
