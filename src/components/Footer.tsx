"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  MapPin, 
  Phone, 
  MessageSquare, 
  ExternalLink, 
  Layers, 
  Building2, 
  Cpu, 
  CheckCircle2, 
  X, 
  FileText, 
  Lock,
  Heart,
  TrendingUp
} from "lucide-react";

export function Footer() {
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | "sla" | null>(null);

  // Bulletproof smooth scroll handler for same-page section navigation
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        e.preventDefault();
        elem.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <footer className="bg-slate-50/90 backdrop-blur-2xl border-t border-slate-200/90 pt-20 pb-12 relative overflow-hidden z-10">
      {/* Ambient background glow accents */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 5-Column Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Col 1: Brand & Credibility (span 3 on desktop) */}
          <div className="lg:col-span-3">
            <Link 
              href="/#home" 
              onClick={(e) => handleScrollTo(e, "/#home")} 
              className="inline-block mb-5 group"
            >
              <div className="relative h-16 sm:h-20 w-auto transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo-main.png"
                  alt="Himastech Digital Marketing"
                  width={240}
                  height={240}
                  className="h-16 sm:h-20 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
              Data-driven performance marketing agency and elite talent academy. Architecting high-converting paid media funnels, generative AI search (GEO) dominance, and enterprise retention systems.
            </p>

            <div className="space-y-2 text-xs text-slate-500 font-semibold mb-6">
              <div className="flex items-center gap-2 text-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Certified Meta & Google Premier Partner</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Strategic Alliance with Merlinflow Technologies</span>
              </div>
            </div>

            {/* Quick CTA Pill */}
            <Link
              href="/#contact"
              onClick={(e) => handleScrollTo(e, "/#contact")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-subcard text-slate-800 text-xs font-bold hover:border-cyan-400 hover:text-cyan-700 shadow-xs hover:shadow-md transition-all group"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-600 group-hover:rotate-12 transition-transform" />
              <span>Get Free 30-Min Growth Audit</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
          
          {/* Col 2: Services (span 2 on desktop) */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-950 font-bold text-xs uppercase tracking-wider mb-5 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-cyan-600" />
              <span>Growth Services</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li>
                <Link 
                  href="/#services" 
                  onClick={(e) => handleScrollTo(e, "/#services")}
                  className="hover:text-cyan-600 transition-colors block py-0.5"
                >
                  Meta & Instagram Ads
                </Link>
              </li>
              <li>
                <Link 
                  href="/#services" 
                  onClick={(e) => handleScrollTo(e, "/#services")}
                  className="hover:text-cyan-600 transition-colors block py-0.5"
                >
                  Google Search & P-Max
                </Link>
              </li>
              <li>
                <Link 
                  href="/#services" 
                  onClick={(e) => handleScrollTo(e, "/#services")}
                  className="hover:text-cyan-600 transition-colors block py-0.5"
                >
                  Generative Search (GEO & SEO)
                </Link>
              </li>
              <li>
                <Link 
                  href="/#services" 
                  onClick={(e) => handleScrollTo(e, "/#services")}
                  className="hover:text-cyan-600 transition-colors block py-0.5"
                >
                  Landing Pages & CRO Funnels
                </Link>
              </li>
              <li>
                <Link 
                  href="/#services" 
                  onClick={(e) => handleScrollTo(e, "/#services")}
                  className="hover:text-cyan-600 transition-colors block py-0.5"
                >
                  Klaviyo & SMS Retention
                </Link>
              </li>
              <li>
                <Link 
                  href="/#services" 
                  onClick={(e) => handleScrollTo(e, "/#services")}
                  className="hover:text-cyan-600 transition-colors block py-0.5"
                >
                  Direct-Response Video UGC
                </Link>
              </li>
              <li>
                <Link 
                  href="/#services" 
                  onClick={(e) => handleScrollTo(e, "/#services")}
                  className="hover:text-cyan-600 transition-colors block py-0.5"
                >
                  Connected TV & Programmatic
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Growth Arsenal (span 2 on desktop) */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-950 font-bold text-xs uppercase tracking-wider mb-5 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-purple-600" />
              <span>Company & Tools</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li>
                <Link 
                  href="/#case-studies" 
                  onClick={(e) => handleScrollTo(e, "/#case-studies")}
                  className="hover:text-purple-600 transition-colors block py-0.5"
                >
                  Case Studies & Results
                </Link>
              </li>
              <li>
                <Link 
                  href="/#roi-calculator" 
                  onClick={(e) => handleScrollTo(e, "/#roi-calculator")}
                  className="hover:text-purple-600 transition-colors block py-0.5"
                >
                  Interactive ROI Simulator
                </Link>
              </li>
              <li>
                <Link 
                  href="/#process" 
                  onClick={(e) => handleScrollTo(e, "/#process")}
                  className="hover:text-purple-600 transition-colors block py-0.5"
                >
                  The 4-Step Revenue Engine
                </Link>
              </li>
              <li>
                <Link 
                  href="/#channels" 
                  onClick={(e) => handleScrollTo(e, "/#channels")}
                  className="hover:text-purple-600 transition-colors block py-0.5"
                >
                  9 Omnichannel Networks
                </Link>
              </li>
              <li>
                <Link 
                  href="/#training" 
                  onClick={(e) => handleScrollTo(e, "/#training")}
                  className="hover:text-purple-600 transition-colors block py-0.5"
                >
                  Marketing Training Academy
                </Link>
              </li>
              <li>
                <Link 
                  href="/#feedback" 
                  onClick={(e) => handleScrollTo(e, "/#feedback")}
                  className="hover:text-purple-600 transition-colors block py-0.5"
                >
                  Client Reviews & Ratings
                </Link>
              </li>
              <li>
                <Link 
                  href="/#about" 
                  onClick={(e) => handleScrollTo(e, "/#about")}
                  className="hover:text-purple-600 transition-colors block py-0.5"
                >
                  About Himastech & Leadership
                </Link>
              </li>
              <li>
                <Link 
                  href="/#faq" 
                  onClick={(e) => handleScrollTo(e, "/#faq")}
                  className="hover:text-purple-600 transition-colors block py-0.5"
                >
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Merlinflow Enterprise Tech (span 2 on desktop) */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-950 font-bold text-xs uppercase tracking-wider mb-5 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>Enterprise Tech</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li>
                <Link 
                  href="/merlinflow" 
                  className="text-blue-700 hover:text-blue-900 font-bold flex items-center gap-1 block py-0.5 group"
                >
                  <span>Merlinflow Enterprise OS</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </li>
              <li>
                <Link 
                  href="/#merlinflow" 
                  onClick={(e) => handleScrollTo(e, "/#merlinflow")}
                  className="hover:text-blue-600 transition-colors block py-0.5"
                >
                  Strategic Tech Alliance
                </Link>
              </li>
              <li>
                <Link 
                  href="/merlinflow#real-estate-erp" 
                  className="hover:text-blue-600 transition-colors block py-0.5"
                >
                  Real Estate & Brokerage ERP
                </Link>
              </li>
              <li>
                <Link 
                  href="/merlinflow#hospital-hms" 
                  className="hover:text-blue-600 transition-colors block py-0.5"
                >
                  Healthcare Clinic & HMS Cloud
                </Link>
              </li>
              <li>
                <Link 
                  href="/merlinflow#restaurant-erp" 
                  className="hover:text-blue-600 transition-colors block py-0.5"
                >
                  Restaurant POS & Kitchen ERP
                </Link>
              </li>
              <li>
                <Link 
                  href="/merlinflow#ecommerce-platform" 
                  className="hover:text-blue-600 transition-colors block py-0.5"
                >
                  D2C E-Commerce Platform
                </Link>
              </li>
              <li>
                <Link 
                  href="/merlinflow#school-ims" 
                  className="hover:text-blue-600 transition-colors block py-0.5"
                >
                  School & College IMS
                </Link>
              </li>
              <li>
                <Link 
                  href="/merlinflow#enterprise-crm" 
                  className="hover:text-blue-600 transition-colors block py-0.5"
                >
                  Enterprise CRM & WhatsApp Suite
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Get In Touch & Support (span 3 on desktop) */}
          <div className="lg:col-span-3">
            <h4 className="text-slate-950 font-bold text-xs uppercase tracking-wider mb-5 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-pink-600" />
              <span>Connect With Us</span>
            </h4>
            
            <ul className="space-y-3 text-xs text-slate-700 font-medium mb-6">
              <li>
                <a 
                  href="https://wa.me/916304989071?text=Hi%20Himastech%2C%20I%20would%20like%20to%20discuss%20our%20growth%20strategy." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-700 hover:text-emerald-700 transition-colors group"
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-emerald-700 font-bold uppercase tracking-wider">Instant Chat</span>
                    <span className="font-bold">+91 6304989071 (WhatsApp)</span>
                  </div>
                </a>
              </li>

              <li>
                <a 
                  href="tel:+916304989071" 
                  className="flex items-center gap-2 text-slate-700 hover:text-purple-700 transition-colors group"
                >
                  <div className="w-7 h-7 rounded-lg glass-subcard flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-3.5 h-3.5 text-purple-600" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-purple-700 font-bold uppercase tracking-wider">Direct Hotline</span>
                    <span className="font-bold">+91 6304989071</span>
                  </div>
                </a>
              </li>

              <li>
                <a 
                  href="mailto:info@himastech.com" 
                  className="flex items-center gap-2 text-slate-700 hover:text-blue-700 transition-colors group"
                >
                  <div className="w-7 h-7 rounded-lg glass-subcard flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-blue-700 font-bold uppercase tracking-wider">Email Inquiry</span>
                    <span className="font-bold">info@himastech.com</span>
                  </div>
                </a>
              </li>

              <li className="flex items-start gap-2 text-slate-600 pt-1">
                <div className="w-7 h-7 rounded-lg glass-subcard flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-pink-600" />
                </div>
                <div>
                  <span className="block text-[10px] text-pink-700 font-bold uppercase tracking-wider">Operational HQ</span>
                  <span className="text-xs font-semibold text-slate-700">Nagole, Hyderabad, Telangana, India</span>
                </div>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-200/80">
              <Link
                href="/#contact"
                onClick={(e) => handleScrollTo(e, "/#contact")}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-500 text-white font-bold text-xs hover:shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Book Free Growth Consultation</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar: Copyright, Legal Links, and Alliance Disclaimer */}
        <div className="pt-8 border-t border-slate-200/90 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p className="font-medium text-slate-600">
              &copy; {new Date().getFullYear()} Himastech Digital Marketing. All rights reserved.
            </p>
            <span className="hidden sm:inline-block text-slate-300">•</span>
            {/* Functional Legal Policy Triggers */}
            <div className="flex items-center gap-3 font-semibold text-slate-600">
              <button
                onClick={() => setLegalModal("privacy")}
                className="hover:text-blue-600 transition-colors underline cursor-pointer"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button
                onClick={() => setLegalModal("terms")}
                className="hover:text-blue-600 transition-colors underline cursor-pointer"
              >
                Terms of Engagement
              </button>
              <span>•</span>
              <button
                onClick={() => setLegalModal("sla")}
                className="hover:text-blue-600 transition-colors underline cursor-pointer"
              >
                SLA & Performance Guarantee
              </button>
            </div>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-slate-600 font-medium">
              In strategic alliance with{" "}
              <Link
                href="/merlinflow"
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>Merlinflow Technologies Pvt Ltd</span>
                <ExternalLink className="w-3 h-3 text-purple-600 inline" />
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Legal & Policy Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="glass-modal rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/50">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl glass-subcard flex items-center justify-center text-blue-600">
                  {legalModal === "privacy" && <Lock className="w-4 h-4" />}
                  {legalModal === "terms" && <FileText className="w-4 h-4" />}
                  {legalModal === "sla" && <ShieldCheck className="w-4 h-4 text-emerald-600" />}
                </div>
                <h3 className="text-lg font-black text-slate-950">
                  {legalModal === "privacy" && "Himastech Privacy & Data Protection Policy"}
                  {legalModal === "terms" && "Terms of Service & Agency Engagement"}
                  {legalModal === "sla" && "Performance SLA & Quality Assurance Standards"}
                </h3>
              </div>
              <button
                onClick={() => setLegalModal(null)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body Content */}
            <div className="text-xs sm:text-sm text-slate-600 space-y-4 leading-relaxed">
              {legalModal === "privacy" && (
                <>
                  <p>
                    <strong>1. Client Data Confidentiality & Strict NDA:</strong> All proprietary business metrics, customer lists, CRM records, ad accounts, and conversion data shared with Himastech and Merlinflow Technologies Pvt Ltd are protected under reciprocal non-disclosure agreements.
                  </p>
                  <p>
                    <strong>2. First-Party Tracking & Compliance:</strong> Our Meta CAPI and Google Analytics integrations adhere to strict GDPR, CCPA, and Indian Digital Personal Data Protection (DPDP) Act frameworks. We never sell, lease, or distribute visitor telemetric information.
                  </p>
                  <p>
                    <strong>3. Enterprise Security:</strong> Data exchanges operate via TLS 1.3 encryption, secure webhooks, and restricted role-based authorization.
                  </p>
                </>
              )}

              {legalModal === "terms" && (
                <>
                  <p>
                    <strong>1. Transparent Retainer Model:</strong> Services are billed on a flexible monthly retainer or performance-hybrid model with zero long-term hostage contracts. Clients maintain 100% full administrative ownership of all ad accounts, creatives, domain assets, and tracking pixels.
                  </p>
                  <p>
                    <strong>2. Ad Spend & Budget Control:</strong> Ad spend is paid directly by the client to advertising platforms (Meta, Google, LinkedIn) without arbitrary agency markup.
                  </p>
                  <p>
                    <strong>3. Mutual Termination:</strong> Either party may discontinue or modify the scope with a standard 30-day notice period.
                  </p>
                </>
              )}

              {legalModal === "sla" && (
                <>
                  <p>
                    <strong>1. Guaranteed Attribution Integrity:</strong> We ensure 100% verified server-side CAPI tracking setup within 7 business days of onboarding.
                  </p>
                  <p>
                    <strong>2. Rapid Creative Iteration SLA:</strong> Minimum 5 to 15 net-new creative variations and copy angles tested weekly for active paid media retainers.
                  </p>
                  <p>
                    <strong>3. Direct Slack/WhatsApp Response:</strong> Dedicated senior growth strategist communication with under 2-hour turnaround during active market hours.
                  </p>
                </>
              )}
            </div>

            {/* Footer Action */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Close & Acknowledge
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
