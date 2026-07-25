import { motion } from "framer-motion";

/**
 * The recurring signature motif of the site — a medallion crest built from
 * concentric rings and a laurel-inspired mark, standing in for a school seal.
 * Used large + animated in the Hero, and small + static as section dividers.
 */
export default function Crest({ size = 120, spin = true, className = "" }) {
  return (
    <div
      className={`relative shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {spin && (
        <motion.svg
          viewBox="0 0 200 200"
          className="absolute inset-0 h-full w-full animate-spinSlower text-gold/70"
          fill="none"
        >
          <circle
            cx="100"
            cy="100"
            r="96"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeDasharray="2 6"
          />
        </motion.svg>
      )}
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        <circle cx="100" cy="100" r="82" stroke="#C9A24B" strokeWidth="1.25" fill="none" />
        <circle cx="100" cy="100" r="70" stroke="#C9A24B" strokeWidth="1" fill="none" opacity="0.6" />
        <path
          d="M100 40 L112 92 L164 100 L112 108 L100 160 L88 108 L36 100 L88 92 Z"
          fill="none"
          stroke="#C9A24B"
          strokeWidth="1.25"
        />
        <circle cx="100" cy="100" r="10" fill="#C9A24B" />
      </svg>
    </div>
  );
}
