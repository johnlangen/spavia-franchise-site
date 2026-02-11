"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
      "The federal trade commission and state franchise sales regulations do not allow franchisors to provide profit projections. However, if you become a qualified candidate, we would be happy to share our franchise disclosure document (FDD). The FDD will highlight our historical sales from our franchised locations.",
  },
  {
    question: "Do I need experience in the spa industry?",
    answer:
      "While it can’t hurt to have experience in the spa industry, it is not required. We are looking for individuals who share our dedication to providing an exceptional experience. We can teach you and your team the rest!",
  },
  {
    question: "How much are the royalties and other annual fees?",
    answer:
      "Our current initial franchise fee is $59,500, Royalty fee is 6 percent of gross sales. Marketing fee is up to 1 percent of gross sales.",
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
      "The term is 10 years, with a renewal option for an additional 10 years.",
  },
  {
    question: "Can I own multiple Spavia locations?",
    answer:
      "Yes, you are able to own multiple locations. In fact, many of our owners have chosen to purchase 3 or more.",
  },
  {
    question: "What is the standard design space of a Spavia development?",
    answer:
      "Our spas' ideal square footage is between 2,800 and 3,200 square feet.",
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
      <main className="text-gray-900 md:h-screen md:overflow-y-scroll md:snap-y md:snap-mandatory">
        <NavBar />
        <Breadcrumbs items={[{ label: "Steps to Ownership" }]} />

        {/* Hero */}
        <section className="snap-start bg-gradient-to-b from-[#C2A878] to-[#e3d6b7] pt-40 pb-28 text-center text-white relative overflow-hidden">
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
            {["image1.jpg", "image2.jpg", "image3.jpg"].map((img, idx) => (
              <motion.img
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                src={`/steps-to-ownership/${img}`}
                alt={`Step ${idx + 1}`}
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

            {/* Get Started Button */}
            <div className="mt-16 text-center">
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
