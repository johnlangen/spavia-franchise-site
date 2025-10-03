"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FloatingButton() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }} // ✅ smooth, no spring jitter
      className="hidden md:flex fixed right-0 top-[12.5%] z-50"
    >
      <Link
        href="/get-started"
        className="bg-[#C2A878] text-white font-semibold 
                   py-3 px-6 rounded-l-full shadow-lg 
                   hover:bg-[#b09466] transition"
      >
        Get Started
      </Link>
    </motion.div>
  );
}
