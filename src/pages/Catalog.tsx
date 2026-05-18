import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';
import ProductFilter from '../components/ProductFilter';

const products: Product[] = [
  {
    id: '1',
    name: 'Aventus',
    brand: 'Creed',
    category: 'men',
    description: 'Fruity pineapple, blackcurrant, and ambergris.',
    sizes: [
      { size: '50ml', price: 350 },
      { size: '100ml', price: 495 },
    ],
    images: [
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=80',
    ],
    isOnSale: true,
    salePrice: 299,
  },
  {
    id: '2',
    name: 'Baccarat Rouge 540',
    brand: 'Maison Francis Kurkdjian',
    category: 'unisex',
    description: 'Amber floral with jasmine and saffron.',
    sizes: [
      { size: '70ml', price: 435 },
      { size: '200ml', price: 625 },
    ],
    images: [
      'https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=900&q=80',
    ],
    isOnSale: false,
  },
  {
    id: '3',
    name: 'Black Orchid',
    brand: 'Tom Ford',
    category: 'women',
    description: 'Rich dark chocolate, spice, and truffle.',
    sizes: [
      { size: '50ml', price: 280 },
      { size: '100ml', price: 395 },
    ],
    images: [
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80',
    ],
    isOnSale: false,
  },
  {
    id: '4',
    name: 'Bleu de Chanel',
    brand: 'Chanel',
    category: 'men',
    description: 'Fresh citrus, aromatic woods, and elegant amber.',
    sizes: [
      { size: '50ml', price: 285 },
      { size: '100ml', price: 390 },
    ],
    images: [
      'https://images.unsplash.com/photo-1595425964071-2c1ec4c70910?auto=format&fit=crop&w=900&q=80',
    ],
    isOnSale: true,
    salePrice: 249,
  },
];

export function Catalog() {
  const [searchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const category = searchParams.get('category') || 'all';
  const filteredProducts = products.filter(
    (product) => category === 'all' || product.category === category,
  );

  return (
    <div className="min-h-screen bg-stone-50 pt-20">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-gray-100">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
            Luxury catalog
          </p>
          <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h1 className="font-serif text-4xl font-bold text-gray-950">Perfumes</h1>
              <p className="mt-3 max-w-2xl text-gray-600">
                Browse signature bottles, thoughtful gifts, and refined daily scents.
              </p>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex w-full items-center justify-center rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-gray-300 hover:text-gray-950 lg:hidden"
            >
              <Filter className="mr-2 h-5 w-5" />
              Filters
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          <aside className="hidden w-64 flex-shrink-0 lg:block">
            <div className="sticky top-24 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <div className="mb-6 flex items-center">
                <SlidersHorizontal className="mr-2 h-5 w-5" />
                <h2 className="font-semibold text-gray-950">Filters</h2>
              </div>
              <ProductFilter />
            </div>
          </aside>

          {showFilters && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setShowFilters(false)} />
              <div className="absolute right-0 top-0 h-full w-80 overflow-y-auto bg-white p-6 shadow-xl">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-950">Filters</h2>
                  <button onClick={() => setShowFilters(false)} className="text-gray-500 hover:text-gray-950">
                    ✕
                  </button>
                </div>
                <ProductFilter />
              </div>
            </div>
          )}

          <main className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing <span className="font-semibold text-gray-950">{filteredProducts.length}</span> products
              </p>
              <select className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={() => {}}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
