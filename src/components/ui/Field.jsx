// Accessible form field: renders a label bound to an input or textarea.
const Field = ({
  as = "input",
  id,
  label,
  required = false,
  className = "",
  ...rest
}) => {
  const Control = as === "textarea" ? "textarea" : "input";
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        htmlFor={id}
        className="text-sm font-medium text-slate-700"
      >
        {label}
        {required && (
          <span className="ml-0.5 text-indigo-600" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <Control
        id={id}
        name={id}
        required={required}
        aria-required={required || undefined}
        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
        {...rest}
      />
    </div>
  );
};

export default Field;
