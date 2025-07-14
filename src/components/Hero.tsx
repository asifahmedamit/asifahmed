
import React from 'react';
import { ArrowRight, Download, Linkedin, Mail, Phone, MapPin, BarChart3, TrendingUp, Database, Sparkles, Code, FileSpreadsheet, PieChart, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const tools = [
    { name: 'Python', icon: Code, color: 'text-blue-600' },
    { name: 'Excel', icon: FileSpreadsheet, color: 'text-green-600' },
    { name: 'Tableau', icon: PieChart, color: 'text-orange-600' },
    { name: 'SQL', icon: Database, color: 'text-purple-600' },
    { name: 'R', icon: BarChart3, color: 'text-red-600' },
    { name: 'Machine Learning', icon: Brain, color: 'text-indigo-600' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Enhanced Dynamic Background with Floating Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/50">
        <div className="absolute inset-0">
          {/* Main floating orbs */}
          <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-purple-200/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-indigo-200/30 to-blue-200/20 rounded-full blur-3xl animate-float delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-slate-200/20 to-purple-200/10 rounded-full blur-3xl animate-float delay-500"></div>
          
          {/* Data visualization elements floating */}
          <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-blue-500/10 rounded-lg blur-sm animate-pulse delay-300 rotate-12"></div>
          <div className="absolute top-3/4 right-1/4 w-8 h-8 bg-purple-500/10 rounded-full blur-sm animate-pulse delay-700"></div>
          <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-green-500/10 rounded-lg blur-sm animate-pulse delay-1200 -rotate-12"></div>
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-12 gap-4 h-full">
              {Array.from({ length: 48 }).map((_, i) => (
                <div 
                  key={i} 
                  className="bg-blue-600 rounded-sm animate-pulse" 
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Enhanced Left Content */}
          <div className="space-y-10 animate-slide-up">
            {/* Enhanced Badge with Animation */}
            <div className="inline-flex items-center px-6 py-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-base font-bold shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 animate-glow">
              <BarChart3 className="h-5 w-5 mr-3 animate-pulse" />
              Business Analytics Professional
              <Sparkles className="h-5 w-5 ml-3 animate-spin-slow" />
            </div>

            <div className="space-y-8">
              <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 leading-tight tracking-tight">
                <span className="block animate-fade-in">Asif Ahmed</span>
                <span className="block text-4xl lg:text-5xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent font-bold mt-4 animate-fade-in delay-300">
                  MBA, Business Analyst
                </span>
              </h1>
              
              <p className="text-2xl lg:text-3xl text-gray-600 leading-relaxed max-w-2xl font-light animate-fade-in delay-500">
                Transforming complex data into <span className="font-bold text-blue-700 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">actionable business insights</span> through 
                advanced analytics, visualization, and strategic decision-making.
              </p>
            </div>

            {/* Social Proof - Tools & Technologies */}
            <div className="animate-fade-in delay-700">
              <h3 className="text-lg font-semibold text-gray-700 mb-6">Expertise in Industry-Leading Tools</h3>
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-6">
                {tools.map((tool, index) => (
                  <div 
                    key={tool.name} 
                    className="group flex flex-col items-center space-y-3 p-4 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`p-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl group-hover:shadow-lg transition-all duration-300 ${tool.color}`}>
                      <tool.icon className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center group-hover:text-gray-900 transition-colors duration-300">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="flex flex-wrap gap-10 animate-fade-in delay-900">
              <div className="group flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
                <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl group-hover:shadow-lg transition-all duration-300 animate-pulse">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 animate-count-up">2+</div>
                  <div className="text-base text-gray-600 font-medium">Years Experience</div>
                </div>
              </div>
              <div className="group flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
                <div className="p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl group-hover:shadow-lg transition-all duration-300 animate-pulse delay-500">
                  <Database className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 animate-count-up delay-300">10+</div>
                  <div className="text-base text-gray-600 font-medium">Projects Completed</div>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Info */}
            <div className="flex flex-wrap gap-8 text-gray-700 animate-fade-in delay-1100">
              <div className="flex items-center space-x-3 hover:text-blue-700 transition-colors duration-300 transform hover:scale-105">
                <div className="p-2 bg-blue-100 rounded-lg animate-pulse">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <span className="font-semibold text-lg">Vancouver, BC</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-blue-700 transition-colors duration-300 transform hover:scale-105">
                <div className="p-2 bg-blue-100 rounded-lg animate-pulse delay-300">
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-lg">604-217-7375</span>
              </div>
            </div>

            {/* Enhanced CTA Buttons with Magnetic Effect */}
            <div className="flex flex-wrap gap-6 animate-fade-in delay-1300">
              <Button 
                onClick={() => scrollToSection('portfolio')} 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-110 rounded-full animate-pulse-slow"
              >
                View Portfolio
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('contact')}
                className="group border-3 border-gray-300 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 px-10 py-4 text-xl font-bold transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 rounded-full shadow-lg hover:shadow-xl animate-bounce-subtle"
              >
                Contact Me
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex space-x-6 animate-fade-in delay-1500">
              <a 
                href="https://www.linkedin.com/in/asifahmedamit/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl text-gray-600 hover:text-blue-600 transition-all duration-500 transform hover:-translate-y-3 hover:scale-115 animate-float"
              >
                <Linkedin className="h-7 w-7 group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a 
                href="mailto:asifamit@icloud.com" 
                className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl text-gray-600 hover:text-blue-600 transition-all duration-500 transform hover:-translate-y-3 hover:scale-115 animate-float delay-300"
              >
                <Mail className="h-7 w-7 group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Enhanced Right Content - Profile Section */}
          <div className="flex justify-center animate-scale-in delay-1000">
            <div className="relative">
              {/* Enhanced Main Profile Circle with Dynamic Effects */}
              <div className="relative w-96 h-96 lg:w-[450px] lg:h-[450px]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-600 to-indigo-700 rounded-full shadow-2xl animate-pulse-slow"></div>
                <div className="absolute inset-3 bg-gradient-to-br from-blue-500 via-blue-700 to-indigo-800 rounded-full overflow-hidden flex items-center justify-center shadow-inner animate-glow">
                  <img 
                    src="https://i.postimg.cc/x12dV3Tv/temp-Imagegg20-WJ.avif" 
                    alt="Asif Ahmed - Business Analyst"
                    className="w-4/5 h-4/5 object-cover rounded-full transform hover:scale-110 transition-transform duration-700 animate-fade-in"
                  />
                </div>
                
                {/* Enhanced Floating Achievement Cards */}
                <div className="absolute -top-8 -right-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 animate-float hover:animate-none hover:scale-110 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">MBA</div>
                    <div className="text-sm text-gray-600 font-semibold">Graduate</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 animate-float delay-500 hover:animate-none hover:scale-110 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent animate-count-up">2+</div>
                    <div className="text-sm text-gray-600 font-semibold">Years Exp</div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 animate-float delay-1000 hover:animate-none hover:scale-110 transition-transform duration-300">
                  <div className="text-center">
                    <BarChart3 className="h-10 w-10 text-purple-600 mx-auto mb-2 animate-pulse" />
                    <div className="text-sm text-gray-600 font-semibold">Analytics</div>
                  </div>
                </div>
              </div>

              {/* Enhanced Decorative Elements with Motion */}
              <div className="absolute -z-10 top-12 left-12 w-24 h-24 bg-gradient-to-r from-blue-200/40 to-purple-200/40 rounded-full blur-xl animate-float"></div>
              <div className="absolute -z-10 bottom-12 right-12 w-36 h-36 bg-gradient-to-r from-indigo-200/40 to-pink-200/40 rounded-full blur-xl animate-float delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator with Animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-8 h-12 border-3 border-gray-400 rounded-full flex justify-center hover:border-blue-600 transition-colors duration-300 cursor-pointer" onClick={() => scrollToSection('about')}>
          <div className="w-2 h-4 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
