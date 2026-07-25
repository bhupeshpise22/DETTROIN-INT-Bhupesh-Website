import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Sparkles,
  BookOpenCheck,
  Globe2,
  HeartHandshake,
} from "lucide-react";

const REASONS = [
  {
    icon: Users,
    title: "9:1 Student–Faculty Ratio",
    text: "Small enough that teachers notice a bad Tuesday, not just a bad report card.",
  },
  {
    icon: BookOpenCheck,
    title: "Dual-Curriculum Rigor",
    text: "IB Diploma and CBSE pathways, taught by faculty certified in both — real choice, not a compromise.",
  },
  {
    icon: ShieldCheck,
    title: "Safety as a First Language",
    text: "Biometric access, trained on-campus medical staff, and a counsellor for every 150 students.",
  },
  {
    icon: Globe2,
    title: "21 Nationalities on Campus",
    text: "Classrooms that rehearse the actual, plural world students will graduate into.",
  },
  {
    icon: Sparkles,
    title: "Studio-Grade Arts & Robotics",
    text: "A black-box theatre, a fabrication lab, and a recording studio — used weekly, not for showcase.",
  },
  {
    icon: HeartHandshake,
    title: "Mentorship That Outlasts Graduation",
    text: "Every senior is paired with an alum in their intended field, from application through offer.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-ink py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#C9A24B 1px, transparent 1px), linear-gradient(90deg, #C9A24B 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden="true"
      />
      <div className="container-page relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-label text-[13px] uppercase tracking-[0.35em] text-gold">Why Families Choose Us</span>
          <h2 className="h-display mt-5 text-3xl text-ivory sm:text-4xl lg:text-[2.75rem]">
            Not the biggest school. <br className="hidden sm:block" />
            Deliberately, the most attentive.
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {REASONS.map((r) => (
            <motion.div
              key={r.title}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group rounded-3xl border border-ivory/10 bg-ivory/[0.03] p-8 transition-colors duration-300 hover:border-gold/40 hover:bg-ivory/[0.06]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gold/10 text-gold transition-transform duration-300 group-hover:scale-110">
                <r.icon size={22} strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 font-display text-xl text-ivory">{r.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ivory/60">{r.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}