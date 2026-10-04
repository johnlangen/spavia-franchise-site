"use client";

import { useTheme } from "./ThemeProvider";
import { themes } from "../themeConfig";
import Button from "./Button";

const steps = [
  {
    title: "Intro Call",
    description:
      "We want to get to know you! A one-on-one call with Alisa Anderson, our VP of Franchise Development, to learn your goals and answer your first questions.",
    button: "Schedule a Call",
  },
  {
    title: "Brand Overview",
    description:
      "We focus on the Spavia difference: our guest experience, our culture, and our four signature designs.",
  },
  {
    title: "FDD Review",
    description:
      "You receive the Franchise Disclosure Document, and we walk through it together and answer your questions.",
  },
  {
    title: "Market & Territory",
    description:
      "We look at your market together and review our Support Systems, Marketing, Operations, and Economics.",
  },
  {
    title: "Validation",
    description:
      "We connect you with current Spavia franchise partners so you can hear what ownership is really like.",
  },
  {
    title: "Meet the Team Day",
    description:
      "Join us for two days in Denver, Colorado. You will hear from key team members and have 1:1 time with our Founders and Executive Team.",
  },
  {
    title: "Franchise Agreement",
    description:
      "Franchise agreement delivered & signed. Welcome to the Spavia family.",
  },
];

export default function ProcessSection() {
  const { theme } = useTheme();
  const themeColor = theme ? themes[theme].color : "#C2A878"; // fallback bronze

  return (
    <section className="py-12 md:py-16 bg-white" aria-labelledby="ownership-process-heading">
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <h2 id="ownership-process-heading" className="text-3xl font-bold text-center mb-8 text-gray-900">
          The Franchise Ownership Process
        </h2>

        {/* Timeline */}
        <ol
          role="list"
          className="relative ml-4 border-l-2 space-y-5"
          style={{ borderColor: themeColor }}
        >
          {steps.map((step, idx) => (
            <li key={step.title} className="relative pl-8 md:pl-10">
              {/* Circle number */}
              <div
                aria-hidden="true"
                className="absolute top-4 left-[-17px] w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                style={{ backgroundColor: themeColor }}
              >
                {idx + 1}
              </div>

              {/* Card */}
              <div className="bg-white p-4 md:p-5 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-1 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
                {step.button && (
                  <a
                    href="/get-started"
                    className="inline-block mt-4"
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

              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
