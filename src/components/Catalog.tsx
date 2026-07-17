import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal, MessageSquare, ShoppingCart, HelpCircle, Eye, X, Check, ArrowRight } from 'lucide-react';
import { Product, CartItem } from '../types';
import { PRODUCTS, WHATSAPP_NUMBER } from '../data/products';

interface CatalogProps {
  onAddToCart: (product: Product, size: string, color: string) => void;
}

export default function Catalog({ onAddToCart }: CatalogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'chaussures' | 'vetements' | 'accessoires' | 'cosmetiques'>('all');
  const [genderFilter, setGenderFilter] = useState<'all' | 'homme' | 'femme' | 'mixte'>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // States for size/color selection inside quick cards
  const [quickSizes, setQuickSizes] = useState<Record<string, string>>({});
  const [quickColors, setQuickColors] = useState<Record<string, string>>({});

  // Product detail modal states
  const [modalSize, setModalSize] = useState('');
  const [modalColor, setModalColor] = useState('');

  // Filtered list
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.brand && product.brand.toLowerCase().includes(searchTerm.toLowerCase())) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    const matchesGender = genderFilter === 'all' || product.gender === genderFilter || product.gender === 'mixte';

    return matchesSearch && matchesCategory && matchesGender;
  });

  // Helper to format currency
  const formatPrice = (price: number) => {
    return price.toLocaleString('fr-FR') + ' F CFA';
  };

  // WhatsApp Single Product Order Message Generator
  const triggerWhatsAppOrder = (product: Product, size: string, color: string) => {
    const defaultSize = size || product.sizes[0] || 'Non spécifié';
    const defaultColor = color || product.colors[0] || 'Non spécifié';
    const message = `Bonjour SYETA VIP ! 👋\nJe souhaite commander cet article depuis votre site vitrine :\n\n• *Article* : ${product.name}\n• *Marque* : ${product.brand || 'SYETA VIP'}\n• *Taille* : ${defaultSize}\n• *Couleur* : ${defaultColor}\n• *Prix* : ${formatPrice(product.priceXOF)}\n\nMerci de me confirmer la disponibilité pour une livraison à Lomé ! ✨`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  const handleOpenDetails = (product: Product) => {
    setSelectedProduct(product);
    setModalSize(product.sizes[0] || '');
    setModalColor(product.colors[0] || '');
  };

  const handleAddToCartClick = (product: Product, size: string, color: string) => {
    const finalSize = size || product.sizes[0];
    const finalColor = color || product.colors[0];
    onAddToCart(product, finalSize, finalColor);
  };

  return (
    <section id="collections" className="py-20 theme-bg-primary relative border-b theme-border-primary">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-gold-400 font-semibold block mb-3">Le Catalogue VIP</span>
          <h2 className="text-3xl md:text-5xl font-light uppercase theme-text-primary tracking-tight mb-4">
            LES COLLECTIONS <br />
            <span className="italic font-serif text-gold-400 lowercase">d'exception.</span>
          </h2>
          <p className="text-xs theme-text-secondary uppercase tracking-widest leading-relaxed max-w-xl mx-auto">
            Découvrez une sélection exclusive de chaussures et vêtements haut de gamme à Lomé.
          </p>
        </div>

        {/* Filter Controls Widget */}
        <div className="theme-bg-secondary border theme-border-primary p-6 md:p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Search Input */}
            <div className="lg:col-span-3 relative">
              <Search className="absolute left-4 top-3.5 w-4 h-4 theme-text-secondary/40" />
              <input
                type="text"
                placeholder="Rechercher une chaussure, marque..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full theme-bg-primary border theme-border-primary text-xs theme-text-primary rounded-none pl-11 pr-4 py-3.5 focus:border-gold-400 focus:outline-none transition-all placeholder:theme-text-secondary/30 uppercase tracking-wider"
              />
            </div>

            {/* Category selection */}
            <div className="lg:col-span-6 flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'Tout' },
                { id: 'chaussures', label: 'Chaussures' },
                { id: 'vetements', label: 'Vêtements' },
                { id: 'accessoires', label: 'Accessoires' },
                { id: 'cosmetiques', label: 'Beauté & Parfums' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategoryFilter(cat.id as any)}
                  className={`px-5 py-3 rounded-none text-xs uppercase tracking-widest transition-all cursor-pointer font-medium ${
                    categoryFilter === cat.id
                      ? 'bg-gold-400 theme-text-on-vip-rose border border-gold-400'
                      : 'bg-transparent border theme-border-primary theme-text-secondary hover:theme-text-primary hover:border-gold-400/50'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Gender Switch */}
            <div className="lg:col-span-3 flex theme-bg-primary p-1 border theme-border-primary rounded-none">
              {[
                { id: 'all', label: 'Tous' },
                { id: 'homme', label: 'Homme' },
                { id: 'femme', label: 'Femme' },
              ].map((gender) => (
                <button
                  key={gender.id}
                  onClick={() => setGenderFilter(gender.id as any)}
                  className={`flex-1 py-2 text-[10px] uppercase tracking-widest rounded-none font-medium transition-all cursor-pointer ${
                    genderFilter === gender.id
                      ? 'bg-gold-400 theme-text-on-vip-rose font-semibold'
                      : 'theme-text-secondary hover:theme-text-primary'
                  }`}
                >
                  {gender.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Catalog Items Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 theme-bg-secondary border theme-border-primary rounded-none">
            <SlidersHorizontal className="w-12 h-12 text-gold-400/40 mx-auto mb-4" />
            <p className="theme-text-secondary text-sm font-light uppercase tracking-widest">Aucun produit ne correspond à vos critères.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setCategoryFilter('all');
                setGenderFilter('all');
              }}
              className="mt-6 px-6 py-3 bg-gold-400 text-black text-xs uppercase tracking-widest font-bold hover:bg-gold-500 transition-all cursor-pointer rounded-none"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              // Get current selected size/color for this specific card
              const currentSize = quickSizes[product.id] || product.sizes[0];
              const currentColor = quickColors[product.id] || product.colors[0];

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="group flex flex-col theme-bg-secondary border theme-border-secondary hover:border-luxury-gold hover:shadow-[0_0_30px_rgba(226,199,146,0.25)] hover:scale-[1.02] -translate-y-0 hover:-translate-y-1 rounded-none overflow-hidden transition-all duration-500 relative"
                >
                  {/* Badges */}
                  <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                    {product.isNewArrival && (
                      <span className="px-3 py-1 bg-gold-400 text-black text-[9px] font-bold uppercase tracking-widest rounded-none">
                        Nouveau
                      </span>
                    )}
                    {product.isBestseller && (
                      <span className="px-3 py-1 theme-bg-primary border border-gold-400 text-gold-400 text-[9px] font-bold uppercase tracking-widest rounded-none">
                        Best-Seller
                      </span>
                    )}
                  </div>

                  {/* Gender label overlay */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 theme-bg-primary border theme-border-primary theme-text-secondary text-[9px] font-medium tracking-widest uppercase rounded-none">
                      {product.gender === 'mixte' ? 'unisex' : product.gender}
                    </span>
                  </div>

                  {/* Product Image Container */}
                  <div className="relative overflow-hidden aspect-square cursor-pointer" onClick={() => handleOpenDetails(product)}>
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102 grayscale hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-65" />
                    
                    {/* Hover actions overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-[2px]">
                      <button
                        onClick={() => handleOpenDetails(product)}
                        className="px-6 py-3 bg-gold-400 theme-text-on-vip-rose font-bold text-xs uppercase tracking-widest rounded-none flex items-center gap-2 hover:bg-gold-500 transition-all transform translate-y-2 group-hover:translate-y-0 duration-300 cursor-pointer"
                      >
                        <Eye className="w-4 h-4" />
                        Voir l'article
                      </button>
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Brand & Subcategory */}
                      <div className="flex justify-between items-center text-[10px] text-gold-400 font-semibold uppercase tracking-widest mb-1.5">
                        <span>{product.brand || 'Collection VIP'}</span>
                        <span className="theme-text-secondary/60">{product.subCategory}</span>
                      </div>

                      {/* Name */}
                      <h3
                        onClick={() => handleOpenDetails(product)}
                        className="text-base font-serif theme-text-primary hover:text-gold-400 transition-colors cursor-pointer leading-snug line-clamp-1 mb-2 italic"
                      >
                        {product.name}
                      </h3>

                      {/* Price tag */}
                      <div className="text-lg font-mono font-bold theme-text-primary mb-4">
                        {formatPrice(product.priceXOF)}
                      </div>

                      {/* Small Quick-Selectors to make it ultra interactive */}
                      <div className="space-y-3 pt-2 pb-4 border-t theme-border-primary">
                        {/* Sizes list preview */}
                        <div>
                          <span className="text-[9px] theme-text-secondary/60 uppercase tracking-widest block mb-1">Taille</span>
                          <div className="flex flex-wrap gap-1">
                            {product.sizes.map((sz) => (
                              <button
                                key={sz}
                                onClick={() => setQuickSizes({ ...quickSizes, [product.id]: sz })}
                                className={`px-2.5 py-1 rounded-none font-mono transition-all border cursor-pointer text-[10px] ${
                                  currentSize === sz
                                    ? 'bg-gold-400 border-gold-400 theme-text-on-vip-rose font-bold'
                                    : 'bg-transparent theme-border-primary theme-text-secondary hover:border-gold-400/50 hover:theme-text-primary'
                                }`}
                              >
                                {sz}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Colors list preview */}
                        <div>
                          <span className="text-[9px] theme-text-secondary/60 uppercase tracking-widest block mb-1">Couleur</span>
                          <div className="flex flex-wrap gap-1">
                            {product.colors.map((col) => (
                              <button
                                key={col}
                                onClick={() => setQuickColors({ ...quickColors, [product.id]: col })}
                                className={`px-2.5 py-1 rounded-none transition-all border cursor-pointer text-[9px] uppercase tracking-wider ${
                                  currentColor === col
                                    ? 'bg-gold-400/20 border-gold-400 text-gold-400 font-bold'
                                    : 'bg-transparent theme-border-primary theme-text-secondary hover:border-gold-400/50 hover:theme-text-primary'
                                }`}
                              >
                                {col}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Interactive CTAs */}
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t theme-border-primary">
                      {/* Add to VIP Bag */}
                      <button
                        onClick={() => handleAddToCartClick(product, currentSize, currentColor)}
                        className="px-3 py-3 bg-transparent border theme-border-primary hover:border-gold-400 theme-text-primary hover:text-gold-400 rounded-none text-[10px] uppercase tracking-widest font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        Ajouter
                      </button>

                      {/* Order direct WhatsApp */}
                      <button
                        onClick={() => triggerWhatsAppOrder(product, currentSize, currentColor)}
                        className="px-3 py-3 bg-gold-400 hover:bg-gold-500 theme-text-on-vip-rose font-bold rounded-none text-[10px] uppercase tracking-widest flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-current text-current" />
                        Commander
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* Product Details Modal Overlay */}
      <AnimatePresence>
        {selectedProduct && (
          <div 
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto cursor-pointer"
          >
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl theme-bg-secondary border theme-border-primary rounded-none flex flex-col md:flex-row my-auto max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-30 p-2.5 rounded-none bg-black/80 md:theme-bg-primary text-white md:theme-text-primary border border-white/20 md:theme-border-primary hover:border-gold-400 cursor-pointer shadow-lg transition-all"
                aria-label="Fermer le pop-up"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Product Visual Container (Left) */}
              <div className="md:w-1/2 relative theme-bg-primary flex items-center justify-center min-h-[300px] md:min-h-full">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover max-h-[450px] md:max-h-full grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[var(--bg-secondary)]" />
              </div>

              {/* Product Options Content (Right) */}
              <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-between overflow-y-auto max-h-[85vh] md:max-h-none">
                <div>
                  {/* Category breadcrumb */}
                  <span className="text-[10px] text-gold-400 uppercase tracking-[0.2em] font-bold block mb-2">
                    {selectedProduct.category} • {selectedProduct.subCategory}
                  </span>

                  {/* Title and brand */}
                  <h3 className="text-2xl font-serif theme-text-primary mb-2 italic">{selectedProduct.name}</h3>
                  <p className="text-xs theme-text-secondary uppercase tracking-widest mb-4">
                    Marque : <span className="text-gold-400 font-semibold">{selectedProduct.brand || 'Exclusivité SYETA VIP'}</span>
                  </p>

                  {/* Price tag */}
                  <div className="text-2xl font-mono font-bold theme-text-primary mb-6">
                    {formatPrice(selectedProduct.priceXOF)}
                  </div>

                  {/* Description */}
                  <p className="text-xs theme-text-secondary leading-relaxed font-sans mb-6">
                    {selectedProduct.description}
                  </p>

                  {/* Status Indicator */}
                  <div className="flex items-center gap-2 mb-6 text-xs theme-text-secondary bg-[var(--bg-primary)] px-4 py-3 border theme-border-primary rounded-none w-fit">
                    <span className={`w-2 h-2 rounded-full ${
                      selectedProduct.stockStatus === 'disponible' ? 'bg-gold-400 animate-pulse' : 'bg-amber-500'
                    }`} />
                    <span className="uppercase tracking-wider text-[9px]">
                      {selectedProduct.stockStatus === 'disponible' ? 'Disponible immédiatement' : 'Disponible sur commande (2-3 jours)'}
                    </span>
                  </div>

                  {/* Size selectors */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-[10px] theme-text-secondary/60 uppercase tracking-widest font-semibold block">Choisir la taille</span>
                      <span className="text-[10px] text-gold-400 hover:underline cursor-pointer flex items-center gap-1 uppercase tracking-wider">
                        <HelpCircle className="w-3.5 h-3.5" /> Guide
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setModalSize(size)}
                          className={`w-11 h-11 rounded-none text-xs font-mono tracking-wider transition-all border flex items-center justify-center cursor-pointer ${
                            modalSize === size
                              ? 'bg-gold-400 theme-text-on-vip-rose border-gold-400 font-bold'
                              : 'bg-transparent theme-border-primary theme-text-secondary hover:border-gold-400 hover:theme-text-primary'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Color selectors */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[10px] theme-text-secondary/60 uppercase tracking-widest font-semibold block">Couleur disponible</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setModalColor(color)}
                          className={`px-4 py-2.5 rounded-none text-xs tracking-wider transition-all border flex items-center gap-1.5 cursor-pointer uppercase ${
                            modalColor === color
                              ? 'bg-gold-400 theme-text-on-vip-rose border-gold-400 font-bold'
                              : 'bg-transparent theme-border-primary theme-text-secondary hover:border-gold-400'
                          }`}
                        >
                          {modalColor === color && <Check className="w-3.5 h-3.5 theme-text-on-vip-rose" />}
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Interactive CTAs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <button
                    onClick={() => {
                      handleAddToCartClick(selectedProduct, modalSize, modalColor);
                      setSelectedProduct(null);
                    }}
                    className="w-full py-4 bg-transparent border theme-border-primary hover:border-gold-400 hover:bg-gold-400/5 theme-text-primary font-bold text-xs tracking-widest uppercase rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingCart className="w-4 h-4 text-gold-400" />
                    Ajouter au Panier
                  </button>

                  <button
                    onClick={() => {
                      triggerWhatsAppOrder(selectedProduct, modalSize, modalColor);
                      setSelectedProduct(null);
                    }}
                    className="w-full py-4 bg-gold-400 hover:bg-gold-500 theme-text-on-vip-rose font-bold text-xs tracking-widest uppercase rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-current text-current" />
                    Commander Direct
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
