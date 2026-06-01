"use client";

import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8 items-start border-t border-gray-700">
        {/* Logo + Legal */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <img
            src="/spavia-logo.png"
            alt="Spavia Franchise"
            className="h-8 w-auto"
          />
          <div className="flex flex-col space-y-1 text-sm">
            <Link
              href="https://spaviadayspa.com/privacy-policy"
              target="_blank"
              className="hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://spaviadayspa.com/terms-and-conditions"
              target="_blank"
              className="hover:text-white"
            >
              Terms & Conditions
            </Link>
          </div>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Spavia. All Rights Reserved.
          </p>
        </div>

        {/* Explore Spavia */}
        <div className="flex flex-col items-center md:items-start space-y-2 text-sm">
          <p className="text-xs uppercase tracking-widest text-[#C2A878] font-semibold mb-1">
            Explore Spavia
          </p>
          <Link href="/franchise-opportunities" className="hover:text-white">
            Franchise Opportunities
          </Link>
          <Link href="/franchise-cost" className="hover:text-white">
            Franchise Cost
          </Link>
          <Link href="/steps-to-ownership" className="hover:text-white">
            Steps to Ownership
          </Link>
          <Link href="/blog" className="hover:text-white">
            Blog
          </Link>
          <Link href="/press" className="hover:text-white">
            Press
          </Link>
          <Link href="/get-started" className="hover:text-white">
            Request Info
          </Link>
          <Link
            href="https://spaviadayspa.com/"
            target="_blank"
            className="hover:text-white"
          >
            SpaviaDaySpa
          </Link>
        </div>

        {/* Franchise Models */}
        <div className="flex flex-col items-center md:items-start space-y-2 text-sm">
          <p className="text-xs uppercase tracking-widest text-[#C2A878] font-semibold mb-1">
            Franchise Models
          </p>
          <Link href="/day-spa-franchise" className="hover:text-white">
            Day Spa Franchise
          </Link>
          <Link href="/massage-franchise" className="hover:text-white">
            Massage Franchise
          </Link>
          <Link href="/wellness-franchise" className="hover:text-white">
            Wellness Franchise
          </Link>
          <Link href="/multi-unit" className="hover:text-white">
            Multi-Unit Development
          </Link>
        </div>

        {/* Social */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex space-x-4 text-xl">
            <Link
              href="https://www.facebook.com/SpaviaDaySpa/"
              target="_blank"
              className="hover:text-white"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://www.linkedin.com/company/spavia/"
              target="_blank"
              className="hover:text-white"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="https://www.instagram.com/spaviadayspa/"
              target="_blank"
              className="hover:text-white"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
