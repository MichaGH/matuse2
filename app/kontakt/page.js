"use client";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Building2,
  IdCard,
  Shield,
} from "lucide-react";

export default function Page() {
  return (
    <div className="bg-deev text-slate-900">


      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {/* LEFT — Contact info (icons, flat cards) */}
          <aside className="space-y-6">
            {/* Intro */}
            <div>
              <p className="font-secondary text-[11px] uppercase tracking-wider text-slate-600">
                Kontakt & Údaje
              </p>
              <h2 className="font-primary text-xl font-semibold tracking-tight mt-1">
                Ozvite sa nám
              </h2>
            </div>

            {/* Card: Priamy kontakt */}
            <div className="border border-slate-200 bg-white p-5 md:p-6 space-y-4">
              <div className="font-secondary text-[11px] uppercase tracking-wider text-slate-600">
                Priamy kontakt
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5">
                    <Phone className="h-4 w-4 text-slate-700" />
                  </span>
                  <div>
                    <div className="font-primary">
                      <a href="tel:+421900000000" className="hover:underline">
                        +421&nbsp;900&nbsp;000&nbsp;000
                      </a>
                    </div>
                    <div className="font-secondary text-xs text-slate-600">
                      Pon–Pia, 8:00–16:00
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5">
                    <Mail className="h-4 w-4 text-slate-700" />
                  </span>
                  <div>
                    <div className="font-primary">
                      <a href="mailto:info@firma.sk" className="hover:underline">
                        info@firma.sk
                      </a>
                    </div>
                    <div className="font-secondary text-xs text-slate-600">
                      Odpoveď zvyčajne do 24h
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Card: Prevádzka / Adresa / Hodiny */}
            <div className="border border-slate-200 bg-white p-5 md:p-6 space-y-4">
              <div className="font-secondary text-[11px] uppercase tracking-wider text-slate-600">
                Prevádzka
              </div>

              <div className="flex items-start gap-3">
                <span className="shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4 text-slate-700" />
                </span>
                <div className="font-primary">
                  Priemyselná&nbsp;12
                  <br />
                  010&nbsp;01&nbsp;Žilina
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="shrink-0 mt-0.5">
                  <Clock className="h-4 w-4 text-slate-700" />
                </span>
                <div className="font-primary">Pon–Pia, 8:00–16:00</div>
              </div>
            </div>

            {/* Card: Firemné údaje */}
            <div className="border border-slate-200 bg-white p-5 md:p-6 space-y-4">
              <div className="font-secondary text-[11px] uppercase tracking-wider text-slate-600">
                Firemné údaje
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5">
                    <Building2 className="h-4 w-4 text-slate-700" />
                  </span>
                  <div>
                    <div className="font-secondary text-[11px] uppercase tracking-wider text-slate-600">
                      Spoločnosť
                    </div>
                    <div className="font-primary">MATUSE s.r.o.</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5">
                    <IdCard className="h-4 w-4 text-slate-700" />
                  </span>
                  <div>
                    <div className="font-secondary text-[11px] uppercase tracking-wider text-slate-600">
                      IČO / DIČ
                    </div>
                    <div className="font-primary">
                      12&nbsp;345&nbsp;678 &nbsp;/&nbsp; 1234567890
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5">
                    <Shield className="h-4 w-4 text-slate-700" />
                  </span>
                  <div>
                    <div className="font-secondary text-[11px] uppercase tracking-wider text-slate-600">
                      IČ DPH
                    </div>
                    <div className="font-primary">SK1234567890</div>
                  </div>
                </li>
              </ul>
            </div>
          </aside>

          {/* RIGHT — Contact form (unchanged, non-functional) */}
          <div>
            <p className="font-secondary text-[11px] uppercase tracking-wider text-slate-600">
              Napíšte nám
            </p>
            <h2 className="font-primary text-xl font-semibold tracking-tight mt-1 mb-6">
              Rýchly kontaktný formulár
            </h2>

            <form
              action="#"
              method="post"
              onSubmit={(e) => e.preventDefault()}
              className="border border-slate-200 bg-white p-6 md:p-7 space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="font-secondary text-[11px] uppercase tracking-wider text-slate-600"
                >
                  Meno a priezvisko<span className="text-red-600">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-2 block w-full border border-slate-300 px-3 py-2 focus:outline-none focus:border-slate-900"
                  placeholder="Vaše meno"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="font-secondary text-[11px] uppercase tracking-wider text-slate-600"
                >
                  E-mail<span className="text-red-600">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 block w-full border border-slate-300 px-3 py-2 focus:outline-none focus:border-slate-900"
                  placeholder="vas@priklad.sk"
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="font-secondary text-[11px] uppercase tracking-wider text-slate-600"
                >
                  Spoločnosť
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="mt-2 block w-full border border-slate-300 px-3 py-2 focus:outline-none focus:border-slate-900"
                  placeholder="Názov firmy (voliteľné)"
                />
              </div>

              {/* Text */}
              <div>
                <label
                  htmlFor="message"
                  className="font-secondary text-[11px] uppercase tracking-wider text-slate-600"
                >
                  Text správy
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="mt-2 block w-full border border-slate-300 px-3 py-2 focus:outline-none focus:border-slate-900 resize-y"
                  placeholder="Stručne popíšte požiadavku..."
                />
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

              {/* Actions (non-working) */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  className="font-secondary inline-flex items-center px-5 py-2.5 border border-slate-900 hover:bg-slate-900 hover:text-white transition"
                >
                  Odoslať dopyt
                </button>
                <span className="font-secondary text-xs text-slate-500">
                  * Povinné polia (formulár nie je napojený)
                </span>
              </div>
            </form>
          </div>

          {/* BOTTOM — Full-width map placeholder spanning both columns */}
          <div className="md:col-span-2">
            <div className="border border-slate-200 bg-slate-50 h-56 md:h-72 w-full flex items-center justify-center">
              <span className="font-secondary text-slate-500 text-sm">
                Mapa (voliteľne)
              </span>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
