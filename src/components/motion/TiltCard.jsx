/**
 * TiltCard.jsx — 3D interactive card tilt effect.
 * Calculates cursor position relative to card center and applies 3D perspective rotation.
 *
 * PERFORMANCE:
 * - Operates purely on `transform: perspective(1000px) rotateX(...) rotateY(...)`.
 * - Zero layout thrashing, 60 FPS compositor execution.
 */
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const TiltCard = ({
  children,
  className = '',
  maxTilt = 12, // Maximum rotation degrees
  scale = 1.02,
  perspective = 1000,
  glare = true,
}) => {
  const cardRef = useRef(null);
  const glareRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        scale: scale,
        transformPerspective: perspective,
        duration: 0.4,
        ease: 'power2.out',
        overwrite: 'auto',
      });

      if (glare && glareRef.current) {
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        gsap.to(glareRef.current, {
          opacity: 0.15,
          background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
          duration: 0.2,
          overwrite: 'auto',
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.6,
        ease: 'power3.out',
        overwrite: 'auto',
      });

      if (glare && glareRef.current) {
        gsap.to(glareRef.current, {
          opacity: 0,
          duration: 0.4,
          overwrite: 'auto',
        });
      }
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxTilt, scale, perspective, glare]);

  return (
    <div
      ref={cardRef}
      className={`relative transform-gpu ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
      {glare && (
        <div
          ref={glareRef}
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 z-10"
        />
      )}
    </div>
  );
};

export default TiltCard;
