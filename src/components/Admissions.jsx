import { motion } from "framer-motion";
import { Mail, MapPin, FileCheck2, ArrowRight } from "lucide-react";

const STEPS = [
  {
    icon: Mail,
    step: "01",
    title: "Enquire",
    text: "Share your child's age and current grade — admissions responds within one working day.",
  },
  {
    icon: MapPin,
    step: "02",
    title: "Visit Campus",
    text: "Walk the classrooms, meet the grade-level lead teacher, and sit in on a live lesson.",
  },
  {
    icon: FileCheck2,
    step: "03",
    title: "Enroll",
    text: "A short readiness conversation for the student, then an offer — typically within a week.",
  },
];

export default function Admissions() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sage-dark via-sage to-ink py-24 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#F8F5EE 1px, transparent 1px), linear-gradient(90deg, #F8F5EE 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />
      <div className="container-page relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-label text-[13px] uppercase tracking-[0.35em] text-gold">Admissions 2026&ndash;27</span>
          <h2 className="h-display mt-5 text-3xl text-ivory sm:text-4xl lg:text-[2.75rem]">
            Three conversations between here and enrolled.
          </h2>
          <p className="mt-4 font-body text-ivory/70">
            Limited seats remain in Kindergarten, Grade 6, and Grade 9 for the coming session.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl border border-ivory/15 bg-ivory/[0.06] p-7 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-ivory/15 text-ivory">
                  <s.icon size={20} strokeWidth={1.75} />
                </div>
                <span className="font-display text-3xl text-ivory/25">{s.step}</span>
              </div>
              <h3 className="mt-6 font-display text-lg text-ivory">{s.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ivory/65">{s.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-ivory px-8 py-4 font-label text-sm font-medium uppercase tracking-wider text-ink transition-all hover:bg-gold hover:shadow-gold"
          >
            Start Your Enquiry <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
