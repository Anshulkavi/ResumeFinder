
import React from 'react';
import { Upload, GanttChart, Mail } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="h-10 w-10 text-white" />,
      title: "Upload Your Resume",
      description: "Start by uploading your most current resume. Our system will analyze it to understand your skills, experience, and career goals.",
      color: "bg-brand-blue"
    },
    {
      icon: <GanttChart className="h-10 w-10 text-white" />,
      title: "Get Matched",
      description: "Our AI algorithms match your profile with thousands of job listings to find the most relevant opportunities for you.",
      color: "bg-brand-teal"
    },
    {
      icon: <Mail className="h-10 w-10 text-white" />,
      title: "Apply & Connect",
      description: "Apply to your matched jobs with a single click and connect directly with companies interested in your profile.",
      color: "bg-brand-dark"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Three simple steps to find your next career opportunity
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center mb-16 last:mb-0">
              <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <div className={`${step.color} h-20 w-20 rounded-full flex items-center justify-center shadow-lg`}>
                  {step.icon}
                </div>
              </div>
              <div className="md:w-2/3 md:pl-6">
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-lg text-slate-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white p-8 rounded-xl shadow-sm max-w-3xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Start Your Personalized Job Search Today</h3>
            <p className="text-slate-600 mb-6">
              Join thousands of professionals who have found their perfect job match through our platform.
            </p>
            <button className="bg-gradient-to-r from-brand-blue to-brand-teal text-white font-medium py-3 px-8 rounded-lg hover:shadow-lg transition-all">
              Get Started For Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
