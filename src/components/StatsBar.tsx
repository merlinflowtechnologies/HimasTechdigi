"use client";

import { motion } from "framer-motion";
import { TrendingUp, IndianRupee, Users, ShieldCheck } from "lucide-react";

export function StatsBar() {
  const stats = [
    {
      value: "₹240Cr+",
      label: "Managed Ad Spend",
      sublabel: "Across Meta, Google & TikTok campaigns",
      badge: "Portfolio Benchmark",
      icon: <IndianRupee className="w-5 h-5 text-emerald-400" />,
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
              whileHover={{ y: -6, scale: 1.02 }}
              className={`glass-card rounded-2xl p-6 relative overflow-hidden transition-all duration-300 ${stat.border} group shadow-md hover:shadow-xl`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-30 group-hover:opacity-60 transition-opacity`} />
              
              <div className="relative z-10 flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-xl glass-subcard shadow-xs group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <span className="text-[10px] font-bold text-cyan-800 glass-subcard px-2.5 py-1 rounded-full border border-cyan-200/60 shadow-2xs">
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
      </div>
    </section>
  );
}

