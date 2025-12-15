"use client";

import NavBar from "./NavBar";
import Footer from "./Footer";
import { ThemeProvider } from "./ThemeProvider";
import Link from "next/link";
import Image from "next/image";

export default function ThankYouContent() {
  return (
    <ThemeProvider>
      <main className="bg-black text-white flex flex-col min-h-screen">
        <NavBar />

        <section className="flex flex-col md:flex-row items-center justify-center px-6 pt-28 pb-20 gap-12 max-w-7xl mx-auto">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/towels.jpg"  // <-- Replace with your asset path
                alt="Rolled towels"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              THANK YOU FOR REACHING OUT
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mb-12 max-w-xl">
              We’re excited to share more about Spavia’s differentiated model 
              and superior guest experience with you. We look forward to getting 
              in touch with you soon. In the meantime, head to our{" "}
              <Link href="/why-spavia" className="text-[#C2A878] underline">
                website
              </Link>{" "}
              to discover more about Spavia, or{" "}
              <Link href="/locations" className="text-[#C2A878] underline">
                visit one of our many locations
              </Link>{" "}
              to experience a treatment for yourself.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-10">
              HERE ARE YOUR NEXT STEPS
            </h2>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

              {/* 1. Schedule a Call */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Schedule A Call</h3>
                <p className="text-gray-400 mb-4">
                  Too excited to wait for our call? Take the initiative and 
                  schedule a call by clicking the button below.
                </p>
                <Link
                  href="https://calendly.com/tyler-spaviadayspa/new-meeting"
                  target="_blank"
                  className="inline-block border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
                >
                  Schedule A Call
                </Link>
              </div>

              {/* 2. Explore the Opportunity */}
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Explore The Opportunity
                </h3>
                <p className="text-gray-400 mb-4">
                  Through presentations and calls, we’ll help you discover 
                  everything you need to know about Spavia ownership.
                </p>
              </div>

              {/* 3. Submit An Application */}
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Submit An Application
                </h3>
                <p className="text-gray-400 mb-4">
                  When you’re ready, you’ll submit an application, and we’ll 
                  guide you through the process.
                </p>
              </div>

            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  );
}
