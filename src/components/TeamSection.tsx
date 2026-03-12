import { motion } from "framer-motion";

const counselors = [
  {
    name: "Kavindu Perera",
    role: "UK & Europe Specialist",
    bio: "Former international student himself, Kavindu has guided 800+ students to UK universities. Expert in tier-4 visas and CAS.",
    initials: "KP",
    gradient: "linear-gradient(135deg, #0D1B3E 0%, #1A3C8F 100%)",
    placed: "800+ students",
    specialty: "United Kingdom · Germany · France",
  },
  {
    name: "Dilini Fernando",
    role: "Australia & NZ Specialist",
    bio: "With a background in Australian immigration law, Dilini has a near-perfect visa approval record for student visas.",
    initials: "DF",
    gradient: "linear-gradient(135deg, #1A3C8F 0%, #2952CC 100%)",
    placed: "650+ students",
    specialty: "Australia · New Zealand · Ireland",
  },
  {
    name: "Tharushi Wickramasinghe",
    role: "Canada & USA Specialist",
    bio: "Tharushi specialises in PGWP pathways and PR routes, helping students plan not just a degree but a life abroad.",
    initials: "TW",
    gradient: "linear-gradient(135deg, #2952CC 0%, #4A7CF0 100%)",
    placed: "500+ students",
    specialty: "Canada · USA · Netherlands",
  },
  {
    name: "Nimal Jayasinghe",
    role: "Head of Visa & Documentation",
    bio: "15+ years in immigration documentation. Nimal has personally reviewed over 3,000 visa files with a 98% success rate.",
    initials: "NJ",
    gradient: "linear-gradient(135deg, #0a0a2e 0%, #0D1B3E 100%)",
    placed: "3,000+ files",
    specialty: "Visa · SOP · Documentation",
  },
];

const TeamSection = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none"
      style={{ background: "radial-gradient(circle, #EEF3FF, transparent)" }} />

    <div className="container mx-auto px-6 relative z-10">
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
          Your Team
        </div>
        <h2
          className="font-display text-4xl md:text-5xl font-extrabold tracking-tight"
          style={{ color: "#0D1B3E", lineHeight: 1.1 }}
        >
          Meet your{" "}
          <span style={{ color: "#1A3C8F" }}>counselors.</span>
        </h2>
        <p
          className="mt-4 text-slate-500 text-base max-w-lg mx-auto"
          style={{ fontFamily: "'Outfit', sans-serif", lineHeight: 1.7 }}
        >
          Real people, real expertise. Every student is matched with a specialist counselor for their target country.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {counselors.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.1, duration: 0.55 }}
            className="group flex flex-col rounded-3xl overflow-hidden border border-slate-100 bg-white hover:shadow-xl hover:shadow-blue-900/8 hover:-translate-y-1 transition-all duration-300"
          >
            {/* Avatar area */}
            <div
              className="relative h-48 flex items-center justify-center"
              style={{ background: c.gradient }}
            >
              {/* Large initials */}
              <div
                className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
              >
                <span
                  className="text-3xl font-extrabold text-white"
                  style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.03em" }}
                >
                  {c.initials}
                </span>
              </div>

              {/* Placed count badge */}
              <div
                className="absolute bottom-4 right-4 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1"
              >
                <p
                  className="text-xs font-bold text-white"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {c.placed}
                </p>
              </div>
            </div>

            {/* Info */}
            <div className="p-6 flex flex-col flex-1">
              <h3
                className="text-lg font-extrabold text-[#0D1B3E] mb-0.5 leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {c.name}
              </h3>
              <p
                className="text-xs font-semibold text-[#1A3C8F] mb-3 uppercase tracking-wider"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {c.role}
              </p>
              <p
                className="text-sm text-slate-500 leading-relaxed flex-1"
                style={{ fontFamily: "'Outfit', sans-serif", lineHeight: 1.65 }}
              >
                {c.bio}
              </p>
              <div
                className="mt-4 pt-4 border-t border-slate-100"
              >
                <p
                  className="text-[11px] font-medium text-slate-400 uppercase tracking-widest"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {c.specialty}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
