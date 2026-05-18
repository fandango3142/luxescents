import { ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const lowestPrice = Math.min(...product.sizes.map((size) => size.price));
  
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-900/10">
      <div className="relative aspect-square w-full overflow-hidden bg-stone-100">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
        />
        {product.isOnSale && (
          <div className="absolute right-3 top-3 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-lg">
            Sale
          </div>
        )}
      </div>
      <div className="space-y-4 p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">{product.brand}</p>
          <h3 className="mt-2 text-lg font-semibold text-gray-950">{product.name}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">{product.description}</p>
        </div>

        <div>
          {product.isOnSale ? (
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-red-600">
                ${product.salePrice}
              </span>
              <span className="text-sm text-gray-500 line-through">
                ${lowestPrice}
              </span>
            </div>
          ) : (
            <span className="text-lg font-bold text-gray-950">
              From ${lowestPrice}
            </span>
          )}
        </div>

        <button
          onClick={onAddToCart}
          className="flex w-full items-center justify-center rounded-full bg-gray-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-amber-800"
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
