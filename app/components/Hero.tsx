"use client";

import Button from "./Button";

export default function Hero() {
  const scrollToForm = () => {
    const el = document.getElementById("franchise-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Own a Part of the $6 Trillion Wellness Industry at Spavia
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Build your legacy, be your own boss, and make a difference in your
          community
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="border border-white/30 rounded-lg p-4">
            <h3 className="text-2xl font-bold font-sans">$1,080,829</h3>
            <p className="text-sm">Average Gross Sales</p>
          </div>
          <div className="border border-white/30 rounded-lg p-4">
            <h3
              className="text-2xl font-bold"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              53%
            </h3>
            <p className="text-sm">of locations exceeded $1M</p>
          </div>
          <div className="border border-white/30 rounded-lg p-4">
            <h3 className="text-2xl font-bold font-sans">$1,940,000</h3>
            <p className="text-sm">Highest Gross Revenue</p>
          </div>
        </div>

        {/* ✅ Franchise Journey CTA → smooth scroll */}
        <div className="flex justify-center">
          <Button
            variant="primary"
            onClick={scrollToForm}
            className="hover:scale-105"
          >
            Start Your Franchise Journey
          </Button>
        </div>
      </div>
    </section>
  );
}
