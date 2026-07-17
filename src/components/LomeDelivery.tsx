import { useState } from 'react';
import { motion } from 'motion/react';
import { Truck, MapPin, ShieldAlert, CreditCard, Clock, BadgeCheck, Sparkles } from 'lucide-react';
import { TOGO_QUARTERS } from '../data/products';

export default function LomeDelivery() {
  const [selectedQuarterIndex, setSelectedQuarterIndex] = useState(0);
  const activeQuarter = TOGO_QUARTERS[selectedQuarterIndex];

  return (
    <section id="delivery" className="py-20 theme-bg-primary relative border-t theme-border-primary">
      <div className="absolute top-1/4 left-10 w-60 h-60 bg-gold-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-gold-400 font-semibold block mb-3">Service de Course d'Élite</span>
          <h2 className="text-3xl md:text-5xl font-light uppercase theme-text-primary tracking-tight mb-4 animate-slideIn">
            LIVRAISON EXPRESS <br />
            <span className="italic font-serif text-gold-400 lowercase">et sécurisée à Lomé.</span>
          </h2>
          <p className="text-xs theme-text-secondary uppercase tracking-widest leading-relaxed mt-6">
            Grâce à notre flotte de livreurs partenaires de confiance, recevez vos articles VIP directement chez vous ou à votre bureau à Lomé dans des délais records.
          </p>
        </div>

        {/* Dynamic Calculator & Togo Context Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Calculator Interface (Left) */}
          <div className="lg:col-span-7 theme-bg-secondary border theme-border-primary p-6 md:p-10 rounded-none flex flex-col justify-between shadow-2xl relative animate-fadeIn">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 border border-gold-400 flex items-center justify-center text-gold-400 shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="text-xs uppercase tracking-widest font-semibold theme-text-primary">Estimateur de Livraison Locale</h3>
              </div>

              <p className="text-xs theme-text-secondary mb-6 leading-relaxed">
                Sélectionnez votre quartier de résidence ou de travail à Lomé pour consulter instantanément le tarif de livraison et le délai de course estimé :
              </p>

              {/* Selector list of Quarters */}
              <div className="space-y-3 mb-8">
                <label className="text-[10px] text-gold-400 font-semibold uppercase tracking-widest block mb-2">
                  Votre Quartier à Lomé
                </label>
                <div className="relative">
                  <select
                    value={selectedQuarterIndex}
                    onChange={(e) => setSelectedQuarterIndex(Number(e.target.value))}
                    className="w-full theme-bg-primary border theme-border-primary text-xs theme-text-primary rounded-none px-4 py-4 focus:border-gold-400 focus:outline-none appearance-none cursor-pointer font-sans tracking-wide"
                  >
                    {TOGO_QUARTERS.map((quarter, index) => (
                      <option key={index} value={index} className="theme-bg-secondary theme-text-primary">
                        {quarter.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gold-400 text-[10px]">
                    ▼
                  </div>
                </div>
              </div>

              {/* Dynamic results layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-none theme-bg-primary/40 border theme-border-secondary">
                
                {/* Cost result */}
                <div className="space-y-1">
                  <span className="text-[9px] theme-text-secondary/60 uppercase tracking-widest block font-bold">Frais de livraison</span>
                  <div className="text-xl font-mono font-bold text-gold-400 animate-slideIn">
                    {activeQuarter.deliveryCostXOF === 0 ? 'GRATUIT' : `${activeQuarter.deliveryCostXOF.toLocaleString('fr-FR')} F CFA`}
                  </div>
                  <p className="text-[10px] theme-text-secondary font-sans">{activeQuarter.description}</p>
                </div>

                {/* Duration result */}
                <div className="space-y-1">
                  <span className="text-[9px] theme-text-secondary/60 uppercase tracking-widest block font-bold">Délai estimé</span>
                  <div className="text-sm uppercase tracking-wider font-semibold theme-text-primary flex items-center gap-1.5 pt-1">
                    <Clock className="w-4 h-4 text-gold-400 animate-pulse" />
                    {activeQuarter.deliveryTime}
                  </div>
                  <p className="text-[10px] theme-text-secondary font-sans">Par coursier professionnel SYETA VIP.</p>
                </div>

              </div>
            </div>

            {/* Micro-CTA bottom */}
            <div className="mt-8 pt-6 border-t theme-border-primary flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-gold-400 shrink-0" />
              <p className="text-[10px] theme-text-secondary/60 leading-normal">
                Remarque : Les délais de livraison peuvent légèrement varier en fonction des conditions de trafic à Lomé (heures de pointe au Boulevard de la Paix ou au Port).
              </p>
            </div>

          </div>

          {/* Payment & Security Info (Right) */}
          <div className="lg:col-span-5 theme-bg-secondary border theme-border-primary p-6 md:p-10 rounded-none flex flex-col justify-between shadow-xl animate-fadeIn">
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-gold-400 flex items-center justify-center text-gold-400 shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h3 className="text-xs uppercase tracking-widest font-semibold theme-text-primary">Modes de Règlement</h3>
              </div>

              <p className="text-xs theme-text-secondary leading-relaxed text-justify">
                Pour assurer la sécurité absolue de nos clients, nous privilégions des solutions locales, fiables et transparentes, adaptées à vos habitudes au Togo :
              </p>

              {/* Payments Accordion Style list */}
              <div className="space-y-4">
                
                {/* cash on delivery */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-none theme-bg-primary/30 border theme-border-secondary">
                  <BadgeCheck className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-semibold theme-text-primary">Espèces à la Livraison</h4>
                    <p className="text-[10px] theme-text-secondary mt-1 leading-normal">
                      Essayez votre article à la réception à Lomé, et payez le coursier en toute sérénité après satisfaction.
                    </p>
                  </div>
                </div>

                {/* Mobile money */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-none theme-bg-primary/30 border theme-border-secondary">
                  <BadgeCheck className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-semibold theme-text-primary">T-Money & Flooz</h4>
                    <p className="text-[10px] theme-text-secondary mt-1 leading-normal">
                      Règlement instantané via transfert d'argent mobile au Togo. Sécurisé, rapide et sans contact direct requis.
                    </p>
                  </div>
                </div>

                {/* International */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-none theme-bg-primary/30 border theme-border-secondary">
                  <BadgeCheck className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-semibold theme-text-primary">Transferts Internationaux</h4>
                    <p className="text-[10px] theme-text-secondary mt-1 leading-normal">
                      Pour la diaspora (France, USA, Canada...), paiement par Ria, Western Union, Wave ou virement bancaire pour livraison de vos cadeaux à vos proches à Lomé.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-8 p-4 bg-transparent border border-gold-400/25 rounded-none flex items-center gap-3">
              <ShieldAlert className="w-4 h-4 text-gold-400 shrink-0" />
              <span className="text-[10px] text-gold-400 leading-snug">
                Garantie SYETA VIP : Échange de taille possible sous 48h si l'article n'a pas été porté.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
