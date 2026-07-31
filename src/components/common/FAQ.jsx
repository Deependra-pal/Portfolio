import { useState } from "react";
import Icon from "../ui/Icon";

const FAQItem = ({ question, answer, isOpen, onToggle, dark }) => {
  return (
    <div className={`border-b last:border-0 ${dark ? "border-white/5" : "border-slate-100"}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`flex w-full items-center justify-between py-5 text-left font-semibold transition-colors focus:outline-none ${
          dark ? "text-white hover:text-indigo-400" : "text-slate-900 hover:text-indigo-600"
        }`}
      >
        <span>{question}</span>
        <span
          className={`grid h-8 w-8 place-items-center rounded-lg transition-transform duration-300 ${
            dark
              ? isOpen
                ? "bg-indigo-600/10 text-indigo-400"
                : "bg-white/5 text-slate-400"
              : isOpen
              ? "bg-indigo-50 text-indigo-600"
              : "bg-slate-50 text-slate-500"
          }`}
        >
          <Icon name="arrowRight" className="h-4 w-4 rotate-90" strokeWidth={2.2} />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 pb-5 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className={`text-sm leading-relaxed sm:text-base ${dark ? "text-slate-400" : "text-slate-600"}`}>
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = ({ faqs = [], dark = false }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs.length) return null;

  return (
    <div
      className={`mx-auto max-w-3xl rounded-2xl border p-6 sm:p-8 shadow-sm ${
        dark ? "border-white/5 bg-white/[0.01] shadow-2xl" : "border-slate-200/80 bg-white shadow-sm"
      }`}
    >
      {faqs.map((faq, index) => (
        <FAQItem
          key={faq.question}
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
