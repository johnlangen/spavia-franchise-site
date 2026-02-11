"use client";

import NavBar from "./NavBar";
import Breadcrumbs from "./Breadcrumbs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  DollarSign,
  CreditCard,
  BarChart,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useMemo, useState } from "react";
import usa from "@svg-maps/usa";
import AwardsSection from "./AwardsSection";
import Footer from "./Footer";
import Link from "next/link";

const financials = [
  { label: "Net Worth", value: "$500,000", icon: DollarSign },
  { label: "Liquid Capital", value: "$200,000", icon: CreditCard },
  {
    label: "Estimated Initial Investment",
    value: "$496,450 – $795,950",
    icon: BarChart,
  },
];

const limitedMarkets = [
  "Colorado",
  "North Dakota",
  "South Dakota",
  "Alaska",
  "Hawaii",
  "Maryland",
  "New Jersey",
  "Rhode Island",
];

const galleryImages = [
  "/your-spavia/image1.jpg",
  "/your-spavia/image2.jpg",
  "/your-spavia/image3.jpg",
];

interface Location {
  id: string;
  name?: string;
  path: string;
}

export default function YourSpaviaContent() {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const limitedSet = useMemo(() => new Set(limitedMarkets), []);
  const gold = "#C2A878";
  const limited = "#e5e5e5";
  const hover = "#000000";

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <main className="text-gray-900">
      <NavBar />
        <Breadcrumbs items={[{ label: "Your Spavia" }]} />

      {/* Hero with Video */}
      <section className="relative overflow-hidden pt-40 pb-20 text-center text-white px-6">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6"
          >
            Your Spavia
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl mx-auto text-xl sm:text-2xl md:text-3xl font-semibold leading-relaxed"
          >
            Financial Success Through Wellness
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="max-w-3xl mx-auto text-lg leading-relaxed mt-4"
          >
            At Spavia, your investment goes beyond profitability — it’s about
            bringing an oasis of relaxation and rejuvenation to your community.
          </motion.p>
        </div>
      </section>

      {/* Financial Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Financial Requirements
          </h2>
        </div>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          {financials.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-xl shadow-lg border border-gray-200 bg-gradient-to-b from-white to-gray-50 hover:shadow-xl hover:-translate-y-1 transition transform"
              >
                <Icon className="w-12 h-12 text-[#C2A878] mx-auto mb-4" />
                <p className="text-3xl font-bold text-[#C2A878] mb-2">
                  {item.value}
                </p>
                <p className="text-gray-700">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Economics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#C2A878]">
              Recurring Revenue
            </h3>
            <p>
              Recurring revenue is the cornerstone of a financially successful
              franchise. Membership accounts for over 50% of revenue with a
              fiercely loyal following.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#C2A878]">
              Diversity of Revenue
            </h3>
            <p>
              Revenue generated from multiple streams: massage, skin care,
              retail, body treatments, beauty, and gift cards.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#C2A878]">
              Advanced Pricing Strategy
            </h3>
            <p>
              Financial modeling maximizes revenue through yield management,
              market tiers, and membership tiers.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Size */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Spa Industry Size</h2>
          <ul className="space-y-3 text-lg">
            <li>
              Wellness is on the rise — Global wellness market expected to reach{" "}
              <span className="font-semibold">$8.5 trillion by 2027</span>
            </li>
            <li>22% of wellness growth is attributed to the spa segment</li>
            <li>
              Global day spa market expected to reach{" "}
              <span className="font-semibold">$57B by 2033</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Location with JLL */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Finding Your Location</h2>
          <p className="max-w-3xl mx-auto mb-8">
            Finding a great location for your Spavia requires collaboration
            between the franchise partner, Spavia National, and our real estate
            partner, JLL.
          </p>
          <Image
            src="/your-spavia/JLL-logo.png"
            alt="JLL Logo"
            width={200}
            height={90}
            className="mx-auto"
          />
        </div>
      </section>

      {/* Image Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {galleryImages.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={`Spa interior ${i + 1}`}
                width={600}
                height={400}
                className="rounded-lg shadow-md object-cover h-[400px] w-full"
              />
            ))}
          </div>

          <div className="md:hidden relative w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <Image
                  src={galleryImages[currentImageIndex]}
                  alt={`Spa interior ${currentImageIndex + 1}`}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md object-cover w-full"
                />
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex justify-between items-center px-4 absolute inset-x-0 inset-y-0">
              <button
                onClick={prevImage}
                className="p-2 rounded-full bg-white/70 backdrop-blur-sm text-gray-800 hover:bg-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="p-2 rounded-full bg-white/70 backdrop-blur-sm text-gray-800 hover:bg-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Available Markets */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Available Markets</h2>
        <p className="mb-6 text-gray-700">
          Click your state for additional territory information.
        </p>

        {/* Legend */}
        <div className="flex justify-center items-center space-x-4 mb-8">
          <div className="flex items-center space-x-2">
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: gold }}
            ></span>
            <span className="text-sm font-semibold">Available</span>
          </div>
          <div className="flex items-center space-x-2">
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: limited }}
            ></span>
            <span className="text-sm font-semibold">Limited Market</span>
          </div>
        </div>

        <div className="relative flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={usa.viewBox}
            className="w-[960px] max-w-full"
            role="img"
            aria-label="US map of available markets"
          >
            <title>US map of available markets</title>
            {usa.locations.map((loc: Location) => {
              const name = (loc.name || loc.id || "").toString();
              const isLimited = limitedSet.has(name);
              const isHover = hoveredState === name;
              const fill = isHover ? hover : isLimited ? limited : gold;

              return (
                <path
                  key={loc.id}
                  d={loc.path}
                  fill={fill}
                  stroke="#FFFFFF"
                  strokeWidth={1}
                  className="cursor-pointer transition-colors duration-200"
                  onMouseEnter={() => setHoveredState(name)}
                  onMouseLeave={() => setHoveredState(null)}
                  onClick={() => setSelectedState(name)}
                  aria-label={name}
                />
              );
            })}
          </svg>

          {hoveredState && (
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded shadow">
              {hoveredState}
            </div>
          )}
        </div>

        <p className="mt-6 text-sm text-gray-600">
          Limited markets: {limitedMarkets.join(", ")}.
        </p>
      </section>

      {/* Modal */}
      {selectedState && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div
            className="bg-white max-w-lg w-full p-6 rounded-lg shadow-xl relative"
            role="dialog"
            aria-modal="true"
            aria-labelledby="stateDialogTitle"
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              onClick={() => setSelectedState(null)}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <h2 id="stateDialogTitle" className="text-xl font-bold mb-3">
              {selectedState}
            </h2>
            <p className="mb-4 text-gray-700">
              Thank you for your interest in Spavia! We’re excited to share that
              we’re looking to grow in your state.
              <br />
              <br />
              To learn more, simply complete the contact form by clicking the
              button below, and our team will be in touch with you shortly.
            </p>
            <a
              href="/get-started"
              className="inline-block bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}

      {/* Awards */}
      <section className="snap-start bg-gray-50">
        <AwardsSection />
      </section>

      {/* Next Page Link */}
      <div className="bg-black text-white py-10 text-center">
        <Link
          href="/steps-to-ownership"
          className="inline-block bg-[#C2A878] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b09466] transition"
        >
          Next: Steps to Ownership →
        </Link>
      </div>

      <Footer />
    </main>
  );
}
