
import React from 'react';
import { ArrowRight, Download, Linkedin, Mail, Phone, MapPin, BarChart3, TrendingUp, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-slate-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              <BarChart3 className="h-4 w-4 mr-2" />
              Business Analytics Professional
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                Asif Ahmed
                <span className="block text-3xl lg:text-4xl text-gradient font-semibold mt-3">
                  MBA, Business Analyst
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Transforming complex data into <span className="font-semibold text-blue-700">actionable business insights</span> through 
                advanced analytics, visualization, and strategic decision-making.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">2+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Database className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">10+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 text-gray-700">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span className="font-medium">Vancouver, BC</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-600" />
                <span>604-217-7375</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection('portfolio')} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                View Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 px-8 py-3 text-lg font-semibold transition-all duration-300"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/asifahmedamit/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:asifamit@icloud.com" 
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Content - Enhanced Profile with Image */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              {/* Main Profile Circle with Image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-600 to-indigo-700 rounded-full shadow-2xl animate-pulse"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-blue-500 via-blue-700 to-indigo-800 rounded-full overflow-hidden flex items-center justify-center">
                  <img 
                    src="https://i.postimg.cc/x12dV3Tv/temp-Imagegg20-WJ.avif" 
                    alt="Asif Ahmed - Business Analyst"
                    className="w-4/5 h-4/5 object-cover rounded-full"
                  />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 animate-bounce">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">MBA</div>
                    <div className="text-sm text-gray-600">Graduate</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 animate-bounce delay-500">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">2+</div>
                    <div className="text-sm text-gray-600">Years Exp</div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-white rounded-2xl shadow-xl p-4 animate-bounce delay-1000">
                  <div className="text-center">
                    <BarChart3 className="h-8 w-8 text-purple-600 mx-auto mb-1" />
                    <div className="text-xs text-gray-600">Analytics</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
              <div className="absolute -z-10 bottom-10 right-10 w-32 h-32 bg-indigo-200/30 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
