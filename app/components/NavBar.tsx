"use client";

import { useState } from "react";
import Link from "next/link";

type NavLeaf = { label: string; href: string };
type NavParent = { label: string; children: NavLeaf[] };
type NavEntry = NavLeaf | NavParent;

const isParent = (entry: NavEntry): entry is NavParent =>
  "children" in entry;

const navItems: NavEntry[] = [
  {
    label: "About",
    children: [
      { label: "Who We Are", href: "/who-we-are" },
      { label: "Our Franchisees", href: "/our-franchisees" },
      { label: "Why Spavia", href: "/why-spavia" },
    ],
  },
  {
    label: "The Opportunity",
    children: [
      { label: "Your Spavia", href: "/your-spavia" },
      { label: "Training & Support", href: "/training-and-support" },
      { label: "Franchise Cost", href: "/franchise-cost" },
    ],
  },
  {
    label: "Ownership",
    children: [
      { label: "Steps to Ownership", href: "/steps-to-ownership" },
      { label: "Multi-Unit Development", href: "/multi-unit" },
      { label: "Franchise Opportunities", href: "/franchise-opportunities" },
    ],
  },
  { label: "Blog", href: "/blog" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(null);

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <img
            src="/spavia-logo.png"
            alt="Spavia Franchise"
            className="h-8 lg:h-10"
          />
        </Link>

        {/* Desktop Menu — hidden below lg (1024px) */}
        <ul className="hidden lg:flex items-center gap-x-6 xl:gap-x-8 text-sm font-semibold">
          {navItems.map((item, idx) => {
            if (isParent(item)) {
              const open = hoverIndex === idx;
              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setHoverIndex(idx)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1.5 hover:text-[#C2A878] transition-colors whitespace-nowrap focus:outline-none cursor-pointer"
                    aria-expanded={open}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <span
                      className={`text-[10px] transition-transform duration-200 ${
                        open ? "rotate-180" : "rotate-0"
                      }`}
                      aria-hidden="true"
                    >
                      ▼
                    </span>
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute left-0 top-full pt-3 ${
                      open ? "block" : "hidden"
                    }`}
                  >
                    <ul className="min-w-[220px] bg-black/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl py-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-4 py-2.5 text-sm font-medium text-white/85 hover:text-[#C2A878] hover:bg-white/5 transition-colors whitespace-nowrap"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            }
            // Leaf item
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-[#C2A878] transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Hamburger — visible below lg */}
        <button
          className="lg:hidden h-12 w-12 flex items-center justify-center text-white text-2xl focus:outline-none cursor-pointer transition-transform duration-200 hover:scale-110 hover:opacity-80"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span aria-hidden="true">{isOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Menu with animation */}
      <div
        id="mobile-menu"
        className={`lg:hidden bg-black px-6 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[40rem] opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-3 text-sm font-semibold">
          {navItems.map((item, idx) => {
            if (isParent(item)) {
              const open = mobileOpenIndex === idx;
              return (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => setMobileOpenIndex(open ? null : idx)}
                    className="w-full flex items-center justify-between hover:text-[#C2A878] transition-colors py-1 cursor-pointer"
                    aria-expanded={open}
                  >
                    <span>{item.label}</span>
                    <span
                      className={`text-[10px] transition-transform duration-200 ${
                        open ? "rotate-180" : "rotate-0"
                      }`}
                      aria-hidden="true"
                    >
                      ▼
                    </span>
                  </button>
                  <ul
                    className={`overflow-hidden transition-all duration-300 ${
                      open ? "max-h-72 mt-2 mb-1" : "max-h-0"
                    } pl-4 border-l border-white/15 space-y-2`}
                  >
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block text-xs font-medium text-white/80 hover:text-[#C2A878] transition-colors py-1"
                          onClick={() => {
                            setIsOpen(false);
                            setMobileOpenIndex(null);
                          }}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block hover:text-[#C2A878] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
