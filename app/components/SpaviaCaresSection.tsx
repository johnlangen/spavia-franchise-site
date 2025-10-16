"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { themes } from "../themeConfig";
import Link from "next/link";


const stories = [
  {
    img: "/spavia-cares/3.png",
    text:
      "Spavia proudly partners with FarmHouse Fresh, whose award-winning skincare is matched by their philanthropic mission of rescuing neglected animals and funding their care through every product purchased.",
  },
  {
    img: "/spavia-cares/4.png",
    text:
      "For over 15 years, Spavia has partnered with Pure Fiji as our signature lotion line, celebrating not only their exceptional products but also their philanthropy—supporting the people of Fiji and the children of the Fijian school.",
  },
  {
    img: "/spavia-cares/2.png",
    text:
      "For its 20th anniversary, Spavia partnered with IMAGE Skincare to launch a custom Anniversary Facial and donated $25 from each treatment to the national charity Blessings in a Backpack.",
  },
  {
    img: "/spavia-cares/1.png",
    text:
      "Every September, in honor of our anniversary month, Spavia Cares unites all locations to support local charities—each choosing a cause that matters most to their community.",
  },
];

export default function SpaviaCaresSection() {
  const { theme } = useTheme();
  const themeColor = theme ? themes[theme].color : "#C2A878";

  return (
    <section
      className="py-20 text-white"
      style={{ backgroundColor: themeColor }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Logo + Heading */}
        <div className="text-center mb-12">
          <div className="w-[280px] h-[80px] mx-auto mb-6 relative">
            <Image
              src="/spavia-cares/logo.png"
              alt="Spavia Cares"
              fill
              className="object-contain"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold">
            Spavia Cares – Giving Back to Our Communities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Annual Impact Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 border border-white/30 rounded-lg p-6"
          >
            <h3 className="text-xl font-bold mb-4">Annual Impact</h3>
            <p className="leading-relaxed text-xs sm:text-sm md:text-base">
              At Spavia, it is important to give back to our communities and
              help others.
              <br />
              <br />
              It is core to our values and mission statement as a company.
              <br />
              <br />
              Our owners give back year-round, and every September—our
              anniversary month—all locations join together in a focused effort
              to support the communities they serve.
            </p>
          </motion.div>

          {/* Flip Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Mobile hint */}
            <div className="col-span-2 md:hidden text-center mb-2">
              <p className="text-sm text-white/90 italic">
                👉 Tap a card to learn more
              </p>
            </div>

            {stories.map((story, i) => (
              <div
                key={i}
                className="group relative w-full h-48 md:h-56 [perspective:1000px]"
              >
                <div
                  tabIndex={0}
                  className="relative w-full h-full transition-transform duration-700 
                             [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] 
                             md:cursor-pointer will-change-transform"
                  onClick={(e) =>
                    (e.currentTarget.style.transform =
                      e.currentTarget.style.transform === "rotateY(180deg)"
                        ? "rotateY(0deg)"
                        : "rotateY(180deg)")
                  }
                >
                  {/* Front (Image) */}
                  <div
                    className="absolute inset-0 [backface-visibility:hidden]"
                    style={{
                      WebkitBackfaceVisibility: "hidden",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <Image
                      src={story.img}
                      alt={`Spavia Cares ${i + 1}`}
                      fill
                      className="object-cover rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Back (Text) */}
                  <div
                    className="absolute inset-0 bg-white text-gray-800 p-4 rounded-lg 
                               [transform:rotateY(180deg)] [backface-visibility:hidden] 
                               flex items-start text-xs sm:text-sm md:text-base 
                               overflow-y-auto"
                    style={{
                      WebkitBackfaceVisibility: "hidden",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <p>{story.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Closing Statement */}
        <div className="text-center mt-12 max-w-3xl mx-auto">
          <p className="italic text-xs sm:text-sm md:text-lg">
            Spavia isn’t just about wellness inside the spa—{" "}
            <span className="font-semibold">
              we’re dedicated to uplifting the communities we serve.
            </span>
          </p>
        </div>

        <div className="mt-6 text-center">
          <Link href="/who-we-are" className="text-white font-medium underline hover:text-gray-200">
            Learn more about our founders and team →
          </Link>
        </div>

      </div>
    </section>
  );
}
