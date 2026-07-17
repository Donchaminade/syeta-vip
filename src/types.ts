export interface Product {
  id: string;
  name: string;
  category: 'chaussures' | 'vetements' | 'accessoires' | 'cosmetiques';
  subCategory?: string;
  gender: 'homme' | 'femme' | 'mixte';
  priceXOF: number; // Price in CFA Francs (XOF)
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
  isNewArrival?: boolean;
  isBestseller?: boolean;
  brand?: string;
  stockStatus: 'disponible' | 'sur_commande' | 'rupture';
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface TogoQuarter {
  name: string;
  deliveryCostXOF: number;
  deliveryTime: string; // e.g. "1h - 2h", "Dans la journée"
  description: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}
