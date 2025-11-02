"use client"
import { useState } from "react"
import Link from "next/link"

const navLinks = [
  { label: "Domov", href: "/" },
  { label: "Stavebníctvo", href: "/sluzby/stavebnictvo" },
  { label: "Kovovýroba", href: "/sluzby/vyroba" },
  { label: "Galéria", href: "/galeria" },
  { label: "Kontakt", href: "/kontakt" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* FIXED BAR */}
      <header className="fixed inset-x-0 top-0 z-50 bg-black text-white border-b border-slate-900">
        <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
          {/* Wordmark */}
          <Link href="/" className="font-logo text-3xl font-semibold tracking-[0.06em] uppercase">
            MATUSE
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-secondary">
            {navLinks.map(({ label, href }) => (
              <Link key={href} href={href} className="text-slate-200 hover:text-white">
                {label}
              </Link>
            ))}
            <Link
              href="/dopyt"
              className="rounded-full bg-white text-black px-4 py-2 text-sm hover:opacity-90"
            >
              Nezáväzný dopyt
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-slate-200"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* SPACER so content starts below fixed bar */}
      <div aria-hidden className="h-20" />

      {/* MOBILE OVERLAY MENU (fixed, no layout shift) */}
      {open && (
        <>
          {/* Backdrop */}
          <button
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          />
          {/* Panel */}
          <nav className="fixed top-20 inset-x-0 z-50 bg-black border-t border-slate-900 px-6 py-4 md:hidden font-secondary">
            <div className="mx-auto max-w-6xl flex flex-col gap-3 text-sm">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-slate-200 hover:text-white"
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/dopyt"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-white text-black px-4 py-2 w-fit hover:opacity-90"
              >
                Nezáväzný dopyt
              </Link>
            </div>
          </nav>
        </>
      )}
    </>
  )
}
