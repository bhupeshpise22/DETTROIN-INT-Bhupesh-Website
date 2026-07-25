import { motion } from "framer-motion";
import heroBg from "../assets/hero-bg.jpg";
import schoolLogo from "../assets/school-logo.png";
import { ArrowRight, PlayCircle, ChevronDown } from "lucide-react";
import Crest from "./Crest";
import Counter from "./Counter";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const STATS = [
  { to: 32, suffix: "+", label: "Years of Legacy" },
  { to: 1800, suffix: "+", label: "Students Nurtured" },
  { to: 9, suffix: ":1", label: "Student–Faculty Ratio" },
  { to: 21, suffix: "", label: "Countries Represented" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink pb-20 pt-32"
    >
      {/* Animated background layer */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">

        {/* Background Image */}
        <img
          src={heroBg}
          alt="School Background"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />

        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#132A4DCC_0%,_#0B1B33E6_55%,_#071328_100%)]" />

        <motion.div
          className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-sage/25 blur-[110px]"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-32 top-1/3 h-[380px] w-[380px] rounded-full bg-gold/20 blur-[110px]"
          animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-ink-light/40 blur-[100px]"
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* fine grid texture */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#C9A24B 1px, transparent 1px), linear-gradient(90deg, #C9A24B 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* large rotating crest ring, ambient */}
        <div className="absolute right-[-140px] top-[-140px] opacity-40 sm:opacity-60">
          <Crest size={420} />
        </div>
      </div>

      <div className="container-page relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <motion.div variants={item}>
            <img
              src={schoolLogo}
              alt="School Logo"
              className="mb-6 h-28 w-28 object-contain mx-auto"
            />
          </motion.div>

          <motion.div
          variants={item}
          className="flex items-center justify-center gap-4 text-gold"
         >
          <span className="h-px w-10 bg-gold/60"></span>

          <span className="font-label text-[13px] uppercase tracking-[0.35em] text-gold">
          IB &amp; CBSE Affiliated
          </span>

         <span className="h-px w-10 bg-gold/60"></span>
         </motion.div>

          <motion.h1
            variants={item}
            className="h-display mt-6 text-[2.6rem] text-ivory sm:text-6xl lg:text-[4.2rem]"
          >
            Where curiosity
            <br />
            becomes{" "}
            <span className="relative inline-block text-gold">
              character
              <svg
                className="absolute -bottom-2 left-0 w-full text-gold/60"
                viewBox="0 0 300 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9C60 2 240 2 298 9"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-balance font-body text-base leading-relaxed text-ivory/70 sm:text-lg"
          >
            Excellence International School, Aligarh is dedicated to providing
            modern education with a balanced approach to academics,
            co-curricular activities, and character development.

            The school believes that education should develop knowledge,
            critical thinking, discipline, and life skills. With a
            student-focused approach and supportive learning environment, the
            institution helps children grow into confident and responsible
            individuals.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="btn-primary">
              Book a Campus Tour <ArrowRight size={16} />
            </a>
            <a href="#academics" className="btn-ghost">
              <PlayCircle size={16} /> Explore Academics
            </a>
          </motion.div>
        </motion.div>

        {/* stats */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-8 border-t border-ivory/10 pt-10 sm:grid-cols-4"
        >
          {STATS.map((s) => (
            <motion.div key={s.label} variants={item} className="text-center">
              <div className="font-display text-3xl text-gold sm:text-4xl">
                <Counter to={s.to} suffix={s.suffix} />
              </div>
              <div className="mt-2 font-label text-[11px] uppercase tracking-wider text-ivory/55">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-ivory/50 sm:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll to About section"
      >
        <span className="font-label text-[10px] uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown size={16} />
      </motion.a>
    </section>
  );
}