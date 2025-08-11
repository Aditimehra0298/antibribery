import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Debug logo loading
  React.useEffect(() => {
    console.log('Header component mounted, checking logo path:', '/image (3).png');
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              {/* White light glow effect behind logo */}
              <div className="absolute inset-0 bg-white/30 rounded-full blur-xl scale-125"></div>
              <div className="absolute inset-0 bg-white/20 rounded-full blur-lg scale-110"></div>
              <img 
                src="/image (3).png" 
                alt="Eurocert Logo" 
                className="relative w-24 h-24 object-contain drop-shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  console.error('Failed to load logo:', target.src);
                  // Fallback to text if image fails
                  target.style.display = 'none';
                  const fallback = target.nextSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <div className="hidden w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                EC
              </div>
            </div>
            <span className="text-2xl font-bold text-white">EUROCERT</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</a>
            <a href="#why-choose" className="text-gray-300 hover:text-blue-400 transition-colors">Why Choose Us</a>
            <a href="#process" className="text-gray-300 hover:text-blue-400 transition-colors">Process</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Phone className="w-4 h-4" />
              <span>+91-XXXX-XXXXXX</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Mail className="w-4 h-4" />
              <span>audits@eurocert.in</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</a>
              <a href="#why-choose" className="text-gray-300 hover:text-blue-400 transition-colors">Why Choose Us</a>
              <a href="#process" className="text-gray-300 hover:text-blue-400 transition-colors">Process</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
              <div className="pt-4 border-t border-gray-800">
                <div className="flex items-center space-x-2 text-sm text-gray-300 mb-2">
                  <Phone className="w-4 h-4" />
                  <span>+91-9779665056</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Mail className="w-4 h-4" />
                  <span>bdm@eurocert.in</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;