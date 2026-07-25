import { motion } from "framer-motion";
import { Compass, Target, Heart } from "lucide-react";
import SectionDivider from "./SectionDivider";
import AboutCampus from "../assets/AboutCampus.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const PILLARS = [
  {
    icon: Compass,
    title: "Our Purpose",
    text: "To educate the whole child — mind, character, and community — so every learner leaves ready to lead with integrity.",
  },
  {
    icon: Target,
    title: "Our Vision",
    text: "A generation of thinkers who ask better questions than they were given, and who treat the world as something worth caring for.",
  },
  {
    icon: Heart,
    title: "Our Promise",
    text: "Every student is known by name, mentored as an individual, and held to a standard that assumes their very best.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-ivory py-24 sm:py-32">
      <div className="container-page">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-soft">
              <img
                src={AboutCampus}
                alt="Excellence International School Campus"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/10" />

              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(#C9A24B 1px, transparent 1px), linear-gradient(90deg, #C9A24B 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <div className="absolute -bottom-8 -right-6 w-52 rounded-2xl bg-white p-5 shadow-soft sm:-right-10 sm:w-60">
              <p className="font-display text-3xl text-gold-dark">98%</p>
              <p className="mt-1 font-label text-[11px] uppercase tracking-wider text-charcoal/60">
                Students Achieve Distinction&rsquo;
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="order-1 lg:order-2"
          >
            <span className="font-label text-[13px] uppercase tracking-[0.35em] text-gold">
              About Excellence International School
            </span>

            <h2 className="h-display mt-5 text-3xl text-ink sm:text-4xl lg:text-[2.75rem]">
              A campus built around
              <span className="text-gold-dark"> paying attention.</span>
            </h2>

            <p className="mt-6 font-body leading-relaxed text-charcoal/70">
              Founded with a vision to nurture confident, compassionate, and
              future-ready learners, Excellence International School, Aligarh is
              committed to delivering quality education in a supportive and
              inspiring environment. With dedicated educators, modern learning
              facilities, and a student-centered approach, we help every child
              grow academically, socially, and personally while building a
              strong foundation for lifelong success.
            </p>

            <div className="mt-10 space-y-6">
              {PILLARS.map((p) => (
                <motion.div
                  key={p.title}
                  variants={fadeUp}
                  className="flex gap-4 border-t border-ink/[0.08] pt-6 first:border-t-0 first:pt-0"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sage/10 text-sage">
                    <p.icon size={20} strokeWidth={1.75} />
                  </div>

                  <div>
                    <h3 className="font-display text-lg text-ink">
                      {p.title}
                    </h3>

                    <p className="mt-1 font-body text-sm leading-relaxed text-charcoal/65">
                      {p.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-20">
        <SectionDivider tone="light" />
      </div>
    </section>
  );
}
