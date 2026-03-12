import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  { feature: "Cost to you",               prosper: "Rs. 0 — free always",         others: "Rs. 50,000 – 200,000+" },
  { feature: "End-to-end application",    prosper: true,                            others: false },
  { feature: "Visa application support",  prosper: "Fully included",               others: "Charged separately" },
  { feature: "SOP & document writing",    prosper: "Fully included",               others: "Extra Rs. 15,000–40,000" },
  { feature: "Partner university access", prosper: "40+ direct partnerships",      others: "Limited or none" },
  { feature: "Scholarship search",        prosper: true,                            others: false },
  { feature: "Post-arrival support",      prosper: true,                            others: false },
  { feature: "5-year career guarantee",   prosper: true,                            others: false },
  { feature: "Offer letter guarantee",    prosper: "Offer or full refund",         others: false },
];

type CellValue = boolean | string;

const Cell = ({ value, isProsper }: { value: CellValue; isProsper: boolean }) => {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: isProsper ? "#1A3C8F" : "#e5e7eb" }}
        >
          <Check size={13} strokeWidth={3} color={isProsper ? "#fff" : "#9ca3af"} />
        </div>
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-red-50">
          <X size={13} strokeWidth={3} color="#ef4444" />
        </div>
      </div>
    );
  }
  return (
    <p
      className="text-center text-sm font-semibold"
      style={{
        color: isProsper ? "#0D1B3E" : "#9ca3af",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      {value}
    </p>
  );
};

const WhyProsper = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-30 pointer-events-none"
      style={{ background: "radial-gradient(circle, #EEF3FF, transparent)" }} />

    <div className="container mx-auto px-6 max-w-5xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        className="text-center mb-14"
      >
        <div
          className="inline-flex border border-blue-100 bg-blue-50 text-blue-700 text-xs font-bold px-5 py-2 rounded-full mb-6 tracking-widest uppercase"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          The Prosper Difference
        </div>
        <h2
          className="font-display text-4xl md:text-5xl font-extrabold tracking-tight"
          style={{ color: "#0D1B3E", lineHeight: 1.1 }}
        >
          Why students choose{" "}
          <span
            className="relative inline-block"
            style={{
              color: "#1A3C8F",
            }}
          >
            us.
          </span>
        </h2>
        <p
          className="mt-4 text-slate-500 max-w-lg mx-auto text-base"
          style={{ fontFamily: "'Outfit', sans-serif", lineHeight: 1.7 }}
        >
          Most agencies charge a fortune for less. Prosper flips that — premium service, zero cost.
        </p>
      </motion.div>

      {/* Comparison table */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="rounded-3xl overflow-hidden shadow-xl border border-slate-100"
      >
        {/* Header */}
        <div className="grid grid-cols-3">
          <div className="bg-slate-50 px-6 py-5 flex items-end">
            <p
              className="text-xs font-bold uppercase tracking-widest text-slate-400"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              What you get
            </p>
          </div>
          <div
            className="px-6 py-5 flex flex-col items-center gap-1"
            style={{ background: "#0D1B3E" }}
          >
            <img src="/logo.png" alt="Prosper" className="h-7 w-auto" style={{ filter: "brightness(0) invert(1)" }} />
            <span
              className="text-xs font-semibold mt-1"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Outfit', sans-serif" }}
            >
              Prosper Global
            </span>
          </div>
          <div className="bg-slate-100 px-6 py-5 flex flex-col items-center justify-center gap-1">
            <p
              className="text-base font-bold text-slate-400"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Other Agencies
            </p>
            <p
              className="text-xs text-slate-400"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              typical in Sri Lanka
            </p>
          </div>
        </div>

        {/* Rows */}
        {rows.map((row, i) => (
          <div
            key={row.feature}
            className="grid grid-cols-3 border-t border-slate-100"
            style={{ background: i % 2 === 0 ? "#ffffff" : "#fafbff" }}
          >
            {/* Feature label */}
            <div className="px-6 py-4 flex items-center">
              <p
                className="text-sm font-medium text-slate-700"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {row.feature}
              </p>
            </div>
            {/* Prosper value */}
            <div
              className="px-6 py-4 flex items-center justify-center border-l-2"
              style={{ borderColor: "#1A3C8F", background: "rgba(26,60,143,0.02)" }}
            >
              <Cell value={row.prosper} isProsper={true} />
            </div>
            {/* Others value */}
            <div className="px-6 py-4 flex items-center justify-center border-l border-slate-100">
              <Cell value={row.others} isProsper={false} />
            </div>
          </div>
        ))}

        {/* Footer CTA */}
        <div
          className="grid grid-cols-3 border-t border-slate-100"
          style={{ background: "#fafbff" }}
        >
          <div className="px-6 py-6" />
          <div
            className="px-6 py-6 flex items-center justify-center border-l-2"
            style={{ borderColor: "#1A3C8F", background: "rgba(26,60,143,0.03)" }}
          >
            <a
              href="#book"
              className="inline-flex items-center justify-center rounded-full text-white text-sm font-bold px-6 py-3 transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{
                background: "#0D1B3E",
                fontFamily: "'Outfit', sans-serif",
                boxShadow: "0 4px 16px rgba(13,27,62,0.25)",
              }}
            >
              Get started — free
            </a>
          </div>
          <div className="px-6 py-6 flex items-center justify-center border-l border-slate-100">
            <p
              className="text-xs text-slate-400 italic text-center"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Pay thousands,<br />get less.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default WhyProsper;
