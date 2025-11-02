import GalleryClient from "@/components/gallery/GalleryClient";
// If you already have this UI component, keep it. Otherwise remove the import & usage below.
// import PageHeader from "@/components/ui/PageHeader";


export default function Page() {
  const { grouped } = buildMockData();

  return (
    <div>
      <GalleryClient groupedGalleryItems={grouped} />
    </div>
  );
}

function buildMockData() {
  const categories = [
    { _id: "cat-kovovyroba", title: "Kovovýroba" },
    { _id: "cat-stavebnictvo", title: "Stavebníctvo" },
  ];

  const catById = (id) => categories.find((c) => c._id === id);

  // Write how many images exist in each folder:
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

  // Group exactly like in the Sanity version
  const grouped = galleryItems.reduce((acc, item) => {
    const cat = item.galleryCategory?.title || "Nezaradené";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {});

  return { grouped, categories, galleryItems };
}



function dummyData() {
  // Analogous to Sanity "galleryCategory" documents
  const categories = [
    { _id: "cat-zvaranie", title: "Zváranie" },
    { _id: "cat-rezanie", title: "Rezanie" },
    { _id: "cat-ohybanie", title: "Ohýbanie" },
    { _id: "cat-vrtanie", title: "Vŕtanie" },
  ];

  // Helper to reference category by id
  const catById = (id) => categories.find((c) => c._id === id);

  // Analogous to Sanity "galleryImage" documents
  // NOTE: `image` here uses a simple `{ src }` object instead of a Sanity asset.
  const galleryItems = [
    {
      _id: "img-001",
      alt: "Zváranie oceľovej konštrukcie",
      description: "Precízne TIG/MIG zvary na nosnej konštrukcii.",
      image: { src: "/images/gallery/1.webp" },
      galleryCategory: catById("cat-zvaranie"),
    },
    {
      _id: "img-002",
      alt: "Rezanie laserom plechu",
      description: "Laserové rezanie 5 mm ocele – čisté hrany bez otrepov.",
      image: { src: "/images/gallery/2.webp" },
      galleryCategory: catById("cat-rezanie"),
    },
    {
      _id: "img-003",
      alt: "Ohýbanie profilu",
      description: "Presné ohyby podľa výkresu, nízka tolerancia.",
      image: { src: "/images/gallery/3.webp" },
      galleryCategory: catById("cat-ohybanie"),
    },
    {
      _id: "img-004",
      alt: "Vŕtanie otvorov do U-profilu",
      description: "Sériové vŕtanie s dorazom pre rovnaké rozstupy.",
      image: { src: "/images/gallery/4.webp" },
      galleryCategory: catById("cat-vrtanie"),
    },
    {
      _id: "img-005",
      alt: "Zváranie zábradlia",
      description: "Čisté zvary a brúsenie pre hladký povrch.",
      image: { src: "/images/gallery/5.webp" },
      galleryCategory: catById("cat-zvaranie"),
    },
    {
      _id: "img-006",
      alt: "Rezanie presných tvarov",
      description: "Výpalky pripravené na montáž bez dodatočného opracovania.",
      image: { src: "/images/gallery/6.webp" },
      galleryCategory: catById("cat-rezanie"),
    },
  ];

  // Group exactly like your original reducer (by category title)
  const grouped = galleryItems.reduce((acc, item) => {
    const cat = item.galleryCategory?.title || "Nezaradené";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {});

  return { grouped, categories, galleryItems };
}
