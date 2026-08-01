/**
 * PageTransition.jsx — Lightweight page transition wrapper.
 * Ensures page content is ALWAYS visible (opacity: 1) by default,
 * while executing a subtle fade-in on route changes.
 */
import { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0.85 },
      { opacity: 1, duration: 0.25, ease: 'power2.out' }
    );
  }, [location.pathname]);

  return (
    <div ref={containerRef} className="w-full">
      {children}
    </div>
  );
};

export default PageTransition;
