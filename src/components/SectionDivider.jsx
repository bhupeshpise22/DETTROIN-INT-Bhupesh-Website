export default function SectionDivider({ tone = "light" }) {
  const line = tone === "light" ? "bg-ink/15" : "bg-ivory/20";
  const dot = tone === "light" ? "text-gold-dark" : "text-gold";
  return (
    <div className="flex items-center justify-center gap-4 py-2" aria-hidden="true">
      <span className={`h-px w-16 sm:w-28 ${line}`} />
      <svg width="14" height="14" viewBox="0 0 14 14" className={dot}>
        <path d="M7 0 L9 5 L14 7 L9 9 L7 14 L5 9 L0 7 L5 5 Z" fill="currentColor" />
      </svg>
      <span className={`h-px w-16 sm:w-28 ${line}`} />
    </div>
  );
}