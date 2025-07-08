
import React from 'react';
import { GraduationCap, Briefcase, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    'Python', 'SQL', 'Tableau', 'Excel', 'Power BI', 'R',
    'Machine Learning', 'Statistical Analysis', 'Data Visualization',
    'Business Intelligence', 'KPI Development', 'Agile Methodology',
    'Stakeholder Engagement', 'Process Optimization'
  ];

  const education = [
    {
      degree: "Master of Business Administration (MBA)",
      school: "University Canada West",
      location: "Vancouver, BC",
      year: "2023-2025",
      icon: <GraduationCap className="h-6 w-6 text-blue-600" />
    },
    {
      degree: "BSc in Electrical and Electronics Engineering",
      school: "Islamic University of Technology",
      location: "Bangladesh",
      year: "2013-2017",
      icon: <Award className="h-6 w-6 text-blue-600" />
    }
  ];

  const experience = [
    {
      title: "Sales Associate",
      company: "Winners International L.P.",
      location: "Vancouver, BC",
      year: "2024-Present",
      description: "Customer engagement, operational support, and data-driven sales optimization strategies."
    },
    {
      title: "Business Systems Analyst",
      company: "RajIT Solutions Ltd.",
      location: "Bangladesh",
      year: "2021-2022",
      description: "Data reporting, workflow improvements, dashboard creation, and business intelligence solutions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a data-driven business analyst with an MBA and a passion for transforming 
            complex datasets into strategic business insights that drive organizational success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Profile</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
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

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Core Competencies</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <GraduationCap className="mr-3 h-6 w-6 text-blue-600" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-600">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        {edu.icon}
                        <div>
                          <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                          <p className="text-blue-600 font-medium">{edu.school}</p>
                          <p className="text-sm text-gray-600">{edu.location} • {edu.year}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Briefcase className="mr-3 h-6 w-6 text-blue-600" />
                Experience
              </h3>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <Card key={index} className="border-l-4 border-l-green-500">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <TrendingUp className="h-6 w-6 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{exp.title}</h4>
                          <p className="text-green-600 font-medium">{exp.company}</p>
                          <p className="text-sm text-gray-600 mb-2">{exp.location} • {exp.year}</p>
                          <p className="text-sm text-gray-700">{exp.description}</p>
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
