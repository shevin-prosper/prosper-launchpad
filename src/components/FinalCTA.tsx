import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, Phone, CheckCircle2 } from "lucide-react";

const perks = [
  "No fees, ever",
  "Free consultation",
  "95% visa success",
  "5-year career support",
];

const FinalCTA = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="book" className="relative py-28 overflow-hidden bg-cta-gradient">
      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid-pattern opacity-20 pointer-events-none" />

      {/* Decorative glow orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#2952CC] opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#1A3C8F] opacity-30 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold text-[#D6E4FF] uppercase tracking-widest mb-5">
            Get Started Today
          </p>

          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
            Your future is one<br />
            <span className="text-[#7AADFF] italic">conversation away.</span>
          </h2>

          <p className="text-lg text-white/80 mb-8 max-w-md mx-auto font-light">
            Free consultation. No obligation. Just clarity on your path abroad.
          </p>

          {/* Perks row */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10">
            {perks.map((perk) => (
              <span key={perk} className="flex items-center gap-1.5 text-sm text-white/80">
                <CheckCircle2 className="w-4 h-4 text-[#7AADFF] shrink-0" aria-hidden="true" />
                {perk}
              </span>
            ))}
          </div>

          {/* Fixed: was href="#" — now correctly targets the #book section anchor */}
          <a
            href="#book"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-base font-bold text-[#1A3C8F] transition-all duration-300 hover:bg-[#EEF3FF] hover:shadow-2xl hover:shadow-black/30 hover:scale-105 mb-10"
          >
            Book Free Consultation
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/60 text-sm">
            <a
              href="tel:+94771234567"
              className="flex items-center gap-2 hover:text-white transition-colors duration-200"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              +94 77 123 4567
            </a>
            <span className="hidden sm:block w-px h-4 bg-white/20" />
            <a
              href="mailto:hello@prosper.lk"
              className="flex items-center gap-2 hover:text-white transition-colors duration-200"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              hello@prosper.lk
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
