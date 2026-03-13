"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Paul",
    role: "Spavia Owner, Chicago, IL",
    text: "As a Spavia owner, what fills my cup is seeing the daily growth of team members as they challenge themselves and helping to guide them along. Each day brings a new discovery for someone, as they realize that by digging deep, they learn, grow, and earn guest loyalty by giving their best effort.",
    image: "/our-franchisees/image4.jpg",
  },
  {
    name: "Kari",
    role: "Spavia Owner, Centennial, CO",
    text: "I chose Spavia because it is more than just a business — it is a network of passionate, caring individuals that have come together to make a difference in the lives of our guests and team.",
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

export default function FranchiseeTestimonialsSection() {
  const [index, setIndex] = useState(0);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % testimonials.length),
    []
  );
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
          What Our Franchise Partners Are Saying
        </h2>

        <div className="relative h-[380px] md:h-[320px]">
          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 hover:text-[#C2A878] transition cursor-pointer z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={40} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-14 md:px-16"
            >
              <Image
                src={testimonials[index].image}
                alt={testimonials[index].name}
                width={100}
                height={100}
                className="w-[100px] h-[100px] rounded-full object-cover shadow-lg mb-5 border-2 border-[#C2A878]/30"
              />
              <p className="text-gray-700 italic text-base md:text-lg leading-relaxed mb-4 max-w-2xl">
                &ldquo;{testimonials[index].text}&rdquo;
              </p>
              <p className="text-[#C2A878] font-semibold">
                — {testimonials[index].name}, {testimonials[index].role}
              </p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-300 hover:text-[#C2A878] transition cursor-pointer z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={40} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition cursor-pointer ${
                i === index ? "bg-[#C2A878]" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <p className="text-gray-400 text-xs text-center mt-10 max-w-xl mx-auto">
          Spavia franchise owners come from diverse professional backgrounds — from
          banking and corporate careers to lifelong wellness enthusiasts — and find
          success through Spavia&apos;s proven systems and hands-on support.
        </p>
      </div>
    </section>
  );
}
