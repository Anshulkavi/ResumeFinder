
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">ResumeFinder</h3>
            <p className="mb-4">
              Connecting talented professionals with their perfect career opportunities through AI-powered job matching.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">For Job Seekers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Browse Jobs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Upload Resume</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career Advice</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Salary Calculator</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">For Employers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Post a Job</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Search Candidates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Recruitment Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing Plans</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} ResumeFinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
