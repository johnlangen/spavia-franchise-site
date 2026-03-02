"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import NavBar from "./NavBar";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import { ThemeProvider } from "./ThemeProvider";
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
    <ThemeProvider>
      <main className="bg-black text-white flex flex-col">
        <NavBar />
        <Breadcrumbs items={[{ label: "Get Started" }]} />

        {/* HERO + FORM */}
        <section className="flex flex-col items-center justify-start px-6 pt-24 pb-20">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-4 max-w-4xl leading-tight"
          >
            Get Started With Spavia – Your Spa Franchise Opportunity
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl font-semibold text-center text-[#C2A878] mb-6"
          >
            Build your future in the $6.3 Trillion wellness industry
          </motion.h2>

          {/* Intro paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-300 text-center max-w-2xl mb-10 leading-relaxed"
          >
            Let’s discuss the benefits of bringing a resort-like spa experience to
            your neighborhood. Fill out the form below to begin your franchise
            journey. Learn more about our{" "}
            <Link
              href="/steps-to-ownership"
              className="text-[#C2A878] underline hover:text-[#b09466]"
            >
              Steps to Ownership
            </Link>{" "}
            process.
          </motion.p>

          {/* Microcopy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[#C2A878] text-sm tracking-wide text-center mb-1"
          >
            Request Your Spavia Franchise Information Kit
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-400 text-xs text-center mb-8"
          >
            A Spavia representative will contact you within 24–48 hours.
          </motion.p>

          {/* FORM CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="
              bg-black border border-gray-700 rounded-2xl shadow-2xl 
              p-10 max-w-2xl w-full
              backdrop-blur-sm relative
            "
          >

            {/* Small, clean subtitle */}
            <p className="text-center text-gray-400 mb-6 text-sm">
              Complete the form below to receive your Spavia Franchise Information Kit.
            </p>

            {/* ActiveCampaign Form */}
            <div className="bg-white p-6 rounded-md shadow-sm">
              <FranchiseLongForm />
            </div>
          </motion.div>

        </section>

        {/* FAQ */}
        <section className="py-20 px-4 sm:px-6 bg-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {getStartedFaqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={index} className="border-b border-gray-700 pb-4 transition-colors">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full text-left flex justify-between items-center font-semibold text-lg text-white hover:text-[#C2A878] transition-colors cursor-pointer"
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
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* AWARDS */}
        <section className="bg-gray-50">
          <AwardsSection />
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  );
}
