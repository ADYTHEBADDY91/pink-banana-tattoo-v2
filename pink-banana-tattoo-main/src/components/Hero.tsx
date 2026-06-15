import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { HERO } from '../data/content';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO.backgroundImage}
          alt="Pink Banana Tattoo Studio"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-pink-900/55" />
      </div>

      {/* Floating banana decorations */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-[10%] text-6xl md:text-8xl opacity-20 select-none pointer-events-none"
      >
        🍌
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-32 left-[8%] text-5xl md:text-7xl opacity-15 select-none pointer-events-none"
      >
        🍌
      </motion.div>

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-pink-300 font-semibold text-sm md:text-base tracking-widest uppercase mb-4"
        >
          Pink Banana Tattoo Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="heading-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-tight tracking-tight"
        >
          {HERO.title}
          <br />
          <span className="text-gradient-pink">{HERO.subtitle}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
          className="mt-6 md:mt-8 text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light"
        >
          {HERO.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mt-8 md:mt-10"
        >
          <a
            href={HERO.cta.href}
            className="inline-block bg-gradient-pink text-white font-semibold text-lg px-8 py-4 rounded-full hover:shadow-[0_0_30px_rgba(255,111,181,0.5)] transition-all duration-300 hover:scale-105"
          >
            {HERO.cta.label}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-white/60" size={32} />
      </motion.div>
    </section>
  );
}
