"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  { id: 1, src: "/images/download.png", title: "Project One", desc: "Description for image one" },
  { id: 2, src: "/images/2023-07-11 08 36 09.png", title: "Project Two", desc: "Description for image two" },
  { id: 3, src: "/images/Laravel-01-29-2026_02_02_PM.png", title: "Project Three", desc: "Description for image three" },
  { id: 4, src: "/images/Document-01-29-2026_12_53_PM.png", title: "Project Four", desc: "Description for image four" },
  { id: 5, src: "/images/2023-07-11 20 15 24.png", title: "Project Five", desc: "Description for image five" },
  { id: 6, src: "/images/archi_website.png", title: "Project Six", desc: "Description for image six" },
];  

export default function SlideProject() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [active, setActive] = useState<(typeof images)[0] | null>(null);

  /* INTRO: reveal images one by one */
  useEffect(() => {
    if (visibleCount < images.length) {
      const t = setTimeout(() => {
        setVisibleCount(v => v + 1);
      }, 120);
      return () => clearTimeout(t);
    }
  }, [visibleCount]);

  return (
    <>
    {/* Top fade overlay */}
       
      {/* IMAGE GRID */}
      <div className="flex gap-6 relative w-full pt-10 justify-center overflow-hidden">
         <div
          className="absolute bottom-[-10%] left-0 w-full h-[80vh]"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,.5) 50%, rgba(0,0,0,1) 70%)',
            pointerEvents: 'none', // allows clicks through overlay
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
            onClick={() => setActive(img)}
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

      {/* MODAL */}
      <AnimatePresence>
        {active && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
            />

            {/* MODAL CONTENT */}
            <motion.div
              layoutId={`image-${active.id}`}
              className="fixed z-50 top-1/2 left-1/2 w-[30vw] max-w-screen h-[100vh] 
                         -translate-x-1/2 -translate-y-1/2
                         bg-white rounded-2xl overflow-hidden shadow-2xl p-10"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 220, damping: 25 }}
            >
              <div className="relative w-full h-full">
                <div className="flex">
                  <Image
                  src={active.src}
                  alt={active.title}
                  fill
                  className="object-fit"
                />
                <div className=""></div>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-semibold">{active.title}</h2>
                <p className="text-gray-600 mt-2">{active.desc}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
