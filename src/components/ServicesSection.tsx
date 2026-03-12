import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  MessageCircle, FileText, Shield, Search,
  PenTool, Calculator, Users, Award,
} from "lucide-react";
import { services } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  MessageCircle, FileText, Shield, Search,
  PenTool, Calculator, Users, Award,
};

const ServicesSection = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#EEF3FF] blur-3xl opacity-60 pointer-events-none -translate-y-1/2 translate-x-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold text-[#1A3C8F] uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-[#0D1B3E] leading-tight tracking-tight">
              Everything handled.<br />
              <span className="text-gradient-accent">Nothing left to chance.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#4A5568] text-base md:text-lg max-w-xs md:text-right font-light"
          >
            All 8 services are{" "}
            <span className="font-semibold text-[#1A3C8F]">100% free</span>.
            No hidden fees. Ever.
          </motion.p>
        </div>

        {/* Service grid — Tripleten-style numbered items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#D6E4FF] border border-[#D6E4FF] rounded-2xl overflow-hidden">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: shouldReduceMotion ? 0 : i * 0.05, duration: 0.4 }}
                className="service-item group relative bg-white p-8 hover:bg-[#EEF3FF] transition-colors duration-300 cursor-default"
              >
                <div className="flex items-start gap-5">
                  {/* Large decorative number */}
                  <span className="service-number text-5xl font-extrabold shrink-0 w-14 text-right leading-none mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-xl bg-[#EEF3FF] group-hover:bg-white flex items-center justify-center transition-colors duration-300 shrink-0">
                        <Icon className="w-[18px] h-[18px] text-[#1A3C8F]" strokeWidth={2} />
                      </div>
                      <h3 className="font-display font-bold text-[#0D1B3E] text-base leading-tight">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#4A5568] leading-relaxed pl-[3.0rem]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
