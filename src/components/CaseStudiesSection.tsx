"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, BarChart3, Building2, ShoppingBag, Briefcase, ArrowRight, RotateCcw, Layers } from "lucide-react";
import Link from "next/link";

interface CaseStudy {
  id: string;
  category: "real-estate" | "ecommerce" | "b2b";
  categoryLabel: string;
  client: string;
  headline: string;
  summary: string;
  tags: string[];
  metrics: {
    primary: { value: string; label: string; trend: string };
    secondary: { value: string; label: string; trend: string };
    tertiary: { value: string; label: string; trend: string };
  };
  strategy: string[];
  color: string;
  accentGradient: string;
}

interface CategoryInfo {
  id: "real-estate" | "ecommerce" | "b2b";
  title: string;
  subtitle: string;
  icon: any;
  badge: string;
  color: string;
  accentGradient: string;
  borderColor: string;
  glowColor: string;
  totalGenerated: string;
  avgRoas: string;
  casesCount: number;
}

export function CaseStudiesSection() {
  const [selectedCategory, setSelectedCategory] = useState<"overview" | "real-estate" | "ecommerce" | "b2b">("overview");

  const categories: CategoryInfo[] = [
    {
      id: "real-estate",
      title: "Real Estate & High-Ticket",
      subtitle: "Luxury Penthouses, Off-Plan Villas & Commercial Real Estate",
      icon: Building2,
      badge: "High-Ticket Funnels",
      color: "from-blue-500/20 to-cyan-500/20",
      accentGradient: "from-blue-500 via-cyan-400 to-teal-400",
      borderColor: "hover:border-cyan-400/50 border-cyan-500/30",
      glowColor: "rgba(6, 182, 212, 0.25)",
      totalGenerated: "$110M+",
      avgRoas: "8.8x Avg ROAS",
      casesCount: 3,
    },
    {
      id: "ecommerce",
      title: "E-Commerce & D2C",
      subtitle: "Fashion, Organic Skincare & Performance Audio Scaling",
      icon: ShoppingBag,
      badge: "Omnichannel D2C",
      color: "from-purple-500/20 to-pink-500/20",
      accentGradient: "from-purple-500 via-pink-500 to-rose-400",
      borderColor: "hover:border-pink-400/50 border-purple-500/30",
      glowColor: "rgba(236, 72, 153, 0.25)",
      totalGenerated: "$5.8M+",
      avgRoas: "6.8x Avg ROAS",
      casesCount: 3,
    },
    {
      id: "b2b",
      title: "B2B SaaS & Enterprise",
      subtitle: "Cloud Analytics, Cyber Defense & Product-Led Growth",
      icon: Briefcase,
      badge: "Enterprise Pipeline",
      color: "from-emerald-500/20 to-teal-500/20",
      accentGradient: "from-emerald-400 via-teal-400 to-cyan-400",
      borderColor: "hover:border-emerald-400/50 border-emerald-500/30",
      glowColor: "rgba(16, 185, 129, 0.25)",
      totalGenerated: "$7.0M+",
      avgRoas: "340% Avg Demo Surge",
      casesCount: 3,
    },
  ];

  const caseStudies: Record<"real-estate" | "ecommerce" | "b2b", CaseStudy[]> = {
    "real-estate": [
      {
        id: "skyline-realty",
        category: "real-estate",
        categoryLabel: "Case 1 of 3",
        client: "Aura Luxury Residences",
        headline: "$42M in Inventory Sold via Meta & Google Demand Funnels",
        summary: "Scaled high-intent buyer acquisition for luxury penthouses via custom geo-fencing, generative search ads (GEO), and virtual tour lead capture.",
        tags: ["Meta Ads", "Google P-Max", "Local SEO", "High-Ticket"],
        metrics: {
          primary: { value: "+540%", label: "Buyer Inquiries", trend: "up" },
          secondary: { value: "-44%", label: "Cost / Lead", trend: "down" },
          tertiary: { value: "8.2x", label: "Campaign ROAS", trend: "up" },
        },
        strategy: [
          "Dynamic video remarketing for high-net-worth audiences",
          "Sub-second landing pages with instant booking flow",
          "Automated WhatsApp & SMS concierge nurturing",
        ],
        color: "from-blue-500/20 to-cyan-500/20",
        accentGradient: "from-blue-500 to-cyan-400",
      },
      {
        id: "sovereign-estates",
        category: "real-estate",
        categoryLabel: "Case 2 of 3",
        client: "The Sovereign Waterfront Villas",
        headline: "$68M Off-Plan Sales via Private Meta VIP Access Funnels",
        summary: "Exclusive invitation-only Meta video campaigns targeting ultra-high-net-worth investors, with gated preview brochures and concierge dispatch.",
        tags: ["Meta High-Ticket", "Google Search", "VIP Funnels", "WhatsApp CRM"],
        metrics: {
          primary: { value: "+480%", label: "VIP Viewings", trend: "up" },
          secondary: { value: "-52%", label: "HNI Lead Cost", trend: "down" },
          tertiary: { value: "9.4x", label: "Inventory ROAS", trend: "up" },
        },
        strategy: [
          "Geo-fenced targeting around exclusive yacht clubs & private airports",
          "Two-step luxury qualification interactive survey",
          "Automated instant VIP callback protocol within 5 mins",
        ],
        color: "from-cyan-500/20 to-indigo-500/20",
        accentGradient: "from-cyan-400 to-blue-500",
      },
      {
        id: "pinnacle-commercial",
        category: "real-estate",
        categoryLabel: "Case 3 of 3",
        client: "Pinnacle Commercial & Tech Parks",
        headline: "100% Commercial Pre-Leasing in 90 Days via LinkedIn & Search",
        summary: "Accelerated commercial lease velocity for a 450,000 sq ft office park via LinkedIn ABM campaigns targeting corporate real estate directors.",
        tags: ["LinkedIn ABM", "Commercial Real Estate", "Google Search", "B2B Funnels"],
        metrics: {
          primary: { value: "+390%", label: "Tenant Inquiries", trend: "up" },
          secondary: { value: "450k Sq Ft", label: "Pre-Leased", trend: "up" },
          tertiary: { value: "-34%", label: "Cost / Tour", trend: "down" },
        },
        strategy: [
          "B2B decision-maker intent search on Google targeting office expansion",
          "Interactive 3D floorplan simulator with instant pricing",
          "Automated executive presentation calendar booking",
        ],
        color: "from-blue-600/20 to-teal-500/20",
        accentGradient: "from-blue-400 to-teal-400",
      },
    ],
    ecommerce: [
      {
        id: "lumina-apparel",
        category: "ecommerce",
        categoryLabel: "Case 1 of 3",
        client: "Lumina Organic Apparel",
        headline: "Scaled from $80k to $620k/Mo with Omnichannel Paid Media",
        summary: "Restructured ad account architecture with high-volume UGC creator testing, automated Klaviyo flows, and TikTok Spark ads with continuous CRO.",
        tags: ["TikTok Ads", "Meta Scaling", "Klaviyo Email", "CRO Testing"],
        metrics: {
          primary: { value: "6.4x", label: "Blended ROAS", trend: "up" },
          secondary: { value: "+380%", label: "Repeat Rate", trend: "up" },
          tertiary: { value: "$540k+", label: "Added Monthly Rev", trend: "up" },
        },
        strategy: [
          "Tested 40+ creative hooks weekly with algorithmic budget allocation",
          "Customized 1-click upsell post-purchase funnels",
          "Server-side Conversions API (CAPI) for 100% attribution",
        ],
        color: "from-purple-500/20 to-pink-500/20",
        accentGradient: "from-purple-500 to-pink-500",
      },
      {
        id: "kura-skincare",
        category: "ecommerce",
        categoryLabel: "Case 2 of 3",
        client: "Kura Botanicals Skincare",
        headline: "Scaled to $1.4M/Month with TikTok Spark Ads & Klaviyo",
        summary: "Viral paid-and-retention flywheel using native creator TikTok Spark Ads, personalized skin diagnostic quiz funnels, and automated replenishment SMS.",
        tags: ["TikTok Spark", "Klaviyo SMS", "Quiz Funnel", "D2C Scaling"],
        metrics: {
          primary: { value: "+740%", label: "Revenue Scale", trend: "up" },
          secondary: { value: "5.8x", label: "Account ROAS", trend: "up" },
          tertiary: { value: "46%", label: "Retention Share", trend: "up" },
        },
        strategy: [
          "High-volume creator UGC angle testing (50+ variations/mo)",
          "Interactive skin diagnosis quiz lifting CVR to 8.4%",
          "Automated smart replenishment SMS timed to usage cycles",
        ],
        color: "from-pink-500/20 to-rose-500/20",
        accentGradient: "from-pink-400 to-rose-500",
      },
      {
        id: "veloce-audio",
        category: "ecommerce",
        categoryLabel: "Case 3 of 3",
        client: "Veloce Performance Audio",
        headline: "$3.8M Holiday Sales Blitz with 7.2x ROAS on Meta & P-Max",
        summary: "Multi-phase holiday sales blitz leveraging pre-launch VIP early access, dynamic catalog ads with live countdown badges, and cart-saver flows.",
        tags: ["Google P-Max", "Meta Advantage+", "Black Friday", "Shopify Plus"],
        metrics: {
          primary: { value: "7.2x", label: "Holiday ROAS", trend: "up" },
          secondary: { value: "+610%", label: "New Buyers", trend: "up" },
          tertiary: { value: "-48%", label: "Cost / Purchase", trend: "down" },
        },
        strategy: [
          "30-day pre-launch VIP lead collection at $0.85/lead",
          "Performance Max product feed optimization with custom labels",
          "1-click instant Shopify checkout customization",
        ],
        color: "from-purple-600/20 to-indigo-500/20",
        accentGradient: "from-purple-400 to-indigo-400",
      },
    ],
    b2b: [
      {
        id: "cloudscale-saas",
        category: "b2b",
        categoryLabel: "Case 1 of 3",
        client: "CloudScale Analytics",
        headline: "310% Surge in Enterprise Demo Bookings for Series-A SaaS",
        summary: "Pivoted B2B lead gen to LinkedIn Thought Leadership ads, Google Intent Search, and interactive ROI simulator lead magnets targeting CTOs.",
        tags: ["LinkedIn Ads", "Google Search", "GEO / AI Search", "ABM Scaling"],
        metrics: {
          primary: { value: "+310%", label: "Demo Volume", trend: "up" },
          secondary: { value: "$1.8M", label: "Pipeline in 90d", trend: "up" },
          tertiary: { value: "-38%", label: "Enterprise CAC", trend: "down" },
        },
        strategy: [
          "Precision ABM list targeting Fortune 2000 tech decision-makers",
          "Interactive benchmark simulator funnels",
          "Landing page iterations lifting demo conversion from 1.8% to 6.4%",
        ],
        color: "from-emerald-500/20 to-teal-500/20",
        accentGradient: "from-emerald-500 to-teal-400",
      },
      {
        id: "securestack-cyber",
        category: "b2b",
        categoryLabel: "Case 2 of 3",
        client: "SecureStack Cyber Defense",
        headline: "$5.2M Enterprise Pipeline in 120 Days via ABM & Search",
        summary: "Targeted CISOs and VPs of Security with interactive cloud vulnerability benchmarks and intent-triggered Google Search campaigns.",
        tags: ["LinkedIn Ads", "Enterprise ABM", "Google Search", "Salesforce Sync"],
        metrics: {
          primary: { value: "+360%", label: "Sales Demos", trend: "up" },
          secondary: { value: "4.4x", label: "Pipeline / Spend", trend: "up" },
          tertiary: { value: "-45%", label: "Cost / SQL", trend: "down" },
        },
        strategy: [
          "Precision IP & company-level ABM targeting on LinkedIn",
          "Ungated interactive cyber posture assessment tool",
          "Direct real-time CRM webhook sync to SDR dialer in 60s",
        ],
        color: "from-teal-500/20 to-cyan-500/20",
        accentGradient: "from-teal-400 to-cyan-400",
      },
      {
        id: "omniflow-automation",
        category: "b2b",
        categoryLabel: "Case 3 of 3",
        client: "OmniFlow Workflow Automation",
        headline: "Reduced CAC by 58% while Scaling Signups to 25,000/mo",
        summary: "Scaled product-led freemium SaaS by capturing high-intent workflow search queries and dominating Generative Engine Optimization (GEO) citations.",
        tags: ["GEO / AI Search", "Product-Led", "Google Intent", "CRO Growth"],
        metrics: {
          primary: { value: "25k+", label: "Monthly Trials", trend: "up" },
          secondary: { value: "-58%", label: "Blended CAC", trend: "down" },
          tertiary: { value: "+420%", label: "Paid Conversions", trend: "up" },
        },
        strategy: [
          "Generative Engine Optimization (GEO) on AI search engines",
          "High-intent competitor comparison pages with live feature matrix",
          "Friction-free 1-click Google OAuth onboarding",
        ],
        color: "from-emerald-600/20 to-blue-500/20",
        accentGradient: "from-emerald-400 to-blue-400",
      },
    ],
  };

  return (
    <section id="case-studies" className="py-20 sm:py-24 bg-transparent border-t border-white/10 relative overflow-hidden z-10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-72 w-96 h-96 bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-72 w-96 h-96 bg-brand-purple/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs uppercase tracking-wider font-bold mb-3 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <BarChart3 className="w-3.5 h-3.5" /> Proven Client Results
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
            Real Impact. <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-brand-purple to-pink-500">Unstoppable Revenue.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Explore our 3 specialized growth sectors. Click any industry below to drill down into its 3 verified client case studies.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory("overview")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
              selectedCategory === "overview"
                ? "bg-gradient-to-r from-brand-blue via-indigo-600 to-pink-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] scale-105"
                : "glass-card text-slate-400 hover:text-white hover:bg-white/10 border border-white/10"
            }`}
          >
            <Layers className="w-3.5 h-3.5" /> 3 Industry Overview
          </button>

          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const IconComp = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? `bg-gradient-to-r ${cat.accentGradient} text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105`
                    : "glass-card text-slate-300 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                <IconComp className="w-3.5 h-3.5" /> {cat.title} ({cat.casesCount})
              </button>
            );
          })}
        </div>

        {/* ----------------- 1. DEFAULT VIEW: 3 SECTIONS IN A SINGLE ROW ----------------- */}
        <AnimatePresence mode="wait">
          {selectedCategory === "overview" ? (
            <motion.div
              key="overview-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {categories.map((cat, idx) => {
                const IconComp = cat.icon;
                const featuredCase = caseStudies[cat.id][0];

                return (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.1 }}
                    whileHover={{ y: -6 }}
                    className={`glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden border ${cat.borderColor} group transition-all duration-300 shadow-2xl`}
                  >
                    {/* Top ambient glow */}
                    <div className={`absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl ${cat.color} rounded-bl-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                    <div>
                      {/* Category Header */}
                      <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                            <IconComp className="w-4 h-4 text-cyan-300" />
                          </div>
                          <div>
                            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                              Industry Sector 0{idx + 1}
                            </span>
                            <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-200 transition-colors">
                              {cat.title}
                            </h3>
                          </div>
                        </div>

                        <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-gradient-to-r ${cat.accentGradient} text-white shadow-sm shrink-0`}>
                          3 Live Cases
                        </span>
                      </div>

                      {/* Flagship Case Card Preview */}
                      <div className="p-4 rounded-xl bg-black/40 border border-white/10 mb-4 relative z-10">
                        <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1.5 font-medium">
                          <span>Featured Client:</span>
                          <span className="text-white font-bold">{featuredCase.client}</span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-white leading-snug mb-2 group-hover:text-cyan-300 transition-colors">
                          {featuredCase.headline}
                        </h4>
                        <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed mb-3">
                          {featuredCase.summary}
                        </p>

                        {/* Top 3 Metrics Strip */}
                        <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-white/10 text-center">
                          <div>
                            <div className={`text-sm font-black bg-clip-text text-transparent bg-gradient-to-r ${cat.accentGradient}`}>
                              {featuredCase.metrics.primary.value}
                            </div>
                            <div className="text-[8px] text-slate-400 truncate">{featuredCase.metrics.primary.label}</div>
                          </div>
                          <div className="border-x border-white/10">
                            <div className={`text-sm font-black bg-clip-text text-transparent bg-gradient-to-r ${cat.accentGradient}`}>
                              {featuredCase.metrics.secondary.value}
                            </div>
                            <div className="text-[8px] text-slate-400 truncate">{featuredCase.metrics.secondary.label}</div>
                          </div>
                          <div>
                            <div className={`text-sm font-black bg-clip-text text-transparent bg-gradient-to-r ${cat.accentGradient}`}>
                              {featuredCase.metrics.tertiary.value}
                            </div>
                            <div className="text-[8px] text-slate-400 truncate">{featuredCase.metrics.tertiary.label}</div>
                          </div>
                        </div>
                      </div>

                      {/* Remaining 2 Cases Teaser Badges */}
                      <div className="space-y-1.5 mb-4 relative z-10">
                        <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                          Included in this section:
                        </div>
                        {caseStudies[cat.id].slice(1).map((subCase, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-1.5 text-[11px] text-slate-300 bg-white/[0.03] px-2.5 py-1.5 rounded-lg border border-white/5">
                            <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                            <span className="truncate">{subCase.client} ({subCase.headline.split("via")[0]})</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Click Trigger Button */}
                    <button
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full py-2.5 rounded-xl bg-gradient-to-r ${cat.accentGradient} text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg hover:shadow-cyan-500/25 transition-all cursor-pointer relative z-10 hover:scale-[1.02]`}
                    >
                      View All 3 {cat.title.split("&")[0]} Cases <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            /* ----------------- 2. EXPANDED VIEW: ALL 3 CASE STUDIES FOR SELECTED CATEGORY ----------------- */
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              {/* Back Bar and Active Category Indicator */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-2xl glass-card border border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-300">
                    Showing 3 Deep-Dive Studies for:
                  </span>
                  <span className="text-xs font-extrabold text-white bg-cyan-500/20 px-3 py-1 rounded-full border border-cyan-500/30">
                    {categories.find(c => c.id === selectedCategory)?.title}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedCategory("overview")}
                  className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 border border-white/10 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3 text-cyan-400" /> Back to 3-Industry Overview
                </button>
              </div>

              {/* 3 Case Study Cards for the Selected Category in a Single Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                {caseStudies[selectedCategory].map((study, idx) => (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group hover:border-white/25 border border-white/10 transition-all duration-300 shadow-xl"
                  >
                    <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${study.color} rounded-bl-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                    <div>
                      {/* Header Badge & Client Name */}
                      <div className="flex items-center justify-between gap-2 mb-3 relative z-10">
                        <span className="text-[10px] font-bold text-gray-200 bg-white/10 border border-white/15 px-2.5 py-0.5 rounded-full">
                          {study.categoryLabel}
                        </span>
                        <span className="text-[11px] font-bold text-cyan-300 truncate max-w-[150px]">
                          {study.client}
                        </span>
                      </div>

                      {/* Headline */}
                      <h3 className="text-sm sm:text-base font-bold text-white mb-2 leading-snug group-hover:text-cyan-200 transition-colors">
                        {study.headline}
                      </h3>

                      <p className="text-[11px] text-slate-300 mb-3.5 leading-relaxed line-clamp-2">
                        {study.summary}
                      </p>

                      {/* Compact Metrics Strip */}
                      <div className="grid grid-cols-3 gap-1.5 p-2.5 rounded-xl bg-black/40 border border-white/5 mb-3.5">
                        <div className="text-center">
                          <div className={`text-base font-black bg-clip-text text-transparent bg-gradient-to-r ${study.accentGradient}`}>
                            {study.metrics.primary.value}
                          </div>
                          <div className="text-[8px] text-gray-400 leading-tight truncate">
                            {study.metrics.primary.label}
                          </div>
                        </div>
                        <div className="text-center border-x border-white/5">
                          <div className={`text-base font-black bg-clip-text text-transparent bg-gradient-to-r ${study.accentGradient}`}>
                            {study.metrics.secondary.value}
                          </div>
                          <div className="text-[8px] text-gray-400 leading-tight truncate">
                            {study.metrics.secondary.label}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className={`text-base font-black bg-clip-text text-transparent bg-gradient-to-r ${study.accentGradient}`}>
                            {study.metrics.tertiary.value}
                          </div>
                          <div className="text-[8px] text-gray-400 leading-tight truncate">
                            {study.metrics.tertiary.label}
                          </div>
                        </div>
                      </div>

                      {/* Strategy Checklist */}
                      <div className="space-y-1.5 mb-3.5">
                        {study.strategy.map((item, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-1.5 text-[11px] text-slate-300 leading-snug">
                            <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 pt-2.5 border-t border-white/5">
                        {study.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="text-[9px] px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href="#contact"
                        className="mt-3 w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold flex items-center justify-center gap-1.5 border border-white/10 group-hover:border-cyan-500/40 transition-all cursor-pointer"
                      >
                        Replicate These Results <ArrowUpRight className="w-3 h-3 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

