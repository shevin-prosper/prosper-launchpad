import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Destinations", href: "#destinations" },
  { label: "How It Works", href: "#how-it-works" },
];

const SECTION_IDS = ["services", "destinations", "how-it-works"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const shouldReduceMotion = useReducedMotion();

  // IntersectionObserver — highlight the nav link whose section is in view
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close mobile drawer on resize past md breakpoint
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <motion.nav
        initial={shouldReduceMotion ? false : { y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
          {/* Left: Logo */}
          <a href="#">
            <img
              src="/logo.png"
              alt="Prosper Global Education"
              className="h-14 w-auto"
              style={{ mixBlendMode: "multiply" }}
            />
          </a>

          {/* Center: Nav links — desktop only */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium transition-colors duration-200 relative"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    color: isActive ? "#0d0d12" : "#4a5568",
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                      style={{ backgroundColor: "#0d0d12" }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right: CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#book"
              className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: "#0d0d12",
                color: "#ffffff",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              Book Free Consultation
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200"
              style={{ backgroundColor: mobileOpen ? "#e2e8f0" : "transparent" }}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" style={{ color: "#0d0d12" }} />
              ) : (
                <Menu className="w-5 h-5" style={{ color: "#0d0d12" }} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="fixed top-[72px] left-0 right-0 z-40 shadow-xl"
          style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #dde3ec" }}
        >
          <nav className="max-w-7xl mx-auto px-8 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 px-4 rounded-xl text-sm font-medium transition-colors duration-200"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  color: "#0d0d12",
                  backgroundColor:
                    activeSection === link.href.replace("#", "")
                      ? "#e2e8f0"
                      : "transparent",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: "#0d0d12",
                color: "#ffffff",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              Book Free Consultation
            </a>
          </nav>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
