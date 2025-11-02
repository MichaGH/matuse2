"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Pick the card ratio you want: "aspect-[4/3]" | "aspect-[3/2]" | "aspect-square"
const CARD_RATIO = "aspect-[4/3]";

export default function ImageCard({ item, selectItem }) {
  const src = item?.image?.src || "/images/placeholder.png";

  return (
    <motion.button
      onClick={selectItem}
      className="block group focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      <div
        className={`relative w-full ${CARD_RATIO} overflow-hidden rounded shadow-sm`}
      >
        <Image
          src={src}
          alt={item?.alt || ""}
          fill
          sizes="(min-width: 1280px) 16vw, (min-width: 1024px) 20vw, (min-width: 768px) 30vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
          priority={false}
        />
      </div>
    </motion.button>
  );
}
