/**
 * ParallaxImage.jsx — Mask reveal + parallax scroll image container.
 * Performs a clip-path mask reveal on viewport enter and smooth subtle parallax on scroll.
 */
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ParallaxImage = ({
  src,
  alt = '',
  className = '',
  imgClassName = '',
  parallaxSpeed = -12, // percentage y-translation
  mask = true,
  loading = 'lazy',
}) => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img) return;

    const ctx = gsap.context(() => {
      // 1. Mask reveal
      if (mask) {
        gsap.fromTo(
          container,
          { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', opacity: 0 },
          {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            opacity: 1,
            duration: 1.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // 2. Parallax movement
      if (parallaxSpeed !== 0) {
        gsap.fromTo(
          img,
          { yPercent: -Math.abs(parallaxSpeed) / 2 },
          {
            yPercent: Math.abs(parallaxSpeed) / 2,
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.2,
            },
          }
        );
      }
    }, container);

    return () => ctx.revert();
  }, [parallaxSpeed, mask]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={loading}
        className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 will-change-transform ${imgClassName}`}
      />
    </div>
  );
};

export default ParallaxImage;
