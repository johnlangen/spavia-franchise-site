"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { themes } from "../themeConfig";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ThemeGallery() {
  const { theme } = useTheme();
  const [imageIndex, setImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const themeData = theme ? themes[theme] : null;
  const images = themeData?.images ?? [];
  const total = images.length;

  // Reset index when theme changes
  useEffect(() => {
    setImageIndex(0);
  }, [theme]);

  // Preload all theme images
  useEffect(() => {
    const allImages = Object.values(themes).flatMap((t) => t.images);
    allImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  const goTo = useCallback(
    (newIndex: number, dir: number) => {
      setDirection(dir);
      setImageIndex(((newIndex % total) + total) % total);
    },
    [total]
  );

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goTo(imageIndex + 1, 1);
      else goTo(imageIndex - 1, -1);
    }
    setTouchStart(null);
  };

  if (!themeData) return null;

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Description */}
      <p className="text-center text-gray-600 mb-6 italic">
        {themeData.description}
      </p>

      {/* Main image viewer */}
      <div
        className="relative w-full aspect-[3/2] overflow-hidden rounded-xl shadow-lg bg-gray-100"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={`${theme}-${imageIndex}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={images[imageIndex]}
              alt={`${themeData.name} design ${imageIndex + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Arrow buttons */}
        <button
          onClick={() => goTo(imageIndex - 1, -1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white transition shadow-md cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => goTo(imageIndex + 1, 1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white transition shadow-md cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > imageIndex ? 1 : -1)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              i === imageIndex
                ? "w-8"
                : "w-2.5 bg-gray-300 hover:bg-gray-400"
            }`}
            style={
              i === imageIndex ? { backgroundColor: themeData.color } : undefined
            }
            aria-label={`View image ${i + 1}`}
          />
        ))}
      </div>

      {/* Image counter */}
      <p className="text-center text-sm text-gray-500 mt-2">
        {imageIndex + 1} of {total}
      </p>
    </div>
  );
}
