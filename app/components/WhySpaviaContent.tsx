"use client";

import NavBar from "./NavBar";
import AwardsSection from "./AwardsSection";
import Footer from "./Footer";
import Link from "next/link";
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
  const [active, setActive] = useState(0);

  return (
    <main className="text-gray-900 md:h-screen md:overflow-y-scroll md:snap-y md:snap-mandatory">
      <NavBar />

      {/* Hero */}
      <section className="snap-start bg-gradient-to-b from-[#C2A878] to-[#e3d6b7] pt-40 pb-24 text-center text-white px-4 sm:px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Spavia</h1>
        <p className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed font-sans">
          Redefining Spa Excellence with Purpose and Passion. Spavia provides
          multiple streams of revenue and a proven system for success.
        </p>
      </section>

      {/* Expertise Intro */}
      <section className="snap-start py-20 bg-white px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Expertise That Sets Us Apart</h2>
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

      {/* Multiple Streams of Revenue - Interactive */}
      <section className="snap-start py-20 bg-gray-50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Multiple Streams of Revenue
          </h2>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Number selector */}
            <div className="flex md:flex-col gap-4 justify-center md:justify-start">
              {revenueStreams.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-12 h-12 rounded-full font-bold shadow-md flex items-center justify-center transition
                    ${
                      active === i
                        ? "bg-[#C2A878] text-white"
                        : "bg-white text-gray-800 hover:bg-gray-100"
                    }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </button>
              ))}
            </div>

            {/* Active content */}
            <div className="flex-1 bg-white rounded-xl shadow-md p-6 transition">
              <h3 className="text-xl font-bold mb-4">
                {revenueStreams[active].title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                {revenueStreams[active].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exceptional Guest Experience */}
      <section className="snap-start py-20 bg-white px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/why-spavia/image1.png"
            alt="Exceptional Guest Experience"
            className="rounded-xl shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Exceptional Guest Experience</h2>
            <p className="text-gray-700 leading-relaxed font-sans">
              Our guests inspire us. At Spavia, we are focused on creating an
              exceptional experience where they can turn off the stresses of
              everyday life...
            </p>
          </div>
        </div>
      </section>

      {/* Proven Concept */}
      <section className="snap-start py-20 bg-gray-50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Proven Concept</h2>
            <p className="text-gray-700 leading-relaxed font-sans mb-6">
              Spavia offers top-notch training and support. The process is
              in-depth and we will give you all the tools you need to succeed...
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm">
              <li>World-class applicant tracking system</li>
              <li>100% cloud based</li>
              <li>Fully integrated marketing and POS system</li>
              <li>Robust Spavia app for online scheduling</li>
              <li>Coordinated team member management</li>
              <li>Integrated payroll system</li>
              <li>Effortless inventory management</li>
              <li>Instant analytics with over 150 reports</li>
              <li>Guest capture technology with AI</li>
            </ul>
          </div>
          <img
            src="/why-spavia/image2.png"
            alt="Proven Concept"
            className="rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* What Our Guests Say */}
      <section className="snap-start py-20 bg-white text-center px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What Our Guests Say</h2>
          <p className="text-gray-700 leading-relaxed font-sans mb-8">
            The greatest rewards come when you give of yourself...
          </p>
          <video
            src="/why-spavia/video1.mp4"
            controls
            className="rounded-xl shadow-md w-full max-w-3xl mx-auto"
          />
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
