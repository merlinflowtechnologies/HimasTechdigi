"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Users, ShieldCheck } from "lucide-react";

export function StatsBar() {
  const stats = [
    {
      value: "$28.4M+",
      label: "Managed Ad Spend",
      sublabel: "Across Meta, Google & TikTok",
      icon: <DollarSign className="w-5 h-5 text-emerald-400" />,
      accent: "from-emerald-500/25 to-teal-500/5",
      border: "hover:border-emerald-500/50",
    },
    {
      value: "4.85x",
      label: "Average Client ROAS",
      sublabel: "Verified across all client tiers",
      icon: <TrendingUp className="w-5 h-5 text-cyan-400" />,
      accent: "from-cyan-500/25 to-indigo-500/5",
      border: "hover:border-cyan-500/50",
    },
    {
      value: "1.24M+",
      label: "Qualified Leads Generated",
      sublabel: "High-intent conversions",
      icon: <Users className="w-5 h-5 text-purple-400" />,
      accent: "from-purple-500/25 to-pink-500/5",
      border: "hover:border-purple-500/50",
    },
    {
      value: "98.6%",
      label: "Client Retention Rate",
      sublabel: "Long-term growth partnerships",
      icon: <ShieldCheck className="w-5 h-5 text-pink-400" />,
      accent: "from-pink-500/25 to-rose-500/5",
      border: "hover:border-pink-500/50",
    },
  ];

  return (
    <section className="w-full py-16 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className={`glass-card rounded-2xl p-6 relative overflow-hidden transition-all duration-300 ${stat.border} group border border-white/10`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-60 group-hover:opacity-100 transition-opacity`} />
              
              <div className="relative z-10 flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 shadow-inner">
                  {stat.icon}
                </div>
                <span className="text-[11px] font-semibold text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/25">
                  Verified Data
                </span>
              </div>

              <div className="relative z-10">
                <div className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 transition-all">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-200 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400">
                  {stat.sublabel}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
