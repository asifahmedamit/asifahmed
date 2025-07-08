
import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart3, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-2xl border-b border-blue-100/50' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <BarChart3 className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
              <Sparkles className="h-3 w-3 text-blue-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">Asif Ahmed</span>
              <div className="text-xs text-blue-600 font-medium -mt-1">Business Analytics</div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 bg-gray-50/80 rounded-full p-1 backdrop-blur-sm">
            {['home', 'about', 'portfolio', 'services', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="px-6 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 capitalize rounded-full hover:bg-white hover:shadow-md relative overflow-hidden group"
              >
                <span className="relative z-10">{item}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></div>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 relative">
              <Menu className={`h-6 w-6 absolute transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
              <X className={`h-6 w-6 absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100">
            {['home', 'about', 'portfolio', 'services', 'contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 capitalize relative group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10 font-medium">{item}</span>
                <div className="absolute left-0 top-0 h-full w-1 bg-blue-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
