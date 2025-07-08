
import React from 'react';
import { GraduationCap, Briefcase, Award, TrendingUp, Code, Brain, Users, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    { name: 'Python', level: 90, color: 'bg-blue-500' },
    { name: 'SQL', level: 85, color: 'bg-green-500' },
    { name: 'Tableau', level: 88, color: 'bg-orange-500' },
    { name: 'Excel', level: 92, color: 'bg-emerald-500' },
    { name: 'Power BI', level: 80, color: 'bg-yellow-500' },
    { name: 'Machine Learning', level: 75, color: 'bg-purple-500' },
    { name: 'Statistical Analysis', level: 85, color: 'bg-pink-500' },
    { name: 'Business Intelligence', level: 90, color: 'bg-indigo-500' }
  ];

  const education = [
    {
      degree: "Master of Business Administration (MBA)",
      school: "University Canada West",
      location: "Vancouver, BC",
      year: "2023-2025",
      icon: <GraduationCap className="h-6 w-6 text-blue-600" />,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      degree: "BSc in Electrical and Electronics Engineering",
      school: "Islamic University of Technology",
      location: "Bangladesh",
      year: "2013-2017",
      icon: <Award className="h-6 w-6 text-green-600" />,
      gradient: "from-green-500 to-teal-600"
    }
  ];

  const experience = [
    {
      title: "Sales Associate",
      company: "Winners International L.P.",
      location: "Vancouver, BC",
      year: "2024-Present",
      description: "Customer engagement, operational support, and data-driven sales optimization strategies.",
      icon: <Users className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Business Systems Analyst",
      company: "RajIT Solutions Ltd.",
      location: "Bangladesh",
      year: "2021-2022",
      description: "Data reporting, workflow improvements, dashboard creation, and business intelligence solutions.",
      icon: <TrendingUp className="h-6 w-6 text-purple-600" />
    }
  ];

  const highlights = [
    { icon: <Code className="h-8 w-8 text-blue-600" />, title: "Technical Expertise", desc: "Advanced analytics tools" },
    { icon: <Brain className="h-8 w-8 text-purple-600" />, title: "Strategic Thinking", desc: "Data-driven decisions" },
    { icon: <Users className="h-8 w-8 text-green-600" />, title: "Collaboration", desc: "Cross-functional teams" },
    { icon: <Target className="h-8 w-8 text-orange-600" />, title: "Results-Oriented", desc: "Performance optimization" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <Brain className="h-4 w-4 mr-2" />
            Professional Profile
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            I'm a data-driven business analyst with an MBA and a passion for transforming 
            complex datasets into strategic business insights that drive organizational success.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gray-50 rounded-full group-hover:bg-gray-100 group-hover:scale-110 transition-all duration-300">
                    {highlight.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-sm text-gray-600">{highlight.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Profile</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                As a highly analytical business professional with an MBA, I specialize in leveraging 
                advanced analytics tools and methodologies to solve complex business challenges. 
                My expertise spans data visualization, predictive modeling, and business intelligence 
                solutions that enable data-driven decision-making.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I thrive in collaborative environments where continuous learning and innovation 
                are valued, always seeking to optimize business processes and enhance performance 
                through strategic data analysis and stakeholder engagement.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Code className="mr-3 h-6 w-6 text-blue-600" />
                Technical Skills
              </h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 delay-${index * 100} group-hover:scale-105`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <GraduationCap className="mr-3 h-6 w-6 text-blue-600" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="relative overflow-hidden border-0 shadow-lg">
                    <div className={`absolute inset-0 bg-gradient-to-r ${edu.gradient} opacity-5`}></div>
                    <CardContent className="p-6 relative">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-gray-50 rounded-lg">
                          {edu.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-1">{edu.degree}</h4>
                          <p className="text-blue-600 font-semibold mb-1">{edu.school}</p>
                          <p className="text-sm text-gray-600">{edu.location} • {edu.year}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <Briefcase className="mr-3 h-6 w-6 text-blue-600" />
                Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-gray-50 rounded-lg">
                          {exp.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-1">{exp.title}</h4>
                          <p className="text-blue-600 font-semibold mb-1">{exp.company}</p>
                          <p className="text-sm text-gray-600 mb-3">{exp.location} • {exp.year}</p>
                          <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
