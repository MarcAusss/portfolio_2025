"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  {
    id: 1,
    src: "/images/download.png",
    title: "Project One",
    desc: "Description for image one",
  },
  {
    id: 2,
    src: "/images/2023-07-11 08 36 09.png",
    title: "Project Two",
    desc: "Description for image two",
  },
  {
    id: 3,
    src: "/images/Laravel-01-29-2026_02_02_PM.png",
    title: "Project Three",
    desc: "Description for image three",
  },
  {
    id: 4,
    src: "/images/Document-01-29-2026_12_53_PM.png",
    title: "Project Four",
    desc: "Description for image four",
  },
  {
    id: 5,
    src: "/images/2023-07-11 20 15 24.png",
    title: "Project Five",
    desc: "Description for image five",
  },
  {
    id: 6,
    src: "/images/archi_website.png",
    title: "Project Six",
    desc: "Description for image six",
  },
];

const CARD_WIDTH = 280;

export default function SlideProject() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [active, setActive] = useState<(typeof images)[0] | null>(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  /* INTRO REVEAL — DESKTOP ONLY */
  useEffect(() => {
    if (visibleCount < images.length) {
      const t = setTimeout(() => {
        setVisibleCount((v) => v + 1);
      }, 120);
      return () => clearTimeout(t);
    }
  }, [visibleCount]);

  const handleImageClick = (img: (typeof images)[0]) => {
    setActive((prev) => (prev?.id === img.id ? null : img));
  };

  return (
    <>
      {/* ================= MOBILE DRAGGABLE CAROUSEL ================= */}
      <div className="md:hidden w-full pt-10 overflow-hidden">
        <motion.div
          className="flex cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{
            left: -(images.length - 1) * CARD_WIDTH,
            right: 0,
          }}
          animate={{ x: -mobileIndex * CARD_WIDTH }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onDragEnd={(_, info) => {
            const newIndex = Math.round(
              (mobileIndex * CARD_WIDTH - info.offset.x) / CARD_WIDTH,
            );
            setMobileIndex(Math.min(Math.max(newIndex, 0), images.length - 1));
          }}
        >
          {images.map((img) => (
            <motion.div
              key={img.id}
              className="relative w-[260px] h-[70vh] mx-2 flex-shrink-0 rounded-xl overflow-hidden cursor-pointer"
              whileTap={{ scale: 0.96 }}
              onClick={() => handleImageClick(img)}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* MOBILE DOTS */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setMobileIndex(i)}
              className={`w-2 h-2 rounded-full transition ${
                i === mobileIndex ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ================= DESKTOP GRID (UNCHANGED) ================= */}
      <div className="hidden md:flex gap-6 relative w-full pt-10 justify-center overflow-hidden">
        <div
          className="absolute bottom-[-10%] left-0 w-full h-[80vh]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,.5) 50%, rgba(0,0,0,1) 70%)",
            pointerEvents: "none",
            zIndex: 15,
          }}
        />

        {images.slice(0, visibleCount).map((img) => (
          <motion.div
            key={img.id}
            layoutId={`image-${img.id}`}
            className="relative w-64 h-[90vh] cursor-pointer rounded-xl overflow-hidden shadow-lg flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleImageClick(img)}
          >
            <Image
              src={img.src}
              alt={img.title}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
            />

            {/* Modal Content */}
            <motion.div
              layoutId={`image-${active.id}`}
              className="relative w-[90vw] md:w-[30vw] h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl p-6 z-50"
              transition={{ type: "spring", stiffness: 220, damping: 25 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Close Button */}
              <button
                onClick={() => setActive(null)}
                className="absolute top-3 right-3 z-50 text-white bg-black/50 hover:bg-black/70 rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold"
              >
                ×
              </button>

              <Image
                src={active.src}
                alt={active.title}
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
