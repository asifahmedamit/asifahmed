
import React from 'react';
import { BarChart3, Linkedin, Mail, Phone, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Asif Ahmed</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              MBA Business Analyst specializing in data-driven solutions, 
              business intelligence, and strategic decision-making support 
              for organizations across various industries.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Portfolio', 'Services', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>604-217-7375</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-4 w-4" />
                <a href="mailto:asifamit@icloud.com" className="hover:text-blue-400 transition-colors">
                  asifamit@icloud.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Linkedin className="h-4 w-4" />
                <a href="https://www.linkedin.com/in/asifahmedamit/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="hover:text-blue-400 transition-colors">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Asif Ahmed. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for data-driven excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
