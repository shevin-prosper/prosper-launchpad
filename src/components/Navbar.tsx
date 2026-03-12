import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Headphones, MessageSquare, HelpCircle, Sparkles, GraduationCap, FileText } from "lucide-react";

export function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const { scrollY } = useScroll();
  
  // Stabilize the scroll value to prevent jitter/jumpiness
  const scrollYSmooth = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Morph values: logo goes from big → small
  const logoHeight = useTransform(scrollYSmooth, [0, 150], [68, 38]);
  const pillOpacity = useTransform(scrollYSmooth, [0, 100], [0, 1]);
  const pillScale = useTransform(scrollYSmooth, [0, 100], [0.95, 1]);

  return (
    <div className="fixed top-0 inset-x-0 w-full z-50 flex justify-center pointer-events-none pt-6">
      <div 
        className={cn("relative w-full max-w-7xl flex items-center justify-between px-4 pointer-events-auto")}
        style={{ height: "80px" }} // Constant height ensures layout stability
      >
        {/* Morphing Logo: starts big, shrinks into pill */}
        <div className="flex-1 flex justify-start items-center h-full">
          <Link to="/" className="relative flex items-center group">
            {/* Pill background — fades in on scroll */}
            <motion.div
              style={{ opacity: pillOpacity, scale: pillScale }}
              className="absolute inset-x-0 inset-y-0.5 bg-white border border-slate-200 shadow-sm rounded-full"
            />
            {/* Logo — shrinks smoothly on scroll */}
            <motion.img
              src="/logo.png"
              alt="Prosper Logo"
              style={{ height: logoHeight }}
              className="relative z-10 w-auto object-contain px-5 py-2 transition-filter duration-300"
            />
          </Link>
        </div>

        {/* Floating Menu in the center */}
        <div className="flex-shrink-0">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="flex flex-col space-y-4 text-sm w-48 p-2">
                <HoveredLink to="#services">
                  <div className="flex items-center gap-3 group/link">
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600 group-hover/link:bg-blue-600 group-hover/link:text-white transition-colors">
                      <FileText size={16} />
                    </div>
                    <span>Application Hub</span>
                  </div>
                </HoveredLink>
                <HoveredLink to="#services">
                  <div className="flex items-center gap-3 group/link">
                    <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600 group-hover/link:bg-indigo-600 group-hover/link:text-white transition-colors">
                      <Sparkles size={16} />
                    </div>
                    <span>SOP Writing</span>
                  </div>
                </HoveredLink>
                <HoveredLink to="#services">
                  <div className="flex items-center gap-3 group/link">
                    <div className="p-2 bg-amber-50 rounded-lg text-amber-600 group-hover/link:bg-amber-600 group-hover/link:text-white transition-colors">
                      <GraduationCap size={16} />
                    </div>
                    <span>Scholarships</span>
                  </div>
                </HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Explore">
              <div className="text-sm grid grid-cols-2 gap-8 p-4 w-[500px]">
                <ProductItem
                  title="Destinations"
                  href="#destinations"
                  src="https://images.unsplash.com/photo-1526772662000-3f88f10c053b?q=80&w=400&auto=format&fit=crop"
                  description="Explore 15+ countries and 500+ top-tier universities."
                />
                <ProductItem
                  title="How it Works"
                  href="#how-it-works"
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=400&auto=format&fit=crop"
                  description="Step-by-step guide to your global education journey."
                />
                <ProductItem
                  title="Partner Universities"
                  href="#destinations"
                  src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=400&auto=format&fit=crop"
                  description="Access exclusive intake windows and direct admissions."
                />
                <ProductItem
                  title="Success Stories"
                  href="#testimonials"
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=400&auto=format&fit=crop"
                  description="See how 2,400+ students started their journey."
                />
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Not sure?">
              <div className="flex flex-col space-y-4 text-sm w-52 p-2">
                <HoveredLink to="#book">
                  <div className="flex items-center gap-3 group/link">
                    <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600 group-hover/link:bg-emerald-600 group-hover/link:text-white transition-colors">
                      <HelpCircle size={16} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 group-hover/link:text-blue-600 transition-colors">Quick Advice</p>
                      <p className="text-[10px] text-slate-500">Unsure where to start?</p>
                    </div>
                  </div>
                </HoveredLink>
                <HoveredLink to="#book">
                  <div className="flex items-center gap-3 group/link">
                    <div className="p-2 bg-pink-50 rounded-lg text-pink-600 group-hover/link:bg-pink-600 group-hover/link:text-white transition-colors">
                      <MessageSquare size={16} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 group-hover/link:text-blue-600 transition-colors">Chat with Us</p>
                      <p className="text-[10px] text-slate-500">Speak to an expert now.</p>
                    </div>
                  </div>
                </HoveredLink>
                <HoveredLink to="#book">
                  <div className="flex items-center gap-3 group/link">
                    <div className="p-2 bg-purple-50 rounded-lg text-purple-600 group-hover/link:bg-purple-600 group-hover/link:text-white transition-colors">
                      <Headphones size={16} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 group-hover/link:text-blue-600 transition-colors">Support Hub</p>
                      <p className="text-[10px] text-slate-500">Visa & pre-departure info.</p>
                    </div>
                  </div>
                </HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>

        {/* CTA Button on the right */}
        <div className="flex-1 flex justify-end">
          <a
            href="#book"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 font-body"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
