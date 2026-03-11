import { motion } from "framer-motion";
import { Phone, Map, Rocket } from "lucide-react";

const steps = [
  { icon: Phone, number: "01", title: "Book Free Consultation", description: "A 30-minute call to understand your goals, budget, and timeline." },
  { icon: Map, number: "02", title: "Get Your Roadmap", description: "We create a personalized plan with university shortlists and deadlines." },
  { icon: Rocket, number: "03", title: "Land Your Offer", description: "We handle applications, SOPs, visas, and prep — until you fly." },
];

const HowItWorks = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            How it <span className="text-gradient-accent italic">works</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center relative"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-xs font-body font-semibold text-primary tracking-widest uppercase">{step.number}</span>
              <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
