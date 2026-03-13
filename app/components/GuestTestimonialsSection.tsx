"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Jessica E.",
    location: "Sparta, NJ",
    text: "I was immediately greeted and offered a tour of the spa. The establishment was very pleasant and I felt quite at ease. My therapist was truly excellent — she addressed every area with remarkable skill. I felt fantastic afterward, like a completely new person. I would rate this with ten stars.",
    service: "Full Body Massage",
  },
  {
    name: "Rosemary J.",
    location: "Reno, NV",
    text: "This was the most amazing experience of luxury I've ever had. The creams and facial massage were not just relaxing, but heavenly. I absolutely recommend Spavia!",
    service: "Facial & Skin Care",
  },
  {
    name: "Lina S.",
    location: "Naples, FL",
    text: "A great spa with attention to every detail. Everything was super clean and all the associates were very well trained and welcoming. I was given one of the best massages — I almost fell asleep. I will definitely be back.",
    service: "Massage Therapy",
  },
  {
    name: "Marie S.",
    location: "Sparta, NJ",
    text: "Love the membership they offer! It helps me be more consistent in my self care. I have received wonderful deep tissue massages that have helped loosen chronic muscle pain in my neck and shoulders. The front desk staff are very friendly and the facilities are always clean.",
    service: "Deep Tissue Massage",
  },
  {
    name: "Maddie C.",
    location: "Reno, NV",
    text: "The environment was so relaxing and I felt so taken care of. I had a Hot Stone Massage and a Facial with a Warmed-Oil Scalp treatment. I left feeling so relaxed and pampered. I will definitely be returning!",
    service: "Hot Stone Massage",
  },
  {
    name: "Craig M.",
    location: "Naples, FL",
    text: "My wife said her massage was fabulous! Mine worked out all the knots and I left feeling great. The massage was exactly what we requested. We will be going back for another couples massage!",
    service: "Couples Massage",
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
          Spavia day spa guests consistently rate their experiences 4.8+ stars
          across massage, facial, and body treatment services. Strong guest
          satisfaction translates directly to membership retention, repeat visits,
          and stable franchise revenue.
        </p>
      </div>
    </section>
  );
}
