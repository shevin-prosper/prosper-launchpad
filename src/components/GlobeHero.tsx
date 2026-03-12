import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// ── Arc & point data ────────────────────────────────────────────────────────
const ARC_DATA = [
  { startLat: 6.9271, startLng: 79.8612, endLat: 51.5074,  endLng: -0.1278  }, // → London
  { startLat: 6.9271, startLng: 79.8612, endLat: 40.7128,  endLng: -74.006  }, // → New York
  { startLat: 6.9271, startLng: 79.8612, endLat: -33.8688, endLng: 151.2093 }, // → Sydney
  { startLat: 6.9271, startLng: 79.8612, endLat: 43.6532,  endLng: -79.3832 }, // → Toronto
  { startLat: 6.9271, startLng: 79.8612, endLat: 48.8566,  endLng: 2.3522   }, // → Paris
];

const POINTS_DATA = [
  { lat: 6.9271,   lng: 79.8612  }, // Colombo
  { lat: 51.5074,  lng: -0.1278  }, // London
  { lat: 40.7128,  lng: -74.006  }, // New York
  { lat: -33.8688, lng: 151.2093 }, // Sydney
  { lat: 43.6532,  lng: -79.3832 }, // Toronto
  { lat: 48.8566,  lng: 2.3522   }, // Paris
];

const STATS = [
  { value: "5,000+", label: "Students placed" },
  { value: "40+",    label: "Universities"    },
  { value: "100%",   label: "Free service"    },
];

