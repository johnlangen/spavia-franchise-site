"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MotionLink = motion(Link);

// Routes where a "Get Started" CTA is redundant or wrong (the form page
// itself, and the post-submit thank-you page).
const HIDDEN_ROUTES = ["/get-started", "/thank-you"];

export default function FloatingButton() {
  const pathname = usePathname();
  const hidden = HIDDEN_ROUTES.includes(pathname);

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
  }, [pathname]);

  /** -----------------------------
   * MOBILE VISIBILITY (scroll-based)
   * ----------------------------- */
  const [showMobile, setShowMobile] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    // Pages without a hero (every inner page) have nothing to scroll past —
    // show the mobile CTA immediately instead of leaving it hidden.
    if (!hero) {
      setShowMobile(true);
      return;
    }

    const onScroll = () => {
      const heroBottom = hero.getBoundingClientRect().bottom;
      setShowMobile(heroBottom < 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once after mount

    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (hidden) return null;

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
          style={{ backgroundColor: "#C2A878" }}
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
          className="md:hidden fixed left-0 right-0 z-50 px-4"
          style={{
            bottom: "calc(1rem + env(safe-area-inset-bottom))",
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Link
            href="/get-started"
            className="block w-full text-center rounded-xl py-4 font-semibold
                       shadow-xl text-white bg-[#C2A878]"
          >
            Get Started
          </Link>
        </motion.div>
      )}
    </>
  );
}
