
import React from 'react';
import { FileText, Search, Zap, Award, Bell, Shield } from 'lucide-react';

const Features = () => {
  const featureItems = [
    {
      icon: <FileText className="h-8 w-8 text-brand-blue" />,
      title: "Smart Resume Parsing",
      description: "Our algorithm analyzes your resume to extract skills, experience, and qualifications automatically."
    },
    {
      icon: <Search className="h-8 w-8 text-brand-blue" />,
      title: "AI-Powered Job Matching",
      description: "Get matched with jobs that truly fit your profile, not just keyword matches."
    },
    {
      icon: <Zap className="h-8 w-8 text-brand-blue" />,
      title: "One-Click Apply",
      description: "Apply to multiple jobs with a single click, using your pre-loaded resume."
    },
    {
      icon: <Award className="h-8 w-8 text-brand-teal" />,
      title: "Skill Gap Analysis",
      description: "See what skills you need to develop to qualify for your dream positions."
    },
    {
      icon: <Bell className="h-8 w-8 text-brand-teal" />,
      title: "Job Alerts",
      description: "Receive notifications when new positions matching your profile become available."
    },
    {
      icon: <Shield className="h-8 w-8 text-brand-teal" />,
      title: "Privacy Protection",
      description: "Control who sees your resume with advanced privacy settings and anonymization options."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Your Job Search</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our platform is designed to simplify your job search with intelligent features that connect you with the right opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((feature, index) => (
            <div 
              key={index} 
              className="bg-slate-50 p-6 rounded-xl shadow-sm hover-up hover:shadow-md transition-all"
            >
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mb-4 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
