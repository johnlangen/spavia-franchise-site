"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import NavBar from "./NavBar";
import Breadcrumbs from "./Breadcrumbs";
import ProcessSection from "./ProcessSection";
import AwardsSection from "./AwardsSection";
import { ThemeProvider } from "./ThemeProvider";
import Button from "./Button";

import Footer from "./Footer";
import { ownershipFaqItems } from "../data/ownershipFaq";

export default function StepsToOwnershipContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ThemeProvider>
      <main className="text-gray-900 md:h-screen md:overflow-y-scroll md:snap-y md:snap-proximity">
        <NavBar />
        <Breadcrumbs sticky items={[{ label: "Steps to Ownership" }]} />

        {/* Hero */}
        <section className="snap-start bg-gradient-to-b from-[#C2A878] to-[#e3d6b7] min-h-[60svh] flex flex-col items-center justify-center py-20 text-center text-white relative overflow-hidden">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            Steps to Spa Ownership
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-2xl font-semibold mb-6"
          >
            Your Path to Franchise Success
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-3xl mx-auto text-lg leading-relaxed font-sans"
          >
            Embarking on your journey to spa ownership is an exciting and rewarding venture. 
            Our streamlined process guides you through each step, ensuring you have the support 
            and resources needed to achieve your goals and build a thriving Spavia franchise.
          </motion.p>
        </section>

        {/* Process Section */}
        <section className="snap-start bg-white">
          <ProcessSection />
        </section>

        {/* Image Gallery */}
        <section className="snap-start py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
            {[
              { src: "/media/exterior-storefront.webp", alt: "Spavia storefront exterior at dusk" },
              { src: "/media/logo-stone-wall.webp", alt: "Spavia brand signage on a stone feature wall" },
              { src: "/media/reception-guest-experience.webp", alt: "Spavia front desk welcoming a guest" },
            ].map((img, idx) => (
              <motion.img
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="rounded-xl shadow-lg w-full h-[350px] object-cover"
              />
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="snap-start py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {ownershipFaqItems.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border-b pb-4 transition-colors"
                  >
                    {/* Question */}
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      aria-controls={`ownership-faq-answer-${idx}`}
                      className="w-full text-left flex justify-between items-center font-semibold text-lg text-gray-900 hover:text-[#C2A878] transition-colors cursor-pointer"
                    >
                      {item.question}
                      <span
                        aria-hidden="true"
                        className={`text-2xl font-bold transform transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#C2A878]" : "rotate-0 text-gray-500"
                        }`}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {/* Answer */}
                    <div
                      id={`ownership-faq-answer-${idx}`}
                      hidden={!isOpen}
                      className="mt-3 space-y-3"
                    >
                      {item.answer.split("\n\n").map((paragraph) => (
                        <p key={paragraph} className="text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Multi-unit callout */}
            <div className="mt-12 max-w-3xl mx-auto rounded-2xl border border-[#C2A878]/40 bg-[#C2A878]/5 px-6 py-5 text-center">
              <p className="text-sm text-gray-700 mb-2">
                <span className="font-semibold text-[#9c814f]">Building a regional portfolio?</span>{" "}
                Spavia offers multi-unit Development Agreements with territory
                protection and reduced franchise fees on each additional unit.
              </p>
              <Link
                href="/multi-unit"
                className="text-sm font-semibold text-[#9c814f] hover:underline"
              >
                See multi-unit development →
              </Link>
            </div>

            {/* Get Started Button */}
            <div className="mt-12 text-center">
              <Button className="bg-[#C2A878] text-white hover:bg-[#b09466] px-8 py-4 text-lg">
                <a href="/get-started">Get Started</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="snap-start bg-gray-50">
          <AwardsSection />
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  );
}
