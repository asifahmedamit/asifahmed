
import React from 'react';
import { ExternalLink, Github, BarChart3, TrendingUp, Users, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
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
      image: "bg-gradient-to-br from-blue-500 to-purple-600"
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
      image: "bg-gradient-to-br from-green-500 to-teal-600"
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
      image: "bg-gradient-to-br from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you need a striking portfolio, a functional website, or a custom solution, 
            I'm here to deliver results that align with your vision through data-driven insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className={`h-48 ${project.image} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <BarChart3 className="h-16 w-16 text-white/80" />
                <Badge className="absolute top-4 left-4 bg-white/20 text-white border-white/30">
                  {project.category}
                </Badge>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-gray-900 leading-tight">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <Badge key={toolIndex} variant="secondary" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center p-3 bg-gray-50 rounded-lg">
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

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Your creative process is constantly evolving, shaped by the beauty of nature, 
            and the bold expressions of modern art, allowing your designs to balance structure, 
            flow, and aesthetics.
          </p>
          <div className="flex justify-center space-x-4">
            <ExternalLink className="h-6 w-6 text-gray-400" />
            <Github className="h-6 w-6 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
