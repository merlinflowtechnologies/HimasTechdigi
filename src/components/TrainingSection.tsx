"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { 
  CheckCircle2, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Users, 
  ArrowRight, 
  Sparkles, 
  Compass, 
  Flag, 
  Target, 
  Search, 
  Share2, 
  TrendingUp, 
  Crown,
  Clock,
  Layers,
  Zap,
  DollarSign,
  ChevronRight,
  X,
  Send,
  Phone,
  Mail,
  Building,
  User,
  ShieldCheck,
  Calendar
} from "lucide-react";
import { motion, AnimatePresence, useScroll } from "framer-motion";

interface Milestone {
  step: string;
  phase: string;
  milestone: string;
  title: string;
  desc: string;
  topics: string[];
  tools: string[];
}

interface TrainingTrack {
  id: string;
  title: string;
  shortTitle: string;
  icon: any;
  badge: string;
  duration: string;
  level: string;
  avgSalary: string;
  color: string;
  glowColor: string;
  accentGradient: string;
  borderColor: string;
  textColor: string;
  description: string;
  milestones: Milestone[];
}

export function TrainingSection() {
  const trainingTracks: TrainingTrack[] = [
    {
      id: "performance",
      title: "Performance Marketing & Paid Ads Acceleration",
      shortTitle: "Paid Media & ROAS",
      icon: Target,
      badge: "Highest Demand Track",
      duration: "8 Weeks",
      level: "Beginner to Advanced",
      avgSalary: "$85,000 - $130,000",
      color: "cyan",
      glowColor: "rgba(6, 182, 212, 0.4)",
      accentGradient: "from-cyan-500 via-blue-500 to-indigo-600",
      borderColor: "border-cyan-500/40",
      textColor: "text-cyan-400",
      description: "Master full-funnel media buying across Meta, Google P-Max, TikTok, and YouTube. Learn server-side CAPI telemetry, algorithmic bidding, and managing live ad spend.",
      milestones: [
        {
          step: "01",
          phase: "Weeks 1-2",
          milestone: "Telemetry & Attribution Hub",
          title: "Tracking Infrastructure & Unit Economics",
          desc: "Set up bulletproof server-side tracking, GTM web/server containers, Meta CAPI, and master CAC, LTV, ROAS, and MER unit economics.",
          topics: [
            "Server-Side GTM & Meta Conversions API",
            "GA4 Enhanced E-commerce Setup",
            "Unit Economics & Contribution Margin",
            "Avatar Research & Offer Angles",
          ],
          tools: ["GTM Server", "Meta CAPI", "GA4", "Triple Whale"],
        },
        {
          step: "02",
          phase: "Weeks 3-4",
          milestone: "Paid Social Scale Junction",
          title: "Meta & TikTok Dynamic Creative Testing",
          desc: "Scale ad budgets using Advantage+ Shopping Campaigns, broad audience targeting, rapid Dynamic Creative Testing (DCT), and viral hook mechanics.",
          topics: [
            "Advantage+ Shopping & Broad Targeting",
            "Dynamic Creative Testing 3:2:2",
            "Short-Form UGC Scripting & Hooks",
            "Budget Pacing & Scaling Rules",
          ],
          tools: ["Meta Ads Manager", "TikTok Ads", "Foreplay", "CapCut"],
        },
        {
          step: "03",
          phase: "Weeks 5-6",
          milestone: "High-Intent Capture Turnpike",
          title: "Google Ads, Performance Max & YouTube",
          desc: "Capture bottom-of-funnel demand through Google Search sculpting, automated Performance Max feed optimization, and high-converting YouTube video ads.",
          topics: [
            "Alpha/Beta Search Structures & Negatives",
            "P-Max Asset Group & Feed Tuning",
            "YouTube Direct Action Campaigns",
            "Google Merchant Center Feed Rules",
          ],
          tools: ["Google Ads", "Merchant Center", "Semrush", "YouTube"],
        },
        {
          step: "04",
          phase: "Weeks 7-8",
          milestone: "Summit & Live Portfolio Capstone",
          title: "Live Budget Management & Placement",
          desc: "Deploy and manage real client ad budgets under mentorship, conduct comprehensive portfolio audits, and graduate directly into agency interviews.",
          topics: [
            "Live Client Budget Allocation & Scale",
            "Creative Fatigue Resuscitation",
            "Executive Client Reporting Decks",
            "Direct Talent Placement Network",
          ],
          tools: ["Looker Studio", "Motion App", "Slack", "Supermetrics"],
        },
      ],
    },
    {
      id: "seo-geo",
      title: "SEO, GEO & Generative AI Search Mastery",
      shortTitle: "SEO & AI Search (GEO)",
      icon: Search,
      badge: "Next-Gen Search",
      duration: "6 Weeks",
      level: "Intermediate",
      avgSalary: "$75,000 - $120,000",
      color: "emerald",
      glowColor: "rgba(16, 185, 129, 0.4)",
      accentGradient: "from-emerald-400 via-teal-500 to-cyan-600",
      borderColor: "border-emerald-500/40",
      textColor: "text-emerald-400",
      description: "Pioneer search rankings for both classic Google Search and Generative AI engines (ChatGPT, Perplexity, Claude, Google AI Overviews).",
      milestones: [
        {
          step: "01",
          phase: "Weeks 1-2",
          milestone: "Technical Foundation Bridge",
          title: "Technical Architecture & Core Web Vitals",
          desc: "Master site crawling diagnostics, semantic HTML hierarchy, schema markup engineering, and sub-second Core Web Vitals performance.",
          topics: [
            "Crawl Budget & Log File Diagnostics",
            "Advanced JSON-LD Structured Data",
            "Core Web Vitals (LCP, INP, CLS) Fixes",
            "JavaScript SEO & SSR Rendering",
          ],
          tools: ["Screaming Frog", "GSC", "PageSpeed", "Schema.org"],
        },
        {
          step: "02",
          phase: "Weeks 3-4",
          milestone: "Topical Authority Interchange",
          title: "Semantic Keyword Clustering & Topic Hubs",
          desc: "Design impenetrable topical authority clusters that dominate competitive search landscapes and earn automated entity association in Google's Knowledge Graph.",
          topics: [
            "Entity-Based Keyword Research",
            "Topical Authority Hub-and-Spoke Maps",
            "Information Gain & Content Gaps",
            "Internal PageRank Architecture",
          ],
          tools: ["Ahrefs", "Semrush", "SurferSEO", "MarketMuse"],
        },
        {
          step: "03",
          phase: "Weeks 4-5",
          milestone: "Generative Engine Ridge",
          title: "Generative Engine Optimization (GEO) & LLMs",
          desc: "Optimize brand citations and knowledge representations to become the primary recommended answer in ChatGPT Search, Perplexity AI, and Google AI Overviews.",
          topics: [
            "LLM Vector Embeddings & Citations",
            "Perplexity & ChatGPT Source Attribution",
            "Brand Graph Knowledge Verification",
            "AI Programmatic Content Workflows",
          ],
          tools: ["ChatGPT Search", "Perplexity AI", "Claude API", "Python"],
        },
        {
          step: "04",
          phase: "Week 6",
          milestone: "Authority Peak Summit",
          title: "Digital PR, Link Flywheels & Capstone",
          desc: "Execute data-driven Digital PR campaigns, build organic backlink flywheels from tier-1 media, and deliver a live enterprise audit report.",
          topics: [
            "Data-Led Digital PR Studies",
            "White-Hat Link Earning Flywheels",
            "Enterprise SEO Audit Presentation",
            "Certification & Portfolio Defense",
          ],
          tools: ["BuzzStream", "HARO", "Hunter.io", "Ahrefs"],
        },
      ],
    },
    {
      id: "social-viral",
      title: "Social Media, Viral Content & Creator Strategy",
      shortTitle: "Social & Viral Content",
      icon: Share2,
      badge: "High Engagement",
      duration: "6 Weeks",
      level: "All Experience Levels",
      avgSalary: "$65,000 - $110,000",
      color: "pink",
      glowColor: "rgba(236, 72, 153, 0.4)",
      accentGradient: "from-pink-500 via-rose-500 to-purple-600",
      borderColor: "border-pink-500/40",
      textColor: "text-pink-400",
      description: "Master viral video engineering, short-form storytelling across TikTok/Reels, UGC creator management, and building hyper-engaged community flywheels.",
      milestones: [
        {
          step: "01",
          phase: "Weeks 1-2",
          milestone: "Viral Hook Laboratory",
          title: "Attention Psychology & Hook Architecture",
          desc: "Deconstruct viral algorithms, master visual/audio pattern interrupts, and write 3-second hooks that drive 80%+ 3-second retention rates.",
          topics: [
            "Watch-Time & Completion Physics",
            "50+ High-Converting Hook Formulas",
            "Trending Audio Timing & Pacing",
            "Brand Identity & Visual Standards",
          ],
          tools: ["TikTok Center", "IG Trends", "Notion", "Miro"],
        },
        {
          step: "02",
          phase: "Weeks 3-4",
          milestone: "Content Factory Turnpike",
          title: "High-Volume Short-Form Production",
          desc: "Streamline batch video shooting, dynamic kinetic captioning, B-roll pacing, and multi-platform distribution across Reels, Shorts, and TikTok.",
          topics: [
            "Solo Smartphone Studio & Lighting",
            "Fast-Paced Sound Design & Captions",
            "Batch Filming (10+ Videos / Day)",
            "Omnichannel Video Repurposing",
          ],
          tools: ["CapCut Pro", "Premiere", "Descript", "OpusClip"],
        },
        {
          step: "03",
          phase: "Weeks 4-5",
          milestone: "Creator & Affiliate Junction",
          title: "UGC Pipelines & Influencer Seeding",
          desc: "Recruit, brief, and negotiate with micro and macro UGC creators, orchestrate viral product seedings, and set up TikTok Shop affiliate networks.",
          topics: [
            "UGC Creator Briefing & Storyboards",
            "Influencer Outreach & Usage Rights",
            "TikTok Shop Affiliate Program Setup",
            "Whitelisting & Spark Ad Amplification",
          ],
          tools: ["TikTok Shop", "Insense", "Grin", "Billo"],
        },
        {
          step: "04",
          phase: "Week 6",
          milestone: "Viral Launch Summit",
          title: "Community Growth & Live Campaign Capstone",
          desc: "Launch an omnichannel viral growth campaign, build an active community channel, and present an organic social ROI portfolio.",
          topics: [
            "Community Building & Direct Channels",
            "Crisis Management & Comment Conversion",
            "Organic-to-Paid Scaling Flywheel",
            "Capstone Campaign Defense & Review",
          ],
          tools: ["Discord", "Sprout Social", "Later", "ManyChat"],
        },
      ],
    },
    {
      id: "growth-cro",
      title: "Growth Hacking, CRO & Retention Funnels",
      shortTitle: "Growth & CRO Hub",
      icon: TrendingUp,
      badge: "Highest ROI Focus",
      duration: "8 Weeks",
      level: "Intermediate to Advanced",
      avgSalary: "$90,000 - $145,000",
      color: "purple",
      glowColor: "rgba(168, 85, 247, 0.4)",
      accentGradient: "from-purple-500 via-indigo-500 to-cyan-500",
      borderColor: "border-purple-500/40",
      textColor: "text-purple-400",
      description: "Transform traffic into exponential revenue through scientific conversion rate optimization (CRO), multivariate testing, and lifecycle retention automation.",
      milestones: [
        {
          step: "01",
          phase: "Weeks 1-2",
          milestone: "Landing Page Lab",
          title: "High-Converting Page Architecture & Speed",
          desc: "Build landing pages engineered for instant cognitive clarity, zero scroll friction, sub-second load speeds, and maximum form completion.",
          topics: [
            "Direct-Response Information Hierarchy",
            "Frictionless Mobile Checkout Flows",
            "Sub-Second High-Speed Construction",
            "Trust Signal & Social Proof Layouts",
          ],
          tools: ["Figma", "Webflow / Replo", "PageSpeed", "Unbounce"],
        },
        {
          step: "02",
          phase: "Weeks 3-4",
          milestone: "Experimentation Turnpike",
          title: "CRO Analytics, Heatmaps & A/B Testing",
          desc: "Run statistically significant multivariate experiments, diagnose drop-off funnels using session recordings, and eliminate user hesitation.",
          topics: [
            "Heatmap & Scroll Depth Diagnostics",
            "Statistical Significance Calculation",
            "Multivariate Copy & Visual A/B Tests",
            "Micro-Conversion Tracking Audits",
          ],
          tools: ["Hotjar / Clarity", "VWO / Optimizely", "PostHog", "GA4"],
        },
        {
          step: "03",
          phase: "Weeks 5-6",
          milestone: "Retention Engine Junction",
          title: "Automated Lifecycle Flows (Email & SMS)",
          desc: "Build high-LTV automated messaging sequences that recover abandoned carts, nurture post-purchase loyalty, and drive repeat subscriptions.",
          topics: [
            "Klaviyo Advanced Segmentation Rules",
            "Cart Abandonment Recovery Series",
            "Predictive Churn Winback Automations",
            "Dynamic Product VIP Rewards",
          ],
          tools: ["Klaviyo", "Attentive SMS", "HubSpot", "Zapier"],
        },
        {
          step: "04",
          phase: "Weeks 7-8",
          milestone: "LTV Expansion Summit",
          title: "Product-Led Growth & Live Optimization",
          desc: "Engineer viral referral loops, subscription tier upsells, and present a live client conversion uplift audit to complete certification.",
          topics: [
            "In-App Referral & Viral Loops",
            "1-Click Post-Purchase Upsells",
            "Growth Audit Capstone Presentation",
            "Placement into High-Growth Startups",
          ],
          tools: ["Rebuy", "ReferralCandy", "ChartMogul", "Looker"],
        },
      ],
    },
    {
      id: "executive",
      title: "Full-Stack Digital Marketing Executive Bootcamp",
      shortTitle: "Full-Stack Masterclass",
      icon: Crown,
      badge: "Complete 360° Mastery",
      duration: "12 Weeks",
      level: "All-in-One Comprehensive",
      avgSalary: "$110,000 - $165,000",
      color: "amber",
      glowColor: "rgba(245, 158, 11, 0.4)",
      accentGradient: "from-amber-400 via-orange-500 to-purple-600",
      borderColor: "border-amber-500/40",
      textColor: "text-amber-400",
      description: "The complete end-to-end program combining Paid Media, SEO/GEO, Social Viral Growth, CRO, and Fractional CMO leadership skills.",
      milestones: [
        {
          step: "01",
          phase: "Weeks 1-3",
          milestone: "Market Strategy & Telemetry",
          title: "Market Economics, Tracking & Strategy",
          desc: "Master comprehensive brand positioning, competitive intelligence, full-funnel attribution tracking, and executive growth financial modeling.",
          topics: [
            "360° Growth & Unit Economics",
            "Server-Side Data Warehouse Setup",
            "Brand Moat & Value Proposition",
            "Media Budget Forecasting Models",
          ],
          tools: ["GTM Server", "GA4", "Looker Studio", "BigQuery"],
        },
        {
          step: "02",
          phase: "Weeks 4-6",
          milestone: "Omnichannel Acquisition",
          title: "Paid Media & Search Dominance",
          desc: "Execute multi-channel paid acquisition across Meta, Google, TikTok, and LinkedIn while establishing dominant SEO & GEO authority.",
          topics: [
            "Multi-Platform Advertising Synergy",
            "Generative Engine SEO & Content",
            "Direct Response Copy & Video",
            "Cross-Channel Retargeting Grids",
          ],
          tools: ["Meta Ads", "Google Ads", "Ahrefs", "Semrush"],
        },
        {
          step: "03",
          phase: "Weeks 7-9",
          milestone: "Conversion & Retention Flywheel",
          title: "CRO Funnels, Email/SMS & Virality",
          desc: "Unite landing page optimization, A/B testing engines, automated retention flows, and UGC creator partnerships into an unstoppable flywheel.",
          topics: [
            "Multivariate Landing Page Optimization",
            "Automated Lifecycle Flow Ecosystems",
            "UGC Creator Management Engines",
            "Subscription & LTV Economics",
          ],
          tools: ["Klaviyo", "VWO", "Hotjar", "CapCut"],
        },
        {
          step: "04",
          phase: "Weeks 10-12",
          milestone: "CMO Leadership Summit",
          title: "Fractional CMO & Live Client Capstone",
          desc: "Lead live enterprise growth strategy, manage distributed marketing teams, pitch executive stakeholder boards, and secure leadership roles.",
          topics: [
            "Fractional CMO Growth Playbooks",
            "Distributed Team Orchestration",
            "Enterprise Brand Growth Defense",
            "Executive Career Placement Network",
          ],
          tools: ["Asana", "Slack", "Pitch Decks", "Miro"],
        },
      ],
    },
  ];

  const [selectedTrack, setSelectedTrack] = useState<TrainingTrack>(trainingTracks[0]);
  const [mounted, setMounted] = useState(false);
  const roadmapContainerRef = useRef<HTMLDivElement>(null);

  // Modals
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [showAgencyModal, setShowAgencyModal] = useState(false);

  // Form states
  const [studentSubmitted, setStudentSubmitted] = useState(false);
  const [studentSubmitting, setStudentSubmitting] = useState(false);
  const [studentForm, setStudentForm] = useState({ name: "", email: "", phone: "", experience: "Beginner (0-1 yr)", goal: "" });

  const [agencySubmitted, setAgencySubmitted] = useState(false);
  const [agencySubmitting, setAgencySubmitting] = useState(false);
  const [agencyForm, setAgencyForm] = useState({ company: "", email: "", phone: "", rolesNeeded: "Media Buyer (Meta/Google)", spendRange: "$10k - $50k/mo" });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStudentSubmitting(true);
    setTimeout(() => {
      setStudentSubmitting(false);
      setStudentSubmitted(true);
    }, 600);
  };

  const handleAgencySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAgencySubmitting(true);
    setTimeout(() => {
      setAgencySubmitting(false);
      setAgencySubmitted(true);
    }, 600);
  };

  // Scroll-Driven Road Filling Animation
  const { scrollYProgress } = useScroll({
    target: roadmapContainerRef,
    offset: ["start 80%", "end 70%"],
  });

  return (
    <section id="training" className="flex flex-col w-full py-20 border-t border-slate-200/80 relative overflow-hidden bg-transparent z-10">
      {/* Dynamic ambient lighting based on selected track */}
      <div 
        className="absolute top-1/4 right-0 w-[30rem] h-[30rem] rounded-full blur-[160px] pointer-events-none transition-all duration-700 opacity-10"
        style={{ background: selectedTrack.glowColor }}
      />
      <div 
        className="absolute bottom-1/4 left-0 w-[30rem] h-[30rem] rounded-full blur-[160px] pointer-events-none transition-all duration-700 opacity-10"
        style={{ background: selectedTrack.glowColor }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 text-purple-700 mb-3 text-xs font-bold border border-purple-200 uppercase tracking-wider shadow-xs">
            <GraduationCap className="h-3.5 w-3.5" /> Specialized Career Tracks & Academy
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 mb-3 tracking-tight">
            Choose Your <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
              Digital Marketing Mastery Track
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Digital marketing is not one-size-fits-all. Select a specialized discipline below to view its custom curved progression roadmap, core tools, and live capstone journey.
          </p>
        </div>

        {/* 3 Academy Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            {
              icon: <Briefcase className="h-5 w-5 text-blue-600" />,
              title: "Live Budget Execution",
              desc: "Train directly inside live ad accounts with real spend, not theoretical slides or outdated tutorials.",
              border: "hover:border-blue-300",
            },
            {
              icon: <Award className="h-5 w-5 text-purple-600" />,
              title: "Industry Gold Certifications",
              desc: "Graduate with certified credentials across Meta Blueprint, Google Skillshop, and HubSpot.",
              border: "hover:border-purple-300",
            },
            {
              icon: <Users className="h-5 w-5 text-pink-600" />,
              title: "Direct Placement Network",
              desc: "Connect instantly with top agencies, VC-backed startups, and brands hiring pre-vetted marketing specialists.",
              border: "hover:border-pink-300",
            },
          ].map((pillar, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className={`glass-card rounded-xl p-4.5 text-center transition-all duration-300 border border-slate-200/80 shadow-xs hover:shadow-md ${pillar.border}`}
            >
              <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center mx-auto mb-3">
                {pillar.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">{pillar.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ----------------- INTERACTIVE TRACK SELECTOR ----------------- */}
        <div className="mb-12">
          <div className="text-center mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Select a Specialization Track to Load Roadmap
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
            {trainingTracks.map((track) => {
              const isSelected = selectedTrack.id === track.id;
              const IconComp = track.icon;
              return (
                <button
                  key={track.id}
                  onClick={() => setSelectedTrack(track)}
                  className={`relative p-3.5 sm:p-4 rounded-xl text-left transition-all duration-300 flex flex-col justify-between cursor-pointer border overflow-hidden ${
                    isSelected
                      ? `bg-blue-50 border-blue-500/80 shadow-md scale-[1.02]`
                      : `glass-card border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 opacity-90 hover:opacity-100`
                  }`}
                >
                  {/* Subtle Corner Glow when selected */}
                  {isSelected && (
                    <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-br ${track.accentGradient} opacity-15 blur-xl pointer-events-none`} />
                  )}

                  <div className="relative z-10 w-full">
                    <div className="flex items-center justify-between gap-1.5 mb-2.5">
                      <div className={`p-2 rounded-lg ${isSelected ? "bg-blue-600 text-white border border-blue-700" : "bg-slate-100 text-slate-700"}`}>
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isSelected ? "bg-blue-100 text-blue-800 border border-blue-200" : "bg-slate-100 text-slate-600"}`}>
                        {track.duration}
                      </span>
                    </div>

                    <h4 className={`text-xs sm:text-sm font-bold leading-snug line-clamp-2 mb-1 ${isSelected ? "text-blue-900" : "text-slate-800"}`}>
                      {track.shortTitle}
                    </h4>
                  </div>

                  <div className="relative z-10 w-full mt-2.5 pt-2 border-t border-slate-200/80 flex items-center justify-between text-[10px] text-slate-500">
                    <span className="truncate">{track.level.split(" ")[0]}</span>
                    <span className={isSelected ? "text-blue-600 font-bold" : "text-slate-500"}>
                      {isSelected ? "Active View" : "Explore →"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ----------------- ACTIVE TRACK OVERVIEW CARD ----------------- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTrack.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-2xl p-5 sm:p-6 border border-slate-200 max-w-6xl mx-auto mb-12 relative overflow-hidden shadow-xs"
          >
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${selectedTrack.accentGradient} opacity-10 rounded-full blur-2xl pointer-events-none`} />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-2 mb-2.5">
                  <span className={`text-xs font-bold px-3 py-0.5 rounded-full bg-gradient-to-r ${selectedTrack.accentGradient} text-white shadow-xs`}>
                    {selectedTrack.badge}
                  </span>
                  <span className="text-xs font-medium text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-500" /> {selectedTrack.duration} Intensive
                  </span>
                  <span className="text-xs font-medium text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200 flex items-center gap-1">
                    <Layers className="w-3 h-3 text-slate-500" /> {selectedTrack.level}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-slate-950 mb-2">
                  {selectedTrack.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {selectedTrack.description}
                </p>
              </div>

              {/* Fast stats pill box */}
              <div className="flex lg:flex-col items-center sm:items-start justify-between sm:justify-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 shrink-0">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Target Placement Salary</span>
                  <span className="text-sm font-extrabold text-emerald-700 flex items-center gap-0.5">
                    <DollarSign className="w-3.5 h-3.5 -mr-0.5" />{selectedTrack.avgSalary}
                  </span>
                </div>
                <div className="lg:pt-2 lg:border-t lg:border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Cohort Availability</span>
                  <span className="text-xs font-bold text-blue-700 flex items-center gap-1">
                    <Zap className="w-3 h-3 text-blue-600" /> Next Batch: 25 Seats Only
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ----------------- VERTICAL ROADMAP (OPTIMIZED FOR DESKTOP & MOBILE) ----------------- */}
        <div ref={roadmapContainerRef} className="max-w-5xl mx-auto mb-16 relative">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200 mb-2">
              <Compass className="w-3.5 h-3.5" /> Progressive Mastery Roadmap
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-950">
              {selectedTrack.duration} Curated Progression Journey
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-xl mx-auto">
              Follow the 4 milestone checkpoints sequentially as you master the curriculum and deploy live ad budgets.
            </p>
          </div>

          {/* Road Visual Container */}
          <div className="relative">
            {/* Desktop Center Curved Highway */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-48 pointer-events-none z-0">
              <svg 
                className="w-full h-full overflow-visible" 
                viewBox="0 0 200 1100" 
                fill="none" 
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id={`vertRoadGradient-${selectedTrack.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0284c7" stopOpacity="0.95" />
                    <stop offset="35%" stopColor="#9333ea" stopOpacity="0.95" />
                    <stop offset="70%" stopColor="#db2777" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#059669" stopOpacity="0.95" />
                  </linearGradient>
                </defs>

                <path
                  d="M 100,20 C 20,160 180,300 100,440 C 20,580 180,720 100,860 C 20,960 180,1040 100,1080"
                  stroke="#e2e8f0"
                  strokeWidth="18"
                  strokeLinecap="round"
                />
                <motion.path
                  d="M 100,20 C 20,160 180,300 100,440 C 20,580 180,720 100,860 C 20,960 180,1040 100,1080"
                  stroke={`url(#vertRoadGradient-${selectedTrack.id})`}
                  strokeWidth="4"
                  strokeLinecap="round"
                  style={{ pathLength: scrollYProgress }}
                />
              </svg>
            </div>

            {/* Mobile Left-Aligned Glowing Spine Line (100% Reliable & Fully Visible on Mobile) */}
            <div className="md:hidden absolute left-4 sm:left-6 top-4 bottom-4 w-1 pointer-events-none z-0">
              <div className="w-full h-full bg-slate-200 rounded-full" />
              <motion.div 
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-500 via-purple-500 to-emerald-500 rounded-full shadow-[0_0_12px_rgba(6,182,212,0.8)]"
                style={{ height: "100%", originY: 0, scaleY: scrollYProgress }}
              />
            </div>

            {/* Vertical Milestone Cards Alternating Left / Right on Desktop, Left-Rail on Mobile */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTrack.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 sm:space-y-10 relative z-10"
              >
                {selectedTrack.milestones.map((milestone, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <motion.div
                      key={milestone.step}
                      initial={{ opacity: 0.4, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, margin: "-40px" }}
                      transition={{ duration: 0.4, delay: idx * 0.06 }}
                      className={`flex flex-col md:flex-row items-center ${
                        isEven ? "md:flex-row-reverse" : ""
                      } gap-4 md:gap-12 relative`}
                    >
                      {/* Left or Right Card */}
                      <div className="w-full md:w-1/2 pl-12 sm:pl-16 md:pl-0">
                        <div className="glass-card rounded-2xl p-4 sm:p-6 border border-slate-200 hover:border-blue-300 transition-all duration-300 group relative overflow-hidden shadow-xs hover:shadow-md bg-white/95">
                          {/* Card Ambient Glow */}
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent rounded-full blur-xl pointer-events-none group-hover:opacity-100 transition-opacity" />

                          {/* Phase Capsule & Step */}
                          <div className="flex items-center justify-between gap-2 mb-2.5">
                            <span className={`text-[10px] sm:text-[11px] font-bold px-3 py-0.5 rounded-full bg-gradient-to-r ${selectedTrack.accentGradient} text-white shadow-xs`}>
                              {milestone.phase}
                            </span>
                            <span className="text-[10px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                              {milestone.milestone}
                            </span>
                          </div>

                          {/* Title */}
                          <h4 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 mb-1.5 leading-snug group-hover:text-blue-600 transition-colors">
                            {milestone.title}
                          </h4>

                          {/* Description */}
                          <p className="text-xs text-slate-600 leading-relaxed mb-3">
                            {milestone.desc}
                          </p>

                          {/* Key Topics List */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-2.5 border-t border-slate-100 mb-3">
                            {milestone.topics.map((topic, tIdx) => (
                              <div key={tIdx} className="flex items-start gap-1.5 text-[11px] sm:text-xs text-slate-600">
                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                                <span className="leading-tight">{topic}</span>
                              </div>
                            ))}
                          </div>

                          {/* Tools taught pills */}
                          <div className="pt-2.5 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                            <span className="text-[10px] text-slate-500 font-semibold mr-1">Tools:</span>
                            {milestone.tools.map((tool, toolIdx) => (
                              <span 
                                key={toolIdx} 
                                className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-700 font-mono"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Milestone Number Badge (Centered on Desktop Highway, Left-Pinned on Mobile Line) */}
                      <div className="absolute left-0 sm:left-2 md:left-1/2 top-4 md:top-1/2 -translate-y-0 md:-translate-y-1/2 -translate-x-0 md:-translate-x-1/2 flex items-center justify-center z-20">
                        <div 
                          style={{ boxShadow: `0 0 12px ${selectedTrack.glowColor}` }}
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center shrink-0 group hover:scale-110 transition-transform shadow-sm"
                        >
                          <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr ${selectedTrack.accentGradient} flex items-center justify-center text-white font-black text-[10px] sm:text-xs`}>
                            {milestone.step}
                          </div>
                        </div>
                      </div>

                      {/* Empty Placeholder for symmetrical desktop grid balance */}
                      <div className="hidden md:block w-1/2" />
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* Vertical Finish Line / Graduation Flag Banner */}
            <div className="mt-10 sm:mt-12 text-center relative z-10">
              <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold shadow-xs">
                <Flag className="w-4 h-4 text-emerald-600 animate-bounce" /> {selectedTrack.title} Certified Graduation & Placement Summit
              </div>
            </div>
          </div>
        </div>

        {/* ----------------- DUAL EQUAL-SIZE APPLICATION & HIRING CTA CARDS ----------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto items-stretch">
          
          {/* Card 1: For Students / Career Switchers */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-purple-200 relative overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-md bg-white/95 h-full">
            <div className="absolute top-0 right-0 w-44 h-44 bg-purple-500/5 rounded-bl-full blur-xl pointer-events-none" />
            
            <div>
              <span className="text-xs font-bold text-purple-700 uppercase tracking-wider block mb-2">
                FOR STUDENTS & GROWTH MARKETERS
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-slate-950 mb-2.5 leading-tight">
                Enroll in {selectedTrack.shortTitle}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Master real-world campaigns under senior mentorship. Limited to 25 seats per cohort with live portfolio building and direct hiring introductions.
              </p>
            </div>

            <button
              onClick={() => setShowStudentModal(true)}
              className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-brand-purple to-pink-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer shadow-xs border border-white/20"
            >
              <span>Apply for {selectedTrack.shortTitle} Cohort</span> 
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: For Brands & Agencies Looking to Hire */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-blue-200 relative overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-md bg-white/95 h-full">
            <div className="absolute top-0 right-0 w-44 h-44 bg-blue-500/5 rounded-bl-full blur-xl pointer-events-none" />
            
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-2">
                FOR AGENCIES & SCALE-UPS
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-slate-950 mb-2.5 leading-tight">
                Hire Pre-Trained Specialists
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Skip 3-month onboarding ramps. Hire pre-vetted specialists certified in {selectedTrack.shortTitle} with live account experience.
              </p>
            </div>

            <button
              onClick={() => setShowAgencyModal(true)}
              className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer shadow-xs border border-white/20"
            >
              <span>Request Trained Graduate Roster</span> 
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* MODAL 1: STUDENT ENROLLMENT & WHAT COMES NEXT BLUEPRINT (Portal to body) */}
      {/* ========================================================================= */}
      {mounted && showStudentModal && createPortal(
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-purple-50 via-white to-pink-50">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-black text-slate-950">
                    Apply for {selectedTrack.shortTitle} Cohort
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium">What Comes Next: 4-Phase Admission & Live Mentorship Journey</p>
                </div>
              </div>
              <button
                onClick={() => setShowStudentModal(false)}
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5">
              {/* 4-Phase What Comes Next Flow */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-purple-700 block mb-2">
                  YOUR 4-PHASE ONBOARDING & CAREER ROADMAP
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { phase: "1. Diagnostic Profile Assessment", desc: "Our academic committee evaluates your skill baseline within 12 hours.", tag: "Within 12h" },
                    { phase: "2. Live Ad Sandbox Provisioning", desc: "Gain credentialed access to live Meta CAPI, Google Ads, and analytics stacks.", tag: "Day 1" },
                    { phase: "3. Weekly Sprints & Account Audits", desc: "Manage real media spend with 1-on-1 feedback from senior media buyers.", tag: "Weeks 1-8" },
                    { phase: "4. Direct Agency Placement Summit", desc: "Defend your portfolio directly in front of partner agency hiring directors.", tag: "Graduation" },
                  ].map((st, i) => (
                    <div key={i} className="p-3 rounded-xl bg-purple-50/50 border border-purple-100 text-left">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-xs font-bold text-slate-900">{st.phase}</span>
                        <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-purple-200/70 text-purple-800">{st.tag}</span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-snug">{st.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form View */}
              {!studentSubmitted ? (
                <form onSubmit={handleStudentSubmit} className="space-y-3.5 pt-2 border-t border-slate-100">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-900 block mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={studentForm.name}
                        onChange={(e) => setStudentForm({ ...studentForm, name: e.target.value })}
                        placeholder="e.g. Priya Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-900 block mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={studentForm.email}
                        onChange={(e) => setStudentForm({ ...studentForm, email: e.target.value })}
                        placeholder="priya@gmail.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-900 block mb-1">WhatsApp / Phone *</label>
                      <input
                        type="tel"
                        required
                        value={studentForm.phone}
                        onChange={(e) => setStudentForm({ ...studentForm, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-900 block mb-1">Experience Level *</label>
                      <select
                        value={studentForm.experience}
                        onChange={(e) => setStudentForm({ ...studentForm, experience: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:border-purple-500 focus:outline-none"
                      >
                        <option value="Beginner (0-1 yr)">Beginner / Student (0-1 yr)</option>
                        <option value="Junior Marketer (1-3 yrs)">Junior Marketer (1-3 yrs)</option>
                        <option value="Freelancer / Agency Owner">Freelancer / Agency Owner</option>
                        <option value="Career Switcher">Career Switcher</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-900 block mb-1">Your Career Goal / What you want to achieve *</label>
                    <textarea
                      required
                      rows={2}
                      value={studentForm.goal}
                      onChange={(e) => setStudentForm({ ...studentForm, goal: e.target.value })}
                      placeholder="e.g. Master Meta & Google ads to land a Senior Media Buyer role at a top digital agency..."
                      className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:border-purple-500 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={studentSubmitting}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white font-bold text-xs sm:text-sm hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {studentSubmitting ? "Submitting Application..." : "Submit Admission Application →"}
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Application Registered Successfully!</h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Thank you <strong>{studentForm.name}</strong>. Our admissions counselor will review your profile and reach out on WhatsApp/Phone at <strong>{studentForm.phone}</strong> within 12 hours with your cohort onboarding syllabus.
                  </p>
                  <button
                    onClick={() => {
                      setStudentSubmitted(false);
                      setShowStudentModal(false);
                    }}
                    className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>

            <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Meta Blueprint & Google Partner Accredited</span>
              <button onClick={() => setShowStudentModal(false)} className="font-bold text-slate-700 hover:text-slate-900">Close</button>
            </div>
          </motion.div>
        </div>,
        document.body
      )}

      {/* ========================================================================= */}
      {/* MODAL 2: AGENCY HIRING ROSTER & WHAT COMES NEXT BLUEPRINT (Portal to body) */}
      {/* ========================================================================= */}
      {mounted && showAgencyModal && createPortal(
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-blue-50 via-white to-indigo-50">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-black text-slate-950">
                    Request Pre-Trained Talent Roster
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium">What Comes Next: 4-Step Agency Talent Matching Protocol</p>
                </div>
              </div>
              <button
                onClick={() => setShowAgencyModal(false)}
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5">
              {/* 4-Step Agency Matching Roadmap */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700 block mb-2">
                  OUR ZERO-FRICTION TALENT PLACEMENT WORKFLOW
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { step: "1. Media Buying Scope Intake", desc: "We map your required channels (Meta, Google, TikTok, GEO) and ad budget scale.", tag: "Instant" },
                    { step: "2. Receive 3 Vetted Portfolios", desc: "Get direct access to live case audits, ROAS performance metrics, and video intros.", tag: "Within 24h" },
                    { step: "3. Direct Technical Interview", desc: "Schedule 1-click interviews with pre-qualified talent ready to drive immediate ROI.", tag: "48h Ramp" },
                    { step: "4. 90-Day Placement Guarantee", desc: "Hire confidently with zero placement recruiter fees and our 90-day retention warranty.", tag: "Guaranteed" },
                  ].map((st, i) => (
                    <div key={i} className="p-3 rounded-xl bg-blue-50/50 border border-blue-100 text-left">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-xs font-bold text-slate-900">{st.step}</span>
                        <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-blue-200/70 text-blue-800">{st.tag}</span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-snug">{st.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form View */}
              {!agencySubmitted ? (
                <form onSubmit={handleAgencySubmit} className="space-y-3.5 pt-2 border-t border-slate-100">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-900 block mb-1">Company / Agency Name *</label>
                      <input
                        type="text"
                        required
                        value={agencyForm.company}
                        onChange={(e) => setAgencyForm({ ...agencyForm, company: e.target.value })}
                        placeholder="e.g. Apex Media Group"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-900 block mb-1">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={agencyForm.email}
                        onChange={(e) => setAgencyForm({ ...agencyForm, email: e.target.value })}
                        placeholder="hiring@apexmedia.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-900 block mb-1">Role / Specialization Needed *</label>
                      <select
                        value={agencyForm.rolesNeeded}
                        onChange={(e) => setAgencyForm({ ...agencyForm, rolesNeeded: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:border-blue-500 focus:outline-none"
                      >
                        <option value="Media Buyer (Meta/Google)">Media Buyer (Meta & Google ROAS)</option>
                        <option value="SEO & AI Search Specialist">SEO & AI Search (GEO) Specialist</option>
                        <option value="Short-Form Video UGC Producer">Short-Form Video UGC Producer</option>
                        <option value="Full-Stack Growth Marketer">Full-Stack Growth Marketer / Lead</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-900 block mb-1">Monthly Ad Spend Managed *</label>
                      <select
                        value={agencyForm.spendRange}
                        onChange={(e) => setAgencyForm({ ...agencyForm, spendRange: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:border-blue-500 focus:outline-none"
                      >
                        <option value="$5k - $20k/mo">$5,000 - $20,000 / month</option>
                        <option value="$20k - $100k/mo">$20,000 - $100,000 / month</option>
                        <option value="$100k+/mo">$100,000+ / month (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={agencySubmitting}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-600 text-white font-bold text-xs sm:text-sm hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {agencySubmitting ? "Generating Candidate Roster..." : "Request Vetted Specialist Roster →"}
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Roster Request Dispatched!</h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Thank you <strong>{agencyForm.company}</strong>. Our placement desk is matching 3 certified specialists with proven account records in <strong>{agencyForm.rolesNeeded}</strong> and will email their profiles to <strong>{agencyForm.email}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setAgencySubmitted(false);
                      setShowAgencyModal(false);
                    }}
                    className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>

            <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 100% Pre-Vetted Live Ad Account Experience</span>
              <button onClick={() => setShowAgencyModal(false)} className="font-bold text-slate-700 hover:text-slate-900">Close</button>
            </div>
          </motion.div>
        </div>,
        document.body
      )}
    </section>
  );
}
