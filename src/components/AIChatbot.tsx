"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, 
  Send, 
  X, 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  Phone, 
  CheckCircle2, 
  Target, 
  GraduationCap, 
  Calendar,
  MessageSquare,
  Building,
  DollarSign
} from "lucide-react";
import Link from "next/link";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  options?: string[];
  cta?: {
    label: string;
    href: string;
    isExternal?: boolean;
  };
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessages: ChatMessage[] = [
    {
      id: "1",
      sender: "bot",
      text: "👋 Welcome to Himastech! I'm your AI Growth Strategist. I have complete knowledge of our performance marketing services, 5 training tracks, case studies, and leadership team.\n\nHow can I help you scale today?",
      timestamp: "Just now",
      options: [
        "📞 What is your phone / WhatsApp number?",
        "⚡ How fast can you scale our ROAS?",
        "📊 What is included in the Free 48-Hr Audit?",
        "🎓 Tell me about the 5 Training Tracks",
        "🏢 Who is the leadership team & founders?",
        "💼 What services do you offer?",
      ],
    },
  ];

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const generateBotReply = (userQuery: string): { text: string; cta?: { label: string; href: string; isExternal?: boolean }; options?: string[] } => {
    const q = userQuery.toLowerCase().trim();

    // 1. Phone / WhatsApp / Mobile / Contact Number / Strategy Desk
    if (
      q.includes("phone") || 
      q.includes("mobile") || 
      q.includes("number") || 
      q.includes("whatsapp") || 
      q.includes("call") || 
      q.includes("contact") ||
      q.includes("reach") ||
      q.includes("email") ||
      q.includes("address") ||
      q.includes("location")
    ) {
      return {
        text: "📞 **Himastech Official Contact Details:**\n\n• **Strategy Desk & Phone:** +91 8374373753\n• **WhatsApp Direct Desk:** +91 8374373753\n• **Official Email:** info@himastech.com\n• **Headquarters:** 123 Innovation Drive, Tech City, TC 10010\n\nOur senior directors are available on WhatsApp for immediate campaign consultation.",
        cta: { 
          label: "Chat Directly on WhatsApp (+91 8374373753)", 
          href: "https://wa.me/918374373753?text=Hi%20Himastech%2C%20I%20would%20like%20to%20discuss%20our%20marketing%20growth%20strategy", 
          isExternal: true 
        },
        options: ["📊 Request Free 48-Hr Audit", "🎓 Explore Training Academy", "⚡ What ROAS can you achieve?"]
      };
    }

    // 2. Leadership / Founders / Team / Who are you / About
    if (
      q.includes("founder") || 
      q.includes("leadership") || 
      q.includes("team") || 
      q.includes("who are you") || 
      q.includes("about") || 
      q.includes("aravind") || 
      q.includes("priya") || 
      q.includes("rohit") ||
      q.includes("merlinflow")
    ) {
      return {
        text: "🏢 **Himastech Executive Leadership:**\n\n• **Aravind Reddy** (Founder & Chief Growth Officer): Ex-Meta performance marketing specialist who has scaled ₹100Cr+ in client ad spend across D2C, B2B, and Real Estate.\n• **Priya Sharma** (Head of AI Search & GEO): Former Google Search engineer specializing in Generative Engine Optimization & LLM knowledge graph indexing.\n• **Rohit Verma** (Head of Creative & UGC Production): Direct-response creative director with 50M+ organic views generated.\n\nCertified in Meta Blueprint, Google Ads, and HubSpot Inbound.",
        cta: { label: "Learn More in About Section", href: "#about" },
        options: ["💼 What services do you offer?", "📊 Book Free Audit with Founders", "📞 WhatsApp the Team"]
      };
    }

    // 3. Training / Academy / Courses / Syllabus / Roadmaps / Placement
    if (
      q.includes("train") || 
      q.includes("course") || 
      q.includes("academy") || 
      q.includes("syllabus") || 
      q.includes("roadmap") || 
      q.includes("student") || 
      q.includes("curriculum") || 
      q.includes("cohort") || 
      q.includes("placement") || 
      q.includes("job") ||
      q.includes("salary")
    ) {
      return {
        text: "🎓 **Himastech Marketing Academy (5 Specialized Career Tracks):**\n\n1️⃣ **Paid Media & ROAS Acceleration** (8 Wks • $85k–$130k avg salary): Meta CAPI, Google P-Max, TikTok, live ad spend.\n2️⃣ **SEO, GEO & AI Search Mastery** (6 Wks • $75k–$120k avg salary): Core Web Vitals, Schema, ChatGPT & Perplexity optimization.\n3️⃣ **Social Media & Viral Content** (6 Wks • $65k–$110k avg salary): 3-sec hook formulas, CapCut, UGC creator seeding.\n4️⃣ **Growth Hacking & CRO** (8 Wks • $90k–$145k avg salary): Sub-second landing pages, Klaviyo/SMS flows, A/B testing.\n5️⃣ **Full-Stack Executive Bootcamp** (12 Wks • $110k–$165k avg salary): Complete 360° CMO training.\n\n✨ All tracks feature interactive curved serpentine roadmaps, live client ad budgets, and direct recruitment placement.",
        cta: { label: "View Curved Progression Roadmaps", href: "#training" },
        options: ["📞 WhatsApp for Next Cohort Seats", "📊 What are your Agency Services?", "💰 Course Placement Rates"]
      };
    }

    // 4. Services / 9 Arsenal Channels / What do you do
    if (
      q.includes("service") || 
      q.includes("channel") || 
      q.includes("offer") || 
      q.includes("arsenal") || 
      q.includes("what do you do") ||
      q.includes("facebook") ||
      q.includes("meta") ||
      q.includes("google ads") ||
      q.includes("tiktok") ||
      q.includes("linkedin") ||
      q.includes("youtube") ||
      q.includes("email") ||
      q.includes("sms") ||
      q.includes("cro")
    ) {
      return {
        text: "💼 **Himastech 9-Channel Marketing Arsenal:**\n\n1. **Meta Ads (FB & IG)**: Broad AI targeting, CAPI server attribution & DCT testing.\n2. **Google Ads & P-Max**: High-intent Search sculpting & Shopping feed optimization.\n3. **SEO & Generative AI (GEO)**: Ranking on Google Search, ChatGPT, Perplexity & Claude.\n4. **TikTok & Viral Shorts**: Spark Ads & native UGC creator matrix.\n5. **Retention & Lifecycle (Klaviyo/SMS)**: Automated cart recovery & VIP loyalty flows.\n6. **CRO & Sub-Second Pages**: Next.js high-speed landing pages & multivariate tests.\n7. **LinkedIn B2B & ABM**: Matched audience C-suite pipeline generation.\n8. **YouTube Direct Response**: Video Action Campaigns (VAC) & long-form video funnels.\n9. **Programmatic & CTV / OTT**: Connected TV & household IP retargeting.",
        cta: { label: "Explore the 9-Channel Arsenal", href: "#channels" },
        options: ["⚡ What ROAS can you achieve?", "📊 Claim Free 48-Hr Audit", "📞 Call Strategy Desk"]
      };
    }

    // 5. ROAS / Results / Case Studies / Metrics / Past Work
    if (
      q.includes("roas") || 
      q.includes("case study") || 
      q.includes("result") || 
      q.includes("proof") || 
      q.includes("real estate") || 
      q.includes("ecommerce") || 
      q.includes("saas") || 
      q.includes("prestige") || 
      q.includes("lumina") ||
      q.includes("scale")
    ) {
      return {
        text: "📈 **Proven Client Results & Verified Metrics:**\n\n• **Real Estate & High-Ticket:**\n  - Prestige Luxury Estates: **6.4x ROAS** (₹48Cr+ inventory sold)\n  - UrbanRise Luxury Villas: **5.8x ROAS** (₹32Cr booked)\n• **E-Commerce & D2C:**\n  - Lumina Glow Skincare: **4.2x ROAS** (310% MRR surge in 90 days)\n  - Aura Minimalist Apparel: **5.1x ROAS** (420% revenue scale)\n• **B2B SaaS & Enterprise:**\n  - CloudScale DevOps: **₹18M Closed Pipeline** (48% CAC reduction)\n  - NexusFlow CRM: **₹24M Enterprise ARR** (3.4x demo volume)\n\nAverage ROAS uplift: **+340%** with a 98.4% client retention rate.",
        cta: { label: "View Detailed Case Studies", href: "#case-studies" },
        options: ["📊 Get a Free Audit for My Brand", "💰 How does pricing work?", "📞 Talk to Growth Lead"]
      };
    }

    // 6. Free Audit / Teardown / Review
    if (
      q.includes("audit") || 
      q.includes("free") || 
      q.includes("teardown") || 
      q.includes("review") || 
      q.includes("analysis")
    ) {
      return {
        text: "📊 **Complimentary 48-Hour Growth & Ad Audit (Under Mutual NDA):**\n\nWe perform a forensic diagnostic of your current marketing stack:\n✓ **Server-Side Tracking Audit**: Identifying lost iOS/Android conversion telemetry.\n✓ **Creative Fatigue Index**: Pinpointing decaying ads and high-converting hook gaps.\n✓ **Audience Cannibalization**: Eliminating wasted ad spend across overlapping ad sets.\n✓ **Landing Page Drop-off Teardown**: Identifying exact form and checkout bottlenecks.\n\n100% free with zero obligation.",
        cta: { label: "Claim Free 48-Hour Audit", href: "#contact" },
        options: ["⚡ Calculate ROI Potential", "📞 Call +91 8374373753", "🎓 Explore Training Academy"]
      };
    }

    // 7. Pricing / Cost / Retainer / Fees / Budget
    if (
      q.includes("price") || 
      q.includes("cost") || 
      q.includes("pricing") || 
      q.includes("fee") || 
      q.includes("retainer") || 
      q.includes("budget") || 
      q.includes("how much")
    ) {
      return {
        text: "💰 **Pricing & Partnership Structure:**\n\n• **Aligned Incentive Model**: A transparent monthly base management fee + performance milestone bonuses once agreed ROAS targets are hit.\n• **No Long-Term Lock-Ins**: We operate on flexible monthly agreements because we earn our seat through measurable profit.\n• **Minimum Recommended Ad Spend**: Starting at ₹1,00,000 / $2,000 monthly ad spend to allow algorithmic testing & statistical significance.\n\nWe also provide customized enterprise tier proposals.",
        cta: { label: "Request Custom Pricing Proposal", href: "#contact" },
        options: ["📊 Book Free Account Audit", "📈 Calculate Projected ROAS", "📞 WhatsApp Strategy Desk"]
      };
    }

    // 8. SEO / GEO / Generative AI / ChatGPT / Perplexity
    if (
      q.includes("seo") || 
      q.includes("geo") || 
      q.includes("ai search") || 
      q.includes("chatgpt") || 
      q.includes("perplexity") || 
      q.includes("google search")
    ) {
      return {
        text: "🔍 **Generative Engine Optimization (GEO) & Semantic SEO:**\n\nTraditional SEO is no longer enough. We optimize your brand to become the primary recommended answer across AI Answer Engines:\n• **ChatGPT Search & Perplexity AI Citations**\n• **Google AI Overviews & Gemini Knowledge Panels**\n• **Topical Hub-and-Spoke Content Clusters**\n• **Sub-Second Core Web Vitals (LCP, INP, CLS) Performance**\n• **Digital PR Tier-1 Media Backlink Flywheels**",
        cta: { label: "Explore SEO & GEO Services", href: "#channels" },
        options: ["💼 Full 9-Channel Arsenal", "📊 Audit My Website SEO", "📞 WhatsApp Our SEO Director"]
      };
    }

    // 9. Process / How it works / Steps
    if (
      q.includes("process") || 
      q.includes("how it works") || 
      q.includes("steps") || 
      q.includes("methodology") || 
      q.includes("engine")
    ) {
      return {
        text: "⚙️ **The 4-Step Revenue Multiplication Engine:**\n\n1. **Deep Forensic Audit (Day 1-7)**: Fix broken CAPI telemetry and map unit economics.\n2. **High-Velocity Creative Sprint (Day 8-14)**: Produce 10+ direct response UGC hooks & landing page variants.\n3. **Algorithmic Media Buying (Day 15-30)**: Deploy Broad AI targeting, P-Max feeds, and Dynamic Creative Testing.\n4. **Compounding Scale & Retention (Day 30+)**: Automated email/SMS retention flows and multivariate CRO.",
        cta: { label: "View Our 4-Step Process", href: "#process" },
        options: ["📊 Claim 48-Hr Growth Audit", "📈 Case Studies & Results", "📞 Call +91 8374373753"]
      };
    }

    // Default Comprehensive Fallback
    return {
      text: "⚡ **Himastech Digital Marketing & Academy:**\n\nWe specialize in:\n• **Full-Funnel Paid Media** (Meta, Google P-Max, TikTok)\n• **Generative Engine SEO & GEO** (ChatGPT, Perplexity, Google AI)\n• **High-Converting Landing Pages & CRO**\n• **Elite 5-Track Marketing Academy** with curved roadmaps & job placement.\n\n📞 Phone & WhatsApp: **+91 8374373753**\n✉️ Email: **info@himastech.com**\n\nHow can we help your business today?",
      cta: { label: "Claim Free 48-Hour Audit", href: "#contact" },
      options: [
        "📞 What is your phone / WhatsApp?",
        "📊 Request Free Growth Audit",
        "🎓 5 Training Tracks & Syllabus",
        "📈 View Client Case Studies",
      ],
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate realistic AI processing
    setTimeout(() => {
      const replyData = generateBotReply(query);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: replyData.text,
        timestamp: "Just now",
        cta: replyData.cta,
        options: replyData.options,
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, botMessage]);
    }, 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleResetChat = () => {
    setMessages(initialMessages);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Interactive Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-3 w-[92vw] sm:w-[400px] h-[550px] max-h-[85vh] rounded-2xl bg-[#090d16]/95 backdrop-blur-2xl border border-cyan-500/30 flex flex-col shadow-[0_15px_50px_rgba(6,182,212,0.25)] relative overflow-hidden"
          >
            {/* Top ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-20 bg-gradient-to-b from-cyan-500/20 to-transparent blur-xl pointer-events-none" />

            {/* Chatbot Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/[0.02] relative z-10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-brand-purple flex items-center justify-center text-white shadow-md shadow-cyan-500/30">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#090d16] animate-pulse" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                    Himastech AI Strategist
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 font-mono border border-cyan-500/30">
                      100% Accurate
                    </span>
                  </h3>
                  <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Live Desk • +91 8374373753
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleResetChat}
                  title="Reset conversation"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Minimize chat"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Message History Stream */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 no-scrollbar text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl p-3 sm:p-3.5 leading-relaxed shadow-sm ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-cyan-500 to-brand-purple text-white rounded-tr-none font-medium"
                        : "bg-white/5 border border-white/10 text-slate-200 rounded-tl-none"
                    }`}
                  >
                    <div className="whitespace-pre-line space-y-1">
                      {msg.text}
                    </div>

                    {/* Direct CTA Link Button */}
                    {msg.cta && (
                      <div className="mt-3 pt-2.5 border-t border-white/10">
                        {msg.cta.isExternal ? (
                          <a
                            href={msg.cta.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold text-[11px] border border-emerald-500/40 transition-colors"
                          >
                            <Phone className="w-3 h-3 text-emerald-400" />
                            {msg.cta.label} <ArrowRight className="w-3 h-3" />
                          </a>
                        ) : (
                          <Link
                            href={msg.cta.href}
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 font-bold text-[11px] border border-cyan-500/40 transition-colors"
                          >
                            {msg.cta.label} <ArrowRight className="w-3 h-3" />
                          </Link>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Suggestion Chips */}
                  {msg.options && (
                    <div className="flex flex-wrap gap-1.5 mt-2 max-w-full">
                      {msg.options.map((opt, oIdx) => (
                        <button
                          key={oIdx}
                          onClick={() => handleSendMessage(opt)}
                          className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-300 transition-all text-left cursor-pointer"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}

                  <span className="text-[9px] text-slate-500 mt-1 px-1">{msg.timestamp}</span>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-white/5 border border-white/10 w-20 rounded-tl-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-bounce [animation-delay:0.4s]" />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 border-t border-white/10 bg-[#070a12] relative z-10">
              <div className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3 py-1.5 focus-within:border-cyan-500/50 transition-colors">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about phone, ROAS, training, audit..."
                  className="flex-1 bg-transparent text-xs text-white placeholder:text-slate-500 focus:outline-none"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputText.trim()}
                  className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                    inputText.trim()
                      ? "bg-cyan-500 text-white hover:bg-cyan-400 shadow-md shadow-cyan-500/30"
                      : "text-slate-500 cursor-not-allowed"
                  }`}
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-500 mt-1.5 px-1">
                <span>⚡ Call / WhatsApp: +91 8374373753</span>
                <Link href="#contact" onClick={() => setIsOpen(false)} className="text-cyan-400 hover:underline">
                  Free 48h Audit →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chatbot Trigger Button */}
      <div className="flex items-center gap-2.5">
        {/* Floating Tooltip Pill */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              onClick={() => setIsOpen(true)}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0d141e]/90 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-xs font-semibold shadow-lg shadow-cyan-950/40 cursor-pointer hover:border-cyan-500/60 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              Ask AI Growth Bot
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="w-13 h-13 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-600 to-pink-500 text-white flex items-center justify-center shadow-[0_0_25px_rgba(6,182,212,0.45)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] border-2 border-white/25 relative cursor-pointer transition-all duration-300 group"
          aria-label="Toggle AI Growth Assistant"
        >
          {/* Subtle Outer Ping Ring */}
          <span className="absolute inset-0 rounded-full border border-cyan-400 animate-ping opacity-35 pointer-events-none" />

          {isOpen ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <Bot className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
          )}

          {/* AI Active Indicator */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#070913] flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          </span>
        </motion.button>
      </div>
    </div>
  );
}
