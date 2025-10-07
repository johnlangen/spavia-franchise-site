import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import MobileCTA from "./components/MobileCTA";
import FloatingButton from "./components/FloatingButton";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const recoleta = localFont({
  src: [
    { path: "../public/fonts/Recoleta-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/Recoleta-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-recoleta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Spa Franchise | Spavia Day Spa | Luxury Spa Franchises",
  description:
    "Spavia is the premier spa franchise brand that delivers a resort-like massage and spa experience to your neighborhood in an ever-growing $19 billion spa industry.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${recoleta.variable}`}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          {children}
          <MobileCTA />
          <FloatingButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
