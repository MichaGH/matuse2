'use client'

import Image from 'next/image'
import React from 'react'
import SectionHeader from './Header'

const images = [
  { alt: 'Welding', src: '/images/products/original/1.webp' },
  { alt: 'Welding', src: '/images/products/original/2.png' },
  { alt: 'Welding', src: '/images/products/original/3.webp' },
  { alt: 'Welding', src: '/images/products/original/4.webp' },
  { alt: 'Welding', src: '/images/products/original/5.webp' },
]

export default function ProductsShowcase() {
  const materials = [
    'Oceľ',
    'Nerez',
    'Hliník',
    'Pozink',
  ]

  return (
    <section className="split-section bg-deev">
      {/* Inner Wrap */}
      <div className="inner-wrap">
        {/* LEFT — header + copy */}
        <div className="text-side">
          <SectionHeader eyebrow="Kovovýroba" title="Čo vyrábame" />

          <div className="content space-y-4 text-slate-800">
            Kusová aj sériová výroba na mieru:{' '}
            <strong>lakovacie rámy</strong>, <strong>transportné palety</strong>,{' '}
            <strong>brány</strong>, <strong>kontrolné a&nbsp;montážne prípravky</strong>,{' '}
            <strong>kovový nábytok</strong> (knižnice, police, vešiaky), <strong>zábradlia</strong>,{' '}
            <strong>rámové konštrukcie</strong> a diely z pružinových materiálov.
          </div>

          {/* Materials badges */}
          <div className="mt-6">
            
            <div className="mt-3 flex flex-wrap gap-2 justify-center">
              {materials.map((m, i) => (
                <span
                  key={i}
                  className="
                    font-secondary text-[11px] md:text-xs
                    uppercase tracking-wide
                    px-3 py-3
                    border border-slate-200
                    bg-white/70
                    text-slate-700
                  "
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — gallery (unchanged) */}
        <div className="img-side">
          <div className="gallery-container flex flex-row w-3xl">
            {images.map(({ alt, src }, i) => (
              <div key={i} className="gallery-image">
                <Image src={src} alt={alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
