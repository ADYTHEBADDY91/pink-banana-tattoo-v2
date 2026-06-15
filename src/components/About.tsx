import { Shield, Palette, Star } from 'lucide-react';
import { ABOUT } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { motion } from 'framer-motion';

const iconMap = {
  'shield-check': Shield,
  palette: Palette,
  star: Star,
} as const;

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32 bg-pink-50/50">
      <div ref={ref} className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-display text-3xl md:text-5xl font-extrabold text-gray-900">
            {ABOUT.sectionTitle}
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-pink rounded-full mx-auto" />
          <p className="mt-6 text-pink-500 font-semibold text-lg md:text-xl italic">
            {ABOUT.tagline}
          </p>
        </motion.div>

        {/* Two-column: text + process photos | studio interior */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left: description + process action photos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {ABOUT.description}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {ABOUT.processImages.map((img, i) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                  className="relative overflow-hidden rounded-2xl aspect-[3/4] group"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: studio interior image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative overflow-hidden rounded-2xl shadow-xl lg:sticky lg:top-24"
          >
            <img
              src={ABOUT.studioImage}
              alt="Interior del estudio Pink Banana Tattoo"
              className="w-full object-cover rounded-2xl"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-gradient-pink text-white text-xs font-bold px-4 py-2 rounded-full shadow-md">
              Nuestro espacio
            </div>
          </motion.div>
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {ABOUT.highlights.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-5 group-hover:shadow-[0_0_20px_rgba(255,111,181,0.25)] transition-shadow duration-300">
                  <Icon className="text-pink-400" size={28} />
                </div>
                <h3 className="heading-display text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
