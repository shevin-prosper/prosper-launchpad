import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="book" className="py-28 relative bg-noise">
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Your future is one<br />
            <span className="text-gradient-gold italic">conversation away.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            Free consultation. No obligation. Just clarity.
          </p>
          <a
            href="#"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-lg font-semibold text-primary-foreground transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 mb-10"
          >
            Book Free Consultation
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground text-sm">
            <a href="tel:+94771234567" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" /> +94 77 123 4567
            </a>
            <a href="mailto:hello@prosper.lk" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail className="w-4 h-4" /> hello@prosper.lk
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
