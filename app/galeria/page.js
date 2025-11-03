export const revalidate = 0;

import GalleryClient from "@/components/gallery/GalleryClient";


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
		alt: `Kovovýroba - obrázok ${num}`,
		description: `Ukážka práce z kategórie kovovýroba (č. ${num}).`,
		image: { src: `/images/gallery/kovovyroba/${num}.webp` },
		galleryCategory: catById("cat-kovovyroba"),
	}));

	const stavebnictvo = stavebnictvoImages.map((num) => ({
		_id: `stavebnictvo-${num}`,
		alt: `Stavebníctvo - obrázok ${num}`,
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
			{/* The gallery */}
			<GalleryClient groupedGalleryItems={grouped} />
		</>
	);
}
