'use client'

import SectionHeader from "./Header"

export default function ServicesFlow() {
  const steps = [
    {
      step: "1",
      title: "Dizajn a konštrukcia",
      text: "Inteligentný návrh pre rýchlejší výsledok a výhodné podmienky. Navrhujeme zvárané zostavy, brány, prípravky a kovový nábytok podľa potrieb zákazníka."
    },
    {
      step: "2",
      title: "Výroba",
      text: "Čo navrhneme, to aj vyrobíme — rámové konštrukcie, brány, kontrolné a montážne prípravky, kovový nábytok a ďalšie kusové aj sériové diely."
    },
    {
      step: "3",
      title: "Montáž",
      text: "Presná montáž vyrobených zostáv: brán, plotov, rámov a nábytku — podľa dohody a s dôrazom na kvalitu."
    },
    {
      step: "4",
      title: "Servis",
      text: "Záručný aj pozáručný servis našich výrobkov — spoľahlivá podpora po dodaní."
    }
  ]

  return (
    <section id="sluzby" className="bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeader
          eyebrow="Služby vo výrobe"
          title="Kovovýroba v 4 krokoch"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {steps.map((item) => (
            <article
              key={item.step}
              className="relative group p-6 xl:p-8 transition hover:bg-slate-50"
            >
              {/* Hexagon number badge */}
              <div className="mb-6 flex justify-center md:justify-start">
                <div className="relative w-14 h-12">
                  {/* outer black hexagon */}
                  <div className="absolute inset-0 clip-hexagon bg-slate-900"></div>
                  {/* inner white hexagon */}
                  <div className="absolute inset-[1px] clip-hexagon bg-white flex items-center justify-center font-primary font-semibold text-slate-900">
                    {item.step}
                  </div>
                </div>
              </div>

              <h3 className="font-primary text-xl font-semibold text-center md:text-left">
                {item.title}
              </h3>

              <p className="mt-3 font-secondary text-sm leading-relaxed text-slate-700 text-center md:text-left">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
