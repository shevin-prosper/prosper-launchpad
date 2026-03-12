"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

// Animation variants for the container to stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Animation variants for each grid item
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

/**
 * Props for the BentoGridShowcase component.
 * Each prop represents a "slot" in the grid.
 */
interface BentoGridShowcaseProps {
  /** Slot for the tall card (e.g., Integration) */
  integration: React.ReactNode;
  /** Slot for the top-middle card (e.g., Trackers) */
  trackers: React.ReactNode;
  /** Slot for the top-right card (e.g., Statistic) */
  statistic: React.ReactNode;
  /** Slot for the middle-middle card (e.g., Focus) */
  focus: React.ReactNode;
  /** Slot for the middle-right card (e.g., Productivity) */
  productivity: React.ReactNode;
  /** Slot for the wide bottom card (e.g., Shortcuts) */
  shortcuts: React.ReactNode;
  /** Optional class names for the grid container */
  className?: string;
}

/**
 * A responsive, animated bento grid layout component.
 * Arranges six content slots in a 3-column masonry/bento style.
 */
export const BentoGridShowcase = ({
  integration,
  trackers,
  statistic,
  focus,
  productivity,
  shortcuts,
  className,
}: BentoGridShowcaseProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={shouldReduceMotion ? {} : containerVariants}
      initial={shouldReduceMotion ? { opacity: 1 } : "hidden"}
      whileInView={shouldReduceMotion ? { opacity: 1 } : "visible"}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-[auto_auto_auto]",
        "auto-rows-auto",
        className
      )}
    >
      {/* Slot 1: Tall / Spans 3 rows */}
      <motion.div variants={shouldReduceMotion ? {} : itemVariants} className="md:col-span-1 md:row-span-3 h-full">
        {integration}
      </motion.div>

      {/* Slot 2 */}
      <motion.div variants={shouldReduceMotion ? {} : itemVariants} className="md:col-span-1 md:row-span-1 h-full">
        {trackers}
      </motion.div>

      {/* Slot 3 */}
      <motion.div variants={shouldReduceMotion ? {} : itemVariants} className="md:col-span-1 md:row-span-1 h-full">
        {statistic}
      </motion.div>

      {/* Slot 4 */}
      <motion.div variants={shouldReduceMotion ? {} : itemVariants} className="md:col-span-1 md:row-span-1 h-full">
        {focus}
      </motion.div>

      {/* Slot 5 */}
      <motion.div variants={shouldReduceMotion ? {} : itemVariants} className="md:col-span-1 md:row-span-1 h-full">
        {productivity}
      </motion.div>

      {/* Slot 6: Wide bottom row */}
      <motion.div variants={shouldReduceMotion ? {} : itemVariants} className="md:col-span-2 md:row-span-1 h-full">
        {shortcuts}
      </motion.div>
    </motion.div>
  );
};
