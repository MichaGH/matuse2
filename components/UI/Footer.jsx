'use client'

import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-deev text-slate-900 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* TOP — company + contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* 1 — Logo / Summary */}
          <div>
            <h2 className="font-primary text-xl font-semibold tracking-tight uppercase">
              MATUSE
            </h2>
            <p className="mt-3 font-secondary text-sm text-slate-700 leading-relaxed max-w-xs">
              Poctivá kovovýroba a stavebné práce s dôrazom na presnosť, čistotu
              a technické riešenia.
            </p>
          </div>

          {/* 2 — Contact info */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-slate-700" />
              <div className="font-secondary text-sm text-slate-700">
                Priemyselná&nbsp;12
                <br />
                010&nbsp;01&nbsp;Žilina
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-slate-700" />
              <div className="font-secondary text-sm text-slate-700">
                <a href="tel:+421900000000" className="hover:text-slate-900 transition">
                  +421&nbsp;900&nbsp;000&nbsp;000
                </a>
                <div className="text-xs text-slate-500">Pon–Pia, 8:00–16:00</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-slate-700" />
              <div className="font-secondary text-sm text-slate-700">
                <a href="mailto:info@matuse.sk" className="hover:text-slate-900 transition">
                  info@matuse.sk
                </a>
                <div className="text-xs text-slate-500">Odpoveď do 24 h</div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* Bottom line */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-secondary text-slate-500">
          <p>© {new Date().getFullYear()} MATUSE s.r.o. Všetky práva vyhradené.</p>
          <p className="mt-2 sm:mt-0">
            Vyhotovil&nbsp;
            <a
              href="https://thegrandpoints.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-700"
            >
              The Grand Points
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
