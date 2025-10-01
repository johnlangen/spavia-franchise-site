"use client";

import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 items-center border-t border-gray-700">
        {/* Left - Logo + Links */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <img
            src="/spavia-logo.png"
            alt="Spavia Franchise"
            className="h-8 w-auto"
          />
          <div className="flex space-x-4 text-sm">
            <Link
              href="https://spaviadayspa.com/privacy-policy"
              target="_blank"
              className="hover:text-white"
            >
              Privacy Policy
            </Link>
            <span>|</span>
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

        {/* Middle - Navigation */}
        <div className="flex flex-col items-center space-y-2 text-sm uppercase tracking-wide">
        <Link href="/blog" className="hover:underline">
        BLOG
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

        {/* Right - Social Icons */}
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
