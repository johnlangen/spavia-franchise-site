"use client";

import { motion } from "framer-motion";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { ThemeProvider } from "./ThemeProvider";
import AwardsSection from "./AwardsSection";
import Link from "next/link";
import ActiveCampaignForm from "./ActiveCampaignForm";

export default function GetStartedContent() {
  return (
    <ThemeProvider>
      <main className="bg-black text-white flex flex-col">
        <NavBar />

        {/* HERO + FORM */}
        <section className="flex flex-col items-center justify-start px-6 pt-24 pb-20">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-4 max-w-4xl leading-tight"
          >
            Get Started With Spavia – Your Spa Franchise Opportunity
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl font-semibold text-center text-[#C2A878] mb-6"
          >
            Build your future in the $6.3 Trillion wellness industry
          </motion.h2>

          {/* Intro paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-300 text-center max-w-2xl mb-10 leading-relaxed"
          >
            Let’s discuss the benefits of bringing a resort-like spa experience to
            your neighborhood. Fill out the form below to begin your franchise
            journey. Learn more about our{" "}
            <Link
              href="/steps-to-ownership"
              className="text-[#C2A878] underline hover:text-[#b09466]"
            >
              Steps to Ownership
            </Link>{" "}
            process.
          </motion.p>

          {/* Microcopy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[#C2A878] text-sm tracking-wide text-center mb-1"
          >
            Request Your Spavia Franchise Information Kit
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-400 text-xs text-center mb-8"
          >
            A Spavia representative will contact you within 24–48 hours.
          </motion.p>

          {/* FORM CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="
              bg-black border border-gray-700 rounded-2xl shadow-2xl 
              p-10 max-w-2xl w-full
              backdrop-blur-sm relative
            "
          >

            {/* Small, clean subtitle */}
            <p className="text-center text-gray-400 mb-6 text-sm">
              Complete the form below to receive your Spavia Franchise Information Kit.
            </p>

            {/* ActiveCampaign Form */}
            <div className="bg-white p-6 rounded-md shadow-sm">
              <ActiveCampaignForm />
            </div>
          </motion.div>

        </section>

        {/* AWARDS */}
        <section className="bg-gray-50">
          <AwardsSection />
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  );
}
