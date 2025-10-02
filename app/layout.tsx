import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";

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

        {/* Floating Get Started Button - visible on all pages */}
        <a
          href="/get-started"
          className="hidden md:flex fixed right-0 top-[12.5%] 
                     bg-[#C2A878] text-white font-semibold 
                     py-3 px-6 rounded-l-full shadow-lg 
                     hover:bg-[#b09466] transition z-50"
        >
          Get Started
        </a>
      </body>
    </html>
  );
}
