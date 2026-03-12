import { Linkedin, Facebook, Instagram } from "lucide-react";

const footerLinks = {
  Services: [
    "Counseling & Guidance",
    "University Applications",
    "Visa Support",
    "Scholarship Search",
    "SOP Writing",
  ],
  Destinations: [
    "United Kingdom",
    "Australia",
    "Canada",
    "Germany",
    "New Zealand",
  ],
  Company: [
    "About Us",
    "How It Works",
    "Student Stories",
    "Contact",
  ],
};

const Footer = () => {
  return (
    <footer className="bg-[#0D1B3E] text-white pt-16 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          {/* Brand column */}
          <div>
            <div className="mb-4">
              <img src="/logo.png" alt="Prosper Global Education" className="h-10 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
            </div>
            <p className="text-white/50 text-sm font-light leading-relaxed max-w-[200px]">
              Sri Lanka's most trusted study abroad partner. Free, always.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[
                { icon: <Linkedin size={14} />, label: "LinkedIn" },
                { icon: <Facebook size={14} />, label: "Facebook" },
                { icon: <Instagram size={14} />, label: "Instagram" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-[#2952CC] hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
                {title}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/60 hover:text-white transition-colors duration-200 font-light"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">
            © 2025 Prosper.lk · Colombo, Sri Lanka
          </p>
          <p className="text-xs text-white/35 italic">
            Your future. Abroad. Sorted.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Use"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-white/35 hover:text-white/70 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
