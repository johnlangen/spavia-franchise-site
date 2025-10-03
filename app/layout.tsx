import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import FloatingButton from "./components/FloatingButton";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const recoleta = localFont({
  src: "../public/fonts/Recoleta-Regular.otf",
  variable: "--font-recoleta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Spa Franchise | Spavia Day Spa | Luxury Spa Franchises",
  description:
    "Spavia is the premier spa franchise brand that delivers a resort-like massage and spa experience to your neighborhood in an ever-growing $19 billion spa industry.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${recoleta.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* Desktop floating button */}
        <FloatingButton />

        {/* Sticky Mobile CTA with toggle */}
        <MobileCTA />
      </body>
    </html>
  );
}

// ✅ Separate component for client-side toggle
function MobileCTA() {
  const [open, setOpen] = useState(true);

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
      {open ? (
        <div className="bg-black/90 backdrop-blur p-3 flex items-center justify-between">
          <a
            href="/get-started"
            className="flex-1 text-center bg-[#C2A878] text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-[#b09466] transition"
          >
            Get Started
          </a>
          <button
            onClick={() => setOpen(false)}
            className="ml-3 text-white text-lg"
          >
            ▼
          </button>
        </div>
      ) : (
        <div className="bg-black/70 text-center p-2">
          <button
            onClick={() => setOpen(true)}
            className="text-white text-lg"
          >
            ▲ Open
          </button>
        </div>
      )}
    </div>
  );
}
