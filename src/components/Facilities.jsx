import { motion } from "framer-motion";
import {
  FlaskConical,
  Dumbbell,
  Palette,
  Library,
  Music,
  Utensils,
} from "lucide-react";

import Lab from "../assets/Lab.jpg";
import LibraryImg from "../assets/Library.jpg";
import Pool from "../assets/Pool.jpg";
import Arts from "../assets/Arts.jpg";
import MusicImg from "../assets/Music.jpg";
import Cafeteria from "../assets/Cafeteria.jpg";

const FACILITIES = [
  {
    icon: FlaskConical,
    title: "Science & Robotics Labs",
    size: "large",
    tone: "sage",
    image: Lab,
  },
  {
    icon: Library,
    title: "The Athenaeum Library",
    size: "small",
    tone: "gold",
    image: LibraryImg,
  },
  {
    icon: Dumbbell,
    title: "Olympic-Length Pool & Turf",
    size: "small",
    tone: "sage",
    image: Pool,
  },
  {
    icon: Palette,
    title: "Fine Arts Studio",
    size: "small",
    tone: "gold",
    image: Arts,
  },
  {
    icon: Music,
    title: "Recording & Performance Hall",
    size: "small",
    tone: "sage",
    image: MusicImg,
  },

];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Facilities() {
  return (
    <section id="facilities" className="bg-white py-24 sm:py-32">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="font-label text-[13px] uppercase tracking-[0.35em] text-gold">
              Campus & Facilities
            </span>

            <h2 className="h-display mt-5 max-w-lg text-3xl text-ink sm:text-4xl lg:text-[2.75rem]">
              Spaces designed to be used, not just photographed.
            </h2>
          </div>

          <p className="max-w-xs font-body text-sm leading-relaxed text-charcoal/60">
            18 acres, 6 dedicated studios, and a campus master plan that puts
            natural light in every classroom.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 auto-rows-[220px]"
        >
          {FACILITIES.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-6 sm:p-7 ${
                f.size === "large"
                  ? "md:col-span-2 xl:row-span-2"
                  : ""
              }`}
            >
              <img
                src={f.image}
                alt={f.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />

              <div
                className="pointer-events-none absolute inset-0 opacity-10 transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "linear-gradient(#C9A24B 1px, transparent 1px), linear-gradient(90deg, #C9A24B 1px, transparent 1px)",
                  backgroundSize: "34px 34px",
                }}
                aria-hidden="true"
              />

              <div className="relative z-10 grid h-11 w-11 place-items-center rounded-full bg-ivory/15 text-gold">
                <f.icon size={20} strokeWidth={1.75} />
              </div>

              <h3 className="relative z-10 font-display text-lg leading-snug text-ivory sm:text-xl">
                {f.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}