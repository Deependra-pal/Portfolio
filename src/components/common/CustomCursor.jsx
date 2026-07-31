import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      if (cursorRef.current && ringRef.current) {
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        ringRef.current.style.transform = `translate3d(${x - 16}px, ${y - 16}px, 0)`;
      }
      setIsHidden(false);
    };

    const onMouseLeave = () => setIsHidden(true);
    const onMouseEnter = () => setIsHidden(false);

    const onMouseOver = (e) => {
      const target = e.target;
      const isHoverable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer") ||
        target.closest(".hover-trigger");
      setIsHovering(!!isHoverable);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Tiny solid dot follower */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c5e32b] transition-transform duration-[0.05s] ease-out mix-blend-difference hidden md:block"
      />
      {/* Outer halo circle */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 rounded-full border border-white/20 transition-all duration-[0.15s] ease-out hidden md:block ${
          isHovering ? "scale-150 bg-white/5 border-[#c5e32b]/40" : "scale-100"
        }`}
      />
    </>
  );
};

export default CustomCursor;
