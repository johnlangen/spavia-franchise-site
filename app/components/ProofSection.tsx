"use client";

import { motion } from "framer-motion";
import { DollarSign, Trophy, TrendingUp } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { themes } from "../themeConfig";
import Link from "next/link";


export default function ProofSection() {
  const { theme } = useTheme();
  const themeColor = theme ? themes[theme].color : "#C2A878"; // 👈 Changed fallback color to bronze

  const stats = [
    {
      icon: DollarSign,
      value: "$1,146,952",
      label: "Average Gross Sales",
    },
    {
      icon: TrendingUp,
      value: "1 in 2 owners",
      label: "Achieve $1M+ in annual revenue",
    },
    {
      icon: Trophy,
      value: "$1,940,000",
      label: "Highest Gross Revenue",
    },
  ];

  return (
    <section className="bg-white py-30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 scroll-mt-24">
           Spavia Spa Franchise Performance – The Proof is in the Numbers
        </h2>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg border bg-white shadow text-center"
                style={{ borderColor: themeColor }}
              >
                <Icon
                  className="w-8 h-8 mx-auto mb-4"
                  style={{ color: themeColor }}
                />
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-600 italic">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Investment Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="p-8 rounded-lg border bg-white shadow text-center"
          style={{ borderColor: themeColor }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Own a resort-inspired spa for a fraction of the price
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Spavia */}
            <div>
              <p className="font-semibold mb-2" style={{ color: themeColor }}>
                Spavia Initial Investment
              </p>
              <p className="text-gray-900 font-medium">
                $496,450 – $795,950
              </p>
            </div>

            {/* Competitors */}
            <div>
              <p className="font-semibold mb-2 text-gray-900">
                Competitors Initial Investment
              </p>
              <p className="text-gray-900">
                Massage Envy: $719,350 – $1,081,000
              </p>
              <p className="text-gray-900">
                Woodhouse: $1,482,439 – $2,697,879
              </p>
            </div>

          </div>

          <div className="text-center mt-6">
              <Link href="/your-spavia" className="text-[#C2A878] font-medium hover:underline">
                See full financial requirements →
              </Link>
            </div>
        </motion.div>
      </div>
    </section>
  );
}