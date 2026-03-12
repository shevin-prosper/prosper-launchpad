import { motion, useReducedMotion } from "framer-motion";

interface Photo {
  src: string;
  label: string;
  caption: string;
}

const photos: Photo[] = [
  {
    src: "/photo-event1.jpg",
    label: "Student Orientation",
    caption: "Connecting aspiring students every month",
  },
  {
    src: "/photo-team.jpg",
    label: "Our Team",
    caption: "Dedicated counselors who've been there",
  },
  {
    src: "/photo-grad.jpg",
    label: "Graduation Day",
    caption: "The moment that makes it all worth it",
  },
  {
    src: "/photo-event2.jpg",
    label: "Info Sessions",
    caption: "Workshops & seminars across Sri Lanka",
  },
  {
    src: "/photo-award.jpg",
    label: "Celebrating Wins",
    caption: "Every offer letter deserves a celebration",
  },
];

const PhotoCard = ({
  photo,
  className,
  index,
  shouldReduceMotion,
}: {
  photo: Photo;
  className?: string;
  index: number;
  shouldReduceMotion: boolean | null;
}) => (
  <motion.div
    initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.97 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ delay: shouldReduceMotion ? 0 : index * 0.08, duration: 0.5 }}
    className={`relative rounded-2xl overflow-hidden group cursor-default ${className}`}
  >
    <img
      src={photo.src}
      alt={photo.label}
      width={600}
      height={400}
      loading="lazy"
      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
    />
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E]/45 via-[#0D1B3E]/10 to-transparent" />

    {/* Label pill */}
    <div className="absolute top-4 left-4">
      <span className="inline-block bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide">
        {photo.label}
      </span>
    </div>

    {/* Caption — slides up on hover */}
    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
      <p className="text-white/90 text-sm font-light leading-relaxed">{photo.caption}</p>
    </div>
  </motion.div>
);

const GallerySection = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-xs font-semibold text-[#1A3C8F] uppercase tracking-widest mb-3">
              Life at Prosper
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-[#0D1B3E] leading-tight tracking-tight">
              More than an agency.{" "}
              <span className="text-gradient-accent">A community.</span>
            </h2>
          </div>
          <p className="text-[#4A5568] text-sm font-light max-w-xs md:text-right leading-relaxed">
            From your first consultation to graduation day — we're with you through every milestone.
          </p>
        </motion.div>

        {/* Desktop bento grid */}
        <div className="hidden md:grid gap-3" style={{
          gridTemplateAreas: '"tall b" "tall c" "d e"',
          gridTemplateColumns: "42% 1fr",
          gridTemplateRows: "270px 270px 260px",
        }}>
          <PhotoCard photo={photos[0]} className="[grid-area:tall]" index={0} shouldReduceMotion={shouldReduceMotion} />
          <PhotoCard photo={photos[1]} className="[grid-area:b]" index={1} shouldReduceMotion={shouldReduceMotion} />
          <PhotoCard photo={photos[2]} className="[grid-area:c]" index={2} shouldReduceMotion={shouldReduceMotion} />
          <PhotoCard photo={photos[3]} className="[grid-area:d]" index={3} shouldReduceMotion={shouldReduceMotion} />
          <PhotoCard photo={photos[4]} className="[grid-area:e]" index={4} shouldReduceMotion={shouldReduceMotion} />
        </div>

        {/* Mobile: 2-col grid */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {/* First photo full width */}
          <div className="col-span-2">
            <PhotoCard photo={photos[0]} className="h-64 w-full" index={0} shouldReduceMotion={shouldReduceMotion} />
          </div>
          {photos.slice(1).map((photo, i) => (
            <PhotoCard key={photo.src} photo={photo} className="h-48 w-full" index={i + 1} shouldReduceMotion={shouldReduceMotion} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
