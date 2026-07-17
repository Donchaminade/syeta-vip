import { motion } from 'motion/react';
import { Award, Glasses, ShieldAlert, Sparkles, MapPin, Coffee, GlassWater, Crown } from 'lucide-react';

export default function BoutiqueInfo() {
  const vipServices = [
    {
      icon: <Crown className="w-5 h-5 text-gold-400" />,
      title: "Salon d'Essayage Privé",
      desc: "Un espace d'essayage intimiste et climatisé, réservé pour vous essayer vos tenues en toute sérénité."
    },
    {
      icon: <Coffee className="w-5 h-5 text-gold-400" />,
      title: "Boisson de Bienvenue",
      desc: "Profitez d'un espresso d'exception, d'une coupe de champagne ou d'un jus local haut de gamme durant votre séance shopping."
    },
    {
      icon: <Award className="w-5 h-5 text-gold-400" />,
      title: "Service Personal Shopper",
      desc: "Des conseillers en image dédiés pour composer des tenues adaptées à vos grands événements à Lomé."
    }
  ];

  return (
    <section id="boutique" className="py-20 theme-bg-primary relative overflow-hidden border-b theme-border-primary">
      {/* Absolute background accent lights */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-gold-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Intro Grid: Story & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Photo Showcase (Left) */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-transparent border theme-border-secondary rounded-none pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-none overflow-hidden shadow-2xl border theme-border-primary theme-bg-secondary"
            >
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
                alt="Intérieur Boutique VIP"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] md:h-[480px] object-cover hover:scale-102 transition-transform duration-1000 grayscale hover:grayscale-0"
              />
              {/* Gold gradient edge */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent" />
              
              {/* Floating review badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-none theme-bg-darker/95 border theme-border-primary">
                <span className="text-[9px] text-gold-400 tracking-[0.2em] uppercase font-bold block">L'EXPÉRIENCE PHYSIQUE</span>
                <p className="text-xs theme-text-primary/95 font-serif mt-2 italic leading-relaxed">
                  "Face à la station Total d'Adidogomé, un écrin de calme et de prestige où le style prend tout son sens."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Texts content (Right) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 md:space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.4em] text-gold-400 font-semibold block">La Boutique</span>
              <h2 className="text-3xl md:text-5xl font-light uppercase theme-text-primary tracking-tight">
                L'Histoire d'une <br />
                <span className="italic font-serif text-gold-400 lowercase">vision vip.</span>
              </h2>
            </div>

            <p className="text-sm theme-text-secondary font-sans leading-relaxed text-justify">
              Née au cœur d'Adidogomé à Lomé, la boutique <strong className="text-gold-400 font-semibold">SYETA VIP</strong> est le fruit d’une passion absolue pour la mode internationale, l'élégance intemporelle et les chaussures de prestige. 
            </p>
            
            <p className="text-xs theme-text-secondary/70 uppercase tracking-widest leading-relaxed text-justify">
              Notre vocation est simple : digitaliser et sublimer l'accès aux plus grandes marques et créations de luxe pour la clientèle exigeante du Togo et de la diaspora. Nous sélectionnons chaque pièce sur des critères de qualité rigoureux, de finitions haut de gamme et d'authenticité certifiée.
            </p>

            {/* Core Values Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t theme-border-primary">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-gold-400 flex items-center justify-center text-gold-400 mt-1 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold theme-text-primary">Sélection Élite</h4>
                  <p className="text-xs theme-text-secondary mt-1 font-sans">Uniquement des designs tendance et matériaux haut de gamme.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-gold-400 flex items-center justify-center text-gold-400 mt-1 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold theme-text-primary">Ancrage Local</h4>
                  <p className="text-xs theme-text-secondary mt-1 font-sans">Boutique physique à Adidogomé pour un essayage sur-mesure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Services VIP Concept */}
        <div className="pt-16 border-t theme-border-primary">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.4em] text-gold-400 font-semibold block mb-2">Le Concept VIP</span>
            <h3 className="text-2xl md:text-4xl font-light uppercase theme-text-primary tracking-tight">
              UN PRIVILÈGE <span className="italic font-serif text-gold-400 lowercase">sur-mesure.</span>
            </h3>
            <p className="text-xs theme-text-secondary/70 uppercase tracking-widest mt-4">
              Chaque visiteur bénéficie d'une attention digne des grands salons de prestige.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vipServices.map((srv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-none theme-bg-secondary/40 border theme-border-secondary hover:border-gold-400/30 transition-all flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 border border-gold-400 mb-6 flex items-center justify-center text-gold-400 group-hover:scale-105 transition-transform">
                  {srv.icon}
                </div>
                <h4 className="text-xs uppercase tracking-widest font-semibold theme-text-primary mb-3">
                  {srv.title}
                </h4>
                <p className="text-xs theme-text-secondary leading-relaxed max-w-xs">
                  {srv.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
