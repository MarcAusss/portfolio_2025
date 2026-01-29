"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

const words = ["Photographer", "UI/UX Designer", "Web Developer"];

const imageGroups = [
  [
    "/images/logo/Adobe_Photoshop_CC_icon.svg.png",
    "/images/logo/Adobe_Photoshop_Lightroom_CC_logo.svg.png",
    "/images/logo/logo_01.png",
  ],
  [
    "/images/logo/Adobe_Illustrator_CC_icon.svg.png",
    "/images/logo/dribbble-icon-1-logo-png-transparent.png",
    "/images/logo/Figma.png",
  ],
  [
    "/images/logo/5847ea22cef1014c0b5e4833.png",
    "/images/logo/Laravel-Logo.wine.png",
    "/images/logo/React.webp",
    "/images/logo/Wordpress_Blue_logo.png",
    "/images/logo/Tailwind_CSS_Logo.svg.png",
    "/images/logo/seal-color.png",
    "/images/logo/Bootstrap_logo.svg.png",
    "/images/logo/javascript-logo-javascript-icon-transparent-free-png.webp",
    "/images/logo/nextjs-icon-icon-sm.png",
  ],
];

export default function ShowcaseSkills() {
  const sectionRef = useRef(null);

  /* Desktop scroll logic */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const indexValue = useTransform(
    scrollYProgress,
    [0.3, 0.5],
    [0, words.length - 1]
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(indexValue, "change", (latest) => {
    setActiveIndex(Math.floor(latest + 0.5));
  });

  const currentImages = imageGroups[activeIndex];

  return (
    <main className="bg-black text-white">

      {/* ================= MOBILE LAYOUT ================= */}
      <section className="md:hidden px-6 py-16 space-y-16">
        <h1 className="text-4xl font-bold text-center">SKILLS</h1>

        {words.map((word, index) => (
          <div key={index} className="space-y-6">
            <h2 className="text-3xl font-bold text-center">{word}</h2>

            <div
              className={`
                grid gap-4 place-items-center
                ${imageGroups[index].length <= 4
                  ? "grid-cols-2"
                  : "grid-cols-3"}
              `}
            >
              {imageGroups[index].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="w-[70px] h-auto"
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ================= DESKTOP LAYOUT ================= */}
      <section
        ref={sectionRef}
        className="hidden md:flex h-[70vh] justify-between items-center px-40"
      >
        <div className="relative h-full">
          <h1
            className="absolute top-[32%] left-[-120px] text-6xl"
            style={{ rotate: "-90deg" }}
          >
            SKILLS
          </h1>

          <div className="h-full flex flex-col justify-center gap-10 sticky top-0">
            {words.map((word, index) => (
              <motion.h2
                key={index}
                initial={{ opacity: 0.3, scale: 0.95 }}
                animate={{
                  opacity: index === activeIndex ? 1 : 0.3,
                  scale: index === activeIndex ? 1 : 0.98,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-6xl font-bold"
              >
                {word}
              </motion.h2>
            ))}
          </div>
        </div>

        <div className="relative w-[420px] h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.25 }}
              className={`
                absolute inset-0 grid gap-4 place-items-center
                ${currentImages.length <= 4
                  ? "grid-cols-2"
                  : "grid-cols-4"}
              `}
            >
              {currentImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="w-[100px] h-auto"
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
