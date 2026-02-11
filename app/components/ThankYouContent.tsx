"use client";

import NavBar from "./NavBar";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import { ThemeProvider } from "./ThemeProvider";
import Link from "next/link";
import Image from "next/image";

export default function ThankYouContent() {
  return (
    <ThemeProvider>
      <main className="bg-gradient-to-b from-black to-[#141414] text-white flex flex-col min-h-screen">
        <NavBar />
        <Breadcrumbs items={[{ label: "Thank You" }]} />

        <section className="flex flex-col md:flex-row items-center justify-center px-6 pt-28 pb-20 gap-12 max-w-7xl mx-auto">
          
          {/* Image — second on mobile, first on desktop */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="relative w-full h-[240px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/image2.jpg"
                alt="Spavia Thank You"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content — first on mobile */}
          <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              THANK YOU FOR REACHING OUT
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-xl mx-auto md:mx-0">
              We’re excited to share more about Spavia’s differentiated model and
              superior guest experience with you. We look forward to getting in
              touch with you soon. In the meantime, head to our{" "}
              <Link
                href="https://spaviadayspa.com"
                className="text-[#C2A878] underline"
              >
                website
              </Link>{" "}
              to discover more about Spavia, or{" "}
              <Link
                href="https://spaviadayspa.com/location"
                className="text-[#C2A878] underline"
              >
                visit one of our many locations
              </Link>{" "}
              to experience a treatment for yourself.
            </p>

            {/* Next steps container */}
            <div className="bg-white/5 rounded-2xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center md:text-left">
                HERE ARE YOUR NEXT STEPS
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                
                {/* Step 1 */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Schedule A Call
                  </h3>
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

                {/* Step 2 */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Explore The Opportunity
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Through presentations and calls, we’ll help you discover
                    everything you need to know about Spavia ownership.
                  </p>
                </div>

                {/* Step 3 */}
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
          </div>
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  );
}
