import { useState, useCallback, memo } from "react";

const FAQItem = memo(({ question, answer, isOpen, onToggle, index }) => {
  return (
    <div className="border-b border-zinc-200/60 last:border-0 py-6">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between text-left font-bold transition-colors focus:outline-none"
      >
        <div className="flex items-start gap-5 sm:gap-7">
          {/* Index Serial number (01, 02, etc.) */}
          <span className="font-display text-xl sm:text-2xl font-bold text-zinc-300 leading-none select-none">
            0{index + 1}
          </span>
          <span className="text-sm sm:text-base font-display text-zinc-900 leading-tight">
            {question}
          </span>
        </div>

        {/* Circular Accordion toggle Button */}
        <span
          className={`grid h-8.5 w-8.5 shrink-0 place-items-center rounded-full border shadow-xxs transition-colors duration-200 ${
            isOpen
              ? "bg-zinc-950 border-zinc-950 text-white font-bold"
              : "bg-white border-zinc-200 text-zinc-650 hover:bg-zinc-50"
          }`}
        >
          <span className="text-sm leading-none font-display">
            {isOpen ? "×" : "+"}
          </span>
        </span>
      </button>

      {/* Accordion content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 mt-4 pl-10 sm:pl-14 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-xs sm:text-sm leading-relaxed text-zinc-600 font-semibold font-sans">
          {answer}
        </p>
      </div>
    </div>
  );
});

const FAQ = ({ faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState(0); // open first item by default like mockup

  const handleToggle = useCallback((index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  if (!faqs.length) return null;

  return (
    <div className="mx-auto max-w-4xl text-[#0f172a] px-4">
      {faqs.map((faq, index) => (
        <FAQItem
          key={faq.question}
          index={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default FAQ;
