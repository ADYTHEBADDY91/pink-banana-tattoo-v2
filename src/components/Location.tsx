import { MapPin, Clock, Calendar } from 'lucide-react';
import { LOCATION } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { motion } from 'framer-motion';

export default function Location() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="location" className="py-24 md:py-32 bg-white">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-display text-3xl md:text-5xl font-extrabold text-gray-900">
            {LOCATION.sectionTitle}
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-pink rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-lg min-h-[350px] lg:min-h-[450px]"
          >
            <iframe
              src={LOCATION.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '350px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Pink Banana Tattoo"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center gap-6"
          >
            {/* Address */}
            <div className="bg-pink-50/60 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-pink-400 shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="heading-display text-lg font-bold text-gray-900 mb-1">
                    Dirección
                  </h3>
                  <p className="text-gray-600">{LOCATION.address}</p>
                </div>
              </div>
            </div>

            {/* Availability badge */}
            <div className="bg-pink-50/60 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <Calendar className="text-pink-400 shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="heading-display text-lg font-bold text-gray-900 mb-1">
                    Disponibilidad
                  </h3>
                  <span className="inline-block mt-1 bg-pink-100 text-pink-600 text-sm font-semibold px-4 py-1.5 rounded-full">
                    {LOCATION.availability}
                  </span>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-pink-50/60 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <Clock className="text-pink-400 shrink-0 mt-1" size={24} />
                <div className="w-full">
                  <h3 className="heading-display text-lg font-bold text-gray-900 mb-3">
                    Horarios
                  </h3>
                  <ul className="space-y-2">
                    {LOCATION.schedule.map((s) => (
                      <li key={s.day} className="flex justify-between text-sm">
                        <span className="text-gray-600">{s.day}</span>
                        <span className="text-gray-900 font-medium">{s.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
