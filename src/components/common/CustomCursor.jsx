import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  
  // Mutable coordinates to avoid React re-renders
  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);

  useEffect(() => {
    // Hide mouse cursor on mobile screens
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    // Direct GPU property quick setters for high FPS translation
    const setCursorX = gsap.quickSetter(cursor, "x", "px");
    const setCursorY = gsap.quickSetter(cursor, "y", "px");
    const setRingX = gsap.quickSetter(ring, "x", "px");
    const setRingY = gsap.quickSetter(ring, "y", "px");

    // Track mouse coordinates
    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      
      // Make cursor visible on first move
      if (cursor.style.opacity === "" || cursor.style.opacity === "0") {
        cursor.style.opacity = "1";
        ring.style.opacity = "1";
      }
    };

    // Track hover elements with direct styling overrides (No React renders)
    const onMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const isHoverable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer") ||
        target.closest(".hover-trigger");

      if (isHoverable) {
        if (!isHovering.current) {
          isHovering.current = true;
          gsap.to(ring, {
            scale: 1.5,
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderColor: "rgba(197, 227, 43, 0.4)",
            duration: 0.2,
            overwrite: "auto",
          });
          gsap.to(cursor, {
            scale: 0.5,
            duration: 0.2,
            overwrite: "auto",
          });
        }
      } else {
        if (isHovering.current) {
          isHovering.current = false;
          gsap.to(ring, {
            scale: 1,
            backgroundColor: "transparent",
            borderColor: "rgba(255, 255, 255, 0.2)",
            duration: 0.2,
            overwrite: "auto",
          });
          gsap.to(cursor, {
            scale: 1,
            duration: 0.2,
            overwrite: "auto",
          });
        }
      }
    };

    // Handle mouse leaving/entering window viewport
    const onMouseLeave = () => {
      cursor.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onMouseEnter = () => {
      cursor.style.opacity = "1";
      ring.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // High performance ticker frame loop (runs at refresh rate)
    const tick = () => {
      const targetX = mouse.current.x;
      const targetY = mouse.current.y;

      // Update dot instantly
      setCursorX(targetX);
      setCursorY(targetY);

      // Trailing lag interpolation (lerp) for the ring
      const dt = 0.15;
      ringPos.current.x += (targetX - 16 - ringPos.current.x) * dt;
      ringPos.current.y += (targetY - 16 - ringPos.current.y) * dt;

      setRingX(ringPos.current.x);
      setRingY(ringPos.current.y);
    };

    gsap.ticker.add(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      gsap.ticker.remove(tick);
    };
  }, []);

  return (
    <>
      {/* Tiny solid dot follower */}
      <div
        ref={cursorRef}
        style={{ opacity: 0 }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-[#c5e32b] mix-blend-difference hidden md:block"
      />
      {/* Outer halo circle */}
      <div
        ref={ringRef}
        style={{ opacity: 0 }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 rounded-full border border-white/20 hidden md:block"
      />
    </>
  );
};

export default CustomCursor;
