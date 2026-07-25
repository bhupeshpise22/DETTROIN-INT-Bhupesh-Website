import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionDivider from "./SectionDivider";

import Campus1 from "../assets/Campus1.jpg";
import Campus2 from "../assets/Campus2.jpg";
import Campus3 from "../assets/Campus3.jpg";
import Campus4 from "../assets/Campus4.jpg";
import Campus5 from "../assets/Campus5.jpg";
import Campus6 from "../assets/Campus6.jpg";
import Campus7 from "../assets/Campus7.jpg";
import Campus8 from "../assets/Campus8.jpg";

const IMAGES = [
  {
    id: 1,
    src: Campus1,
    caption: "Founders' Day assembly",
    tall: true,
  },
  {
    id: 2,
    src: Campus2,
    caption: "Football Finals",
    tall: false,
  },
  {
    id: 3,
    src: Campus3,
    caption:"Robotics club, Grade 8",
    tall: false,
  },
  {
    id: 4,
    src: Campus4,
    caption: "Early Years reading corner",
    tall: true,
  },
  {
    id: 5,
    src: Campus5,
    caption: "Grade 4 science fair",
    tall: true,
  },
  {
    id: 6,
    src: Campus6,
    caption: "Diploma Exhibition",
    tall: false,
  },
  {
    id: 7,
    src: Campus7,
    caption: "Winter concert rehearsal",
    tall: false,
  },
  {
    id: 8,
    src: Campus8,
    caption: "Graduation, Class of 2026",
    tall: true,
  },
];

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null);

  const close = () => setOpenIndex(null);
  const next = () => setOpenIndex((i) => (i + 1) % IMAGES.length);
  const prev = () => setOpenIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);

  useEffect(() => {
    if (openIndex === null) return;

    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  return (
    <section id="gallery" className="bg-ivory py-24 sm:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-label text-[13px] uppercase tracking-[0.35em] text-gold">
            Life at Campus
          </span>

          <h2 className="h-display mt-5 text-3xl text-ink sm:text-4xl lg:text-[2.75rem]">
            A year on campus, in moments.
          </h2>

          
        </div>

        <div className="mt-14 columns-2 gap-4 sm:gap-5 lg:columns-4">
          {IMAGES.map((img, i) => (
            <motion.button
              key={img.id}
              onClick={() => setOpenIndex(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              className={`group relative mb-4 block w-full overflow-hidden rounded-2xl sm:mb-5 ${
                img.tall ? "aspect-[3/4]" : "aspect-square"
              }`}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-label text-xs uppercase tracking-wider text-ivory">
                  {img.caption}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image viewer"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-ivory/20 text-ivory hover:border-gold hover:text-gold"
              aria-label="Close gallery"
            >
              <X size={18} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 grid h-11 w-11 place-items-center rounded-full border border-ivory/20 text-ivory hover:border-gold hover:text-gold sm:left-8"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>

            <motion.div
              key={openIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl"
            >
              <img
                src={IMAGES[openIndex].src}
                alt={IMAGES[openIndex].caption}
                className="h-full w-full object-cover"
              />

              <p className="absolute bottom-6 left-6 right-6 font-label text-sm uppercase tracking-wider text-ivory">
                {IMAGES[openIndex].caption}
              </p>
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 grid h-11 w-11 place-items-center rounded-full border border-ivory/20 text-ivory hover:border-gold hover:text-gold sm:right-8"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-20">
        <SectionDivider tone="light" />
      </div>
    </section>
  );
}