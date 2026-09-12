"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, BarChart3 } from "lucide-react";
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

export function CaseStudiesSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | "real-estate" | "ecommerce" | "b2b">("all");

  const caseStudies: CaseStudy[] = [
    // --- REAL ESTATE & HIGH-TICKET (3 Case Studies) ---
    {
      id: "skyline-realty",
      category: "real-estate",
      categoryLabel: "Real Estate & High-Ticket",
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
      categoryLabel: "Real Estate & High-Ticket",
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
      categoryLabel: "Real Estate & High-Ticket",
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

    // --- E-COMMERCE & D2C (3 Case Studies) ---
    {
      id: "lumina-apparel",
      category: "ecommerce",
      categoryLabel: "E-Commerce & D2C",
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
      categoryLabel: "E-Commerce & D2C",
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
      categoryLabel: "E-Commerce & D2C",
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

    // --- B2B SAAS & ENTERPRISE (3 Case Studies) ---
    {
      id: "cloudscale-saas",
      category: "b2b",
      categoryLabel: "B2B SaaS & Enterprise",
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
      categoryLabel: "B2B SaaS & Enterprise",
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
      categoryLabel: "B2B SaaS & Enterprise",
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
  ];

  const filteredStudies = activeFilter === "all" 
    ? caseStudies 
    : caseStudies.filter(c => c.category === activeFilter);

  return (
    <section id="case-studies" className="py-24 bg-transparent border-t border-white/10 relative overflow-hidden z-10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-72 w-96 h-96 bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-72 w-96 h-96 bg-brand-purple/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs uppercase tracking-wider font-bold mb-3">
            <BarChart3 className="w-3.5 h-3.5" /> Proven Client Results
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Real Impact. <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-brand-purple to-pink-500">Unstoppable Revenue.</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Explore how our data-driven growth architectures generated millions in tracked enterprise revenue.
          </p>
        </div>

        {/* Filter Tabs with dynamic count */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {[
            { id: "all", label: "All Campaigns (9)" },
            { id: "real-estate", label: "Real Estate & High-Ticket (3)" },
            { id: "ecommerce", label: "E-Commerce & D2C (3)" },
            { id: "b2b", label: "B2B SaaS & Enterprise (3)" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_0_15px_rgba(59,130,246,0.35)]"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Compact Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study, idx) => (
              <motion.div
                key={study.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group hover:border-white/20 transition-all duration-300"
              >
                <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${study.color} rounded-bl-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity`} />

                <div>
                  {/* Category & Client */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold text-gray-300 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">
                      {study.categoryLabel}
                    </span>
                    <span className="text-[11px] font-semibold text-gray-400 truncate max-w-[140px]">
                      {study.client}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                    {study.headline}
                  </h3>

                  <p className="text-xs text-gray-400 mb-4 leading-relaxed line-clamp-2">
                    {study.summary}
                  </p>

                  {/* Compact Metrics Strip */}
                  <div className="grid grid-cols-3 gap-1.5 p-2.5 rounded-xl bg-black/40 border border-white/5 mb-4">
                    <div className="text-center">
                      <div className={`text-base font-black bg-clip-text text-transparent bg-gradient-to-r ${study.accentGradient}`}>
                        {study.metrics.primary.value}
                      </div>
                      <div className="text-[9px] text-gray-400 leading-tight truncate">
                        {study.metrics.primary.label}
                      </div>
                    </div>
                    <div className="text-center border-x border-white/5">
                      <div className={`text-base font-black bg-clip-text text-transparent bg-gradient-to-r ${study.accentGradient}`}>
                        {study.metrics.secondary.value}
                      </div>
                      <div className="text-[9px] text-gray-400 leading-tight truncate">
                        {study.metrics.secondary.label}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className={`text-base font-black bg-clip-text text-transparent bg-gradient-to-r ${study.accentGradient}`}>
                        {study.metrics.tertiary.value}
                      </div>
                      <div className="text-[9px] text-gray-400 leading-tight truncate">
                        {study.metrics.tertiary.label}
                      </div>
                    </div>
                  </div>

                  {/* Strategy Checklist */}
                  <div className="space-y-1.5 mb-4">
                    {study.strategy.map((item, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-1.5 text-[11px] text-gray-300 leading-snug">
                        <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 pt-3 border-t border-white/5">
                    {study.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[9px] px-2 py-0.5 rounded bg-white/[0.04] text-gray-400 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="#contact"
                    className="mt-3.5 w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold flex items-center justify-center gap-1.5 border border-white/10 group-hover:border-cyan-500/40 transition-all cursor-pointer"
                  >
                    Replicate These Results <ArrowUpRight className="w-3 h-3 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
