"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

const MotionLink = motion(Link);

export default function FloatingButton() {
  // Trigger re-render on theme change (accent color)
  useTheme();

  /** -----------------------------
   * DESKTOP VISIBILITY (hero-based)
   * ----------------------------- */
  const [showDesktop, setShowDesktop] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      setShowDesktop(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowDesktop(!entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  /** -----------------------------
   * MOBILE VISIBILITY (scroll-based)
   * ----------------------------- */
  const [showMobile, setShowMobile] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
  
    const onScroll = () => {
      const heroBottom = hero.getBoundingClientRect().bottom;
      setShowMobile(heroBottom < 0);
    };
  
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once after mount
  
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  

  return (
    <>
      {/* =============================
          DESKTOP — RIGHT SIDE PILL
          ============================= */}
      {showDesktop && (
        <MotionLink
          href="/get-started"
          className="hidden md:flex fixed right-0 top-[12.5%] z-50
                     text-white font-semibold py-3 px-6 rounded-l-full
                     shadow-lg transition"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ backgroundColor: "var(--accent)" }}
          whileHover={{ scale: 1.03 }}
        >
          Get Started
        </MotionLink>
      )}

      {/* =============================
          MOBILE — BOTTOM CTA BAR
          ============================= */}
      {showMobile && (
        <motion.div
          className="md:hidden fixed bottom-4 left-0 right-0 z-50 px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Link
            href="#franchise-form"
            className="block w-full text-center rounded-xl py-4 font-semibold
                       shadow-xl text-white"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Get Started
          </Link>
        </motion.div>
      )}
    </>
  );
}
