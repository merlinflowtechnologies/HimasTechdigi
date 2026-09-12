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
    <section id="roi-calculator" className="py-16 sm:py-20 bg-transparent border-t border-slate-200/80 relative overflow-hidden z-10">
      {/* Subtle Glow Effects */}
      <div className="absolute -top-32 right-1/4 w-80 h-80 bg-brand-cyan/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 w-80 h-80 bg-brand-purple/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs uppercase tracking-wider font-extrabold mb-3 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-emerald-600" /> Interactive Growth Simulator
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mb-3">
            Calculate Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-cyan-600 to-indigo-600">Revenue Potential</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Slide your target monthly ad spend and select your sector to see what Himastech's performance framework can unlock.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Controls Form (Left Column) */}
          <div className="lg:col-span-6 glass-card rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-sm">
            <div className="mb-5">
              <label className="text-xs font-bold text-slate-800 block mb-2.5">
                1. Select Your Industry
              </label>
              <div className="grid grid-cols-2 gap-2">
                {industries.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind.id)}
                    className={`p-2.5 rounded-xl text-xs font-bold text-left transition-all border cursor-pointer ${
                      selectedIndustry === ind.id
                        ? "bg-cyan-50 border-cyan-400 text-cyan-900 shadow-sm"
                        : "bg-slate-50 border-slate-200/80 text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                    }`}
                  >
                    {ind.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-bold text-slate-800">
                  2. Monthly Ad Spend
                </label>
                <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-600">
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
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-600 focus:outline-none"
              />

              <div className="flex justify-between text-[11px] text-slate-500 mt-1.5 font-bold">
                <span>$2,000 / mo</span>
                <span>$50,000 / mo</span>
                <span>$100,000 / mo</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5 text-[11px] text-slate-600">
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Zero long-term lock-in contracts</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Dedicated account strategist & daily ad optimization</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Full access to bespoke creative production & CRO</span>
              </div>
            </div>
          </div>

          {/* Results Display (Right Column) */}
          <div className="lg:col-span-6 relative">
            <div className="glass-card rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-md relative overflow-hidden bg-white/95">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[10px] uppercase font-bold text-cyan-700 tracking-wider">
                    Projected Return
                  </span>
                  <h3 className="text-base font-bold text-slate-950 mt-0.5">
                    Growth Projection Forecast
                  </h3>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-1 shadow-sm">
                  <Sparkles className="w-3 h-3 text-emerald-600" /> {currentConfig.avgRoas}x Target ROAS
                </div>
              </div>

              {/* Main Projected Revenue */}
              <div className="py-5 text-center border-b border-slate-100">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold block mb-1">
                  Estimated Monthly Generated Pipeline
                </span>
                <div className="text-4xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-cyan-600 to-indigo-600">
                  ${projectedRevenue.toLocaleString()}
                </div>
                <span className="inline-block mt-2 text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full shadow-sm">
                  +${projectedNetGains.toLocaleString()} Estimated Net Upside
                </span>
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-2 gap-3 py-4 border-b border-slate-100">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-[11px] text-slate-500 mb-0.5 font-bold">Estimated Leads</div>
                  <div className="text-xl font-black text-slate-950">~{estimatedLeads.toLocaleString()}</div>
                  <div className="text-[10px] text-slate-500 font-medium">High-intent prospects</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-[11px] text-slate-500 mb-0.5 font-bold">Estimated Customers</div>
                  <div className="text-xl font-black text-slate-950">~{estimatedDeals.toLocaleString()}</div>
                  <div className="text-[10px] text-slate-500 font-medium">Projected conversions</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href="#contact"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm hover:scale-[1.01] group border border-white/30 cursor-pointer"
                >
                  Claim Your Custom Scaling Roadmap <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-[10px] text-center text-slate-500 font-medium mt-2">
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
