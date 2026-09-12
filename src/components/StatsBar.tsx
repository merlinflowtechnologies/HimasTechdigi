"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Users, ShieldCheck } from "lucide-react";

export function StatsBar() {
  const stats = [
    {
      value: "$28.4M+",
      label: "Managed Ad Spend",
      sublabel: "Across Meta, Google & TikTok campaigns",
      badge: "Portfolio Benchmark",
      icon: <DollarSign className="w-5 h-5 text-emerald-400" />,
      accent: "from-emerald-500/25 to-teal-500/5",
      border: "hover:border-emerald-500/50",
    },
    {
      value: "4.85x",
      label: "Average Client ROAS",
      sublabel: "Aggregated across e-commerce & lead gen case audits",
      badge: "Case Study Metric",
      icon: <TrendingUp className="w-5 h-5 text-cyan-400" />,
      accent: "from-cyan-500/25 to-indigo-500/5",
      border: "hover:border-cyan-500/50",
    },
    {
      value: "1.24M+",
      label: "Qualified Leads Generated",
      sublabel: "Multi-channel high-intent acquisition",
      badge: "Historical Total",
      icon: <Users className="w-5 h-5 text-purple-400" />,
      accent: "from-purple-500/25 to-pink-500/5",
      border: "hover:border-purple-500/50",
    },
    {
      value: "98.6%",
      label: "Client Retention Rate",
      sublabel: "Based on ongoing multi-quarter contracts",
      badge: "Partner Retention",
      icon: <ShieldCheck className="w-5 h-5 text-pink-400" />,
      accent: "from-pink-500/25 to-rose-500/5",
      border: "hover:border-pink-500/50",
    },
  ];

  return (
    <section className="w-full py-16 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className={`glass-card rounded-2xl p-6 relative overflow-hidden transition-all duration-300 ${stat.border} group border border-slate-200/80 shadow-sm hover:shadow-md`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-30 group-hover:opacity-60 transition-opacity`} />
              
              <div className="relative z-10 flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  {stat.icon}
                </div>
                <span className="text-[10px] font-bold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-full border border-cyan-200/80">
                  {stat.badge}
                </span>
              </div>

              <div className="relative z-10">
                <div className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-1 group-hover:text-cyan-600 transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-800 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500">
                  {stat.sublabel}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Responsible Context Footnote */}
        <p className="text-center text-[11px] text-slate-500 italic max-w-2xl mx-auto">
          *Figures reflect aggregated historical campaign portfolio results and client case study benchmarks across Meta, Google, TikTok, and SEO ecosystems. Individual client results may vary based on market dynamics, ad spend, and offer mechanics.
        </p>
      </div>
    </section>
  );
}

