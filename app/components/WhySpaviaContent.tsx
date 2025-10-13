"use client";

import NavBar from "./NavBar";
import AwardsSection from "./AwardsSection";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const revenueStreams = [
  {
    title: "Multi-Treatment Concept",
    description:
      "Result-driven treatments create measurable outcomes that not only boost guest satisfaction but also encourage word-of-mouth referrals and positive reviews.",
  },
  {
    title: "Retail Boutique",
    description:
      "A retail boutique offers guests the opportunity to continue their wellness journey at home, providing products that enhance and prolong the results of their treatments.",
  },
  {
    title: "Gift Cards",
    description:
      "Offering gift cards can significantly boost sales during holidays and special occasions, creating a consistent revenue influx throughout the year.",
  },
  {
    title: "Membership Model",
    description:
      "A three-tier membership model caters to diverse guest needs, offering options that appeal to varying budgets and wellness goals.",
  },
];

export default function WhySpaviaContent() {
  const [active, setActive] = useState<number>(0);

  return (
    <main className="text-gray-900 md:h-screen md:overflow-y-scroll md:snap-y md:snap-mandatory">
      <NavBar />

      {/* Hero with video + black tint */}
      <section className="snap-start relative overflow-hidden pt-40 pb-24 text-center text-white px-4 sm:px-6">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/why-spavia.mp4" type="video/mp4" />
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
            Why Spavia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed font-sans"
          >
            Redefining Spa Excellence with Purpose and Passion. Spavia provides
            multiple streams of revenue and a proven system for success.
          </motion.p>
        </div>
      </section>

      {/* Expertise Intro */}
      <section className="snap-start py-20 bg-white px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-6"
          >
            Expertise That Sets Us Apart
          </motion.h2>
          <p className="text-gray-700 leading-relaxed font-sans text-base sm:text-lg">
            On September 25, 2005, Spavia opened its doors with a mission and
            vision of making a positive difference in the world one guest at a
            time. We are proud to have a reputation of delivering exceptional
            service, result-driven treatments while offering differentiated
            design concepts and a recurring revenue model. We look forward to
            engaging with you and discovering your passion.
          </p>
        </div>
      </section>

      {/* Multiple Streams of Revenue */}
      <section className="snap-start py-20 bg-gray-50 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            Multiple Streams of Revenue
          </h2>

          {/* Number Selector */}
          <div className="flex justify-center gap-4 mb-8">
            {revenueStreams.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-12 h-12 rounded-full font-bold flex items-center justify-center transition cursor-pointer ${
                  active === i
                    ? "bg-[#C2A878] text-white shadow-lg scale-110"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          {/* Animated Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <h3 className="text-xl font-bold mb-4">
                {revenueStreams[active].title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {revenueStreams[active].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Exceptional Guest Experience */}
      <section className="snap-start py-20 bg-white px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/why-spavia/image1.png"
              alt="Exceptional Guest Experience"
              width={600}
              height={400}
              className="rounded-xl shadow-md"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Exceptional Guest Experience
            </h2>
            <p className="text-gray-700 leading-relaxed font-sans">
              Our guests inspire us. At Spavia, we are focused on creating an
              exceptional experience where they can turn off the stresses of
              every day life. We listen to our guests and we measure our success
              based on every experience. We take to heart the feedback we
              receive and strive to better each and every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Proven Concept */}
      <section className="snap-start py-20 bg-gray-50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Proven Concept</h2>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Spavia offers top-notch training and support...
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm">
              <li>World-class applicant tracking system</li>
              <li>100% cloud based</li>
              <li>Fully integrated marketing and POS system</li>
              <li>Robust Spavia app for online scheduling on iOS and Android</li>
              <li>Coordinated team member management</li>
              <li>Integrated payroll system</li>
              <li>Effortless inventory management</li>
              <li>Instant analytics with over 150 reports</li>
              <li>Guest capture technology with AI</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/why-spavia/image2.png"
              alt="Proven Concept"
              width={600}
              height={400}
              className="rounded-xl shadow-md"
            />
          </motion.div>
        </div>
      </section>

      {/* What Our Guests Say */}
      <section className="snap-start py-20 bg-white text-center px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            What Our Guests Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-700 leading-relaxed font-sans mb-8"
          >
            The greatest rewards come when you give of yourself...
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <video
              src="/why-spavia/video1.mp4"
              controls
              className="rounded-xl shadow-md w-full max-w-3xl mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Awards */}
      <section className="snap-start bg-gray-50 px-4 sm:px-6">
        <AwardsSection />
      </section>

      {/* Next Page Link */}
      <div className="bg-black text-white py-10 text-center">
        <Link
          href="/training-and-support"
          className="inline-block bg-[#C2A878] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b09466] transition"
        >
          Next: Training & Support →
        </Link>
      </div>

      <Footer />
    </main>
  );
}
