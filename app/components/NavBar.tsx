"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const menus = [
  {
    label: "Discover Spavia",
    links: [
      { label: "Why Spavia", href: "/why-spavia" },
      { label: "Our story & team", href: "/who-we-are" },
      { label: "Meet our owners", href: "/our-franchisees" },
      { label: "What’s new", href: "/whats-new" },
    ],
  },
  {
    label: "The Opportunity",
    links: [
      { label: "Your Spavia", href: "/your-spavia" },
      { label: "Investment & costs", href: "/franchise-cost" },
      { label: "Available markets", href: "/franchise-opportunities" },
      { label: "Multi-unit ownership", href: "/multi-unit" },
    ],
  },
  {
    label: "Becoming an Owner",
    links: [
      { label: "Steps to ownership", href: "/steps-to-ownership" },
      { label: "Training & support", href: "/training-and-support" },
      { label: "Franchise insights", href: "/blog" },
      { label: "Press & recognition", href: "/press" },
    ],
  },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const nav = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const outside = (e: PointerEvent) => {
      if (!nav.current?.contains(e.target as Node)) {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, []);
  const close = () => {
    setOpen(null);
    setMobileOpen(false);
  };
  return (
    <nav
      ref={nav}
      aria-label="Main navigation"
      className="site-nav"
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          const trigger = nav.current?.querySelector<HTMLButtonElement>(
            `[aria-controls="nav-group-${open}"]`,
          );
          if (open !== null) {
            setOpen(null);
            trigger?.focus();
          } else {
            setMobileOpen(false);
            menuButton.current?.focus();
          }
        }
      }}
    >
      <div className="site-container nav-row">
        <Link href="/" className="nav-brand" aria-label="Spavia franchise home">
          <Image
            src="/spavia-logo.png"
            alt="Spavia"
            width={156}
            height={42}
            priority
          />
        </Link>
        <div className="nav-desktop">
          {menus.map((menu, i) => (
            <div
              key={menu.label}
              className="nav-group"
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node))
                  setOpen(null);
              }}
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`nav-group-${i}`}
              >
                {menu.label}
                <ChevronDown size={13} aria-hidden="true" />
              </button>
              <ul
                id={`nav-group-${i}`}
                hidden={open !== i}
                className="nav-dropdown"
              >
                {menu.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} onClick={close}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Link
          href="/get-started"
          className="button button-primary nav-cta"
          data-track="cta_nav_inquiry"
        >
          Request Info <span aria-hidden="true">→</span>
        </Link>
        <button
          ref={menuButton}
          type="button"
          className="nav-toggle"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => {
            setMobileOpen(!mobileOpen);
            setOpen(null);
          }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div
        id="mobile-navigation"
        hidden={!mobileOpen}
        className="mobile-navigation"
      >
        {menus.map((menu) => (
          <div key={menu.label}>
            <p>{menu.label}</p>
            <ul>
              {menu.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={close}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <Link
          href="/get-started"
          onClick={close}
          className="button button-primary"
        >
          Request Franchise Info <span aria-hidden="true">→</span>
        </Link>
      </div>
    </nav>
  );
}
