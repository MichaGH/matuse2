'use client'

export default function StatsStrip() {
  const items = [
    { label: 'rokov skúseností', value: '10+' },
    { label: 'realizovaných projektov', value: '100+' },
    { label: 'členov tímu', value: '6' },
    { label: 'spokojných klientov', value: '80+' },
  ]

  return (
    <section className=" text-white w-full  bg-edev bg-black">
      <div className="mx-auto px-6 py-10  max-w-3xl lg:max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 bg-slate-200/50 gap-px  ">
          {items.map((it, i) => (
            <div key={i} className="px-6 md:px-8 text-center bg-black">
              {/* Value (hook for CountUp) */}
              <div
                className="font-primary text-3xl md:text-4xl font-semibold tracking-tight"
                data-countup
              >
                {it.value}
              </div>

              {/* Label */}
              <div className="mt-1 font-secondary text-[11px] md:text-xs uppercase tracking-wider text-white">
                {it.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
