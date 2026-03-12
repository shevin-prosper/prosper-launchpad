"use client";
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

// Reusable BentoItem component with mouse-tracking logic
export const BentoItem = ({ className, children }: { className?: string, children?: React.ReactNode }) => {
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const item = itemRef.current;
        if (!item) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            item.style.setProperty('--mouse-x', `${x}px`);
            item.style.setProperty('--mouse-y', `${y}px`);
        };

        item.addEventListener('mousemove', handleMouseMove);

        return () => {
            item.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div 
            ref={itemRef} 
            className={cn(
                "group relative border border-slate-200 bg-white/50 backdrop-blur-sm rounded-3xl overflow-hidden p-8 transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50",
                "before:absolute before:inset-0 before:z-0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
                "before:bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(14,165,233,0.06),transparent_80%)]",
                className
            )}
        >
            <div className="relative z-10 flex flex-col h-full">
                {children}
            </div>
        </div>
    );
};

// Main Grid Container
export const CyberneticBentoGrid = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", className)}>
            {children}
        </div>
    );
};
