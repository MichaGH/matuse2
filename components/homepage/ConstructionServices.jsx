'use client'

import Image from 'next/image'
import SectionHeader from './Header'

export default function ConstructionServicesAboutSection() {
  return (
    <section id="stavebnictvo" className="bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14">

          {/* LEFT — Copy (shortened) */}
          <div>
            <SectionHeader
              eyebrow="Služby v stavebníctve"
              title="Zateplenie rodinných domov — odborne a čisto"
              align="left"
            />

            <p className="font-secondary text-slate-700 leading-relaxed max-w-prose">
              ETICS systém s polystyrénom. Čistá realizácia, presné detaily, dlhá životnosť.
            </p>

            {/* compact bullets */}
            <ul className="mt-5 space-y-2">
              {[
                'Polystyrén',
                'Technicky správne detaily bez kompromisov',
                'Úspora energie a trvácny vzhľad fasády',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-secondary text-slate-800">
                  <span className="mt-1 inline-block h-2.5 w-2.5 bg-slate-900" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-7">
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
              src="/images/zateplovanie.webp"
              alt="Zateplenie rodinného domu — systém ETICS"
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
