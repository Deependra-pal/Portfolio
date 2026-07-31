/**
 * AnimatedCounter.jsx — Smooth GSAP numerical counter.
 * Animates numbers when scrolled into view.
 * Handles strings like "99.9%", "300ms", "9", "$2.4M", "100+".
 *
 * PERFORMANCE:
 * - Direct textContent update via ref (no React state updates / re-renders during count animation).
 */
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedCounter = ({
  value, // e.g. "99.9%", "300ms", "9", "$2.4M"
  duration = 1.5,
  ease = 'power2.out',
  className = '',
}) => {
  const spanRef = useRef(null);

  useLayoutEffect(() => {
    const el = spanRef.current;
    if (!el || value === undefined || value === null) return;

    const strVal = String(value);

    // Extract numeric portion and prefix/suffix
    const match = strVal.match(/^([^0-9.]*)([0-9.]+)(.*)$/);
    if (!match) {
      el.textContent = strVal;
      return;
    }

    const [, prefix, numStr, suffix] = match;
    const targetNum = parseFloat(numStr);
    const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;

    const obj = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: targetNum,
        duration: duration,
        ease: ease,
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          once: true,
        },
        onUpdate: () => {
          if (el) {
            el.textContent = `${prefix}${obj.val.toFixed(decimals)}${suffix}`;
          }
        },
      });
    }, el);

    return () => ctx.revert();
  }, [value, duration, ease]);

  return (
    <span ref={spanRef} className={`font-mono will-change-contents ${className}`}>
      {value}
    </span>
  );
};

export default AnimatedCounter;
