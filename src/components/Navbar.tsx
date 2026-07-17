import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag, Phone, MapPin, Sparkles, Sun, Moon } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  cart: CartItem[];
  onOpenCart: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export default function Navbar({ activeSection, onNavigate, cart, onOpenCart, theme, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'collections', label: 'Collections' },
    { id: 'boutique', label: 'La Boutique' },
    { id: 'delivery', label: 'Livraison Lomé' },
    { id: 'contact', label: 'Contact & Accès' },
    { id: 'faq', label: 'FAQ' },
  ];

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro bar for VIP announcement */}
      <div id="nav-top-banner" className="theme-bg-darker border-b theme-border-secondary text-[10px] theme-text-secondary py-2.5 px-4 text-center tracking-[0.2em] uppercase flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 bg-gold-400 rounded-full shrink-0"></span>
        <span>Boutique Mode & Chaussures VIP • Adidogomé, Lomé • Livraison à domicile</span>
      </div>

      <header className="sticky top-0 z-40 theme-bg-primary/95 backdrop-blur-md border-b theme-border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-[0.2em] text-gold-400">
                  SYETA VIP
                </span>
                <span className="text-[9px] tracking-[0.3em] uppercase theme-text-secondary -mt-0.5">
                  Luxe & Lifestyle
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative text-xs uppercase tracking-[0.2em] font-medium transition-colors py-2 cursor-pointer ${
                      isActive ? 'text-gold-400 font-semibold' : 'theme-text-secondary hover:text-gold-400'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="navUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold-400"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Phone quick dial */}
              <a
                href="tel:+22890000000"
                className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-400 hover:bg-gold-400 hover:text-black transition-all border border-gold-400 px-4 py-2 rounded-none font-medium"
              >
                <Phone className="w-3 h-3 text-gold-400 shrink-0" />
                <span className="font-mono">+228 90 00 00 00</span>
              </a>

              {/* Theme Toggle (Soft Light/Dark) */}
              <button
                onClick={onToggleTheme}
                className="p-2.5 theme-text-secondary hover:text-gold-400 transition-all flex items-center justify-center cursor-pointer rounded-full hover:bg-gold-400/10"
                title={theme === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'}
              >
                {theme === 'light' ? (
                  <Moon className="w-4.5 h-4.5" />
                ) : (
                  <Sun className="w-4.5 h-4.5" />
                )}
              </button>

              {/* Shopping Bag (Cart) */}
              <button
                onClick={onOpenCart}
                className="relative p-2 theme-text-secondary hover:text-gold-400 transition-all flex items-center justify-center cursor-pointer"
                aria-label="Voir le panier d'achat"
              >
                <ShoppingBag className="w-5 h-5" />
                <AnimatePresence>
                  {totalCartItems > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1 -right-1 bg-gold-400 text-black text-[9px] font-bold w-4.5 h-4.5 rounded-none flex items-center justify-center"
                    >
                      {totalCartItems}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 theme-text-secondary hover:text-gold-400 focus:outline-none cursor-pointer"
              >
                {isOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden theme-bg-secondary border-t theme-border-primary overflow-hidden"
            >
              <div className="px-4 pt-4 pb-6 space-y-3">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`block w-full text-left px-4 py-3 text-xs uppercase tracking-widest transition-all ${
                        isActive
                          ? 'bg-gold-400/10 text-gold-400 border-l-2 border-gold-400 font-semibold'
                          : 'theme-text-secondary hover:text-gold-400 hover:bg-gold-400/5'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
                <div className="pt-4 border-t theme-border-primary px-4 space-y-3">
                  <a
                    href="tel:+22890000000"
                    className="flex items-center gap-3 text-xs theme-text-primary py-2 hover:text-gold-400 uppercase tracking-wider"
                  >
                    <Phone className="w-4 h-4 text-gold-400" />
                    <span className="font-mono">+228 90 00 00 00</span>
                  </a>
                  <div className="flex items-center gap-3 text-xs theme-text-secondary py-1 uppercase tracking-wider">
                    <MapPin className="w-4 h-4 text-gold-400" />
                    <span>Adidogomé, Lomé - Face Station Total</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
