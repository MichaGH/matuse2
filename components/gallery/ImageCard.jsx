"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Keep your crisp, technical look: tidy borders, subtle hover
const CARD_RATIO = "aspect-[4/3]";

export default function ImageCard({ item, selectItem }) {
  const src = item?.image?.src || "/images/placeholder.png";

  return (
    <motion.button
      onClick={selectItem}
      className="block group focus:outline-none"
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      <div
        className={[
          "relative w-full overflow-hidden",
          CARD_RATIO,
          "border border-slate-200 bg-slate-50 rounded-none",
        ].join(" ")}
      >
        <Image
          src={src}
          alt={item?.alt || ""}
          fill
          sizes="(min-width:1280px) 16vw, (min-width:1024px) 20vw, (min-width:768px) 30vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
          priority={false}
        />

        {/* Subtle top label strip on hover */}
        <div className="pointer-events-none absolute inset-x-0 top-0 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center justify-between px-2 py-1 bg-white/85 border-b border-slate-200">
            <span className="font-secondary text-[10px] tracking-wider uppercase text-slate-700 line-clamp-1">
              {item?.alt || "Fotka"}
            </span>
          </div>
        </div>
      </div>
    </motion.button>
  );
}
