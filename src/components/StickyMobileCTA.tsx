import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-100 shadow-2xl"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="flex items-center gap-3 px-4 py-3">
            <a
              href="tel:+94XXXXXXXXX"
              className="flex items-center justify-center gap-2 flex-1 border-2 border-[#1A3C8F] text-[#1A3C8F] rounded-2xl py-3.5 text-sm font-bold"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <Phone size={15} strokeWidth={2.5} />
              Call Us
            </a>
            <a
              href="#book"
              className="flex items-center justify-center flex-[2] bg-[#0D1B3E] text-white rounded-2xl py-3.5 text-sm font-bold"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Book Free Consultation
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyMobileCTA;
