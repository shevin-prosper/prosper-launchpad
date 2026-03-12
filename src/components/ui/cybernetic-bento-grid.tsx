import React from "react";
import { cn } from "@/lib/utils";

interface CyberneticBentoGridProps {
  children: React.ReactNode;
  className?: string;
}

interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const CyberneticBentoGrid = ({ children, className }: CyberneticBentoGridProps) => (
  <div
    className={cn(
      "grid grid-cols-1 sm:grid-cols-2 gap-4",
      className
    )}
  >
    {children}
  </div>
);

export const BentoItem = ({ children, className, style }: BentoItemProps) => (
  <div
    className={cn(
      "relative rounded-3xl border border-slate-100 p-8 overflow-hidden",
      "shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300",
      className
    )}
    style={{ background: "#ffffff", ...style }}
  >
    {children}
  </div>
);
