"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      category: "Performance & ROAS",
      question: "How quickly can we expect measurable ROAS improvements?",
      answer: "For Paid Media (Meta, Google Ads, TikTok), we launch new campaign structures within 7-10 business days after onboarding and pixel tracking audits. Most clients experience measurable CAC reduction and lead volume growth within the first 21 to 30 days of active ad testing.",
    },
    {
      category: "Ad Spend & Contracts",
      question: "What is the recommended monthly ad budget to work with Himastech?",
      answer: "We recommend a minimum ad spend of $3,000 to $5,000/month for paid media campaigns so our algorithmic testing framework has sufficient data volume to optimize bids, audience segments, and creative variations efficiently. We operate on month-to-month retainers with zero long-term lock-in.",
    },
    {
      category: "Attribution & Tracking",
      question: "How do you handle iOS privacy updates and attribution tracking?",
      answer: "We implement 100% server-side tracking using Meta Conversions API (CAPI), Google Enhanced Conversions, and custom First-Party Server GTM containers. This bypasses browser ad blockers and iOS tracking loss, providing clean attribution and higher conversion signaling.",
    },
    {
      category: "Creative Production",
      question: "Do you create the video ads and landing pages, or do we provide them?",
      answer: "Himastech provides end-to-end creative production. Our team scripts direct-response hooks, sources UGC creator content, designs high-CTR static carousels, and builds high-speed custom Next.js landing pages. You simply approve the creative roadmap.",
    },
    {
      category: "Generative SEO & GEO",
      question: "What is Generative Engine Optimization (GEO) and why does it matter?",
      answer: "GEO is the new frontier of organic search. As consumers search via ChatGPT, Perplexity AI, and Google Gemini instead of traditional search bars, GEO optimizes your brand's technical knowledge graph and semantic entity authority so AI models cite your business as the recommended solution.",
    },
    {
      category: "Recruitment & Training",
      question: "How does your marketing recruitment & training program work?",
      answer: "Through our intensive training academy, we upskill ambitious marketers on live ad accounts and Meta Blueprint standards. When our clients need to hire dedicated in-house media buyers or marketing specialists, we provide pre-vetted, certified talent from our top graduate cohort.",
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 bg-transparent border-t border-slate-200/80 relative overflow-hidden z-10">
      {/* Background glow */}
      <div className="absolute top-1/3 -left-60 w-80 h-80 bg-brand-blue/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-60 w-80 h-80 bg-brand-purple/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs uppercase tracking-wider font-bold mb-3 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mb-2.5">
            Got Questions? <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">We've Got Answers.</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Everything you need to know about our data-driven marketing frameworks and deliverables.
          </p>
        </div>

        {/* Compact FAQ Accordion Cards */}
        <div className="space-y-2.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-xl border border-slate-200/80 overflow-hidden transition-all duration-300 hover:border-slate-300 shadow-xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full py-3.5 px-4 sm:px-5 text-left flex items-center justify-between gap-3.5 focus:outline-none cursor-pointer"
                >
                  <div>
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block mb-0.5">
                      {faq.category}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`p-1.5 rounded-lg bg-slate-100 border border-slate-200 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-blue-50 text-blue-600 border-blue-200" : "text-slate-400"}`}>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pb-3.5 pt-1.5 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Compact Bottom Support Banner */}
        <div className="mt-8 text-center p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="text-left">
            <h4 className="text-xs sm:text-sm font-bold text-slate-900">Have a specific question about your marketing stack?</h4>
            <p className="text-[11px] text-slate-500 mt-0.5">Our senior media strategists are available for a 1-on-1 audit call.</p>
          </div>
          <Link
            href="#contact"
            className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-900 text-xs font-bold transition-all border border-slate-200 flex items-center gap-1.5 whitespace-nowrap cursor-pointer shrink-0 shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5 text-blue-600" /> Book Direct Call
          </Link>
        </div>
      </div>
    </section>
  );
}
