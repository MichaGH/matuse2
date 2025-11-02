'use client'

import Image from 'next/image'
import React from 'react'

const images = [
  { alt: 'Welding', src: '/images/products/original/1.webp' },
  { alt: 'Welding', src: '/images/products/original/2.png' },
  { alt: 'Welding', src: '/images/products/original/3.webp' },
  { alt: 'Welding', src: '/images/products/original/4.webp' },
  { alt: 'Welding', src: '/images/products/original/5.webp' },
]

export default function ProductsShowcase() {
  const materials = [
    'Oceľ (uhlíková)',
    'Nerez (SS)',
    'Hliník (Al)',
    'Pozink',
    'Plechy a profily',
    'Rúrky a tyče',
  ]

  return (
    <section id="products-showcase" className="bg-deev">
      <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-[2fr_3fr] mx-auto py-20 px-6  md:gap-14">
        {/* LEFT — copy (gallery on right stays untouched) */}
        <div className="flex flex-col justify-center">
          <p className="font-secondary uppercase tracking-widest text-xs text-slate-500">
            Služby vo výrobe
          </p>
          <h2 className="mt-2 font-primary text-2xl md:text-3xl font-semibold text-slate-900">
            Čo vyrábame
          </h2>

          <p className="mt-4 font-secondary text-slate-700 leading-relaxed">
            Kusová aj sériová výroba na mieru: <strong>lakovacie rámy</strong>,{' '}
            <strong>transportné palety</strong>, <strong>brány</strong>,{' '}
            <strong>kontrolné a&nbsp;montážne prípravky</strong>, <strong>kovový nábytok</strong>{' '}
            (knižnice, police, vešiaky), <strong>zábradlia</strong>,{' '}
            <strong>rámové konštrukcie</strong> a diely z pružinových materiálov.
          </p>

          

          {/* CTA */}
          <div className="mt-6">
            <a
              href="/fotogaleria"
              className="font-secondary inline-flex items-center px-5 py-2.5 border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition"
            >
              Pozrieť viac prác
            </a>
          </div>
        </div>

        {/* RIGHT — gallery (unchanged) */}
        <div className="gallery-container flex flex-row w-3xl ">
          {images.map(({ alt, src }, i) => {
            return (
              <div key={i} className="gallery-image">
                <Image src={src} alt={alt} fill className="object-cover" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
