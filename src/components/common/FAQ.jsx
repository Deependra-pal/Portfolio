/**
 * FAQ.jsx — Buttery-smooth GSAP accordion with zero layout snaps or section jumps.
 *
 * PERFORMANCE:
 * - GSAP animates height: 0 ↔ auto inside overflow:hidden containers.
 * - Prevents abrupt layout pops or section height jumps.
 * - Icon rotates smoothly 135° on open/close.
 * - 60 FPS hardware accelerated execution.
 */
import { useRef, useState, useCallback, memo, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

// ─── FAQItem ──────────────────────────────────────────────────────────────────
const FAQItem = memo(({ question, answer, isOpen, onToggle, index }) => {
  const contentRef = useRef(null);
  const iconRef = useRef(null);
  const animRef = useRef(null);

  useLayoutEffect(() => {
    // 1. Icon angle turn animation (135° smooth rotation)
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        rotate: isOpen ? 135 : 0,
        duration: 0.32,
        ease: 'back.out(1.4)',
        overwrite: 'auto',
      });
    }

    // 2. Smooth height & opacity transition (prevents sudden section height jumps)
    const content = contentRef.current;
    if (!content) return;

    if (animRef.current) animRef.current.kill();

    if (isOpen) {
      gsap.set(content, { display: 'block' });
      animRef.current = gsap.fromTo(
        content,
        { height: 0, opacity: 0 },
        {
          height: 'auto',
          opacity: 1,
          duration: 0.32,
          ease: 'power2.out',
          clearProps: 'height',
        }
      );
    } else {
      animRef.current = gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: 'power2.in',
        onComplete: () => {
          gsap.set(content, { display: 'none' });
        },
      });
    }
  }, [isOpen]);

  return (
    <div className="faq-item border-b last:border-0 py-6">
      <button
        type="button"
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between text-left font-bold focus:outline-none cursor-pointer group"
      >
        <div className="flex items-start gap-5 sm:gap-7">
          {/* Serial number */}
          <span className="faq-index font-display text-xl sm:text-2xl font-bold leading-none select-none">
            0{index + 1}
          </span>

          {/* Question text */}
          <span className="faq-question text-sm sm:text-base font-display leading-tight transition-colors duration-200">
            {question}
          </span>
        </div>

        {/* Toggle icon button — angle turns smoothly */}
        <span className={`faq-toggle grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-colors duration-200 ${isOpen ? 'faq-toggle--open' : 'faq-toggle--closed'}`}>
          <span ref={iconRef} className="text-base leading-none font-display select-none inline-block will-change-transform">
            +
          </span>
        </span>
      </button>

      {/* Accordion body — Smooth height container (prevents sudden section height jump) */}
      <div
        ref={contentRef}
        style={{ display: 'none', overflow: 'hidden', height: 0, opacity: 0 }}
      >
        <div className="mt-4 pl-10 sm:pl-14">
          <p className="faq-answer text-xs sm:text-sm leading-relaxed font-semibold font-sans">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
});

FAQItem.displayName = 'FAQItem';

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const FAQ = ({ faqs = [], dark = false }) => {
  // First item open by default
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = useCallback((index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  if (!faqs.length) return null;

  return (
    <div className={`mx-auto max-w-4xl px-4 ${dark ? 'faq-section--dark' : 'faq-section--light'}`}>
      {faqs.map((faq, index) => (
        <FAQItem
          key={faq.question}
          index={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default FAQ;
