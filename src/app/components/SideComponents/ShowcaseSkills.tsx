"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

const words = ["Animator", "Photographer", "UI/UX Designer", "Web Developer"];

const imageGroups = [
  [
    "/images/logo/Adobe_Photoshop_CC_icon.svg.png",
    "/images/logo/Adobe_Animate_CC_icon_(2020).svg.png",
  ],
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
  ],
];

export default function ShowcaseSkills() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const indexValue = useTransform(scrollYProgress, [0.3, 0.5], [0, words.length - 1]);
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(indexValue, "change", (latest) => {
    setActiveIndex(Math.floor(latest + 0.5));
  });
 
  const currentImages = imageGroups[activeIndex];

  return (
    <main className="bg-black text-white flex justify-between px-40 items-center">
      <section ref={sectionRef} className="h-[70vh]">
        <div className="relative h-full">
          <h1 className="absolute top-[210px] left-[-120px] text-6xl" style={{ rotate: "-90deg" }} >
            SKILLS
          </h1>
          <div className="h-full flex flex-col items-start justify-center gap-10 sticky top-0">
            {words.map((word, index) => (
              <motion.h2
                key={index}
                initial={{ opacity: 0.3, scale: 0.1 }}
                animate={{
                  opacity: index === activeIndex ? 1 : 0.3,
                  scale: index === activeIndex ? 1 : 0.99,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-6xl font-bold"
              >
                {word}
              </motion.h2>
            ))}
          </div>
        </div>
      </section>

      <div className="logo relative w-[420px] h-[220px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.2 }}
            className={`
              absolute top-0 left-0 grid gap-4
              ${currentImages.length === 3
                ? "grid-cols-2 grid-rows-2"
                : currentImages.length === 4
                ? "grid-cols-2 grid-rows-2"
                : "grid-cols-2"
              }
              w-full h-full place-items-center
            `}
          >
            {currentImages.map((src, i) => (
              <div
                key={i}
                className={`
                  flex justify-center
                  ${currentImages.length === 3 && i === 2 ? "col-span-2" : ""}
                `}
              >
                <img src={src} alt="" className="w-[100px] h-auto" />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
