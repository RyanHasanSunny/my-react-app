import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            BrandName
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">About Us</Link>
            <Link to="/features" className="text-gray-700 hover:text-blue-600 transition">Features</Link>
            <Link to="/support" className="text-gray-700 hover:text-blue-600 transition">Support</Link>
            <Link to="/reviews" className="text-gray-700 hover:text-blue-600 transition">Reviews</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-2 pb-3">
            <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-blue-600 transition">About Us</Link>
            <Link to="/features" className="block py-2 text-gray-700 hover:text-blue-600 transition">Features</Link>
            <Link to="/support" className="block py-2 text-gray-700 hover:text-blue-600 transition">Support</Link>
            <Link to="/reviews" className="block py-2 text-gray-700 hover:text-blue-600 transition">Reviews</Link>
            <Link to="/contact" className="block py-2 text-gray-700 hover:text-blue-600 transition">Contact</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;