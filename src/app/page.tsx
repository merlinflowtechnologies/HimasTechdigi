"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Sparkles, Zap } from "lucide-react";
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

      {/* Hero Section with hero.png as Background */}
      <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-start pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden z-10">
        {/* Background Image Layer (hero.png) Behind Text */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero.png" 
            alt="Himastech Performance Marketing Ecosystem" 
            fill 
            priority 
            className="object-cover object-right lg:object-center opacity-85 sm:opacity-95"
          />
          {/* Directional gradient on left side for crisp text readability while leaving the 3D visual on the right and bottom fully vibrant */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/80 to-transparent sm:via-[#030712]/60 pointer-events-none z-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/40 pointer-events-none z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/60 via-transparent to-[#030712] pointer-events-none z-0" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Left-Aligned Headline, Copy, and CTAs */}
          <div className="max-w-2xl lg:max-w-3xl text-left flex flex-col items-start">
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/40 border border-white/20 text-gray-200 mb-6 text-xs backdrop-blur-2xl shadow-[0_0_25px_rgba(6,182,212,0.25)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-200 to-pink-300">
                Next-Gen Performance Marketing & High-Ticket Scale
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-purple-500/25 text-purple-300 text-[10px] font-bold border border-purple-500/40">
                NEW 2024 ENGINE
              </span>
            </motion.div>

            {/* Main H1 Headline - Compact Clean Typography */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5 leading-[1.15]"
            >
              <span className="block text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">Scale Your Brand With</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-500 drop-shadow-[0_0_35px_rgba(99,102,241,0.4)]">
                Predictable Revenue
              </span>
            </motion.h1>

            {/* Subtitle Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-slate-200 mb-8 leading-relaxed font-normal max-w-2xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]"
            >
              Himastech engineers high-converting Meta & Google ad funnels, generative AI search optimization (GEO), and elite digital marketing talent pipelines to help you out-scale competitors.
            </motion.p>

            {/* Call to Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3.5 justify-start items-center w-full sm:w-auto"
            >
              <Link
                href="#contact"
                className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-500 text-white font-bold text-xs sm:text-sm hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] transition-all hover:scale-105 flex items-center justify-center gap-2 group cursor-pointer border border-white/20"
              >
                <Sparkles className="w-3.5 h-3.5" /> 
                <span>Get Free 30-Min Growth Audit</span> 
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#roi-calculator"
                className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full glass-card text-white font-semibold text-xs sm:text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2 group border border-white/15 hover:border-cyan-400/40 cursor-pointer shadow-[0_0_25px_rgba(0,0,0,0.5)]"
              >
                <Zap className="h-3.5 w-3.5 text-cyan-400" /> 
                <span>Simulate Your ROI</span> 
                <ChevronRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-white transition-colors" />
              </Link>
            </motion.div>
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
