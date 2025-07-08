
import React from 'react';
import { BarChart3, TrendingUp, Database, PieChart, Users, Zap, ArrowRight, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "Data Analysis & Visualization",
      description: "Transform complex datasets into clear, actionable insights using advanced analytics tools and interactive dashboards.",
      features: ["Interactive Dashboards", "Statistical Analysis", "Data Cleaning", "Trend Analysis"],
      gradient: "from-blue-500 to-cyan-600",
      delay: "delay-0"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: "Predictive Modeling",
      description: "Leverage machine learning algorithms to forecast trends, identify patterns, and support strategic decision-making.",
      features: ["Forecasting Models", "Risk Assessment", "Pattern Recognition", "Performance Prediction"],
      gradient: "from-green-500 to-emerald-600",
      delay: "delay-100"
    },
    {
      icon: <Database className="h-8 w-8 text-purple-600" />,
      title: "Business Intelligence Solutions",
      description: "Design and implement comprehensive BI systems that provide real-time insights for operational excellence.",
      features: ["KPI Development", "Reporting Automation", "Data Integration", "Performance Monitoring"],
      gradient: "from-purple-500 to-violet-600",
      delay: "delay-200"
    },
    {
      icon: <PieChart className="h-8 w-8 text-orange-600" />,
      title: "Performance Optimization",
      description: "Analyze business processes and workflows to identify bottlenecks and implement data-driven improvements.",
      features: ["Process Analysis", "Efficiency Metrics", "Workflow Optimization", "Cost Reduction"],
      gradient: "from-orange-500 to-red-600",
      delay: "delay-300"
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: "Stakeholder Engagement",
      description: "Bridge the gap between technical analysis and business strategy through clear communication and collaboration.",
      features: ["Requirements Gathering", "Presentation Design", "Training & Support", "Change Management"],
      gradient: "from-indigo-500 to-blue-600",
      delay: "delay-400"
    },
    {
      icon: <Zap className="h-8 w-8 text-red-600" />,
      title: "Agile Analytics",
      description: "Implement agile methodologies in analytics projects for rapid delivery and continuous improvement.",
      features: ["Sprint Planning", "Iterative Development", "Continuous Integration", "Rapid Prototyping"],
      gradient: "from-red-500 to-pink-600",
      delay: "delay-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4 mr-2" />
            Professional Services
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive analytics solutions designed to transform your business data into 
            strategic advantages and drive measurable growth across all sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:-translate-y-2 ${service.delay}`}>
              <CardHeader className="text-center pb-4 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="flex justify-center mb-6 relative z-10">
                  <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-white group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-900 relative z-10 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center relative">
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700 py-2 px-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 group/feature">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover/feature:bg-blue-600"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="outline" size="sm" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-black/10"></div>
            
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-4 left-4 w-8 h-8 bg-white/10 rounded-full animate-bounce"></div>
              <div className="absolute top-8 right-8 w-6 h-6 bg-white/10 rounded-full animate-bounce delay-300"></div>
              <div className="absolute bottom-6 left-1/4 w-4 h-4 bg-white/10 rounded-full animate-bounce delay-700"></div>
              <div className="absolute bottom-4 right-1/3 w-5 h-5 bg-white/10 rounded-full animate-bounce delay-1000"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-yellow-300 mr-3 animate-pulse" />
                <h3 className="text-3xl font-bold">Ready to Transform Your Data?</h3>
                <Sparkles className="h-8 w-8 text-yellow-300 ml-3 animate-pulse" />
              </div>
              <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                Let's work together to unlock the potential of your business data and drive strategic growth 
                through advanced analytics and business intelligence solutions tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
            
            {/* Decorative Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3e%3cpath d='m 60 0 l 0 60 l -60 0 l 0 -60 l 60 0' stroke='white' stroke-width='1' fill='none'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)' /%3e%3c/svg%3e")`,
              }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
