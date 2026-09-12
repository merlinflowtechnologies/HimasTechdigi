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
    <section id="merlinflow" className="flex flex-col w-full py-16 sm:py-20 bg-transparent border-t border-slate-200/80 relative overflow-hidden z-10">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[300px] bg-gradient-to-tr from-cyan-400/10 via-purple-400/10 to-pink-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs uppercase tracking-wider font-extrabold mb-3.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" /> Strategic Technology Alliance
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 mb-4 tracking-tight">
            In Strategic Collaboration With <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600">
              Merlinflow Technologies Private Limited
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
            Empowering institutions and modern enterprises with next-generation cloud SaaS ERP solutions, automated operational workflows, and intelligent software infrastructure.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/merlinflow"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-500 text-white text-xs font-bold transition-all hover:scale-105 shadow-sm border border-white/30 cursor-pointer"
            >
              <span>Explore Tech Portfolio (6 Suites)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="https://www.merlinflow.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 text-xs font-bold transition-all hover:scale-105 shadow-sm group cursor-pointer"
            >
              <span>Visit merlinflow.in</span>
              <ExternalLink className="w-3.5 h-3.5 text-cyan-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Platform Advantages Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 relative overflow-hidden shadow-sm hover:shadow-md"
        >
          <div className="mb-6 text-center sm:text-left">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-800 bg-cyan-50 px-2.5 py-0.5 rounded-full border border-cyan-200">
              Enterprise Foundation
            </span>
            <h3 className="text-lg sm:text-2xl font-black text-slate-950 mt-1.5">
              Why Forward-Thinking Enterprises Choose Merlinflow
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl font-medium">
              Every system in the Merlinflow suite is built on a shared, unified architecture engineered for 99.9% uptime, data privacy, and frictionless daily operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {advantages.map((adv, idx) => {
              const AdvIcon = adv.icon;
              return (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-cyan-500/40 transition-all flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-100/70 border border-cyan-200 flex items-center justify-center shrink-0 mt-0.5">
                    <AdvIcon className="w-4 h-4 text-cyan-700" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 mb-0.5">{adv.title}</h4>
                    <p className="text-[11px] text-slate-600 leading-snug">{adv.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Unified CTA Footer Banner */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping hidden sm:block shrink-0" />
              <p className="text-xs text-slate-600 font-medium">
                Looking to modernize your institution or enterprise ERP? <strong className="text-slate-900 font-bold">Partner with Himastech & Merlinflow</strong> for integrated tech and growth solutions.
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <a
                href="https://www.merlinflow.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm hover:scale-105 transition-all cursor-pointer border border-white/30"
              >
                <span>Discover Merlinflow OS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                href="#contact"
                className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-bold text-xs transition-all hover:scale-105 cursor-pointer shadow-sm"
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
