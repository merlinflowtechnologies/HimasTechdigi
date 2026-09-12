"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Zap, CheckCircle } from "lucide-react";
import Link from "next/link";

interface IndustryConfig {
  id: string;
  name: string;
  avgRoas: number;
  cpl: number; // cost per lead
  closeRate: number;
  avgDealValue: number;
}

const industries: IndustryConfig[] = [
  {
    id: "real-estate",
    name: "Real Estate & High-Ticket",
    avgRoas: 6.8,
    cpl: 45,
    closeRate: 0.08,
    avgDealValue: 12000,
  },
  {
    id: "ecommerce",
    name: "E-Commerce & D2C",
    avgRoas: 5.2,
    cpl: 18,
    closeRate: 0.22,
    avgDealValue: 160,
  },
  {
    id: "b2b",
    name: "B2B SaaS & Tech",
    avgRoas: 4.6,
    cpl: 75,
    closeRate: 0.12,
    avgDealValue: 8500,
  },
  {
    id: "services",
    name: "Healthcare & Services",
    avgRoas: 5.5,
    cpl: 35,
    closeRate: 0.15,
    avgDealValue: 2400,
  },
];

export function RoiCalculatorSection() {
  const [budget, setBudget] = useState<number>(10000);
  const [selectedIndustry, setSelectedIndustry] = useState<string>("real-estate");

  const currentConfig = industries.find((i) => i.id === selectedIndustry) || industries[0];

  // Computations
  const estimatedLeads = Math.round(budget / currentConfig.cpl);
  const projectedRevenue = Math.round(budget * currentConfig.avgRoas);
  const estimatedDeals = Math.round(estimatedLeads * currentConfig.closeRate);
  const projectedNetGains = projectedRevenue - budget;

  return (
    <section id="roi-calculator" className="py-16 sm:py-20 bg-transparent border-t border-white/10 relative overflow-hidden z-10">
      {/* Subtle Glow Effects */}
      <div className="absolute -top-32 right-1/4 w-80 h-80 bg-brand-cyan/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 w-80 h-80 bg-brand-purple/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs uppercase tracking-wider font-bold mb-3">
            <Zap className="w-3.5 h-3.5" /> Interactive Growth Simulator
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            Calculate Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-brand-blue">Revenue Potential</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Slide your target monthly ad spend and select your sector to see what Himastech's performance framework can unlock.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Controls Form (Left Column) */}
          <div className="lg:col-span-6 glass-card rounded-2xl p-5 sm:p-6 border border-white/10">
            <div className="mb-5">
              <label className="text-xs font-semibold text-gray-300 block mb-2.5">
                1. Select Your Industry
              </label>
              <div className="grid grid-cols-2 gap-2">
                {industries.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind.id)}
                    className={`p-2.5 rounded-xl text-xs font-bold text-left transition-all border cursor-pointer ${
                      selectedIndustry === ind.id
                        ? "bg-gradient-to-r from-brand-blue/20 to-brand-purple/20 border-cyan-400 text-white shadow-[0_0_12px_rgba(6,182,212,0.25)]"
                        : "bg-white/[0.03] border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                    }`}
                  >
                    {ind.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-semibold text-gray-300">
                  2. Monthly Ad Spend
                </label>
                <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                  ${budget.toLocaleString()}
                </span>
              </div>

              <input
                type="range"
                min="2000"
                max="100000"
                step="1000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                aria-label="Monthly Marketing Budget"
                className="w-full h-2.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
              />

              <div className="flex justify-between text-[11px] text-gray-400 mt-1.5 font-medium">
                <span>$2,000 / mo</span>
                <span>$50,000 / mo</span>
                <span>$100,000 / mo</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5 text-[11px] text-gray-400">
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Zero long-term lock-in contracts</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Dedicated account strategist & daily ad optimization</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Full access to bespoke creative production & CRO</span>
              </div>
            </div>
          </div>

          {/* Results Display (Right Column) */}
          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-brand-purple/10 to-pink-500/10 rounded-2xl blur-xl -z-10" />

            <div className="glass-card rounded-2xl p-5 sm:p-6 border border-cyan-500/30 shadow-[0_0_35px_rgba(6,182,212,0.12)] relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider">
                    Projected Return
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5">
                    Growth Projection Forecast
                  </h3>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> {currentConfig.avgRoas}x Target ROAS
                </div>
              </div>

              {/* Main Projected Revenue */}
              <div className="py-5 text-center border-b border-white/10">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold block mb-1">
                  Estimated Monthly Generated Pipeline
                </span>
                <div className="text-4xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-brand-blue">
                  ${projectedRevenue.toLocaleString()}
                </div>
                <span className="inline-block mt-2 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                  +${projectedNetGains.toLocaleString()} Estimated Net Upside
                </span>
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-2 gap-3 py-4 border-b border-white/10">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-[11px] text-gray-400 mb-0.5 font-medium">Estimated Leads</div>
                  <div className="text-xl font-bold text-white">~{estimatedLeads.toLocaleString()}</div>
                  <div className="text-[10px] text-gray-400">High-intent prospects</div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-[11px] text-gray-400 mb-0.5 font-medium">Estimated Customers</div>
                  <div className="text-xl font-bold text-white">~{estimatedDeals.toLocaleString()}</div>
                  <div className="text-[10px] text-gray-400">Projected conversions</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href="#contact"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all hover:scale-[1.01] group border border-white/20 cursor-pointer"
                >
                  Claim Your Custom Scaling Roadmap <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-[10px] text-center text-gray-400 mt-2">
                  *Projections calculated on Himastech historical benchmarks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
