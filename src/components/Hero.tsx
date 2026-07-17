import { motion } from 'motion/react';
import { ArrowRight, Sparkles, ShieldCheck, Truck, Store } from 'lucide-react';

interface HeroProps {
  onDiscoverClick: () => void;
}

export default function Hero({ onDiscoverClick }: HeroProps) {
  const advantages = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-gold-400" />,
      title: 'Produits 100% Authentiques',
      desc: 'Chaussures, vêtements, parfums d\'exception & soins de beauté importés en direct.',
    },
    {
      icon: <Store className="w-6 h-6 text-gold-400" />,
      title: 'Accueil VIP en Boutique',
      desc: 'Venez essayer vos pièces ou tester nos fragrances à Adidogomé, Lomé.',
    },
    {
      icon: <Truck className="w-6 h-6 text-gold-400" />,
      title: 'Service Livraison Express',
      desc: 'Livraison sécurisée partout à Lomé et expédition internationale.',
    },
  ];

  return (
    <section id="home" className="relative theme-bg-primary overflow-hidden pt-4 pb-16 md:py-24 border-b theme-border-primary">
      {/* Decorative luxury ambient glows (subtle) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text content (Left) */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gold-400 text-xs font-semibold uppercase tracking-[0.4em] mb-4 flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>Nouvelle Collection 2026</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight theme-text-primary uppercase">
                L’ÉLÉGANCE <br />
                <span className="italic font-serif text-gold-400">à chaque pas.</span>
              </h1>
              <p className="text-sm sm:text-base theme-text-secondary max-w-xl leading-relaxed font-sans">
                Découvrez une sélection exclusive de chaussures, vêtements haut de gamme, parfums prestigieux et soins cosmétiques d'exception au cœur de Lomé. L'expérience VIP commence ici avec le catalogue numérisé de la boutique de référence à Adidogomé.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={onDiscoverClick}
                className="inline-flex items-center justify-center gap-2 bg-gold-400 theme-text-on-vip-rose px-10 py-4 text-xs uppercase font-bold tracking-widest hover:bg-gold-500 transition-colors rounded-none cursor-pointer shadow-lg"
              >
                Découvrir la collection
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
              <a
                href="#boutique"
                className="inline-flex items-center justify-center px-10 py-4 bg-transparent border border-gold-400/30 hover:border-gold-400 theme-text-primary hover:text-gold-400 transition-colors text-xs uppercase font-bold tracking-widest rounded-none cursor-pointer"
              >
                La Boutique
              </a>
            </motion.div>

            {/* Togo context key facts list */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="pt-8 border-t theme-border-primary grid grid-cols-3 gap-6"
            >
              <div>
                <span className="block text-[10px] uppercase tracking-widest theme-text-secondary mb-1">Qualité</span>
                <span className="text-sm font-medium italic text-gold-400">100% Authentique</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest theme-text-secondary mb-1">Lieu d'exception</span>
                <span className="text-sm font-medium italic text-gold-400">Adidogomé, Lomé</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest theme-text-secondary mb-1">Livraison</span>
                <span className="text-sm font-medium italic text-gold-400">Lomé & International</span>
              </div>
            </motion.div>
          </div>

          {/* Large Hero Image Layout (Right) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Visual background framing */}
            <div className="absolute inset-0 bg-transparent border theme-border-secondary rounded-none pointer-events-none" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-none border theme-border-primary shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
                alt="Modèle Mode VIP SYETA"
                referrerPolicy="no-referrer"
                className="w-full h-[350px] sm:h-[450px] lg:h-[550px] object-cover hover:scale-102 transition-transform duration-1000 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent" />
              
              {/* Overlay brand badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-none theme-bg-darker/90 border theme-border-primary">
                <span className="text-[9px] text-gold-400 tracking-[0.2em] uppercase font-bold block mb-1">Signature VIP</span>
                <p className="text-xs theme-text-primary/95 font-serif italic leading-relaxed">
                  "L’élégance n'est pas une question de luxe ostentatoire, c'est l'harmonie parfaite entre distinction et simplicité."
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          {advantages.map((adv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="p-8 rounded-none theme-bg-secondary/40 border theme-border-secondary hover:border-gold-400/50 transition-all group"
            >
              <div className="w-12 h-12 border border-gold-400 mb-6 flex items-center justify-center text-gold-400 group-hover:scale-105 transition-transform">
                {adv.icon}
              </div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold theme-text-primary mb-2">
                {adv.title}
              </h3>
              <p className="text-xs theme-text-secondary leading-relaxed">
                {adv.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
