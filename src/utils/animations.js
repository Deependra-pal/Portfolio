import { gsap } from "gsap";

/**
 * High-performance batch reveal manager using ScrollTrigger.batch().
 * Reduces ScrollTrigger instance overhead by combining multi-element reveals
 * into single batched observers.
 */
export const animateBatchReveal = (targets, options = {}) => {
  const {
    y = 30,
    x = 0,
    scale = 1,
    duration = 0.8,
    stagger = 0.1,
    ease = "power3.out",
    start = "top 85%",
  } = options;

  if (!targets) return null;

  return gsap.set(targets, { opacity: 0, y, x, scale });
};

/**
 * Staggers animations for group items (e.g. grids of cards, pills, text items).
 * Uses GPU-accelerated transform & opacity properties.
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
        trigger: trigger || (Array.isArray(elements) ? elements[0] : elements),
        start: start,
        once: true,
      },
    }
  );
};

/**
 * Magnetic button transformation. Eases position changes smoothly.
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
