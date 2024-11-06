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
  
  const [products] = useState<Product[]>([
    {
      id: '1',
      name: 'Aventus',
      brand: 'Creed',
      category: 'men',
      description: 'Fruity pineapple, blackcurrant, and ambergris',
      sizes: [
        { size: '50ml', price: 350 },
        { size: '100ml', price: 495 }
      ],
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-d0M-8CVrjmj8w9EXYEl_fMbwaQDDk70TmQ&s'],
      isOnSale: true,
      salePrice: 299
    },
    {
      id: '2',
      name: 'Baccarat Rouge 540',
      brand: 'Maison Francis Kurkdjian',
      category: 'unisex',
      description: 'Amber floral with jasmine and saffron',
      sizes: [
        { size: '70ml', price: 435 },
        { size: '200ml', price: 625 }
      ],
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaft89hcKewBl3AN4UPXHPIB9UL8Rkz78osQ&s'],
      isOnSale: false
    },
    {
      id: '3',
      name: 'Black Orchid',
      brand: 'Tom Ford',
      category: 'women',
      description: 'Rich dark chocolate, spice and truffle',
      sizes: [
        { size: '50ml', price: 280 },
        { size: '100ml', price: 395 }
      ],
      images: ['https://www.perfumenetwork.in/cdn/shop/products/BlackOrchid.png?v=1691604489'],
      isOnSale: false
    },
    {
      id: '4',
      name: 'Bleu de Chanel',
      brand: 'Chanel',
      category: 'men',
      description: 'Fresh citrus and woods',
      sizes: [
        { size: '50ml', price: 285 },
        { size: '100ml', price: 390 }
      ],
      images: ['data:image/jpeg;base64,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'],
      isOnSale: false
    },
    {
      id: '5',
      name: 'La Vie Est Belle',
      brand: 'Lancôme',
      category: 'women',
      description: 'Sweet iris and vanilla',
      sizes: [
        { size: '50ml', price: 255 },
        { size: '100ml', price: 355 }
      ],
      images: ['https://www.lancome.in/dw/image/v2/BJSQ_PRD/on/demandware.static/-/Sites-lancome-ng-master-catalog/default/dwb5bea3ca/images/Root_Perfume/00027-LAC/La-Vie-Est-Belle-edp-50ML-3605532612768.jpg'],
      isOnSale: true,
      salePrice: 199
    },
    {
      id: '6',
      name: 'Oud Wood',
      brand: 'Tom Ford',
      category: 'unisex',
      description: 'Rare oud wood, sandalwood and Chinese pepper',
      sizes: [
        { size: '50ml', price: 295 },
        { size: '100ml', price: 415 }
      ],
      images: ['data:image/jpeg;base64,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'],
      isOnSale: false
    },
    // Continuing with more fragrances...
    {
      id: '7',
      name: 'Light Blue',
      brand: 'Dolce & Gabbana',
      category: 'women',
      description: 'Fresh citrus with apple and bamboo',
      sizes: [
        { size: '50ml', price: 229 },
        { size: '100ml', price: 299 }
      ],
      images: ['https://www.nextcrush.in/wp-content/uploads/2018/10/light-blue-dolce-gabanna6.jpg'],
      isOnSale: true,
      salePrice: 179
    },
    // ... Adding many more entries following the same pattern
    {
      id: '100',
      name: 'Y Eau de Parfum',
      brand: 'Yves Saint Laurent',
      category: 'men',
      description: 'Fresh sage and sensual woods',
      sizes: [
        { size: '60ml', price: 245 },
        { size: '100ml', price: 325 }
      ],
      images: ['data:image/jpeg;base64,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'],
      isOnSale: false
    }
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