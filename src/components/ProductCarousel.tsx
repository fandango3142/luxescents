import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductCarouselProps {
  title: string;
  products: Product[];
}

export default function ProductCarousel({ title, products }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % Math.ceil(products.length / 4));
  };

  const prev = () => {
    setCurrentIndex(
      (currentIndex - 1 + Math.ceil(products.length / 4)) %
        Math.ceil(products.length / 4)
    );
  };

  return (
    <div className="relative">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="relative">
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -left-4 z-10 bg-white rounded-full p-2 shadow-md"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <div className="grid grid-cols-4 gap-6 w-full">
              {products
                .slice(currentIndex * 4, currentIndex * 4 + 4)
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={() => {}}
                  />
                ))}
            </div>
          </div>
        </div>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 -right-4 z-10 bg-white rounded-full p-2 shadow-md"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}