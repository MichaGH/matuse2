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
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onMouseDown={(e) => {
            // close on backdrop click
            if (e.target === e.currentTarget) onClose();
          }}
        >
          {/* Close (top-right) */}
          <button
            onClick={onClose}
            aria-label="Zavrieť"
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/90 hover:text-white text-3xl leading-none"
          >
            ×
          </button>

          {/* Prev arrow */}
          {hasPrev() && (
            <button
              onClick={onPrev}
              aria-label="Predchádzajúca"
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 text-white/90 hover:text-white text-4xl leading-none px-2"
            >
              ‹
            </button>
          )}

          {/* Next arrow */}
          {hasNext() && (
            <button
              onClick={onNext}
              aria-label="Ďalšia"
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 text-white/90 hover:text-white text-4xl leading-none px-2"
            >
              ›
            </button>
          )}

          {/* Centered image */}
          <motion.div
            key={src}
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="relative w-[92vw] md:w-[86vw] lg:w-[78vw] h-[70vh] md:h-[78vh] lg:h-[82vh]"
          >
            <Image
              src={src}
              alt={item?.alt || ""}
              fill
              priority
              className="object-contain"
              sizes="(min-width:1280px) 78vw, (min-width:1024px) 86vw, 92vw"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
