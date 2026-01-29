'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'SPEAK',
    miniDesc: 'SPEAK helps speech professionals assist individuals via sign language.',
    description: 'SPEAK is a system designed to support individuals who experience difficulties with speech. Through the platform, registered professionals provide guided instruction in sign language to help users communicate more effectively.',
    images: ['/images/Screenshot 2026-01-29 140118.png', '/images/Screenshot 2026-01-29 140231.png', '/images/Screenshot 2026-01-29 140249.png', '/images/Screenshot 2026-01-29 140516.png', '/images/Screenshot 2026-01-29 140408.png', '/images/Screenshot 2026-01-29 140453.png'],
  },
  {
    id: 2,
    title: 'Lease for me',
    miniDesc: 'Lease for me is a realstate website for those who are looking for a new home',
    description: 'LeaseForMe is a real estate website designed to help individuals and families find their ideal homes efficiently, offering detailed property listings, photos, and contact tools to connect with landlords and agents.',
    images: ['/images/Screenshot 2026-01-29 142229.png', '/images/Screenshot 2026-01-29 142323.png', '/images/Screenshot 2026-01-29 142418.png', '/images/Screenshot 2026-01-29 142450.png'],
  },
  {
    id: 3,
    title: 'LICOES LOMS',
    miniDesc: 'LICOES LOMS tracks students’ attendance, payments, activities, and clearances.',
    description: 'LICOES LOMS is a system designed for school organizations to manage student records efficiently. It tracks attendance, sanctions, school payments, activities, and clearance processes, enabling officers like LICOES to reduce reliance on hard copy documents and streamline clearance approvals.',
    images: ['/images/Screenshot 2026-01-29 143428.png', '/images/Screenshot 2026-01-29 144136.png', '/images/Screenshot 2026-01-29 144325.png', '/images/Screenshot 2026-01-29 144402.png', '/images/Screenshot 2026-01-29 144422.png', '/images/Screenshot 2026-01-29 144444.png'],
  },
];

export default function ClientsProject() {
  const [activeProject, setActiveProject] = useState<any>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '5%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  const openModal = (project: any) => {
    setActiveProject(project);
    setCurrentImage(0);
  };

  const closeModal = () => setActiveProject(null);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === activeProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? activeProject.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* GRID */}
      <div className="max-w-6xl mx-auto pt-10 pb-32 grid grid-cols-1 md:grid-cols-3 gap-10">
        {[y1, y2, y3].map((y, index) => (
          <motion.div
            key={projects[index].id}
            style={{ y }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            onClick={() => openModal(projects[index])}
            className="cursor-pointer overflow-hidden bg-neutral-900 text-white shadow-xl hover:scale-[1.03] transition-transform"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={projects[index].images[0]}
                alt={projects[index].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                {projects[index].title}
              </h3>
              <p className="text-neutral-400">
                {projects[index].miniDesc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-neutral-900 text-white max-w-4xl w-full rounded-2xl overflow-hidden relative"
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Carousel */}
              <div className="relative h-[60vh]">
                <img
                  src={activeProject.images[currentImage]}
                  className="w-full h-full object-cover"
                />

                {/* Controls */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 w-10 h-10 rounded-full"
                >
                  ‹
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 w-10 h-10 rounded-full"
                >
                  ›
                </button>
              </div>

              {/* Details */}
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">
                  {activeProject.title}
                </h2>
                <p className="text-neutral-400">
                  {activeProject.description}
                </p>
              </div>

              {/* Close */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-xl"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
