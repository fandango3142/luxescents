import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';

const brandCards = [
  {
    name: 'Creed',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Louis Vuitton',
    image: 'https://images.unsplash.com/photo-1595425964071-2c1ec4c70910?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Parfums de Marly',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80',
  },
];

const categories = [
  {
    title: 'For Men',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80',
    href: '/catalog?category=men',
  },
  {
    title: 'For Women',
    image: 'https://images.unsplash.com/photo-1541108564883-bde8e501a874?auto=format&fit=crop&w=1200&q=80',
    href: '/catalog?category=women',
  },
  {
    title: 'Unisex',
    image: 'https://images.unsplash.com/photo-1595425279734-0c16adbd8c8b?auto=format&fit=crop&w=1200&q=80',
    href: '/catalog?category=unisex',
  },
];

const saleProducts = [
  {
    name: 'Amber Reserve',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=80',
    price: '$199.99',
    originalPrice: '$299.99',
  },
  {
    name: 'Velvet Oud',
    image: 'https://images.unsplash.com/photo-1595425964071-2c1ec4c70910?auto=format&fit=crop&w=900&q=80',
    price: '$229.99',
    originalPrice: '$319.99',
  },
  {
    name: 'Rose Elixir',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80',
    price: '$179.99',
    originalPrice: '$249.99',
  },
  {
    name: 'Citrus Noir',
    image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=900&q=80',
    price: '$189.99',
    originalPrice: '$269.99',
  },
];

export function Home() {
  return (
    <div className="space-y-20 bg-stone-50 pb-20">
      <section
        className="relative min-h-[680px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1615992174118-9b8e9be025e7?auto=format&fit=crop&w=1800&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />
        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-4 pt-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
              <Sparkles className="mr-2 h-4 w-4 text-amber-200" />
              Curated luxury fragrance house
            </div>
            <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              Discover Your Signature Perfume
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100 sm:text-xl">
              Explore a polished collection of memorable scents, refined bottles,
              and timeless gifts from prestigious perfume houses.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/catalog"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-semibold text-gray-950 shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-amber-50"
              >
                Shop Now
              </Link>
              <Link
                to="/catalog?category=unisex"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Explore Unisex
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
              Curated houses
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-gray-950">
              Popular Brands
            </h2>
          </div>
        </div>
        <div className="relative">
          <button className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition hover:-translate-x-0.5 hover:shadow-xl">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="flex space-x-6 overflow-x-auto px-10 pb-4">
            {brandCards.map((brand) => (
              <div key={brand.name} className="group flex-none w-72">
                <div className="h-52 overflow-hidden rounded-3xl bg-gray-100 shadow-sm">
                  <img
                    src={brand.image}
                    alt={`${brand.name} fragrance display`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 font-semibold text-gray-950">{brand.name}</h3>
              </div>
            ))}
          </div>
          <button className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition hover:translate-x-0.5 hover:shadow-xl">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              to={category.href}
              className="group relative h-96 overflow-hidden rounded-[2rem] shadow-lg shadow-gray-900/10"
            >
              <img
                src={category.image}
                alt={`${category.title} fragrance category`}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition group-hover:from-black/55" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <h3 className="font-serif text-3xl font-bold text-white">{category.title}</h3>
                <p className="mt-2 text-sm font-medium text-white/80">Shop the edit</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 shadow-inner shadow-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
                Limited offers
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-gray-950">
                On Sale Collection
              </h2>
            </div>
            <Link to="/catalog" className="hidden text-sm font-semibold text-gray-700 hover:text-gray-950 sm:block">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {saleProducts.map((item) => (
              <div key={item.name} className="group overflow-hidden rounded-3xl bg-stone-50 shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="h-56 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-950">{item.name}</h3>
                  <div className="mt-3 flex items-center space-x-2">
                    <span className="font-bold text-red-600">{item.price}</span>
                    <span className="text-sm text-gray-500 line-through">{item.originalPrice}</span>
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
