"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import NavBar from "./NavBar";
import AwardsSection from "./AwardsSection";
import Footer from "./Footer";

// All data for the component is now here
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

const supportCommitmentItems = [
  {
    title: "Team of Experts",
    content:
      "Over 120 years of combined experience. Seasoned owners, therapists, and estheticians guide and inspire you.",
  },
  {
    title: "Culture of Innovation",
    content:
      "Creativity + data = smarter growth. We constantly test and evolve with the industry.",
  },
  {
    title: "World Class Partners",
    content:
      "From marketing agencies to skincare vendors, we only work with the best so you can thrive.",
  },
  {
    title: "Every Step of the Way",
    content:
      "Our national team stands with you from discovery day to grand opening and beyond.",
  },
];

export default function TrainingAndSupportContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [currentJourneyIndex, setCurrentJourneyIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const carouselVariants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

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

      {/* Hero (Original - Unchanged) */}
      <section className="snap-start bg-gradient-to-b from-[#C2A878] to-[#e3d6b7] pt-40 pb-28 text-center text-white relative overflow-hidden">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6"
        >
          Training and Support
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto text-lg leading-relaxed font-sans"
        >
          You Have the Dream, We Have the Knowledge. Spavia offers top-notch
          training and support from spa industry experts who bring over 120
          years of combined experience in spa and beauty.
        </motion.p>
      </section>

      {/* Training Expertise (Accordion) - Enhanced */}
      <section className="snap-start py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-10 text-center"
          >
            Training Expertise
          </motion.h2>
          <div className="space-y-4">
            {expertiseItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className={`cursor-pointer rounded-xl border shadow-sm transition-all duration-300 transform ${
                    isOpen
                      ? "bg-white shadow-lg border-[#C2A878] scale-[1.01]"
                      : "bg-gray-50 hover:shadow-md hover:scale-[1.01]"
                  }`}
                >
                  {/* Header */}
                  <div className="flex justify-between items-center p-5">
                    <span className="font-semibold text-lg">{item.title}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#C2A878] text-2xl font-bold"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.span>
                  </div>

                  {/* Smooth Expandable Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
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

      {/* Journey Sections Carousel - FINAL UI */}
      <section className="snap-start py-20 bg-gray-50 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-10 text-center"
          >
            Your Franchise Journey
          </motion.h2>

          <div className="relative w-full overflow-hidden">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentJourneyIndex}
                className="grid md:grid-cols-2 gap-8 items-center"
                custom={1}
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              >
                {/* Image */}
                <div
                  className={`order-1 ${
                    currentJourneyIndex % 2 !== 0 ? "md:order-last" : "md:order-1"
                  }`}
                >
                  <div className="relative w-full h-80 md:h-[450px] rounded-xl shadow-lg overflow-hidden">
                    <Image
                      src={journeyItems[currentJourneyIndex].imageSrc}
                      alt={journeyItems[currentJourneyIndex].imageAlt}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`order-2 ${
                    currentJourneyIndex % 2 !== 0 ? "md:order-1" : "md:order-last"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-4">
                    {journeyItems[currentJourneyIndex].title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    {journeyItems[currentJourneyIndex].content}
                  </p>
                  {journeyItems[currentJourneyIndex].listItems && (
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                      {journeyItems[currentJourneyIndex].listItems?.map(
                        (listItem, listIdx) => (
                          <li key={listIdx}>{listItem}</li>
                        )
                      )}
                    </ol>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* New combined control center for dots and arrows */}
          <div className="flex justify-center items-center mt-8 space-x-2">
            <button
              onClick={() => paginate(-1)}
              className="p-2.5 bg-gray-300 rounded-full text-gray-800 hover:bg-gray-400 transition-colors"
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
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
              className="p-2.5 bg-gray-300 rounded-full text-gray-800 hover:bg-gray-400 transition-colors"
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Support Commitment - Enhanced */}
      <section className="snap-start py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-12"
          >
            Our Support Commitment
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {supportCommitmentItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 bg-gray-50 rounded-xl shadow transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Awards */}
      <section className="snap-start bg-gray-50">
        <AwardsSection />
      </section>

      <Footer />
    </main>
  );
}