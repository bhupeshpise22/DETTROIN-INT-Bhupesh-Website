import { ArrowUpRight } from "lucide-react";
import schoolLogo from "../assets/school-logo.png";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const SITEMAP = [
  {
    title: "School",
    links: [
      { label: "About", href: "#about" },
      { label: "Academics", href: "#academics" },
      { label: "Why Us", href: "#why-us" },
    ],
  },
  {
    title: "Campus",
    links: [
      { label: "Facilities", href: "#facilities" },
      { label: "Gallery", href: "#gallery" },
      { label: "Voices", href: "#testimonials" },
    ],
  },
  {
    title: "Admissions",
    links: [
      { label: "How to Apply", href: "#contact" },
      { label: "Tuition & Fees", href: "#contact" },
      { label: "Book a Tour", href: "#contact" },
    ],
  },
];

const SOCIALS = [
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
  { icon: FaYoutube, label: "YouTube", href: "#" },
];

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-ink-dark pt-20">
      <div className="container-page">
        <div className="grid gap-12 pb-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-start gap-3">
              {/* School Logo */}
              <img
                src={schoolLogo}
                alt="School Logo"
                className="h-14 w-14 shrink-0 object-contain"
              />

              <div className="flex flex-col leading-tight">
                <span className="font-display text-base tracking-tight text-ivory sm:text-lg">
                  Excellence <span className="text-gold">International</span>
                </span>

                <span className="font-display text-base tracking-tight text-white sm:text-lg">
                  School
                </span>
              </div>
            </div>

            <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-ivory/50">
              Kindergarten through Grade 12.
              <br />
              A campus built on being genuinely known.
            </p>

            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-ivory/15 text-ivory/60 transition-colors hover:border-gold hover:text-gold"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {SITEMAP.map((col) => (
            <div key={col.title}>
              <h4 className="font-label text-xs uppercase tracking-widest text-gold">
                {col.title}
              </h4>

              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <button
                      onClick={() => handleNav(l.href)}
                      className="font-body text-sm text-ivory/55 transition-colors hover:text-ivory"
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-ivory/10 py-8 sm:flex-row sm:items-center">
          <p className="font-body text-xs text-ivory/40">
            © {new Date().getFullYear()} Excellence International School. All
            rights reserved.
          </p>

          <button
            onClick={() => handleNav("#top")}
            className="inline-flex items-center gap-1.5 font-label text-xs uppercase tracking-wider text-ivory/50 hover:text-gold"
          >
            Back to top <ArrowUpRight size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}