// ============================================================
// PINK BANANA TATTOO — Contenido editable
// Reemplaza los valores de este archivo para personalizar
// toda la landing page sin tocar los componentes.
// ============================================================

// --- NAVEGACIÓN ---
export const NAV_LINKS = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Galería', href: '#gallery' },
  { label: 'Tatuadores', href: '#artists' },
  { label: 'Ubicación', href: '#location' },
  { label: 'Contacto', href: '#contact' },
] as const;

export const NAV_CTA = {
  label: 'Agendar cita',
  href: '#contact',
};

// --- HERO ---
export const HERO = {
  title: 'Tu piel,',
  subtitle: 'nuestro lienzo.',
  tagline: 'Tatuajes y piercings con estilo propio en el corazón de la CDMX.',
  cta: {
    label: 'Reserva tu cita',
    href: '#contact',
  },
  // Fachada exterior del estudio con árbol rojo y terraza
  backgroundImage: '/images/espacio/Captura_de_pantalla_2026-06-15_003937.png',
} as const;

// --- SOBRE NOSOTROS ---
export const ABOUT = {
  sectionTitle: 'Sobre Nosotros',
  tagline: 'Cada trazo cuenta una historia. Hagamos la tuya.',
  description:
    'Pink Banana Tattoo nació de la pasión por el arte y la necesidad de crear un espacio donde la creatividad no tenga límites. Somos un estudio dedicado a transformar ideas en obras de arte permanentes, con los más altos estándares de higiene y profesionalismo. Cada tatuaje y piercing cuenta una historia, y nosotros estamos aquí para contar la tuya.',
  // Interior luminoso del estudio (camilla, cortinas rosas)
  studioImage: '/images/espacio/Captura_de_pantalla_2026-06-15_004324.png',
  // Fotos de acción que se muestran como mosaico de proceso
  processImages: [
    {
      src: '/images/tatuadores/Captura_de_pantalla_2026-06-15_004035.png',
      alt: 'Artista tatuando en el estudio',
    },
    {
      src: '/images/tatuadores/Captura_de_pantalla_2026-06-15_004739.png',
      alt: 'Aplicación de piercing en el estudio',
    },
  ],
  highlights: [
    {
      icon: 'shield-check' as const,
      title: 'Higiene Certificada',
      description: 'Esterilización profesional y materiales desechables en cada sesión.',
    },
    {
      icon: 'palette' as const,
      title: 'Estilos Variados',
      description: 'Realismo, tradicional, neotradicional, piercings y más.',
    },
    {
      icon: 'star' as const,
      title: 'Calidad Premium',
      description: 'Inkas de alta gama y equipamiento de última generación.',
    },
  ],
} as const;

