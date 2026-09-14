"use client";

import { motion } from "framer-motion";

export function PartnersMarquee() {
  const partners = [
    { name: "Meta Business Partner", logoText: "Meta", sub: "Business Partner", color: "from-blue-500 to-indigo-500" },
    { name: "Google Premier Partner", logoText: "Google Ads", sub: "Premier Partner 2024", color: "from-red-500 via-amber-400 to-blue-500" },
    { name: "TikTok Marketing Partner", logoText: "TikTok", sub: "For Business", color: "from-pink-500 to-cyan-400" },
    { name: "Shopify Plus Partner", logoText: "Shopify", sub: "Plus Certified", color: "from-emerald-400 to-teal-500" },
    { name: "HubSpot Platinum", logoText: "HubSpot", sub: "Platinum Partner", color: "from-amber-500 to-orange-600" },
    { name: "Klaviyo Elite", logoText: "Klaviyo", sub: "Master Partner", color: "from-emerald-500 to-lime-400" },
    { name: "LinkedIn Marketing", logoText: "LinkedIn", sub: "Marketing Solutions", color: "from-blue-600 to-cyan-600" },
    { name: "Amazon Ads", logoText: "Amazon Ads", sub: "Verified Partner", color: "from-amber-400 to-yellow-500" },
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="w-full py-10 bg-slate-100/70 border-y border-slate-200/80 relative overflow-hidden backdrop-blur-xl z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs uppercase tracking-widest text-slate-600 font-extrabold">
          Partner Ecosystem Expertise & Advertising Platform Proficiencies
        </p>
      </div>

      {/* Gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap"
        >
          {duplicatedPartners.map((p, idx) => (
            <div
              key={idx}
              className="glass-card flex items-center gap-3 px-6 py-3.5 rounded-2xl hover:border-cyan-500/40 transition-all group shrink-0 shadow-xs hover:shadow-lg"
            >
              <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${p.color} animate-pulse shadow-[0_0_8px_currentColor]`} />
              <div>
                <span className="text-sm font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                  {p.logoText}
                </span>
                <span className="text-[11px] text-slate-500 block -mt-0.5 font-semibold">
                  {p.sub}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
