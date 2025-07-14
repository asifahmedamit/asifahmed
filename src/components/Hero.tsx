
import React from 'react';
import { ArrowRight, Download, Linkedin, Mail, Phone, MapPin, BarChart3, TrendingUp, Database, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/50">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-indigo-200/30 to-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-slate-200/20 to-purple-200/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-pink-200/20 to-blue-200/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Enhanced Left Content */}
          <div className="space-y-10 animate-fade-in">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center px-6 py-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-base font-bold shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105">
              <BarChart3 className="h-5 w-5 mr-3" />
              Business Analytics Professional
              <Sparkles className="h-5 w-5 ml-3" />
            </div>

            <div className="space-y-8">
              <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 leading-tight tracking-tight">
                <span className="block">Asif Ahmed</span>
                <span className="block text-4xl lg:text-5xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent font-bold mt-4">
                  MBA, Business Analyst
                </span>
              </h1>
              
              <p className="text-2xl lg:text-3xl text-gray-600 leading-relaxed max-w-2xl font-light">
                Transforming complex data into <span className="font-bold text-blue-700 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">actionable business insights</span> through 
                advanced analytics, visualization, and strategic decision-making.
              </p>
            </div>

            {/* Enhanced Stats */}
            <div className="flex flex-wrap gap-10">
              <div className="group flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
                <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl group-hover:shadow-lg transition-all duration-300">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">2+</div>
                  <div className="text-base text-gray-600 font-medium">Years Experience</div>
                </div>
              </div>
              <div className="group flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
                <div className="p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl group-hover:shadow-lg transition-all duration-300">
                  <Database className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">10+</div>
                  <div className="text-base text-gray-600 font-medium">Projects Completed</div>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Info */}
            <div className="flex flex-wrap gap-8 text-gray-700">
              <div className="flex items-center space-x-3 hover:text-blue-700 transition-colors duration-300">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <span className="font-semibold text-lg">Vancouver, BC</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-blue-700 transition-colors duration-300">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-lg">604-217-7375</span>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-wrap gap-6">
              <Button 
                onClick={() => scrollToSection('portfolio')} 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 rounded-full"
              >
                View Portfolio
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('contact')}
                className="border-3 border-gray-300 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 px-10 py-4 text-xl font-bold transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 rounded-full shadow-lg hover:shadow-xl"
              >
                Contact Me
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/in/asifahmedamit/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl text-gray-600 hover:text-blue-600 transition-all duration-500 transform hover:-translate-y-2 hover:scale-110"
              >
                <Linkedin className="h-7 w-7" />
              </a>
              <a 
                href="mailto:asifamit@icloud.com" 
                className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl text-gray-600 hover:text-blue-600 transition-all duration-500 transform hover:-translate-y-2 hover:scale-110"
              >
                <Mail className="h-7 w-7" />
              </a>
            </div>
          </div>

          {/* Enhanced Right Content - Profile Section */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              {/* Enhanced Main Profile Circle */}
              <div className="relative w-96 h-96 lg:w-[450px] lg:h-[450px]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-600 to-indigo-700 rounded-full shadow-2xl animate-pulse"></div>
                <div className="absolute inset-3 bg-gradient-to-br from-blue-500 via-blue-700 to-indigo-800 rounded-full overflow-hidden flex items-center justify-center shadow-inner">
                  <img 
                    src="https://i.postimg.cc/x12dV3Tv/temp-Imagegg20-WJ.avif" 
                    alt="Asif Ahmed - Business Analyst"
                    className="w-4/5 h-4/5 object-cover rounded-full transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Enhanced Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-white rounded-3xl shadow-2xl p-6 animate-bounce hover:animate-none hover:scale-110 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">MBA</div>
                    <div className="text-sm text-gray-600 font-semibold">Graduate</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white rounded-3xl shadow-2xl p-6 animate-bounce delay-500 hover:animate-none hover:scale-110 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">2+</div>
                    <div className="text-sm text-gray-600 font-semibold">Years Exp</div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -left-10 transform -translate-y-1/2 bg-white rounded-3xl shadow-2xl p-6 animate-bounce delay-1000 hover:animate-none hover:scale-110 transition-transform duration-300">
                  <div className="text-center">
                    <BarChart3 className="h-10 w-10 text-purple-600 mx-auto mb-2" />
                    <div className="text-sm text-gray-600 font-semibold">Analytics</div>
                  </div>
                </div>
              </div>

              {/* Enhanced Decorative Elements */}
              <div className="absolute -z-10 top-12 left-12 w-24 h-24 bg-gradient-to-r from-blue-200/40 to-purple-200/40 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -z-10 bottom-12 right-12 w-36 h-36 bg-gradient-to-r from-indigo-200/40 to-pink-200/40 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-3 border-gray-400 rounded-full flex justify-center hover:border-blue-600 transition-colors duration-300">
          <div className="w-2 h-4 bg-gray-400 rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
