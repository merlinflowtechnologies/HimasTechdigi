"use client";

import { 
  Search, 
  Target, 
  FileText, 
  Heart, 
  Settings, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  TrendingUp,
  Tv,
  Users,
  Smartphone,
  ShoppingBag
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function ServicesSection() {
  const services = [
    {
      badge: "Organic Dominance",
      title: "Search Marketing & SEO / GEO",
      description: "Continuous technical, semantic, and structural optimization to rank on search engines and generative AI answers.",
      image: "/seo-organic-dominance.jpg",
      features: [
        "Technical SEO & Speed Optimization",
        "Generative Engine Optimization (GEO)",
        "Hyper-Local SEO & Google Maps 3-Pack",
        "App Store Optimization (ASO)"
      ],
      impact: "Avg +240% Traffic",
      icon: <Search className="h-5 w-5 text-cyan-400" />,
      accent: "from-cyan-500/20 to-emerald-500/5",
      border: "hover:border-cyan-400/50 border-cyan-500/25",
    },
    {
      badge: "High ROAS Scale",
      title: "Paid Media & Demand Gen",
      description: "Laser-targeted Meta, Google, and TikTok campaigns engineered to acquire high-intent buyers at low acquisition costs.",
      features: [
        "Meta Advantage+ & Broad AI Targeting",
        "Google Search & Performance Max",
        "TikTok Spark Direct-Response Ads",
        "High-Impact Retargeting Funnels"
      ],
      impact: "Avg 4.85x ROAS",
      icon: <Target className="h-5 w-5 text-purple-400" />,
      accent: "from-purple-500/20 to-pink-500/5",
      border: "hover:border-purple-500/40",
    },
    {
      badge: "Brand Authority",
      title: "Content & Direct Video",
      description: "Viral UGC video hooks, thought-leadership content, and reputation management to establish unrivaled category authority.",
      features: [
        "Native Creator UGC Video Production",
        "Direct-Response Sales Copywriting",
        "Strategic Influencer Partnerships",
        "Online Reputation Management (ORM)"
      ],
      impact: "3.2x Brand Recall",
      icon: <FileText className="h-5 w-5 text-pink-400" />,
      accent: "from-pink-500/20 to-rose-500/5",
      border: "hover:border-pink-500/40",
    },
    {
      badge: "LTV Maximization",
      title: "Retention & Lifecycle Email",
      description: "Automated lifecycle email & SMS workflows, VIP loyalty tiers, and referral systems to maximize customer lifetime value.",
      features: [
        "Automated Klaviyo & HubSpot Flows",
        "Two-Way SMS Marketing & Nurturing",
        "VIP Loyalty & Customer Tiers",
        "Affiliate & Referral Engine Growth"
      ],
      impact: "+38% Repeat Rate",
      icon: <Heart className="h-5 w-5 text-emerald-400" />,
      accent: "from-emerald-500/20 to-teal-500/5",
      border: "hover:border-emerald-500/40",
    },
    {
      badge: "Conversion Architecture",
      title: "Infrastructure & CRO Funnels",
      description: "Sub-second landing pages built to convert cold visitors with server-side CAPI data tags for 100% accurate attribution.",
      features: [
        "Custom Next.js & Tailwind Landing Pages",
        "Continuous Multivariate CRO Testing",
        "Server-Side Meta CAPI & GA4 Tracking",
        "Go-To-Market (GTM) Budget Modeling"
      ],
      impact: "Up to +180% CVR",
      icon: <Settings className="h-5 w-5 text-blue-400" />,
      accent: "from-blue-500/20 to-indigo-500/5",
      border: "hover:border-blue-500/40",
    },
    {
      badge: "Omnichannel Reach",
      title: "Programmatic & CTV Video",
      description: "Reach premium streaming audiences across Hulu, Roku, YouTube TV, and DSP networks with precision demographic targeting.",
      features: [
        "Connected TV (CTV) & OTT Ad Placements",
        "Real-Time DSP Bidding & Geo-Fencing",
        "Cross-Device Household Retargeting",
        "Brand Lift & Multi-Touch Attribution"
      ],
      impact: "+52% Brand Lift",
      icon: <Tv className="h-5 w-5 text-amber-400" />,
      accent: "from-amber-500/20 to-orange-500/5",
      border: "hover:border-amber-500/40",
    },
    {
      badge: "Creator Performance",
      title: "Influencer & Whitelisting",
      description: "Run dark-post whitelisted ads directly through authentic influencer social handles for maximum social proof and CTR.",
      features: [
        "Creator Scouting & Contract Handling",
        "Meta & TikTok Handle Whitelisting",
        "High-Volume Hook & Angle Iterations",
        "Direct D2C Product Seeding"
      ],
      impact: "2.4x Higher CTR",
      icon: <Users className="h-5 w-5 text-rose-400" />,
      accent: "from-rose-500/20 to-pink-500/5",
      border: "hover:border-rose-500/40",
    },
    {
      badge: "Mobile Scaling",
      title: "App Growth & Acquisition",
      description: "Dominate the app ecosystem with Apple Search Ads (ASA), Google App Campaigns, and custom mobile attribution (MMP).",
      features: [
        "Apple Search Ads (ASA) Custom Bids",
        "Google App Campaigns for Installs",
        "In-App Event & Subscription Scaling",
        "AppsFlyer & Adjust MMP Attribution"
      ],
      impact: "-35% Cost / Install",
      icon: <Smartphone className="h-5 w-5 text-indigo-400" />,
      accent: "from-indigo-500/20 to-cyan-500/5",
      border: "hover:border-indigo-500/40",
    },
    {
      badge: "Marketplace Growth",
      title: "E-Commerce & Amazon Ads",
      description: "Scale sales across Amazon Ads, Shopify Plus, and multi-channel marketplaces with automated catalog feeds and bid algorithms.",
      features: [
        "Amazon Sponsored Products & Brands",
        "Shopify Plus Funnel Optimization",
        "Dynamic Product Catalog Feeds (DPA)",
        "Amazon DSP Audience Retargeting"
      ],
      impact: "5.8x Amazon ROAS",
      icon: <ShoppingBag className="h-5 w-5 text-teal-400" />,
      accent: "from-teal-500/20 to-emerald-500/5",
      border: "hover:border-teal-500/40",
    },
  ];

  return (
    <section id="services" className="flex flex-col w-full py-24 bg-transparent border-t border-white/10 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs uppercase tracking-wider font-bold mb-3 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <Zap className="w-3.5 h-3.5" /> Full-Spectrum Growth Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Engineered To <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-indigo-400 to-pink-400">Multiply Revenue</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            From precision paid acquisition and AI search optimization to conversion funnels, programmatic media, and retention.
          </p>
        </div>

        {/* Services 3x3 Grid - Sleek & Compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ y: -4 }}
              className={`glass-card rounded-2xl p-5 sm:p-6 relative overflow-hidden border border-white/10 transition-all duration-300 ${service.border} group flex flex-col justify-between`}
            >
              <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${service.accent} rounded-bl-full blur-xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity`} />

              <div>
                {/* Visual Image Banner for Search SEO card */}
                {service.image && (
                  <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden mb-4 border border-white/10 group-hover:border-cyan-400/40 transition-all shadow-lg bg-black/40">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070913]/80 via-transparent to-transparent pointer-events-none" />
                  </div>
                )}

                {/* Header row */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/15 shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-inner">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-extrabold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                    <TrendingUp className="w-3 h-3" /> {service.impact}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300 block mb-0.5">
                    {service.badge}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-200 transition-colors duration-300 leading-snug">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-slate-300 text-xs leading-relaxed mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Features */}
                <div className="pt-3 border-t border-white/10">
                  <ul className="space-y-1.5">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-1.5 text-xs text-slate-200">
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-tight line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3.5 mt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  href="#contact"
                  className="text-xs font-bold text-cyan-300 hover:text-white flex items-center gap-1 transition-colors group/link"
                >
                  Explore Strategy <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[10px] text-slate-400 font-medium">Bespoke SLA</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
