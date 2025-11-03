export const revalidate = 0;

import GalleryClient from "@/components/gallery/GalleryClient";
import PageHeader from "@/components/UI/PageHeader";

function buildMockData() {
	const categories = [
		{ _id: "cat-kovovyroba", title: "Kovovýroba" },
		{ _id: "cat-stavebnictvo", title: "Stavebníctvo" },
	];
	const catById = (id) => categories.find((c) => c._id === id);

	// Edit counts if you add more files
	const kovovyrobaImages = Array.from({ length: 67 }, (_, i) => i + 1);
	const stavebnictvoImages = Array.from({ length: 10 }, (_, i) => i + 1);

	const kovovyroba = kovovyrobaImages.map((num) => ({
		_id: `kovovyroba-${num}`,
		alt: `Kovovýroba – obrázok ${num}`,
		description: `Ukážka práce z kategórie kovovýroba (č. ${num}).`,
		image: { src: `/images/gallery/kovovyroba/${num}.webp` },
		galleryCategory: catById("cat-kovovyroba"),
	}));

	const stavebnictvo = stavebnictvoImages.map((num) => ({
		_id: `stavebnictvo-${num}`,
		alt: `Stavebníctvo – obrázok ${num}`,
		description: `Ukážka práce z kategórie stavebníctvo (č. ${num}).`,
		image: { src: `/images/gallery/stavebnictvo/${num}.webp` },
		galleryCategory: catById("cat-stavebnictvo"),
	}));

	const galleryItems = [...kovovyroba, ...stavebnictvo];

	const grouped = galleryItems.reduce((acc, item) => {
		const cat = item.galleryCategory?.title || "Nezaradené";
		if (!acc[cat]) acc[cat] = [];
		acc[cat].push(item);
		return acc;
	}, {});

	return { grouped, categories, galleryItems };
}

export default function Page() {
	const { grouped } = buildMockData();

	// simple category counts for the little facts strip
	const counts = Object.entries(grouped).map(([title, arr]) => ({
		title,
		count: arr.length,
	}));
	const total = counts.reduce((sum, c) => sum + c.count, 0);

	return (
		<>
			<PageHeader
				eyebrow="Fotogaléria"
				title="Naše vybrané realizácie"
				subtitle="Výber z projektov v oblasti kovovýroby a stavebných prác — presnosť, čisté spracovanie a dodržané termíny."
				image="/images/subpage-hero/cnc4.webp"
				align="center"
			/>

			{/* The gallery */}
			<GalleryClient groupedGalleryItems={grouped} />

			{/* Post-grid compact CTA + facts — flat, bordered, minimal */}
			<section className="text-slate-900">
				<div className="mx-auto max-w-7xl px-6">
					<div className="border border-slate-200 bg-white p-4 md:p-6">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center">
							{/* Left: micro-facts */}
							<div className="order-2 md:order-1">
								<div className="flex flex-wrap gap-2">
									<span className="font-secondary text-[11px] uppercase tracking-wider text-slate-600">
										Spolu: <span className="text-slate-900">{total}</span>
									</span>
									{counts.map((c) => (
										<span
											key={c.title}
											className="font-secondary text-[11px] uppercase tracking-wider text-slate-600"
										>
											{c.title}:{" "}
											<span className="text-slate-900">{c.count}</span>
										</span>
									))}
								</div>
							</div>

							{/* Middle: short reassurance line */}
							<div className="order-1 md:order-2 text-center">
								<p className="font-secondary text-sm text-slate-700">
									Potrebujete podobné riešenie? Navrhneme, vyrobíme, zmontujeme.
								</p>
							</div>

							{/* Right: CTAs */}
							<div className="order-3 md:order-3 flex justify-center md:justify-end gap-2">
								<a
									href="/nezavazny-dopyt"
									className="font-secondary inline-flex items-center px-4 py-2 border border-slate-900 hover:bg-slate-900 hover:text-white transition"
								>
									Nezáväzný dopyt
								</a>
								<a
									href="/kontakt"
									className="font-secondary inline-flex items-center px-4 py-2 border border-slate-300 hover:border-slate-900 transition"
								>
									Kontakt
								</a>
							</div>
						</div>
					</div>

					{/* bottom hairline */}
					<div className="mt-10 mb-12 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
				</div>
			</section>
		</>
	);
}
