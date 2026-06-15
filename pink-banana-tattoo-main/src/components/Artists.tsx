import { motion } from 'framer-motion';
import { Instagram, Facebook } from 'lucide-react';
import { ARTISTS, ARTISTS_TAGLINE } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.93a8.26 8.26 0 004.76 1.5V7a4.84 4.84 0 01-1-.31z" />
    </svg>
  );
}

export default function Artists() {
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <section id="artists" className="py-24 md:py-32 bg-pink-50/40">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-display text-3xl md:text-5xl font-extrabold text-gray-900">
            Nuestros Tatuadores
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-pink rounded-full mx-auto" />
          <p className="mt-6 text-pink-500 font-semibold text-lg md:text-xl italic">
            {ARTISTS_TAGLINE}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ARTISTS.map((artist, i) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover-lift"
            >
              {/* Photo */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={artist.photo}
                  alt={artist.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="heading-display text-lg font-bold text-gray-900">
                  {artist.name}
                </h3>
                <span className="inline-block mt-1 text-pink-400 text-sm font-medium">
                  {artist.specialty}
                </span>
                <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                  {artist.bio}
                </p>

                {/* Social icons */}
                <div className="mt-4 flex items-center gap-3">
                  {artist.social.instagram && (
                    <a
                      href={artist.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-400 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={18} />
                    </a>
                  )}
                  {artist.social.facebook && (
                    <a
                      href={artist.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-400 transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={18} />
                    </a>
                  )}
                  {artist.social.tiktok && (
                    <a
                      href={artist.social.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-400 transition-colors"
                      aria-label="TikTok"
                    >
                      <TikTokIcon />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
