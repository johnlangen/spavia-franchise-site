"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { themes, ThemeKey } from "../themeConfig";

// Interactive design-concept explorer. Theme state is LOCAL on purpose —
// picking a concept here should not recolor the rest of the site (the old
// global selector is gone; --accent stays brand gold).
export default function DesignConcepts() {
  const [theme, setTheme] = useState<ThemeKey>("mountain");
  const active = themes[theme];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Selector pills */}
      <div
        className="flex justify-center gap-2 md:gap-3 flex-wrap mb-8"
        role="tablist"
        aria-label="Design concepts"
      >
        {(Object.keys(themes) as ThemeKey[]).map((key) => {
          const isActive = theme === key;
          return (
            <button
              key={key}
              role="tab"
              aria-selected={isActive}
              onClick={() => setTheme(key)}
              className="relative px-5 py-2.5 rounded-full font-semibold text-sm md:text-base cursor-pointer transition-colors duration-300"
              style={{ color: isActive ? "white" : "#6b6b6b" }}
            >
              {isActive && (
                <motion.span
                  layoutId="concept-pill"
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: active.color }}
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative flex items-center gap-2">
                <span
                  className="inline-block w-2.5 h-2.5 rounded-full border border-black/10"
                  style={{ backgroundColor: themes[key].color }}
                />
                {themes[key].name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Description crossfade */}
      <div className="relative h-12 mb-6">
        <AnimatePresence mode="wait">
          <motion.p
            key={theme}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-x-0 text-center text-gray-600 italic px-4"
          >
            {active.description}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Staggered image grid — re-keyed per theme so the entrance replays */}
      <motion.div
        key={theme}
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.06 } },
        }}
        className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
      >
          {active.images.map((img, idx) => (
            <motion.figure
              key={img}
              variants={{
                hidden: { opacity: 0, y: 24, scale: 0.97 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.45, ease: [0.21, 0.6, 0.35, 1] },
                },
              }}
              className="relative aspect-square overflow-hidden rounded-xl group"
            >
              <Image
                src={img}
                alt={`${active.name} design ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 320px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(to top, ${active.color}33, transparent 45%)`,
                }}
              />
            </motion.figure>
          ))}
        </motion.div>
    </div>
  );
}
