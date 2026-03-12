import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollMorphSection() {
  const scrollZoneRef = useRef<HTMLDivElement>(null);
  const morphWrapperRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const featuresHeaderRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const imgFromRef = useRef<HTMLImageElement>(null);
  const imgToRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const startWidth = Math.min(vw * 0.44, 680);
    const startHeight = vh * 0.82;
    const startLeft = vw * 0.52;
    const startTop = vh * 0.09;

    const endWidth = 340;
    const endHeight = 480;
    const endLeft = vw / 2 - 170;
    const endTop = vh * 0.28;

    const scaleRatio = endWidth / startWidth;

    const el = morphWrapperRef.current;
    if (!el) return;

    gsap.set(el, {
      position: "absolute",
      left: startLeft,
      top: startTop,
      width: startWidth,
      height: startHeight,
      borderRadius: 16,
      zIndex: 20,
    });

    gsap.set(featuresHeaderRef.current, { opacity: 0, y: 24 });
    gsap.set(leftCardRef.current, { opacity: 0, x: -180 });
    gsap.set(rightCardRef.current, { opacity: 0, x: 180 });
    gsap.set(imgToRef.current, { opacity: 0 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollZoneRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      tl.to(heroTextRef.current, { opacity: 0, y: -50, ease: "none" }, 0);

      tl.to(
        el,
        { left: endLeft, top: endTop, width: endWidth, height: endHeight, borderRadius: 24, ease: "none" },
        0.05
      );


      /* Cross-fade image.png → photo-grad.jpg as card shrinks to center */
      tl.to(imgFromRef.current, { opacity: 0, ease: "none", duration: 0.3 }, 0.35);
      tl.to(imgToRef.current, { opacity: 1, ease: "none", duration: 0.3 }, 0.35);

      tl.to(featuresHeaderRef.current, { opacity: 1, y: 0, ease: "power2.out", duration: 0.3 }, 0.6);
      tl.to(leftCardRef.current, { x: 0, opacity: 1, ease: "power2.out", duration: 0.35 }, 0.75);
      tl.to(rightCardRef.current, { x: 0, opacity: 1, ease: "power2.out", duration: 0.35 }, 0.75);
    });

    return () => ctx.revert();
  }, []);

  return (
    /* ── SCROLL ZONE: 380vh gives room for the scrub animation ── */
    <div ref={scrollZoneRef} className="relative" style={{ height: "380vh" }}>
      <div
        className="sticky top-0 h-screen overflow-hidden"
        style={{ background: "#ffffff" }}
      >

        {/* ── LEFT TEXT COLUMN (fades out during scroll) ── */}
        <div
          ref={heroTextRef}
          className="absolute left-0 top-0 bottom-0 flex items-center pl-16 pr-8"
          style={{ width: "48%", zIndex: 10 }}
        >
          <div>
            {/* REPLACE: eyebrow label */}
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#1A3C8F", fontFamily: "'Outfit', sans-serif" }}
            >
              What We Do
            </p>

            {/* REPLACE: main heading */}
            <h2
              className="font-black leading-[1.0] tracking-tight text-gray-900 mb-6"
              style={{
                fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
                letterSpacing: "-0.03em",
                fontFamily: "'Syne', sans-serif",
                color: "#0D1B3E",
              }}
            >
              From your<br />
              <span style={{ color: "#1A3C8F" }}>first inquiry.</span>
            </h2>

            {/* REPLACE: body copy */}
            <p
              className="text-base leading-relaxed mb-8 max-w-sm"
              style={{ color: "#5a6478", fontFamily: "'Outfit', sans-serif" }}
            >
              We guide Sri Lankan students through every step — university selection, applications, scholarships, and visa — completely free.
            </p>

            {/* REPLACE: CTA */}
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all hover:opacity-90"
              style={{
                backgroundColor: "#0D1B3E",
                color: "#ffffff",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              Book Free Consultation →
            </a>
          </div>
        </div>

        {/* ── MORPHING CARD (GSAP animates this from hero → center card) ── */}
        <div
          ref={morphWrapperRef}
          className="overflow-hidden shadow-2xl shadow-blue-900/20"
          style={{ position: "absolute", zIndex: 20, willChange: "left, top, width, height, border-radius" }}
        >
          {/* Center card: cross-fades image.png → photo-grad.jpg on scroll */}
          <div className="w-full h-full relative">
            {/* FROM image */}
            <img
              ref={imgFromRef}
              src="/image.png"
              alt="Prosper students"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* TO image (fades in as card morphs) */}
            <img
              ref={imgToRef}
              src="/Grad.png"
              alt="Prosper graduation"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* Subtle dark gradient at bottom */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.35) 100%)" }}
            />
          </div>

        </div>

        {/* ── FEATURES OVERLAY (fades in as animation completes) ── */}
        <div
          className="absolute inset-0 flex flex-col items-center"
          style={{ zIndex: 10, pointerEvents: "none" }}
        >
          {/* Features header */}
          <div ref={featuresHeaderRef} className="text-center pt-24 pb-6" style={{ opacity: 0 }}>


            <h2
              className="font-black max-w-2xl mx-auto leading-tight tracking-tight"
              style={{
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                letterSpacing: "-0.03em",
                color: "#0D1B3E",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              To your Graduation.
            </h2>
            <p
              className="mt-3 max-w-lg mx-auto"
              style={{
                fontSize: "0.95rem",
                color: "#5a6478",
                fontFamily: "'Outfit', sans-serif",
                lineHeight: 1.6,
              }}
            >
              We are there every step of the way.
            </p>
          </div>

          {/* 3-card row */}
          <div className="flex items-center gap-5 mt-2">

            {/* ── LEFT CARD — graduation photo (add photo-graduation.jpg to /public when ready) ── */}
            <div
              ref={leftCardRef}
              className="relative w-[340px] h-[480px] rounded-3xl overflow-hidden shadow-xl flex-shrink-0"
              style={{ opacity: 0, marginTop: "90px" }}
            >
              <img
                src="/Grad2.png"
                alt="Prosper graduation"
                className="w-full h-full object-cover object-center"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.45) 100%)" }}
              />
            </div>

            {/* ── CENTER PLACEHOLDER (morph image lands here — keep invisible) ── */}
            <div className="w-[340px] h-[480px] rounded-3xl flex-shrink-0" style={{ visibility: "hidden" }} />

            {/* ── RIGHT CARD — seminar photo ── */}
            <div
              ref={rightCardRef}
              className="relative w-[340px] h-[480px] rounded-3xl overflow-hidden shadow-xl flex-shrink-0"
              style={{ opacity: 0, marginTop: "110px" }}
            >
              <img
                src="/Grad3.png"
                alt="Prosper graduation"
                className="w-full h-full object-cover object-center"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.45) 100%)" }}
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
