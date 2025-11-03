"use client";

import Image from "next/image";
import SectionHeader from "@/components/homepage/Header";
import {
	PiggyBank,
	Thermometer,
	Shield,
	Volume2,
	Paintbrush,
	TrendingUp,
} from "lucide-react";

export default function StavebnictvoPage() {
	return (
		<main id="stavebnictvo" className="bg-white text-slate-900">
			{/* SECTION 1 — Intro (image + copy) — keep */}
			<section>
				<div className="mx-auto max-w-7xl px-6 py-16">
					<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14">
						{/* LEFT — text */}
						<div>
							<SectionHeader
								eyebrow="Služby v stavebníctve"
								title="Zateplenie rodinných domov — odborne a čisto"
								align="left"
							/>
							<p className="mt-2 font-secondary text-slate-700 leading-relaxed max-w-prose">
								Realizujeme kompletné zateplenie kontaktným systémom (ETICS) s
								použitím polystyrénu (EPS) alebo minerálnej vlny. Každý detail
								spracovávame technicky správne, s dôrazom na čistotu, kvalitu a
								dlhú životnosť.
							</p>

							<div className="mt-6">
								<a
									href="/galeria"
									className="font-secondary inline-flex items-center px-5 py-2.5 border border-slate-900 hover:bg-slate-900 hover:text-white transition"
								>
									Pozrite si naše práce
								</a>
							</div>
						</div>

						{/* RIGHT — image */}
						<div className="relative h-72 sm:h-96 md:h-[28rem] border border-slate-200 bg-slate-50 overflow-hidden">
							<Image
								src="/images/zateplovanie3.webp"
								alt="Zateplenie fasády — kontaktný systém ETICS"
								fill
								className="object-cover"
								sizes="(min-width: 1024px) 50vw, 100vw"
								priority={false}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Hairline */}
			<div className="mx-auto max-w-7xl px-6">
				<div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
			</div>
			<section aria-labelledby="preco" className="bg-white">
				<div className="mx-auto max-w-7xl px-6 py-14">
					<SectionHeader
						eyebrow="Prečo zatepľovať"
						title="Rozumná investícia do komfortu, úspor a vzhľadu"
						align="center"
					/>

					{/* Reasons */}
					<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{
								h: "Nižšie účty za teplo",
								p: "Menej tepelných strát cez steny a strop — úspora nákladov počas celej sezóny.",
								Icon: PiggyBank,
							},
							{
								h: "Komfort v interiéri",
								p: "Teplejšie vnútorné povrchy, menej prievanu a stabilnejšia teplota bez výkyvov.",
								Icon: Thermometer,
							},
							{
								h: "Ochrana konštrukcie",
								p: "Zníženie rizika kondenzácie a plesní, dlhšia životnosť muriva a omietok.",
								Icon: Shield,
							},
							{
								h: "Tichší dom",
								p: "Lepší útlm hluku z ulice (najmä pri minerálnej vlne a kvalitnej finálnej vrstve).",
								Icon: Volume2,
							},
							{
								h: "Nový vzhľad fasády",
								p: "Čistá, jednotná fasáda s možnosťou výberu štruktúr a farieb.",
								Icon: Paintbrush,
							},
							{
								h: "Vyššia hodnota nehnuteľnosti",
								p: "Lepšie energetické parametre a atraktívny vzhľad pri predaji či prenájme.",
								Icon: TrendingUp,
							},
						].map(({ h, p, Icon }, i) => (
							<article
								key={i}
								className="border border-slate-200 bg-white p-6 hover:border-slate-300 transition"
							>
								<div className="flex items-center gap-3 mb-3">
									<div className="h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center">
										<Icon className="h-4 w-4 text-slate-800" />
									</div>
									<h3 className="font-primary text-base md:text-lg font-semibold tracking-tight">
										{h}
									</h3>
								</div>
								<p className="font-secondary text-sm text-slate-700 leading-relaxed">
									{p}
								</p>
							</article>
						))}
					</div>

					{/* subtle CTA */}
					<div className="mt-10 flex justify-center">
						<a
							href="/galeria"
							className="font-secondary inline-flex items-center px-5 py-2.5 border border-slate-900 hover:bg-slate-900 hover:text-white transition"
						>
							Pozrieť realizácie
						</a>
					</div>
				</div>
			</section>

			{/* Hairline */}
			<div className="mx-auto max-w-7xl px-6">
				<div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
			</div>
			<section aria-labelledby="ako" className="bg-slate-50">
				<div className="mx-auto max-w-7xl px-6 py-14">
					<SectionHeader
						eyebrow="Ako prebieha"
						title="Postup zateplenia domu — krok po kroku"
						align="left"
					/>

					<div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10">
						{/* LEFT — steps + info cards */}
						<div className="space-y-10">
							{/* Step list */}
							<div className="border border-slate-200 bg-white p-6 md:p-7">
								<ol className="space-y-3">
									{[
										"Príprava podkladu a penetrácia",
										"Lepidlo + dosky (EPS / minerálna vlna)",
										"Kotvenie tanierovými hmoždinkami (podľa projektu)",
										"Výstužná vrstva: lepidlo + sklotextilná sieťka",
										"Penetrácia pod finálnu vrstvu",
										"Finálna omietka / náter",
									].map((step, i) => (
										<li key={i} className="flex gap-3">
											<span className="font-primary w-6 text-right">
												{i + 1}.
											</span>
											<span className="font-secondary text-slate-800">
												{step}
											</span>
										</li>
									))}
								</ol>
								<p className="mt-5 font-secondary text-xs text-slate-600">
									Postup prispôsobujeme typu muriva, výške objektu a lokálnym
									podmienkam (veterné zóny).
								</p>
							</div>


						</div>

						{/* RIGHT — image */}
						<div className="relative h-72 sm:h-96 lg:h-full border border-slate-200 bg-slate-50 overflow-hidden">
							<Image
								src="/images/zateplovanie2.webp"
								alt="Zatepľovanie fasády v priebehu montáže"
								fill
								className="object-cover"
								sizes="(min-width: 1024px) 40vw, 100vw"
								priority={false}
							/>
						</div>
					</div>
				</div>
			</section>




		</main>
	);
}
