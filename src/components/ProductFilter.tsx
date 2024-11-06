import { useState } from 'react';

export default function ProductFilter() {
  const [priceRange, setPriceRange] = useState([0, 1000]);

  return (
    <div className="space-y-6">
      {/* Price Range */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Price Range</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
              className="w-24 px-2 py-1 border rounded-md"
            />
            <span className="text-gray-500">to</span>
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
              className="w-24 px-2 py-1 border rounded-md"
            />
          </div>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
            className="w-full"
          />
        </div>
      </div>

      {/* Brands */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Brands</h3>
        <div className="space-y-2">
          {['Creed', 'Louis Vuitton', 'Parfums de Marly', 'Tom Ford', 'Byredo'].map((brand) => (
            <label key={brand} className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-gray-900 focus:ring-gray-900" />
              <span className="ml-2 text-gray-600">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Size */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Size</h3>
        <div className="space-y-2">
          {['30ml', '50ml', '100ml', '200ml'].map((size) => (
            <label key={size} className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-gray-900 focus:ring-gray-900" />
              <span className="ml-2 text-gray-600">{size}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Scent Type */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Scent Type</h3>
        <div className="space-y-2">
          {[
            'Woody',
            'Floral',
            'Fresh',
            'Oriental',
            'Citrus',
            'Aromatic'
          ].map((type) => (
            <label key={type} className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-gray-900 focus:ring-gray-900" />
              <span className="ml-2 text-gray-600">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Apply Filters Button */}
      <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors">
        Apply Filters
      </button>
    </div>
  );
}