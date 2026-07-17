import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Truck, ShieldCheck, CreditCard, Sparkles } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  icon: React.ReactNode;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "Comment se passe la livraison à Lomé et à l'intérieur du Togo ?",
      answer: "Nous livrons directement à votre domicile ou bureau à Lomé par coursier en moins de 24 heures (et sous 3h pour les urgences). Les frais varient entre 1 000 et 2 000 F CFA selon votre quartier (Adidogomé, Agoè, Hedzranawoé, Baguida, etc.). Pour l'intérieur du Togo (Kpalimé, Atakpamé, Sokodé, Kara, Dapaong), les expéditions se font de manière sécurisée via les compagnies de transport routier partenaires (courrier express sous 24h à 48h).",
      icon: <Truck className="w-4 h-4 text-gold-400" />
    },
    {
      question: "Puis-je essayer les articles en boutique ou à la livraison ?",
      answer: "Absolument ! Notre showroom physique vous accueille chaleureusement à Adidogomé (juste en face de la Station Total) pour des essayages en toute sérénité. De plus, pour les livraisons à Lomé, notre coursier peut patienter quelques instants pour vous permettre d'essayer l'article. Si la pointure ou la coupe ne correspond pas, l'échange ou le retour est immédiat.",
      icon: <Sparkles className="w-4 h-4 text-gold-400" />
    },
    {
      question: "Quels sont les moyens de paiement acceptés ?",
      answer: "Pour votre commodité, nous acceptons les paiements en espèces lors de la livraison ou directement au comptoir de notre boutique. Vous pouvez également régler de manière instantanée et sécurisée via Mobile Money : Wave, T-Money (+228 90 00 00 00) ou Flooz, très pratiques pour valider rapidement vos réservations VIP.",
      icon: <CreditCard className="w-4 h-4 text-gold-400" />
    },
    {
      question: "Les articles du catalogue VIP sont-ils de qualité authentique ?",
      answer: "Chaque pièce figurant dans notre catalogue VIP fait l'objet d'une sélection minutieuse. Nous importons directement des collections prestigieuses de chaussures de créateurs, de moccasins en cuir véritable, de vêtements d'élite et d'accessoires haut de gamme. Nous garantissons des finitions irréprochables et un confort d'exception digne de vos exigences de distinction.",
      icon: <ShieldCheck className="w-4 h-4 text-gold-400" />
    },
    {
      question: "Quelle est votre politique de retour et d'échange ?",
      answer: "La satisfaction de notre clientèle VIP est absolue. Si un article ne vous convient pas entièrement (souci de taille ou de coupe), vous disposez d'un délai de 48 heures pour effectuer un échange directement dans notre boutique d'Adidogomé, sous réserve que le produit n'ait pas été porté et soit retourné dans son emballage d'origine avec ses étiquettes.",
      icon: <HelpCircle className="w-4 h-4 text-gold-400" />
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 theme-bg-secondary relative border-b theme-border-primary overflow-hidden">
      {/* Background ambient luxury glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-gold-400 font-semibold block mb-3">Service Client VIP</span>
          <h2 className="text-3xl md:text-5xl font-light uppercase theme-text-primary tracking-tight mb-4">
            QUESTIONS <br />
            <span className="italic font-serif text-gold-400 lowercase">fréquentes.</span>
          </h2>
          <p className="text-xs theme-text-secondary uppercase tracking-widest leading-relaxed max-w-xl mx-auto">
            Retrouvez les réponses à vos questions concernant les livraisons rapides à Lomé, les modes de paiement et la qualité de nos collections.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="border theme-border-primary theme-bg-primary transition-all duration-300"
              >
                {/* Header Toggle Button */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none group select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 border theme-border-primary theme-bg-secondary text-gold-400">
                      {faq.icon}
                    </div>
                    <span className="text-xs md:text-sm font-medium uppercase tracking-wider theme-text-primary group-hover:text-gold-400 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="text-gold-400 shrink-0"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                {/* Answer Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-xs md:text-sm theme-text-secondary leading-relaxed border-t theme-border-primary theme-bg-secondary/35">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support direct WhatsApp Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-[10px] theme-text-secondary uppercase tracking-widest mb-4">
            Une autre question spécifique ? Notre conseiller est en ligne
          </p>
          <a
            href="https://wa.me/22890000000?text=Bonjour%20Syeta%20VIP%2C%20j%27aurais%20une%20question%20concernant..."
            target="_blank"
            referrerPolicy="no-referrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 border border-gold-400 text-gold-400 hover:bg-gold-400 hover:theme-text-on-vip-rose transition-all text-xs uppercase tracking-widest font-semibold cursor-pointer"
          >
            Discuter sur WhatsApp Direct
          </a>
        </div>

      </div>
    </section>
  );
}
