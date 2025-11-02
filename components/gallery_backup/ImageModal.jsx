"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageModal({
  item,
  index,
  maxCount,
  setSelectedIndex,
  setSelectedItems,
}) {
  const src = item?.image?.src || "/images/placeholder.png";

  const onClose = () => {
    setSelectedIndex(null);
    setSelectedItems(null);
  };

  const hasNext = () => index + 1 < maxCount;
  const hasPrev = () => index > 0;

  const onNext = () => (hasNext() ? setSelectedIndex(index + 1) : onClose());
  const onPrev = () => (hasPrev() ? setSelectedIndex(index - 1) : onClose());

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, maxCount]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center overflow-hidden"
        >
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="max-h-[90vh] max-w-[90vw] w-auto bg-white p-4 rounded shadow-lg overflow-hidden"
          >
            <div className="relative w-auto h-auto max-w-[80vw] max-h-[75vh] mx-auto">
              <Image
                src={src}
                alt={item?.alt || ""}
                width={1200}
                height={800}
                className="rounded object-contain w-auto h-auto max-h-[75vh] mx-auto"
                sizes="(min-width: 1024px) 60vw, 90vw"
                priority
              />
            </div>

            {(item?.alt || item?.description) && (
              <div className="mt-4 text-center px-2">
                <h3 className="text-lg font-semibold">{item?.alt}</h3>
                <p className="text-sm text-gray-600">
                  {item?.description || item?.alt}
                </p>
              </div>
            )}
          </motion.div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-4xl font-bold z-50 leading-none"
            aria-label="Close"
          >
            &times;
          </button>

          {/* Left Arrow */}
          {hasPrev() && (
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold z-50"
              aria-label="Previous"
            >
              ‹
            </button>
          )}

          {/* Right Arrow */}
          {hasNext() && (
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold z-50"
              aria-label="Next"
            >
              ›
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
