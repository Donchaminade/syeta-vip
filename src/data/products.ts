import { Product, TogoQuarter } from '../types';

export const PRODUCTS: Product[] = [
  // Shoes (Chaussures)
  {
    id: 'sh-1',
    name: 'Mocassins en Cuir VIP Royal',
    category: 'chaussures',
    subCategory: 'Mocassins',
    gender: 'homme',
    priceXOF: 45000,
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=600',
    description: 'Mocassins haut de gamme en cuir véritable italien, conçus pour l\'homme élégant et moderne. Idéaux pour les grandes cérémonies et les rendez-vous d\'affaires à Lomé.',
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Noir Brillant', 'Marron Chocolat', 'Bleu Nuit'],
    isNewArrival: true,
    isBestseller: true,
    brand: 'VIP Prestige',
    stockStatus: 'disponible'
  },
  {
    id: 'sh-2',
    name: 'Escarpins Cristaux de Luxe',
    category: 'chaussures',
    subCategory: 'Talons',
    gender: 'femme',
    priceXOF: 38000,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=600',
    description: 'Escarpins de créateur ornés de cristaux fins pour vos soirées VIP. Confort absolu et cambrure parfaite pour sublimer votre silhouette.',
    sizes: '36,37,38,39,40'.split(','),
    colors: ['Argenté', 'Or Rose', 'Noir Mat'],
    isNewArrival: true,
    brand: 'SYETA Élégance',
    stockStatus: 'disponible'
  },
  {
    id: 'sh-3',
    name: 'Sneakers Urban Legend',
    category: 'chaussures',
    subCategory: 'Sneakers',
    gender: 'mixte',
    priceXOF: 55000,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=600',
    description: 'Sneakers urbaines au style résolument tendance, combinant matériaux techniques premium et détails dorés. Un must-have de la street-fashion de Lomé.',
    sizes: '38,39,40,41,42,43,44'.split(','),
    colors: ['Blanc/Or', 'Noir/Néon', 'Multicolore'],
    isBestseller: true,
    brand: 'Street Luxe',
    stockStatus: 'disponible'
  },
  {
    id: 'sh-4',
    name: 'Sandales d\'Été Chic Adidogomé',
    category: 'chaussures',
    subCategory: 'Sandales',
    gender: 'femme',
    priceXOF: 22000,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600',
    description: 'Sandales plates en cuir souple tressé main. Confortables et chics, parfaites pour le climat chaud de Lomé.',
    sizes: ['37', '38', '39', '40', '41'],
    colors: ['Camel', 'Or', 'Blanc Crème'],
    isNewArrival: false,
    brand: 'Local Craft VIP',
    stockStatus: 'disponible'
  },

  // Clothes (Vêtements)
  {
    id: 'cl-1',
    name: 'Ensemble Tunique Moderne "Lomé Chic"',
    category: 'vetements',
    subCategory: 'Ensembles',
    gender: 'homme',
    priceXOF: 48000,
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=600',
    description: 'Ensemble tunique moderne à broderies discrètes de haute qualité. Alliez tradition et modernité pour vos sorties officielles ou prières de fête.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Blanc Pur', 'Bleu Royal', 'Gris Anthracite'],
    isNewArrival: true,
    isBestseller: true,
    brand: 'SYETA Couture',
    stockStatus: 'sur_commande'
  },
  {
    id: 'cl-2',
    name: 'Robe de Soirée Satin Premium',
    category: 'vetements',
    subCategory: 'Robes',
    gender: 'femme',
    priceXOF: 35000,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600',
    description: 'Robe longue drapée en satin de soie d\'une douceur exceptionnelle. Dos nu raffiné et fente élégante pour attirer tous les regards lors des dîners de gala.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Rouge Rubis', 'Vert Émeraude', 'Noir Profond'],
    isNewArrival: true,
    brand: 'SYETA Élégance',
    stockStatus: 'disponible'
  },
  {
    id: 'cl-3',
    name: 'T-Shirt Signature SYETA VIP',
    category: 'vetements',
    subCategory: 'T-Shirts',
    gender: 'mixte',
    priceXOF: 15000,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600',
    description: 'T-shirt de notre marque signature en coton biologique épais. Logo SYETA brodé au fil d\'or sur la poitrine.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Noir/Or', 'Blanc/Or'],
    isBestseller: false,
    brand: 'SYETA VIP',
    stockStatus: 'disponible'
  },
  {
    id: 'cl-4',
    name: 'Costume Croisé Slim Fit',
    category: 'vetements',
    subCategory: 'Costumes',
    gender: 'homme',
    priceXOF: 85000,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600',
    description: 'Costume croisé cintré de confection haut de gamme. Tissu respirant adapté au climat tropical, détails de doublure soignés.',
    sizes: ['48', '50', '51', '52', '54', '56'],
    colors: ['Gris Prince de Galles', 'Bleu Marine', 'Noir'],
    isNewArrival: false,
    isBestseller: true,
    brand: 'VIP Prestige',
    stockStatus: 'disponible'
  },

  // Accessories (Accessoires)
  {
    id: 'ac-1',
    name: 'Montre Chronographe "Togo Gold"',
    category: 'accessoires',
    subCategory: 'Montres',
    gender: 'homme',
    priceXOF: 65000,
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=600',
    description: 'Montre haut de gamme dotée d\'un bracelet en acier inoxydable doré, d\'un cadran chronographe noir profond et de détails luminescents. Étanche et résistante.',
    sizes: ['Taille Unique'],
    colors: ['Or/Noir', 'Argent/Bleu'],
    isNewArrival: true,
    brand: 'VIP Chrono',
    stockStatus: 'disponible'
  },
  {
    id: 'ac-2',
    name: 'Lunettes de Soleil VIP Aviator',
    category: 'accessoires',
    subCategory: 'Lunettes',
    gender: 'mixte',
    priceXOF: 18000,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=600',
    description: 'Lunettes de soleil aviateur légendaires avec monture fine dorée et verres polarisés haute protection anti-UV.',
    sizes: ['Taille Unique'],
    colors: ['Monture Or / Verres Noirs', 'Monture Or / Verres Dégradés Brown'],
    isBestseller: true,
    brand: 'SYETA Eyewear',
    stockStatus: 'disponible'
  },
  {
    id: 'ac-3',
    name: 'Sac à Main Cuir Croco VIP',
    category: 'accessoires',
    subCategory: 'Sacs',
    gender: 'femme',
    priceXOF: 42000,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=600',
    description: 'Sac à main rigide en cuir véritable motif crocodile, orné de fermoirs et de chaînettes couleur or. Une pièce maîtresse pour un look irréprochable.',
    sizes: ['Taille Unique'],
    colors: ['Noir Profond', 'Vert Émeraude', 'Camel Doré'],
    isNewArrival: true,
    isBestseller: true,
    brand: 'SYETA Élégance',
    stockStatus: 'disponible'
  },

  // Beauty & Care (Cosmétiques: Parfums, Pommades, Gommages, etc.)
  {
    id: 'cos-1',
    name: 'Eau de Parfum Imperial Oud VIP',
    category: 'cosmetiques',
    subCategory: 'Parfums',
    gender: 'mixte',
    priceXOF: 65000,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=600',
    description: 'Une fragrance d\'exception mariant les notes riches du bois de oud, de l\'ambre précieux et de la rose de Damas. Sillage intense, tenue 24h garantie, parfait pour la signature VIP.',
    sizes: ['50 ml', '100 ml'],
    colors: ['Flacon Signature Or', 'Édition Cristal Noir'],
    isNewArrival: true,
    isBestseller: true,
    brand: 'VIP Fragrances',
    stockStatus: 'disponible'
  },
  {
    id: 'cos-2',
    name: 'Crème Hydratante "Lumière d\'Afrique"',
    category: 'cosmetiques',
    subCategory: 'Pommades',
    gender: 'femme',
    priceXOF: 28000,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=600',
    description: 'Une pommade de prestige nourrissante enrichie au pur beurre de karité bio des plateaux du Togo, huile d\'argan sauvage et nacres de lumière. Unifie, sublime et nourrit intensément.',
    sizes: ['150 ml', '250 ml'],
    colors: ['Formule Crème d\'Or'],
    isNewArrival: true,
    brand: 'SYETA Beauté',
    stockStatus: 'disponible'
  },
  {
    id: 'cos-3',
    name: 'Gommage Revitalisant "Éclat d\'Adidogomé"',
    category: 'cosmetiques',
    subCategory: 'Gommages',
    gender: 'mixte',
    priceXOF: 24000,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600',
    description: 'Un gommage exfoliant haut de gamme formulé avec des grains de sucre fins, des huiles précieuses locales de coco et d\'avocat. Élimine les impuretés pour révéler un teint parfait, doux et parfumé.',
    sizes: ['200 ml'],
    colors: ['Texture Gel-en-Huile'],
    isBestseller: true,
    brand: 'SYETA Beauté',
    stockStatus: 'disponible'
  },
  {
    id: 'cos-4',
    name: 'Sérum d\'Or Éclat Éternel 24K',
    category: 'cosmetiques',
    subCategory: 'Sérums',
    gender: 'femme',
    priceXOF: 35000,
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=600',
    description: 'Sérum jeunesse d\'élite infusé de particules d\'or pur 24 carats et d\'acide hyaluronique. Restaure l\'élasticité et l\'éclat naturel de la peau pour un effet glow spectaculaire.',
    sizes: ['30 ml', '50 ml'],
    colors: ['Élixir Doré'],
    isNewArrival: true,
    brand: 'VIP Cosmetics',
    stockStatus: 'disponible'
  }
];

