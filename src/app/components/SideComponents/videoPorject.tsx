'use client';

import { useRef, useState, useEffect } from 'react';
import {
  motion,
  useMotionValue,
  useAnimation,
  animate,
  AnimatePresence,
} from 'framer-motion';

export default function VideoProject() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showUI, setShowUI] = useState(true); 

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const controls = useAnimation();

  const playVideo = () => {
    videoRef.current?.play();
    setIsPlaying(true);
    setShowUI(false);
  };

  const pauseVideo = () => {
    videoRef.current?.pause();
    setIsPlaying(false);
    setShowUI(true);
  };

  const togglePlayPause = () => {
    isPlaying ? pauseVideo() : playVideo();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current || isPlaying) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        animate(x, dx * 0.3, { type: 'spring', stiffness: 500 });
        animate(y, dy * 0.3, { type: 'spring', stiffness: 500 });
        controls.start({ scale: 1.2 });
      } else {
        animate(x, 0, { type: 'spring', stiffness: 200 });
        animate(y, 0, { type: 'spring', stiffness: 200 });
        controls.start({ scale: 1 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y, isPlaying, controls]);

  return (
    <div className="h-[70vh] relative overflow-hidden">
      <motion.video
        ref={videoRef}
        onClick={togglePlayPause}
        src="/images/sitequest.webm"
        className="w-full h-full object-cover absolute top-0 left-0 cursor-pointer"
        muted
        initial={{ filter: 'blur(4px)' }}
        animate={{ filter: showUI ? 'blur(4px)' : 'blur(0px)' }}
        transition={{ duration: 0.6 }}
      />

      <AnimatePresence>
        {showUI && (
          <>
            <motion.div
              key="description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex flex-col items-center justify-around text-center text-white px-8 z-10"
            >
              <h2 className="text-4xl font-bold mb-4">SiteQuest Project</h2>
              <p className="text-lg max-w-4xl">
                Step into an immersive puzzle experience. This game website presents a series
                of cleverly designed challenges—including ciphers, mazes, and riddles—crafted to
                test both logic and creativity. Each level draws you deeper into a world of
                mystery, rewarding those who think outside the box.
              </p>
            </motion.div>

            <motion.button
              ref={buttonRef}
              onClick={playVideo}
              style={{ x, y }}
              animate={controls}
              initial={{ scale: 1 }}
              className="absolute left-1/2 top-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center border-4 border-white rounded-full hover:bg-white/10 transition z-20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-white"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l4-2.5a.5.5 0 0 0 0-.814l-4-2.5z" />
              </svg>
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
