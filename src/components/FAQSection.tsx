import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is Prosper really 100% free?",
    a: "Yes — always. We are compensated by our partner universities, not by students. You will never be asked to pay a single rupee for any service we provide, including counseling, applications, SOP writing, visa support, or interview prep.",
  },
  {
    q: "What qualifications do I need to apply?",
    a: "Requirements vary by country and university. Generally, for UK and Australian universities you need A/L results, while Canadian institutions may also consider O/Ls. Our counselors will assess your specific profile and find universities that are the right fit for you — including pathways if you don't meet direct entry requirements.",
  },
  {
    q: "Which countries do you help students apply to?",
    a: "We help students apply to universities in the UK, Australia, Canada, New Zealand, Germany, France, Ireland, the Netherlands, Georgia, and the USA. We have direct partnerships with 40+ universities across these countries.",
  },
  {
    q: "How long does the entire process take?",
    a: "Typically 3–6 months from first consultation to receiving your offer letter, and an additional 2–3 months for visa processing. We start early to make sure you don't miss intakes. Book a call and we'll map out your exact timeline.",
  },
  {
    q: "What happens if my visa gets rejected?",
    a: "Our 95% visa success rate reflects our thorough preparation. If a rejection does occur, we will review the reasons, address any gaps, and guide you through reapplication at no additional cost. We don't stop until you get there.",
  },
  {
    q: "Can I apply to multiple universities at once?",
    a: "Absolutely — and we recommend it. We help you build a strategic list of reach, target, and safety universities. We manage all applications simultaneously so your chances are maximised and no deadlines are missed.",
  },
  {
    q: "Do you help with scholarships and funding?",
    a: "Yes. We actively search for scholarships, bursaries, and funding opportunities that match your profile. We've helped students secure scholarships worth over Rs. 50 million in total. Many students don't know what they qualify for until we look.",
  },
  {
    q: "What is the 5-year career guarantee?",
    a: "After you graduate, Prosper continues to support your career journey for five years — resume reviews, job market guidance, professional network introductions, and employer connections. We believe getting the degree is only the beginning.",
  },
];

const FAQItem = ({ q, a, isOpen, onToggle }: {
  q: string; a: string; isOpen: boolean; onToggle: () => void;
}) => (
  <div
    className="border-b border-slate-100 last:border-0"
    style={{ borderColor: isOpen ? "transparent" : undefined }}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-start justify-between gap-4 py-6 text-left group"
    >
      <span
        className="text-base font-bold text-[#0D1B3E] group-hover:text-[#1A3C8F] transition-colors duration-200 leading-snug"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        {q}
      </span>
      <div
        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 mt-0.5"
        style={{
          background: isOpen ? "#0D1B3E" : "#EEF3FF",
          color: isOpen ? "#ffffff" : "#1A3C8F",
        }}
      >
        {isOpen
          ? <Minus size={14} strokeWidth={2.5} />
          : <Plus size={14} strokeWidth={2.5} />
        }
      </div>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p
            className="text-sm leading-relaxed text-slate-500 pb-6 max-w-2xl"
            style={{ fontFamily: "'Outfit', sans-serif", lineHeight: 1.75 }}
          >
            {a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#EEF3FF] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(26,60,143,0.08), transparent)" }} />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <div
            className="inline-flex border border-blue-100 bg-white text-blue-700 text-xs font-bold px-5 py-2 rounded-full mb-6 tracking-widest uppercase"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Common Questions
          </div>
          <h2
            className="font-display text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ color: "#0D1B3E", lineHeight: 1.1 }}
          >
            Got questions?{" "}
            <span style={{ color: "#1A3C8F" }}>We have answers.</span>
          </h2>
          <p
            className="mt-4 text-slate-500 text-base max-w-lg mx-auto"
            style={{ fontFamily: "'Outfit', sans-serif", lineHeight: 1.7 }}
          >
            Everything students and parents ask before booking a consultation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl shadow-sm border border-slate-100 px-6 md:px-10"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-10"
        >
          <p
            className="text-slate-500 text-sm mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Still have questions?
          </p>
          <a
            href="#book"
            className="inline-flex items-center gap-2 rounded-full text-sm font-bold px-6 py-3 transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{
              background: "#0D1B3E",
              color: "#ffffff",
              fontFamily: "'Outfit', sans-serif",
              boxShadow: "0 4px 16px rgba(13,27,62,0.2)",
            }}
          >
            Ask a counselor — it's free
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
