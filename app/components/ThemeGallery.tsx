"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { themes, defaultImage } from "../themeConfig";

export default function ThemeGallery() {
  const { theme } = useTheme();

  // If no theme selected → show single default image (wide rectangle)
  if (!theme) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12">
        <motion.div
          key="default"
          layout
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={defaultImage}
            alt="Default spa design"
            width={1200}
            height={600}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    );
  }

  const themeData = themes[theme];
  if (!themeData) {
    return (
      <p className="text-center text-red-500">
        Selected theme not found in config.
      </p>
    );
  }

  // Theme selected → show grid of square images
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {themeData.images.map((img, idx) => (
            <motion.div
              key={idx}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative w-full aspect-square"
            >
              <Image
                src={img}
                alt={`${themeData.name} ${idx + 1}`}
                fill
                className="rounded-lg shadow object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
