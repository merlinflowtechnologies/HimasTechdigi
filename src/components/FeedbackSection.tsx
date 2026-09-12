"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Heart, 
  Award, 
  Building2, 
  User, 
  Mail, 
  Quote
} from "lucide-react";

export function FeedbackSection() {
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [category, setCategory] = useState<string>("Performance Marketing & ROAS");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");
  const [allowPublic, setAllowPublic] = useState<boolean>(true);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const categories = [
    "Performance Marketing & ROAS",
    "Digital Marketing Academy Tracks",
    "Creative & UGC Video Production",
    "Generative AI & GEO Search",
    "Account Strategy & Communication"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !feedback) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setEmail("");
    setCompany("");
    setFeedback("");
    setRating(5);
  };

  const recentReviews = [
    {
      name: "Rohit Verma",
      role: "Founder, D2C Apparel Brand",
      rating: 5,
      category: "Performance Marketing & ROAS",
      text: "Himastech scaled our Meta & Google ad spend from ₹4L to ₹28L/month while increasing our ROAS from 2.4x to 4.8x. The creative iteration speed is unmatched.",
      time: "2 days ago"
    },
    {
      name: "Ananya Iyer",
      role: "Alumni, ROAS Acceleration Track",
      rating: 5,
      category: "Digital Marketing Academy Tracks",
      text: "The curved roadmaps and live ad account audits gave me hands-on confidence. Landed a Senior Media Buyer role at an agency within 3 weeks of graduation!",
      time: "1 week ago"
    },
    {
      name: "Vikram Malhotra",
      role: "VP Marketing, B2B SaaS",
      rating: 5,
      category: "Account Strategy & Communication",
      text: "Their Generative Engine Optimization (GEO) got our software brand featured inside ChatGPT and Perplexity answers for our top high-intent keywords.",
      time: "2 weeks ago"
    }
  ];

  return (
    <section id="feedback" className="py-20 bg-transparent border-t border-slate-200/80 relative overflow-hidden z-10">
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs uppercase tracking-wider font-extrabold mb-3 shadow-sm">
            <Heart className="w-3.5 h-3.5 text-purple-600 fill-purple-600/20" /> Client & Student Community Voice
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight mb-4">
            Leave Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600">Feedback & Rating</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Your insights fuel our continuous refinement. Whether you partnered with us for agency growth or graduated from our Academy, we want to hear your experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Feedback Form */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md relative overflow-hidden bg-white/95">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Star Rating Selector */}
                  <div>
                    <label className="text-xs font-bold text-slate-900 block mb-2">
                      Overall Experience Rating *
                    </label>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 p-2 rounded-2xl bg-slate-50 border border-slate-200 w-fit">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="p-1 rounded-lg transition-transform hover:scale-110 cursor-pointer focus:outline-none"
                            aria-label={`Rate ${star} star`}
                          >
                            <Star
                              className={`w-6 h-6 transition-colors ${
                                (hoverRating || rating) >= star
                                  ? "text-amber-400 fill-amber-400"
                                  : "text-slate-300"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                      <span className="text-xs font-bold text-slate-700 ml-2">
                        {rating === 5 && " Exceptional (5/5)"}
                        {rating === 4 && " Very Good (4/5)"}
                        {rating === 3 && " Good (3/5)"}
                        {rating === 2 && " Needs Improvement (2/5)"}
                        {rating === 1 && " Poor (1/5)"}
                      </span>
                    </div>
                  </div>

                  {/* Category Selection */}
                  <div>
                    <label className="text-xs font-bold text-slate-900 block mb-2">
                      Feedback Topic / Engagement *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setCategory(cat)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                            category === cat
                              ? "bg-purple-600 text-white border-purple-600 shadow-xs"
                              : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-900 block mb-1.5">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Rajesh Sharma"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all font-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-900 block mb-1.5">
                        Email Address (Optional)
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="rajesh@company.com"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all font-medium"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company / Brand Name */}
                  <div>
                    <label className="text-xs font-bold text-slate-900 block mb-1.5">
                      Company / Brand / Role (Optional)
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Founder at Lumina Retail / Batch #14 Student"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Feedback Textarea */}
                  <div>
                    <label className="text-xs font-bold text-slate-900 block mb-1.5">
                      Your Detailed Feedback & Suggestions *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="Share what went great, measurable results achieved, curriculum takeaways, or areas we can elevate..."
                      className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all resize-none font-medium leading-relaxed"
                    />
                  </div>

                  {/* Checkbox */}
                  <label className="flex items-center gap-2.5 cursor-pointer select-none text-xs text-slate-600">
                    <input
                      type="checkbox"
                      checked={allowPublic}
                      onChange={(e) => setAllowPublic(e.target.checked)}
                      className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500 border-slate-300 accent-purple-600"
                    />
                    <span>Allow Himastech to feature this review on our website & case studies</span>
                  </label>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-white font-bold text-xs sm:text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer border border-white/20"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting Your Feedback...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Verified Feedback
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Thank You for Your Feedback!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    We truly appreciate your review, <strong className="text-slate-900">{name}</strong>. Your feedback has been registered and directly shared with our leadership and curriculum team.
                  </p>
                  <div className="pt-3">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                    >
                      Submit Another Response
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Community Highlights & Trust Metrics */}
          <div className="lg:col-span-5 space-y-4">
            {/* Quick Metrics Card */}
            <div className="glass-card rounded-2xl p-5 border border-slate-200/80 shadow-sm bg-gradient-to-br from-purple-50/50 via-white to-cyan-50/40">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-600" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Satisfaction Score</h4>
                </div>
                <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                  Verified Audit
                </span>
              </div>

              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-black text-slate-950">4.9</span>
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-slate-500 font-semibold">(180+ Reviews)</span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                98.4% of agency clients and academy students rate our technical execution and ROI delivery as 5-stars.
              </p>
            </div>

            {/* Verified Feedback Stream */}
            <div className="space-y-3">
              {recentReviews.map((rev, idx) => (
                <div 
                  key={idx}
                  className="glass-card rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:border-purple-300 transition-colors bg-white/90"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-500 text-white font-bold text-xs flex items-center justify-center">
                        {rev.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 leading-tight">{rev.name}</div>
                        <div className="text-[10px] text-slate-500 font-medium">{rev.role}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed italic relative">
                    <Quote className="w-3 h-3 text-purple-400/40 inline-block -mt-1 mr-1" />
                    {rev.text}
                  </p>

                  <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2.5 pt-2 border-t border-slate-100 font-medium">
                    <span className="text-purple-600 font-semibold">{rev.category}</span>
                    <span>{rev.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
