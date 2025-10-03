"use client";

import NavBar from "./NavBar";
import AwardsSection from "./AwardsSection";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Users,
  ClipboardCheck,
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import Footer from "./Footer";
import Image from "next/image";
import Link from "next/link"; // Make sure to import Link

const entrepreneurTraits = [
  {
    title: "Natural Leaders",
    description:
      "Individuals who possess innate leadership qualities, demonstrating the ability to guide and inspire others organically.",
    icon: Users,
  },
  {
    title: "Drive to Succeed",
    description:
      "Motivated individuals with a strong determination to achieve success who exhibit resilience, a results-oriented mindset, and a commitment to overcoming challenges.",
    icon: ClipboardCheck,
  },
  {
    title: "Passion for Spa",
    description:
      "Team members who harbor a genuine passion for the spa industry. With enthusiasm and love for the growing wellness industry.",
    icon: Heart,
  },
  {
    title: "Highly Engaged",
    description:
      "Team players who are involved within the franchise system and dedicated to contributing to the overall efficiency and effectiveness of Spavia as a whole.",
    icon: Star,
  },
];

const testimonials = [
  {
    name: "Paul",
    role: "Spavia Owner, Chicago, IL",
    text: "As a Spavia owner, what fills my cup is seeing the daily growth of team members as they challenge themselves and helping to guide them along. Each day brings a new discovery for someone, as they realize that by digging deep, they learn, grow, and earn guest loyalty by giving their best effort, which translates into an exceptional experience for their guests!",
    image: "/our-franchisees/image4.jpg",
  },
  {
    name: "Kari",
    role: "Spavia Owner, Centennial, CO",
    text: "I chose Spavia because it is more than just a business, it is a network of passionate, caring individuals that have come together to make a difference in the lives of our guests and team.",
    image: "/our-franchisees/image1.jpg",
  },
  {
    name: "Nivin",
    role: "Spavia Owner, Fredericksburg, VA",
    text: "Everything we do is about the guest experience. We say it, we do it and we firmly believe it. With this mentality, productivity increases and revenue follows.",
    image: "/our-franchisees/image2.jpg",
  },
  {
    name: "Patricia",
    role: "Spavia Owner, Orlando, FL",
    text: "The Spavia National team has a passion for what they do. I love the branding and level of knowledge that they readily share. This is especially important to me since I came from 25 years in the banking industry and was not in the spa industry before.",
    image: "/our-franchisees/image3.jpg",
  },
];

export default function OurFranchiseesContent() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[index];

  return (
    <main className="text-gray-900">
      <NavBar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#C2A878] to-[#e3d6b7] pt-40 pb-24 text-center text-white px-6 sm:px-8">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6"
        >
          Our Franchisees
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto text-lg leading-relaxed"
        >
          Passionate Entrepreneurs, Thriving Communities. At Spavia, our
          franchisees are the backbone of our brand and the key to our success.
          Each franchisee brings a unique passion for wellness and a commitment
          to creating extraordinary experiences for our guests.
        </motion.p>
      </section>

      {/* Ideal Entrepreneur */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Ideal Entrepreneur</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {entrepreneurTraits.map((trait, i) => {
              const Icon = trait.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-6 border border-white/20 rounded-lg hover:bg-white/5 transition"
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-[#C2A878]" />
                  <h3 className="text-xl font-semibold mb-2">{trait.title}</h3>
                  <p className="text-gray-300 text-sm">{trait.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Franchisee Video */}
      <section className="py-20 bg-white text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Hear From Our Franchisees</h2>
        <video
          src="/our-franchisees/video1.mp4"
          controls
          className="rounded-xl shadow-md w-full max-w-3xl mx-auto"
        />
      </section>

      {/* Testimonial Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Franchise Partners Are Saying
          </h2>

          <div className="relative h-[550px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center mx-auto max-w-3xl absolute inset-0 md:static"
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={176}
                  height={176}
                  className="rounded-full mb-6 object-cover shadow-md"
                />
                <div className="h-32 overflow-y-auto mb-6">
                  <p className="text-gray-700 italic text-lg leading-relaxed">
                    “{testimonial.text}”
                  </p>
                </div>
                <p className="font-semibold text-[#C2A878] text-lg">
                  – {testimonial.name}, {testimonial.role}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-600 hover:text-[#C2A878] transition px-2 cursor-pointer"
            >
              <ChevronLeft size={56} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-600 hover:text-[#C2A878] transition px-2 cursor-pointer"
            >
              <ChevronRight size={56} />
            </button>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-gray-50">
        <AwardsSection />
      </section>

      {/* Next Page Link */}
      <div className="bg-black text-white py-10 text-center">
        <Link
          href="/your-spavia"
          className="inline-block bg-[#C2A878] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b09466] transition"
        >
          Next: Your Spavia →
        </Link>
      </div>

      <Footer />
    </main>
  );
}