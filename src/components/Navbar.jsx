import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import schoolLogo from "../assets/school-logo.png";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Why Us", href: "#why-us" },
  { label: "Facilities", href: "#facilities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Voices", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ink/95 shadow-soft backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="container-page flex items-center justify-between py-4">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#top");
          }}
          className="flex items-center gap-3"
        >
          {/* School Logo */}
          <img
            src={schoolLogo}
            alt="School Logo"
            className="h-12 w-12 shrink-0 object-contain"
          />

          {/* School Name */}
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg tracking-tight text-ivory sm:text-xl">
              Excellence <span className="text-gold">International</span>
            </span>

            <span className="font-display text-lg tracking-tight text-white sm:text-xl">
              School
            </span>
          </div>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="font-label text-[13px] uppercase tracking-wider text-ivory/80 transition-colors hover:text-gold"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <button
            onClick={() => handleNav("#contact")}
            className="inline-flex items-center gap-1.5 rounded-full bg-gold px-5 py-2.5 font-label text-[13px] font-medium uppercase tracking-wider text-ink transition-all hover:bg-gold-light"
          >
            Register <ArrowUpRight size={15} />
          </button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-ivory/20 text-ivory lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden bg-ink lg:hidden"
          >
            <ul className="container-page flex flex-col gap-1 pb-6 pt-2">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="w-full py-3 text-left font-label text-sm uppercase tracking-wider text-ivory/85 hover:text-gold"
                  >
                    {link.label}
                  </button>
                </li>
              ))}

              <li className="pt-3">
                <button
                  onClick={() => handleNav("#contact")}
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-gold px-5 py-3 font-label text-sm font-medium uppercase tracking-wider text-ink"
                >
                  Register <ArrowUpRight size={15} />
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}