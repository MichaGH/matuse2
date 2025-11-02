
export default function StatsStripDark() {
  const items = [
    { label: 'rokov skúseností', value: '10+' },
    { label: 'projektov', value: '100+' },
    { label: 'členov tímu', value: '6' },
    { label: 'spokojných klientov', value: '80+' },
  ]

  return (
    <section className="relative overflow-hidden text-white">
      {/* Background layer — dark grid texture */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:24px_24px]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* Section border frame */}
        <div className="border border-white/10 shadow-[inset_0_0_20px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10">
            {items.map((it, i) => (
              <div
                key={i}
                className="relative p-8 text-center flex flex-col items-center justify-center"
              >
                {/* top accent line */}
                <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

                {/* Value (hook for CountUp later) */}
                <div
                  className="font-primary text-4xl md:text-5xl font-semibold tracking-tight text-white/95"
                  data-countup
                >
                  {it.value}
                </div>

                {/* Label */}
                <div className="mt-2 font-secondary text-[11px] md:text-xs uppercase tracking-widest text-white/60">
                  {it.label}
                </div>

                {/* bottom subtle glow */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-10 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
