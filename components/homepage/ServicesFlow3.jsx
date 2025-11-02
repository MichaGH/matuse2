'use client'

import { Hexagon } from "lucide-react"
import SectionHeader from "./Header"

export default function ServicesFlow3() {

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
            <div className="mx-auto max-w-6xl px-6 py-20 ">

                <SectionHeader
                    eyebrow="Služby vo výrobe"
                    title="Kovovýroba v 4 krokochy"
                    align="center"
                />

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200">

                    {steps.map((item) => (
                        <article key={item.step} className="p-6 xl:p-7">
                            {/* <div className=" font-primary inline-flex h-7 w-7 items-center justify-center border border-slate-900 text- font-semibold mb-4">
                                {item.step}
                            </div> */}

                            <HexBadge number={item.step} />
                            <h3 className="font-primary text-xl font-semibold">
                                {item.title}
                            </h3>

                            <p className="mt-3 font-secondary text-sm leading-relaxed text-slate-700">
                                {item.text}
                            </p>
                        </article>
                    ))}

                </div>
            </div>
        </section>
    )
}


function HexBadge({number}) {
    return (
        <div className="mb-4 relative flex items-center bg-deev">
            <div className="relative">
                <div className="hexagon"></div>
                <div className="absolute  inset-0 flex justify-center items-center font-semibold font-primary">{number}</div>
            </div>
        </div>
    )
}