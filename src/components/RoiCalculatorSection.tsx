"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  Zap, 
  CheckCircle, 
  X, 
  Calendar, 
  Clock, 
  Target, 
  FileText, 
  Phone, 
  CheckCircle2,
  TrendingUp,
  ShieldCheck
} from "lucide-react";
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
  const [isRoadmapModalOpen, setIsRoadmapModalOpen] = useState<boolean>(false);
  const [claimSubmitted, setClaimSubmitted] = useState<boolean>(false);
  const [clientName, setClientName] = useState<string>("");
  const [clientContact, setClientContact] = useState<string>("");

  const currentConfig = industries.find((i) => i.id === selectedIndustry) || industries[0];

  // Computations
  const estimatedLeads = Math.round(budget / currentConfig.cpl);
  const projectedRevenue = Math.round(budget * currentConfig.avgRoas);
  const estimatedDeals = Math.round(estimatedLeads * currentConfig.closeRate);
  const projectedNetGains = projectedRevenue - budget;

  const handleClaimSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setClaimSubmitted(true);
  };

  const roadmapSteps = [
    {
      step: "01",
      icon: <FileText className="w-4 h-4 text-emerald-600" />,
      title: "48-Hour Forensic Account & Pixel Audit",
      time: "Within 24-48 Hours",
      desc: "Our senior media buyers analyze your past ad history, broken CAPI telemetry, and creative fatigue benchmarks to locate wasted ad spend."
    },
    {
      step: "02",
      icon: <Target className="w-4 h-4 text-cyan-600" />,
      title: "Custom 90-Day Channel Budget Allocation",
      time: "Day 2",
      desc: `We engineer an algorithmic media plan allocating your $${budget.toLocaleString()} monthly budget across Meta, Google P-Max, and Retention for maximum ${currentConfig.avgRoas}x ROAS.`
    },
    {
      step: "03",
      icon: <Phone className="w-4 h-4 text-indigo-600" />,
      title: "30-Min 1-on-1 Growth Strategy Presentation",
      time: "Day 3",
      desc: "A private consultation with our Lead Growth Architect to walk through your creative angles, competitors, and sub-second funnel wireframes."
    },
    {
      step: "04",
      icon: <Zap className="w-4 h-4 text-pink-600" />,
      title: "Zero-Risk Sprint Launch & Active Management",
      time: "Day 4+",
      desc: "Instant onboarding with zero long-term lock-ins. We deploy your high-converting ads, tracking, and weekly attribution dashboards."
    }
  ];

  return (
    <section id="roi-calculator" className="py-16 sm:py-20 bg-transparent border-t border-slate-200/80 relative overflow-hidden z-10">
      {/* Subtle Glow Effects */}
      <div className="absolute -top-32 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs uppercase tracking-wider font-extrabold mb-3 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-emerald-600" /> Interactive Growth Simulator
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mb-3">
            Calculate Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-cyan-600 to-indigo-600">Revenue Potential</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Slide your target monthly ad spend and select your sector to see what Himastech&apos;s performance framework can unlock.
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

              {/* CTA Button -> Opens Roadmap Next Steps Modal */}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => setIsRoadmapModalOpen(true)}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs hover:scale-[1.01] active:scale-[0.99] group border border-white/30 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Claim Your Custom Scaling Roadmap <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[10px] text-center text-slate-500 font-medium mt-1.5">
                  *Click above to view the step-by-step roadmap delivery journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MODAL: WHAT COMES NEXT AFTER CLAIMING CUSTOM ROADMAP (COMPACT) ================= */}
      <AnimatePresence>
        {isRoadmapModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-xs overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-2xl bg-white border border-slate-200 p-4 sm:p-5 shadow-2xl z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setIsRoadmapModalOpen(false);
                  setClaimSubmitted(false);
                }}
                className="absolute top-3.5 right-3.5 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="mb-3.5 pr-6">
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-[9px] font-extrabold uppercase tracking-wider mb-1">
                  <TrendingUp className="w-3 h-3 text-cyan-600" />
                  Roadmap Delivery Journey
                </div>
                <h3 className="text-base sm:text-lg font-black text-slate-950 leading-tight">
                  What Happens Next After Claiming Roadmap
                </h3>
                <p className="text-[11px] text-slate-600 mt-0.5 font-medium leading-normal">
                  4-step execution plan for your <strong className="text-slate-900">{currentConfig.name}</strong> goal (${budget.toLocaleString()}/mo spend &rarr; ${projectedRevenue.toLocaleString()} pipeline):
                </p>
              </div>

              {/* Step by Step Breakdown */}
              <div className="space-y-2 mb-4">
                {roadmapSteps.map((s, idx) => (
                  <div 
                    key={idx}
                    className="p-2.5 rounded-xl bg-slate-50/90 border border-slate-200/80 flex items-start gap-2.5 hover:border-cyan-300 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-lg bg-white border border-slate-200 shadow-xs flex items-center justify-center shrink-0 mt-0.5">
                      {s.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <h4 className="text-[11px] font-bold text-slate-900 leading-tight">
                          Step {s.step}: {s.title}
                        </h4>
                        <span className="text-[9px] font-bold text-cyan-700 bg-cyan-50 border border-cyan-200 px-1.5 py-0.5 rounded-full shrink-0">
                          {s.time}
                        </span>
                      </div>
                      <p className="text-[10.5px] text-slate-600 leading-snug font-medium">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Instant Claim Box */}
              {!claimSubmitted ? (
                <form onSubmit={handleClaimSubmit} className="p-3 rounded-xl bg-gradient-to-br from-cyan-50/70 via-indigo-50/40 to-pink-50/40 border border-cyan-200 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <h5 className="text-[11px] font-bold text-slate-900 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Claim This Roadmap Blueprint Instantly:
                    </h5>
                    <span className="text-[9px] font-bold text-emerald-700 bg-white px-1.5 py-0.5 rounded-full border border-emerald-200">
                      100% Free
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Your Name / Brand"
                      className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-cyan-500 font-medium"
                    />
                    <input
                      type="text"
                      required
                      value={clientContact}
                      onChange={(e) => setClientContact(e.target.value)}
                      placeholder="Phone / WhatsApp / Email"
                      className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-cyan-500 font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2 rounded-lg bg-gradient-to-r from-cyan-600 via-indigo-600 to-pink-600 text-white font-bold text-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Send Me My Custom Roadmap Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              ) : (
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-1.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">
                    Roadmap Request Confirmed!
                  </h4>
                  <p className="text-[11px] text-slate-600 max-w-sm mx-auto leading-snug">
                    Thank you <strong className="text-slate-900">{clientName}</strong>. Our Lead Growth Strategist is preparing your custom ${projectedRevenue.toLocaleString()} forecast blueprint and will reach out via <strong className="text-slate-900">{clientContact}</strong> within 24 hours.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
