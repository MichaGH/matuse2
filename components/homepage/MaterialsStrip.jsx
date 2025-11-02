'use client'

export default function MaterialsStrip() {
  const materials = [
    { k: 'Oceľ (uhlíková)' },
    { k: 'Nerez (SS)' },
    { k: 'Hliník (Al)' },
    { k: 'Pozink' },
    { k: 'Plechy a profily' },
    { k: 'Rúrky a tyče' },
  ]

  return (
    <section aria-labelledby="materials" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="border border-slate-200">
          <div className="flex flex-wrap items-center justify-center divide-x divide-slate-200">
            {materials.map((m, i) => (
              <div key={i} className="px-5 py-3">
                <span className="font-secondary text-sm uppercase tracking-wider text-slate-700">
                  {m.k}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
