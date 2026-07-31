import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Icon from "./Icon";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60 font-display group relative overflow-hidden";

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
  magnetic = true,
  children,
  ...rest
}) => {
  const btnRef = useRef(null);
  const iconRef = useRef(null);
  const Tag = as;

  useEffect(() => {
    if (!magnetic || !btnRef.current) return;
    const btn = btnRef.current;
    const iconEl = iconRef.current;

    const handleMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) * 0.3;
      const y = (e.clientY - (rect.top + rect.height / 2)) * 0.3;

      gsap.to(btn, {
        x: x,
        y: y,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });

      if (iconEl) {
        gsap.to(iconEl, {
          x: 3,
          y: -2,
          duration: 0.25,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1.1, 0.4)",
        overwrite: "auto",
      });

      if (iconEl) {
        gsap.to(iconEl, {
          x: 0,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
      gsap.set(btn, { x: 0, y: 0 });
    };
  }, [magnetic]);

  // Clean custom class detection
  const isCustomClass = className.includes("btn-saas-primary") || className.includes("btn-saas-secondary");
  const computedClasses = isCustomClass 
    ? `${base} ${sizes[size]} ${className}`
    : `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  return (
    <Tag
      ref={btnRef}
      className={computedClasses}
      {...rest}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <span ref={iconRef} className="inline-block transition-transform duration-200">
            <Icon name={icon} className="h-4.5 w-4.5 shrink-0" strokeWidth={2} />
          </span>
        )}
      </span>
    </Tag>
  );
};

export default Button;
