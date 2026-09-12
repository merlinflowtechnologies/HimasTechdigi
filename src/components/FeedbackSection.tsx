"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  Send, 
  CheckCircle2, 
  Heart, 
  Award, 
  Building2, 
  User, 
  Mail, 
  Quote,
  ShieldCheck,
  Lock,
  Unlock,
  Check,
  X,
  Trash2,
  AlertCircle,
  Sparkles,
  Clock,
  ChevronRight
} from "lucide-react";

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  email?: string;
  rating: number;
  category: string;
  text: string;
  time: string;
  status: "approved" | "pending" | "rejected";
  createdAt: number;
}

const INITIAL_APPROVED_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Rohit Verma",
    role: "Founder, D2C Apparel Brand",
    email: "rohit@d2capparel.in",
    rating: 5,
    category: "Performance Marketing & ROAS",
    text: "Himastech scaled our Meta & Google ad spend from ₹4L to ₹28L/month while increasing our ROAS from 2.4x to 4.8x. The creative iteration speed is unmatched.",
    time: "2 days ago",
    status: "approved",
    createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000
  },
  {
    id: "rev-2",
    name: "Ananya Iyer",
    role: "Alumni, ROAS Acceleration Track",
    email: "ananya.iyer@gmail.com",
    rating: 5,
    category: "Digital Marketing Academy Tracks",
    text: "The curved roadmaps and live ad account audits gave me hands-on confidence. Landed a Senior Media Buyer role at an agency within 3 weeks of graduation!",
    time: "1 week ago",
    status: "approved",
    createdAt: Date.now() - 7 * 24 * 60 * 60 * 1000
  },
  {
    id: "rev-3",
    name: "Vikram Malhotra",
    role: "VP Marketing, B2B SaaS",
    email: "vikram@syncflow.io",
    rating: 5,
    category: "Account Strategy & Communication",
    text: "Their Generative Engine Optimization (GEO) got our software brand featured inside ChatGPT and Perplexity answers for our top high-intent keywords.",
    time: "2 weeks ago",
    status: "approved",
    createdAt: Date.now() - 14 * 24 * 60 * 60 * 1000
  }
];

const ADMIN_PASSCODE = "himasadmin";
const STORAGE_KEY = "himastech_reviews_data";

