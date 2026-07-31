/**
 * PageTransition.jsx — Cinematic route transition.
 * Plays a fast curtain overlay wipe / fade when switching pages.
 *
 * PERFORMANCE:
 * - 0.35s duration — instantaneous feel, zero navigation lag.
 * - Animates scaleY / opacity on a fixed z-index curtain.
 */
import { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const containerRef = useRef(null);
  const curtainRef = useRef(null);

  useLayoutEffect(() => {
    const curtain = curtainRef.current;
    const content = containerRef.current;
    if (!curtain || !content) return;

    // Fast entrance reveal on route change
    const tl = gsap.timeline();

    tl.fromTo(
      curtain,
      { scaleY: 1, transformOrigin: 'top' },
      {
        scaleY: 0,
        duration: 0.38,
        ease: 'power3.inOut',
      }
    ).fromTo(
      content,
      { opacity: 0, y: 12 },
      {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: 'power2.out',
      },
      '-=0.2'
    );

    return () => {
      tl.kill();
    };
  }, [location.pathname]);

  return (
    <>
      {/* Top transition curtain */}
      <div
        ref={curtainRef}
        className="fixed inset-0 z-[99999] pointer-events-none bg-[#030f0d] origin-top will-change-transform"
        style={{ transform: 'scaleY(0)' }}
      />
      <div ref={containerRef} className="w-full">
        {children}
      </div>
    </>
  );
};

export default PageTransition;
