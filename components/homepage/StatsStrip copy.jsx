'use client'

export default function StatsStrip() {
  const items = [
    { label: 'rokov skúseností', value: '10+' },
    { label: 'realizovaných projektov', value: '100+' },
    { label: 'členov tímu', value: '6' },
    { label: 'spokojných klientov', value: '80+' },
  ]

  return (
    <section className=" text-slate-900 max-w-3xl lg:max-w-7xl mx-auto">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4  divide-x  divide-slate-200">
          {items.map((it, i) => (
            <div key={i} className="p-6 md:p-8 text-center">
              {/* Value (hook for CountUp) */}
              <div
                className="font-primary text-3xl md:text-4xl font-semibold tracking-tight"
                data-countup
              >
                {it.value}
              </div>

              {/* Label */}
              <div className="mt-1 font-secondary text-[11px] md:text-xs uppercase tracking-wider text-slate-500">
                {it.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
