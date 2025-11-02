'use client'

import Image from 'next/image'
import SectionHeader from './Header'

export default function AboutSection() {
  return (
    <section className="bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14">

          {/* LEFT — Copy */}
          <div>
            <SectionHeader
              eyebrow="O nás"
              title="Presná kovovýroba, poctivá realizácia"
              align="left"
            />

            <p className="font-secondary text-slate-700 leading-relaxed max-w-prose">
              MATUSE je dielňa zameraná na návrh, výrobu a montáž kovových zostáv. 
              Robíme brány, konštrukcie, prípravky a kovový nábytok – presne, čisto a v dohodnutých termínoch.
            </p>

            <p className="mt-4 font-secondary text-slate-700 leading-relaxed max-w-prose">
              Popri výrobe zabezpečujeme aj zatepľovanie rodinných domov. 
              Jeden tím, zodpovedný prístup a technicky správne postupy od začiatku po odovzdanie.
            </p>

            {/* compact value list */}
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Kusová aj sériová výroba',
                'Dôraz na presnosť a čistotu',
                'Priama, zrozumiteľná komunikácia',
                'Montáž a následný servis',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-secondary text-slate-800">
                  <span className="mt-1 inline-block h-3 w-3 bg-slate-900" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — Single image */}
          <div className="relative h-80 sm:h-96 md:h-[28rem] border border-slate-200 bg-slate-50 overflow-hidden">
            <Image
              src="/images/welder4.png"   // swap for factory/building photo if you prefer
              alt="Výrobná dielňa MATUSE"
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
