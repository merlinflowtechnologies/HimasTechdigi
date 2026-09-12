"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { 
  Share2, 
  Globe, 
  Video, 
  Mail, 
  Cpu, 
  BarChart2, 
  Check, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  Tv,
  Briefcase,
  PlaySquare,
  Sparkles
} from "lucide-react";
import Link from "next/link";

export function MarketingChannelsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const channels = [
    {
      id: "meta",
      icon: <Share2 className="w-5 h-5 text-blue-400" />,
      title: "Meta Ads (FB & IG)",
      badge: "High Scale B2C & B2B",
      desc: "Full-funnel Meta advertising combining Broad AI targeting, custom lookalikes, creative dynamic testing (DCT), and CAPI server-side attribution.",
      features: [
        "Advantage+ Shopping Campaigns",
        "CAPI Server-side Attribution",
        "Dynamic Creative Testing (DCT)",
        "High-Volume UGC Hook Matrix"
      ],
      gradient: "from-blue-600/20 to-indigo-600/5",
      border: "hover:border-blue-500/40",
      accent: "text-blue-400"
    },
    {
      id: "google",
      icon: <Globe className="w-5 h-5 text-amber-400" />,
      title: "Google Ads & P-Max",
      badge: "Highest Purchase Intent",
      desc: "Capture bottom-of-funnel buyers with high-intent Search sculpting, automated Performance Max feed optimization, and Local Map pack domination.",
      features: [
        "Performance Max Feed Tuning",
        "Negative Keyword Sculpting",
        "Google Shopping & Merchant Feed",
        "High-Intent Search Architecture"
      ],
      gradient: "from-amber-600/20 to-orange-600/5",
      border: "hover:border-amber-500/40",
      accent: "text-amber-400"
    },
    {
      id: "geo-seo",
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      title: "SEO & Generative AI (GEO)",
      badge: "AI-Ready Organic Dominance",
      desc: "Rank in traditional Google Search AND get cited directly inside AI answer engines like ChatGPT Search, Perplexity AI, Claude, and Google Gemini.",
      features: [
        "Generative Engine Optimization (GEO)",
        "Topical Authority Clusters",
        "Schema & Knowledge Graph Data",
        "Sub-Second Core Web Vitals"
      ],
      gradient: "from-purple-600/20 to-pink-600/5",
      border: "hover:border-purple-500/40",
      accent: "text-purple-400"
    },
    {
      id: "tiktok",
      icon: <Video className="w-5 h-5 text-pink-400" />,
      title: "TikTok & Viral Shorts",
      badge: "Viral Scale & Brand Lift",
      desc: "Short-form video creatives that don't feel like ads. We script, produce, and deploy high-converting TikTok Spark Ads and native Reels campaigns.",
      features: [
        "TikTok Spark Ads & Whitelisting",
        "Native Creator UGC Production",
        "Trending Sound & Hook Testing",
        "TikTok Shop Affiliate Flywheels"
      ],
      gradient: "from-pink-600/20 to-rose-600/5",
      border: "hover:border-pink-500/40",
      accent: "text-pink-400"
    },
    {
      id: "retention",
      icon: <Mail className="w-5 h-5 text-emerald-400" />,
      title: "Retention & Email/SMS",
      badge: "Automated LTV Engine",
      desc: "Turn traffic into repeat buyers. Automated Klaviyo & HubSpot lifecycle workflows, cart abandonment saves, VIP loyalty, and high-converting SMS blasts.",
      features: [
        "Klaviyo & Attentive Lifecycle Flows",
        "Behavioral Cart Recovery Series",
        "Predictive Churn Winback Sequences",
        "Dynamic SMS Conversational AI"
      ],
      gradient: "from-emerald-600/20 to-teal-600/5",
      border: "hover:border-emerald-500/40",
      accent: "text-emerald-400"
    },
    {
      id: "cro",
      icon: <BarChart2 className="w-5 h-5 text-cyan-400" />,
      title: "CRO & High-Speed Funnels",
      badge: "Conversion Multiplier",
      desc: "Double your ROAS by eliminating landing page bottlenecks. We engineer sub-second custom landing pages with aggressive multivariate A/B testing.",
      features: [
        "Custom Sub-Second Next.js Pages",
        "Heatmap & Scroll Depth Diagnostics",
        "Interactive Multi-Step Forms",
        "Frictionless 1-Click Checkout"
      ],
      gradient: "from-cyan-600/20 to-blue-600/5",
      border: "hover:border-cyan-500/40",
      accent: "text-cyan-400"
    },
    {
      id: "linkedin",
      icon: <Briefcase className="w-5 h-5 text-sky-400" />,
      title: "LinkedIn B2B & ABM",
      badge: "Enterprise Deal Pipeline",
      desc: "Target high-value enterprise decision-makers and C-suite buyers with precision Account-Based Marketing (ABM) and Thought Leader Ads.",
      features: [
        "Precision Matched Audience ABM",
        "C-Suite Thought Leader Ads",
        "Document & InMail Lead Gen Forms",
        "CRM Pipeline Lifecycle Integration"
      ],
      gradient: "from-sky-600/20 to-blue-600/5",
      border: "hover:border-sky-500/40",
      accent: "text-sky-400"
    },
    {
      id: "youtube",
      icon: <PlaySquare className="w-5 h-5 text-red-400" />,
      title: "YouTube Direct Response",
      badge: "High-Ticket Conversion",
      desc: "Scale direct-response video campaigns on the world's 2nd largest search engine with persuasive long-form and Shorts action video funnels.",
      features: [
        "Video Action Campaign (VAC) Scaling",
        "Direct-Response Scriptwriting",
        "YouTube Shorts Feed Advertising",
        "In-Stream Placement Intent Targeting"
      ],
      gradient: "from-red-600/20 to-rose-600/5",
      border: "hover:border-red-500/40",
      accent: "text-red-400"
    },
    {
      id: "programmatic",
      icon: <Tv className="w-5 h-5 text-violet-400" />,
      title: "Programmatic & CTV / OTT",
      badge: "Household Omni-Presence",
      desc: "Put your brand on living room television screens and premium publisher networks with programmatic DSP targeting and household IP retargeting.",
      features: [
        "Connected TV (CTV) & OTT Video",
        "Household IP Retargeting Engines",
        "Premium Publisher Header Bidding",
        "Omnichannel Cross-Device Tracking"
      ],
      gradient: "from-violet-600/20 to-purple-600/5",
      border: "hover:border-violet-500/40",
      accent: "text-violet-400"
    },
  ];

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 370;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="channels" className="py-20 bg-transparent border-t border-slate-200/80 relative overflow-hidden z-10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs uppercase tracking-wider font-bold mb-3 shadow-sm">
              <Cpu className="w-3.5 h-3.5" /> Full-Stack Digital Marketing Arsenal
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight mb-3">
              Omnichannel Dominance <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Across 9 Strategic Channels
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We engineer interconnected multi-channel ecosystems where every ad dollar generates algorithmic synergy across all major advertising networks.
            </p>
          </div>

          {/* Navigation Controls & Counter */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-semibold text-slate-500 hidden sm:inline-block">
              9 Active Networks
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                  canScrollLeft
                    ? "bg-white border-slate-200 text-slate-800 hover:bg-slate-50 hover:scale-105 active:scale-95 shadow-sm"
                    : "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed opacity-50"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                  canScrollRight
                    ? "bg-white border-slate-200 text-slate-800 hover:bg-slate-50 hover:scale-105 active:scale-95 shadow-sm"
                    : "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed opacity-50"
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ----------------- SINGLE ROW HORIZONTAL SCROLLABLE ARSENAL ----------------- */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex items-stretch gap-5 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {channels.map((ch, idx) => (
              <motion.div
                key={ch.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className={`w-[300px] sm:w-[335px] shrink-0 snap-start glass-card rounded-2xl p-5 relative overflow-hidden border border-slate-200/80 transition-all duration-300 ${ch.border} flex flex-col justify-between group shadow-sm hover:shadow-md`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${ch.gradient} opacity-25 group-hover:opacity-60 transition-opacity pointer-events-none`} />

                <div className="relative z-10">
                  {/* Top Header */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 group-hover:scale-110 transition-transform shadow-xs">
                      {ch.icon}
                    </div>
                    <span className="text-[10px] font-bold text-slate-700 bg-white/90 px-2.5 py-0.5 rounded-full border border-slate-200 truncate max-w-[170px] shadow-xs">
                      {ch.badge}
                    </span>
                  </div>

                  {/* Channel Title */}
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="text-[10px] font-mono font-bold text-slate-400">0{idx + 1}</span>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {ch.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {ch.desc}
                  </p>

                  {/* Features list */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    {ch.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="leading-tight truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="relative z-10 pt-3.5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="#contact"
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors group/link cursor-pointer"
                  >
                    Deploy this channel <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[10px] text-slate-400 font-mono">Live Setup</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom helper prompt */}
          <div className="flex items-center justify-between text-xs text-slate-500 mt-2 px-1">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Scroll or drag horizontally to view all 9 specialized channels
            </span>
            <span className="font-mono text-[11px] text-slate-400">
              1 → 9 Channels
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
