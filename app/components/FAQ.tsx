"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What kind of leadership experience does Spavia provide?",
    answer:
      "Our national team offers over 100 years of combined spa experience, providing expert insights and guidance for our franchise owners. This knowledge equips you with the tools to navigate the competitive spa landscape and build a successful franchise while delivering exceptional guest experiences.",
  },
  {
    question: "How can Spavia franchisees generate revenue?",
    answer:
      "Spavia generates revenue through diverse streams, including spa treatments, beauty services, and retail products. Multiple revenue streams are vital for stability and growth, enabling your business to thrive while successfully meeting guest needs and maximizing earning potential. Revenue streams include massage, facials/skin care, waxing, lash & brow treatments, body treatments, retail, gift cards, and spa packages.",
  },
  {
    question: "What makes Spavia franchisees so successful?",
    answer:
      "At Spavia, our dedicated franchisees are the heart of our success, committed to providing exceptional wellness experiences while building thriving businesses. Their focus on guest care and community impact positions Spavia as a trusted leader in the spa industry. Join us to become part of a network of passionate entrepreneurs invested in your success.",
  },
  {
    question: "Why is Spavia considered a leading spa franchise opportunity?",
    answer:
      "Spavia has built its reputation by delivering resort-inspired wellness experiences in communities across the U.S. With over 120 years of combined leadership expertise, franchisees benefit from proven systems, strong guest loyalty, and a business model designed for stability and growth.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b pb-4 transition-colors"
              >
                {/* Question button */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full text-left flex justify-between items-center font-semibold text-lg text-gray-900 hover:text-[#C2A878] transition-colors cursor-pointer"
                >
                  {faq.question}
                  <span
                    className={`text-2xl font-bold transform transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#C2A878]" : "rotate-0 text-gray-500"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer with animation */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/training-and-support" className="text-[#C2A878] font-medium hover:underline">
            See details on training and support →
          </Link>
        </div>

      </div>
    </section>
  );
}
