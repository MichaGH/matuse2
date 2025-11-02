'use client'

export default function HeroSection2() {
  return (
    <section
      id="domov"
      className="relative flex items-center h-screen w-full"
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/welding2.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl space-y-6">

          <h1 className="font-primary text-4xl md:text-6xl font-semibold leading-tight text-white">
            Kovovýroba na mieru.
            <br className="hidden sm:block" />
            Presne. Spoľahlivo. Kvalitne.
          </h1>

          <p className="font-secondary text-slate-300 md:text-lg leading-relaxed">
            Zákazková výroba kovových zostáv, brán, konštrukcií a technických prvkov.
            Od návrhu a výroby až po montáž a dlhodobý servis.
          </p>

          {/* CTA buttons - centered */}
          <div className="pt-6 flex flex-wrap gap-3 justify-center sm:justify-start">
            <a
              href="/kontakt"
              className="font-secondary inline-flex items-center px-6 py-3 bg-white text-black border border-white font-medium hover:opacity-90 transition"
            >
              Nezáväzný dopyt
            </a>

            <a
              href="/sluzby/vyroba"
              className="font-secondary inline-flex items-center px-6 py-3 text-white border border-white/40 hover:bg-white/10 transition"
            >
              Pozrieť služby
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
