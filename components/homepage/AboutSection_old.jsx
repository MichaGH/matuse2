'use client'

import Image from 'next/image'
import SectionHeader from './Header'

export default function AboutSection() {
  return (
    <section className="bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14">

          {/* LEFT: Copy */}
          <div>
            <SectionHeader
              eyebrow="O nás"
              title="MATUSE — presná kovovýroba, poctivá realizácia"
            />

            <p className="font-secondary text-slate-700 leading-relaxed">
              Sme výrobná dielňa zameraná na návrh, výrobu a montáž kovových zostáv a prvkov.
              Zákazková práca, čisté spracovanie, spoľahlivé termíny. Popri kovovýrobe
              realizujeme aj zatepľovanie rodinných domov — technicky správne a vizuálne čisté.
            </p>

            {/* Value bullets */}
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Kusová aj sériová výroba',
                'Dôraz na presnosť a čistotu',
                'Komunikácia bez okľúk',
                'Montáž a dlhodobý servis',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-secondary text-slate-800">
                  <span className="mt-1 h-3 w-3 bg-blue-500"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Stats row */}
            <div className="mt-8 grid grid-cols-3 border border-slate-200">
              <div className="p-4 text-center">
                <div className="font-primary text-2xl font-semibold">10+ rokov</div>
                <div className="font-secondary text-xs text-slate-500 uppercase tracking-wider">
                  skúseností
                </div>
              </div>
              <div className="p-4 text-center border-l border-r border-slate-200">
                <div className="font-primary text-2xl font-semibold">100+</div>
                <div className="font-secondary text-xs text-slate-500 uppercase tracking-wider">
                  projektov
                </div>
              </div>
              <div className="p-4 text-center">
                <div className="font-primary text-2xl font-semibold">1 dielňa</div>
                <div className="font-secondary text-xs text-slate-500 uppercase tracking-wider">
                  kompletné riešenia
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Square photo mosaic */}
          <div className="grid gap-4 md:gap-6">
            {/* Main tall image */}
            <div className="relative h-80 md:h-96 border border-slate-200 bg-slate-50 overflow-hidden">
              <Image
                src="/images/welder4.png"
                alt="Zváranie — hlavná výrobná operácia"
                fill
                className="object-cover"
              />
            </div>

            {/* Two supporting images */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="relative h-40 md:h-48 border border-slate-200 bg-slate-50 overflow-hidden">
                <Image
                  src="/images/laser_cutting2.png"
                  alt="Rezanie laserom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 md:h-48 border border-slate-200 bg-slate-50 overflow-hidden">
                <Image
                  src="/images/metal_bend1.png"
                  alt="Ohýbanie kovu"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
