"use client";

import { useState, useEffect } from "react";
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
  ShoppingBag,
  X,
  Clock,
  Sparkles,
  ShieldCheck,
  Cpu,
  Layers
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface ServiceStrategy {
  badge: string;
  title: string;
  shortTitle: string;
  description: string;
  impact: string;
  icon: any;
  accent: string;
  border: string;
  gradientText: string;
  playbook: {
    step: string;
    title: string;
    detail: string;
  }[];
  techStack: string[];
  deliverables: {
    timeline: string;
    reporting: string;
    teamPod: string;
    guarantee: string;
  };
  features: string[];
}

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceStrategy | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedService(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const services: ServiceStrategy[] = [
    {
      badge: "Organic Dominance",
      title: "Search Marketing & SEO / GEO",
      shortTitle: "SEO & Generative AI Search",
      description: "Continuous technical, semantic, and structural optimization to rank on search engines and generative AI answers.",
      impact: "Avg +240% Traffic",
      icon: Search,
      accent: "from-cyan-500/20 to-blue-500/5",
      border: "hover:border-cyan-500/40",
      gradientText: "from-cyan-400 via-teal-300 to-emerald-400",
      features: [
        "Technical SEO & Speed Optimization",
        "Generative Engine Optimization (GEO)",
        "Hyper-Local SEO & Google Maps 3-Pack",
        "App Store Optimization (ASO)"
      ],
      playbook: [
        {
          step: "01",
          title: "Technical Architecture & Core Web Vitals Audit",
          detail: "Eliminate crawl errors, optimize sub-second load performance (LCP, INP, CLS), and engineer advanced JSON-LD structured data."
        },
        {
          step: "02",
          title: "Topical Authority & Semantic Keyword Clustering",
          detail: "Design hub-and-spoke topic clusters that claim total entity authority in Google's Knowledge Graph."
        },
        {
          step: "03",
          title: "Generative Engine Optimization (GEO)",
          detail: "Train brand citations and vector knowledge to become the primary recommended answer in ChatGPT, Perplexity, and Google AI Overviews."
        },
        {
          step: "04",
          title: "High-Authority Digital PR & Backlink Flywheel",
          detail: "Earn authoritative white-hat editorial backlinks from tier-1 industry publications."
        }
      ],
      techStack: ["Ahrefs", "Semrush", "Screaming Frog", "Perplexity AI", "GSC", "Schema.org"],
      deliverables: {
        timeline: "4-6 Months Compounding Growth",
        reporting: "Bi-Weekly Keyword & Ranking Audits",
        teamPod: "Senior SEO Lead + Technical Dev + Content Strategist",
        guarantee: "100% White-Hat & Google Algorithm Proof"
      }
    },
    {
      badge: "High ROAS Scale",
      title: "Paid Media & Demand Gen",
      shortTitle: "Paid Media (Meta, Google, TikTok)",
      description: "Laser-targeted Meta, Google, and TikTok campaigns engineered to acquire high-intent buyers at low acquisition costs.",
      impact: "Avg 4.85x ROAS",
      icon: Target,
      accent: "from-purple-500/20 to-pink-500/5",
      border: "hover:border-purple-500/40",
      gradientText: "from-purple-400 via-pink-400 to-rose-400",
      features: [
        "Meta Advantage+ & Broad AI Targeting",
        "Google Search & Performance Max",
        "TikTok Spark Direct-Response Ads",
        "High-Impact Retargeting Funnels"
      ],
      playbook: [
        {
          step: "01",
          title: "Full-Funnel Account Restructuring & Server CAPI",
          detail: "Rebuild ad account structures for machine learning with bulletproof server-side Meta Conversions API and GA4 tracking."
        },
        {
          step: "02",
          title: "Dynamic Creative Testing (DCT 3:2:2)",
          detail: "Rapidly test 30+ creative angles, visual hooks, and direct-response formats every single week."
        },
        {
          step: "03",
          title: "Google Search & Performance Max Tuning",
          detail: "Capture bottom-of-funnel intent through Alpha/Beta search campaigns and optimized Merchant Center feeds."
        },
        {
          step: "04",
          title: "Algorithmic Budget Scaling & Dayparting",
          detail: "Scale ad spend with automated pacing rules, margin-first bidding, and cross-channel retargeting."
        }
      ],
      techStack: ["Meta Ads Manager", "Google Ads", "TikTok Ads", "Triple Whale", "GTM Server", "Looker Studio"],
      deliverables: {
        timeline: "14-Day Rapid Calibration & Live Scale",
        reporting: "Live Real-Time Dashboard + Weekly Strategy Call",
        teamPod: "Dedicated Senior Media Buyer + Creative Strategist",
        guarantee: "100% Client Ownership of Ad Accounts & Data"
      }
    },
    {
      badge: "Brand Authority",
      title: "Content & Direct Video",
      shortTitle: "UGC Video & Direct-Response Creative",
      description: "Viral UGC video hooks, thought-leadership content, and reputation management to establish unrivaled category authority.",
      impact: "3.2x Brand Recall",
      icon: FileText,
      accent: "from-pink-500/20 to-rose-500/5",
      border: "hover:border-pink-500/40",
      gradientText: "from-pink-400 via-rose-400 to-purple-400",
      features: [
        "Native Creator UGC Video Production",
        "Direct-Response Sales Copywriting",
        "Strategic Influencer Partnerships",
        "Online Reputation Management (ORM)"
      ],
      playbook: [
        {
          step: "01",
          title: "Attention Psychology & Hook Architecture",
          detail: "Script high-retention 3-second pattern interrupts and visual hooks that stop user scrolling instantly."
        },
        {
          step: "02",
          title: "High-Volume UGC Creator Batch Filming",
          detail: "Source, direct, and produce 20+ authentic user-generated video assets per month across diverse creator personas."
        },
        {
          step: "03",
          title: "Dynamic Kinetic Editing & Captioning",
          detail: "Fast-paced sound design, jump-cut pacing, and high-contrast kinetic captions built specifically for mobile screens."
        },
        {
          step: "04",
          title: "Omnichannel Repurposing Engine",
          detail: "Format and optimize winning creative angles for Reels, TikTok, YouTube Shorts, and Meta Advantage+ catalogs."
        }
      ],
      techStack: ["CapCut Pro", "Adobe Premiere", "Foreplay.co", "Motion App", "Descript", "Miro"],
      deliverables: {
        timeline: "7-Day Turnaround per Creative Batch",
        reporting: "Weekly Creative Fatigue & Hook Rate Analysis",
        teamPod: "Creative Director + 2 Video Editors + Copywriter",
        guarantee: "Full Commercial Usage & Raw Asset Rights"
      }
    },
    {
      badge: "LTV Maximization",
      title: "Retention & Lifecycle Email",
      shortTitle: "Email & SMS Retention Flows",
      description: "Automated lifecycle email & SMS workflows, VIP loyalty tiers, and referral systems to maximize customer lifetime value.",
      impact: "+38% Repeat Rate",
      icon: Heart,
      accent: "from-emerald-500/20 to-teal-500/5",
      border: "hover:border-emerald-500/40",
      gradientText: "from-emerald-400 via-teal-300 to-cyan-400",
      features: [
        "Automated Klaviyo & HubSpot Flows",
        "Two-Way SMS Marketing & Nurturing",
        "VIP Loyalty & Customer Tiers",
        "Affiliate & Referral Engine Growth"
      ],
      playbook: [
        {
          step: "01",
          title: "Deep Customer Journey & Drop-Off Audit",
          detail: "Map every touchpoint from first click to repeat order, identifying checkout drop-offs and dormant subscribers."
        },
        {
          step: "02",
          title: "Core Automation Flow Engineering",
          detail: "Build high-converting Welcome Series, Abandoned Cart Recoveries, Post-Purchase Nurtures, and VIP Win-Backs."
        },
        {
          step: "03",
          title: "Two-Way Conversational SMS Marketing",
          detail: "Deploy high-intent SMS alerts, time-sensitive flash sales, and conversational replenishment reminders."
        },
        {
          step: "04",
          title: "Predictive Cohort Segmentation & LTV Multipliers",
          detail: "Segment audiences by RFM (Recency, Frequency, Monetary) to increase 90-day repeat purchase rates."
        }
      ],
      techStack: ["Klaviyo", "Attentive SMS", "HubSpot", "Postscript", "Zapier", "ChartMogul"],
      deliverables: {
        timeline: "10-Day Complete Flow Deployment",
        reporting: "Weekly Campaign Broadcast & Revenue Attribution",
        teamPod: "Retention Strategist + Email UX Designer + Copywriter",
        guarantee: "Zero Spam Score & 99%+ Deliverability"
      }
    },
    {
      badge: "Conversion Architecture",
      title: "Infrastructure & CRO Funnels",
      shortTitle: "Landing Pages & CRO Architecture",
      description: "Sub-second landing pages built to convert cold visitors with server-side CAPI data tags for 100% accurate attribution.",
      impact: "Up to +180% CVR",
      icon: Settings,
      accent: "from-blue-500/20 to-indigo-500/5",
      border: "hover:border-blue-500/40",
      gradientText: "from-blue-400 via-cyan-400 to-indigo-400",
      features: [
        "Custom Next.js & Tailwind Landing Pages",
        "Continuous Multivariate CRO Testing",
        "Server-Side Meta CAPI & GA4 Tracking",
        "Go-To-Market (GTM) Budget Modeling"
      ],
      playbook: [
        {
          step: "01",
          title: "Heatmap & Session Recording Diagnostics",
          detail: "Analyze user click friction, scroll drop-offs, and form abandonment to engineer cognitive clarity."
        },
        {
          step: "02",
          title: "Sub-Second High-Speed Page Construction",
          detail: "Develop clean, modern Next.js landing pages engineered for instant load speeds (<1.2s) on mobile devices."
        },
        {
          step: "03",
          title: "Multivariate A/B Testing Matrix",
          detail: "Continuously test headlines, hero angles, social proof placement, and frictionless 1-click checkout flows."
        },
        {
          step: "04",
          title: "Server-Side Data Telemetry Integration",
          detail: "Deploy server-side GTM containers and Meta CAPI to eliminate browser ad blocker data loss."
        }
      ],
      techStack: ["Next.js", "TailwindCSS", "VWO", "Hotjar", "GA4", "GTM Server"],
      deliverables: {
        timeline: "Sub-Second Speed Guarantee (<1.2s Load Time)",
        reporting: "Statistical Significance Conversion Test Reports",
        teamPod: "Full-Stack CRO Developer + UI/UX Designer",
        guarantee: "Guaranteed Conversion Rate Uplift"
      }
    },
    {
      badge: "Omnichannel Reach",
      title: "Programmatic & CTV Video",
      shortTitle: "Programmatic DSP & Connected TV",
      description: "Reach premium streaming audiences across Hulu, Roku, YouTube TV, and DSP networks with precision demographic targeting.",
      impact: "+52% Brand Lift",
      icon: Tv,
      accent: "from-amber-500/20 to-orange-500/5",
      border: "hover:border-amber-500/40",
      gradientText: "from-amber-400 via-orange-400 to-rose-400",
      features: [
        "Connected TV (CTV) & OTT Ad Placements",
        "Real-Time DSP Bidding & Geo-Fencing",
        "Cross-Device Household Retargeting",
        "Brand Lift & Multi-Touch Attribution"
      ],
      playbook: [
        {
          step: "01",
          title: "Cross-Device Household Identity Graphing",
          detail: "Map target consumer households across mobile, desktop, and smart TVs for coordinated cross-device messaging."
        },
        {
          step: "02",
          title: "Premium Streaming Network Placements",
          detail: "Deliver non-skippable HD video ads across Hulu, Roku, Disney+, YouTube TV, and Max."
        },
        {
          step: "03",
          title: "Dynamic Geo-Fencing & High-Intent Bidding",
          detail: "Trigger real-time programmatic ad impressions when prospects enter designated competitor or commercial zones."
        },
        {
          step: "04",
          title: "Multi-Touch Brand Lift & Offline Attribution",
          detail: "Track incremental website visits, digital conversions, and foot-traffic lift post-ad exposure."
        }
      ],
      techStack: ["The Trade Desk", "Amazon DSP", "DV360", "Roku OneView", "LiveRamp"],
      deliverables: {
        timeline: "48-Hour Rapid DSP Campaign Setup",
        reporting: "View-Through Attribution & Brand Lift Metrics",
        teamPod: "Programmatic Media Director + Data Strategist",
        guarantee: "100% Brand-Safe, Fraud-Filtered Inventory"
      }
    },
    {
      badge: "Creator Performance",
      title: "Influencer & Whitelisting",
      shortTitle: "Influencer Seeding & Whitelisting",
      description: "Run dark-post whitelisted ads directly through authentic influencer social handles for maximum social proof and CTR.",
      impact: "2.4x Higher CTR",
      icon: Users,
      accent: "from-rose-500/20 to-pink-500/5",
      border: "hover:border-rose-500/40",
      gradientText: "from-rose-400 via-pink-400 to-purple-400",
      features: [
        "Creator Scouting & Contract Handling",
        "Meta & TikTok Handle Whitelisting",
        "High-Volume Hook & Angle Iterations",
        "Direct D2C Product Seeding"
      ],
      playbook: [
        {
          step: "01",
          title: "Creator Vetting & Audience Authenticity Audit",
          detail: "Audit influencer follower demographics, fake follower ratios, and genuine engagement authenticity."
        },
        {
          step: "02",
          title: "Product Seeding & Storyboard Briefs",
          detail: "Send curated product packages with conversion-engineered briefing guides that feel natural and authentic."
        },
        {
          step: "03",
          title: "Paid Handle Whitelisting Access",
          detail: "Secure direct advertiser permissions to run dark ads directly from the creator's verified social profile."
        },
        {
          step: "04",
          title: "Spark Ad Scaling & Spark Funnels",
          detail: "Scale top-performing creator posts with paid media budgets, driving higher CTRs and lower blended CAC."
        }
      ],
      techStack: ["Insense", "Grin", "TikTok Creator Marketplace", "Meta Partnership Ads", "Miro"],
      deliverables: {
        timeline: "15-Day Creator Pipeline & Content Ingestion",
        reporting: "Bi-Weekly Creator ROAS & Engagement Scorecards",
        teamPod: "Influencer Coordinator + Talent Scout + Media Buyer",
        guarantee: "Full Contractual Ad Usage & Whitelisting Rights"
      }
    },
    {
      badge: "Mobile Scaling",
      title: "App Growth & Acquisition",
      shortTitle: "Mobile App Installs & ASA Scaling",
      description: "Dominate the app ecosystem with Apple Search Ads (ASA), Google App Campaigns, and custom mobile attribution (MMP).",
      impact: "-35% Cost / Install",
      icon: Smartphone,
      accent: "from-indigo-500/20 to-cyan-500/5",
      border: "hover:border-indigo-500/40",
      gradientText: "from-indigo-400 via-cyan-400 to-blue-400",
      features: [
        "Apple Search Ads (ASA) Custom Bids",
        "Google App Campaigns for Installs",
        "In-App Event & Subscription Scaling",
        "AppsFlyer & Adjust MMP Attribution"
      ],
      playbook: [
        {
          step: "01",
          title: "Apple Search Ads (ASA) Custom Product Pages",
          detail: "Target high-intent App Store search queries with tailored screenshot pages mapped to exact user intent."
        },
        {
          step: "02",
          title: "Google App Campaigns (ACi & ACe) Scaling",
          detail: "Run machine-learning optimized app install and in-app re-engagement campaigns across Search, YouTube, and Play."
        },
        {
          step: "03",
          title: "Mobile Measurement Partner (MMP) Telemetry",
          detail: "Configure deep-linking, deferred routing, and clean install attribution via AppsFlyer or Adjust."
        },
        {
          step: "04",
          title: "Paywall & Subscription Tier CRO",
          detail: "Optimize onboarding quiz funnels and paywall pricing tiers to maximize trial-to-paid conversion rates."
        }
      ],
      techStack: ["Apple Search Ads", "Google Play Console", "AppsFlyer", "Adjust", "RevenueCat", "Branch.io"],
      deliverables: {
        timeline: "7-Day MMP Integration & Campaign Launch",
        reporting: "Weekly CPI, CPA, and Retention Cohort Tracking",
        teamPod: "Mobile Growth Lead + Mobile Telemetry Engineer",
        guarantee: "SKAdNetwork & Privacy-Compliant Tracking"
      }
    },
    {
      badge: "Marketplace Growth",
      title: "E-Commerce & Amazon Ads",
      shortTitle: "Amazon Ads & Marketplace Scaling",
      description: "Scale sales across Amazon Ads, Shopify Plus, and multi-channel marketplaces with automated catalog feeds and bid algorithms.",
      impact: "5.8x Amazon ROAS",
      icon: ShoppingBag,
      accent: "from-teal-500/20 to-emerald-500/5",
      border: "hover:border-teal-500/40",
      gradientText: "from-teal-400 via-emerald-400 to-cyan-400",
      features: [
        "Amazon Sponsored Products & Brands",
        "Shopify Plus Funnel Optimization",
        "Dynamic Product Catalog Feeds (DPA)",
        "Amazon DSP Audience Retargeting"
      ],
      playbook: [
        {
          step: "01",
          title: "Catalog Audit & Buy Box Defense",
          detail: "Audit listing titles, bullet points, A+ content, and backend search terms while defending top search rankings."
        },
        {
          step: "02",
          title: "Sponsored Products, Brands & Video Ads",
          detail: "Dominate high-converting category search results with video in-feed ads and competitor conquesting."
        },
        {
          step: "03",
          title: "Amazon DSP Audience Retargeting",
          detail: "Retarget cart abandoners and past purchasers across Amazon-owned properties to drive repeat subscribe-and-save."
        },
        {
          step: "04",
          title: "Multi-Channel Catalog Feed Automation",
          detail: "Sync real-time stock levels, pricing, and custom product labels across Shopify, Amazon, and Google Shopping."
        }
      ],
      techStack: ["Amazon Ads Console", "Shopify Plus", "Helium 10", "Perpetua", "Pacvue", "Jungle Scout"],
      deliverables: {
        timeline: "3-5 Day Catalog Ingestion & Launch",
        reporting: "Daily TACoS & ACoS Efficiency Dashboards",
        teamPod: "Amazon Advertising Specialist + Catalog Manager",
        guarantee: "Total Buy Box Protection & Positive TACoS"
      }
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
          {services.map((service, index) => {
            const IconComp = service.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                whileHover={{ y: -4 }}
                className={`glass-card rounded-2xl p-5 sm:p-6 relative overflow-hidden border border-white/10 transition-all duration-300 ${service.border} group flex flex-col justify-between shadow-xl`}
              >
                <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${service.accent} rounded-bl-full blur-xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity`} />

                <div>
                  {/* Header row */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/15 shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-inner">
                      <IconComp className="h-5 w-5 text-cyan-400" />
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

                {/* Interactive Modal Action Trigger */}
                <div className="pt-3.5 mt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold text-cyan-300 hover:text-white flex items-center gap-1.5 transition-colors group/link cursor-pointer"
                  >
                    Explore Strategy <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[10px] text-slate-400 font-medium bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                    Bespoke SLA
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ----------------- INTERACTIVE STRATEGY DEEP-DIVE MODAL ----------------- */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", duration: 0.45, bounce: 0.15 }}
              className="glass-card rounded-3xl p-5 sm:p-8 max-w-3xl w-full relative z-10 border border-white/20 shadow-[0_0_60px_rgba(0,0,0,0.8)] max-h-[90vh] overflow-y-auto my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                aria-label="Close strategy modal"
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-start gap-4 mb-6 pr-10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-white/20 flex items-center justify-center shrink-0 shadow-inner">
                  {selectedService && <selectedService.icon className="w-6 h-6 text-cyan-300" />}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                      {selectedService.badge} Strategy Playbook
                    </span>
                    <span className="text-[10px] font-extrabold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                      <TrendingUp className="w-3 h-3" /> {selectedService.impact}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    {selectedService.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {selectedService.description}
                  </p>
                </div>
              </div>

              {/* Section 1: Detailed Execution Playbook (4 Steps) */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  Detailed 4-Step Execution Framework
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.playbook.map((phase) => (
                    <div 
                      key={phase.step}
                      className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="text-[10px] font-black text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-md border border-cyan-500/20">
                            Phase {phase.step}
                          </span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                        <h4 className="text-xs font-bold text-white mb-1 leading-snug">
                          {phase.title}
                        </h4>
                        <p className="text-[11px] text-slate-300 leading-relaxed">
                          {phase.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 2: Core Tech Stack & Tools */}
              <div className="mb-6 p-4 rounded-xl bg-black/40 border border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  <Cpu className="w-3.5 h-3.5 text-purple-400" />
                  Integrated Tech Stack & Telemetry
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedService.techStack.map((tool, tIdx) => (
                    <span 
                      key={tIdx}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200 font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Section 3: Expected Deliverables & SLA Guarantees */}
              <div className="mb-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-[9px] text-slate-400 uppercase tracking-wider block font-semibold">Speed / Timeline</span>
                  <span className="text-[11px] font-bold text-cyan-300 mt-0.5 block">{selectedService.deliverables.timeline}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-[9px] text-slate-400 uppercase tracking-wider block font-semibold">Live Reporting</span>
                  <span className="text-[11px] font-bold text-purple-300 mt-0.5 block">{selectedService.deliverables.reporting}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-[9px] text-slate-400 uppercase tracking-wider block font-semibold">Assigned Pod</span>
                  <span className="text-[11px] font-bold text-pink-300 mt-0.5 block">{selectedService.deliverables.teamPod}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-[9px] text-slate-400 uppercase tracking-wider block font-semibold">Data Protection</span>
                  <span className="text-[11px] font-bold text-emerald-300 mt-0.5 block">{selectedService.deliverables.guarantee}</span>
                </div>
              </div>

              {/* Section 4: 1-Click Direct Action Buttons */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:scale-[1.02] transition-all cursor-pointer border border-white/20"
                >
                  <Sparkles className="w-4 h-4" /> Book Free Strategy Audit <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={`https://wa.me/918374373753?text=${encodeURIComponent(
                    `Hi Himastech, I would like to explore your strategy playbook for ${selectedService.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z"/>
                  </svg>
                  Discuss on WhatsApp (+91 8374373753)
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
