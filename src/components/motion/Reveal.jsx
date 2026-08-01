/**
 * Reveal.jsx — Scroll-triggered entrance animation wrapper.
 *
 * PERFORMANCE NOTES:
 * - prefersReducedMotion is read synchronously (no useState → no extra render
 *   per Reveal instance on mount). The About page alone has 20+ Reveals,
 *   meaning the old hook was triggering 20+ unnecessary extra renders on load.
 * - Empty deps array [] is correct: delay/duration/y are primitives captured
 *   in the closure at mount time. Animating these changing at runtime is not
 *   a supported use-case and was causing stale animation recreation.
 * - useLayoutEffect is correct here (synchronous before paint) so elements
 *   start invisible before first paint — prevents FOUC.
 * - autoAlpha is GSAP's preferred opacity property: it also manages
 *   visibility:hidden so the element is removed from tab order when hidden.
 * - gsap.registerPlugin removed — registered once in main.jsx.
 */
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Read reduced motion preference synchronously — no state, no re-render.
// Runs once at module load, which is exactly what we want.
const prefersReducedMotion =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

const Reveal = ({
  children,
  delay = 0,
  duration = 0.6,
  y = 15,
  className = '',
}) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion || !ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration,
          delay,
          ease: 'power2.out',
          clearProps: 'opacity,visibility,transform',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 95%',
            once: true,
          },
        }
      );
    }, ref);


    return () => ctx.revert();
  }, []); // [] is intentional — see notes above

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default Reveal;
