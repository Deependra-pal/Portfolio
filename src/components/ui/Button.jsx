import Icon from "./Icon";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60 font-display";

const sizes = {
  md: "px-5 py-2.5",
  lg: "px-7 py-3.5 text-xs",
};

const variants = {
  primary: "bg-[#2563eb] text-white hover:bg-[#1d4ed8] shadow-sm",
  ghost: "border border-zinc-800 bg-transparent text-white hover:bg-zinc-900",
  invert: "border border-zinc-800 bg-zinc-950 text-white hover:bg-zinc-900",
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
  
  // Clean custom class detection
  const isCustomClass = className.includes("btn-saas-primary") || className.includes("btn-saas-secondary");
  const computedClasses = isCustomClass 
    ? `${base} ${sizes[size]} ${className}`
    : `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  return (
    <Tag
      className={computedClasses}
      {...rest}
    >
      {children}
      {icon && <Icon name={icon} className="h-4.5 w-4.5 shrink-0" strokeWidth={2} />}
    </Tag>
  );
};

export default Button;
