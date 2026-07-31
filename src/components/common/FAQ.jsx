/**
 * FAQ.jsx — Theme-aware accordion with GSAP-driven height animation.
 *
 * ARCHITECTURE:
 * All colour/border/bg styling is handled purely by CSS classes defined in
 * index.css. FAQItem has ZERO hardcoded colour values. The `dark` prop
 * only controls which wrapper class is applied:
 *   dark=false  →  .faq-section--light
 *   dark=true   →  .faq-section--dark
 *
 * In index.css, each [data-theme] overrides both .faq-section--light and
 * .faq-section--dark selectors, so the correct colours are always applied
 * regardless of which theme is active. Adding a new theme requires only
 * adding overrides in index.css — no component changes needed.
 *
 * ANIMATION:
 * GSAP animates height: 0 → auto (measures once, no per-frame layout).
 * animRef.current.kill() prevents queue buildup on rapid toggling.
 * clearProps:'height' releases layout control after open completes.
 * All animation logic is identical across all themes.
 *
 * PERFORMANCE:
 * - React.memo on FAQItem prevents re-renders when siblings change state.
 * - useCallback on handleToggle gives FAQItem.memo a stable prop reference.
 * - No ScrollTrigger. No registerPlugin.
 */
import { useRef, useState, useCallback, memo, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

// ─── FAQItem ──────────────────────────────────────────────────────────────────
const FAQItem = memo(({ question, answer, isOpen, onToggle, index }) => {
  const contentRef = useRef(null);
  const animRef    = useRef(null);

  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    // Kill in-flight animation to prevent stacking on rapid toggling
    if (animRef.current) animRef.current.kill();

    if (isOpen) {
      gsap.set(el, { display: 'block' });
      animRef.current = gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        {
          height: 'auto',
          opacity: 1,
          duration: 0.28,
          ease: 'power2.out',
          clearProps: 'height', // release after open → content reflows naturally
        }
      );
    } else {
      animRef.current = gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.22,
        ease: 'power2.in',
        onComplete: () => gsap.set(el, { display: 'none' }),
      });
    }
  }, [isOpen]);

  return (
    <div className="faq-item border-b last:border-0 py-6">
      <button
        type="button"
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between text-left font-bold focus:outline-none"
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

        {/* Toggle button — open/closed state drives only the CSS class */}
        <span className={`faq-toggle grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-colors duration-200 ${isOpen ? 'faq-toggle--open' : 'faq-toggle--closed'}`}>
          <span className="text-sm leading-none font-display select-none">
            {isOpen ? '×' : '+'}
          </span>
        </span>
      </button>

      {/* Accordion body — height animated by GSAP (see useLayoutEffect above) */}
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

  // Stable reference so FAQItem.memo actually prevents unnecessary re-renders
  const handleToggle = useCallback((index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  if (!faqs.length) return null;

  return (
    // Wrapper class drives ALL colour tokens — no colour logic inside FAQItem
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
