"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { DollarSign, TrendingUp, Sparkles, ArrowRight } from "lucide-react";

const columns = [
  {
    icon: DollarSign,
    title: "How much to open?",
    facts: [
      { label: "Total initial investment", value: "$479K – $885K" },
      { label: "Initial franchise fee", value: "$59,500" },
      { label: "Royalty rate", value: "6% of gross sales" },
      { label: "Financing", value: "SBA-eligible" },
    ],
    link: { href: "/franchise-cost", label: "Full cost breakdown" },
  },
  {
    icon: TrendingUp,
    title: "What do owners make?",
    facts: [
      { label: "Median gross sales", value: "$1,110,481" },
      { label: "Owners exceeding $1M", value: "1 in 2" },
      { label: "Median operating margin", value: "18.4%" },
      { label: "Source", value: "2026 FDD, Item 19" },
    ],
    link: { href: "/your-spavia", label: "How the model works" },
  },
  {
    icon: Sparkles,
    title: "What do you actually run?",
    facts: [
      { label: "Service mix", value: "Massage, facials, body, retail" },
      { label: "Revenue model", value: "Membership-driven" },
      { label: "Existing locations", value: "63 and growing" },
      { label: "Opening timeline", value: "10–14 months" },
    ],
    link: { href: "/steps-to-ownership", label: "The path to ownership" },
  },
];

export default function HomepageQuickOverview() {
  return (
    <section className="bg-white py-16 md:py-20 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-widest text-[#C2A878] font-semibold mb-3">
            Spavia in 90 Seconds
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[family-name:var(--font-recoleta)]">
            What You Should Know Before You Inquire
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            The honest version of the Spavia franchise opportunity — investment,
            revenue, and what you'll actually operate. No fluff.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {columns.map((col, idx) => {
            const Icon = col.icon;
            return (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-50 rounded-2xl border border-gray-200 p-6 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-10 w-10 rounded-full bg-[#C2A878]/15 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-[#C2A878]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                    {col.title}
                  </h3>
                </div>

                <dl className="space-y-3 flex-1">
                  {col.facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex justify-between items-baseline gap-3 border-b border-gray-200/70 pb-2 last:border-b-0"
                    >
                      <dt className="text-sm text-gray-500">{fact.label}</dt>
                      <dd className="text-sm font-semibold text-gray-900 text-right">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <Link
                  href={col.link.href}
                  className="mt-6 inline-flex items-center justify-between rounded-lg border border-[#C2A878] text-[#9c814f] px-4 py-2.5 text-sm font-semibold hover:bg-[#C2A878]/10 transition-colors group"
                >
                  <span>{col.link.label}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Middle-position framing — where Spavia sits in the category */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 mb-2"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-3 font-[family-name:var(--font-recoleta)]">
            Where Spavia Sits in the Spa Franchise Category
          </h3>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 text-sm md:text-base">
            Spavia occupies the accessible-luxury middle: full-service depth
            without the premium-luxury price tag, recurring membership
            economics without the mass-market chain feel.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-center">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
                Mass-market chains
              </p>
              <p className="text-2xl font-bold text-gray-900 mb-1 font-[family-name:var(--font-recoleta)]">
                Single-service
              </p>
              <p className="text-sm text-gray-600 mb-3">
                Membership-driven but narrower service mix. Lower per-visit
                ticket.
              </p>
              <p className="text-xs text-gray-500">
                Massage-only or facial-only models
              </p>
            </div>

            <div className="rounded-2xl border-2 border-[#C2A878] bg-[#C2A878]/5 p-6 text-center relative shadow-md">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C2A878] text-white text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full">
                Spavia
              </span>
              <p className="text-xs uppercase tracking-widest text-[#9c814f] font-semibold mb-2">
                Accessible Luxury
              </p>
              <p className="text-2xl font-bold text-gray-900 mb-1 font-[family-name:var(--font-recoleta)]">
                Full-service
              </p>
              <p className="text-sm text-gray-800 mb-3">
                Massage, facials, body, retail. Membership economics + multi-
                service revenue mix. $479K–$885K investment.
              </p>
              <p className="text-xs text-[#9c814f] font-semibold">
                $1.1M+ median gross sales
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-center">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
                Premium luxury chains
              </p>
              <p className="text-2xl font-bold text-gray-900 mb-1 font-[family-name:var(--font-recoleta)]">
                Boutique-premium
              </p>
              <p className="text-sm text-gray-600 mb-3">
                Higher per-visit ticket, but $1.5M–$2.7M investment range and
                narrower buyer pool.
              </p>
              <p className="text-xs text-gray-500">
                Resort-style premium positioning
              </p>
            </div>
          </div>
        </motion.div>

        {/* Secondary line — moves to deeper pages */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 text-sm">
            Want the deeper view first?{" "}
            <Link
              href="/why-spavia"
              className="font-semibold text-[#9c814f] hover:underline"
            >
              Read Why Spavia
            </Link>
            {" · "}
            <Link
              href="/our-franchisees"
              className="font-semibold text-[#9c814f] hover:underline"
            >
              Meet our franchisees
            </Link>
            {" · "}
            <Link
              href="/multi-unit"
              className="font-semibold text-[#9c814f] hover:underline"
            >
              Multi-unit development
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
