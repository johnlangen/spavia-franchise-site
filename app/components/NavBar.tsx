"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Why Spavia", href: "/why-spavia" },
  { label: "Training & Support", href: "/training-and-support" },
  { label: "Our Franchisees", href: "/our-franchisees" },
  { label: "Your Spavia", href: "/your-spavia" },
  { label: "Steps to Ownership", href: "/steps-to-ownership" },
  { label: "Blog", href: "/blog" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/spavia-logo.png"
            alt="Spavia Franchise"
            className="h-8 md:h-10"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-semibold">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="hover:text-[#C2A878] transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none cursor-pointer transition-transform duration-200 hover:scale-110 hover:opacity-80"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu with animation */}
      <div
        className={`md:hidden bg-black px-6 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-4 text-sm font-semibold">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block hover:text-[#C2A878] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
