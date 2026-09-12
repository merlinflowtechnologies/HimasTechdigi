"use client";

import { 
  GraduationCap, 
  Hospital, 
  UtensilsCrossed, 
  ShoppingCart, 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  MessageSquare, 
  BarChart3, 
  CheckCircle2, 
  ExternalLink, 
  ArrowRight,
  Sparkles,
  Layers,
  Globe2,
  Cpu
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function MerlinflowSection() {
  const products = [
    {
      name: "School IMS",
      tagline: "Education, Simplified",
      badge: "EdTech OS",
      description: "Complete school information management — automated admissions, fee collection, exams, report cards, timetable scheduling, parent communication portal, and student lifecycle tracking.",
      icon: GraduationCap,
      color: "from-blue-500/20 to-cyan-500/5",
      accent: "text-blue-400",
      border: "hover:border-blue-500/40",
      badgeBg: "bg-blue-500/15 text-blue-300 border-blue-500/30",
      href: "https://www.merlinflow.in/products/edu",
      highlights: ["Admissions & Enrollment", "Fee & Defaulter Tracking", "Parent-Teacher Portal", "Exam & Grading Engine"]
    },
    {
      name: "Medical ERP",
      tagline: "Healthcare, Digitized",
      badge: "HealthTech ERP",
      description: "Advanced ERP for medical shops, clinics, and pharmacies. Batch & expiry tracking, barcode billing, automated stock replenishment, and 100% GST-compliant invoicing.",
      icon: Hospital,
      color: "from-emerald-500/20 to-teal-500/5",
      accent: "text-emerald-400",
      border: "hover:border-emerald-500/40",
      badgeBg: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
      href: "https://www.merlinflow.in/products/health",
      highlights: ["Batch & Expiry Alerts", "Instant POS Billing", "Multi-Store Inventory", "GST Compliant Invoices"]
    },
    {
      name: "Restaurant ERP",
      tagline: "Hospitality, Automated",
      badge: "Hospitality OS",
      description: "Smart QR-based restaurant automation. Contactless digital menus, real-time Kitchen Order Ticketing (KOT) sync, table reservation management, and split-bill payments.",
      icon: UtensilsCrossed,
      color: "from-orange-500/20 to-amber-500/5",
      accent: "text-orange-400",
      border: "hover:border-orange-500/40",
      badgeBg: "bg-orange-500/15 text-orange-300 border-orange-500/30",
      href: "https://www.merlinflow.in/products/stay",
      highlights: ["Smart QR Digital Menus", "Real-Time KOT Kitchen Sync", "Table & Captain Management", "Automated Billing & UPI"]
    },
    {
      name: "E-Commerce Platform",
      tagline: "Commerce, on Autopilot",
      badge: "D2C Engine",
      description: "End-to-end e-commerce operating system for Indian brands. 1-click checkout, automated Cash on Delivery (COD) verification, Shiprocket logistics sync, and WhatsApp broadcast commerce.",
      icon: ShoppingCart,
      color: "from-purple-500/20 to-pink-500/5",
      accent: "text-purple-400",
      border: "hover:border-purple-500/40",
      badgeBg: "bg-purple-500/15 text-purple-300 border-purple-500/30",
      href: "https://www.merlinflow.in/products/ecommerce",
      highlights: ["1-Click Checkout Funnels", "Shiprocket Logistics API", "COD Fraud Protection", "WhatsApp Retargeting"]
    },
  ];

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
    <section id="merlinflow" className="flex flex-col w-full py-20 sm:py-24 bg-transparent border-t border-white/10 relative overflow-hidden z-10">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
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
            Empowering institutions and enterprises with next-generation cloud SaaS ERP solutions, automated operational workflows, and intelligent software infrastructure.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.merlinflow.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-bold transition-all hover:scale-105 shadow-md group"
            >
              <span>Visit Official Website (merlinflow.in)</span>
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <span className="text-xs text-slate-400 font-medium px-3 py-1.5 rounded-full bg-black/40 border border-white/10">
              Next-Gen Enterprise OS Ecosystem
            </span>
          </div>
        </div>

        {/* 4 Flagship SaaS Products Grid */}
        <div className="mb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {products.map((product, idx) => {
              const IconComp = product.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -4 }}
                  className={`glass-card rounded-2xl p-5 sm:p-6 border border-white/10 transition-all duration-300 ${product.border} relative overflow-hidden group flex flex-col justify-between shadow-xl`}
                >
                  <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${product.color} rounded-bl-full blur-xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity`} />

                  <div>
                    {/* Card Top Row */}
                    <div className="flex items-center justify-between gap-3 mb-3.5">
                      <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center border border-white/15 shrink-0 group-hover:scale-105 transition-transform shadow-inner">
                        <IconComp className={`h-6 w-6 ${product.accent}`} />
                      </div>
                      <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${product.badgeBg}`}>
                        {product.badge}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-xs font-semibold text-cyan-300 block mb-2">
                      {product.tagline}
                    </span>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {product.description}
                    </p>

                    {/* Feature Highlights */}
                    <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2 mb-4">
                      {product.highlights.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-1.5 text-[11px] text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Product Direct Link */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-cyan-300 hover:text-white inline-flex items-center gap-1.5 transition-colors group/link"
                    >
                      Explore {product.name} <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                    <span className="text-[10px] text-slate-400 font-mono">
                      Cloud Powered
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Platform Advantages Strip */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/15 relative overflow-hidden">
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
                className="py-2 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:scale-105 transition-all cursor-pointer border border-white/20"
              >
                <span>Discover Merlinflow OS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                href="#contact"
                className="py-2 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-xs transition-all hover:scale-105 cursor-pointer"
              >
                Book Free Audit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
