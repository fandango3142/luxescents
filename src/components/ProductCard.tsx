import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const lowestPrice = Math.min(...product.sizes.map(s => s.price));
  
  return (
    <div className="group relative">
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
        {product.isOnSale && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md">
            SALE
          </div>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-sm text-gray-700">{product.brand}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">{product.name}</p>
        <div className="mt-1">
          {product.isOnSale ? (
            <div className="flex items-center space-x-2">
              <span className="text-lg font-medium text-red-600">
                ${product.salePrice}
              </span>
              <span className="text-sm text-gray-500 line-through">
                ${lowestPrice}
              </span>
            </div>
          ) : (
            <span className="text-lg font-medium text-gray-900">
              From ${lowestPrice}
            </span>
          )}
        </div>
      </div>
      <button
        onClick={onAddToCart}
        className="mt-4 w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
}