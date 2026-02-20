"use client";

import { CountyMarket } from "../data/markets";
import {
  MapPin,
  Lock,
  DollarSign,
  GraduationCap,
  Users,
  Shield,
} from "lucide-react";

interface MarketReportCardProps {
  county: CountyMarket;
  onRequestReport: (county: CountyMarket) => void;
}

export default function MarketReportCard({
  county,
  onRequestReport,
}: MarketReportCardProps) {
  const competitionLabel =
    county.competitorCount5mi === 0
      ? "No premium competition nearby"
      : county.competitorCount5mi <= 2
        ? "Low competition"
        : "Proven demand";

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-gray-100">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-2">
            <MapPin className="w-5 h-5 text-[#C2A878] mt-0.5 shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 text-lg">
                {county.countyName}
              </h3>
              <p className="text-sm text-gray-500">
                {county.areas.join(" · ")}
              </p>
            </div>
          </div>
          <div className="text-right shrink-0">
            <p className="text-3xl font-extrabold text-green-600">
              {county.topOpportunityScore.toFixed(1)}
            </p>
            <p className="text-[10px] text-gray-400 uppercase tracking-wide">
              Score
            </p>
          </div>
        </div>

        {/* Category badge */}
        <div className="flex gap-2 mt-3">
          <span
            className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full text-white ${county.category === "expansion" ? "bg-blue-500" : "bg-purple-500"}`}
          >
            {county.category === "expansion" ? "Expansion" : "New Market"}
          </span>
        </div>
      </div>

      {/* Visible stats */}
      <div className="px-6 py-4 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-gray-400" />
            <div>
              <p className="text-sm font-semibold text-gray-900">
                ${county.medianHouseholdIncome.toLocaleString()}
              </p>
              <p className="text-[10px] text-gray-500">Median Income</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-gray-400" />
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {county.pctBachelorsPlus.toFixed(1)}%
              </p>
              <p className="text-[10px] text-gray-500">Bachelor&apos;s+</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-gray-400" />
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {county.totalPopulation.toLocaleString()}
              </p>
              <p className="text-[10px] text-gray-500">Population</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-gray-400" />
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {competitionLabel}
              </p>
              <p className="text-[10px] text-gray-500">Competition</p>
            </div>
          </div>
        </div>

        {/* Why this market */}
        {county.narrative && (
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
            {county.narrative}
          </p>
        )}
      </div>

      {/* Blurred section */}
      <div className="relative mx-6 mb-6 rounded-lg overflow-hidden">
        <div className="filter blur-[6px] select-none pointer-events-none bg-gray-50 p-4 space-y-3">
          {/* Score breakdown bars */}
          <p className="text-xs font-bold text-gray-700">Score Breakdown</p>
          {[
            {
              label: "Demographic Fit",
              score: county.topDemographicScore,
              weight: "45%",
            },
            {
              label: "Competition Gap",
              score: county.topCompetitionScore,
              weight: "30%",
            },
            { label: "Proximity", score: county.proximityScore, weight: "15%" },
            {
              label: "Market Viability",
              score: county.viabilityScore,
              weight: "10%",
            },
          ].map((bar) => (
            <div key={bar.label} className="flex items-center gap-2">
              <span className="text-[10px] text-gray-500 w-24">
                {bar.label} ({bar.weight})
              </span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-green-500 rounded-full"
                  style={{ width: `${bar.score}%` }}
                />
              </div>
              <span className="text-[10px] font-bold text-gray-700 w-8 text-right">
                {bar.score.toFixed(1)}
              </span>
            </div>
          ))}

          {/* Competitor details */}
          <p className="text-xs font-bold text-gray-700 pt-2">
            Competitive Intelligence
          </p>
          <p className="text-[10px] text-gray-500">
            Premium competitors: {county.premiumCompCount} · Mass-market:{" "}
            {county.massCompCount} · Total (15mi): {county.competitorCount}
          </p>
          <p className="text-[10px] text-gray-500">
            Wider market (30mi): {county.viabilityComps} spa locations — proven
            commercial activity
          </p>
        </div>

        {/* CTA overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-lg">
          <button
            onClick={() => onRequestReport(county)}
            className="flex items-center gap-2 bg-[#C2A878] hover:bg-[#b09668] text-white font-semibold px-5 py-2.5 rounded-full shadow-md transition-colors cursor-pointer"
          >
            <Lock className="w-4 h-4" />
            Request Your Free Market Report
          </button>
        </div>
      </div>
    </div>
  );
}
