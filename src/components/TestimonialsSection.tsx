"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TestimonialsMarquee } from "@/components/ui/testimonials-marquee";
import { students } from "@/data/content";

// Split students into two rows
const firstRow = students.slice(0, Math.ceil(students.length / 2));
const secondRow = students.slice(Math.ceil(students.length / 2));

const TestimonialsSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-background py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex border border-primary/30 bg-primary/5 text-primary text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Student Stories
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Real students. <span className="text-gradient-accent italic">Real results.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Sri Lanka's most trusted study abroad partner — 100% free, end-to-end support.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        {/* Row 1: Scrolling Left */}
        <TestimonialsMarquee 
          testimonials={firstRow} 
          duration={30} 
          className={shouldReduceMotion ? "overflow-x-auto" : ""}
        />
        
        {/* Row 2: Scrolling Right */}
        <TestimonialsMarquee 
          testimonials={secondRow} 
          duration={35} 
          reverse 
          className={shouldReduceMotion ? "overflow-x-auto mt-6" : "mt-6"}
        />

        {/* Masking gradients for smooth fade out at edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
