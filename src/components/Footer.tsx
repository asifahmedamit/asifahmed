
import React from 'react';
import { BarChart3, Linkedin, Mail, Phone, Heart, MapPin, ArrowUp, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', id: 'about' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' }
  ];

  const services = [
    'Data Analysis',
    'Business Intelligence',
    'Predictive Modeling',
    'Dashboard Creation',
    'Process Optimization'
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3e%3cpath d='m 40 0 l 0 40 l -40 0 l 0 -40 l 40 0' stroke='white' stroke-width='1' fill='none'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)' /%3e%3c/svg%3e")`,
        }}></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-green-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <BarChart3 className="h-10 w-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                <Sparkles className="h-4 w-4 text-blue-300 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight">Asif Ahmed</span>
                <div className="text-blue-400 text-sm font-medium">MBA, Business Analyst</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              MBA Business Analyst specializing in data-driven solutions, 
              business intelligence, and strategic decision-making support 
              for organizations across various industries.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/asifahmedamit/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="h-5 w-5 group-hover:text-white" />
              </a>
              <a 
                href="mailto:asifamit@icloud.com"
                className="p-3 bg-gray-800 hover:bg-green-600 rounded-full transition-all duration-300 hover:scale-110 group"
              >
                <Mail className="h-5 w-5 group-hover:text-white" />
              </a>
              <a 
                href="tel:604-217-7375"
                className="p-3 bg-gray-800 hover:bg-purple-600 rounded-full transition-all duration-300 hover:scale-110 group"
              >
                <Phone className="h-5 w-5 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <ArrowUp className="h-4 w-4 mr-2 text-blue-400" />
              Quick Links
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <BarChart3 className="h-4 w-4 mr-2 text-blue-400" />
              Services
            </h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-default">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-700/50">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span className="text-gray-300">Vancouver, BC, Canada</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Phone className="h-5 w-5 text-green-400" />
              <a href="tel:604-217-7375" className="text-gray-300 hover:text-green-400 transition-colors">
                604-217-7375
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Mail className="h-5 w-5 text-purple-400" />
              <a href="mailto:asifamit@icloud.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                asifamit@icloud.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Asif Ahmed. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <p className="text-gray-400 text-sm flex items-center">
                Made with <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" /> for data-driven excellence
              </p>
              <Button
                onClick={scrollToTop}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 rounded-full p-2 group"
              >
                <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
