import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Globe2 } from "lucide-react";
import { destinations } from "@/data/content";

const DestinationsSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="destinations" className="py-24 bg-[#EEF3FF] relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#D6E4FF] blur-3xl opacity-50 pointer-events-none translate-y-1/2 -translate-x-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14"
        >
          <div>
            <p className="text-xs font-semibold text-[#1A3C8F] uppercase tracking-widest mb-3">Destinations</p>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-[#0D1B3E] leading-tight tracking-tight">
              Where will{" "}
              <span className="text-gradient-primary italic">you</span>{" "}
              go?
            </h2>
          </div>
          <p className="text-[#4A5568] text-sm font-light max-w-xs">
            We place students across{" "}
            <span className="font-semibold text-[#0D1B3E]">15+ countries</span>{" "}
            and 200+ universities worldwide.
          </p>
        </motion.div>

        {/* Destination cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {destinations.map((dest, i) => (
            <motion.a
              key={dest.name}
              href="#book"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: shouldReduceMotion ? 0 : i * 0.06, duration: 0.4 }}
              whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.02 }}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-[#D6E4FF] bg-white px-4 py-6 cursor-pointer transition-all duration-300 hover:border-[#1A3C8F] hover:shadow-lg hover:shadow-[#1A3C8F]/10"
            >
              <span className="text-4xl leading-none" role="img" aria-label={dest.name}>{dest.flag}</span>
              <span className="font-body font-semibold text-[#0D1B3E] text-xs text-center leading-tight group-hover:text-[#1A3C8F] transition-colors duration-200">
                {dest.name}
              </span>
            </motion.a>
          ))}

          {/* "More coming" card */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: shouldReduceMotion ? 0 : destinations.length * 0.06, duration: 0.4 }}
            className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-[#D6E4FF] bg-transparent px-4 py-6"
          >
            <Globe2 className="w-7 h-7 text-[#4A5568]" aria-hidden="true" />
            <span className="font-body font-medium text-[#4A5568] text-xs text-center leading-tight">
              +5 more
            </span>
          </motion.div>
        </div>

        {/* Bottom CTA hint */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center mt-10"
        >
          <a
            href="#book"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#1A3C8F] hover:text-[#2952CC] transition-colors duration-200"
          >
            Don't see your country? Ask us
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsSection;
