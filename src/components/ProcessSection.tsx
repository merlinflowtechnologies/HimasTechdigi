"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Rocket, Repeat, Sparkles, CheckCircle2 } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      step: "01",
      icon: <Search className="w-6 h-6 text-cyan-400" />,
      title: "Data Audit & Attribution Blueprint",
      tagline: "Uncovering Blind Spots & Leakage",
      description: "We dissect your historic ad performance, pixel telemetry, Google Analytics 4, customer journey drop-offs, and competitor bidding landscape. We engineer bulletproof CAPI server tracking.",
      deliverables: [
        "Full Ad Account & Creative Audit",
        "Conversion API (CAPI) & GA4 Tracking Setup",
        "Competitor Ad Library & Keyword Intelligence",
      ],
      glow: "from-cyan-500/20 to-blue-500/0",
      accentBorder: "group-hover:border-cyan-500/50",
    },
    {
      step: "02",
      icon: <PenTool className="w-6 h-6 text-purple-400" />,
      title: "High-Converting Creative & Funnel Build",
      tagline: "Hook-Heavy Creative & Frictionless Landing Pages",
      description: "Creative is the new targeting. Our team crafts high-converting direct-response video ads, UGC hooks, static carousels, and ultra-fast landing pages engineered to maximize CVR.",
      deliverables: [
        "Direct-Response Video & Static Ad Creatives",
        "High-Speed Custom Landing Page Development",
        "A/B Split Test Setup & Copywriting",
      ],
      glow: "from-purple-500/20 to-pink-500/0",
      accentBorder: "group-hover:border-purple-500/50",
    },
    {
      step: "03",
      icon: <Rocket className="w-6 h-6 text-pink-400" />,
      title: "Algorithmic Media Scaling",
      tagline: "Omnichannel Paid Media Execution",
      description: "We deploy multi-stage paid campaigns across Meta, Google Performance Max, TikTok, and Search. We leverage bidding automation and predictive budget shifts to scale profitably.",
      deliverables: [
        "Dynamic Lookalike & Broad AI Targeting",
        "Dayparting & Algorithmic Bid Scaling",
        "Real-Time CPA & ROAS Optimization",
      ],
      glow: "from-pink-500/20 to-rose-500/0",
      accentBorder: "group-hover:border-pink-500/50",
    },
    {
      step: "04",
      icon: <Repeat className="w-6 h-6 text-emerald-400" />,
      title: "Retention & Lifetime Value (LTV) Engine",
      tagline: "Multiplying Revenue from Existing Traffic",
      description: "We don't leave revenue on the table. Through automated Klaviyo flows, SMS sequences, and loyalty retargeting, we boost your customer retention and repeat purchase rate.",
      deliverables: [
        "Automated Lifecycle Email & SMS Nurtures",
        "Post-Purchase Upsell & Cross-Sell Automations",
        "Comprehensive LTV & Cohort Retention Analytics",
      ],
      glow: "from-emerald-500/20 to-teal-500/0",
      accentBorder: "group-hover:border-emerald-500/50",
    },
  ];

  return (
    <section id="process" className="py-24 bg-transparent border-t border-white/10 relative overflow-hidden z-10">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-brand-purple/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs uppercase tracking-wider font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Proprietary Methodology
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
            The Himastech <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">Revenue Engine</span>
          </h2>
          <p className="text-lg text-gray-400">
            A repeatable 4-phase framework designed to eliminate marketing guesswork, accelerate ad efficiency, and compound your monthly revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`glass-card rounded-3xl p-7 relative overflow-hidden border border-white/10 transition-all duration-300 ${item.accentBorder} group flex flex-col justify-between`}
            >
              <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${item.glow} rounded-bl-full blur-xl pointer-events-none`} />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-4xl font-black text-white/20 group-hover:text-white/40 transition-colors">
                    {item.step}
                  </span>
                </div>

                <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block mb-2">
                  {item.tagline}
                </span>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 border-t border-white/5">
                <h4 className="text-[11px] uppercase font-bold text-gray-400 mb-3 tracking-wider">Key Deliverables:</h4>
                <ul className="space-y-2">
                  {item.deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
