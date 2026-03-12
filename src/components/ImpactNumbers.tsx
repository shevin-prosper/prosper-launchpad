import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { prefix: "",  value: 5000, suffix: "+", label: "Students placed abroad",    sub: "and counting" },
  { prefix: "",  value: 40,   suffix: "+", label: "Partner universities",       sub: "across 8 countries" },
  { prefix: "",  value: 95,   suffix: "%", label: "Visa success rate",          sub: "industry leading" },
  { prefix: "Rs ", value: 0, suffix: "",   label: "Charged to every student",   sub: "free, always" },
  { prefix: "",  value: 5,    suffix: "yr", label: "Career guidance warranty",  sub: "post-graduation" },
  { prefix: "",  value: 500,  suffix: "+", label: "Scholarships secured",       sub: "worth millions" },
];

function Counter({
  target, suffix, prefix, inView,
}: { target: number; suffix: string; prefix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (target === 0) { setCount(0); return; }
    const duration = 1800;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const ImpactNumbers = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{ background: "#0D1B3E" }}
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #2952CC, transparent)" }} />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #1A3C8F, transparent)" }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Outfit', sans-serif" }}
          >
            By the numbers
          </p>
          <h2
            className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight"
            style={{ lineHeight: 1.1 }}
          >
            The proof is in the{" "}
            <span style={{ color: "#7C9FEA" }}>people.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center px-6 py-10 bg-white/[0.03] hover:bg-white/[0.07] transition-colors duration-300"
            >
              <div
                className="font-display font-extrabold text-white mb-2"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", lineHeight: 1, letterSpacing: "-0.03em" }}
              >
                <Counter target={s.value} suffix={s.suffix} prefix={s.prefix} inView={inView} />
              </div>
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Outfit', sans-serif" }}
              >
                {s.label}
              </p>
              <p
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Outfit', sans-serif" }}
              >
                {s.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
