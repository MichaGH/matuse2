// app/page.js
export const metadata = {
  title: 'Zateplenie & kovovýroba — spoľahlivé riešenia',
  description:
    'Kompletné zateplenie rodinných domov a zákazková kovovýroba: dizajn, výroba, montáž, servis.',
}

export default function HomePage() {
  return (
    <main id="homepage" className="text-slate-800">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(60%_60%_at_10%_10%,white,transparent),radial-gradient(60%_60%_at_90%_0%,white,transparent)]" />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:py-28">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Zateplenie domov & zákazková kovovýroba
          </h1>
          <p className="mt-4 max-w-2xl text-white/90">
            Pomáhame šetriť energiu a vyrábame kvalitné kovové riešenia na mieru.
            Dizajn → výroba → montáž → servis.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/sluzby/stavebnictvo" className="rounded-full bg-white text-slate-900 px-5 py-2.5 font-medium hover:opacity-90">
              Zateplenie domov
            </a>
            <a href="/sluzby/vyroba" className="rounded-full border border-white/70 px-5 py-2.5 hover:bg-white/10">
              Kovovýroba
            </a>
            <a href="/kontakt" className="rounded-full border border-white/70 px-5 py-2.5 hover:bg-white/10">
              Kontakt
            </a>
          </div>
        </div>
      </section>

      {/* QUICK USPs */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <USP title="Úspora energií" desc="Zateplenie výrazne znižuje náklady na vykurovanie." />
          <USP title="Nižšie CO₂" desc="Menej emisií pri výrobe tepla — lepšie pre životné prostredie." />
          <USP title="Pekná fasáda" desc="Nádherný vzhľad domu na celé desaťročia." />
          <USP title="Kvalitné spracovanie" desc="Odborne, technicky správne, z kvalitných materiálov." />
        </div>
      </section>

      {/* TWO MAIN SERVICES */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:py-12">
        <h2 className="text-3xl font-bold">S čím vám pomôžeme</h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Stavebníctvo */}
          <article className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="size-12 shrink-0 rounded-lg bg-emerald-100" />
              <div>
                <h3 className="text-xl font-semibold">Služby v stavebníctve – Zateplenie</h3>
                <p className="mt-2 text-slate-600">
                  Zameriavame sa na kompletné zateplenie rodinných domov kontaktným systémom
                  s použitím polystyrénu alebo minerálnej vaty. Je to investícia na celý život —
                  úspora nákladov, zníženie CO₂ a nádherný vzhľad fasády.
                </p>
                <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                  <li>Spoľahlivý partner pre zateplenie rodinného domu</li>
                  <li>Odborná realizácia, technicky správne postupy</li>
                  <li>Kvalitné materiály, dlhá životnosť fasády</li>
                </ul>
                <div className="mt-5 flex gap-3">
                  <a href="/sluzby/stavebnictvo" className="rounded-full bg-slate-900 text-white px-4 py-2 hover:opacity-90">
                    Viac o zateplení
                  </a>
                  <a href="/dopyt" className="rounded-full border px-4 py-2 hover:bg-slate-50">
                    Nezáväzný dopyt
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Výroba */}
          <article className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="size-12 shrink-0 rounded-lg bg-amber-100" />
              <div>
                <h3 className="text-xl font-semibold">Služby vo výrobe</h3>
                <p className="mt-2 text-slate-600">
                  Čo navrhneme, to aj vyrobíme. Navrhujeme zvárané zostavy, brány, prípravky,
                  kovový nábytok a diely z pružinového materiálu podľa potrieb zákazníka.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <SmallCard
                    title="Dizajn a konštrukcia"
                    desc="Inteligentný návrh pre rýchlejší výsledok za výhodnejších podmienok."
                  />
                  <SmallCard
                    title="Výroba"
                    desc="Lakovacie rámy, transportné palety, brány, kontrolné a montážne prípravky, kovový nábytok…"
                  />
                  <SmallCard
                    title="Kapacity"
                    desc="Rezanie laserom, ohýbanie, rezanie, vŕtanie, zváranie TIG/MIG/MAG."
                  />
                  <SmallCard
                    title="Montáž & Servis"
                    desc="Montáž nami vyrobených zostáv + záručný aj pozáručný servis."
                  />
                </div>
                <div className="mt-5 flex gap-3">
                  <a href="/sluzby/vyroba" className="rounded-full bg-slate-900 text-white px-4 py-2 hover:opacity-90">
                    Viac o výrobe
                  </a>
                  <a href="/kontakt" className="rounded-full border px-4 py-2 hover:bg-slate-50">
                    Kontaktujte nás
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* PROCESS (applies to both) */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <h2 className="text-3xl font-bold">Ako prebieha spolupráca</h2>
        <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Step n="1" title="Konzultácia" desc="Krátky rozhovor, fotky/rozmery alebo obhliadka." />
          <Step n="2" title="Návrh riešenia" desc="Dizajn a technický postup, výber materiálov." />
          <Step n="3" title="Realizácia" desc="Zateplenie alebo výroba + montáž podľa dohody." />
          <Step n="4" title="Odovzdanie & servis" desc="Kontrola kvality, záručný a pozáručný servis." />
        </ol>
      </section>

      {/* FEATURED GALLERY PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-bold">Z našej fotogalérie</h2>
          <a href="/fotogaleria" className="text-slate-600 hover:text-slate-900 underline underline-offset-4">
            Pozrieť všetky fotky
          </a>
        </div>
        <p className="mt-2 text-slate-600">
          Brány, bránky, stojany na drevo, kovové knižnice, police, odvíjače tesnení, lakovacie a galvanické prípravky,
          kontrolné a montážne prípravky, transportné palety, podnože, zábradlia, nástenné police, vešiaky, pružinové diely…
        </p>

        {/* Replace src with your real images (public/gallery/...) */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {['/gallery/1.jpg','/gallery/2.jpg','/gallery/3.jpg','/gallery/4.jpg','/gallery/5.jpg','/gallery/6.jpg'].map((src, i) => (
            <a key={i} href="/fotogaleria" className="group relative overflow-hidden rounded-lg border bg-white">
              <img src={src} alt="Ukážka práce" className="aspect-square w-full object-cover group-hover:scale-[1.03] transition" />
            </a>
          ))}
        </div>

        {/* Optional category chips (static) */}
        <div className="mt-5 flex flex-wrap gap-2 text-sm">
          {['Brány','Prípravky','Kovový nábytok','Transportné palety','Zábradlia','Montážne riešenia'].map((t) => (
            <span key={t} className="rounded-full border px-3 py-1 text-slate-600">{t}</span>
          ))}
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-slate-50 border-y">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10 grid gap-6 sm:grid-cols-3">
          <TrustStat big="10+" small="rokov skúseností" />
          <TrustStat big="100+" small="zrealizovaných projektov" />
          <TrustStat big="100%" small="zameranie na kvalitu" />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <div className="rounded-2xl border bg-white p-6 sm:p-8 shadow-sm flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-2xl font-semibold">Poďme začať váš projekt</h3>
            <p className="mt-1 text-slate-600">
              Potrebujete zatepliť dom alebo vyrobiť kovové riešenie na mieru? Ozvite sa nám.
            </p>
          </div>
          <div className="flex gap-3">
            <a href="/dopyt" className="rounded-full bg-slate-900 text-white px-5 py-2.5 hover:opacity-90">
              Nezáväzný dopyt
            </a>
            <a href="/kontakt" className="rounded-full border px-5 py-2.5 hover:bg-slate-50">
              Kontakt
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT TEASER (footer prelude) */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="grid gap-6 sm:grid-cols-3">
          <ContactCard label="Telefón" value="+421 000 000 000" href="tel:+421000000000" />
          <ContactCard label="E-mail" value="info@firma.sk" href="mailto:info@firma.sk" />
          <ContactCard label="Adresa" value="Vaša ulica 1, 010 01 Mesto" href="/kontakt" />
        </div>
      </section>
    </main>
  )
}

/* ---- Small components (same file for speed) ---- */

function USP({ title, desc }) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="mb-3 h-8 w-8 rounded bg-slate-100" />
      <div className="font-semibold">{title}</div>
      <p className="mt-1 text-slate-600">{desc}</p>
    </div>
  )
}

function SmallCard({ title, desc }) {
  return (
    <div className="rounded-xl border bg-slate-50 p-4">
      <div className="font-medium">{title}</div>
      <p className="mt-1 text-slate-600">{desc}</p>
    </div>
  )
}

function Step({ n, title, desc }) {
  return (
    <li className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-semibold">
        {n}
      </div>
      <div className="mt-3 text-lg font-semibold">{title}</div>
      <p className="mt-1 text-slate-600">{desc}</p>
    </li>
  )
}

function TrustStat({ big, small }) {
  return (
    <div className="rounded-xl border bg-white p-6 text-center shadow-sm">
      <div className="text-3xl font-bold">{big}</div>
      <div className="mt-1 text-slate-600">{small}</div>
    </div>
  )
}

function ContactCard({ label, value, href }) {
  return (
    <a href={href} className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition">
      <div className="text-slate-500 text-sm">{label}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
    </a>
  )
}
