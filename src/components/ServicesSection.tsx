import React from "react";
import { motion } from "framer-motion";
import { CyberneticBentoGrid, BentoItem } from "@/components/ui/cybernetic-bento-grid";
import {
  Users,
  ClipboardList,
  Mic,
  FileText,
  FileCheck,
  Award,
  PiggyBank,
  Target,
} from "lucide-react";

// Cohesive brand-blue family — all cool, professional, trust-building
const services = [
  {
    title: "Counseling & Guidance",
    description:
      "We provide comprehensive advice on all study possibilities, covering various countries, universities, and academic programs to help you make informed decisions about your future.",
    icon: <Users className="h-7 w-7" />,
    gradient: "linear-gradient(135deg, #0D1B3E 0%, #1A3C8F 100%)",
    glow: "rgba(13,27,62,0.14)",
    cardAccent: "#EEF3FF",
  },
  {
    title: "Application Support",
    description:
      "From preparing and submitting your application to securing offer letters, we assist you every step of the way to ensure a smooth and successful application process.",
    icon: <ClipboardList className="h-7 w-7" />,
    gradient: "linear-gradient(135deg, #1A3C8F 0%, #2952CC 100%)",
    glow: "rgba(26,60,143,0.15)",
    cardAccent: "#EEF3FF",
  },
  {
    title: "Interview Preparation",
    description:
      "Get ready for credibility interviews, CAS, and visa interviews with our expert preparation sessions, including mock interviews to build your confidence.",
    icon: <Mic className="h-7 w-7" />,
    gradient: "linear-gradient(135deg, #2952CC 0%, #4A7CF0 100%)",
    glow: "rgba(41,82,204,0.15)",
    cardAccent: "#EEF3FF",
  },
  {
    title: "Documentation Assistance",
    description:
      "We offer support with key documentation, including crafting a strong Statement of Purpose (SOP) that highlights your strengths and motivations.",
    icon: <FileText className="h-7 w-7" />,
    gradient: "linear-gradient(135deg, #0C4A6E 0%, #0369A1 100%)",
    glow: "rgba(3,105,161,0.15)",
    cardAccent: "#EFF8FF",
  },
  {
    title: "Visa Application",
    description:
      "Our team will guide you through the entire visa application process, ensuring all requirements are met for a successful outcome.",
    icon: <FileCheck className="h-7 w-7" />,
    gradient: "linear-gradient(135deg, #0D1B3E 0%, #1A3C8F 100%)",
    glow: "rgba(13,27,62,0.14)",
    cardAccent: "#EEF3FF",
  },
  {
    title: "Scholarship Opportunities",
    description:
      "We help identify scholarship options that align with your academic and financial needs, providing guidance to maximize your chances.",
    icon: <Award className="h-7 w-7" />,
    gradient: "linear-gradient(135deg, #083344 0%, #0891B2 100%)",
    glow: "rgba(8,145,178,0.15)",
    cardAccent: "#ECFEFF",
  },
  {
    title: "Financial Planning",
    description:
      "Receive expert advice on financial planning, including a clear pathway for covering your total study and living expenses abroad.",
    icon: <PiggyBank className="h-7 w-7" />,
    gradient: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)",
    glow: "rgba(30,58,138,0.14)",
    cardAccent: "#EFF6FF",
  },
  {
    title: "5-Year Career Guarantee",
    description:
      "Benefit from our five-year career guidance warranty, offering continuous support as you navigate your post-graduation journey and career progression.",
    icon: <Target className="h-7 w-7" />,
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #4338CA 100%)",
    glow: "rgba(67,56,202,0.15)",
    cardAccent: "#EEF2FF",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-white relative overflow-hidden">
    <div className="absolute top-0 right-0 -mr-40 w-96 h-96 rounded-full blur-3xl opacity-40 pointer-events-none"
      style={{ background: "radial-gradient(circle, #EEF3FF, transparent)" }} />
    <div className="absolute bottom-0 left-0 -ml-40 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none"
      style={{ background: "radial-gradient(circle, #f0f0ff, transparent)" }} />

    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        className="mb-16 text-center max-w-3xl mx-auto"
      >
        <div
          className="inline-flex border border-blue-100 bg-blue-50 text-blue-700 text-xs font-bold px-5 py-2 rounded-full mb-6 tracking-widest uppercase"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          Our Expertise
        </div>
        <h2
          className="font-display text-4xl md:text-5xl font-extrabold text-[#0D1B3E] tracking-tight mb-5"
          style={{ lineHeight: 1.1 }}
        >
          Comprehensive support for your{" "}
          <span className="text-gradient-accent italic">global journey.</span>
        </h2>
        <p
          className="text-base text-slate-500 max-w-2xl mx-auto"
          style={{ fontFamily: "'Outfit', sans-serif", lineHeight: 1.7 }}
        >
          Discover your best program in minutes with AI. Expert assistance across
          every critical touchpoint of your international education.
        </p>
      </motion.div>

      <CyberneticBentoGrid className="lg:grid-cols-4">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.07, duration: 0.5 }}
          >
            <BentoItem className="flex flex-col items-center text-center group h-full" style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${service.cardAccent} 0%, #ffffff 65%)` }}>
              {/* Soft color wash behind icon */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full blur-2xl pointer-events-none"
                style={{ background: service.glow, opacity: 0.6 }}
              />

              {/* Icon */}
              <div
                className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                style={{
                  background: service.gradient,
                  boxShadow: `0 8px 24px ${service.glow}`,
                }}
              >
                {service.icon}
              </div>

              <h3
                className="relative z-10 text-[17px] font-extrabold text-[#0D1B3E] mb-3 leading-snug"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {service.title}
              </h3>
              <p
                className="relative z-10 text-[13px] text-slate-500 leading-relaxed"
                style={{ fontFamily: "'Outfit', sans-serif", lineHeight: 1.7 }}
              >
                {service.description}
              </p>
            </BentoItem>
          </motion.div>
        ))}
      </CyberneticBentoGrid>
    </div>
  </section>
);

export default ServicesSection;
