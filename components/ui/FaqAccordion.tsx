"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  items: FaqItem[];
};

export default function FaqAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const btnId = `faq-btn-${i}`;
        const panelId = `faq-panel-${i}`;
        return (
          <div key={item.question} className="border-b border-line-inv">
            <button
              id={btnId}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full flex items-center justify-between gap-8 py-5 text-left group cursor-pointer"
            >
              <span
                className={`text-sm uppercase tracking-[0.06em] transition-[color,transform] duration-150 group-hover:translate-x-[2px] ${
                  isOpen ? "text-ink-inv" : "text-ink-dim group-hover:text-ink-inv"
                }`}
              >
                {item.question}
              </span>
              <span
                className={`shrink-0 text-accent text-2xl font-extralight leading-none transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                +
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-ink-dim text-sm leading-[1.7] max-w-[60ch] pb-6">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
