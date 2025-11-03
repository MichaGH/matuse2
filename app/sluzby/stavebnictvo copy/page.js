'use client'

import Image from 'next/image'
import SectionHeader from '@/components/homepage/Header'
import CTAButton1 from '@/components/UI/CTAButton1'

export default function StavebnictvoPage() {
  return (
    <main id="stavebnictvo" className="bg-white text-slate-900">
      {/* SECTION 1 — Intro (image + copy) */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14">
            {/* LEFT — text */}
            <div>
              <SectionHeader
                eyebrow="Služby v stavebníctve"
                title="Zateplenie rodinných domov — odborne a čisto"
                align="left"
              />
              <p className="mt-2 font-secondary text-slate-700 leading-relaxed max-w-prose">
                Realizujeme kompletné zateplenie kontaktným systémom (ETICS) s použitím polystyrénu (EPS)
                alebo minerálnej vlny. Každý detail spracovávame technicky správne, s dôrazom na čistotu,
                kvalitu a dlhú životnosť.
              </p>
              <p className="mt-4 font-secondary text-slate-700 leading-relaxed max-w-prose">
                Zateplenie je investícia, ktorá sa vráti: nižšie náklady na vykurovanie, menšia CO₂ stopa
                a nový, estetický vzhľad fasády.
              </p>

              <div className="mt-6">
                <CTAButton1 href="/kontakt" text="Nezáväzný dopyt" />
              </div>
            </div>

            {/* RIGHT — image */}
            <div className="relative h-72 sm:h-96 md:h-[28rem] border border-slate-200 bg-slate-50 overflow-hidden">
              <Image
                src="/images/zateplovanie.webp" // swap for your facade / insulation photo
                alt="Zateplenie fasády — kontaktný systém ETICS"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Benefits + materials (compact) */}
      <section aria-labelledby="benefits-materials">
        <div className="mx-auto max-w-7xl px-6 pb-20">
          {/* 4 badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 bg-slate-200 gap-px">
            {[
              { v: 'Úspora energie', l: 'Nižšie náklady na teplo' },
              { v: 'Správne detaily', l: 'Rohy, ostenia, sokel' },
              { v: 'Dlhá životnosť', l: 'Kvalitné materiály' },
              { v: 'Čistá realizácia', l: 'Presne a v termíne' },
            ].map(({ v, l }, i) => (
              <div key={i} className="bg-white p-6 md:p-8 text-center">
                <div className="font-primary text-base md:text-lg font-semibold tracking-tight">
                  {v}
                </div>
                <div className="mt-1 font-secondary text-[11px] md:text-xs uppercase tracking-wider text-slate-500">
                  {l}
                </div>
              </div>
            ))}
          </div>

          {/* materials line */}
          <p className="mt-6 font-secondary text-sm text-slate-600">
            <span className="font-semibold text-slate-800">Používané materiály: </span>
            EPS • minerálna vlna • lepidlá a stierky • výstužná sieťka • rohovníky • soklové lišty •
            penetrácie • finálne omietky a farby
          </p>

          {/* secondary CTA */}
          <div className="mt-6">
            <CTAButton1 href="/fotogaleria" text="Pozrieť práce" />
          </div>
        </div>
      </section>
    </main>
  )
}
