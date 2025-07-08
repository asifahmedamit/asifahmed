
import React, { useState } from 'react';
import { ExternalLink, Github, BarChart3, TrendingUp, Users, Clock, ArrowRight, Sparkles } from 'lucide-react';
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
      title: "Customer Inquiry Resolution Dashboard",
      description: "Designed and implemented Excel-based dashboard system with advanced analytics to track customer inquiry patterns, reducing response time by 35% through process optimization.",
      tools: ["Excel", "Power BI", "SQL", "Data Modeling"],
      metrics: [
        { label: "Response Time Reduction", value: "35%", icon: <Clock className="h-4 w-4" /> },
        { label: "Customer Satisfaction", value: "94%", icon: <Users className="h-4 w-4" /> }
      ],
      category: "Customer Analytics",
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      featured: false
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            Featured Work
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transforming complex business challenges into data-driven solutions that deliver 
            measurable results and strategic value for organizations.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                <div className={`h-64 ${project.image} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
                  <div className="relative z-10 text-center">
                    <BarChart3 className="h-20 w-20 text-white/90 mx-auto mb-4" />
                    <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="secondary" className="text-xs hover:bg-blue-100 hover:text-blue-800 transition-colors duration-300">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group/metric">
                        <div className="flex items-center justify-center text-blue-600 mb-2 group-hover/metric:scale-110 transition-transform duration-300">
                          {metric.icon}
                        </div>
                        <div className="font-bold text-2xl text-gray-900 mb-1">{metric.value}</div>
                        <div className="text-xs text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">All Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg">
                <div className={`h-48 ${project.image} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <BarChart3 className="h-16 w-16 text-white/80 relative z-10" />
                  <Badge className="absolute top-4 left-4 bg-white/20 text-white border-white/30">
                    {project.category}
                  </Badge>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-gray-900 leading-tight">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.tools.slice(0, 3).map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                    {project.tools.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tools.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                        <div className="flex items-center justify-center text-blue-600 mb-1">
                          {metric.icon}
                        </div>
                        <div className="font-bold text-lg text-gray-900">{metric.value}</div>
                        <div className="text-xs text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Data?</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                Let's collaborate to unlock insights from your business data and drive strategic growth 
                through advanced analytics and intelligent visualization.
              </p>
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
