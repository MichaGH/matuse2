'use client'

import Image from 'next/image'
import SectionHeader from './Header'
import Divider1 from '../UI/Divider1'
import CTAButton1 from '../UI/CTAButton1'

const items = [
    { label: 'rokov skúseností', value: '10+' },
    { label: 'realizovaných projektov', value: '100+' },
    { label: 'členov tímu', value: '6' },
    { label: 'spokojných klientov', value: '80+' },
]

export default function KovoShowcase2() {
    return (
        <div className="bg-deev lg:h-screen ">
            <section className="split-section bg-deev">
                {/* Inner Wrap */}
                <div className="inner-wrap ">
                    {/* LEFT: Three vertical strips (staggered) */}
                    <div className="grid grid-cols-3 gap-4 md:gap-6 lg:px-6">
                        <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 translate-y-4 md:translate-y-6">
                            <div className="absolute inset-0 border border-slate-200 bg-slate-50 overflow-hidden">
                                <Image src="/images/strips/2.png" alt="Vŕtanie v dielni" fill className="object-cover object-center" />
                            </div>
                        </div>
                        <div className="relative h-64 sm:h-72 md:h-80 lg:h-96">
                            <div className="absolute inset-0 border border-slate-200 bg-slate-50 overflow-hidden">
                                <Image src="/images/welder2.png" alt="Zváranie detail" fill className="object-cover" />
                            </div>
                        </div>
                        <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 -translate-y-4 md:-translate-y-6">
                            <div className="absolute inset-0 border border-slate-200 bg-slate-50 overflow-hidden">
                                <Image src="/images/strips/3.png" alt="Zváranie pri práci" fill className="object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Side with header and text */}
                    <div className="text-side">
                        <header className="text-left">
                            <p className="">
                                O nás
                            </p>

                            <h2 className="">
                                Poctivá kovovýroba na mieru
                            </h2>
                        </header>
                        <div className="content space-y-4">
                            <p className="font-secondary text-slate-700 leading-relaxed">
                                Navrhujeme a vyrábame zvárané zostavy, brány, kontrolné a montážne prípravky,
                                kovový nábytok, zábradlia a rámové konštrukcie. Dôraz kladieme na presnosť,
                                čisté spracovanie a dodržané termíny — od rýchleho návrhu až po montáž a následný servis.
                            </p>

                            
                        </div>
                    </div>

                </div>
            </section>
            
            {/* Divider with tight spacing */}
            <div className="mx-auto max-w-7xl px-6 my-8">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            </div>

            {/* Stats: reduce top/bottom to avoid double-padding */}
            <section className="text-slate-900">
                <div className="mx-auto max-w-7xl px-6 py-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 bg-slate-200 gap-px">
                        {items.map((it, i) => (
                            <div key={i} className="bg-white p-6 md:p-8 text-center">
                                <div className="font-primary text-3xl md:text-4xl font-semibold tracking-tight" data-countup>
                                    {it.value}
                                </div>
                                <div className="mt-1 font-secondary text-[11px] md:text-xs uppercase tracking-wider text-slate-500">
                                    {it.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
