import Link from "next/link";
import { Mail, ArrowRight, ShieldCheck, Sparkles, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50/90 backdrop-blur-2xl border-t border-slate-200 pt-20 pb-12 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Col 1: Brand info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-6 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-blue via-brand-purple to-pink-500 flex items-center justify-center p-0.5 shadow-xs">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                  <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-brand-purple text-base">H</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-slate-950">
                  Himastech
                </span>
                <span className="text-[9px] text-blue-600 font-bold uppercase tracking-widest -mt-0.5">
                  Digital Marketing
                </span>
              </div>
            </Link>

            <p className="text-slate-600 text-sm leading-relaxed max-w-sm mb-6">
              Full-service digital marketing agency and elite talent academy. Architecting high-converting paid media funnels, AI search dominance, and retention systems.
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Certified Meta, Google & TikTok Marketing Partner</span>
            </div>
          </div>
          
          {/* Col 2: Services */}
          <div>
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-5">Services</h4>
            <ul className="space-y-3 text-xs text-slate-600">
              <li><Link href="#services" className="hover:text-blue-600 transition-colors">Meta & Instagram Ads</Link></li>
              <li><Link href="#services" className="hover:text-blue-600 transition-colors">Google Ads & P-Max</Link></li>
              <li><Link href="#services" className="hover:text-blue-600 transition-colors">Generative Search (GEO & SEO)</Link></li>
              <li><Link href="#services" className="hover:text-blue-600 transition-colors">Conversion Rate Optimization</Link></li>
              <li><Link href="#services" className="hover:text-blue-600 transition-colors">Email & SMS Retention Flows</Link></li>
              <li><Link href="#services" className="hover:text-blue-600 transition-colors">Direct-Response Video UGC</Link></li>
            </ul>
          </div>

          {/* Col 3: Company & Growth */}
          <div>
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-5">Company & Tools</h4>
            <ul className="space-y-3 text-xs text-slate-600">
              <li><Link href="#case-studies" className="hover:text-blue-600 transition-colors">Case Studies & Results</Link></li>
              <li><Link href="#roi-calculator" className="hover:text-blue-600 transition-colors">Interactive ROI Simulator</Link></li>
              <li><Link href="#process" className="hover:text-blue-600 transition-colors">The 4-Step Revenue Engine</Link></li>
              <li><Link href="#training" className="hover:text-blue-600 transition-colors">Marketing Training Academy</Link></li>
              <li><Link href="#about" className="hover:text-blue-600 transition-colors">About Himastech</Link></li>
              <li><Link href="#merlinflow" className="hover:text-blue-600 transition-colors text-blue-700 font-semibold">Merlinflow Enterprise OS</Link></li>
              <li><Link href="#faq" className="hover:text-blue-600 transition-colors">Frequently Asked Questions</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Collaboration */}
          <div>
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-5">Get In Touch</h4>
            <ul className="space-y-3 text-xs text-slate-600">
              <li>
                <a href="mailto:info@himastech.com" className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-blue-600" /> info@himastech.com
                </a>
              </li>
              <li>
                <a href="tel:+918374373753" className="flex items-center gap-2 text-slate-700 hover:text-purple-600 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-purple-600" /> +91 8374373753
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-700">
                <MapPin className="w-3.5 h-3.5 text-pink-600 shrink-0 mt-0.5" />
                <span>Merlinflow Technologies & HimasTech,<br />HITEC City, Hyderabad, Telangana 500081, India</span>
              </li>
            </ul>
            
            <div className="mt-6 pt-4 border-t border-slate-200">
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" /> Book Free Marketing Audit
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Himastech Digital Marketing. All rights reserved.
          </p>
          <p className="text-slate-600">
            In strategic collaboration with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-brand-purple font-bold">Merlinflow Technologies Pvt Ltd</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
