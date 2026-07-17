import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ArrowUp, Sparkles, Check, CheckCircle2, Instagram, Video, MapPin, Phone } from 'lucide-react';

import { Product, CartItem } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import BoutiqueInfo from './components/BoutiqueInfo';
import LomeDelivery from './components/LomeDelivery';
import ContactSection from './components/ContactSection';
import SocialFeed from './components/SocialFeed';
import CartDrawer from './components/CartDrawer';
import FaqSection from './components/FaqSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Custom soft light/dark theme state
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('syeta_theme') as 'dark' | 'light') || 'dark';
    }
    return 'dark';
  });

  // Sync theme class to html/document element
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('syeta_theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Custom luxury toast state
  const [toast, setToast] = useState<{ show: boolean; message: string; subMessage?: string } | null>(null);

  // Monitor scroll for active navigation tab highlight
  useEffect(() => {
    const handleScroll = () => {
      // Back to top button visibility
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Highlight active section
      const sections = ['home', 'collections', 'boutique', 'delivery', 'contact', 'faq'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync Cart to client-side LocalStorage for seamless session retention
  useEffect(() => {
    const storedCart = localStorage.getItem('syeta_vip_cart');
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch (e) {
        console.error('Error loading stored cart state', e);
      }
    }
  }, []);

  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem('syeta_vip_cart', JSON.stringify(newCart));
  };

  // Cart operations
  const handleAddToCart = (product: Product, size: string, color: string) => {
    const existingIndex = cart.findIndex(
      (item) =>
        item.product.id === product.id &&
        item.selectedSize === size &&
        item.selectedColor === color
    );

    let updatedCart = [...cart];
    if (existingIndex > -1) {
      updatedCart[existingIndex].quantity += 1;
    } else {
      updatedCart.push({
        product,
        selectedSize: size,
        selectedColor: color,
        quantity: 1
      });
    }

    saveCart(updatedCart);
    
    // Trigger custom luxury toast feedback
    setToast({
      show: true,
      message: `${product.name} ajouté !`,
      subMessage: `Taille : ${size} • Couleur : ${color} • Prêt pour le Panier VIP`
    });

    // Auto close toast
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const handleUpdateQuantity = (productId: string, size: string, color: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId, size, color);
      return;
    }

    const updatedCart = cart.map((item) => {
      if (
        item.product.id === productId &&
        item.selectedSize === size &&
        item.selectedColor === color
      ) {
        return { ...item, quantity };
      }
      return item;
    });

    saveCart(updatedCart);
  };

  const handleRemoveItem = (productId: string, size: string, color: string) => {
    const updatedCart = cart.filter(
      (item) =>
        !(
          item.product.id === productId &&
          item.selectedSize === size &&
          item.selectedColor === color
        )
    );
    saveCart(updatedCart);
  };

  const handleClearCart = () => {
    saveCart([]);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen theme-bg-primary theme-text-primary flex flex-col justify-between selection:bg-gold-400 selection:text-black">
      
      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={setActiveSection}
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <div id="home">
          <Hero onDiscoverClick={() => handleScrollToSection('collections')} />
        </div>

        {/* Product Catalog Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          id="collections"
        >
          <Catalog onAddToCart={handleAddToCart} />
        </motion.div>

        {/* Story, Vision & VIP Concept */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          id="boutique"
        >
          <BoutiqueInfo />
        </motion.div>

        {/* Simulated Social Video Feed */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <SocialFeed />
        </motion.div>

        {/* Togo Lomé Delivery & Mobile Money widget */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          id="delivery"
        >
          <LomeDelivery />
        </motion.div>

        {/* Google Maps Centred Locator & Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          id="contact"
        >
          <ContactSection />
        </motion.div>

        {/* Questions Fréquentes (FAQ) Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          id="faq"
        >
          <FaqSection />
        </motion.div>
      </main>

      {/* Elegant Footer Layout */}
      <footer className="theme-bg-darker border-t theme-border-primary pt-16 pb-8 text-[11px] theme-text-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            
            {/* Column 1: Brand details */}
            <div className="md:col-span-5 space-y-4">
              <span className="text-lg uppercase tracking-[0.3em] font-semibold theme-text-primary">
                SYETA <span className="text-gold-400">VIP</span>
              </span>
              <p className="text-xs theme-text-secondary leading-relaxed max-w-sm">
                La référence de la mode prestigieuse et des chaussures d'exception à Adidogomé, Lomé (Togo). Digitalisation complète du catalogue physique pour un shopping moderne et sécurisé.
              </p>
              <div className="flex items-center gap-2.5 text-gold-400 font-mono text-[11px] uppercase tracking-widest font-semibold">
                <MapPin className="w-4 h-4 text-gold-400" />
                <span>Face Station Total, Adidogomé, Lomé</span>
              </div>
            </div>

            {/* Column 2: Categories quick jump links */}
            <div className="md:col-span-3 space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold block">Collections VIP</span>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => handleScrollToSection('collections')} className="hover:text-gold-400 transition-colors cursor-pointer uppercase text-[10px] tracking-wider text-left">
                    Mocassins & Chaussures Homme
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollToSection('collections')} className="hover:text-gold-400 transition-colors cursor-pointer uppercase text-[10px] tracking-wider text-left">
                    Escarpins & Talons de soirée
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollToSection('collections')} className="hover:text-gold-400 transition-colors cursor-pointer uppercase text-[10px] tracking-wider text-left">
                    Vêtements & Costumes d'Élite
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollToSection('collections')} className="hover:text-gold-400 transition-colors cursor-pointer uppercase text-[10px] tracking-wider text-left">
                    Lunettes, Montres & Accessoires
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact & Info */}
            <div className="md:col-span-4 space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold block">Assistance VIP</span>
              <ul className="space-y-2 leading-relaxed uppercase text-[10px] tracking-wider">
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <a href="tel:+22890000000" className="hover:text-gold-400 font-mono font-semibold text-gold-400">
                    +228 90 00 00 00
                  </a>
                </li>
                <li>
                  <button onClick={() => handleScrollToSection('faq')} className="hover:text-gold-400 transition-colors cursor-pointer text-left uppercase text-[10px] tracking-wider">
                    Questions Fréquentes (FAQ)
                  </button>
                </li>
                <li>
                  Horaires : <strong className="theme-text-primary">Lun - Sam (8h30 - 21h00 GMT)</strong>
                </li>
                <li>
                  Garantie : <strong className="theme-text-primary">Échange sous 48h en boutique physique</strong>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright line */}
          <div className="pt-8 border-t theme-border-primary flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest">
            <p className="theme-text-secondary">
              © 2026 SYETA VIP BOUTIQUE. Tous droits réservés. Lomé, Togo.
            </p>
            <div className="flex gap-4 theme-text-secondary">
              <a href="#" className="hover:text-gold-400 transition-colors">Mentions Légales</a>
              <span className="theme-text-secondary/20">•</span>
              <a href="#" className="hover:text-gold-400 transition-colors">Confidentialité</a>
              <span className="theme-text-secondary/20">•</span>
              <span className="text-gold-400 font-semibold">Création Digitale Premium</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Cart Slider Overlay */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating back to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 left-6 z-35 p-3.5 rounded-none theme-bg-secondary hover:bg-gold-400 hover:text-black border border-gold-400 text-gold-400 shadow-2xl transition-all cursor-pointer"
            aria-label="Retourner en haut de page"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Luxury sliding feedback toast notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 p-4 rounded-none theme-bg-secondary border theme-border-primary shadow-2xl max-w-xs flex gap-3.5 items-start cursor-pointer"
            onClick={() => {
              setIsCartOpen(true);
              setToast(null);
            }}
          >
            <div className="p-2 border border-gold-400 theme-bg-primary text-gold-400 shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[9px] text-gold-400 uppercase tracking-widest font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3 animate-pulse" /> Panier Mis à jour
              </span>
              <h4 className="text-xs theme-text-primary font-semibold mt-1 leading-snug">{toast.message}</h4>
              {toast.subMessage && (
                <p className="text-[10px] theme-text-secondary mt-0.5 leading-normal">{toast.subMessage}</p>
              )}
              <span className="text-[9px] text-gold-400 hover:underline block pt-2.5 font-semibold uppercase tracking-widest">
                Ouvrir le Panier →
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
