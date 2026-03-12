import React from "react";
import { CheckCircle2 } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="book" className="relative py-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="relative bg-white rounded-[32px] border-2 border-[#1A3C8F]/20 p-6 md:px-12 md:py-10 shadow-xl">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Content - Takes up 6 cols */}
            <div className="lg:col-span-6 flex flex-col space-y-6">
              {/* Heading */}
              <h2 className="text-3xl md:text-5xl font-black text-[#0D1B3E] font-display leading-[1.1] tracking-tight">
                Start your <span className="relative inline-block">
                  global journey
                  <div className="absolute bottom-1 left-0 w-full h-1.5 bg-[#1A3C8F]/20 -z-10" />
                </span> today.<br />
                Talk to an advisor.
              </h2>

              {/* Trust List */}
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Guarantee: Offer letter or 100% money back",
                  "Expert-curated university selection",
                  "Completely free — no hidden fees ever",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="bg-[#1A3C8F] rounded-full p-0.5 flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-slate-600 font-medium font-body text-xs md:text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form - Reordered Neatly (Takes up 6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              {/* Row 1: Names */}
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name *" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-[#1A3C8F] focus:outline-none transition-all placeholder:text-slate-400" />
                <input type="text" placeholder="Last Name *" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-[#1A3C8F] focus:outline-none transition-all placeholder:text-slate-400" />
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-2 gap-4">
                <input type="email" placeholder="Email *" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-[#1A3C8F] focus:outline-none transition-all placeholder:text-slate-400" />
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-2xl px-3 min-w-[85px] justify-center">
                    <img src="https://flagcdn.com/w20/lk.png" className="w-5 h-auto rounded-sm" alt="LK" />
                    <span className="text-xs font-bold text-slate-700">+94</span>
                  </div>
                  <input type="tel" placeholder="Phone *" className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-[#1A3C8F] focus:outline-none transition-all placeholder:text-slate-400" />
                </div>
              </div>

              {/* Row 3: Consent & Button */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5 accent-[#0D1B3E] rounded border-slate-300 transition-all cursor-pointer" />
                  <p className="text-[10px] leading-relaxed text-slate-400">
                    I consent to marketing communications and agree to the privacy policy.
                  </p>
                </div>
                <button className="w-full bg-[#0D1B3E] text-white font-black py-5 rounded-2xl shadow-lg border-b-4 border-[#09152e] hover:bg-[#1A3C8F] hover:-translate-y-0.5 active:translate-y-0.5 active:border-b-0 transition-all duration-200 uppercase text-xs tracking-[0.15em]">
                  Book My Free Session
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