export const TOGO_QUARTERS: TogoQuarter[] = [
  {
    name: 'Adidogomé (Boutique)',
    deliveryCostXOF: 0,
    deliveryTime: 'Retrait immédiat en boutique / Livraison en 30 min',
    description: 'Zone de la boutique principale. Livraison ultra-rapide ou click & collect gratuit.'
  },
  {
    name: 'Agoè-Nyivé',
    deliveryCostXOF: 1500,
    deliveryTime: '1h30 - 3h',
    description: 'Grand quartier résidentiel et commercial du nord de Lomé.'
  },
  {
    name: 'Tokoin / Deckon',
    deliveryCostXOF: 1000,
    deliveryTime: '1h - 2h',
    description: 'Centre des affaires, carrefours stratégiques et marchés.'
  },
  {
    name: 'Hedzranawoé',
    deliveryCostXOF: 1200,
    deliveryTime: '1h30 - 2h30',
    description: 'Quartier dynamique abritant le célèbre marché aux vêtements.'
  },
  {
    name: 'Nyékonakpoé / Kodjoviakopé',
    deliveryCostXOF: 1500,
    deliveryTime: '1h30 - 2h30',
    description: 'Zone proche de la plage, des consulats et du centre-ville historique.'
  },
  {
    name: 'Baguida / Port',
    deliveryCostXOF: 2000,
    deliveryTime: '2h - 4h',
    description: 'Secteur côtier est de Lomé, idéal pour une livraison programmée.'
  },
  {
    name: 'Amoutivé / Assigamé',
    deliveryCostXOF: 1000,
    deliveryTime: '1h - 2h',
    description: 'Secteur du Grand Marché historique de Lomé.'
  },
  {
    name: 'Klikamé / Université de Lomé',
    deliveryCostXOF: 1000,
    deliveryTime: '1h - 2h',
    description: 'Zone universitaire et quartiers environnants.'
  }
];

export const WHATSAPP_NUMBER = '+22890000000'; // Real-looking Togolese phone number (+228) for SYETA VIP
