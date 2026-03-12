"use client";
import React from "react";
import { motion } from "framer-motion";

export const TestimonialsMarquee = (props: {
  className?: string;
  testimonials: typeof import("@/data/content").students;
  duration?: number;
  reverse?: boolean;
}) => {
  return (
    <div className={`overflow-hidden py-4 ${props.className}`}>
      <motion.div
        animate={{ x: props.reverse ? "0%" : "-50%" }}
        initial={{ x: props.reverse ? "-50%" : "0%" }}
        transition={{
          duration: props.duration || 20,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex w-max"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <div key={index} className="flex gap-6 pr-6">
            {props.testimonials.map((student, i) => (
              <div
                className="p-6 rounded-2xl border border-border bg-card shadow-lg shadow-primary/5 w-[350px] shrink-0"
                key={`${index}-${i}`}
              >
                <p className="text-sm text-muted-foreground leading-relaxed">"{student.quote}"</p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                    {student.avatar}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="font-semibold text-sm text-foreground truncate">{student.name}</div>
                    <div className="text-xs text-muted-foreground truncate">{student.flag} {student.university}</div>
                    <div className="text-xs font-medium text-primary truncate">{student.degree}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
