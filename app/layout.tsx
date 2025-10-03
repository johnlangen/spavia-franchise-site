import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import FloatingButton from "./components/FloatingButton"; // ✅ Desktop floating button

// Keep Geist if you want, otherwise you can remove
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Add Recoleta from /public/fonts
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

        {/* ✅ Floating button (desktop only) */}
        <FloatingButton />

        {/* ✅ Sticky bottom CTA (mobile only) */}
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur p-3 md:hidden">
          <a
            href="/get-started"
            className="block w-full text-center bg-[#C2A878] text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-[#b09466] transition"
          >
            Get Started
          </a>
        </div>
      </body>
    </html>
  );
}
