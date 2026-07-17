import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Sparkles, Navigation, Info } from 'lucide-react';
import { ContactFormData } from '../types';

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    subject: 'Achat de produit',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeMapMarker, setActiveMapMarker] = useState<'boutique' | 'total' | 'carrefour'>('boutique');
  const [shopOpenStatus, setShopOpenStatus] = useState({ isOpen: true, text: 'OUVERT • Ferme à 21h00' });

  // Dynamically compute if shop is open based on Lomé Time
  useEffect(() => {
    // Lomé is UTC+0. Let's simulate a standard opening check (8:30 to 21:00)
    const lomeHour = new Date().getUTCHours(); // Lomé is UTC+0
    if (lomeHour >= 8 && lomeHour < 21) {
      setShopOpenStatus({ isOpen: true, text: 'OUVERT ACTUELLEMENT • Ferme à 21h00 GMT' });
    } else {
      setShopOpenStatus({ isOpen: false, text: 'FERMÉ • Ouvre à 08h30 GMT' });
    }
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;
    
    // Simulate API Submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: 'Achat de produit',
        message: ''
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 theme-bg-primary border-t theme-border-primary relative animate-fadeIn">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-gold-400 font-semibold block mb-3">Nous Trouver</span>
          <h2 className="text-3xl md:text-5xl font-light uppercase theme-text-primary tracking-tight mb-4">
            CONTACTEZ LA <br />
            <span className="italic font-serif text-gold-400 lowercase">conciergerie vip.</span>
          </h2>
          <p className="text-xs theme-text-secondary uppercase tracking-widest leading-relaxed mt-6">
            Une question sur un article, une demande de stock ou un partenariat ? Remplissez notre formulaire ou venez nous rendre visite directement à Adidogomé.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details & Interactive map (Left) */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
            
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: Address & Hours */}
              <div className="p-6 rounded-none theme-bg-secondary border theme-border-primary space-y-4 shadow-sm">
                <div className="flex items-center gap-2 text-gold-400">
                  <MapPin className="w-4 h-4 text-gold-400" />
                  <span className="text-xs uppercase tracking-widest font-semibold theme-text-primary">Boutique</span>
                </div>
                <div>
                  <p className="text-xs theme-text-secondary leading-relaxed">
                    Adidogomé, Lomé (Togo)<br />
                    Boulevard principal, face à la Station Service Total.
                  </p>
                </div>
                <div className="pt-2 border-t theme-border-primary flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${shopOpenStatus.isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                  <span className="text-[9px] theme-text-secondary/60 tracking-wider uppercase">
                    {shopOpenStatus.text}
                  </span>
                </div>
              </div>

              {/* Card 2: Contact channels */}
              <div className="p-6 rounded-none theme-bg-secondary border theme-border-primary space-y-4 shadow-sm">
                <div className="flex items-center gap-2 text-gold-400">
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span className="text-xs uppercase tracking-widest font-semibold theme-text-primary">Lignes Directes</span>
                </div>
                <div className="space-y-1.5">
                  <a href="tel:+22890000000" className="block text-xs font-mono font-bold theme-text-primary hover:text-gold-400 transition-colors">
                    Appel/WhatsApp : +228 90 00 00 00
                  </a>
                  <a href="tel:+22822000000" className="block text-xs font-mono theme-text-secondary hover:text-gold-400 transition-colors">
                    Téléphone Boutique : +228 22 00 00 00
                  </a>
                  <a href="mailto:contact@syetavip.com" className="block text-xs font-mono theme-text-secondary hover:text-gold-400 transition-colors">
                    Email : contact@syetavip.com
                  </a>
                </div>
                <div className="pt-2 border-t theme-border-primary text-[9px] theme-text-secondary/60 uppercase tracking-widest">
                  Conseillers dispo de 8h30 à 21h00
                </div>
              </div>

            </div>

            {/* Simulated Interactive Vector Map of Adidogomé, Lomé */}
            <div className="rounded-none border theme-border-primary theme-bg-secondary overflow-hidden relative shadow-lg min-h-[280px] flex-1 flex flex-col justify-between">
              
              {/* Map Header */}
              <div className="theme-bg-primary/90 border-b theme-border-primary px-4 py-3 flex items-center justify-between text-[9px] uppercase tracking-widest theme-text-secondary">
                <span className="flex items-center gap-1.5 font-semibold text-gold-400">
                  <Navigation className="w-3.5 h-3.5 text-gold-400 animate-pulse" /> Plan de quartier : Lomé, Adidogomé
                </span>
                <span className="theme-text-secondary/60">Cliquez pour repérer</span>
              </div>

              {/* Graphical Map Canvas (Stylized vector look matching luxury UI) */}
              <div className="relative flex-1 theme-bg-primary p-6 flex items-center justify-center overflow-hidden h-[200px]">
                
                {/* Decorative map streets pattern */}
                <div className="absolute inset-0 opacity-15">
                  <div className="absolute top-1/2 left-0 right-0 h-[8px] bg-gold-400/80 transform -rotate-1" /> {/* Boulevard de la Paix / Adidogomé */}
                  <div className="absolute left-1/3 top-0 bottom-0 w-[6px] bg-gold-400/80 transform rotate-12" /> {/* Avenue de la Station */}
                  <div className="absolute left-2/3 top-0 bottom-0 w-[4px] bg-gold-400/80 transform -rotate-45" /> {/* Rue locale */}
                </div>

                {/* Map Pins Grid */}
                <div className="absolute inset-0 flex items-center justify-center">
                  
                  {/* Station Total Marker */}
                  <button
                    onClick={() => setActiveMapMarker('total')}
                    className={`absolute left-[20%] top-[40%] flex flex-col items-center gap-1 cursor-pointer transition-all ${
                      activeMapMarker === 'total' ? 'scale-110 z-10' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <div className="px-2 py-1 theme-bg-secondary border theme-border-secondary theme-text-primary text-[8px] font-bold rounded-none shadow-lg uppercase">
                      Station Total
                    </div>
                    <div className="w-2 h-2 rounded-full bg-gold-400 border border-white animate-bounce" />
                  </button>

                  {/* Boutique SYETA VIP (Main Marker) */}
                  <button
                    onClick={() => setActiveMapMarker('boutique')}
                    className={`absolute left-[52%] top-[45%] flex flex-col items-center gap-1.5 cursor-pointer transition-all ${
                      activeMapMarker === 'boutique' ? 'scale-110 z-10' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <div className="px-3 py-1.5 theme-bg-primary border border-gold-400 text-gold-400 text-[9px] font-semibold rounded-none shadow-xl uppercase tracking-widest flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" /> SYETA VIP ★
                    </div>
                    <div className="relative flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-gold-400 border-2 border-white animate-ping absolute" />
                      <div className="w-3 h-3 rounded-none bg-gold-400 border border-black shadow-lg relative z-10" />
                    </div>
                  </button>

                  {/* Carrefour Adidogomé Marker */}
                  <button
                    onClick={() => setActiveMapMarker('carrefour')}
                    className={`absolute left-[75%] top-[55%] flex flex-col items-center gap-1 cursor-pointer transition-all ${
                      activeMapMarker === 'carrefour' ? 'scale-110 z-10' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <div className="px-2 py-1 theme-bg-secondary border theme-border-secondary theme-text-secondary text-[8px] font-bold rounded-none shadow-lg uppercase">
                      Carrefour Adidogomé
                    </div>
                    <div className="w-2 h-2 rounded-full bg-white border border-black" />
                  </button>

                </div>

                {/* Legend Box */}
                <div className="absolute bottom-3 left-3 right-3 theme-bg-primary/95 border theme-border-primary px-3 py-2 rounded-none text-[9px] theme-text-secondary space-y-1">
                  <span className="font-semibold text-gold-400 uppercase block mb-1">Détails de Navigation</span>
                  {activeMapMarker === 'boutique' && (
                    <p className="leading-snug">★ <strong>SYETA VIP Boutique</strong> : Juste en face de la station Total. Grand portail noir avec enseigne lumineuse VIP.</p>
                  )}
                  {activeMapMarker === 'total' && (
                    <p className="leading-snug">⛽ <strong>Station Service Total</strong> : Point de repère majeur à Adidogomé, idéale pour se garer.</p>
                  )}
                  {activeMapMarker === 'carrefour' && (
                    <p className="leading-snug">🚦 <strong>Grand Carrefour</strong> : À 3 minutes à pied de la boutique en remontant le boulevard.</p>
                  )}
                </div>

              </div>

              {/* Map Footer Action link */}
              <a
                href="https://maps.google.com/?q=Adidogome+Lome+Togo"
                target="_blank"
                rel="noreferrer"
                className="theme-bg-primary/90 hover:theme-bg-primary border-t theme-border-primary px-4 py-3.5 text-center text-xs text-gold-400 font-semibold tracking-widest flex items-center justify-center gap-2 transition-colors cursor-pointer uppercase"
              >
                Ouvrir dans Google Maps réels
                <Navigation className="w-3.5 h-3.5" />
              </a>

            </div>

          </div>

          {/* Form container (Right) */}
          <div className="lg:col-span-5 theme-bg-secondary border theme-border-primary p-6 md:p-10 rounded-none shadow-2xl relative">
            <h3 className="text-xs uppercase tracking-widest font-semibold theme-text-primary mb-2">Message de Demande VIP</h3>
            <p className="text-xs theme-text-secondary mb-6 leading-relaxed">
              Vous avez un projet de partenariat, une demande spéciale de taille, ou souhaitez réserver un créneau d'essayage privé ? Écrivez-nous :
            </p>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  className="space-y-4"
                >
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-[10px] theme-text-secondary uppercase tracking-widest font-semibold">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ex: Koffi SOUKOU"
                      className="w-full theme-bg-primary border theme-border-primary text-xs theme-text-primary rounded-none px-4 py-3 focus:border-gold-400 focus:outline-none transition-all placeholder:text-gray-600"
                    />
                  </div>

                  {/* Phone & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] theme-text-secondary uppercase tracking-widest font-semibold">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Ex: +228 99 88 77 66"
                        className="w-full theme-bg-primary border theme-border-primary text-xs theme-text-primary rounded-none px-4 py-3 focus:border-gold-400 focus:outline-none transition-all placeholder:text-gray-600"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] theme-text-secondary uppercase tracking-widest font-semibold">
                        Adresse Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Ex: client@lome.com"
                        className="w-full theme-bg-primary border theme-border-primary text-xs theme-text-primary rounded-none px-4 py-3 focus:border-gold-400 focus:outline-none transition-all placeholder:text-gray-600"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1">
                    <label className="text-[10px] theme-text-secondary uppercase tracking-widest font-semibold">
                      Sujet de la demande *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full theme-bg-primary border theme-border-primary text-xs theme-text-primary rounded-none px-4 py-3 focus:border-gold-400 focus:outline-none transition-all cursor-pointer"
                    >
                      <option value="Achat de produit" className="theme-bg-secondary theme-text-primary">Achat de produit & Disponibilité</option>
                      <option value="Rendez-vous essayage" className="theme-bg-secondary theme-text-primary">Réservation d'un salon d'essayage</option>
                      <option value="Partenariat / Collaboration" className="theme-bg-secondary theme-text-primary">Partenariat / Collaboration commerciale</option>
                      <option value="Autre demande" className="theme-bg-secondary theme-text-primary">Autre demande</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-[10px] theme-text-secondary uppercase tracking-widest font-semibold">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez votre besoin (Modèle recherché, taille, date souhaitée...)"
                      className="w-full theme-bg-primary border theme-border-primary text-xs theme-text-primary rounded-none px-4 py-3 focus:border-gold-400 focus:outline-none transition-all placeholder:text-gray-600 resize-none"
                    />
                  </div>

                  {/* Action button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-transparent hover:bg-gold-400 text-gold-400 hover:text-black border border-gold-400 font-bold text-xs tracking-widest uppercase rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    Envoyer ma demande
                    <Send className="w-3.5 h-3.5" />
                  </button>

                </motion.form>
              ) : (
                <motion.div
                  key="success-form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 px-4 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-12 h-12 border border-gold-400 flex items-center justify-center text-gold-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold theme-text-primary">Message Reçu avec Succès !</h4>
                  <p className="text-xs theme-text-secondary max-w-sm leading-relaxed">
                    Merci <strong className="theme-text-primary">{formData.name}</strong>, votre demande concernant <strong className="text-gold-400">"{formData.subject}"</strong> a été enregistrée par notre secrétariat d'Adidogomé.
                  </p>
                  <p className="text-[10px] theme-text-secondary/60">
                    Un conseiller VIP vous rappellera sur le numéro <span className="font-mono theme-text-primary">{formData.phone}</span> dans les plus brefs délais.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-4 py-2 theme-bg-primary border theme-border-primary hover:border-gold-400/30 text-[10px] text-gold-400 uppercase tracking-widest rounded-none"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
