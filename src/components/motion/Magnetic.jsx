/**
 * Magnetic.jsx — Awwwards-style magnetic hover wrapper.
 * Smoothly pulls the child element towards the mouse cursor on hover
 * and returns with an elastic physics curve on mouse leave.
 *
 * PERFORMANCE:
 * - Uses transform x/y only (GPU accelerated, zero layout reflow).
 * - gsap.to with overwrite: 'auto' prevents timeline conflicts.
 */
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Magnetic = ({ children, strength = 0.35, className = '', disabled = false }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (disabled || !containerRef.current) return;
    const el = containerRef.current;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const moveX = (e.clientX - centerX) * strength;
      const moveY = (e.clientY - centerY) * strength;

      gsap.to(el, {
        x: moveX,
        y: moveY,
        duration: 0.3,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'elastic.out(1.1, 0.4)',
        overwrite: 'auto',
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      gsap.set(el, { x: 0, y: 0 });
    };
  }, [strength, disabled]);

  return (
    <div ref={containerRef} className={`inline-block ${className}`}>
      {children}
    </div>
  );
};

export default Magnetic;
