import { FOOTER, SOCIAL_LINKS } from '../data/content';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.93a8.26 8.26 0 004.76 1.5V7a4.84 4.84 0 01-1-.31z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍌</span>
              <span className="heading-display text-xl font-extrabold">
                {FOOTER.brand}
              </span>
            </div>
            <p className="text-pink-400 text-sm font-medium italic mb-3">
              {FOOTER.tagline}
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Arte permanente en tu piel. Donde la creatividad se convierte en tinta.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="heading-display text-sm font-bold mb-4 text-pink-400">
              Enlaces rápidos
            </h4>
            <ul className="space-y-2">
              {FOOTER.quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-pink-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="heading-display text-sm font-bold mb-4 text-pink-400">
              Síguenos
            </h4>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.instagram && (
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              )}
              {SOCIAL_LINKS.facebook && (
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              )}
              {SOCIAL_LINKS.tiktok && (
                <a
                  href={SOCIAL_LINKS.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                  aria-label="TikTok"
                >
                  <TikTokIcon />
                </a>
              )}
              {SOCIAL_LINKS.whatsapp && (
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-xs">{FOOTER.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
