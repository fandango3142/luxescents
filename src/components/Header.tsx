import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, ShoppingBag, User } from 'lucide-react';

export function Header() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <header className="fixed w-full border-b border-white/70 bg-white/90 shadow-sm backdrop-blur-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="group flex flex-col leading-none">
            <span className="font-serif text-2xl tracking-[0.22em] text-gray-950">
              LUXE
            </span>
            <span className="text-[0.62rem] font-semibold tracking-[0.35em] text-amber-700 transition-colors group-hover:text-gray-950">
              SCENTS
            </span>
          </Link>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="relative">
              <button
                type="button"
                aria-label="Toggle notification inbox"
                aria-expanded={isNotificationOpen}
                onClick={() => setIsNotificationOpen((isOpen) => !isOpen)}
                className="relative rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                <Bell className="h-6 w-6" />
              </button>

              {isNotificationOpen && (
                <div className="absolute right-0 mt-3 h-64 w-72 rounded-2xl border border-gray-100 bg-white shadow-2xl shadow-gray-900/10" />
              )}
            </div>

            <Link
              to="/cart"
              className="relative rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-950"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gray-950 text-[0.62rem] font-semibold text-white">
                0
              </span>
            </Link>
            
            <Link
              to="/signin"
              className="flex items-center space-x-1 rounded-full px-3 py-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-950"
            >
              <User className="h-6 w-6" />
              <span className="hidden text-sm font-medium sm:inline">Sign In</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
