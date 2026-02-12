"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { themes } from "../themeConfig";
import Button from "./Button";

const steps = [
  {
    title: "Introductory Call",
    description:
      "We want to get to know you! Review brand history and answer any initial questions.",
    button: "Schedule a Call",
  },
  {
    title: "Discovery 1",
    description:
      "We will focus on the Spavia difference, culture and design. You will receive the Franchise Disclosure Document.",
  },
  {
    title: "Discovery 2",
    description:
      "We will review our Support Systems, Marketing, Operations, Economics.",
  },
  {
    title: "Meet Our Franchise Partners and Executive Team",
    description:
      "Speak with our Franchise partners and meet our Executive team.",
  },
  {
    title: "Meet the Team Day",
    description:
      "Join us for two days in Denver, Colorado. You will hear from key team members and have 1:1 time with our Founders and Executive Team.",
  },
  {
    title: "Franchise Awarded",
    description:
      "Franchise agreements delivered & signed. Welcome to the Spavia family.",
  },
];

export default function ProcessSection() {
  const { theme } = useTheme();
  const themeColor = theme ? themes[theme].color : "#C2A878"; // fallback bronze

  return (
    <section className="py-26 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          The Franchise Ownership Process
        </h2>

        {/* Timeline */}
        <div
          className="relative border-l-2"
          style={{ borderColor: themeColor }}
        >
          {steps.map((step, idx) => (
            <div key={idx} className="relative mb-12 pl-12">
              {/* Circle number */}
              <div
                className="absolute top-0 left-[-20px] w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-md"
                style={{ backgroundColor: themeColor }}
              >
                {idx + 1}
              </div>

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-700 mb-4">{step.description}</p>
                {step.button && (
                  <a
                    href="https://calendly.com/tyler-spaviadayspa/new-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="primary"
                      style={{
                        backgroundColor: themeColor,
                        borderColor: themeColor,
                      }}
                    >
                      {step.button}
                    </Button>
                  </a>
                )}

              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