// ── Component ───────────────────────────────────────────────────────────────
const GlobeHero = () => {
  const mountRef  = useRef<HTMLDivElement>(null);
  const globeRef  = useRef<any>(null);

  useEffect(() => {
    // ── Initialise globe once globe.gl is available ─────────────────────────
    const setup = () => {
      const GlobeFn = (window as any).Globe;
      if (!GlobeFn || !mountRef.current) return;

      const el = mountRef.current;

      const globe = GlobeFn({ animateIn: true })(el)
        .width(el.clientWidth)
        .height(el.clientHeight)
        .backgroundColor("rgba(0,0,0,0)")
        .globeImageUrl("//unpkg.com/three-globe/example/img/earth-day.jpg")
        .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
        .showAtmosphere(true)
        .atmosphereColor("#93c5fd")
        .atmosphereAltitude(0.18)
        // ── Arcs
        .arcsData(ARC_DATA)
        .arcStartLat((d: any) => d.startLat)
        .arcStartLng((d: any) => d.startLng)
        .arcEndLat((d: any)   => d.endLat)
        .arcEndLng((d: any)   => d.endLng)
        .arcColor(() => ["rgba(26,60,143,1)", "rgba(26,60,143,0.3)"])
        .arcAltitudeAutoScale(0.38)
        .arcStroke(0.8)
        .arcDashLength(0.42)
        .arcDashGap(0.15)
        .arcDashAnimateTime(1800)
        // ── City dots
        .pointsData(POINTS_DATA)
        .pointLat((d: any)    => d.lat)
        .pointLng((d: any)    => d.lng)
        .pointColor(() => "#1A3C8F")
        .pointAltitude(0.02)
        .pointRadius(0.4)
        // ── Pulsing rings
        .ringsData(POINTS_DATA)
        .ringLat((d: any)     => d.lat)
        .ringLng((d: any)     => d.lng)
        .ringColor(() => (t: number) => `rgba(26,60,143,${(1 - t) * 0.5})`)
        .ringMaxRadius(3.5)
        .ringPropagationSpeed(2.2)
        .ringRepeatPeriod(900);

      globe.pointOfView({ lat: 10, lng: 70, altitude: 2.0 }, 0);

      const controls           = globe.controls();
      controls.autoRotate      = true;
      controls.autoRotateSpeed = 0.5;
      controls.enableZoom      = false;
      controls.enablePan       = false;

      globeRef.current = globe;
    };

    // ── Resize handler ──────────────────────────────────────────────────────
    const onResize = () => {
      if (mountRef.current && globeRef.current) {
        globeRef.current
          .width(mountRef.current.clientWidth)
          .height(mountRef.current.clientHeight);
      }
    };
    window.addEventListener("resize", onResize);

    // ── Load or reuse CDN script ────────────────────────────────────────────
    const scriptId = "globe-gl-cdn";
    if (!document.getElementById(scriptId)) {
      const script    = document.createElement("script");
      script.id       = scriptId;
      script.src      = "https://unpkg.com/globe.gl";
      script.onload   = setup;
      document.head.appendChild(script);
    } else if ((window as any).Globe) {
      setup();
    }

    // ── Cleanup ─────────────────────────────────────────────────────────────
    return () => {
      window.removeEventListener("resize", onResize);
      try { globeRef.current?.renderer()?.dispose(); } catch (_) { /* noop */ }
      if (mountRef.current) mountRef.current.innerHTML = "";
      globeRef.current = null;
    };
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "100vh",
        paddingTop: "64px",
        background: "linear-gradient(180deg, #ffffff 55%, #f0f4ff 100%)",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      <div
        className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center"
        style={{ minHeight: "calc(100vh - 64px)" }}
      >
        {/* ══ LEFT — Text block ═══════════════════════════════════════════════ */}
        <motion.div
          className="flex-1 flex flex-col justify-center py-16 md:py-0 md:pr-10 z-10"
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 self-start mb-6"
            style={{
              background: "#EEF3FF",
              border: "1px solid rgba(26,60,143,0.18)",
              borderRadius: 999,
              padding: "5px 14px",
            }}
          >
            <span
              style={{
                width: 7, height: 7, borderRadius: "50%",
                background: "#1A3C8F", display: "inline-block",
              }}
            />
            <span style={{ fontSize: 12, fontWeight: 600, color: "#1A3C8F", letterSpacing: "0.04em" }}>
              Sri Lanka's #1 Study Abroad Partner
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.6rem, 5.2vw, 4.25rem)",
              lineHeight: 1.12,
              letterSpacing: "-0.035em",
              color: "#0a0a2e",
              margin: 0,
            }}
          >
            Your future<br />starts here.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.55 }}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(1rem, 1.4vw, 1.1rem)",
              lineHeight: 1.7,
              color: "#6b7280",
              marginTop: "1.25rem",
              maxWidth: 400,
            }}
          >
            Free guidance from application to visa — trusted by thousands of Sri Lankan students.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center gap-5 mt-8"
          >
            <a
              href="#book"
              className="group inline-flex items-center gap-2.5 transition-all duration-200 hover:scale-[1.03]"
              style={{
                background: "#0a0a2e",
                color: "#ffffff",
                borderRadius: 999,
                padding: "14px 28px",
                fontSize: 15,
                fontWeight: 700,
                fontFamily: "'Outfit', sans-serif",
                boxShadow: "0 4px 22px rgba(10,10,46,0.22)",
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#how-it-works"
              style={{
                color: "#1A3C8F",
                fontSize: 15,
                fontWeight: 600,
                fontFamily: "'Outfit', sans-serif",
                textDecoration: "none",
              }}
              className="hover:opacity-70 transition-opacity duration-200"
            >
              How it works →
            </a>
          </motion.div>

          {/* Trust stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex items-center gap-8 mt-10"
            style={{ borderTop: "1px solid rgba(0,0,0,0.07)", paddingTop: "1.5rem" }}
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.35rem",
                    color: "#0a0a2e",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.76rem",
                    color: "#9ca3af",
                    marginTop: 3,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

        </motion.div>

        {/* ══ RIGHT — Globe ════════════════════════════════════════════════════ */}
        <div
          className="flex-1 flex items-center justify-center w-full"
          style={{ minHeight: 480 }}
        >
          {/* Outer: fade in */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.3 }}
            style={{ width: "100%", maxWidth: 600 }}
          >
            {/* Inner: float */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: "100%", height: 520 }}
            >
              <div ref={mountRef} style={{ width: "100%", height: "100%" }} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobeHero;
