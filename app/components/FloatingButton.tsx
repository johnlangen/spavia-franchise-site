"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

const MotionLink = motion(Link);

export default function FloatingButton() {
  // trigger re-render on theme change, but we’ll read CSS var for color
  useTheme();

  return (
    <MotionLink
      href="/get-started"
      className="hidden md:flex fixed right-0 top-[12.5%] z-50
                 text-white font-semibold py-3 px-6 rounded-l-full 
                 shadow-lg transition"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ backgroundColor: "var(--accent)" }}
      whileHover={{ scale: 1.02 }}
    >
      Get Started
    </MotionLink>
  );
}
