import React from 'react'

export default function page() {
  return (
    <section
      id="domov"
      className="relative overflow-hidden border-b border-white/10"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-950 to-slate-950" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Copy */}
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-slate-300">
              Kovovýroba • Dizajn → Výroba → Montáž → Servis
            </span>

            <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
              Presná <span className="text-amber-400">kovovýroba</span> od návrhu
              po montáž
            </h1>

            <p className="text-slate-300/90 md:text-lg">
              Navrhujeme a vyrábame zvárané zostavy, brány, prípravky a kovový
              nábytok. Zabezpečujeme{" "}
              <span className="text-slate-200">dizajn a konštrukciu</span>,{" "}
              <span className="text-slate-200">výrobu</span>,{" "}
              <span className="text-slate-200">montáž</span> a{" "}
              <span className="text-slate-200">servis</span> — spoľahlivo a podľa dohody.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#kontakt"
                className="inline-flex items-center rounded-lg bg-amber-400 px-5 py-3 font-semibold text-slate-950 hover:bg-amber-300"
              >
                Získať nezáväznú ponuku
              </a>
              <a
                href="#sluzby"
                className="inline-flex items-center rounded-lg border border-white/10 bg-white/0 px-5 py-3 text-slate-200 hover:bg-white/5"
              >
                Pozrieť služby
              </a>
            </div>

            {/* Secondary line: zatepľovanie as side-offer */}
            <div className="pt-4 text-sm text-slate-400">
              <span className="font-semibold text-slate-300">Zatepľovanie domov</span>{' '}
              ponúkame aj ako doplnkovú službu pre kompletné riešenie.
            </div>
          </div>

          {/* Visual placeholder (swap later for photo/video) */}
          <div
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900"
            aria-hidden="true"
          >
            <div className="absolute inset-0 grid place-items-center">
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                Sem neskôr: foto/galéria/video z výroby
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-40 [background:repeating-linear-gradient(45deg,transparent,transparent_12px,rgba(255,255,255,0.03)_12px,rgba(255,255,255,0.03)_24px)]" />
          </div>
        </div>
      </div>
    </section>
  )
}
