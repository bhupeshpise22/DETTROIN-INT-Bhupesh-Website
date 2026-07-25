import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionDivider from "./SectionDivider";

const STAGES = [
  {
    key: "early",
    label: "Early Years",
    range: "Kindergarten – Grade 2",
    focus: "Play-based inquiry",
    description:
      "Children learn through structured play, storytelling, and hands-on discovery — building language, number sense, and the confidence to ask questions out loud.",
    highlights: ["Phonics & emergent literacy", "Montessori-informed math stations", "Daily outdoor learning block"],
  },
  {
    key: "primary",
    label: "Primary",
    range: "Grade 3 – Grade 5",
    focus: "Foundations & inquiry",
    description:
      "The PYP framework anchors every subject to a real-world question, so students practise research, collaboration, and reflection alongside core literacy and numeracy.",
    highlights: ["Cross-disciplinary units of inquiry", "Second language immersion", "Introductory coding & robotics"],
  },
  {
    key: "middle",
    label: "Middle School",
    range: "Grade 6 – Grade 8",
    focus: "Depth & independence",
    description:
      "Students choose electives for the first time, take on longer-form projects, and begin building the study habits that carry them into board-exam years.",
    highlights: ["Elective tracks in STEM & arts", "Personal project (MYP-aligned)", "Peer-led advisory groups"],
  },
  {
    key: "senior",
    label: "Senior Secondary",
    range: "Grade 9 – Grade 12",
    focus: "IB Diploma & CBSE",
    description:
      "A genuine dual pathway — CBSE for board-exam depth, IB Diploma for global breadth — with university counselling starting in Grade 10, not Grade 12.",
    highlights: ["IB Diploma & CBSE streams", "1:1 university counselling", "Internship & research placements"],
  },
];

export default function Academics() {
  const [active, setActive] = useState(STAGES[3].key);
  const stage = STAGES.find((s) => s.key === active);

  return (
    <section id="academics" className="relative bg-ivory py-24 sm:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-label text-[13px] uppercase tracking-[0.35em] text-gold">Academics</span>
          <h2 className="h-display mt-5 text-3xl text-ink sm:text-4xl lg:text-[2.75rem]">
            One school, four stages,
            <span className="text-gold-dark"> a single standard.</span>
          </h2>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="School stages"
          className="mt-14 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {STAGES.map((s) => (
            <button
              key={s.key}
              role="tab"
              aria-selected={active === s.key}
              onClick={() => setActive(s.key)}
              className={`relative rounded-full px-5 py-2.5 font-label text-xs uppercase tracking-wider transition-colors sm:text-sm ${
                active === s.key ? "text-ink" : "text-charcoal/50 hover:text-charcoal"
              }`}
            >
              {active === s.key && (
                <motion.span
                  layoutId="academics-tab-pill"
                  className="absolute inset-0 rounded-full bg-gold"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{s.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="relative mt-12 min-h-[340px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={stage.key}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-10 rounded-[32px] bg-ink px-8 py-10 sm:px-12 sm:py-14 lg:grid-cols-[1.1fr_1fr]"
            >
              <div>
                <span className="font-label text-xs uppercase tracking-widest text-gold">
                  {stage.range}
                </span>
                <h3 className="h-display mt-4 text-2xl text-ivory sm:text-3xl">{stage.focus}</h3>
                <p className="mt-5 max-w-md font-body text-sm leading-relaxed text-ivory/65 sm:text-base">
                  {stage.description}
                </p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 font-label text-xs uppercase tracking-wider text-gold hover:text-gold-light"
                >
                  Request the {stage.label} curriculum guide <ArrowRight size={14} />
                </a>
              </div>

              <ul className="space-y-4 self-center">
                {stage.highlights.map((h, i) => (
                  <li
                    key={h}
                    className="flex items-start gap-4 rounded-2xl border border-ivory/10 bg-ivory/[0.04] p-4"
                  >
                    <span className="mt-0.5 font-display text-lg text-gold/80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-body text-sm text-ivory/80">{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="mt-20">
        <SectionDivider tone="light" />
      </div>
    </section>
  );
}
