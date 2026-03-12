import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── Floating UI card: Profile ─── */
const ProfileCard = ({ scale = 1 }: { scale?: number }) => (
  <div
    style={{ transformOrigin: 'top right' }}
    className="absolute top-[12%] right-[8%] bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-2xl w-44"
  >
    <div className="flex items-center gap-2 mb-2">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-pink-400 flex items-center justify-center text-white text-xs font-bold">A</div>
      <div>
        <p className="text-[10px] text-gray-400 leading-none">Personal</p>
        <p className="text-xs font-semibold text-gray-900">£6,012.40</p>
      </div>
    </div>
    <button className="w-full text-[10px] bg-gray-900 text-white rounded-lg py-1.5 font-medium">Accounts</button>
  </div>
);

/* ─── Floating UI card: Salary notification ─── */
const SalaryCard = () => (
  <div
    style={{ transformOrigin: 'bottom left' }}
    className="absolute bottom-[18%] left-[6%] bg-gray-900/95 backdrop-blur-sm rounded-2xl px-3 py-2.5 shadow-2xl flex items-center gap-2.5"
  >
    <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    </div>
    <div>
      <p className="text-[10px] text-gray-400 leading-none">Salary</p>
      <p className="text-xs font-semibold text-emerald-400">+£2,550</p>
    </div>
  </div>
);

