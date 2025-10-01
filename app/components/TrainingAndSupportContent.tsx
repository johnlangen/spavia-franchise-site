"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "./NavBar";
import AwardsSection from "./AwardsSection";

import Footer from "./Footer";


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

export default function TrainingAndSupportContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="text-gray-900 md:h-screen md:overflow-y-scroll md:snap-y md:snap-mandatory">
      <NavBar />

      {/* Hero */}
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

      {/* Training Expertise Accordion */}
      <section className="snap-start py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Training Expertise
          </h2>
          <div className="space-y-4">
            {expertiseItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="border rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-5 bg-gray-50 hover:bg-gray-100 transition"
                  onClick={() =>
                    setOpenIndex(openIndex === idx ? null : idx)
                  }
                >
                  <span className="font-semibold">{item.title}</span>
                  <span className="text-lg font-bold">
                    {openIndex === idx ? "−" : "+"}
                  </span>
                </button>
                {openIndex === idx && (
                  <div className="p-5 text-gray-700 text-sm bg-white">
                    {item.content}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Sections */}
      <section className="snap-start py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {/* 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.img
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              src="/training-and-support/image1.jpg"
              alt="Strategic Sessions"
              className="rounded-xl shadow-lg"
            />
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                Strategic Sessions with Founders & Leadership Team
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Hear directly from our Founders and Leadership Team on what to
                expect when becoming a Spavia franchise partner. This is where
                the journey begins — grounded in vision, passion, and clarity.
              </p>
            </motion.div>
          </div>

          {/* 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                On-Site Operations Training
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Hands-on training for you and your team. Learn systems,
                procedures, and guest engagement in a live spa environment to
                ensure confidence on day one.
              </p>
            </motion.div>
            <motion.img
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              src="/training-and-support/image2.jpg"
              alt="On-Site Training"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.img
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              src="/training-and-support/image3.jpg"
              alt="Spa Services Training"
              className="rounded-xl shadow-lg"
            />
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">Spa Services Training</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                A three-step process designed to create confident, consistent
                specialists:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700">
                <li>Online e-learning introduction to protocols and systems</li>
                <li>Deep dives with Spavia Trainers</li>
                <li>
                  Hands-on training to ensure excellence in every guest
                  experience
                </li>
              </ol>
            </motion.div>
          </div>

          {/* 4 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                E-Learning – Spavia University
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Access training 24/7 with our e-learning LMS suite. Includes
                video, text, quizzes, and reporting to keep your team engaged
                and accountable.
              </p>
            </motion.div>
            <motion.img
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              src="/training-and-support/image4.jpg"
              alt="E-Learning"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* 5 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.img
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              src="/training-and-support/image5.jpg"
              alt="Classroom Training"
              className="rounded-xl shadow-lg"
            />
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                Classroom Training – Denver, CO
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                New owners meet the Spavia team and undergo in-depth training
                covering Operations, Marketing, Economics, Spa Services, and
                Systems.
              </p>
              <h3 className="text-xl font-semibold mb-2">
                Grand Opening Training
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Marketing, POS, and over 15 guides to prepare you for a
                successful launch.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Commitment */}
      <section className="snap-start py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Support Commitment</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-gray-50 rounded-xl shadow"
            >
              <h3 className="font-semibold mb-2">Team of Experts</h3>
              <p className="text-gray-700 text-sm">
                Over 120 years of combined experience. Seasoned owners,
                therapists, and estheticians guide and inspire you.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6 bg-gray-50 rounded-xl shadow"
            >
              <h3 className="font-semibold mb-2">Culture of Innovation</h3>
              <p className="text-gray-700 text-sm">
                Creativity + data = smarter growth. We constantly test and
                evolve with the industry.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="p-6 bg-gray-50 rounded-xl shadow"
            >
              <h3 className="font-semibold mb-2">World Class Partners</h3>
              <p className="text-gray-700 text-sm">
                From marketing agencies to skincare vendors, we only work with
                the best so you can thrive.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="p-6 bg-gray-50 rounded-xl shadow"
            >
              <h3 className="font-semibold mb-2">Every Step of the Way</h3>
              <p className="text-gray-700 text-sm">
                Our national team stands with you from discovery day to grand
                opening and beyond.
              </p>
            </motion.div>
          </div>
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
