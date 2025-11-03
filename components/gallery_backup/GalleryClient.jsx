"use client";

import React, { useMemo, useState } from "react";
import ImageCard from "./ImageCard";
import ImageModal from "./ImageModal";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryClient({ groupedGalleryItems }) {
  const allCategories = useMemo(
    () => Object.keys(groupedGalleryItems || {}),
    [groupedGalleryItems]
  );

  const [selectedCategory, setSelectedCategory] = useState(
    allCategories[0] || null
  );
  const [selectedItems, setSelectedItems] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const safeCategory =
    selectedCategory && groupedGalleryItems[selectedCategory]
      ? selectedCategory
      : allCategories[0] || null;

  const items = safeCategory ? groupedGalleryItems[safeCategory] : [];

  return (
    <section className="text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Category tabs — minimal, bordered, uppercase micro-labels */}
        {allCategories.length > 0 && (
          <div className="flex flex-wrap justify-center">
            <div className="inline-flex rounded-none border border-slate-200 bg-white divide-x divide-slate-200">
              {allCategories.map((cat) => {
                const active = cat === safeCategory;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={[
                      "px-4 sm:px-6 py-2.5 font-secondary text-[11px] sm:text-xs tracking-wider uppercase transition",
                      active
                        ? "bg-slate-900 text-white"
                        : "text-slate-600 hover:bg-slate-50",
                    ].join(" ")}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        )}


        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={safeCategory || "empty"}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mt-10"
          >
            {items?.length ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
                {items.map((item, index) => (
                  <ImageCard
                    key={item._id}
                    item={item}
                    selectItem={() => {
                      setSelectedIndex(index);
                      setSelectedItems(items);
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center text-slate-500 py-12">
                Žiadne položky v tejto kategórii.
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Modal */}
        {selectedIndex !== null && selectedItems && (
          <ImageModal
            item={selectedItems[selectedIndex]}
            index={selectedIndex}
            maxCount={selectedItems.length || 0}
            setSelectedIndex={setSelectedIndex}
            setSelectedItems={setSelectedItems}
          />
        )}
      </div>
    </section>
  );
}
