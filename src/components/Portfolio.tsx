
import React, { useState } from 'react';
import { ExternalLink, Github, BarChart3, TrendingUp, Users, Clock, ArrowRight, Sparkles, GraduationCap, Shield, Award, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Business Performance Analytics – Retail Sales Optimization",
      description: "Developed comprehensive analytics solution using Python and machine learning algorithms to optimize retail sales performance, resulting in 12% improvement in overall sales metrics.",
      tools: ["Python", "Machine Learning", "Tableau", "SQL", "Pandas"],
      metrics: [
        { label: "Sales Improvement", value: "12%", icon: <TrendingUp className="h-4 w-4" /> },
        { label: "Data Points Analyzed", value: "50K+", icon: <BarChart3 className="h-4 w-4" /> }
      ],
      category: "Business Intelligence",
      image: "bg-gradient-to-br from-blue-500 to-purple-600",
      featured: true
    },
    {
      title: "Workflow Reporting Optimization",
      description: "Automated reporting processes using Python and Excel integration, creating dynamic Tableau dashboards that reduced report turnaround time by 40% while improving data accuracy.",
      tools: ["Excel", "Tableau", "Python", "VBA", "Power Query"],
      metrics: [
        { label: "Time Reduction", value: "40%", icon: <Clock className="h-4 w-4" /> },
        { label: "Reports Automated", value: "25+", icon: <BarChart3 className="h-4 w-4" /> }
      ],
      category: "Process Automation",
      image: "bg-gradient-to-br from-green-500 to-teal-600",
      featured: true
    },
    {
      title: "ERP Optimization Case Study",
      description: "MBA coursework project analyzing supplier selection and inventory strategy for a manufacturing firm. Calculated annual material costs, holding costs, and safety inventory to optimize total cost of ownership.",
      tools: ["Excel", "MRP Systems", "Cost Analysis", "Statistical Modeling"],
      metrics: [
        { label: "Safety Stock Reduction", value: "15%", icon: <TrendingUp className="h-4 w-4" /> },
        { label: "Suppliers Analyzed", value: "2", icon: <BarChart3 className="h-4 w-4" /> }
      ],
      category: "Strategic Analysis",
      image: "bg-gradient-to-br from-indigo-500 to-blue-600",
      featured: true
    },
    {
      title: "Pandemic Supply Risk Assessment",
      description: "Developed supplier risk scoring model for pharma glass manufacturers during COVID-19 pandemic. Analyzed 10 suppliers using weighted operational and financial risk factors to support 2 billion vaccine dose packaging.",
      tools: ["Excel", "Risk Modeling", "Financial Analysis", "Supply Chain Analytics"],
      metrics: [
        { label: "Risk Reduction", value: "30%", icon: <Shield className="h-4 w-4" /> },
        { label: "Suppliers Evaluated", value: "10", icon: <Users className="h-4 w-4" /> }
      ],
      category: "Risk Management",
      image: "bg-gradient-to-br from-red-500 to-orange-600",
      featured: true
    },
    {
      title: "Customer Inquiry Resolution Dashboard",
      description: "Designed and implemented Excel-based dashboard system with advanced analytics to track customer inquiry patterns, reducing response time by 35% through process optimization.",
      tools: ["Excel", "Power BI", "SQL", "Data Modeling"],
      metrics: [
        { label: "Response Time Reduction", value: "35%", icon: <Clock className="h-4 w-4" /> },
        { label: "Customer Satisfaction", value: "94%", icon: <Users className="h-4 w-4" /> }
      ],
      category: "Customer Analytics",
      image: "bg-gradient-to-br from-purple-500 to-pink-600",
      featured: false
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-200/10 to-blue-200/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-semibold mb-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
            <Sparkles className="h-5 w-5 mr-3" />
            Featured Portfolio
            <Award className="h-5 w-5 ml-3" />
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
            Recent <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
            Transforming complex business challenges into data-driven solutions that deliver 
            <span className="font-semibold text-blue-700"> measurable results</span> and strategic value for organizations.
          </p>
        </div>

        {/* Enhanced Featured Projects Grid */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-10">
            {projects.filter(p => p.featured).map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-700 overflow-hidden border-0 shadow-xl bg-white/95 backdrop-blur-md hover:-translate-y-2 transform">
                <div className={`h-72 ${project.image} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-700" />
                  <div className="relative z-10 text-center transform group-hover:scale-105 transition-transform duration-500">
                    {project.category === "Risk Management" ? (
                      <Shield className="h-24 w-24 text-white/90 mx-auto mb-6 drop-shadow-lg" />
                    ) : project.category === "Strategic Analysis" ? (
                      <GraduationCap className="h-24 w-24 text-white/90 mx-auto mb-6 drop-shadow-lg" />
                    ) : (
                      <BarChart3 className="h-24 w-24 text-white/90 mx-auto mb-6 drop-shadow-lg" />
                    )}
                    <Badge className="bg-white/30 text-white border-white/40 backdrop-blur-sm text-sm px-4 py-2 font-semibold">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <Button size="sm" className="bg-white/30 hover:bg-white/40 text-white border-white/40 backdrop-blur-sm shadow-lg">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-500 font-bold">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-8">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="secondary" className="text-sm px-3 py-1 hover:bg-blue-100 hover:text-blue-800 transition-colors duration-300 font-medium">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 pt-6">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:from-blue-50 hover:to-purple-50 transition-all duration-500 group/metric transform hover:-translate-y-1 hover:shadow-lg">
                        <div className="flex items-center justify-center text-blue-600 mb-3 group-hover/metric:scale-125 transition-transform duration-500">
                          {metric.icon}
                        </div>
                        <div className="font-bold text-3xl text-gray-900 mb-2">{metric.value}</div>
                        <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced All Projects Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Complete Portfolio</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore all projects showcasing diverse analytical capabilities and business impact</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 shadow-lg hover:-translate-y-1 transform bg-white/95 backdrop-blur-sm">
                <div className={`h-56 ${project.image} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                  {project.category === "Risk Management" ? (
                    <Shield className="h-20 w-20 text-white/80 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  ) : project.category === "Strategic Analysis" ? (
                    <GraduationCap className="h-20 w-20 text-white/80 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  ) : (
                    <BarChart3 className="h-20 w-20 text-white/80 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  )}
                  <Badge className="absolute top-4 left-4 bg-white/30 text-white border-white/40 backdrop-blur-sm font-medium">
                    {project.category}
                  </Badge>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-300 font-bold">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tools.slice(0, 3).map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="secondary" className="text-xs px-2 py-1 font-medium">
                        {tool}
                      </Badge>
                    ))}
                    {project.tools.length > 3 && (
                      <Badge variant="secondary" className="text-xs px-2 py-1 font-medium">
                        +{project.tools.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:from-blue-50 hover:to-purple-50 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md">
                        <div className="flex items-center justify-center text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                          {metric.icon}
                        </div>
                        <div className="font-bold text-xl text-gray-900 mb-1">{metric.value}</div>
                        <div className="text-xs text-gray-600 font-medium">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <Target className="h-16 w-16 text-white/90" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Ready to Transform Your Data?</h3>
              <p className="text-blue-100 mb-10 max-w-3xl mx-auto text-xl leading-relaxed">
                Let's collaborate to unlock insights from your business data and drive strategic growth 
                through advanced analytics and intelligent visualization solutions.
              </p>
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-5 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 group transform hover:-translate-y-1 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </div>
            
            {/* Enhanced Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-500"></div>
            <div className="absolute top-1/4 right-1/3 w-20 h-20 bg-white/5 rounded-full blur-xl animate-pulse delay-1500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
