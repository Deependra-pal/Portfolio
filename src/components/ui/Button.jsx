import Icon from "./Icon";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-60";

const sizes = {
  md: "px-6 py-3",
  lg: "px-7 py-3.5 text-base",
};

const variants = {
  primary:
    "bg-indigo-600 text-white shadow-lg shadow-indigo-600/25 hover:bg-indigo-500 hover:shadow-indigo-500/30 hover:-translate-y-0.5",
  ghost:
    "border border-slate-300 bg-white/60 text-slate-800 hover:border-slate-400 hover:bg-white",
  invert:
    "border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20",
};

const Button = ({
  as = "button",
  variant = "primary",
  size = "md",
  icon,
  className = "",
  children,
  ...rest
}) => {
  const Tag = as;
  return (
    <Tag
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
      {icon && <Icon name={icon} className="h-4 w-4" strokeWidth={2} />}
    </Tag>
  );
};

export default Button;
