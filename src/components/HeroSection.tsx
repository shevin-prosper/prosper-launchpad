import { motion, useReducedMotion } from "framer-motion";

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section
      className="relative pt-28 pb-20 overflow-hidden min-h-screen flex items-center"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Headline */}
            <h1
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                color: "#0d0d12",
              }}
            >
              Your future<br />starts here.
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 400,
                fontSize: "1.125rem",
                lineHeight: 1.65,
                color: "#5a6478",
                maxWidth: "32rem",
              }}
            >
              Free guidance from application to visa — trusted by thousands of
              Sri Lankan students.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-5 mt-2">
              <a
                href="#book"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                style={{
                  backgroundColor: "#0d0d12",
                  color: "#ffffff",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                Book Free Consultation →
              </a>

              <a
                href="#how-it-works"
                className="text-sm font-medium transition-colors duration-200"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  color: "#3a4150",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0d0d12")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#3a4150")}
              >
                How it works →
              </a>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Floating UI cards ── */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:flex"
            style={{
              height: "480px",
              background: "linear-gradient(135deg, #f4b8c8 0%, #c9b8e8 50%, #b8c8f0 100%)",
              borderRadius: "24px",
              overflow: "hidden",
            }}
          >
            {/* Blob 1: soft pink circle */}
            <div
              style={{
                position: "absolute",
                top: "20%",
                right: "15%",
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                background: "#e8a0b0",
                opacity: 0.5,
              }}
            />
            {/* Blob 2: lavender arch/dome at bottom */}
            <div
              style={{
                position: "absolute",
                bottom: "-60px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "320px",
                height: "200px",
                borderRadius: "50% 50% 0 0",
                background: "#a090d0",
                opacity: 0.5,
              }}
            />

            {/* ── Main Application Card (center) ── */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) rotate(-2deg)",
                width: "280px",
                background: "#ffffff",
                borderRadius: "20px",
                padding: "24px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)",
                animation: shouldReduceMotion ? "none" : "float1 3s ease-in-out infinite alternate",
              }}
            >
              {/* Card header */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
                <img
                  src="/logo.png"
                  alt="Prosper"
                  style={{ height: "32px", width: "auto" }}
                />
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 600,
                    fontSize: "13px",
                    color: "#0d0d12",
                  }}
                >
                  Prosper
                </span>
              </div>

              <p
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  color: "#0d0d12",
                  marginBottom: "6px",
                }}
              >
                Study Abroad Application
              </p>

              {/* Status */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "#fffbeb",
                  borderRadius: "999px",
                  padding: "4px 10px",
                  marginBottom: "16px",
                }}
              >
                <span style={{ fontSize: "9px" }}>🟡</span>
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#92400e",
                  }}
                >
                  In Progress
                </span>
              </div>

              {/* Progress bar */}
              <div
                style={{
                  background: "#f0f4f8",
                  borderRadius: "999px",
                  height: "6px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "62%",
                    height: "100%",
                    background: "linear-gradient(90deg, #1A3C8F, #2952CC)",
                    borderRadius: "999px",
                  }}
                />
              </div>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "11px",
                  color: "#8a94a6",
                  marginTop: "6px",
                }}
              >
                62% complete
              </p>
            </motion.div>

            {/* ── Visa Approved Notification (bottom-left) ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "absolute",
                bottom: "40px",
                left: "0px",
                background: "#ffffff",
                borderRadius: "16px",
                padding: "14px 18px",
                boxShadow: "0 12px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                minWidth: "230px",
                animation: "float2 4s ease-in-out infinite alternate",
                animationDelay: "1s",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "#dcfce7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "16px",
                }}
              >
                ✓
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: "13px",
                    color: "#0d0d12",
                    marginBottom: "2px",
                  }}
                >
                  🎓 Visa Approved!
                </p>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "11px",
                    color: "#5a6478",
                    marginBottom: "1px",
                  }}
                >
                  University of Manchester
                </p>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "10px",
                    color: "#9aa3b2",
                  }}
                >
                  Today, 09:41 · 🇬🇧 United Kingdom
                </p>
              </div>
            </motion.div>

            {/* ── Students placed stat chip (top-right) ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "absolute",
                top: "30px",
                right: "0px",
                background: "#ffffff",
                borderRadius: "999px",
                padding: "10px 18px",
                boxShadow: "0 8px 28px rgba(0,0,0,0.09), 0 2px 6px rgba(0,0,0,0.04)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                animation: "float3 3.5s ease-in-out infinite alternate",
                animationDelay: "0.5s",
              }}
            >
              <span style={{ fontSize: "16px" }}>✈️</span>
              <span
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 600,
                  fontSize: "13px",
                  color: "#0d0d12",
                  whiteSpace: "nowrap",
                }}
              >
                2,400+ students placed
              </span>
            </motion.div>

            {/* ── Destinations chip (mid-right) ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "absolute",
                top: "50%",
                right: "0px",
                transform: "translateY(70px)",
                background: "#ffffff",
                borderRadius: "999px",
                padding: "10px 18px",
                boxShadow: "0 8px 28px rgba(0,0,0,0.09), 0 2px 6px rgba(0,0,0,0.04)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                animation: "float4 4.5s ease-in-out infinite alternate",
                animationDelay: "1.5s",
              }}
            >
              <span
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  color: "#3a4150",
                  whiteSpace: "nowrap",
                }}
              >
                🇦🇺 Australia · 🇨🇦 Canada · 🇬🇧 UK
              </span>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* ── Keyframe animations ── */}
      <style>{`
        @keyframes float1 {
          from { transform: translate(-50%, -50%) rotate(-2deg) translateY(0px); }
          to   { transform: translate(-50%, -50%) rotate(-2deg) translateY(-12px); }
        }
        @keyframes float2 {
          from { transform: translateY(0px); }
          to   { transform: translateY(-8px); }
        }
        @keyframes float3 {
          from { transform: translateY(0px); }
          to   { transform: translateY(-10px); }
        }
        @keyframes float4 {
          from { transform: translateY(70px); }
          to   { transform: translateY(62px); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
