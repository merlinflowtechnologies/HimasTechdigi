"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Vikram Malhotra",
      role: "Managing Director, Apex Skyline Realty",
      avatarInitials: "VM",
      rating: 5,
      headline: "$34M in verified inventory sales in under 6 months.",
      quote: "Himastech transformed our high-ticket acquisition. Their hyper-targeted Meta ad funnels and automated WhatsApp booking delivered qualified buyers daily.",
      stats: "$34M+ Pipeline",
      roas: "7.8x ROAS",
      verified: "Verified Client",
      color: "from-blue-500/20 to-cyan-500/10",
    },
    {
      name: "Sophia Chen",
      role: "Founder & CEO, Lumina Organic",
      avatarInitials: "SC",
      rating: 5,
      headline: "Scaled D2C brand from $70k to $550k monthly ad revenue.",
      quote: "Their creative team completely revamped our UGC pipeline and built high-speed custom landing pages that tripled our checkout conversion rate.",
      stats: "+680% Revenue",
      roas: "5.4x ROAS",
      verified: "Verified Client",
      color: "from-purple-500/20 to-pink-500/10",
    },
    {
      name: "David Sterling",
      role: "VP of Growth, SyncFlow Cloud",
      avatarInitials: "DS",
      rating: 5,
      headline: "Cut enterprise CAC by 42% while tripling demo bookings.",
      quote: "The combination of LinkedIn ABM and intent search ads yielded qualified enterprise decision-makers instead of low-intent tire kickers. Absolute game changers.",
      stats: "-42% CAC",
      roas: "$2.1M Pipeline",
      verified: "Verified Client",
      color: "from-emerald-500/20 to-teal-500/10",
    },
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-transparent border-t border-slate-200/80 relative overflow-hidden z-10">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-brand-pink/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-purple/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-700 text-xs uppercase tracking-wider font-bold mb-3 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5" /> High-Trust Social Proof
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight mb-2.5">
            Loved By Fast-Growing <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600">
              Founders & Marketing Leaders
            </span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            See how forward-thinking brands scale predictably with Himastech's data-driven growth systems.
          </p>
        </div>

        {/* Compact Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-5 sm:p-6 relative overflow-hidden border border-slate-200 hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${item.color} rounded-bl-full blur-xl pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity`} />

              <div>
                {/* Rating & Verified badge */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-0.5">
                    {[...Array(item.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5" /> {item.verified}
                  </span>
                </div>

                {/* Headline & Quote */}
                <h3 className="text-sm sm:text-base font-bold text-slate-950 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                  "{item.headline}"
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {item.quote}
                </p>
              </div>

              <div>
                {/* Metrics Chip */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 mb-3.5">
                  <div>
                    <span className="text-[9px] text-slate-500 block uppercase tracking-wider font-semibold">Primary Impact</span>
                    <span className="text-xs font-black text-blue-600">{item.stats}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] text-slate-500 block uppercase tracking-wider font-semibold">Campaign ROAS</span>
                    <span className="text-xs font-black text-emerald-700">{item.roas}</span>
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-2.5 pt-3 border-t border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-xs shrink-0">
                    {item.avatarInitials}
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-xs font-bold text-slate-900 leading-tight truncate">{item.name}</h4>
                    <p className="text-[10px] text-slate-500 leading-tight mt-0.5 truncate">{item.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compact Bottom Social Proof Banner */}
        <div className="mt-8 glass-card rounded-2xl p-4 sm:p-5 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-1.5">
              {["VM", "SC", "DS", "AK", "RJ"].map((init, i) => (
                <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 border-2 border-white flex items-center justify-center text-[9px] font-bold text-white shadow-xs">
                  {init}
                </div>
              ))}
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">Join 150+ Scale-Ups Dominating Paid Media</div>
              <div className="text-[11px] text-slate-500">Average 4.85x ROAS across active portfolio</div>
            </div>
          </div>

          <Link
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-600 text-white font-bold text-xs hover:shadow-md transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer shadow-xs shrink-0"
          >
            Start Your Growth Journey <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
