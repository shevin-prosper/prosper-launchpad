import { motion } from "framer-motion";
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
  return (
    <section className="py-24 bg-section-alt relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Everything handled. <span className="text-gradient-accent italic">Nothing left to chance.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            All services are 100% free. Always.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="card-hover rounded-2xl border border-border bg-background p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-body font-semibold text-foreground mb-1">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
