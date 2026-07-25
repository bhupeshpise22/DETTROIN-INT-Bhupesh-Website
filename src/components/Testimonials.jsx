import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const QUOTES = [
  {
    name: "Ananya Rao",
    role: "Parent, Grade 6 & Grade 9",
    quote:
      "What sold us wasn't the campus, it was that the Grade 6 homeroom teacher already knew our daughter loved astronomy before orientation was over. Three years later, that's still how it feels.",
  },
  {
    name: "Devraj Menon",
    role: "Class of 2024, now at NUS Singapore",
    quote:
      "My IB coordinator sat with me every Thursday for a year, not because I was struggling, but because that's just what advisory period was for. I didn't know that was rare until I left.",
  },
  {
    name: "Farida Sheikh",
    role: "Parent, Kindergarten",
    quote:
      "I was nervous about a big campus for a four-year-old. Within a week she knew the librarian's name and the librarian knew hers. That's the whole pitch, honestly.",
  },
  {
    name: "Rohan Kapadia",
    role: "Class of 2023, now at IIT Bombay",
    quote:
      "The robotics lab was open until 7pm most nights and a teacher was usually still there. Nobody made a big deal of it. It was just how the school ran.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir) => {
    setDirection(dir);
    setIndex((i) => (i + dir + QUOTES.length) % QUOTES.length);
  };

  const current = QUOTES[index];

  return (
    <section id="testimonials" className="relative overflow-hidden bg-ink py-24 sm:py-32">
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
        <div className="mx-auto max-w-xl text-center">
          <span className="font-label text-[13px] uppercase tracking-[0.35em] text-gold">In Their Words</span>
          <h2 className="h-display mt-5 text-3xl text-ivory sm:text-4xl">
            Ask the families already here.
          </h2>
        </div>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <Quote
            className="mx-auto mb-6 text-gold/40"
            size={40}
            strokeWidth={1.25}
            aria-hidden="true"
          />

          <div className="relative min-h-[220px] sm:min-h-[180px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <p className="font-display text-xl leading-relaxed text-ivory sm:text-2xl">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <div className="mt-7">
                  <p className="font-label text-sm uppercase tracking-wider text-gold">
                    {current.name}
                  </p>
                  <p className="mt-1 font-body text-sm text-ivory/50">{current.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              onClick={() => go(-1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-ivory/15 text-ivory transition-colors hover:border-gold hover:text-gold"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {QUOTES.map((q, i) => (
                <button
                  key={q.name}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="p-1.5"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? "w-6 bg-gold" : "w-1.5 bg-ivory/25"
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-ivory/15 text-ivory transition-colors hover:border-gold hover:text-gold"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
