'use client'

import SectionHeader from "./Header"
import { ShieldCheck, Leaf, PiggyBank, Ruler } from "lucide-react"

export default function ConstructionServices_og() {
  const materials = ["Polystyrén (EPS)", "Minerálna vlna", "ETICS – kontaktný systém"]
  const benefits = [
    { Icon: PiggyBank, title: "Úspora energie", desc: "Výrazné zníženie nákladov na vykurovanie po celé desaťročia." },
    { Icon: Leaf, title: "Nižšia CO₂ stopa", desc: "Menej emisií vďaka nižšej potrebe tepla." },
    { Icon: Ruler, title: "Technicky správne detaily", desc: "Rohy, ostenia, sokel, dilatácie — realizované odborne." },
    { Icon: ShieldCheck, title: "Dlhá životnosť", desc: "Kvalitné materiály a čistá montáž pre trvácny výsledok." },
  ]

  return (
    <section id="stavebnictvo" className="bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeader
          eyebrow="Služby v stavebníctve"
          title="Zateplenie rodinných domov — odborne a čisto"
          align="left"
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT — copy */}
          <div className="lg:col-span-2">
            <p className="font-secondary leading-relaxed text-slate-700 max-w-prose">
              Zameriavame sa na kompletné zateplenie rodinných domov kontaktným systémom (ETICS)
              s použitím polystyrénu (EPS) alebo minerálnej vlny. Zateplenie domu je investíciou
              na celý život — prinesie výraznú úsporu nákladov na vykurovanie, zníži produkciu CO₂
              pri výrobe tepelnej energie a zároveň dá fasáde čistý, trvácny vzhľad.
            </p>

            <p className="font-secondary leading-relaxed text-slate-700 max-w-prose mt-4">
              Sme spoľahlivý partner pre zateplenie rodinného domu. Môžete si byť istí, že váš dom
              bude vyzerať presne tak, ako ste si vysnívali, a že nová fasáda bude bezchybne slúžiť
              po celé desaťročia — pretože zateplenie realizujeme odborne, technicky správne a
              s použitím kvalitných materiálov.
            </p>

            {/* materials pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {materials.map((m, i) => (
                <span
                  key={i}
                  className="font-secondary text-xs tracking-wide uppercase px-3 py-1 border border-slate-200"
                >
                  {m}
                </span>
              ))}
            </div>

            {/* benefits grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map(({ Icon, title, desc }, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center border border-slate-200">
                    <Icon className="h-5 w-5 text-slate-900" />
                  </div>
                  <div>
                    <h4 className="font-primary font-semibold">{title}</h4>
                    <p className="font-secondary text-sm text-slate-700 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/sluzby/stavebnictvo"
                className="font-secondary inline-flex items-center px-5 py-2.5 border border-slate-900 hover:bg-slate-900 hover:text-white transition"
              >
                Zobraziť stavebné služby
              </a>
              <a
                href="/kontakt"
                className="font-secondary inline-flex items-center px-5 py-2.5 border border-slate-200 hover:bg-slate-100 transition"
              >
                Nezáväzný dopyt
              </a>
            </div>
          </div>

          {/* RIGHT — spec/steps card */}
          <aside className="border border-slate-200 p-6">
            <h5 className="font-primary font-semibold text-lg">Postup a detaily</h5>
            <ul className="mt-4 space-y-3 font-secondary text-slate-800">
              {[
                "Obhliadka a návrh skladby zateplenia",
                "Príprava podkladu a montáž soklových líšt",
                "Lepenie a kotvenie izolácie (EPS / MW)",
                "Výstužná vrstva so sieťkou, rohovníky, ostenia",
                "Penetrácia a finálna omietka / farba",
                "Záručný a pozáručný servis",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-2.5 w-2.5 bg-slate-900" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 h-px bg-slate-200" />

            <h6 className="mt-6 font-primary font-semibold">Používané materiály</h6>
            <p className="mt-2 font-secondary text-sm text-slate-700">
              EPS • minerálna vlna • lepidlá a stierky • výstužná sieťka • rohovníky •
              soklové lišty • penetrácie • finálne omietky a farby
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
