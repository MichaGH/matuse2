'use client'

export default function SectionHeader({ eyebrow, title, align = "left" }) {

  const alignment =
    align === "center" ? "text-center" :
    align === "right"  ? "text-right"  :
    "text-left"

  return (
    <header className={`mb-6 ${alignment}`}>
      {eyebrow && (
        <p className="font-secondary stext-[11px] mb-1  tracking-wider uppercase text-slate-500">
          {eyebrow}
        </p>
      )}

      {title && (
        <h2 className="font-primary text-3xl md:text-4xl font-semibold tracking-tight">
          {title}
        </h2>
      )}
    </header>
  )
}
