"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import NavBar from "./NavBar";
import Breadcrumbs from "./Breadcrumbs";
import AwardsSection from "./AwardsSection";
import Footer from "./Footer";
import Link from "next/link";

const expertiseItems = [
  {
    title: "Over 120 Years of Spa Experience",
    content:
      "We know spas, inside and out. From day one of committing to your Spavia journey, you will feel the support and commitment from our team of experts. We take the time to understand your individual needs and challenges.",
  },
  {
    title: "Exceptional Experience Team Training",
    content:
      "Ongoing training to ensure a consistent and exceptional experience is provided to each and every guest.",
  },
  {
    title: "Vendor Training",
    content:
      "We partner with our carefully selected vendors to provide training to our teams, which broadens their industry knowledge.",
  },
  {
    title: "Operational Systems and POS",
    content:
      "We are on the pulse of new technology and we are constantly evolving our systems to make the process easier for franchise partners and team members alike.",
  },
  {
    title: "Spa Services Specialist Training",
    content:
      "Our spa training experts have frequent training sessions to keep teams engaged and aware of new trends, treatments and products.",
  },
  {
    title: "Marketing Training",
    content:
      "Our marketing experts equip franchisees with marketing tools and community engagement strategies to drive growth and establish a trusted wellness presence.",
  },
];

const journeyItems = [
  {
    title: "Strategic Sessions with Founders & Leadership Team",
    content:
      "Hear directly from our Founders and Leadership Team on what to expect when becoming a Spavia franchise partner. This is where the journey begins — grounded in vision, passion, and clarity.",
    imageSrc: "/training-and-support/image1.jpg",
    imageAlt: "Strategic Sessions",
  },
  {
    title: "On-Site Operations Training",
    content:
      "Hands-on training for you and your team. Learn systems, procedures, and guest engagement in a live spa environment to ensure confidence on day one.",
    imageSrc: "/training-and-support/image2.jpg",
    imageAlt: "On-Site Training",
  },
  {
    title: "Spa Services Training",
    content:
      "A three-step process designed to create confident, consistent specialists:",
    listItems: [
      "Online e-learning introduction to protocols and systems",
      "Deep dives with Spavia Trainers",
      "Hands-on training to ensure excellence in every guest experience",
    ],
    imageSrc: "/training-and-support/image3.jpg",
    imageAlt: "Spa Services Training",
  },
  {
    title: "E-Learning – Spavia University",
    content:
      "Access training 24/7 with our e-learning LMS suite. Includes video, text, quizzes, and reporting to keep your team engaged and accountable.",
    imageSrc: "/training-and-support/image4.jpg",
    imageAlt: "E-Learning",
  },
  {
    title: "Classroom Training – Denver, CO",
    content:
      "New owners meet the Spavia team and undergo in-depth training covering Operations, Marketing, Economics, Spa Services, and Systems. Grand Opening Training: Marketing, POS, and over 15 guides to prepare you for a successful launch.",
    imageSrc: "/training-and-support/image5.jpg",
    imageAlt: "Classroom Training",
  },
];

export default function TrainingAndSupportContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [currentJourneyIndex, setCurrentJourneyIndex] = useState(0);

  const paginate = (newDirection: number) => {
    setCurrentJourneyIndex((prevIndex) => {
      const newIndex = prevIndex + newDirection;
      if (newIndex < 0) return journeyItems.length - 1;
      if (newIndex >= journeyItems.length) return 0;
      return newIndex;
    });
  };

  return (
    <main className="text-gray-900 md:h-screen md:overflow-y-scroll md:snap-y md:snap-mandatory">
      <NavBar />
        <Breadcrumbs items={[{ label: "Training & Support" }]} />

      {/* Hero with video background */}
      <section className="snap-start relative overflow-hidden pt-40 pb-28 text-center text-white px-4 sm:px-6">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/training.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Training and Support
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed font-sans"
          >
            You Have the Dream, We Have the Knowledge. Spavia offers top-notch
            training and support from spa industry experts who bring over 120
            years of combined experience in spa and beauty.
          </motion.p>
        </div>
      </section>

      {/* Training Expertise (Accordion) */}
      <section className="snap-start py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-10 text-center"
          >
            Training Expertise
          </motion.h2>
          <div className="space-y-4">
            {expertiseItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className={`cursor-pointer rounded-xl border shadow-sm transition-all duration-300 ${
                    isOpen
                      ? "bg-white border-[#C2A878] shadow-lg"
                      : "bg-gray-50 hover:shadow-md"
                  }`}
                >
                  <div className="flex justify-between items-center p-5">
                    <span className="font-semibold text-lg">{item.title}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#C2A878]"
                    >
                      ▼
                    </motion.span>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Sections Carousel */}
      <section className="snap-start py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-10 text-center"
          >
            Your Franchise Journey
          </motion.h2>

          <div className="relative w-full">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentJourneyIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                {/* Image */}
                <div className="relative w-full h-64 sm:h-80 md:h-[450px] rounded-xl shadow-lg overflow-hidden">
                  <Image
                    src={journeyItems[currentJourneyIndex].imageSrc}
                    alt={journeyItems[currentJourneyIndex].imageAlt}
                    fill
                    className="object-contain md:object-cover"
                    priority
                  />
                </div>

                {/* Text */}
                <div className="relative pb-16 md:pb-0">
                  <h3 className="text-2xl font-bold mb-4">
                    {journeyItems[currentJourneyIndex].title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    {journeyItems[currentJourneyIndex].content}
                  </p>
                  {journeyItems[currentJourneyIndex].listItems && (
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                      {journeyItems[currentJourneyIndex].listItems.map(
                        (li, idx) => (
                          <li key={idx}>{li}</li>
                        )
                      )}
                    </ol>
                  )}

                  {/* Controls */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center mt-6 space-x-3 md:static md:mt-8">
                    <button
                      onClick={() => paginate(-1)}
                      className="p-2.5 bg-gray-300 rounded-full text-gray-800 hover:bg-gray-400 transition-colors cursor-pointer"
                      aria-label="Previous step"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>

                    {journeyItems.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentJourneyIndex(idx)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          idx === currentJourneyIndex
                            ? "bg-[#C2A878] scale-125 shadow-md"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to step ${idx + 1}`}
                      />
                    ))}

                    <button
                      onClick={() => paginate(1)}
                      className="p-2.5 bg-gray-300 rounded-full text-gray-800 hover:bg-gray-400 transition-colors cursor-pointer"
                      aria-label="Next step"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="snap-start bg-gray-50">
        <AwardsSection />
      </section>

      {/* Next Page Link */}
      <div className="bg-black text-white py-10 text-center">
        <Link
          href="/our-franchisees"
          className="inline-block bg-[#C2A878] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b09466] transition"
        >
          Next: Our Franchisees →
        </Link>
      </div>

      <Footer />
    </main>
  );
}
