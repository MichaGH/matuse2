'use client'

import { Wrench, Scissors, Ruler, Hammer, Drill, Cog } from 'lucide-react'
import SectionHeader from './Header'

export default function Capabilities10() {
  const bgImage = '/images/welder4.png'

  const items = [
    { title: 'Rezanie laserom', desc: 'Presné vyrezávanie dielov podľa výkresov. Čisté hrany, opakovateľná kvalita.', Icon: Scissors },
    { title: 'Ohýbanie', desc: 'Tvarovanie plechov a profilov s dôrazom na presné uhly a rozmery.', Icon: Ruler },
    { title: 'Rezanie', desc: 'Delenie materiálu pre kusovú aj sériovú výrobu podľa požiadaviek projektu.', Icon: Wrench },
    { title: 'Vŕtanie', desc: 'Presné otvory a zahlbenia pripravené na montáž a následné operácie.', Icon: Drill },
    { title: 'Zváranie', desc: 'Pevné, čisté spoje pre dlhú životnosť konštrukcií (TIG • MIG • MAG).', Icon: Hammer },
    { title: 'Montáž', desc: 'Kompletácia zostáv u nás alebo priamo u zákazníka — presne podľa dohody.', Icon: Cog },
  ]

  return (
    <section id="technologie" className="relative text-white overflow-hidden">
      {/* --- Background --- */}
      
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden
      />
      {/* Dark film for clarity */}
      <div className="absolute inset-0 bg-slate-950/40" aria-hidden />
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />

      {/* --- Content --- */}
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="Kovovýroba"
          title="Presnosť, pevnosť, kontrola — od dielne po montáž"
          align="center"
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {items.map(({ title, desc, Icon }, i) => (
            <article
              key={i}
              className="group relative flex flex-col justify-between border border-white/10 
                         bg-black/60 backdrop-blur-[3px]
                         p-8 md:p-10 transition hover:border-blue-500/40 hover:bg-black/70 h-full"
            >
              {/* Corner ticks */}
              <span className="absolute left-0 top-0 h-6 w-px bg-blue-500" aria-hidden />
              <span className="absolute left-0 top-0 h-px w-6 bg-blue-500" aria-hidden />

              <div>
                {/* Icon */}
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center border border-white/20 bg-black/40 shadow-[0_0_20px_rgba(0,0,0,0.4)]">
                  <Icon className="h-7 w-7 text-blue-400" />
                </div>

                {/* Title */}
                <h3 className="font-primary text-xl md:text-2xl font-semibold tracking-tight text-center text-white">
                  {title}
                </h3>

                <div className="mx-auto mt-3 h-px w-12 bg-white/15" />

                {/* Description */}
                <p className="mt-4 font-secondary text-[15px] leading-relaxed text-slate-300 text-center max-w-[46ch] mx-auto">
                  {desc}
                </p>
              </div>

              {/* Bottom line accent */}
              <div className="mt-8 h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
