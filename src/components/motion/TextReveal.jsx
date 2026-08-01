/**
 * TextReveal.jsx — Cinematic text reveal component.
 * Supports creative variants: 'skew' | 'blur' | 'perspective' | 'mask'.
 *
 * PERFORMANCE:
 * - Operates inside overflow-hidden wrappers on compositor thread.
 * - Clears props after animation completes to guarantee 100% visible text.
 */
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const prefersReducedMotion =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

const TextReveal = ({
  text,
  as: Tag = 'h2',
  type = 'words', // 'words' | 'chars'
  variant = 'skew', // 'skew' | 'blur' | 'perspective' | 'mask'
  delay = 0,
  duration = 0.8,
  stagger = 0.04,
  ease = 'power3.out',
  className = '',
  triggerStart = 'top 95%',
  ...props
}) => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion || !containerRef.current || !text) return;

    const items = containerRef.current.querySelectorAll('.reveal-unit');
    if (!items || items.length === 0) return;

    const getInitialVars = () => {
      switch (variant) {
        case 'skew':
          return { y: '100%', skewY: 4, opacity: 0 };
        case 'blur':
          return { y: 15, filter: 'blur(8px)', opacity: 0 };
        case 'perspective':
          return { y: 25, rotateX: -35, opacity: 0, transformPerspective: 800 };
        case 'mask':
        default:
          return { y: '100%', opacity: 0 };
      }
    };

    const getFinalVars = () => {
      switch (variant) {
        case 'skew':
          return { y: '0%', skewY: 0, opacity: 1, clearProps: 'transform,opacity' };
        case 'blur':
          return { y: 0, filter: 'blur(0px)', opacity: 1, clearProps: 'transform,filter,opacity' };
        case 'perspective':
          return { y: 0, rotateX: 0, opacity: 1, clearProps: 'transform,opacity' };
        case 'mask':
        default:
          return { y: '0%', opacity: 1, clearProps: 'transform,opacity' };
      }
    };

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        getInitialVars(),
        {
          ...getFinalVars(),
          duration: duration,
          delay: delay,
          stagger: stagger,
          ease: ease,
          scrollTrigger: {
            trigger: containerRef.current,
            start: triggerStart,
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [text, type, variant, delay, duration, stagger, ease, triggerStart]);

  if (typeof text !== 'string') {
    return <Tag className={className} {...props}>{text}</Tag>;
  }

  if (type === 'chars') {
    const chars = text.split('');
    return (
      <Tag ref={containerRef} className={`${className} inline-flex flex-wrap`} {...props}>
        {chars.map((char, index) => (
          <span key={index} className="inline-block overflow-hidden py-0.5">
            <span className="reveal-unit inline-block will-change-transform">
              {char === ' ' ? '\u00A0' : char}
            </span>
          </span>
        ))}
      </Tag>
    );
  }

  const words = text.split(' ');
  return (
    <Tag ref={containerRef} className={`${className} flex flex-wrap gap-x-[0.28em] gap-y-[0.1em]`} {...props}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden py-0.5">
          <span className="reveal-unit inline-block will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
};

export default TextReveal;
