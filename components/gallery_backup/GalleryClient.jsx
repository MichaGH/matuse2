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

  // Ensure we always point to an existing category
  const safeCategory =
    selectedCategory && groupedGalleryItems[selectedCategory]
      ? selectedCategory
      : allCategories[0] || null;

  const items = safeCategory ? groupedGalleryItems[safeCategory] : [];

  return (
    <div className="space-y-12 p-4 py-16 max-w-7xl mx-auto">
      {/* Tabs */}
      {allCategories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 border-b border-gray-300">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 sm:px-6 sm:py-3 font-medium border-b-2 transition-all duration-200
                  ${
                    category === safeCategory
                      ? "border-blue-700 text-blue-700"
                      : "border-transparent text-gray-500 hover:text-blue-600 hover:border-blue-300"
                  }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Category Content with Fade Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={safeCategory || "empty"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25 }}
        >
          {items?.length ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4">
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
            <div className="text-center text-gray-500 py-12">
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
  );
}
