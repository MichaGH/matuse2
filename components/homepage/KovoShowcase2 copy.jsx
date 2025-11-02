'use client'

import Image from 'next/image'
import SectionHeader from './Header'

export default function KovoShowcase2() {
  return (
    <section id="o-nas" className="bg-white text-slate-900">
      <div className="mx-auto max-w-7xl py-20 split-section-content">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14">

          {/* LEFT: Three vertical strips (staggered) */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 px-6">
            <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 translate-y-4 md:translate-y-6">
              <div className="absolute inset-0 border border-slate-200 bg-slate-50 overflow-hidden">
                <Image src="/images/drilling1.png" alt="Vŕtanie v dielni" fill className="object-cover" />
              </div>
            </div>
            <div className="relative h-64 sm:h-72 md:h-80 lg:h-96">
              <div className="absolute inset-0 border border-slate-200 bg-slate-50 overflow-hidden">
                <Image src="/images/welder2.png" alt="Zváranie detail" fill className="object-cover" />
              </div>
            </div>
            <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 -translate-y-4 md:-translate-y-6">
              <div className="absolute inset-0 border border-slate-200 bg-slate-50 overflow-hidden">
                <Image src="/images/welder3.png" alt="Zváranie pri práci" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* RIGHT: Text */}
          <div className="">
            <SectionHeader
              eyebrow="O nás"
              title="Poctivá kovovýroba na mieru"
            />
            <p className="font-secondary text-slate-700 leading-relaxed">
              Navrhujeme a vyrábame zvárané zostavy, brány, kontrolné a montážne prípravky,
              kovový nábytok, zábradlia a rámové konštrukcie. Dôraz kladieme na presnosť,
              čisté spracovanie a dodržané termíny — od rýchleho návrhu až po montáž a následný servis.
            </p>

            <div className="mt-6">
              <a
                href="#technologie"
                className="font-secondary inline-flex items-center px-5 py-2.5 border border-slate-900 hover:bg-slate-900 hover:text-white transition"
              >
                Pozrieť technológie & schopnosti
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
