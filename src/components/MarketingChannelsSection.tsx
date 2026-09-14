"use client";

import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  Sparkles,
  X,
  Clock,
  Layers,
  CheckCircle2,
  Calendar,
  PhoneCall
} from "lucide-react";
import Link from "next/link";

interface ChannelDetails {
  id: string;
  icon: React.ReactNode;
  title: string;
  badge: string;
  desc: string;
  features: string[];
  gradient: string;
  border: string;
  accent: string;
  timeline: string;
  phases: {
    step: string;
    title: string;
    duration: string;
    description: string;
    deliverable: string;
  }[];
  keyDeliverables: string[];
}

export function MarketingChannelsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedChannel, setSelectedChannel] = useState<ChannelDetails | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const channels: ChannelDetails[] = [
    {
      id: "meta",
      icon: <Share2 className="w-5 h-5 text-blue-500" />,
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
      accent: "text-blue-600",
      timeline: "5-7 Days to Live Scale",
      phases: [
        {
          step: "01",
          title: "Telemetry & CAPI Setup",
          duration: "Day 1 - 2",
          description: "Implement Server-Side Meta Conversions API (CAPI) and event deduplication to bypass browser ad blockers.",
          deliverable: "100% Signal Match Quality Score"
        },
        {
          step: "02",
          title: "Creative Hook Sprint",
          duration: "Day 3 - 4",
          description: "Script and produce 10+ direct response UGC video hooks, static angle carousels, and high-CTR headline variants.",
          deliverable: "10+ Tested Ad Creatives Ready"
        },
        {
          step: "03",
          title: "Advantage+ Campaign Staging",
          duration: "Day 5 - 6",
          description: "Configure Dynamic Creative Testing (DCT) ad sets and Broad AI targeting structures with automated rules.",
          deliverable: "Live Campaign Architecture Staged"
        },
        {
          step: "04",
          title: "Algorithmic Scaling & ROAS Lift",
          duration: "Day 7+",
          description: "Scale winning ad sets horizontally with automated dayparting, cost-cap testing, and retargeting loops.",
          deliverable: "Daily ROAS Dashboard & Weekly Reports"
        }
      ],
      keyDeliverables: [
        "Meta Business Manager & CAPI Verification",
        "10+ Custom UGC Hooks & Static Visuals",
        "Dynamic Creative Testing Matrix",
        "Real-Time Slack/WhatsApp Daily Reporting"
      ]
    },
    {
      id: "google",
      icon: <Globe className="w-5 h-5 text-amber-500" />,
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
      accent: "text-amber-600",
      timeline: "4-6 Days to Live Scale",
      phases: [
        {
          step: "01",
          title: "Forensic Keyword & Search Audit",
          duration: "Day 1 - 2",
          description: "Identify high-converting transactional queries and build an exhaustive 500+ negative keyword barrier.",
          deliverable: "Intent Keyword Matrix & Negative List"
        },
        {
          step: "02",
          title: "Merchant Center & Feed Optimization",
          duration: "Day 3 - 4",
          description: "Enrich product titles, descriptions, and custom labels for maximum Google Shopping prominence.",
          deliverable: "100% Approved Merchant Center Feed"
        },
        {
          step: "03",
          title: "P-Max & Search Campaign Staging",
          duration: "Day 5 - 6",
          description: "Deploy single-theme asset groups with high-intent responsive search ads and custom audience signals.",
          deliverable: "Structured High-Intent Campaigns Live"
        },
        {
          step: "04",
          title: "Target CPA/ROAS Algorithmic Scaling",
          duration: "Day 7+",
          description: "Shift into automated Smart Bidding with continuous search query refinement and competitor conquesting.",
          deliverable: "Weekly Conversion Optimization & Attribution"
        }
      ],
      keyDeliverables: [
        "High-Intent Search & P-Max Campaigns",
        "Google Merchant Center Feed Overhaul",
        "Enhanced Conversion Tracking in GA4",
        "Competitor Conquesting & Brand Defense"
      ]
    },
    {
      id: "geo-seo",
      icon: <Cpu className="w-5 h-5 text-purple-500" />,
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
      accent: "text-purple-600",
      timeline: "7-10 Days Initial Rollout",
      phases: [
        {
          step: "01",
          title: "Technical & Core Web Vitals Audit",
          duration: "Day 1 - 3",
          description: "Fix crawl errors, server latency, and optimize sub-second performance for Google Bot and AI crawlers.",
          deliverable: "90+ Google PageSpeed Score"
        },
        {
          step: "02",
          title: "Knowledge Graph & Schema Injection",
          duration: "Day 4 - 6",
          description: "Deploy rich JSON-LD Schema (Organization, Product, FAQ, Article) to structure entity data for LLMs.",
          deliverable: "Structured Entity Graph Validated"
        },
        {
          step: "03",
          title: "Topical Cluster & GEO Content Sprint",
          duration: "Day 7 - 10",
          description: "Author comprehensive authority pillars designed to answer natural-language AI queries.",
          deliverable: "Authoritative Topic Hubs Published"
        },
        {
          step: "04",
          title: "AI Answer Engine Citation Tracking",
          duration: "Day 11+",
          description: "Monitor presence in ChatGPT Search, Perplexity, and Google AI Overviews with continuous entity building.",
          deliverable: "GEO & Traditional Rank Dashboard"
        }
      ],
      keyDeliverables: [
        "Complete Technical SEO & Speed Fixes",
        "JSON-LD Schema & Entity Optimization",
        "High-Value Topic Authority Content",
        "Monthly AI & Search Visibility Audits"
      ]
    },
    {
      id: "tiktok",
      icon: <Video className="w-5 h-5 text-pink-500" />,
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
      accent: "text-pink-600",
      timeline: "5-8 Days to First Video Push",
      phases: [
        {
          step: "01",
          title: "Pixel & TikTok Events API (EAPI)",
          duration: "Day 1 - 2",
          description: "Connect server-side event tracking and synchronize your product catalog directly with TikTok Ads Manager.",
          deliverable: "Verified EAPI Data Connection"
        },
        {
          step: "02",
          title: "UGC Creator Sourcing & Scripting",
          duration: "Day 3 - 5",
          description: "Brief vetted niche creators with high-retention 3-second hook scripts and authentic product unboxings.",
          deliverable: "6-8 High-Energy Raw Video Assets"
        },
        {
          step: "03",
          title: "Spark Ads Whitelisting & Launch",
          duration: "Day 6 - 7",
          description: "Boost native creator posts directly from creator handles using Spark Ads for maximum authenticity.",
          deliverable: "Live Spark Ad Campaigns Staged"
        },
        {
          step: "04",
          title: "Creative Rotation & Shop Scale",
          duration: "Day 8+",
          description: "Rapidly swap fatigued hooks with fresh iterations and tap into TikTok Shop affiliate commission engines.",
          deliverable: "Low-CPA Viral Scaling Loop"
        }
      ],
      keyDeliverables: [
        "TikTok Events API & Catalog Integration",
        "Custom Scripted Native UGC Videos",
        "Creator Whitelisting & Spark Ad Launch",
        "Weekly Creative Fatigue Management"
      ]
    },
    {
      id: "retention",
      icon: <Mail className="w-5 h-5 text-emerald-500" />,
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
      accent: "text-emerald-600",
      timeline: "4-7 Days to Full Flow Launch",
      phases: [
        {
          step: "01",
          title: "Customer Data & RFM Segmentation",
          duration: "Day 1 - 2",
          description: "Segment your database by Recency, Frequency, and Monetary value to personalize messaging.",
          deliverable: "Customer RFM Matrix Configured"
        },
        {
          step: "02",
          title: "Core Automation Architecture Build",
          duration: "Day 3 - 5",
          description: "Design and code 6 vital flows: Welcome Series, Abandoned Cart, Browse Abandonment, and Post-Purchase VIP.",
          deliverable: "6 Production-Ready Klaviyo Flows"
        },
        {
          step: "03",
          title: "SMS Flash Campaign & List Growth",
          duration: "Day 6 - 7",
          description: "Deploy high-converting 2-step opt-in popups and launch initial zero-cost revenue SMS broadcasts.",
          deliverable: "Compliant SMS List Growth Popups Live"
        },
        {
          step: "04",
          title: "Automated Compounding Revenue",
          duration: "Day 8+",
          description: "Continuous A/B testing of subject lines, deliverability monitoring, and bi-weekly revenue campaigns.",
          deliverable: "30%+ Total Revenue Driven from Email/SMS"
        }
      ],
      keyDeliverables: [
        "6 Automated Core Lifecycle Email Flows",
        "High-Converting SMS Strategy & Popups",
        "RFM Customer Retention Segments",
        "Weekly Broadcasts & Deliverability Maintenance"
      ]
    },
    {
      id: "cro",
      icon: <BarChart2 className="w-5 h-5 text-cyan-500" />,
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
      accent: "text-cyan-600",
      timeline: "5-7 Days to Live Test",
      phases: [
        {
          step: "01",
          title: "Heatmap & Funnel Drop-Off Audit",
          duration: "Day 1 - 2",
          description: "Analyze session recordings, scroll depth, and micro-dropoffs across existing landing pages.",
          deliverable: "Friction & Drop-Off Diagnostic Report"
        },
        {
          step: "02",
          title: "Sub-Second Next.js Funnel Build",
          duration: "Day 3 - 5",
          description: "Design and build dedicated high-speed landing page variations with direct-response copy.",
          deliverable: "High-Speed Custom Funnel Coded"
        },
        {
          step: "03",
          title: "Multivariate A/B Split Test Launch",
          duration: "Day 6 - 7",
          description: "Split test traffic 50/50 between original and new variant with Statistical Significance tracking.",
          deliverable: "Live A/B Split Testing Active"
        },
        {
          step: "04",
          title: "Conversion Lift & Winner Scaling",
          duration: "Day 8+",
          description: "Implement winning headline, offer, and checkout layout into the baseline site.",
          deliverable: "+35% to +80% Conversion Rate Uplift"
        }
      ],
      keyDeliverables: [
        "Full UX & Session Recording Audit",
        "Custom Ultra-Fast Next.js Landing Page",
        "A/B Split Testing Telemetry Setup",
        "Frictionless Mobile Checkout Optimization"
      ]
    },
    {
      id: "linkedin",
      icon: <Briefcase className="w-5 h-5 text-sky-500" />,
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
      accent: "text-sky-600",
      timeline: "4-6 Days to Deal Pipeline",
      phases: [
        {
          step: "01",
          title: "Account List & ICP Upload",
          duration: "Day 1 - 2",
          description: "Upload your target account CSV lists and define decision-maker job titles (VP, Director, CXO).",
          deliverable: "Verified Matched Audience Built"
        },
        {
          step: "02",
          title: "Executive Thought Leader Creatives",
          duration: "Day 3 - 4",
          description: "Format founder insights into PDF carousels and Thought Leader ad formats that drive high trust.",
          deliverable: "High-Authority B2B Creative Suite"
        },
        {
          step: "03",
          title: "Native Lead Gen Forms & CRM Sync",
          duration: "Day 5 - 6",
          description: "Configure 1-click prefilled lead forms routed in real-time to your Salesforce/HubSpot CRM.",
          deliverable: "Instant Webhook Lead Integration"
        },
        {
          step: "04",
          title: "Pipeline Acceleration & Retargeting",
          duration: "Day 7+",
          description: "Retarget warm website visitors and high-value accounts with custom case study proof points.",
          deliverable: "Qualified Enterprise Pipeline Growth"
        }
      ],
      keyDeliverables: [
        "Account-Based Marketing (ABM) Setup",
        "C-Suite Thought Leader & PDF Ads",
        "Native Lead Gen Forms & CRM Webhook",
        "Weekly Cost-Per-SQL Analytics"
      ]
    },
    {
      id: "youtube",
      icon: <PlaySquare className="w-5 h-5 text-red-500" />,
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
      accent: "text-red-600",
      timeline: "6-8 Days to First Video Launch",
      phases: [
        {
          step: "01",
          title: "Audience & Placement Mapping",
          duration: "Day 1 - 2",
          description: "Identify high-intent YouTube channels, custom search intent segments, and competitor in-stream videos.",
          deliverable: "Targeted Video Placement Lists"
        },
        {
          step: "02",
          title: "Problem-Agitate-Solve Video Scripts",
          duration: "Day 3 - 5",
          description: "Write direct-response video scripts with high-retention 5-second skip-stoppers.",
          deliverable: "3 Production-Ready Script Concepts"
        },
        {
          step: "03",
          title: "Video Action Campaigns (VAC) Launch",
          duration: "Day 6 - 7",
          description: "Launch in-stream and Shorts video ads with sticky call-to-action buttons driving to targeted funnels.",
          deliverable: "Live VAC Campaigns Staged"
        },
        {
          step: "04",
          title: "View-Through Attribution & Scale",
          duration: "Day 8+",
          description: "Optimize for lowest Cost-Per-Acquisition (CPA) and scale high-performing video creatives.",
          deliverable: "High-Ticket Scaled Lead Flow"
        }
      ],
      keyDeliverables: [
        "High-Retention YouTube Video Scripts",
        "Video Action Campaign (VAC) Setup",
        "Custom Intent Placement Exclusions",
        "Cross-Device View-Through Telemetry"
      ]
    },
    {
      id: "programmatic",
      icon: <Tv className="w-5 h-5 text-violet-500" />,
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
      accent: "text-violet-600",
      timeline: "5-7 Days to Live Broadcasting",
      phases: [
        {
          step: "01",
          title: "DSP & Household IP Graph Mapping",
          duration: "Day 1 - 2",
          description: "Connect Demand-Side Platforms (DSP) and map high-net-worth household IP clusters.",
          deliverable: "Programmatic DSP Account Verified"
        },
        {
          step: "02",
          title: "HD Television Commercial Adaptation",
          duration: "Day 3 - 4",
          description: "Format video creatives for non-skippable 15s/30s connected TV spots with interactive QR overlays.",
          deliverable: "Broadcast-Ready CTV Video Files"
        },
        {
          step: "03",
          title: "Premium Publisher & App Network Launch",
          duration: "Day 5 - 6",
          description: "Deploy inventory across major streaming apps (Hulu, Disney+, Prime, ESPN) with frequency capping.",
          deliverable: "Live Connected TV Stream Active"
        },
        {
          step: "04",
          title: "Cross-Device Retargeting Follow-Up",
          duration: "Day 7+",
          description: "Automatically retarget smartphones and laptops in the exact households that viewed the CTV commercial.",
          deliverable: "Household Omnichannel Attribution"
        }
      ],
      keyDeliverables: [
        "Connected TV (CTV) DSP Media Buying",
        "Interactive Living-Room Screen Creatives",
        "Household IP Cross-Device Retargeting",
        "Brand Lift & Multi-Touch Attribution"
      ]
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
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Click &quot;Deploy this channel&quot; on any network below to inspect the step-by-step deployment timeline, telemetry setup, and live execution blueprint.
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
                className={`w-[300px] sm:w-[335px] shrink-0 snap-start glass-card rounded-2xl p-5 relative overflow-hidden border border-slate-200/90 transition-all duration-300 ${ch.border} flex flex-col justify-between group shadow-md hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer`}
                onClick={() => setSelectedChannel(ch)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${ch.gradient} opacity-25 group-hover:opacity-60 transition-opacity pointer-events-none`} />

                <div className="relative z-10">
                  {/* Top Header */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <div className="p-2.5 rounded-xl glass-subcard group-hover:scale-110 transition-transform shadow-xs">
                      {ch.icon}
                    </div>
                    <span className="text-[10px] font-bold text-slate-700 glass-subcard px-2.5 py-0.5 rounded-full truncate max-w-[170px] shadow-xs">
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
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedChannel(ch);
                    }}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors group/link cursor-pointer"
                  >
                    Deploy this channel <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[10px] text-slate-400 font-mono">View Roadmap</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom helper prompt */}
          <div className="flex items-center justify-between text-xs text-slate-500 mt-2 px-1">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Click any channel to view what happens next in the deployment roadmap
            </span>
            <span className="font-mono text-[11px] text-slate-400">
              1 → 9 Channels
            </span>
          </div>
        </div>
      </div>

      {/* ================= MODAL: WHAT COMES NEXT AFTER DEPLOYING CHANNEL (PORTAL & Z-999999) ================= */}
      {mounted && createPortal(
        <AnimatePresence>
          {selectedChannel && (
            <div className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-2xl glass-modal p-4 sm:p-5 z-10"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedChannel(null)}
                  className="absolute top-3.5 right-3.5 p-1.5 rounded-full glass-subcard hover:bg-white text-slate-600 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Modal Header */}
                <div className="flex items-start gap-3 mb-4 pr-6">
                  <div className="p-2.5 rounded-xl glass-subcard shadow-xs shrink-0">
                    {selectedChannel.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 flex-wrap mb-0.5">
                      <span className="text-[9px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        Deployment Blueprint
                      </span>
                      <span className="text-[10px] font-bold text-slate-500 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-blue-500" /> {selectedChannel.timeline}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                      {selectedChannel.title}
                    </h3>
                    <p className="text-[11px] text-slate-600 mt-0.5 font-medium leading-snug">
                      {selectedChannel.desc}
                    </p>
                  </div>
                </div>

                {/* What Comes Next Step-by-Step Execution Journey */}
                <div className="mb-4">
                  <div className="flex items-center gap-1.5 mb-2.5 pb-1.5 border-b border-slate-100">
                    <Layers className="w-3.5 h-3.5 text-blue-600" />
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-900">
                      What Comes Next: 4-Phase Deployment Journey
                    </h4>
                  </div>

                  <div className="space-y-2">
                    {selectedChannel.phases.map((phase, pIdx) => (
                      <div 
                        key={pIdx}
                        className="p-2.5 rounded-xl glass-subcard hover:border-blue-400/50 transition-colors shadow-2xs"
                      >
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <div className="flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-md bg-blue-600 text-white font-black text-[10px] flex items-center justify-center shadow-xs">
                              {phase.step}
                            </span>
                            <h5 className="text-[11px] font-bold text-slate-900">
                              {phase.title}
                            </h5>
                          </div>
                          <span className="text-[9px] font-semibold text-slate-500 bg-slate-100 px-1.5 py-0.2 rounded">
                            {phase.duration}
                          </span>
                        </div>
                        <p className="text-[10.5px] text-slate-600 leading-snug pl-6 mb-1">
                          {phase.description}
                        </p>
                        <div className="pl-6 text-[9.5px] text-blue-700 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>Key Deliverable: {phase.deliverable}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Deliverables Summary */}
                <div className="p-3 rounded-xl glass-subcard mb-4 shadow-2xs">
                  <h5 className="text-[11px] font-bold text-slate-900 mb-1.5 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-blue-600" />
                    Included in this Channel Deployment:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {selectedChannel.keyDeliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-1 text-[10.5px] text-slate-700 font-medium">
                        <Check className="w-3 h-3 text-blue-600 shrink-0 mt-0.5" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 pt-1">
                  <Link
                    href="#contact"
                    onClick={() => setSelectedChannel(null)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-xs hover:shadow-md transition-all flex items-center justify-center gap-1.5 text-center"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Launch {selectedChannel.title}</span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSelectedChannel(null)}
                    className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                  >
                    Close Blueprint
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
