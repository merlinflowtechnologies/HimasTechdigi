"use client";

import { Mail, MapPin, Phone, Send, CheckCircle2, Sparkles, Shield, Clock, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { submitContactForm } from "@/app/actions";
import { useState, useTransition } from "react";

export function ContactSection() {
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedGoal, setSelectedGoal] = useState<string>("Scale Paid Ads (Meta / Google)");

  const goalOptions = [
    "Scale Paid Ads (Meta / Google)",
    "SEO & Generative Search (GEO)",
    "CRO & Landing Pages",
    "Training & Recruitment",
    "Free 30-Min Marketing Audit",
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    formData.set("serviceGoal", selectedGoal);

    startTransition(async () => {
      const result = await submitContactForm(formData);
      if (result.success) {
        setIsSuccess(true);
        formElement.reset();
        setTimeout(() => setIsSuccess(false), 7000);
      } else {
        setError(result.error || "An unexpected error occurred. Please try again.");
      }
    });
  };

  return (
    <section id="contact" className="flex flex-col w-full py-16 sm:py-20 border-t border-white/10 relative overflow-hidden bg-transparent z-10">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Modern 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* Left Column: Headline, Info & Trust Guarantees */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs uppercase tracking-wider font-bold mb-3 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <Sparkles className="w-3.5 h-3.5" /> High-Growth Partnership
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3 leading-tight">
                Let's Scale Your <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-500">
                  Next Growth Milestone
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Tell us about your brand goals. Our senior strategists will analyze your ad accounts and prepare a custom growth roadmap within 24 hours.
              </p>
            </div>

            {/* Compact Direct Contact Cards */}
            <div className="space-y-3">
              <div className="glass-card rounded-xl p-3.5 flex items-center gap-3.5 border border-white/10 hover:border-cyan-400/40 transition-all group">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="h-4 w-4 text-cyan-400" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Direct Email</div>
                  <div className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">info@himastech.com</div>
                </div>
              </div>

              <a 
                href="tel:+918374373753" 
                className="glass-card rounded-xl p-3.5 flex items-center justify-between border border-white/10 hover:border-purple-400/40 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="h-4 w-4 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Strategy Desk & Call</div>
                    <div className="text-xs sm:text-sm font-bold text-white group-hover:text-purple-300 transition-colors">+91 8374373753</div>
                  </div>
                </div>
                <span className="text-[10px] text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">Call Now →</span>
              </a>

              <a 
                href="https://wa.me/918374373753?text=Hi%20Himastech%2C%20I%20would%20like%20to%20discuss%20our%20growth%20strategy" 
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-3.5 flex items-center justify-between border border-emerald-500/20 hover:border-emerald-500/50 bg-emerald-500/[0.03] transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-emerald-400">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] text-emerald-400 font-medium uppercase tracking-wider">WhatsApp Desk</div>
                    <div className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">+91 8374373753</div>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-300 bg-emerald-500/15 px-2 py-0.5 rounded-full border border-emerald-500/30">Chat 💬</span>
              </a>

              <div className="glass-card rounded-xl p-3.5 flex items-center gap-3.5 border border-white/10 hover:border-pink-400/40 transition-all group">
                <div className="w-9 h-9 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MapPin className="h-4 w-4 text-pink-400" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Operational Center</div>
                  <div className="text-xs sm:text-sm font-bold text-white">HITEC City, Hyderabad, India</div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-2 border-t border-white/10 space-y-2 text-[11px] text-slate-300">
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>100% Strict NDA Protection. Zero Spam Guarantee.</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Average strategy audit turnaround: 4 hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Compact Form Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-5 sm:p-7 border border-white/15 shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <form
                    key="form"
                    className="space-y-4"
                    onSubmit={handleSubmit}
                  >
                    {error && (
                      <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs">
                        {error}
                      </div>
                    )}

                    {/* Primary Growth Objective Selector */}
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-2">
                        1. Select Primary Objective:
                      </label>
                      <div className="flex flex-wrap gap-1.5">
                        {goalOptions.map((goal) => (
                          <button
                            type="button"
                            key={goal}
                            onClick={() => setSelectedGoal(goal)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border cursor-pointer ${selectedGoal === goal
                              ? "bg-gradient-to-r from-brand-blue to-brand-purple text-white border-transparent shadow-[0_0_12px_rgba(139,92,246,0.3)]"
                              : "bg-white/[0.03] text-gray-400 border-white/10 hover:text-white hover:border-white/20"
                              }`}
                          >
                            {goal}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                      <div>
                        <label htmlFor="name" className="text-xs font-semibold text-slate-300 block mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="e.g. Alex Morgan"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="text-xs font-semibold text-slate-300 block mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="alex@company.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label htmlFor="company" className="text-xs font-semibold text-slate-300 block mb-1">
                          Company / Website
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          placeholder="company.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="budget" className="text-xs font-semibold text-slate-300 block mb-1">
                          Monthly Ad Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          aria-label="Monthly Ad Spend"
                          className="w-full bg-[#0a0f1e] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-purple-400 transition-colors cursor-pointer"
                        >
                          <option value="$3,000 - $10,000">$3,000 - $10,000 / month</option>
                          <option value="$10,000 - $30,000">$10,000 - $30,000 / month</option>
                          <option value="$30,000 - $100,000+">$30,000 - $100,000+ / month</option>
                          <option value="Training / Hiring">Training / Hiring Marketers</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="text-xs font-semibold text-slate-300 block mb-1">
                        Current Growth Bottlenecks *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={3}
                        placeholder="Tell us about your target CAC, current ad blockers, or goals..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isPending}
                        aria-label={isPending ? "Submitting Request..." : "Request Growth Audit"}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-500 text-white font-bold text-xs sm:text-sm hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all hover:scale-[1.01] flex items-center justify-center gap-1.5 disabled:opacity-70 disabled:cursor-not-allowed group cursor-pointer border border-white/20"
                      >
                        {isPending ? (
                          <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>Request Growth Audit & Proposal <Send className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" /></>
                        )}
                      </button>
                    </div>
                  </form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mb-4 text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2">Strategy Request Received!</h3>
                    <p className="text-slate-300 text-xs sm:text-sm max-w-sm mb-4 leading-relaxed">
                      Thank you for reaching out. One of our lead media strategists will analyze your stack and contact you within 24 hours.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-full border border-cyan-500/20">
                      <Clock className="w-3.5 h-3.5" /> Average response turnaround: 4 hours
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
