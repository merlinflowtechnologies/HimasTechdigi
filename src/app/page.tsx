"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Sparkles, Zap, ShieldCheck, Activity, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

import { BackgroundEffects } from "@/components/BackgroundEffects";
import { PartnersMarquee } from "@/components/PartnersMarquee";
import { StatsBar } from "@/components/StatsBar";
import { ServicesSection } from "@/components/ServicesSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { RoiCalculatorSection } from "@/components/RoiCalculatorSection";
import { ProcessSection } from "@/components/ProcessSection";
import { MarketingChannelsSection } from "@/components/MarketingChannelsSection";
import { TrainingSection } from "@/components/TrainingSection";
import { FeedbackSection } from "@/components/FeedbackSection";
import { AboutSection } from "@/components/AboutSection";
import { MerlinflowSection } from "@/components/MerlinflowSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full text-slate-900 overflow-x-hidden relative">
      {/* Global Animated Background System */}
      <BackgroundEffects />

      {/* Hero Section with hero.png Seamlessly Behind Text */}
      <section id="home" className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center justify-start pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden z-10">
        {/* Background Image Layer (hero.png) Behind Text */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image 
            src="/hero.png" 
            alt="Himastech Performance Marketing Ecosystem" 
            fill 
            priority 
            sizes="100vw"
            className="object-cover object-center lg:object-right-top opacity-85 sm:opacity-90 transition-opacity"
          />
          {/* Calibrated Directional Gradients for Maximum Visual Impact & Sharp Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/30 sm:via-white/75 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-[#f8fafc]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl lg:max-w-3xl text-left flex flex-col items-start">
            
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-subcard text-slate-800 mb-5 text-xs shadow-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-indigo-600 to-pink-600">
                Next-Gen Performance Marketing & High-Ticket Scale
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-700 text-[10px] font-extrabold border border-purple-500/20">
                NEW 2024 ENGINE
              </span>
            </motion.div>

            {/* Main H1 Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 sm:mb-5 leading-[1.12]"
            >
              <span className="block text-slate-950">Scale Your Brand With</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-indigo-600 to-pink-600">
                Predictable Revenue
              </span>
            </motion.h1>

            {/* Subtitle Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-slate-800 mb-6 sm:mb-8 leading-relaxed font-semibold max-w-2xl backdrop-blur-[2px]"
            >
              Himastech engineers high-converting Meta & Google ad funnels, generative AI search optimization (GEO), and elite digital marketing talent pipelines to help you out-scale competitors.
            </motion.p>

            {/* Call to Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-3.5 justify-start items-center w-full sm:w-auto"
            >
              <Link
                href="#contact"
                className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-500 text-white font-bold text-xs sm:text-sm hover:shadow-[0_0_30px_rgba(99,102,241,0.45)] transition-all hover:scale-105 flex items-center justify-center gap-2 group cursor-pointer border border-white/30"
              >
                <Sparkles className="w-3.5 h-3.5" /> 
                <span>Get Free 30-Min Growth Audit</span> 
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#roi-calculator"
                className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full glass-card text-slate-800 font-bold text-xs sm:text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Zap className="h-3.5 w-3.5 text-cyan-600" /> 
                <span>Simulate Your ROI</span> 
                <ChevronRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-slate-700 transition-colors" />
              </Link>
            </motion.div>

            {/* Trust Subtext */}
            <div className="flex items-center gap-4 mt-6 pt-5 border-t border-slate-200/80 text-[11px] text-slate-600 font-bold w-full">
              <span className="flex items-center gap-1.5 text-slate-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Meta Premier Certified
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-slate-800">
                <Activity className="w-3.5 h-3.5 text-cyan-600" /> Real-Time CAPI Attribution
              </span>
              <span className="hidden sm:inline-block">•</span>
              <span className="hidden sm:flex items-center gap-1.5 text-slate-800">
                <BarChart3 className="w-3.5 h-3.5 text-indigo-600" /> 4.8x Avg ROAS
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 1. Official Partner Ecosystem */}
      <PartnersMarquee />

      {/* 2. Agency Proof Metrics */}
      <StatsBar />

      {/* 3. Full-Spectrum Services */}
      <ServicesSection />

      {/* 4. Filterable Proven Case Studies */}
      <CaseStudiesSection />

      {/* 5. Interactive ROI & Revenue Calculator */}
      <RoiCalculatorSection />

      {/* 6. The 4-Step Revenue Engine Process */}
      <ProcessSection />

      {/* 7. Marketing Channels Breakdown (with What Comes Next modal) */}
      <MarketingChannelsSection />

      {/* 8. Elite Marketing Training & Recruiting Academy */}
      <TrainingSection />

      {/* 9. Leave Your Feedback & Reviews Section */}
      <FeedbackSection />

      {/* 11. About Us & Strategic Vision */}
      <AboutSection />

      {/* 12. Strategic Alliance with Merlinflow Technologies Private Limited */}
      <MerlinflowSection />

      {/* 13. Frequently Asked Questions */}
      <FaqSection />

      {/* 14. Contact & Free Marketing Audit Consultation */}
      <ContactSection />
    </div>
  );
}
