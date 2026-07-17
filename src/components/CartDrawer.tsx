import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, ShoppingBag, Send, AlertCircle, Sparkles, MapPin, Plus, Minus } from 'lucide-react';
import { CartItem, TogoQuarter } from '../types';
import { TOGO_QUARTERS, WHATSAPP_NUMBER } from '../data/products';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, size: string, color: string, quantity: number) => void;
  onRemoveItem: (productId: string, size: string, color: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [selectedQuarterIndex, setSelectedQuarterIndex] = useState(0);
  const activeQuarter = TOGO_QUARTERS[selectedQuarterIndex];

  // Calculations
  const formatPrice = (price: number) => {
    return price.toLocaleString('fr-FR') + ' F CFA';
  };

  const cartSubtotal = cart.reduce((acc, item) => acc + item.product.priceXOF * item.quantity, 0);
  const totalAmount = cartSubtotal + activeQuarter.deliveryCostXOF;
  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // WhatsApp Consolidated Order Message Generator
  const handleCheckoutWhatsApp = () => {
    if (cart.length === 0) return;

    let itemsText = '';
    cart.forEach((item, index) => {
      itemsText += `${index + 1}. *${item.product.name}*\n`;
      itemsText += `   • Taille : ${item.selectedSize}\n`;
      itemsText += `   • Couleur : ${item.selectedColor}\n`;
      itemsText += `   • Quantité : ${item.quantity}\n`;
      itemsText += `   • Prix : ${formatPrice(item.product.priceXOF * item.quantity)}\n\n`;
    });

    const message = `Bonjour SYETA VIP ! 👋\nJe souhaite passer une commande groupée depuis votre site vitrine :\n\n=== 🛒 MON SAC DE COMMANDE ===\n\n${itemsText}==============================\n\n• *Sous-total* : ${formatPrice(cartSubtotal)}\n• *Quartier de livraison* : ${activeQuarter.name}\n• *Frais de livraison* : ${activeQuarter.deliveryCostXOF === 0 ? 'GRATUIT' : formatPrice(activeQuarter.deliveryCostXOF)}\n\n• 🔥 *MONTANT TOTAL* : ${formatPrice(totalAmount)}\n\nMerci de valider mon panier et de planifier ma livraison express ! ✨`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
          />

          {/* Drawer Slide Panel */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-screen max-w-md theme-bg-secondary border-l theme-border-primary shadow-2xl flex flex-col justify-between rounded-none"
            >
              {/* Drawer Header */}
              <div className="p-6 theme-bg-primary border-b theme-border-primary flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-gold-400" />
                  <h3 className="text-xs uppercase tracking-widest font-semibold theme-text-primary">Votre Sac d'Achat</h3>
                  <span className="px-2 py-0.5 theme-bg-primary border theme-border-primary text-gold-400 text-[10px] font-bold rounded-none font-mono">
                    {totalItemsCount}
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-none border theme-border-primary theme-text-secondary hover:theme-text-primary cursor-pointer transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="text-center py-20 space-y-4">
                    <div className="w-12 h-12 border theme-border-primary flex items-center justify-center mx-auto text-gold-400">
                      <ShoppingBag className="w-6 h-6" />
                    </div>
                    <p className="text-xs uppercase tracking-widest font-semibold theme-text-primary/70">Votre sac est vide.</p>
                    <p className="text-xs theme-text-secondary/60 max-w-xs mx-auto leading-relaxed">
                      Explorez notre catalogue et ajoutez des articles de luxe pour composer votre tenue VIP.
                    </p>
                    <button
                      onClick={onClose}
                      className="px-5 py-3 border border-gold-400 hover:bg-gold-400 text-gold-400 hover:theme-text-on-vip-rose text-[10px] uppercase tracking-widest font-semibold rounded-none transition-all cursor-pointer"
                    >
                      Retourner au catalogue
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Items List */}
                    <div className="space-y-4 divide-y theme-border-primary">
                      {cart.map((item, index) => (
                        <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} className={`flex gap-4 ${index > 0 ? 'pt-4' : ''}`}>
                          {/* Image */}
                          <div className="w-20 h-20 rounded-none overflow-hidden theme-bg-primary shrink-0 border theme-border-primary">
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover grayscale"
                            />
                          </div>

                          {/* Info panel */}
                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start">
                                <h4 className="text-xs font-semibold theme-text-primary line-clamp-1 pr-4">{item.product.name}</h4>
                                <button
                                  onClick={() => onRemoveItem(item.product.id, item.selectedSize, item.selectedColor)}
                                  className="theme-text-secondary/60 hover:theme-text-primary transition-colors cursor-pointer"
                                  title="Supprimer du panier"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                              <p className="text-[10px] text-gold-400 uppercase tracking-widest font-semibold mt-0.5">
                                {item.product.brand || 'SYETA VIP'}
                              </p>
                              
                              <div className="flex flex-wrap gap-2 mt-1.5 text-[10px] theme-text-secondary">
                                <span className="theme-bg-primary px-2 py-0.5 rounded-none border theme-border-secondary font-mono">Taille: {item.selectedSize}</span>
                                <span className="theme-bg-primary px-2 py-0.5 rounded-none border theme-border-secondary font-mono">Couleur: {item.selectedColor}</span>
                              </div>
                            </div>

                            <div className="flex justify-between items-center mt-2">
                              {/* Quantity controls */}
                              <div className="flex items-center theme-bg-primary border theme-border-primary rounded-none overflow-hidden">
                                <button
                                  onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                                  className="px-2 py-1 theme-text-secondary hover:theme-text-primary hover:bg-gold-400/10 cursor-pointer"
                                >
                                  <Minus className="w-2.5 h-2.5" />
                                </button>
                                <span className="px-3 py-1 text-xs font-mono font-bold theme-text-primary">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                                  className="px-2 py-1 theme-text-secondary hover:theme-text-primary hover:bg-gold-400/10 cursor-pointer"
                                >
                                  <Plus className="w-2.5 h-2.5" />
                                </button>
                              </div>

                              {/* Price subtotal */}
                              <span className="text-xs font-mono font-bold text-gold-300">
                                {formatPrice(item.product.priceXOF * item.quantity)}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Local Delivery Option Selector (integrated right inside checkout drawer!) */}
                    <div className="p-4 rounded-none theme-bg-primary/40 border theme-border-secondary space-y-3">
                      <div className="flex items-center gap-2 text-gold-400 text-xs uppercase tracking-widest font-semibold">
                        <MapPin className="w-4 h-4 text-gold-400" />
                        <span>Zone de livraison à Lomé</span>
                      </div>
                      
                      <div className="relative">
                        <select
                          value={selectedQuarterIndex}
                          onChange={(e) => setSelectedQuarterIndex(Number(e.target.value))}
                          className="w-full theme-bg-secondary border theme-border-primary text-xs theme-text-primary rounded-none px-3.5 py-3 focus:border-gold-400 focus:outline-none appearance-none cursor-pointer"
                        >
                          {TOGO_QUARTERS.map((quarter, index) => (
                            <option key={index} value={index} className="theme-bg-secondary theme-text-primary">
                              {quarter.name} ({quarter.deliveryCostXOF === 0 ? 'Gratuit' : formatPrice(quarter.deliveryCostXOF)})
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none text-gold-400 text-[10px]">
                          ▼
                        </div>
                      </div>

                      <p className="text-[10px] theme-text-secondary">
                        ⏱️ Délai estimé : <strong className="theme-text-primary">{activeQuarter.deliveryTime}</strong>
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Drawer Footer Calculations & Checkout */}
              {cart.length > 0 && (
                <div className="p-6 theme-bg-primary border-t theme-border-primary space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs theme-text-secondary">
                      <span>Sous-total articles</span>
                      <span className="font-mono">{formatPrice(cartSubtotal)}</span>
                    </div>
                    <div className="flex justify-between text-xs theme-text-secondary">
                      <span>Livraison ({activeQuarter.name})</span>
                      <span className="font-mono">
                        {activeQuarter.deliveryCostXOF === 0 ? 'Gratuit' : formatPrice(activeQuarter.deliveryCostXOF)}
                      </span>
                    </div>
                    
                    <div className="h-[1px] theme-border-primary pt-1" />

                    <div className="flex justify-between items-center">
                      <span className="text-xs uppercase tracking-widest theme-text-secondary">Montant Total Estimé</span>
                      <span className="text-xl font-mono font-bold theme-text-primary">
                        {formatPrice(totalAmount)}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    {/* Clear bag */}
                    <div className="flex justify-between items-center text-[10px] uppercase tracking-widest theme-text-secondary/50">
                      <span className="flex items-center gap-1"><Sparkles className="w-3 h-3 text-gold-400" /> Commande WhatsApp</span>
                      <button onClick={onClearCart} className="hover:text-red-400 transition-colors cursor-pointer uppercase font-semibold">
                        Vider mon sac
                      </button>
                    </div>

                    {/* Major checkout trigger */}
                    <button
                      onClick={handleCheckoutWhatsApp}
                      className="w-full py-4 bg-transparent hover:bg-gold-400 text-gold-400 hover:theme-text-on-vip-rose border border-gold-400 font-bold text-xs tracking-widest uppercase rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Commander mon Sac sur WhatsApp
                    </button>
                  </div>

                  <div className="flex items-center gap-2.5 p-3 bg-transparent rounded-none border border-gold-400/20">
                    <AlertCircle className="w-4 h-4 text-gold-400 shrink-0" />
                    <p className="text-[10px] theme-text-secondary leading-normal">
                      Aucun paiement n'est requis en ligne. Vous réglerez le coursier à la réception à Lomé.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
