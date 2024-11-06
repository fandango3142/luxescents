import { Link } from 'react-router-dom';
import { ShoppingBag, User } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-bold text-xl text-gray-900">
            LUXE SCENTS
          </Link>

          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="p-2 text-gray-600 hover:text-gray-900 relative"
            >
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute top-0 right-0 bg-gray-900 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Link>
            
            <Link
              to="/signin"
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
            >
              <User className="h-6 w-6" />
              <span className="hidden sm:inline">Sign In</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;