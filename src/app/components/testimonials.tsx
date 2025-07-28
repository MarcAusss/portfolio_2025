'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const containerRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  return (
    <main className="py-10 px-4 flex flex-col lg:flex-row items-center justify-center">
      
      <div
        className="relative w-full max-w-[500px] h-[300px] sm:h-[400px] overflow-hidden"
        onMouseMove={handleMouseMove}
        ref={containerRef}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(212, 212, 212) 1px, transparent 1px), linear-gradient(to bottom, rgb(212, 212, 212) 1px, transparent 1px)`,
            backgroundSize: '90px 90px',
            backgroundPosition: `${mouse.x * 0.2}px ${mouse.y * 0.2}px`,
            backgroundColor: '#000',
          }}
        />

        <div className="absolute inset-0 m-10 sm:m-20 bg-white" />
      </div>

      <div className="bg-white w-full max-w-[500px] h-[300px] sm:h-[400px] border-[6px] border-black relative">
        <div className="absolute">
          <img
            src="/images/Quotation-Symbol-PNG-HD-Image.png"
            alt="quote"
            className="w-[80px] sm:w-[100px] lg:w-[120px] bg-black p-3 sm:p-5 rounded-br-3xl"
          />
        </div>
        <div className="flex flex-col items-center justify-center h-full w-full text-black px-6">
          <div className="pt-16 sm:pt-20 text-center">
            <h2 className="text-lg sm:text-base  lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At nostrum saepe vel vitae aliquid eius beatae laborum voluptates temporibus accusantium.
            </h2>
            <h2 className="mt-4 font-bold text-base sm:text-lg">Jane Doe</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
