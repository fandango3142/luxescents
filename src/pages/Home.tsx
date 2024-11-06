import { ChevronRight, ChevronLeft } from 'lucide-react';

export function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1615992174118-9b8e9be025e7?auto=format&fit=crop&q=80")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Discover Your Signature Scent</h1>
            <p className="text-xl mb-8">
              Explore our curated collection of luxury fragrances from the world's most prestigious perfume houses.
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Popular Brands Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Brands</h2>
        <div className="relative">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="flex space-x-6 overflow-x-auto pb-4">
            {['Creed', 'Louis Vuitton', 'Parfums de Marly'].map((brand) => (
              <div key={brand} className="flex-none w-64">
                <div className="bg-gray-100 h-48 rounded-lg mb-4" />
                <h3 className="font-semibold text-gray-900">{brand}</h3>
              </div>
            ))}
          </div>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'For Men', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80' },
            { title: 'For Women', image: 'https://images.unsplash.com/photo-1541108564883-bde8e501a874?auto=format&fit=crop&q=80' },
            { title: 'Unisex', image: 'https://images.unsplash.com/photo-1595425279734-0c16adbd8c8b?auto=format&fit=crop&q=80' },
          ].map((category) => (
            <div
              key={category.title}
              className="relative h-96 group cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url("${category.image}")` }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{category.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sale Collection */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">On Sale Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200" />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Luxury Fragrance</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-red-600 font-bold">$199.99</span>
                    <span className="text-gray-500 line-through">$299.99</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;