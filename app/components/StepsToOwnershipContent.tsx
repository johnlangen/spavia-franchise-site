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


const faqItems = [
  {
    question: "How much can I make as a Spavia franchise?",
    answer:
      "The federal trade commission and state franchise sales regulations do not allow franchisors to provide profit projections. Per the 2026 FDD, Item 19, Part III, the median annual revenue (cash receipts) reported by 44 disclosed Spavia franchised locations was $1,110,481, with median cash flow from operations of $199,773 and a median operating margin of 18.4% over the 2025 measurement period. Results vary by location — request the full FDD for complete details.",
  },
  {
    question: "Do I need experience in the spa industry?",
    answer:
      "While it can’t hurt to have experience in the spa industry, it is not required. We are looking for individuals who share our dedication to providing an exceptional experience. We can teach you and your team the rest!",
  },
  {
    question: "How much are the royalties and other annual fees?",
    answer:
      "Per the 2026 FDD: the initial franchise fee is $59,500 and the initial training fee is $5,000 (Item 5). The royalty fee is 6% of Gross Sales and the Brand Fund contribution is 1% of Gross Sales (Item 6).",
  },
  {
    question: "Does Spavia offer financing?",
    answer:
      "No, you will be responsible for financing. We would be happy to introduce you to lenders and financing brokers who are familiar with our business.",
  },
  {
    question: "How long does it take to open a Spavia?",
    answer:
      "Each location is different, but the most time-consuming steps tend to be site selection, lease negotiation, build-out (including permitting) requirements, and training. However, we anticipate it will take approximately 9 to 12 months from signing your lease to opening day at your Spavia.",
  },
  {
    question: "What are the real estate specifications?",
    answer:
      "We prefer for Spavias to be located in shopping centers that have anchor retailers, female oriented retailers, wellness oriented retailers & other national retailers. These types of retailers provide the best synergies (a more comprehensive approach will be available).",
  },
  {
    question: "What is the term of the franchise agreement?",
    answer:
      "Per the 2026 FDD, Item 17, the initial term is 10 years, with the right to be considered for two consecutive additional 10-year renewal terms — up to 30 years total. Renewal is subject to standard conditions including good standing, completion of refresher training, and execution of the then-current franchise agreement.",
  },
  {
    question: "Can I own multiple Spavia locations?",
    answer:
      "Yes. Spavia offers multi-unit Development Agreements for qualified candidates. Per the 2026 FDD, Item 5, the Development Fee is $150,000 for the right to develop 3 Day Spas, plus $50,000 for each additional unit up to 5. Reduced per-unit fees apply for larger Development Schedules. Many of our owners have chosen to purchase 3 or more locations.",
  },
  {
    question: "What is the standard design space of a Spavia development?",
    answer:
      "Per the 2026 FDD, Item 1, a Spavia Day Spa typically occupies approximately 2,500 to 3,300 square feet of leased or owned space, with our recommended size being closer to 3,000 square feet, typically located in a high-end retail shopping center.",
  },
  {
    question: "What type of training will I receive?",
    answer:
      "You will receive comprehensive on-site and classroom training. We also provide 24/7 support through online access to training and support tools.",
  },
  {
    question: "What are the next steps in the process?",
    answer:
      "Once you have filled out our form, the next step is a 15 minute introductory call to learn more about whether or not Spavia is an excellent fit.",
  },
];

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
              {faqItems.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border-b pb-4 transition-colors"
                  >
                    {/* Question */}
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full text-left flex justify-between items-center font-semibold text-lg text-gray-900 hover:text-[#C2A878] transition-colors cursor-pointer"
                    >
                      {item.question}
                      <span
                        className={`text-2xl font-bold transform transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#C2A878]" : "rotate-0 text-gray-500"
                        }`}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {/* Answer */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
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
