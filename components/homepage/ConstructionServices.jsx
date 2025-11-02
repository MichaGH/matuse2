'use client'

import Image from 'next/image'
import SectionHeader from './Header'

export default function ConstructionServicesAboutSection() {
  return (
    <section id="stavebnictvo" className="bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14">

          {/* LEFT — Copy */}
          <div>
            <SectionHeader
              eyebrow="Služby v stavebníctve"
              title="Zateplenie rodinných domov — odborne a čisto"
              align="left"
            />

            <p className="font-secondary text-slate-700 leading-relaxed max-w-prose">
              Realizujeme kompletné zateplenie rodinných domov kontaktným systémom (ETICS)
              s použitím polystyrénu alebo minerálnej vlny. Každý detail spracovávame technicky
              správne, s dôrazom na čistotu, kvalitu a dlhú životnosť.
            </p>

            <p className="mt-4 font-secondary text-slate-700 leading-relaxed max-w-prose">
              Zateplenie domu je investícia, ktorá sa vráti — prináša úsporu energie, nižšiu
              produkciu CO₂ a nový, estetický vzhľad fasády. Sme spoľahlivý partner, ktorý
              zaručí, že váš dom bude vyzerať presne podľa predstáv.
            </p>

            {/* compact value list */}
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Polystyrén alebo minerálna vlna',
                'Čisté a technicky správne detaily',
                'Úspora energie a nižšia spotreba tepla',
                'Dlhodobá ochrana fasády',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-secondary text-slate-800">
                  <span className="mt-1 inline-block h-3 w-3 bg-slate-900" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="/sluzby/stavebnictvo"
                className="font-secondary inline-flex items-center px-5 py-2.5 border border-slate-900 hover:bg-slate-900 hover:text-white transition"
              >
                Viac o zatepľovaní
              </a>
            </div>
          </div>

          {/* RIGHT — Image */}
          <div className="relative h-80 sm:h-96 md:h-[28rem] border border-slate-200 bg-slate-50 overflow-hidden">
            <Image
              src="/images/stavebnictvo1.jpg" // replace with real facade / insulation photo
              alt="Zateplenie rodinného domu — kontaktný systém ETICS"
              fill
              className="object-cover"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
