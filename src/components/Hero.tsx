
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Award } from 'lucide-react';

const Hero = () => {
  const [animateStats, setAnimateStats] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);
  const stats = [
    { number: "10,000+", text: "Job Seekers" },
    { number: "93%", text: "Success Rate" },
    { number: "5,000+", text: "Companies" },
  ];

  const scrollToResumeUpload = () => {
    const resumeSection = document.querySelector('#resumeAnalyzer');
    if (resumeSection) {
      resumeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateStats(true);
    }, 500);

    const statInterval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % stats.length);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(statInterval);
    };
  }, []);

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-white to-blue-50 overflow-hidden relative">
      {/* Background shape */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-16 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="flex items-center mb-8 animate-fade-in">
              <span className="bg-blue-100 text-brand-blue text-sm font-semibold px-3 py-1 rounded-full flex items-center">
                <CheckCircle className="w-4 h-4 mr-1" />
                AI-Powered Resume Analysis
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Find Your <span className="gradient-text">Perfect Job</span> Match With Your Resume
            </h1>
            <p className="text-lg md:text-xl text-slate-700 mb-8 max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Upload your resume once and let our AI-powered platform match you with the most relevant job opportunities tailored to your skills and experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="font-semibold group transition-all" onClick={scrollToResumeUpload}>
                Upload Resume
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="font-semibold relative overflow-hidden hover:border-brand-blue hover:text-brand-blue transition-colors">
                Browse Jobs
                <span className="absolute inset-0 bg-blue-50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform z-[-1]"></span>
              </Button>
            </div>
            
            <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center space-x-2 text-sm text-slate-500 mb-2">
                <Award className="h-4 w-4 text-brand-teal" />
                <span className="font-medium">Join professionals who found their dream job</span>
              </div>
              
              <div className="relative h-12 overflow-hidden">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 flex items-center transition-all duration-500 ease-in-out ${
                      currentStat === index ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                    }`}
                  >
                    <p className="text-xl font-bold text-slate-700">{stat.number} <span className="font-normal text-slate-500">{stat.text}</span></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-teal/10 rounded-lg rotate-12 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-brand-blue/10 rounded-lg -rotate-12 animate-pulse" style={{ animationDelay: "1s" }}></div>
              
              <div className="bg-white p-6 rounded-xl shadow-xl relative z-10 transform transition-transform hover:scale-105 duration-300">
                <div className="bg-brand-blue/10 p-4 rounded-lg mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <div className="h-6 w-24 bg-brand-blue/20 rounded"></div>
                    <div className="h-5 w-5 rounded-full bg-green-400 flex items-center justify-center">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <div className="h-4 w-full bg-slate-200 rounded mb-2"></div>
                  <div className="h-4 w-3/4 bg-slate-200 rounded"></div>
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-brand-teal/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-brand-teal">JD</span>
                  </div>
                  <div>
                    <div className="h-4 w-32 bg-slate-200 rounded mb-1"></div>
                    <div className="h-3 w-24 bg-slate-200 rounded"></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="h-4 w-full bg-slate-200 rounded"></div>
                  <div className="h-4 w-5/6 bg-slate-200 rounded"></div>
                  <div className="h-4 w-4/6 bg-slate-200 rounded"></div>
                </div>
                
                <div className="mt-4 flex justify-end">
                  <div className="h-8 w-24 rounded-full bg-brand-blue/30 transform hover:scale-105 transition-transform cursor-pointer"></div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-brand-teal to-brand-teal/80 text-white p-3 rounded-lg shadow-lg transform rotate-6 hover:rotate-0 transition-transform cursor-pointer z-20">
                <div className="text-sm font-bold">98% Match!</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow z-20">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-green-500 animate-pulse"></div>
                  <div className="text-sm font-medium">20 New Matches Today</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
