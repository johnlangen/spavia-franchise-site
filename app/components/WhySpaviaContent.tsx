"use client";
import FaqList from "./FaqList";
import GoldBottomBanner from "./GoldBottomBanner";
import PageHero from "./PageHero";

import { AnimatePresence,motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AwardsSection from "./AwardsSection";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import NavBar from "./NavBar";

const whySpaviaFaqs = [
  {
    question: "What revenue streams does a Spavia franchise offer?",
    answer:
      "Spavia franchisees benefit from multiple revenue streams including a multi-treatment spa concept with result-driven treatments, a retail boutique for at-home wellness products, gift card sales that boost revenue during holidays and special occasions, and a three-tier membership model that caters to diverse guest needs and budgets.",
  },
  {
    question: "What technology and systems does Spavia provide to franchisees?",
    answer:
      "Spavia provides a comprehensive suite of technology including a world-class applicant tracking system, 100% cloud-based operations, a fully integrated marketing and POS system, a robust Spavia app for online scheduling on iOS and Android, coordinated team member management, an integrated payroll system, effortless inventory management, instant analytics with over 150 reports, and guest capture technology with AI.",
  },
  {
    question: "How long has Spavia been in the spa franchise industry?",
    answer:
      "Spavia opened its doors on September 25, 2005, with a mission and vision of making a positive difference in the world one guest at a time. The brand has over 20 years of experience delivering exceptional service and result-driven treatments.",
  },
  {
    question: "What makes the Spavia guest experience different from other spa franchises?",
    answer:
      "Spavia is focused on creating an exceptional experience where guests can turn off the stresses of everyday life. Spavia listens to guests, measures success based on every experience, takes feedback to heart, and strives to improve each and every day. This commitment to guest care drives word-of-mouth referrals and positive reviews.",
  },
];

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
    <main id="main-content" className="text-gray-900">
      <NavBar />
        <Breadcrumbs sticky items={[{ label: "Why Spavia" }]} />

      {/* Hero with video + black tint */}
      <PageHero eyebrow="The Spavia difference" title="Why Spavia" intro="Accessible luxury for your guests. A full-service membership model for your business. Explore the experience, people and operating support that set Spavia apart." image="/media/signature-massage-candle.webp" alt="A personalized Spavia massage treatment by candlelight" action={{href:"/franchise-cost",label:"Explore the investment"}} />

      {/* Expertise Intro */}
      <section className="py-20 bg-white px-4 sm:px-6 brand-light">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={false}
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

      {/* By the Numbers — Stability/Quality (2026 FDD, Item 20) */}
      <section className="py-20 bg-black text-white px-4 sm:px-6 brand-dark">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-3"
          >
            Selective by Design
          </motion.h2>
          <motion.p
            initial={false}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/70 max-w-2xl mx-auto mb-12 text-base"
          >
            Spavia grows carefully. We choose owners and locations with care, and the
            data shows it &mdash; every owner is part of a brand we protect.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 text-center">
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[var(--accent-text)] text-5xl md:text-6xl font-bold font-[family-name:var(--font-recoleta)] mb-2">
                63
              </p>
              <p className="text-white/60 text-sm tracking-wide uppercase">
                Locations Open
              </p>
              <p className="text-white/40 text-xs mt-1">As of Dec 31, 2025</p>
            </motion.div>
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-[var(--accent-text)] text-5xl md:text-6xl font-bold font-[family-name:var(--font-recoleta)] mb-2">
                4
              </p>
              <p className="text-white/60 text-sm tracking-wide uppercase">
                New Locations in 2025
              </p>
              <p className="text-white/40 text-xs mt-1">Net additions during 2025</p>
            </motion.div>
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-[var(--accent-text)] text-5xl md:text-6xl font-bold font-[family-name:var(--font-recoleta)] mb-2">
                0
              </p>
              <p className="text-white/60 text-sm tracking-wide uppercase">
                Terminations in 2025
              </p>
              <p className="text-white/40 text-xs mt-1">Zero closures system-wide</p>
            </motion.div>
          </div>
          <p className="text-white/40 text-[10px] mt-12">
            Source: 2026 Spavia Franchise Disclosure Document, Item 20.
          </p>
        </div>
      </section>

      {/* Multiple Streams of Revenue */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 brand-light">
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
                    ? "bg-[#b38a5f] text-white  scale-110"
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
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-sm p-8 brand-light"
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
      <section className="py-20 bg-white px-4 sm:px-6 brand-light">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/media/signature-massage-candle.webp"
              alt="Spavia signature massage treatment in a moody candlelit treatment room"
              width={1920}
              height={1280}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-sm w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={false}
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
      <section className="py-20 bg-gray-50 px-4 sm:px-6 brand-light">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={false}
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
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/media/reception-guest-experience.webp"
              alt="Spavia reception area with guest being greeted by a team member"
              width={1920}
              height={1280}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-sm w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* What Our Guests Say */}
      <section className="py-20 bg-white text-center px-4 sm:px-6 brand-light">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={false}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            What Our Guests Say
          </motion.h2>
          <motion.p
            initial={false}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-700 leading-relaxed font-sans mb-8"
          >
            The greatest rewards come when you give of yourself...
          </motion.p>
          <motion.div
            initial={false}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <video
              src="/why-spavia/video1.mp4"
              controls
              className="rounded-sm w-full max-w-3xl mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-gray-50 px-4 sm:px-6 brand-light">
        <AwardsSection />
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white px-4 sm:px-6 brand-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <FaqList items={whySpaviaFaqs} />
        </div>
      </section>

      {/* Related model pages */}
      <section className="bg-white py-12 px-6 border-t border-gray-100 brand-light">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-[var(--accent-text)] font-semibold mb-3">
            Related Franchise Models
          </p>
          <p className="text-gray-600 text-sm mb-6 max-w-2xl mx-auto">
            Spavia offers different entry paths depending on your background
            and goals. Explore the model that fits.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 max-w-xl mx-auto">
            <Link
              href="/day-spa-franchise"
              className="block p-4 rounded-sm border border-gray-200 hover:border-[#b38a5f] transition-colors text-left"
            >
              <p className="font-semibold text-gray-900 text-sm mb-1">
                Day Spa Franchise →
              </p>
              <p className="text-xs text-gray-600">
                Full-service entry point
              </p>
            </Link>
            <Link
              href="/multi-unit"
              className="block p-4 rounded-sm border border-gray-200 hover:border-[#b38a5f] transition-colors text-left"
            >
              <p className="font-semibold text-gray-900 text-sm mb-1">
                Multi-Unit Development →
              </p>
              <p className="text-xs text-gray-600">
                Build a regional portfolio
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Next Page Link */}
      <GoldBottomBanner />

      <Footer />
    </main>
  );
}
