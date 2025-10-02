"use client";

import { motion } from "framer-motion";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { ThemeProvider } from "./ThemeProvider";

export default function GetStartedContent() {
  return (
    <ThemeProvider>
      <main className="bg-black text-white min-h-screen flex flex-col">
        <NavBar />

        {/* Hero Section */}
        <section className="flex-grow flex flex-col items-center justify-center px-6 py-20">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold text-center mb-6"
          >
            GET STARTED WITH SPAVIA
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-300 text-center max-w-2xl mb-12 leading-relaxed"
          >
            Let’s discuss the benefits of bringing a resort-like spa experience to your
            neighborhood. Fill out the form below to begin your franchise journey.
          </motion.p>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="bg-black border border-gray-700 rounded-xl shadow-lg p-10 max-w-md w-full"
          >
            <h2 className="text-2xl font-bold text-center mb-4">
              Start Your Spavia Journey
            </h2>
            <p className="text-gray-400 text-center text-sm mb-6">
              Complete the form below to learn more about the Spavia Day Spa franchise opportunity.
            </p>
            <p className="text-center text-[#C2A878] font-medium mb-6">Step 1 of 3</p>

            {/* Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C2A878]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C2A878]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C2A878]"
              />
              <button
                type="submit"
                className="w-full bg-[#C2A878] text-black font-semibold py-3 rounded-md hover:bg-[#b09466] transition-colors"
              >
                Next Step
              </button>
            </form>
          </motion.div>
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  );
}
