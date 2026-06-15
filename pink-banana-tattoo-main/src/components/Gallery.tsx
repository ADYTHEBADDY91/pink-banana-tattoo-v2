import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_CATEGORIES, GALLERY_IMAGES, GALLERY_TAGLINE, GalleryCategory } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('Todos');
  const { ref, isVisible } = useScrollReveal(0.05);

  const filtered =
    activeFilter === 'Todos'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeFilter);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-white">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-display text-3xl md:text-5xl font-extrabold text-gray-900">
            Galería
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-pink rounded-full mx-auto" />
          <p className="mt-6 text-pink-500 font-semibold text-lg md:text-xl italic">
            {GALLERY_TAGLINE}
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-gradient-pink text-white shadow-md'
                  : 'bg-pink-50 text-gray-600 hover:bg-pink-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <div className="masonry-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                layout
                key={img.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="masonry-item group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.description}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div>
                    <span className="inline-block bg-pink-400 text-white text-xs font-medium px-3 py-1 rounded-full mb-2">
                      {img.category}
                    </span>
                    <p className="text-white text-sm font-medium">
                      {img.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