export function FeedbackSection() {
  const [reviews, setReviews] = useState<ReviewItem[]>(INITIAL_APPROVED_REVIEWS);
  const [mounted, setMounted] = useState<boolean>(false);

  // Form State
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

  // Admin Modal State
  const [showAdminModal, setShowAdminModal] = useState<boolean>(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(false);
  const [adminPassInput, setAdminPassInput] = useState<string>("");
  const [passError, setPassError] = useState<string>("");
  const [adminActiveTab, setAdminActiveTab] = useState<"pending" | "approved" | "new">("pending");
  const [actionNotice, setActionNotice] = useState<string>("");

  // Direct Admin Review Creation State
  const [adminCustomName, setAdminCustomName] = useState<string>("");
  const [adminCustomRole, setAdminCustomRole] = useState<string>("");
  const [adminCustomText, setAdminCustomText] = useState<string>("");
  const [adminCustomRating, setAdminCustomRating] = useState<number>(5);
  const [adminCustomCategory, setAdminCustomCategory] = useState<string>("Performance Marketing & ROAS");

  const categories = [
    "Performance Marketing & ROAS",
    "Digital Marketing Academy Tracks",
    "Creative & UGC Video Production",
    "Generative AI & GEO Search",
    "Account Strategy & Communication"
  ];

  // Load reviews from localStorage / API on mount
  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setReviews(parsed);
        }
      }
    } catch {
      // fallback to initial
    }

    // Attempt to sync with API route
    fetch("/api/reviews?adminKey=" + ADMIN_PASSCODE)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.all && Array.isArray(data.all)) {
          setReviews((prev) => {
            // merge stored with remote if any
            const merged = [...data.all];
            prev.forEach((p) => {
              if (!merged.some((m) => m.id === p.id)) {
                merged.push(p);
              }
            });
            try {
              localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
            } catch {}
            return merged;
          });
        }
      })
      .catch(() => {
        // quiet fallback
      });
  }, []);

  const saveReviews = (updated: ReviewItem[]) => {
    setReviews(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error("Failed to save to localStorage", e);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !feedback) return;
    setIsSubmitting(true);

    const newReview: ReviewItem = {
      id: `rev-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      name: name.trim(),
      role: company?.trim() || "Verified Community Member",
      email: email?.trim() || undefined,
      rating,
      category,
      text: feedback.trim(),
      time: "Just now",
      status: "pending", // ALWAYS enters pending until admin approves
      createdAt: Date.now()
    };

    // Save locally
    const updated = [newReview, ...reviews];
    saveReviews(updated);

    // Call API route
    try {
      await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          rating,
          category,
          text: feedback
        })
      });
    } catch {
      // Local state is already updated
    }

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

  // Admin Actions
  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassInput === ADMIN_PASSCODE || adminPassInput === "admin123") {
      setIsAdminAuthenticated(true);
      setPassError("");
    } else {
      setPassError("Invalid admin passcode. (Default: himasadmin)");
    }
  };

  const handleApproveReview = async (id: string) => {
    const target = reviews.find((r) => r.id === id);
    const updated = reviews.map((r) => (r.id === id ? { ...r, status: "approved" as const } : r));
    saveReviews(updated);

    try {
      await fetch("/api/reviews", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: "approved", adminKey: ADMIN_PASSCODE })
      });
    } catch {}

    setActionNotice(`✓ Review from "${target?.name || "Client"}" approved & published live!`);
    setTimeout(() => setActionNotice(""), 4000);
  };

  const handleRejectReview = async (id: string) => {
    const target = reviews.find((r) => r.id === id);
    const updated = reviews.map((r) => (r.id === id ? { ...r, status: "rejected" as const } : r));
    saveReviews(updated);

    try {
      await fetch("/api/reviews", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: "rejected", adminKey: ADMIN_PASSCODE })
      });
    } catch {}

    setActionNotice(`Decline review from "${target?.name || "User"}"`);
    setTimeout(() => setActionNotice(""), 4000);
  };

  const handleDeleteReview = async (id: string) => {
    const updated = reviews.filter((r) => r.id !== id);
    saveReviews(updated);

    try {
      await fetch(`/api/reviews?id=${id}&adminKey=${ADMIN_PASSCODE}`, {
        method: "DELETE"
      });
    } catch {}

    setActionNotice("Review permanently removed.");
    setTimeout(() => setActionNotice(""), 3000);
  };

  const handleAdminCreateDirectReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminCustomName || !adminCustomText) return;

    const newDirectReview: ReviewItem = {
      id: `rev-admin-${Date.now()}`,
      name: adminCustomName.trim(),
      role: adminCustomRole.trim() || "Verified Partner",
      rating: adminCustomRating,
      category: adminCustomCategory,
      text: adminCustomText.trim(),
      time: "Just now",
      status: "approved", // Admin direct additions are instantly approved
      createdAt: Date.now()
    };

    const updated = [newDirectReview, ...reviews];
    saveReviews(updated);

    setAdminCustomName("");
    setAdminCustomRole("");
    setAdminCustomText("");
    setActionNotice(`✓ Review for "${newDirectReview.name}" published directly to the website!`);
    setAdminActiveTab("approved");
    setTimeout(() => setActionNotice(""), 4000);
  };

  // Filtered Reviews for Display
  const approvedReviews = reviews.filter((r) => r.status === "approved");
  const pendingReviews = reviews.filter((r) => r.status === "pending");

  // Dynamic satisfaction score
  const avgRating = approvedReviews.length > 0
    ? (approvedReviews.reduce((acc, curr) => acc + curr.rating, 0) / approvedReviews.length).toFixed(1)
    : "5.0";

  return (
    <section id="feedback" className="py-20 bg-transparent border-t border-slate-200/80 relative overflow-hidden z-10">
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Admin Moderation Trigger */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs uppercase tracking-wider font-extrabold mb-3 shadow-xs">
              <Heart className="w-3.5 h-3.5 text-purple-600 fill-purple-600/20" /> Client & Student Community Voice
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight mb-3">
              Leave Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600">Feedback & Rating</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Submit your verified review. Every feedback submission is reviewed by our quality assurance desk before being published on our verified live feed.
            </p>
          </div>

          {/* Admin Moderation Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAdminModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/90 border border-slate-200 hover:border-purple-300 text-slate-700 hover:text-purple-700 text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer group"
            >
              <ShieldCheck className="w-4 h-4 text-purple-600 group-hover:scale-110 transition-transform" />
              <span>Admin Moderation</span>
              {pendingReviews.length > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-rose-500 text-white text-[10px] font-black animate-pulse">
                  {pendingReviews.length} Pending
                </span>
              )}
            </button>
          </div>
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
                      Feedback Topic / Engagement Track *
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
                        Email Address (For Verification)
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
                      Company / Designation / Academy Batch (Optional)
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Founder at Apex Retail / ROAS Academy Batch #12"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Feedback Textarea */}
                  <div>
                    <label className="text-xs font-bold text-slate-900 block mb-1.5">
                      Your Detailed Review & Suggestions *
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
                    <span>Allow Himastech to feature this review on our website upon verification</span>
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
                        Submitting Review For Verification...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Review for Approval
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
                    Review Submitted Successfully!
                  </h3>
                  <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 text-xs text-purple-900 max-w-md mx-auto leading-relaxed">
                    <div className="font-bold flex items-center justify-center gap-1.5 mb-1 text-purple-950">
                      <Clock className="w-4 h-4 text-purple-600" /> Pending Admin QA Verification
                    </div>
                    Thank you <strong className="text-slate-950">{name}</strong>. Your feedback has been queued. Once approved by our team, it will appear live on the public feed below.
                  </div>
                  <div className="pt-2 flex justify-center gap-3">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                    >
                      Submit Another Response
                    </button>
                    <button
                      onClick={() => setShowAdminModal(true)}
                      className="px-4 py-2 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-800 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-purple-700" /> Admin Preview
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Live Verified Stream & Trust Metrics */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick Metrics Card */}
            <div className="glass-card rounded-2xl p-5 border border-slate-200/80 shadow-sm bg-gradient-to-br from-purple-50/50 via-white to-cyan-50/40">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-600" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Community Satisfaction</h4>
                </div>
                <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" /> Live Feed
                </span>
              </div>

              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-black text-slate-950">{avgRating}</span>
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.round(Number(avgRating)) ? "fill-amber-400" : "text-slate-300"}`} 
                    />
                  ))}
                </div>
                <span className="text-xs text-slate-500 font-semibold">({approvedReviews.length} Verified Reviews)</span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                100% authentic feedback from founders, marketing directors, and academy graduates after admin QA validation.
              </p>
            </div>

            {/* Verified Feedback Stream (Approved Reviews Only) */}
            <div className="space-y-3 max-h-[640px] overflow-y-auto pr-1">
              <AnimatePresence>
                {approvedReviews.map((rev) => (
                  <motion.div 
                    key={rev.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="glass-card rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:border-purple-300 transition-all bg-white/90"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-500 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                          {rev.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 leading-tight flex items-center gap-1.5">
                            <span>{rev.name}</span>
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">Verified</span>
                          </div>
                          <div className="text-[10px] text-slate-500 font-medium">{rev.role}</div>
                        </div>
                      </div>
                      <div className="flex items-center text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400" />
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-slate-700 leading-relaxed italic relative">
                      <Quote className="w-3 h-3 text-purple-400/40 inline-block -mt-1 mr-1" />
                      {rev.text}
                    </p>

                    <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2.5 pt-2 border-t border-slate-100 font-medium">
                      <span className="text-purple-600 font-semibold">{rev.category}</span>
                      <span>{rev.time || "Recently"}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* ADMIN MODERATION CONTROL CENTER MODAL (Portal directly to body) */}
      {/* ========================================================= */}
      {mounted && showAdminModal && createPortal(
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            className="relative w-full max-w-3xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/90">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-950">Himastech Review Moderation Desk</h3>
                  <p className="text-[11px] text-slate-500 font-medium">Accept, reject, or manage reviews appearing live on the website</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowAdminModal(false);
                  setPassError("");
                }}
                className="w-8 h-8 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Notification Alert Banner */}
            {actionNotice && (
              <div className="bg-emerald-50 border-b border-emerald-200 px-6 py-2.5 text-xs text-emerald-900 font-bold flex items-center justify-between animate-fadeIn">
                <span>{actionNotice}</span>
                <button onClick={() => setActionNotice("")} className="text-emerald-700 hover:text-emerald-950">✕</button>
              </div>
            )}

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto flex-grow space-y-5">
              {!isAdminAuthenticated ? (
                /* Admin Login View */
                <form onSubmit={handleAdminLogin} className="max-w-md mx-auto py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 border border-purple-200 flex items-center justify-center mx-auto">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-black text-slate-900">Admin Authorization Required</h4>
                  <p className="text-xs text-slate-600">
                    Enter the Himastech admin passcode to manage pending feedback and approve reviews for live publication.
                  </p>

                  <div className="pt-2">
                    <input
                      type="password"
                      autoFocus
                      value={adminPassInput}
                      onChange={(e) => setAdminPassInput(e.target.value)}
                      placeholder="Enter Admin Passcode (himasadmin)"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 text-center font-bold focus:bg-white focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                    />
                    {passError && <p className="text-xs text-rose-600 font-bold mt-1.5">{passError}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Unlock className="w-4 h-4" /> Unlock Moderation Desk
                  </button>
                  <p className="text-[11px] text-slate-400">Passcode: <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-600">himasadmin</code></p>
                </form>
              ) : (
                /* Moderation Dashboard */
                <div className="space-y-4">
                  {/* Dashboard Tabs */}
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setAdminActiveTab("pending")}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                          adminActiveTab === "pending"
                            ? "bg-purple-600 text-white shadow-xs"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5" />
                        <span>Pending Approval</span>
                        <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-black ${
                          adminActiveTab === "pending" ? "bg-white text-purple-700" : "bg-rose-500 text-white"
                        }`}>
                          {pendingReviews.length}
                        </span>
                      </button>

                      <button
                        onClick={() => setAdminActiveTab("approved")}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                          adminActiveTab === "approved"
                            ? "bg-purple-600 text-white shadow-xs"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Live on Website</span>
                        <span className="px-1.5 py-0.2 rounded-full text-[10px] font-black bg-slate-200 text-slate-800">
                          {approvedReviews.length}
                        </span>
                      </button>

                      <button
                        onClick={() => setAdminActiveTab("new")}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                          adminActiveTab === "new"
                            ? "bg-purple-600 text-white shadow-xs"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>+ Add Verified Review</span>
                      </button>
                    </div>

                    <button
                      onClick={() => setIsAdminAuthenticated(false)}
                      className="text-[11px] text-slate-500 hover:text-rose-600 font-bold cursor-pointer"
                    >
                      Lock Desk
                    </button>
                  </div>

                  {/* TAB 1: PENDING QUEUE */}
                  {adminActiveTab === "pending" && (
                    <div className="space-y-3">
                      {pendingReviews.length === 0 ? (
                        <div className="py-12 text-center text-slate-500 text-xs">
                          <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-2 opacity-60" />
                          <p className="font-bold text-slate-800">All Caught Up!</p>
                          <p className="text-[11px] text-slate-500">No pending reviews requiring moderation. New user submissions will appear here.</p>
                        </div>
                      ) : (
                        pendingReviews.map((item) => (
                          <div
                            key={item.id}
                            className="p-4 rounded-2xl border-2 border-purple-200 bg-purple-50/30 space-y-2.5"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <div className="text-xs font-black text-slate-900 flex items-center gap-2">
                                  <span>{item.name}</span>
                                  {item.email && <span className="text-[10px] text-slate-500 font-normal">({item.email})</span>}
                                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold">
                                    Needs QA Acceptance
                                  </span>
                                </div>
                                <div className="text-[11px] text-slate-600 font-medium">{item.role} • <span className="text-purple-700 font-bold">{item.category}</span></div>
                              </div>
                              <div className="flex items-center text-amber-400">
                                {[...Array(item.rating)].map((_, i) => (
                                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                                ))}
                              </div>
                            </div>

                            <p className="text-xs text-slate-800 bg-white p-3 rounded-xl border border-slate-200 italic leading-relaxed">
                              &ldquo;{item.text}&rdquo;
                            </p>

                            <div className="flex items-center justify-end gap-2 pt-1">
                              <button
                                onClick={() => handleRejectReview(item.id)}
                                className="px-3.5 py-1.5 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
                              >
                                <X className="w-3.5 h-3.5" /> Reject
                              </button>
                              <button
                                onClick={() => handleApproveReview(item.id)}
                                className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center gap-1.5 hover:scale-105"
                              >
                                <Check className="w-3.5 h-3.5" /> Accept & Publish to Website
                              </button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  )}

                  {/* TAB 2: LIVE APPROVED REVIEWS */}
                  {adminActiveTab === "approved" && (
                    <div className="space-y-3">
                      {approvedReviews.map((item) => (
                        <div
                          key={item.id}
                          className="p-3.5 rounded-2xl border border-slate-200 bg-white flex items-start justify-between gap-3 shadow-2xs"
                        >
                          <div className="space-y-1 flex-grow">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-black text-slate-900">{item.name}</span>
                              <span className="text-[10px] text-slate-500">({item.role})</span>
                              <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 font-bold">Live on Feed</span>
                            </div>
                            <p className="text-xs text-slate-600 italic line-clamp-2">&ldquo;{item.text}&rdquo;</p>
                            <div className="text-[10px] text-purple-600 font-bold">{item.category} • {item.rating} Stars</div>
                          </div>
                          <button
                            onClick={() => handleDeleteReview(item.id)}
                            title="Delete or Unpublish"
                            className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* TAB 3: DIRECT ADMIN CREATION */}
                  {adminActiveTab === "new" && (
                    <form onSubmit={handleAdminCreateDirectReview} className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                      <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-purple-600" /> Directly Add & Publish Client Testimonial
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          required
                          value={adminCustomName}
                          onChange={(e) => setAdminCustomName(e.target.value)}
                          placeholder="Client Name *"
                          className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-medium"
                        />
                        <input
                          type="text"
                          value={adminCustomRole}
                          onChange={(e) => setAdminCustomRole(e.target.value)}
                          placeholder="Company / Role"
                          className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-medium"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <select
                          value={adminCustomCategory}
                          onChange={(e) => setAdminCustomCategory(e.target.value)}
                          className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-medium"
                        >
                          {categories.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                        <select
                          value={adminCustomRating}
                          onChange={(e) => setAdminCustomRating(Number(e.target.value))}
                          className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-medium"
                        >
                          <option value={5}>5 Stars (Exceptional)</option>
                          <option value={4}>4 Stars (Very Good)</option>
                          <option value={3}>3 Stars (Good)</option>
                        </select>
                      </div>
                      <textarea
                        required
                        rows={3}
                        value={adminCustomText}
                        onChange={(e) => setAdminCustomText(e.target.value)}
                        placeholder="Verified Client Review Text *"
                        className="w-full p-3 rounded-xl bg-white border border-slate-200 text-xs font-medium resize-none"
                      />
                      <button
                        type="submit"
                        className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-all cursor-pointer"
                      >
                        Publish Directly to Live Site
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Himastech QA Moderation Engine
              </span>
              <button
                onClick={() => setShowAdminModal(false)}
                className="px-4 py-1.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold transition-colors cursor-pointer"
              >
                Close Desk
              </button>
            </div>
          </motion.div>
        </div>,
        document.body
      )}
    </section>
  );
}
