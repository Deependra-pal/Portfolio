// Generic surface card. `interactive` adds a subtle hover lift for grids.
const Card = ({
  as: Tag = "div",
  interactive = false,
  className = "",
  children,
  ...rest
}) => (
  <Tag
    className={`rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8 ${
      interactive
        ? "transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50"
        : ""
    } ${className}`}
    {...rest}
  >
    {children}
  </Tag>
);

export default Card;
