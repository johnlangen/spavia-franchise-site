import type { ReactNode } from "react";

type FaqItem = { question: string; answer: ReactNode };

/** Native disclosures remain readable and operable before JavaScript loads. */
export default function FaqList({ items }: { items: readonly FaqItem[] }) {
  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <details key={item.question}>
          <summary data-track="faq_open">
            <span>{item.question}</span>
            <span className="faq-symbol" aria-hidden="true" />
          </summary>
          <div className="faq-answer">
            {typeof item.answer === "string"
              ? item.answer
                  .split("\n\n")
                  .map((paragraph, i) => (
                    <p key={`${index}-${i}`}>{paragraph}</p>
                  ))
              : item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
