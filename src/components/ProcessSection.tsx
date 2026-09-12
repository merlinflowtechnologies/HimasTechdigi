"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Rocket, Repeat, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      step: "01",
      icon: <Search className="w-4 h-4 text-cyan-400" />,
      title: "Data Audit & Attribution Blueprint",
      tagline: "Uncovering Blind Spots",
      description: "Dissect historic ad performance, pixel telemetry, GA4 event pipelines, and drop-offs to engineer bulletproof server-side CAPI tracking.",
      deliverables: [
        "Full Ad Account & Creative Audit",
        "Server-Side CAPI & GA4 Setup",
        "Competitor Ad & Keyword Intel",
      ],
      glow: "from-cyan-500/25 via-blue-500/10 to-transparent",
      accentBorder: "group-hover:border-cyan-500/60",
      accentBadge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
      particleColor: "bg-cyan-400",
      floatDelay: 0,
    },
    {
      step: "02",
      icon: <PenTool className="w-4 h-4 text-purple-400" />,
      title: "High-Converting Creative & Funnel",
      tagline: "Hook-Heavy Creative",
      description: "Craft high-converting direct-response video ads, UGC hooks, dynamic static carousels, and sub-second landing pages engineered to maximize CVR.",
      deliverables: [
        "Direct-Response Video & UGC Hooks",
        "High-Speed Custom Landing Pages",
        "Multivariate A/B Split Copywriting",
      ],
      glow: "from-purple-500/25 via-pink-500/10 to-transparent",
      accentBorder: "group-hover:border-purple-500/60",
      accentBadge: "bg-purple-500/15 text-purple-300 border-purple-500/30",
      particleColor: "bg-purple-400",
      floatDelay: 0.5,
    },
    {
      step: "03",
      icon: <Rocket className="w-4 h-4 text-pink-400" />,
      title: "Algorithmic Media Scaling",
      tagline: "Omnichannel Execution",
      description: "Deploy multi-stage paid campaigns across Meta, Google P-Max, TikTok, and YouTube using automated bidding rules and predictive budget scaling.",
      deliverables: [
        "Dynamic Lookalike & Broad AI Targeting",
        "Dayparting & Algorithmic Bid Scaling",
        "Real-Time CPA & ROAS Optimization",
      ],
      glow: "from-pink-500/25 via-rose-500/10 to-transparent",
      accentBorder: "group-hover:border-pink-500/60",
      accentBadge: "bg-pink-500/15 text-pink-300 border-pink-500/30",
      particleColor: "bg-pink-400",
      floatDelay: 1,
    },
    {
      step: "04",
      icon: <Repeat className="w-4 h-4 text-emerald-400" />,
      title: "Retention & Lifetime Value Engine",
      tagline: "Multiplying Traffic Value",
      description: "Automate Klaviyo lifecycle flows, SMS sequences, and VIP loyalty retargeting to boost repeat customer purchase rates and long-term LTV.",
      deliverables: [
        "Automated Lifecycle Email & SMS Nurtures",
        "Post-Purchase 1-Click Upsell Systems",
        "Cohort LTV & Retention Analytics",
      ],
      glow: "from-emerald-500/25 via-teal-500/10 to-transparent",
      accentBorder: "group-hover:border-emerald-500/60",
      accentBadge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
      particleColor: "bg-emerald-400",
      floatDelay: 1.5,
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-20 bg-transparent border-t border-white/10 relative overflow-hidden z-10">
      {/* Dynamic Ambient Moving Glow Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-10 w-96 h-96 bg-brand-purple/20 rounded-full blur-[140px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, -30, 0],
          y: [0, 25, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-brand-cyan/20 rounded-full blur-[140px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs uppercase tracking-wider font-bold mb-3 shadow-[0_0_15px_rgba(139,92,246,0.15)]">
            <Sparkles className="w-3.5 h-3.5 animate-spin" /> Proprietary Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            The Himastech <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">Revenue Engine</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            A continuous 4-phase framework designed to eliminate marketing guesswork, maximize ad efficiency, and compound monthly revenue.
          </p>
        </div>

        {/* Compact Cards Grid with Sequential Flow Connecting Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative">
          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`glass-card rounded-2xl p-4.5 sm:p-5 relative overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-300 ${item.accentBorder} group flex flex-col justify-between shadow-xl`}
            >
              {/* Animated Floating Gradient Flare */}
              <motion.div 
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.floatDelay,
                }}
                className={`absolute -top-10 -right-10 w-36 h-36 bg-gradient-to-bl ${item.glow} rounded-full blur-2xl pointer-events-none group-hover:opacity-100 transition-opacity`} 
              />

              {/* Shimmer Sweep Animation on Hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />

              <div>
                {/* Header: Icon, Animated Step Node & Next Arrow */}
                <div className="flex items-center justify-between mb-3.5 relative z-10">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all">
                    {item.icon}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-xl font-black text-white/30 group-hover:text-white/70 transition-colors">
                      {item.step}
                    </span>
                    {idx < steps.length - 1 && (
                      <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                    )}
                  </div>
                </div>

                {/* Tagline */}
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.accentBadge} inline-block mb-2 shadow-sm`}>
                  {item.tagline}
                </span>

                {/* Title */}
                <h3 className="text-sm font-bold text-white mb-2 leading-snug group-hover:text-cyan-200 transition-colors">
                  {item.title}
                </h3>

                {/* Description (Compact) */}
                <p className="text-[11px] text-slate-300 leading-relaxed mb-3.5 line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Key Deliverables (Compact Checklist) */}
              <div className="pt-2.5 border-t border-white/5 relative z-10">
                <h4 className="text-[10px] uppercase font-bold text-slate-400 mb-2 tracking-wider">Key Outputs:</h4>
                <ul className="space-y-1.5">
                  {item.deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-tight line-clamp-1">{del}</span>
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

