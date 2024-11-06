export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'men' | 'women' | 'unisex';
  description: string;
  sizes: { size: string; price: number }[];
  images: string[];
  isOnSale?: boolean;
  salePrice?: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface Order {
  id: string;
  userId: string;
  products: Array<{
    productId: string;
    size: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  status: 'delivered' | 'processing' | 'cancelled';
  date: string;
}

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}