/* ─── Person Card visual (gradient background + subtle person shape) ─── */
function PersonCard({ gradient, initials, color }: { gradient: string; initials: string; color: string }) {
  return (
    <div className={`w-full h-full ${gradient} flex items-end justify-center relative overflow-hidden`}>
      {/* Abstract person silhouette */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className={`w-16 h-16 rounded-full ${color} mb-0 opacity-80`} />
        <div className={`w-28 h-32 rounded-t-full ${color} opacity-60`} />
      </div>
      {/* Initials badge */}
      <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white font-bold text-sm">
        {initials}
      </div>
    </div>
  );
}

/* ─── Side Card (left / right in features grid) ─── */
function SideCard({ gradient, initials, color, floatContent }: {
  gradient: string; initials: string; color: string; floatContent: React.ReactNode;
}) {
  return (
    <div className="relative w-[300px] h-[420px] rounded-3xl overflow-hidden shadow-xl flex-shrink-0">
      <PersonCard gradient={gradient} initials={initials} color={color} />
      {floatContent}
    </div>
  );
}

/* ─── Main Page ─── */
export default function RevolutPage() {
  const scrollZoneRef = useRef<HTMLDivElement>(null);
  const morphWrapperRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const featuresOverlayRef = useRef<HTMLDivElement>(null);
  const featuresHeaderRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const float1Ref = useRef<HTMLDivElement>(null);
  const float2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const startWidth = Math.min(vw * 0.44, 680);
    const startHeight = vh * 0.82;
    const startLeft = vw * 0.52;
    const startTop = vh * 0.09;

    const endWidth = 300;
    const endHeight = 420;
    const endLeft = vw / 2 - 150;
    const endTop = vh * 0.31;

    const scaleRatio = endWidth / startWidth;

    const el = morphWrapperRef.current;
    if (!el) return;

    gsap.set(el, {
      position: 'absolute',
      left: startLeft,
      top: startTop,
      width: startWidth,
      height: startHeight,
      borderRadius: 16,
      zIndex: 20,
    });

    gsap.set([float1Ref.current, float2Ref.current], { scale: 1 });
    gsap.set(featuresHeaderRef.current, { opacity: 0, y: 24 });
    gsap.set(leftCardRef.current, { opacity: 0, x: -180 });
    gsap.set(rightCardRef.current, { opacity: 0, x: 180 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollZoneRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5,
        },
      });

      /* 1. Fade out hero text */
      tl.to(heroTextRef.current, { opacity: 0, y: -50, ease: 'none' }, 0);

      /* 2. Morph image from hero to card */
      tl.to(el, {
        left: endLeft,
        top: endTop,
        width: endWidth,
        height: endHeight,
        borderRadius: 24,
        ease: 'none',
      }, 0.05);

      /* 3. Scale floating UI cards proportionally */
      tl.to([float1Ref.current, float2Ref.current], {
        scale: scaleRatio,
        ease: 'none',
      }, 0.05);

      /* 4. Fade features header in */
      tl.to(featuresHeaderRef.current, { opacity: 1, y: 0, ease: 'power2.out', duration: 0.3 }, 0.6);

      /* 5. Slide side cards in */
      tl.to(leftCardRef.current, { x: 0, opacity: 1, ease: 'power2.out', duration: 0.35 }, 0.75);
      tl.to(rightCardRef.current, { x: 0, opacity: 1, ease: 'power2.out', duration: 0.35 }, 0.75);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="revolut-page" style={{ background: '#f0f4f8', fontFamily: "'DM Sans', 'Outfit', sans-serif" }}>

      {/* ── NAVBAR ── */}
      <nav style={{ background: '#f0f4f8' }} className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 border-b border-black/5 backdrop-blur-md bg-[#f0f4f8]/90">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gray-900 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" stroke="black" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
          </div>
          <span className="font-bold text-gray-900 text-lg tracking-tight">Revolut</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Personal', 'Business', 'Kids & Teens', 'Company'].map(link => (
            <a key={link} href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">{link}</a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-gray-700 font-medium hover:text-gray-900 transition-colors">Log in</a>
          <a href="#" className="text-sm font-semibold bg-white text-gray-900 border border-gray-200 rounded-full px-5 py-2 hover:bg-gray-50 transition-all shadow-sm">Sign up</a>
        </div>
      </nav>

      {/* ── SCROLL ZONE (Hero → Features transition) ── */}
      <div ref={scrollZoneRef} className="relative" style={{ height: '380vh' }}>
        <div className="sticky top-0 h-screen overflow-hidden" style={{ background: '#f0f4f8' }}>

          {/* Hero text — left column */}
          <div
            ref={heroTextRef}
            className="absolute left-0 top-0 bottom-0 flex items-center pl-16 pr-8"
            style={{ width: '48%', zIndex: 10 }}
          >
            <div>
              <h1
                className="font-black leading-[1.0] tracking-tight text-gray-900 mb-6"
                style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)', letterSpacing: '-0.03em' }}
              >
                Change the way<br />you money.
              </h1>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 max-w-md" style={{ fontWeight: 400 }}>
                Home or away, local or global — move freely between countries and currencies. Sign up for free, in a tap.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold rounded-full px-7 py-3.5 text-sm hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/20"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
                Download the app
              </a>
            </div>
          </div>

          {/* The morphing image wrapper — absolutely positioned, animated by GSAP */}
          <div
            ref={morphWrapperRef}
            className="overflow-hidden shadow-2xl shadow-gray-400/30"
            style={{ position: 'absolute', zIndex: 20, willChange: 'left, top, width, height, border-radius' }}
          >
            {/* Background gradient (woman) */}
            <div className="w-full h-full bg-gradient-to-br from-rose-200 via-violet-200 to-indigo-300 relative">
              {/* Abstract woman silhouette */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-rose-300/60 mb-0" />
                <div className="w-36 h-40 rounded-t-full bg-violet-300/50" />
              </div>
              {/* Grain overlay */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
                }}
              />
            </div>

            {/* Floating card 1: Profile */}
            <div ref={float1Ref} style={{ transformOrigin: 'top right', position: 'absolute', top: '12%', right: '8%' }}>
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-2xl w-44">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-pink-400 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">A</div>
                  <div>
                    <p className="text-[10px] text-gray-400 leading-none mb-0.5">Personal</p>
                    <p className="text-xs font-semibold text-gray-900">£6,012.40</p>
                  </div>
                </div>
                <button className="w-full text-[10px] bg-gray-900 text-white rounded-lg py-1.5 font-medium">Accounts</button>
              </div>
            </div>

            {/* Floating card 2: Salary */}
            <div ref={float2Ref} style={{ transformOrigin: 'bottom left', position: 'absolute', bottom: '18%', left: '6%' }}>
              <div className="bg-gray-900/95 backdrop-blur-sm rounded-2xl px-3 py-2.5 shadow-2xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 leading-none mb-0.5">Salary</p>
                  <p className="text-xs font-semibold text-emerald-400">+£2,550</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features overlay — fades in as scroll progresses */}
          <div
            ref={featuresOverlayRef}
            className="absolute inset-0 flex flex-col items-center"
            style={{ zIndex: 10, pointerEvents: 'none' }}
          >
            {/* Features header */}
            <div ref={featuresHeaderRef} className="text-center pt-16 pb-8">
              <button className="border border-gray-300 text-gray-600 text-xs font-semibold rounded-full px-4 py-1.5 mb-5 tracking-wide">
                Move your salary
              </button>
              <h2
                className="font-black text-gray-900 max-w-2xl mx-auto leading-tight tracking-tight"
                style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', letterSpacing: '-0.03em' }}
              >
                Spend smartly, send quickly,<br />sort your salary automatically,<br />and watch your savings grow.
              </h2>
            </div>

            {/* 3-card grid */}
            <div className="flex items-center gap-5 mt-4">
              {/* Left card — man with coffee */}
              <div ref={leftCardRef} className="relative w-[300px] h-[420px] rounded-3xl overflow-hidden shadow-xl flex-shrink-0">
                <div className="w-full h-full bg-gradient-to-br from-amber-100 via-orange-200 to-amber-300 relative">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-amber-400/60 mb-0" />
                    <div className="w-28 h-32 rounded-t-full bg-orange-300/60" />
                  </div>
                  {/* Coffee cup icon */}
                  <div className="absolute top-5 left-5 w-8 h-8 bg-white/40 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
                    </svg>
                  </div>
                </div>
                {/* Floating spend card */}
                <div className="absolute bottom-6 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] text-gray-400">Daily spend</p>
                      <p className="text-sm font-bold text-gray-900">£24.80</p>
                    </div>
                    <span className="text-[10px] bg-amber-100 text-amber-700 font-semibold px-2 py-0.5 rounded-full">Under budget</span>
                  </div>
                </div>
              </div>

              {/* Center placeholder — morph image lands here (invisible placeholder) */}
              <div className="w-[300px] h-[420px] rounded-3xl flex-shrink-0" style={{ visibility: 'hidden' }} />

              {/* Right card — man in blue */}
              <div ref={rightCardRef} className="relative w-[300px] h-[420px] rounded-3xl overflow-hidden shadow-xl flex-shrink-0">
                <div className="w-full h-full bg-gradient-to-br from-sky-200 via-blue-300 to-indigo-400 relative">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-sky-400/60 mb-0" />
                    <div className="w-28 h-32 rounded-t-full bg-blue-400/60" />
                  </div>
                  <div className="absolute top-5 left-5 w-8 h-8 bg-white/40 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
                    </svg>
                  </div>
                </div>
                {/* Floating savings card */}
                <div className="absolute bottom-6 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] text-gray-400">Savings vault</p>
                      <p className="text-sm font-bold text-gray-900">£1,234</p>
                    </div>
                    <span className="text-[10px] bg-sky-100 text-sky-700 font-semibold px-2 py-0.5 rounded-full">+4.25% AER</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── SOCIAL PROOF ── */}
      <section className="px-8 py-24 text-center" style={{ background: '#f0f4f8' }}>
        <div className="max-w-3xl mx-auto mb-16">
          <h2
            className="font-black text-gray-900 tracking-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            Join 70+ million customers worldwide and 12 million in the UK.
          </h2>
        </div>

        {/* Trust badges row */}
        <div className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto">
          {/* App Store */}
          <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-sm border border-gray-100">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="black">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <p className="text-[10px] text-gray-400 leading-none mb-0.5">Download on the</p>
              <p className="text-sm font-bold text-gray-900">App Store</p>
            </div>
          </div>

          {/* Google Play */}
          <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-sm border border-gray-100">
            <svg width="28" height="28" viewBox="0 0 24 24">
              <path fill="#00C853" d="M3 20.5v-17l11 8.5z"/>
              <path fill="#FF6D00" d="M14 12L3 3.5l13.5 7.8z"/>
              <path fill="#2979FF" d="M14 12l3.5 2L3 20.5z"/>
              <path fill="#FFD600" d="M17.5 14L14 12 17.5 10l2 2z"/>
            </svg>
            <div className="text-left">
              <p className="text-[10px] text-gray-400 leading-none mb-0.5">Get it on</p>
              <p className="text-sm font-bold text-gray-900">Google Play</p>
            </div>
          </div>

          {/* Trustpilot */}
          <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-sm border border-gray-100">
            <div className="w-7 h-7 bg-[#00B67A] rounded flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="flex gap-0.5 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill={i < 4 ? "#00B67A" : "#ddd"}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-sm font-bold text-gray-900">4.7 / 5</p>
            </div>
          </div>

          {/* Award badge 1 */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex flex-col items-center justify-center shadow-md shadow-orange-200">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
            </svg>
            <p className="text-[8px] text-white font-bold leading-none mt-0.5">BEST APP</p>
          </div>

          {/* Award badge 2 */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-purple-700 flex flex-col items-center justify-center shadow-md shadow-violet-200">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <p className="text-[8px] text-white font-bold leading-none mt-0.5">AWARD</p>
          </div>

          {/* Award badge 3 */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex flex-col items-center justify-center shadow-md shadow-sky-200">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" strokeWidth="2" stroke="white" fill="none" strokeLinecap="round"/>
            </svg>
            <p className="text-[8px] text-white font-bold leading-none mt-0.5">VERIFIED</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 flex flex-col items-center gap-4">
          <p className="text-gray-400 text-sm font-medium">Ready to get started?</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold rounded-full px-8 py-4 text-sm hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/20"
          >
            Open a free account
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-gray-200 px-8 py-8 flex items-center justify-between" style={{ background: '#f0f4f8' }}>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gray-900 flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><circle cx="12" cy="12" r="10"/></svg>
          </div>
          <span className="font-bold text-gray-900 text-sm">Revolut</span>
        </div>
        <p className="text-gray-400 text-xs">© 2026 Revolut Ltd. All rights reserved.</p>
        <div className="flex gap-4">
          {['Privacy', 'Terms', 'Cookies'].map(l => (
            <a key={l} href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">{l}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}
