import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/80 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <ShoppingBag className="h-6 w-6 text-blue-600 mr-2" />
            <span className="text-xl font-bold text-gray-900">Runwise</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/recommendation" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Find Your Gear
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Products
            </Link>
            <Link to="/faq" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              FAQ
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blue-600 transition-colors py-2 px-1 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/recommendation" 
                className="text-gray-700 hover:text-blue-600 transition-colors py-2 px-1 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Find Your Gear
              </Link>
              <Link 
                to="/products" 
                className="text-gray-700 hover:text-blue-600 transition-colors py-2 px-1 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/faq" 
                className="text-gray-700 hover:text-blue-600 transition-colors py-2 px-1 font-medium"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;