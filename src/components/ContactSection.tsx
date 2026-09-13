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
    <section id="contact" className="flex flex-col w-full py-16 sm:py-20 border-t border-slate-200/80 relative overflow-hidden bg-transparent z-10">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs uppercase tracking-wider font-extrabold mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Direct Communication & Audits
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight mb-3">
            Reach Us <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Through</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium max-w-xl mx-auto">
            Connect directly with our senior media strategists for personalized marketing roadmaps, growth audits, and academy enrollments.
          </p>
        </div>

        {/* Modern 2-Column Equal Size Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* Left Column: Equal Height Partner Desk Card */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-5 sm:p-7 border border-slate-200 shadow-md relative overflow-hidden flex flex-col justify-between h-full bg-white/95"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs uppercase tracking-wider font-bold mb-3 shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5" /> High-Growth Partnership
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mb-2.5 leading-tight">
                  Let's Scale Your <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                    Next Growth Milestone
                  </span>
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Tell us about your brand goals. Our senior strategists will analyze your ad accounts and prepare a custom growth roadmap within 24 hours.
                </p>

                {/* Reach Us Through Heading & Direct Contact Cards */}
                <div className="pt-1">
                  <div className="text-xs font-black uppercase tracking-wider text-slate-900 mb-2.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    Reach Us Through:
                  </div>

                  <div className="space-y-2.5">
                  <div className="rounded-xl p-3 flex items-center gap-3 border border-slate-200 bg-slate-50/70 hover:border-blue-300 hover:bg-blue-50/40 transition-all group shadow-2xs">
                    <div className="w-8 h-8 rounded-lg bg-blue-100/80 border border-blue-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[9px] text-slate-500 font-medium uppercase tracking-wider">Direct Email</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">info@himastech.com</div>
                    </div>
                  </div>

                  <a 
                    href="tel:+916304989071" 
                    className="rounded-xl p-3 flex items-center justify-between border border-slate-200 bg-slate-50/70 hover:border-purple-300 hover:bg-purple-50/40 transition-all group cursor-pointer shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-100/80 border border-purple-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Phone className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-[9px] text-slate-500 font-medium uppercase tracking-wider">Strategic Call Desk</div>
                        <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-purple-600 transition-colors">+91 6304989071</div>
                      </div>
                    </div>
                    <span className="text-[9px] font-bold text-purple-700 bg-purple-100/80 px-2 py-0.5 rounded-full border border-purple-200">Call Now →</span>
                  </a>

                  <a 
                    href="https://wa.me/916304989071?text=Hi%20Himastech%2C%20I%20would%20like%20to%20discuss%20our%20growth%20strategy" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl p-3 flex items-center justify-between border border-emerald-200 bg-emerald-50/60 hover:border-emerald-300 hover:bg-emerald-50 transition-all group cursor-pointer shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-emerald-600">
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-[9px] text-emerald-800 font-medium uppercase tracking-wider">WhatsApp Desk</div>
                        <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">+91 6304989071</div>
                      </div>
                    </div>
                    <span className="text-[9px] text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200 font-bold">Chat 💬</span>
                  </a>

                  <div className="rounded-xl p-3 flex items-center gap-3 border border-slate-200 bg-slate-50/70 hover:border-pink-300 hover:bg-pink-50/40 transition-all group shadow-2xs">
                    <div className="w-8 h-8 rounded-lg bg-pink-100/80 border border-pink-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <MapPin className="h-4 w-4 text-pink-600" />
                    </div>
                    <div>
                      <div className="text-[9px] text-slate-500 font-medium uppercase tracking-wider">Operational Center</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">Nagole, Hyderabad, Telangana, India</div>
                    </div>
                  </div>
                </div>
              </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 mt-5 border-t border-slate-200 space-y-2 text-[11px] text-slate-600">
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>100% Strict NDA Protection. Zero Spam Guarantee.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Average strategy audit turnaround: 4 hours</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Equal Height Form Card */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-5 sm:p-7 border border-slate-200 shadow-md relative overflow-hidden flex flex-col justify-between h-full bg-white/95"
            >
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <form
                    key="form"
                    className="space-y-4"
                    onSubmit={handleSubmit}
                  >
                    {error && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs">
                        {error}
                      </div>
                    )}

                    {/* Primary Growth Objective Selector */}
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-2">
                        1. Select Primary Objective:
                      </label>
                      <div className="flex flex-wrap gap-1.5">
                        {goalOptions.map((goal) => (
                          <button
                            type="button"
                            key={goal}
                            onClick={() => setSelectedGoal(goal)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border cursor-pointer ${selectedGoal === goal
                              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-xs"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:text-slate-900 hover:border-slate-300"
                              }`}
                          >
                            {goal}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                      <div>
                        <label htmlFor="name" className="text-xs font-semibold text-slate-700 block mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="e.g. Alex Morgan"
                          className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors shadow-xs"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="text-xs font-semibold text-slate-700 block mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="alex@company.com"
                          className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors shadow-xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label htmlFor="company" className="text-xs font-semibold text-slate-700 block mb-1">
                          Company / Website
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          placeholder="company.com"
                          className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors shadow-xs"
                        />
                      </div>

                      <div>
                        <label htmlFor="budget" className="text-xs font-semibold text-slate-700 block mb-1">
                          Monthly Ad Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          aria-label="Monthly Ad Spend"
                          className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-purple-500 transition-colors cursor-pointer shadow-xs"
                        >
                          <option value="$3,000 - $10,000">$3,000 - $10,000 / month</option>
                          <option value="$10,000 - $30,000">$10,000 - $30,000 / month</option>
                          <option value="$30,000 - $100,000+">$30,000 - $100,000+ / month</option>
                          <option value="Training / Hiring">Training / Hiring Marketers</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="text-xs font-semibold text-slate-700 block mb-1">
                        Current Growth Bottlenecks *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={3}
                        placeholder="Tell us about your target CAC, current ad blockers, or goals..."
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors resize-none shadow-xs"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isPending}
                        aria-label={isPending ? "Submitting Request..." : "Request Growth Audit"}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-600 text-white font-bold text-xs sm:text-sm hover:shadow-md transition-all hover:scale-[1.01] flex items-center justify-center gap-1.5 disabled:opacity-70 disabled:cursor-not-allowed group cursor-pointer shadow-xs"
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
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-4 text-emerald-600 shadow-sm">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-950 mb-2">Strategy Request Received!</h3>
                    <p className="text-slate-600 text-xs sm:text-sm max-w-sm mb-4 leading-relaxed">
                      Thank you for reaching out. One of our lead media strategists will analyze your stack and contact you within 24 hours.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200">
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
