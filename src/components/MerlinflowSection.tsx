"use client";

import { 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  MessageSquare, 
  BarChart3, 
  Globe2,
  Sparkles,
  ExternalLink,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function MerlinflowSection() {
  const advantages = [
    {
      icon: Zap,
      title: "Real-Time Cloud Sync",
      desc: "Zero-lag synchronization across desktop, tablet, and mobile devices."
    },
    {
      icon: ShieldCheck,
      title: "Role-Based Access",
      desc: "Granular administrative permissions with bank-grade encryption."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      desc: "Responsive web & native mobile interfaces built for fast frontline execution."
    },
    {
      icon: MessageSquare,
      title: "WhatsApp & SMS Alerts",
      desc: "Automated event triggers, instant receipts, and operational alerts via WhatsApp."
    },
    {
      icon: BarChart3,
      title: "Visual Intelligence",
      desc: "Executive analytics dashboards for real-time revenue and performance telemetry."
    },
    {
      icon: Globe2,
      title: "India-Ready Compliance",
      desc: "Native GST invoices, UPI QR payments, Aadhaar verification, and multi-language support."
    },
  ];

  return (
    <section id="merlinflow" className="flex flex-col w-full py-16 sm:py-20 bg-transparent border-t border-white/10 relative overflow-hidden z-10">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[300px] bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-pink-500/15 border border-white/20 text-cyan-300 text-xs uppercase tracking-wider font-bold mb-3.5 shadow-[0_0_25px_rgba(6,182,212,0.25)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Strategic Technology Alliance
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            In Strategic Collaboration With <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Merlinflow Technologies Private Limited
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Empowering institutions and modern enterprises with next-generation cloud SaaS ERP solutions, automated operational workflows, and intelligent software infrastructure.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.merlinflow.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/20 via-indigo-600/20 to-pink-500/20 hover:bg-white/15 border border-white/20 text-white text-xs font-bold transition-all hover:scale-105 shadow-md group"
            >
              <span>Visit Official Website (merlinflow.in)</span>
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <span className="text-xs text-slate-400 font-medium px-3.5 py-2 rounded-full bg-black/40 border border-white/10">
              Next-Gen Enterprise OS Ecosystem
            </span>
          </div>
        </div>

        {/* Platform Advantages Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-6 sm:p-8 border border-white/15 relative overflow-hidden"
        >
          <div className="mb-6 text-center sm:text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
              Enterprise Foundation
            </span>
            <h3 className="text-lg sm:text-2xl font-black text-white mt-1.5">
              Why Forward-Thinking Enterprises Choose Merlinflow
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Every system in the Merlinflow suite is built on a shared, unified architecture engineered for 99.9% uptime, data privacy, and frictionless daily operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {advantages.map((adv, idx) => {
              const AdvIcon = adv.icon;
              return (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 transition-all flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <AdvIcon className="w-4 h-4 text-cyan-300" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white mb-0.5">{adv.title}</h4>
                    <p className="text-[11px] text-slate-300 leading-snug">{adv.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Unified CTA Footer Banner */}
          <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping hidden sm:block shrink-0" />
              <p className="text-xs text-slate-300">
                Looking to modernize your institution or enterprise ERP? <strong className="text-white">Partner with Himastech & Merlinflow</strong> for integrated tech and growth solutions.
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <a
                href="https://www.merlinflow.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:scale-105 transition-all cursor-pointer border border-white/20"
              >
                <span>Discover Merlinflow OS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                href="#contact"
                className="py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-xs transition-all hover:scale-105 cursor-pointer"
              >
                Book Free Audit
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
