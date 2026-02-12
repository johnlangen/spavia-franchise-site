"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { themes, defaultImage, ThemeKey } from "../themeConfig";

export default function ThemeGallery() {
  const { theme } = useTheme();

  // Preload all theme images in the background so switching is instant
  useEffect(() => {
    const allImages = Object.values(themes).flatMap((t) => t.images);
    allImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  // If no theme selected → show single default image
  if (!theme) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Image
          src={defaultImage}
          alt="Default spa design"
          width={1200}
          height={600}
          className="rounded-lg shadow-lg w-full h-auto object-cover"
          priority
        />
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

  // Theme selected → 3-column grid on all screen sizes
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-3 gap-3 md:gap-6"
        >
          {themeData.images.map((img, idx) => (
            <div
              key={idx}
              className="relative w-full aspect-square"
            >
              <Image
                src={img}
                alt={`${themeData.name} ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 33vw, 280px"
                className="rounded-lg shadow object-cover"
              />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
