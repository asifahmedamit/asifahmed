
import React from 'react';
import { ArrowRight, Download, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Asif Ahmed
                <span className="block text-3xl lg:text-4xl text-blue-600 font-medium mt-2">
                  MBA, Business Analyst
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transforming complex data into actionable business insights through 
                advanced analytics, visualization, and strategic decision-making.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <MapPin className="h-4 w-4" />
                <span>Vancouver, BC</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Phone className="h-4 w-4" />
                <span>604-217-7375</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button onClick={() => scrollToSection('portfolio')} className="bg-blue-600 hover:bg-blue-700">
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" onClick={() => scrollToSection('contact')}>
                Contact Me
              </Button>
            </div>

            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/asifahmedamit/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:asifamit@icloud.com" 
                 className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-100 to-slate-200 flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-full bg-gradient-to-br from-blue-600 to-slate-700 flex items-center justify-center text-white text-6xl font-bold">
                  AA
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
