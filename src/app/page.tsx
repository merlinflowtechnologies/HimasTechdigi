"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Sparkles, TrendingUp, ShieldCheck, Zap, BarChart3 } from "lucide-react";
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
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AboutSection } from "@/components/AboutSection";
import { MerlinflowSection } from "@/components/MerlinflowSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full text-slate-100 overflow-x-hidden relative">
      {/* Global Animated Background System */}
      <BackgroundEffects />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden z-10">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.05] border border-white/15 text-gray-200 mb-8 text-xs sm:text-sm backdrop-blur-2xl shadow-[0_0_30px_rgba(6,182,212,0.15)]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
            </span>
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-200 to-pink-300">
              Next-Gen Performance Marketing & High-Ticket Scale
            </span>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-brand-purple/25 text-purple-300 text-[10px] font-bold border border-brand-purple/40">
              NEW 2024 ENGINE
            </span>
          </motion.div>

          {/* Main H1 Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-8 max-w-5xl leading-[1.08]"
          >
            <span className="block text-white drop-shadow-[0_2px_20px_rgba(255,255,255,0.2)]">Scale Your Brand With</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-500 pb-2 drop-shadow-[0_0_40px_rgba(99,102,241,0.3)]">
              Predictable Revenue
            </span>
          </motion.h1>

          {/* Subtitle Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed font-normal"
          >
            Himastech engineers high-converting Meta & Google ad funnels, generative AI search optimization (GEO), and elite digital marketing talent pipelines to help you out-scale competitors.
          </motion.p>

          {/* Call to Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 w-full sm:w-auto"
          >
            <Link
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-500 text-white font-bold text-base hover:shadow-[0_0_45px_rgba(99,102,241,0.6)] transition-all hover:scale-105 flex items-center justify-center gap-2 group cursor-pointer border border-white/20"
            >
              <Sparkles className="w-4 h-4" /> Get Free 30-Min Growth Audit <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#roi-calculator"
              className="w-full sm:w-auto px-8 py-4 rounded-full glass-card text-white font-semibold text-base hover:bg-white/10 transition-all flex items-center justify-center gap-2 group border border-white/15 hover:border-cyan-400/40 cursor-pointer shadow-[0_0_30px_rgba(0,0,0,0.5)]"
            >
              <Zap className="h-4 w-4 text-cyan-400" /> Simulate Your ROI <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
            </Link>
          </motion.div>

          {/* Hero Analytics UI Dashboard Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full max-w-6xl mx-auto relative rounded-3xl overflow-hidden shadow-[0_0_120px_rgba(99,102,241,0.3)] border border-white/20 group backdrop-blur-xl"
          >
            {/* Top Gloss Highlights */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070913] via-transparent to-transparent z-10 pointer-events-none" />
            
            {/* Live Floating Metric Badges Overlay */}
            <div className="absolute top-6 left-6 z-20 hidden md:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-black/80 backdrop-blur-2xl border border-white/15 shadow-2xl">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <div className="text-left">
                <div className="text-[10px] text-gray-400 font-semibold uppercase">Active Ad Campaigns</div>
                <div className="text-xs font-black text-white">$849,210 Managed Pipeline</div>
              </div>
            </div>

            <div className="absolute bottom-10 right-6 z-20 hidden md:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-black/80 backdrop-blur-2xl border border-white/15 shadow-2xl">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <div className="text-left">
                <div className="text-[10px] text-gray-400 font-semibold uppercase">Blended ROAS Average</div>
                <div className="text-xs font-black text-cyan-300">4.85x (+24.1% vs prev mo)</div>
              </div>
            </div>

            <Image 
              src="/hero-dashboard.jpg" 
              alt="Himastech Digital Marketing Analytics & Performance Dashboard" 
              width={1920}
              height={1080}
              priority
              className="w-full h-auto object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-1000"
            />
          </motion.div>
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

      {/* 7. Marketing Channels Breakdown */}
      <MarketingChannelsSection />

      {/* 8. Elite Marketing Training & Recruiting Academy */}
      <TrainingSection />

      {/* 9. Verified Client Testimonials */}
      <TestimonialsSection />

      {/* 10. About Us & Strategic Vision */}
      <AboutSection />

      {/* 11. Strategic Alliance with Merlinflow Technologies Private Limited */}
      <MerlinflowSection />

      {/* 12. Frequently Asked Questions */}
      <FaqSection />

      {/* 13. Contact & Free Marketing Audit Consultation */}
      <ContactSection />
    </div>
  );
}
