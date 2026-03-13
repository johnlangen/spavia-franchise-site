"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Katelyn B.",
    location: "Centennial, CO",
    text: "Every service I have ever gotten here has been amazing! So relaxing and luxurious. The staff are all so kind and knowledgeable. I always leave feeling rejuvenated.",
    service: "Massage & Facial",
  },
  {
    name: "Jeri L.",
    location: "Centennial, CO",
    text: "Best spa in Denver! Wonderful atmosphere, highly skilled therapists, and always a perfect experience. I've been a member for years and will never go anywhere else.",
    service: "Massage Therapy",
  },
  {
    name: "Allie P.",
    location: "Centennial, CO",
    text: "Absolutely love Spavia! The facials are incredible and my skin has never looked better. The team truly cares about the guest experience from the moment you walk in.",
    service: "Facial & Skin Care",
  },
  {
    name: "Michelle H.",
    location: "Centennial, CO",
    text: "I had the most amazing deep tissue massage. My therapist listened to exactly what I needed and the pressure was perfect. The spa itself is beautiful — so calming and clean.",
    service: "Deep Tissue Massage",
  },
  {
    name: "Lisa M.",
    location: "Centennial, CO",
    text: "From the warm greeting at the front desk to the incredible body treatment, everything was five-star. Spavia has set the bar for what a day spa experience should be.",
    service: "Body Treatment",
  },
  {
    name: "Sarah K.",
    location: "Centennial, CO",
    text: "Spavia is my go-to for self care. The membership is such great value and I love that I can try different services. Every therapist I've had has been outstanding.",
    service: "Spa Membership",
  },
];

export default function GuestTestimonialsSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12"
        >
          What Our Guests Are Saying
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100"
            >
              <div className="text-[#C2A878] text-4xl font-serif leading-none mb-3">
                &ldquo;
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {review.text}
              </p>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#C2A878] text-[#C2A878]"
                  />
                ))}
              </div>
              <p className="font-semibold text-gray-900 text-sm">
                {review.name}
              </p>
              <p className="text-gray-500 text-xs">
                {review.service} · {review.location}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Second row — hidden on mobile */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mt-6">
          {reviews.slice(3, 6).map((review, idx) => (
            <motion.div
              key={idx + 3}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100"
            >
              <div className="text-[#C2A878] text-4xl font-serif leading-none mb-3">
                &ldquo;
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {review.text}
              </p>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#C2A878] text-[#C2A878]"
                  />
                ))}
              </div>
              <p className="font-semibold text-gray-900 text-sm">
                {review.name}
              </p>
              <p className="text-gray-500 text-xs">
                {review.service} · {review.location}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="text-gray-500 text-sm text-center mt-10 max-w-2xl mx-auto leading-relaxed">
          Spavia day spa guests consistently rate their experiences 4.7+ stars
          across massage, facial, and body treatment services. Strong guest
          satisfaction translates directly to membership retention, repeat visits,
          and stable franchise revenue.
        </p>
      </div>
    </section>
  );
}
