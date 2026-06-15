import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { CONTACT, SOCIAL_LINKS } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-pink-50/40">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-display text-3xl md:text-5xl font-extrabold text-gray-900">
            {CONTACT.sectionTitle}
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-pink rounded-full mx-auto" />
          <p className="mt-6 text-gray-600 max-w-xl mx-auto">
            {CONTACT.sectionSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-md space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none transition-all text-sm"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none transition-all text-sm"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none transition-all text-sm"
                placeholder="+52 55 0000 0000"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none transition-all text-sm resize-none"
                placeholder="Cuéntanos sobre la idea de tu tatuaje..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-pink text-white font-semibold py-3.5 rounded-xl hover:opacity-90 transition-opacity"
            >
              {submitted ? 'Mensaje enviado' : 'Enviar mensaje'}
            </button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-md flex items-center gap-4 hover-lift">
              <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="text-pink-400" size={22} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900">Teléfono</h4>
                <a href={`tel:${CONTACT.phone}`} className="text-gray-600 text-sm hover:text-pink-400 transition-colors">
                  {CONTACT.phone}
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md flex items-center gap-4 hover-lift">
              <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="text-pink-400" size={22} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900">Email</h4>
                <a href={`mailto:${CONTACT.email}`} className="text-gray-600 text-sm hover:text-pink-400 transition-colors">
                  {CONTACT.email}
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md flex items-center gap-4 hover-lift">
              <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center shrink-0">
                <MessageCircle className="text-pink-400" size={22} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900">WhatsApp</h4>
                <a
                  href={CONTACT.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 text-sm hover:text-pink-400 transition-colors"
                >
                  {CONTACT.whatsapp}
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Síguenos</h4>
              <div className="flex items-center gap-4">
                {SOCIAL_LINKS.instagram && (
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-gray-500 hover:text-pink-400 hover:bg-pink-100 transition-all"
                    aria-label="Instagram"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                )}
                {SOCIAL_LINKS.facebook && (
                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-gray-500 hover:text-pink-400 hover:bg-pink-100 transition-all"
                    aria-label="Facebook"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                )}
                {SOCIAL_LINKS.tiktok && (
                  <a
                    href={SOCIAL_LINKS.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-gray-500 hover:text-pink-400 hover:bg-pink-100 transition-all"
                    aria-label="TikTok"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.93a8.26 8.26 0 004.76 1.5V7a4.84 4.84 0 01-1-.31z" />
                    </svg>
                  </a>
                )}
                {SOCIAL_LINKS.whatsapp && (
                  <a
                    href={SOCIAL_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-gray-500 hover:text-pink-400 hover:bg-pink-100 transition-all"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle size={20} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
