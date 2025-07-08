
import React from 'react';
import { BarChart3, TrendingUp, Database, PieChart, Users, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "Data Analysis & Visualization",
      description: "Transform complex datasets into clear, actionable insights using advanced analytics tools and interactive dashboards.",
      features: ["Interactive Dashboards", "Statistical Analysis", "Data Cleaning", "Trend Analysis"]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: "Predictive Modeling",
      description: "Leverage machine learning algorithms to forecast trends, identify patterns, and support strategic decision-making.",
      features: ["Forecasting Models", "Risk Assessment", "Pattern Recognition", "Performance Prediction"]
    },
    {
      icon: <Database className="h-8 w-8 text-purple-600" />,
      title: "Business Intelligence Solutions",
      description: "Design and implement comprehensive BI systems that provide real-time insights for operational excellence.",
      features: ["KPI Development", "Reporting Automation", "Data Integration", "Performance Monitoring"]
    },
    {
      icon: <PieChart className="h-8 w-8 text-orange-600" />,
      title: "Performance Optimization",
      description: "Analyze business processes and workflows to identify bottlenecks and implement data-driven improvements.",
      features: ["Process Analysis", "Efficiency Metrics", "Workflow Optimization", "Cost Reduction"]
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: "Stakeholder Engagement",
      description: "Bridge the gap between technical analysis and business strategy through clear communication and collaboration.",
      features: ["Requirements Gathering", "Presentation Design", "Training & Support", "Change Management"]
    },
    {
      icon: <Zap className="h-8 w-8 text-red-600" />,
      title: "Agile Analytics",
      description: "Implement agile methodologies in analytics projects for rapid delivery and continuous improvement.",
      features: ["Sprint Planning", "Iterative Development", "Continuous Integration", "Rapid Prototyping"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A personal portfolio's inside section provides a detailed look at the creator's work, 
            showcasing their skills, process, and expertise in business analytics and data science.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gray-50 rounded-full group-hover:bg-gray-100 transition-colors">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-sm text-gray-700 py-1">
                      • {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Data?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's work together to unlock the potential of your business data and drive strategic growth 
              through advanced analytics and business intelligence solutions.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
