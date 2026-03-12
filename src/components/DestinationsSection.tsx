"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface Destination {
  name: string;
  coordinates: [number, number];
  flag: string;
  universities: number;
  intake: string;
  highlight: string;
  color: string;
}

const destinations: Destination[] = [
  { name: "UK",          coordinates: [-2, 54],   flag: "🇬🇧", universities: 65,  intake: "Oct / Jan", highlight: "#1 destination",     color: "#1A3C8F" },
  { name: "Australia",   coordinates: [133, -25], flag: "🇦🇺", universities: 38,  intake: "Feb / Jul", highlight: "Most popular",        color: "#0078D4" },
  { name: "Canada",      coordinates: [-96, 60],  flag: "🇨🇦", universities: 45,  intake: "Sep / Jan", highlight: "PR pathway",          color: "#CC0000" },
  { name: "USA",         coordinates: [-98, 38],  flag: "🇺🇸", universities: 120, intake: "Aug / Jan", highlight: "World's best",        color: "#3C3B6E" },
  { name: "New Zealand", coordinates: [172, -41], flag: "🇳🇿", universities: 8,   intake: "Feb / Jul", highlight: "Post-study visa",     color: "#00843D" },
  { name: "Germany",     coordinates: [10, 51],   flag: "🇩🇪", universities: 12,  intake: "Oct / Apr", highlight: "Low tuition",         color: "#DD0000" },
  { name: "France",      coordinates: [2, 46],    flag: "🇫🇷", universities: 15,  intake: "Sep / Feb", highlight: "Erasmus hub",         color: "#002395" },
  { name: "Georgia",     coordinates: [43, 42],   flag: "🇬🇪", universities: 6,   intake: "Sep",       highlight: "Affordable option",   color: "#DA291C" },
  { name: "Ireland",     coordinates: [-8, 53],   flag: "🇮🇪", universities: 9,   intake: "Sep / Jan", highlight: "EU gateway",          color: "#169B62" },
  { name: "Netherlands", coordinates: [5, 52],    flag: "🇳🇱", universities: 14,  intake: "Sep",       highlight: "English programs",    color: "#AE1C28" },
];

const PROSPER_COUNTRIES = [
  "United Kingdom", "United States of America", "Canada", "Australia",
  "New Zealand", "Germany", "France", "Georgia", "Ireland", "Netherlands",
];

const DestinationsSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeDestination, setActiveDestination] = useState<Destination | null>(null);

  return (
    <section id="destinations" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10 w-full max-w-6xl">

        {/* ── Header ── */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
        >
          <div>
            <p className="text-xs font-semibold text-[#1A3C8F] uppercase tracking-widest mb-3">
              Destinations
            </p>
            <h2
              className="text-4xl md:text-5xl font-extrabold text-[#0D1B3E] tracking-tight"
              style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: 1.15 }}
            >
              Where will{" "}
              <span className="text-[#1A3C8F] italic">you</span>{" "}
              go?
            </h2>
          </div>
          <p className="text-[#4A5568] text-base font-medium max-w-sm leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
            We place students across{" "}
            <span className="font-bold text-[#0D1B3E]">15+ countries</span>{" "}
            and 500+ universities worldwide — completely free.
          </p>
        </motion.div>

        {/* ── Interactive Map ── */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[460px] rounded-[24px] overflow-hidden border border-[#e0e8f0] bg-gradient-to-br from-[#f0f5ff] to-[#e8f0fe] shadow-inner"
          onClick={() => setActiveDestination(null)}
        >
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 130, center: [0, 30] }}
            width={800}
            height={460}
            style={{ width: "100%", height: "100%" }}
          >
            <ZoomableGroup center={[0, 30]} zoom={1} minZoom={1} maxZoom={3}>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const isProsper = PROSPER_COUNTRIES.includes(geo.properties.name);
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isProsper ? "#bdd0f0" : "#d4dce8"}
                        stroke="#ffffff"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { fill: isProsper ? "#a4bdea" : "#c0ccda", outline: "none" },
                          pressed: { fill: "#8aaae4", outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>

              {destinations.map((dest, i) => (
                <Marker
                  key={dest.name}
                  coordinates={dest.coordinates}
                  onClick={(e) => { e.stopPropagation(); setActiveDestination(dest); }}
                  className="cursor-pointer outline-none"
                >
                  <g style={{ transformOrigin: "center" }}>
                    {/* Pulsing ring */}
                    {!shouldReduceMotion && (
                      <circle
                        r="10"
                        fill={dest.color}
                        fillOpacity="0.15"
                        style={{
                          animation: `pulse 2s ease-out infinite`,
                          animationDelay: `${i * 200}ms`,
                          transformOrigin: "center",
                        }}
                      />
                    )}
                    {/* Solid dot */}
                    <circle
                      r="5"
                      fill={activeDestination?.name === dest.name ? dest.color : "#1A3C8F"}
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      style={{ transition: "fill 0.2s" }}
                    />
                  </g>
                  
                  {/* Animated Flagpole - springs up when active */}
                  <g style={{ transform: "translate(0, -5px)" }}> 
                    <motion.g
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={{ 
                        scaleY: activeDestination?.name === dest.name ? 1 : 0, 
                        opacity: activeDestination?.name === dest.name ? 1 : 0 
                      }}
                      transition={{ type: "spring", stiffness: 220, damping: 15 }}
                      style={{ originY: 1 }} // scale up from the bottom point
                    >
                      {/* The pole */}
                      <line x1="0" y1="0" x2="0" y2="-45" stroke={dest.color} strokeWidth="3" strokeLinecap="round" />
                      {/* The Flag Container */}
                      <g transform="translate(0, -62)">
                        {/* White rectangular background for flag */}
                        <rect x="-28" y="-20" width="56" height="40" rx="8" fill="#ffffff" stroke={dest.color} strokeWidth="2.5" />
                        {/* Centered Emoji Flag */}
                        <text x="0" y="2" fontSize="28" textAnchor="middle" dominantBaseline="central">
                          {dest.flag}
                        </text>
                      </g>
                    </motion.g>
                  </g>
                </Marker>
              ))}
            </ZoomableGroup>
          </ComposableMap>

          {/* Tooltip — bottom-left, shows active destination */}
          {activeDestination && (
            <motion.div
              key={activeDestination.name}
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-5 left-5 bg-white rounded-2xl p-4 shadow-[0_12px_32px_-8px_rgba(13,27,62,0.18)] border border-[#e2e8f0] w-56 z-20"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{activeDestination.flag}</span>
                <div>
                  <p className="font-bold text-[#0D1B3E] text-sm leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {activeDestination.name}
                  </p>
                  <p className="text-[#6B7280] text-xs" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {activeDestination.universities} universities
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold text-[#1A3C8F] bg-[#EEF3FF] px-2 py-0.5 rounded-full" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {activeDestination.highlight}
                </span>
                <span className="text-[10px] text-[#9CA3AF]" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {activeDestination.intake}
                </span>
              </div>
              <a
                href="#book"
                className="group flex items-center justify-between w-full text-xs font-bold text-[#1A3C8F] bg-[#f0f5ff] hover:bg-[#e4edff] px-3 py-2 rounded-xl transition-colors"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Explore pathway
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          )}

          {/* Map hint */}
          {!activeDestination && (
            <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/60 shadow-sm pointer-events-none">
              <MapPin className="w-3 h-3 text-[#1A3C8F]" />
              <span className="text-[11px] font-medium text-[#4A5568]" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Click a dot to explore
              </span>
            </div>
          )}
        </motion.div>

        {/* ── Destination Cards Grid ── */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mt-6"
        >
          {destinations.map((dest, i) => (
            <motion.a
              key={dest.name}
              href="#book"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onMouseEnter={() => setActiveDestination(dest)}
              onMouseLeave={() => setActiveDestination(null)}
              className="group relative flex flex-col items-center gap-2 bg-white border border-[#e8edf5] hover:border-[#1A3C8F]/30 rounded-2xl p-4 text-center cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
              <span className="text-3xl">{dest.flag}</span>
              <div>
                <p className="font-bold text-[#0D1B3E] text-sm leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {dest.name}
                </p>
                <p className="text-[11px] text-[#6B7280] mt-0.5" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {dest.universities} unis
                </p>
              </div>
              <span
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                style={{ background: `${dest.color}15`, color: dest.color, fontFamily: "'Outfit', sans-serif" }}
              >
                {dest.highlight}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center mt-10"
        >
          <a
            href="#book"
            className="group inline-flex items-center gap-2 text-[15px] font-bold text-[#1A3C8F] hover:text-[#0D1B3E] transition-colors duration-200"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <span className="border-b-2 border-transparent group-hover:border-[#0D1B3E] pb-0.5 transition-colors duration-200">
              Don't see your country? Ask us
            </span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

      </div>

      <style>{`
        @keyframes pulse {
          0%   { r: 5;  opacity: 0.5; }
          100% { r: 14; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default DestinationsSection;