// --- GALERÍA ---
// Categorías basadas en las imágenes reales disponibles
export const GALLERY_CATEGORIES = [
  'Todos',
  'Realismo',
  'Tradicional',
  'Neotradicional',
  'Piercings',
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export const GALLERY_TAGLINE = 'Arte que se queda contigo para siempre.';

// 7 imágenes reales del estudio — agrega más en /public/images/galeria/
export const GALLERY_IMAGES = [
  {
    // Retrato femenino hiperrealista en escala de grises
    src: '/images/galeria/tatuaje-retrato-realismo.png',
    category: 'Realismo' as const,
    description: 'Retrato femenino hiperrealista',
  },
  {
    // Pareja romántica enmarcada en camafeo oval con color
    src: '/images/galeria/Captura_de_pantalla_2026-06-15_004306.png',
    category: 'Realismo' as const,
    description: 'Camafeo romántico en color',
  },
  {
    // Máscara de luchador mexicano azul y rojo
    src: '/images/galeria/Captura_de_pantalla_2026-06-15_004439.png',
    category: 'Tradicional' as const,
    description: 'Máscara de luchador mexicano',
  },
  {
    // Rana samurái con espadas y flores, estilo neotradicional
    src: '/images/galeria/Captura_de_pantalla_2026-06-15_004707.png',
    category: 'Neotradicional' as const,
    description: 'Rana samurái neotradicional',
  },
  {
    // Múltiples piercings plateados decorativos en oreja
    src: '/images/galeria/piercing-oreja.png',
    category: 'Piercings' as const,
    description: 'Curation de piercings decorativos',
  },
  {
    // Piercings dorados con gemas coloridas en oreja
    src: '/images/galeria/Captura_de_pantalla_2026-06-15_004414.png',
    category: 'Piercings' as const,
    description: 'Piercings coloridos con gemas',
  },
  {
    // Piercings dorados sutiles y delicados en oreja
    src: '/images/galeria/Captura_de_pantalla_2026-06-15_004730.png',
    category: 'Piercings' as const,
    description: 'Piercings dorados minimalistas',
  },
] as const;

// --- TATUADORES ---
export const ARTISTS_TAGLINE = 'Manos expertas, visión única.';

// 4 artistas con fotos reales del estudio
export const ARTISTS = [
  {
    // Mujer con abundantes tatuajes en brazos y cuello, fondo rosa
    name: 'Valentina Rojas',
    specialty: 'Tradicional & Neotradicional',
    bio: 'Su amor por el estilo tradicional mexicano se refleja en cada pieza: colores vibrantes, líneas firmes y una personalidad que no pasa desapercibida.',
    photo: '/images/tatuadores/Captura_de_pantalla_2026-06-15_004140.png',
    social: {
      instagram: 'https://www.instagram.com/pinkbananatattoo' as string | null,
      facebook: null as string | null,
      tiktok: null as string | null,
    },
  },
  {
    // Hombre con lentes y tatuajes en ambos brazos, fondo rosa
    name: 'Diego Muñoz',
    specialty: 'Realismo & Retratos',
    bio: 'Diego transforma rostros y momentos en retratos permanentes con una técnica hiperrealista que sigue sorprendiendo a cada cliente.',
    photo: '/images/tatuadores/Captura_de_pantalla_2026-06-15_004156.png',
    social: {
      instagram: 'https://www.instagram.com/pinkbananatattoo' as string | null,
      facebook: null as string | null,
      tiktok: null as string | null,
    },
  },
  {
    // Hombre con gorra Raiders, tatuajes en ambos brazos, guantes rosas
    name: 'Marco Vidal',
    specialty: 'Blackwork & Neotradicional',
    bio: 'Con una visión urbana y contemporánea, Marco fusiona el blackwork con el neotradicional para crear piezas que son obras de arte en movimiento.',
    photo: '/images/tatuadores/Captura_de_pantalla_2026-06-15_004243.png',
    social: {
      instagram: 'https://www.instagram.com/pinkbananatattoo' as string | null,
      facebook: null as string | null,
      tiktok: null as string | null,
    },
  },
  {
    // Mujer con gafas sosteniendo herramienta de piercing, tatuajes en brazos
    name: 'Luna Chen',
    specialty: 'Piercings & Línea Fina',
    bio: 'Especialista en piercings de alta precisión y tatuajes de línea fina, Luna combina delicadeza técnica con un gusto estético irreprochable.',
    photo: '/images/tatuadores/Captura_de_pantalla_2026-06-15_004255.png',
    social: {
      instagram: 'https://www.instagram.com/pinkbananatattoo' as string | null,
      facebook: null as string | null,
      tiktok: null as string | null,
    },
  },
] as const;

// --- UBICACIÓN ---
export const LOCATION = {
  sectionTitle: 'Encuéntranos',
  address: 'C. Sindicalismo 138, Escandón II Secc, Miguel Hidalgo, 11800, Ciudad de México, CDMX',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=C.+Sindicalismo+138,+Escandon+II+Secc,+Miguel+Hidalgo,+11800,+Ciudad+de+Mexico,+CDMX&t=&z=16&ie=UTF8&iwloc=&output=embed',
  schedule: [
    { day: 'Lunes a Sábado', hours: 'Con cita previa' },
    { day: 'Domingo', hours: 'Cerrado' },
  ],
  availability: 'Abierto con cita previa',
} as const;

// --- CONTACTO ---
export const CONTACT = {
  sectionTitle: 'Contáctanos',
  sectionSubtitle: '¿Listo para tu próxima tinta? Hablemos.',
  phone: '55 3263 4080',
  email: 'hola@pinkbananatattoo.com',
  whatsapp: '55 3263 4080',
  whatsappLink: 'https://wa.me/5215532634080?text=Hola%2C%20quiero%20agendar%20una%20cita%20en%20Pink%20Banana%20Tattoo',
} as const;

// --- REDES SOCIALES ---
export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/pinkbananatattoo',
  facebook: 'https://www.facebook.com/PinkBananaTattoo/',
  tiktok: null as string | null,
  whatsapp: 'https://wa.me/5215532634080',
} as const;

// --- FOOTER ---
export const FOOTER = {
  brand: 'Pink Banana Tattoo',
  tagline: 'Pink Banana Tattoo — Donde el arte se vuelve piel.',
  copyright: `© ${new Date().getFullYear()} Pink Banana Tattoo. Todos los derechos reservados.`,
  quickLinks: NAV_LINKS,
} as const;
