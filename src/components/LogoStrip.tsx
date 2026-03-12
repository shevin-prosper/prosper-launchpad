const universities = [
  { name: "University of Manchester", country: "UK" },
  { name: "Deakin University", country: "Australia" },
  { name: "University of Toronto", country: "Canada" },
  { name: "Monash University", country: "Australia" },
  { name: "TU Berlin", country: "Germany" },
  { name: "University of Edinburgh", country: "UK" },
  { name: "University of Auckland", country: "New Zealand" },
  { name: "University of Leeds", country: "UK" },
  { name: "University of Sydney", country: "Australia" },
  { name: "York University", country: "Canada" },
  { name: "Middlesex University", country: "UK" },
  { name: "Cardiff University", country: "UK" },
  { name: "University of Melbourne", country: "Australia" },
  { name: "Dublin City University", country: "Ireland" },
];

const UniChip = ({ name, country }: { name: string; country: string }) => (
  <div
    className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-xl border border-slate-200 bg-white"
    style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
  >
    <div
      className="w-1.5 h-6 rounded-full flex-shrink-0"
      style={{ background: "linear-gradient(180deg, #1A3C8F, #2952CC)" }}
    />
    <div>
      <p
        className="text-[13px] font-bold text-[#0D1B3E] leading-tight"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        {name}
      </p>
      <p
        className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mt-0.5"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        {country}
      </p>
    </div>
  </div>
);

const LogoStrip = () => (
  <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
    <div className="container mx-auto px-6 mb-6 text-center">
      <p
        className="text-xs font-semibold text-slate-400 uppercase tracking-widest"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        Proud partners with 40+ universities worldwide
      </p>
    </div>

    {/* Marquee track */}
    <div className="relative overflow-hidden">
      <div
        className="flex gap-4 w-max animate-marquee"
        style={{ animationDuration: "38s" }}
      >
        {[...universities, ...universities].map((u, i) => (
          <UniChip key={i} name={u.name} country={u.country} />
        ))}
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
    </div>
  </section>
);

export default LogoStrip;
