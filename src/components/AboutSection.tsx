"use client";

import { Target, Lightbulb, Shield, TrendingUp, Sparkles, Building, Award, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function AboutSection() {
  const values = [
    {
      icon: <Target className="h-5 w-5 text-cyan-400" />,
      title: "Algorithmic Precision",
      desc: "Every dollar is tied to real revenue, verified attribution, and transparent live dashboards.",
    },
    {
      icon: <Lightbulb className="h-5 w-5 text-purple-400" />,
      title: "Creative Science",
      desc: "We combine psychology-driven direct response hooks with rigorous A/B multivariate testing.",
    },
    {
      icon: <Shield className="h-5 w-5 text-emerald-400" />,
      title: "Uncompromising Integrity",
      desc: "Zero vanity metrics, zero hidden markups. You own 100% of your ad accounts, pixels, and data.",
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-pink-400" />,
      title: "Compound Growth",
      desc: "We engineer systems that scale sustainably—optimizing CAC down as revenue scales up.",
    },
  ];

  return (
    <section id="about" className="flex flex-col w-full py-16 sm:py-20 bg-transparent border-t border-slate-200/80 relative overflow-hidden z-10">
      {/* Decorative blobs */}
      <div className="absolute top-40 left-10 w-80 h-80 bg-brand-blue/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-brand-purple/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs uppercase tracking-wider font-bold mb-3 shadow-xs">
            <Building className="w-3.5 h-3.5" /> Our Story & DNA
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 mb-3 tracking-tight">
            Built On Data. <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Obsessed With Growth.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Himastech was founded on a simple principle: digital marketing should be a predictable revenue generation engine, not a costly gamble.
          </p>
        </div>

        {/* Mission + Core Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          {/* Mission Left */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
              <Sparkles className="h-3 w-3" /> Enterprise Grade Execution
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 leading-tight">
              Bridging Cutting-Edge Ad Tech & Direct-Response Creative.
            </h3>
            
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              In strategic collaboration with <strong className="text-slate-900 font-semibold">Merlinflow Technologies Pvt Ltd</strong>, Himastech brings enterprise engineering rigor to the world of growth marketing.
            </p>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              We eliminate the chaos of dealing with fragmented freelancers and bloated legacy agencies. Our clients get a dedicated pod of senior media buyers, CRO developers, copywriters, and video editors operating as a seamless extension of their in-house team.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-xl font-black text-slate-900">100%</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">Ad Account Ownership</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-xl font-black text-slate-900">24/7</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">Live Telemetry & Reporting</div>
              </div>
            </div>
          </div>

          {/* Pillars Right */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card rounded-xl p-4 sm:p-5 border border-slate-200 hover:border-slate-300 transition-all group shadow-xs hover:shadow-md"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-200 mb-3 group-hover:scale-105 transition-transform">
                  {val.icon}
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">{val.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Compact Executive Leadership Team Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-5 sm:p-7 relative overflow-hidden border border-slate-200 shadow-sm"
        >
          <div className="absolute top-0 right-0 w-60 h-60 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Visual badge */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative mb-3">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-500 rounded-2xl blur-lg opacity-25" />
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-white border border-slate-200 relative z-10 flex flex-col items-center justify-center p-4 shadow-sm">
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mb-1.5" />
                  <span className="text-[11px] font-bold text-slate-900">Himastech</span>
                  <span className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">Leadership</span>
                </div>
              </div>
              <span className="text-xs font-bold text-slate-900">Executive Leadership Team</span>
              <span className="text-[10px] text-blue-600 font-medium">Head of Performance & Strategy</span>
            </div>

            {/* Quote & Vision Content */}
            <div className="lg:col-span-8 space-y-2.5">
              <h3 className="text-base sm:text-lg font-bold text-slate-950 leading-snug">
                “We don't build generic ad campaigns. We build compounding revenue assets that make our clients market leaders.”
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Having managed tens of millions in paid ad spend across Meta, Google, and emerging channels, we observed that most brands struggle because their creative is disconnected from the conversion funnel.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                By uniting technical data tracking, high-velocity creative testing, and talent recruitment from our academy, we give companies an unfair competitive advantage.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-3 text-[11px] text-slate-500">
                <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-600" /> Meta Blueprint Certified</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-600" /> Google Ads Certified</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-600" /> HubSpot Inbound Certified</span>
              </div>

              {/* Collaboration with Merlinflow Technologies Private Limited */}
              <div className="pt-3 mt-2 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse shrink-0" />
                  <span className="text-xs font-medium text-slate-600">
                    Strategic Collaboration with{" "}
                    <strong className="text-blue-700 font-bold">
                      Merlinflow Technologies Private Limited
                    </strong>
                  </span>
                </div>
                <span className="text-[10px] text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full font-semibold shadow-xs">
                  Enterprise Technology & AI Growth Ecosystem
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
