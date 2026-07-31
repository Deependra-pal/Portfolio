import { useState, useCallback, memo } from "react";

const FAQItem = memo(({ question, answer, isOpen, onToggle, index, dark = false }) => {
  return (
    <div className={`border-b last:border-0 py-6 ${dark ? "border-white/5" : "border-zinc-200/60"}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between text-left font-bold transition-colors focus:outline-none"
      >
        <div className="flex items-start gap-5 sm:gap-7">
          {/* Index Serial number (01, 02, etc.) */}
          <span className={`font-display text-xl sm:text-2xl font-bold leading-none select-none ${dark ? "text-zinc-600" : "text-zinc-950"}`}>
            0{index + 1}
          </span>
          <span className={`text-sm sm:text-base font-display leading-tight transition-colors duration-200 ${
            dark 
              ? "text-white hover:text-[#c5e32b]" 
              : "text-zinc-950 hover:text-zinc-700"
          }`}>
            {question}
          </span>
        </div>

        {/* Circular Accordion toggle Button */}
        <span
          className={`grid h-8.5 w-8.5 shrink-0 place-items-center rounded-full border shadow-xxs transition-colors duration-200 ${
            isOpen
              ? dark
                ? "bg-[#c5e32b] border-[#c5e32b] text-zinc-950 font-bold"
                : "bg-zinc-950 border-zinc-950 text-white font-bold"
              : dark
                ? "bg-white/5 border-white/10 text-zinc-400 hover:bg-white/10"
                : "bg-white border-zinc-200 text-zinc-500 hover:bg-zinc-50"
          }`}
        >
          <span className="text-sm leading-none font-display">
            {isOpen ? "×" : "+"}
          </span>
        </span>
      </button>

      {/* Accordion content - optimized transition properties */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-200 ease-in-out ${
          isOpen ? "max-h-60 mt-4 pl-10 sm:pl-14 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className={`text-xs sm:text-sm leading-relaxed font-semibold font-sans ${dark ? "text-zinc-400" : "text-zinc-800"}`}>
          {answer}
        </p>
      </div>
    </div>
  );
});

const FAQ = ({ faqs = [] , dark = false }) => {
  const [openIndex, setOpenIndex] = useState(0); // open first item by default like mockup

  const handleToggle = useCallback((index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  if (!faqs.length) return null;

  return (
    <div className="mx-auto max-w-4xl px-4">
      {faqs.map((faq, index) => (
        <FAQItem
          key={faq.question}
          index={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
          dark={dark}
        />
      ))}
    </div>
  );
};

export default FAQ;
