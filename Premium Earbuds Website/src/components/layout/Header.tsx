import React from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-black/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-white font-bold text-xl">SONIC</Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link to="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
            <Link to="/support" className="text-gray-300 hover:text-white transition-colors">Support</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="text-white hover:text-gray-300 transition-colors">
              <ShoppingCart className="w-6 h-6" />
            </Link>
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-white">Home</Link>
            <Link to="/products" className="block px-3 py-2 text-white">Products</Link>
            <Link to="/about" className="block px-3 py-2 text-white">About</Link>
            <Link to="/support" className="block px-3 py-2 text-white">Support</Link>
          </div>
        </div>
      )}
    </header>
  );
}