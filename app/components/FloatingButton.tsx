"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { themes } from "../themeConfig";

const MotionLink = motion(Link);

export default function FloatingButton() {
  const { theme } = useTheme();
  const themeColor = theme ? themes[theme].color : "#C2A878";
  
  const darkenColor = (hex: string, percent: number) => {
    hex = hex.replace(/^#/, '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const d = 100 - percent;
    return `#${((d * r / 100) << 0).toString(16).padStart(2, '0')}${((d * g / 100) << 0).toString(16).padStart(2, '0')}${((d * b / 100) << 0).toString(16).padStart(2, '0')}`;
  };

  const hoverColor = darkenColor(themeColor, 15);

  return (
    <MotionLink
      href="/get-started"
      className="hidden md:flex fixed right-0 top-[12.5%] z-50
                 text-white font-semibold py-3 px-6 rounded-l-full 
                 shadow-lg transition-colors"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ backgroundColor: themeColor }}
      whileHover={{ backgroundColor: hoverColor }}
    >
      Get Started
    </MotionLink>
  );
}