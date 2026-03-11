import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { students, stats } from "@/data/content";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-noise pt-28 pb-20">
      <div className="relative z-10 container mx-auto px-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
            Real students. <span className="text-gradient-gold italic">Real results.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Sri Lanka's most trusted study abroad partner — 100% free, end-to-end support.
          </p>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-16"
        >
          {students.map((student) => (
            <motion.div
              key={student.name}
              variants={cardVariant}
              className="card-glow group rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-sm font-semibold text-foreground shrink-0">
                  {student.avatar}
                </div>
                <div className="min-w-0">
                  <p className="font-body font-semibold text-foreground text-sm truncate">{student.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{student.flag} {student.university}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic">
                "{student.quote}"
              </p>
              <p className="mt-3 text-xs font-medium text-primary">{student.degree}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-0 mb-12"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-6 md:gap-0">
              <div className="text-center px-6 md:px-10">
                <p className="font-display text-3xl md:text-4xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
              {i < stats.length - 1 && <div className="stat-divider hidden md:block" />}
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-center"
        >
          <a
            href="#book"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
