import { motion } from "framer-motion";
import { Phone, Map, Rocket } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Book Free Consultation",
    description: "A 30-minute call to understand your goals, budget, and timeline.",
    detail: "No prep needed. Just show up.",
  },
  {
    icon: Map,
    number: "02",
    title: "Get Your Roadmap",
    description: "We create a personalised plan with university shortlists and deadlines.",
    detail: "Tailored to your profile.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Land Your Offer",
    description: "We handle applications, SOPs, visas, and prep — until you fly.",
    detail: "95% visa success rate.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      {/* Dot grid background texture */}
      <div className="absolute inset-0 dot-grid-pattern pointer-events-none opacity-70" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-semibold text-[#1A3C8F] uppercase tracking-widest mb-3">The Process</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-[#0D1B3E] tracking-tight">
            How it <span className="text-gradient-accent">works</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-[3.25rem] left-[18%] right-[18%] h-px bg-gradient-to-r from-transparent via-[#D6E4FF] to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.18, duration: 0.5 }}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Step icon circle */}
              <div className="relative mb-6">
                {/* Large background number */}
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 font-display font-extrabold text-[5.5rem] leading-none text-[#EEF3FF] select-none pointer-events-none z-0 group-hover:text-[#D6E4FF] transition-colors duration-300">
                  {step.number}
                </span>
                <div className="relative z-10 w-[6.5rem] h-[6.5rem] rounded-2xl bg-[#EEF3FF] border border-[#D6E4FF] group-hover:bg-[#1A3C8F] group-hover:border-[#1A3C8F] flex items-center justify-center mx-auto transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-[#1A3C8F]/20">
                  <step.icon className="w-8 h-8 text-[#1A3C8F] group-hover:text-white transition-colors duration-300" strokeWidth={1.75} />
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-[#0D1B3E] mb-2 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-[#4A5568] leading-relaxed mb-3 max-w-[220px]">
                {step.description}
              </p>
              <span className="inline-block text-xs font-semibold text-[#1A3C8F] bg-[#EEF3FF] px-3 py-1 rounded-full">
                {step.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
