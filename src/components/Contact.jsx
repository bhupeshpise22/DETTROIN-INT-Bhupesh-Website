import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

const INFO = [
  {
    icon: MapPin,
    label: "Campus",
    value: "Located at Ramghat Road, Aligarh 202001, Uttar Pradesh, India.",
  },
  {
    icon: Phone,
    label: "Admissions Desk",
    value: "+91 98765 43210",
  },
  {
    icon: Mail,
    label: "Email",
    value: "admissions@excellence.edu",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    grade: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "Enter a valid email address.";
    if (!form.message.trim())
      next.message = "Tell us a little about your enquiry.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="bg-ivory py-24 sm:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-label text-[13px] uppercase tracking-[0.35em] text-gold">
            Get in Touch
          </span>

          <h2 className="h-display mt-5 text-3xl text-ink sm:text-4xl lg:text-[2.75rem]">
            Let&rsquo;s talk about your child&rsquo;s next classroom.
          </h2>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {INFO.map((i) => (
              <div
                key={i.label}
                className="card-surface flex items-start gap-4 p-6"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/10 text-gold-dark">
                  <i.icon size={19} strokeWidth={1.75} />
                </div>

                <div>
                  <p className="font-label text-[11px] uppercase tracking-wider text-charcoal/45">
                    {i.label}
                  </p>

                  <p className="mt-1 font-body text-sm text-charcoal/80">
                    {i.value}
                  </p>
                </div>
              </div>
            ))}

            {/* Google Map */}
            <div className="card-surface h-40 overflow-hidden rounded-3xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.320478142607!2d78.08297827527257!3d27.89213707607715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974b7a50c9c6457%3A0x5cd02be223374122!2sExcellence%20International%20School%20%7C%20Kids%20Play%20School%20in%20Aligarh%20%7C%20kindergarten%20in%20aligarh%20%7C%20Kids%20Play%20school%20in%20Aligarh%20%7C!5e0!3m2!1sen!2sin!4v1784998870912!5m2!1sen!2sin"
                className="h-full w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                title="Excellence International School Location"
              />
            </div>
          </div>

          <div className="card-surface p-8 sm:p-10">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex h-full min-h-[320px] flex-col items-center justify-center text-center"
              >
                <CheckCircle2
                  className="mb-4 text-sage"
                  size={40}
                  strokeWidth={1.5}
                />

                <h3 className="font-display text-xl text-ink">
                  Enquiry received
                </h3>

                <p className="mt-2 max-w-sm font-body text-sm text-charcoal/60">
                  Thank you, {form.name.split(" ")[0]}. Our admissions desk will
                  reach out within one working day.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="font-label text-xs uppercase tracking-wider text-charcoal/60"
                    >
                      Parent / Guardian Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={update("name")}
                      aria-invalid={!!errors.name}
                      aria-describedby={
                        errors.name ? "name-error" : undefined
                      }
                      className="mt-2 w-full rounded-xl border border-ink/15 bg-ivory px-4 py-3 font-body text-sm text-charcoal outline-none transition-colors focus:border-gold"
                      placeholder="Jane Doe"
                    />

                    {errors.name && (
                      <p
                        id="name-error"
                        className="mt-1.5 text-xs text-red-600"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="grade"
                      className="font-label text-xs uppercase tracking-wider text-charcoal/60"
                    >
                      Grade of Interest
                    </label>

                    <input
                      id="grade"
                      type="text"
                      value={form.grade}
                      onChange={update("grade")}
                      className="mt-2 w-full rounded-xl border border-ink/15 bg-ivory px-4 py-3 font-body text-sm text-charcoal outline-none transition-colors focus:border-gold"
                      placeholder="e.g. Grade 6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="font-label text-xs uppercase tracking-wider text-charcoal/60"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    aria-invalid={!!errors.email}
                    aria-describedby={
                      errors.email ? "email-error" : undefined
                    }
                    className="mt-2 w-full rounded-xl border border-ink/15 bg-ivory px-4 py-3 font-body text-sm text-charcoal outline-none transition-colors focus:border-gold"
                    placeholder="you@example.com"
                  />

                  {errors.email && (
                    <p
                      id="email-error"
                      className="mt-1.5 text-xs text-red-600"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="font-label text-xs uppercase tracking-wider text-charcoal/60"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    className="mt-2 w-full resize-none rounded-xl border border-ink/15 bg-ivory px-4 py-3 font-body text-sm text-charcoal outline-none transition-colors focus:border-gold"
                    placeholder="Tell us about your child and what you're looking for..."
                  />

                  {errors.message && (
                    <p
                      id="message-error"
                      className="mt-1.5 text-xs text-red-600"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full sm:w-auto"
                >
                  Send Enquiry <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}