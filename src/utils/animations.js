import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);

/**
 * Staggers animations for group items (e.g. grids of cards, pills, text items).
 * Leverages GPU-friendly transforms and opacities (avoiding reflow adjustments).
 */
export const animateStaggeredReveal = (elements, options = {}) => {
  const {
    y = 30,
    x = 0,
    scale = 1,
    duration = 0.8,
    stagger = 0.08,
    delay = 0,
    ease = "power3.out",
    start = "top 85%",
    trigger,
  } = options;

  if (!elements || elements.length === 0) return null;

  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: y,
      x: x,
      scale: scale,
    },
    {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration: duration,
      stagger: stagger,
      delay: delay,
      ease: ease,
      scrollTrigger: {
        trigger: trigger || elements[0],
        start: start,
        toggleActions: "play none none none",
      },
    }
  );
};

/**
 * Magnetic button transformation. Eases position changes smoothly without screen snaps.
 */
export const applyMagneticHover = (element, targetX, targetY, duration = 0.3) => {
  if (!element) return;
  gsap.to(element, {
    x: targetX,
    y: targetY,
    duration: duration,
    ease: "power2.out",
    overwrite: "auto",
  });
};

/**
 * Resets a magnetic hover element back to its initial center.
 */
export const resetMagneticHover = (element, duration = 0.5) => {
  if (!element) return;
  gsap.to(element, {
    x: 0,
    y: 0,
    duration: duration,
    ease: "elastic.out(1.2, 0.4)",
    overwrite: "auto",
  });
};
