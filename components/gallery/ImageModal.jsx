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
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onMouseDown={(e) => {
            // close on backdrop click
            if (e.target === e.currentTarget) onClose();
          }}
        >
          {/* Modal frame */}
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="relative bg-white rounded-none border border-slate-200 shadow-lg max-w-[92vw] md:max-w-[78vw] lg:max-w-[65vw] max-h-[88vh] overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label={item?.alt || "Prehliadač obrázkov"}
          >
            {/* Header strip */}
            <div className="flex items-center justify-between px-4 py-2 bg-slate-50 border-b border-slate-200">
              <div className="font-secondary text-[11px] uppercase tracking-wider text-slate-600">
                {item?.alt || "Fotka"}{" "}
                <span className="text-slate-400">
                  ({index + 1}/{maxCount})
                </span>
              </div>
              <button
                onClick={onClose}
                className="font-primary text-sm px-3 py-1 border border-slate-300 hover:bg-slate-900 hover:text-white transition"
                aria-label="Zavrieť"
              >
                Zavrieť
              </button>
            </div>

            {/* Image area */}
            <div className="p-3 md:p-4">
              <div className="relative mx-auto max-h-[68vh]">
                <div className="relative w-[80vw] md:w-[70vw] lg:w-[60vw] h-[50vh] md:h-[58vh] lg:h-[62vh] border border-slate-200 bg-slate-50">
                  <Image
                    src={src}
                    alt={item?.alt || ""}
                    fill
                    className="object-contain"
                    sizes="(min-width:1280px) 60vw, (min-width:1024px) 70vw, 80vw"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Caption */}
            {(item?.alt || item?.description) && (
              <div className="px-4 pb-4 pt-2 text-center">
                <h3 className="font-primary text-base">{item?.alt}</h3>
                <p className="font-secondary text-sm text-slate-600">
                  {item?.description || item?.alt}
                </p>
              </div>
            )}

            {/* Nav controls */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 md:px-3 pointer-events-none">
              {hasPrev() && (
                <button
                  onClick={onPrev}
                  className="pointer-events-auto font-primary text-sm px-3 py-2 border border-slate-300 bg-white/90 hover:bg-slate-900 hover:text-white transition"
                  aria-label="Predchádzajúca"
                >
                  ‹
                </button>
              )}
              {hasNext() && (
                <button
                  onClick={onNext}
                  className="pointer-events-auto font-primary text-sm px-3 py-2 border border-slate-300 bg-white/90 hover:bg-slate-900 hover:text-white transition"
                  aria-label="Ďalšia"
                >
                  ›
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
