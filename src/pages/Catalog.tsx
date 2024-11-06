import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';
import ProductFilter from '../components/ProductFilter';

export function Catalog() {
  const [searchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const category = searchParams.get('category') || 'all';
  
  // This would typically come from an API
  const [products] = useState<Product[]>([
    {
      id: '1',
      name: 'Aventus',
      brand: 'Creed',
      category: 'men',
      description: 'Fruity and rich',
      sizes: [
        { size: '50ml', price: 350 },
        { size: '100ml', price: 495 }
      ],
      images: ['https://images.unsplash.com/photo-1523293182086-7651a899d37f'],
      isOnSale: true,
      salePrice: 299
    },
    // More products would be added here
  ]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            {category === 'all' ? 'All Fragrances' : `${category} Fragrances`}
          </h1>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center space-x-2 text-gray-600"
          >
            <Filter className="h-5 w-5" />
            <span>Filters</span>
          </button>
        </div>

        <div className="flex gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <ProductFilter />
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-2">
                <SlidersHorizontal className="h-5 w-5 text-gray-500" />
                <select className="border-0 text-gray-500 focus:ring-0">
                  <option>Most Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
              <span className="text-gray-500">
                {products.length} products
              </span>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={() => {}}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 rounded-md bg-white border text-gray-500 hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-2 rounded-md bg-gray-900 text-white">
                  1
                </button>
                <button className="px-3 py-2 rounded-md bg-white border text-gray-500 hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-2 rounded-md bg-white border text-gray-500 hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filters */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowFilters(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-white p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button onClick={() => setShowFilters(false)} className="text-gray-500">
                ✕
              </button>
            </div>
            <ProductFilter />
          </div>
        </div>
      )}
    </div>
  );
}

export default Catalog;