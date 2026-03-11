import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { students, stats } from "@/data/content";

const HeroSection = () => {
  // Duplicate students for seamless infinite scroll
  const doubledStudents = [...students, ...students];

  return (
    <section className="relative pt-28 pb-20 bg-hero-gradient overflow-hidden">
      <div className="relative z-10">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 px-6"
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
            Real students. <span className="text-gradient-accent italic">Real results.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Sri Lanka's most trusted study abroad partner — 100% free, end-to-end support.
          </p>
        </motion.div>

        {/* Infinite Marquee Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative mb-8"
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Row 1 */}
          <div className="flex animate-marquee mb-5" style={{ width: 'max-content' }}>
            {doubledStudents.map((student, i) => (
              <div
                key={`r1-${i}`}
                className="card-hover flex-shrink-0 w-[320px] mx-2.5 rounded-2xl border border-border bg-card p-6 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center text-sm font-semibold text-foreground shrink-0">
                    {student.avatar}
                  </div>
                  <div className="min-w-0">
                    <p className="font-body font-semibold text-foreground text-sm truncate">{student.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{student.flag} {student.university}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  "{student.quote}"
                </p>
                <p className="mt-3 text-xs font-semibold text-primary">{student.degree}</p>
              </div>
            ))}
          </div>

          {/* Row 2 - reverse direction */}
          <div className="flex animate-marquee mb-5" style={{ width: 'max-content', animationDirection: 'reverse', animationDuration: '35s' }}>
            {[...doubledStudents].reverse().map((student, i) => (
              <div
                key={`r2-${i}`}
                className="card-hover flex-shrink-0 w-[320px] mx-2.5 rounded-2xl border border-border bg-card p-6 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center text-sm font-semibold text-foreground shrink-0">
                    {student.avatar}
                  </div>
                  <div className="min-w-0">
                    <p className="font-body font-semibold text-foreground text-sm truncate">{student.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{student.flag} {student.university}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  "{student.quote}"
                </p>
                <p className="mt-3 text-xs font-semibold text-primary">{student.degree}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-0 mb-12 px-6"
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
          className="text-center px-6"
        >
          <a
            href="#book"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:scale-105"
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
