"use client";

import { useState } from "react";
import NavBar from "./NavBar";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import AwardsSection from "./AwardsSection";
import Link from "next/link";
import FranchiseLongForm from "./FranchiseLongForm";

const getStartedFaqs = [
  {
    question: "How do I get started with a Spavia franchise?",
    answer:
      "Complete the franchise inquiry form above to receive the Spavia Franchise Information Kit. A Spavia representative will contact you within 24\u201348 hours to discuss the opportunity.",
  },
  {
    question: "What happens after I submit the franchise inquiry form?",
    answer:
      "After submitting the form, a Spavia representative will reach out within 24\u201348 hours. The first step is typically a 15-minute introductory call to learn more about each other and determine if Spavia is the right fit.",
  },
  {
    question: "What is the franchise ownership process at Spavia?",
    answer:
      "The Spavia franchise process includes an introductory call, two discovery sessions covering culture, design, support systems, marketing, operations, and economics, meetings with franchise partners and executives, a Meet the Team Day in Denver, Colorado, and then franchise award.",
  },
  {
    question: "How large is the wellness industry opportunity?",
    answer:
      "The global wellness industry is a $6.3 trillion market. Spavia franchise owners bring resort-like spa experiences to local communities, tapping into the growing demand for affordable luxury wellness services.",
  },
];

export default function GetStartedContent() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <main className="bg-white text-gray-900 flex flex-col">
      <NavBar />
      <Breadcrumbs items={[{ label: "Get Started" }]} />

      {/* FORM SECTION */}
      <section className="px-6 pt-10 md:pt-16 pb-16">
        <div className="max-w-xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">
            Request Franchise Information
          </h1>
          <p className="text-gray-500 text-sm text-center mb-6">
            A Spavia representative will contact you within 24–48 hours.
          </p>

          <FranchiseLongForm />

          <p className="text-center text-gray-500 text-sm mt-6">
            Prefer to talk first?{" "}
            <a
              href="https://calendly.com/tyler-spaviadayspa/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C2A878] font-medium hover:underline"
            >
              Schedule a Call →
            </a>
          </p>
          <p className="text-center text-gray-400 text-xs mt-2">
            Learn more about our{" "}
            <Link
              href="/steps-to-ownership"
              className="text-[#C2A878] hover:underline"
            >
              Steps to Ownership
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {getStartedFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left flex justify-between items-center font-semibold text-lg text-gray-900 hover:text-[#C2A878] transition-colors cursor-pointer"
                  >
                    {faq.question}
                    <span
                      className={`text-2xl font-bold transform transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#C2A878]" : "rotate-0 text-gray-500"
                      }`}
                    >
                      {isOpen ? "\u2212" : "+"}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <AwardsSection />

      <Footer />
    </main>
  );
}
