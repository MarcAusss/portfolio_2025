'use client';

import { useState, useRef, useLayoutEffect, useMemo } from 'react';
import { motion, useMotionValue, useTransform, useAnimationFrame } from 'framer-motion';

const IMAGES = [
  {
    src: '/images/images1.png',
    alt: 'Puzzle 1',
    description: 'Decode ancient ciphers in this mysterious challenge.',
  },
  {
    src: '/images/images1.png',
    alt: 'Puzzle 2',
    description: 'Navigate a shifting maze using your logic and wit.',
  },
  {
    src: '/images/images1.png',
    alt: 'Puzzle 3',
    description: 'Match symbols to unlock the hidden vault.',
  },
  {
    src: '/images/images1.png',
    alt: 'Puzzle 4',
    description: 'Reconstruct broken paths to guide the light beam.',
  },
  {
    src: '/images/images1.png',
    alt: 'Puzzle 5',
    description: 'Translate alien glyphs using clues from earlier levels.',
  },
  {
    src: '/images/images1.png',
    alt: 'Puzzle 6',
    description: 'Solve visual patterns that grow in complexity.',
  },
  {
    src: '/images/images1.png',
    alt: 'Puzzle 7',
    description: 'Follow time-based clues to escape the shifting room.',
  },
];

export default function SlideProject() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

   const duplicatedImages = useMemo(() => [...IMAGES, ...IMAGES, ...IMAGES], []);

  useAnimationFrame((_, delta) => {
    if (hoveredIndex === null) {
      const current = x.get();
      x.set(current - (delta * 0.2)); // speed control
    }
  });

  const translateX = useTransform(x, (value) => {
    const width = containerRef.current?.offsetWidth || 0;
    return `${(value % -width)}px`;
  });

  return (
    <div className="overflow-hidden w-full mt-20">
      <motion.div
        ref={containerRef}
        className="flex gap-10 w-max"
        style={{ x: translateX }}
      >
         {duplicatedImages.map((img, index) => (
          <div
            key={index}
            className="relative w-[500px] shrink-0"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className={`w-full h-auto transition duration-300 transform ${
                hoveredIndex === index ? 'scale-105' : 'scale-100'
              }`}
            />
            {hoveredIndex === index && (
              <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4 bg-black/40 transition-opacity duration-300">
                <p className="text-sm">{img.description}</p>
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
