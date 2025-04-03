
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const isMobile = useIsMobile();

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Add shadow when scrolled down
      setScrolled(window.scrollY > 10);

      // Determine active section
      const sections = ['resumeAnalyzer', 'features', 'how-it-works', 'testimonials'];
      let currentSection = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`w-full py-4 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 shadow-md' : 'bg-white/80'
    }`}>
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <a 
            href="/" 
            className="text-2xl font-bold gradient-text relative group"
            aria-label="ResumeFinder Logo"
          >
            <span className="relative z-10">ResumeFinder</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-teal group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {[
            { id: 'features', label: 'Features' },
            { id: 'how-it-works', label: 'How It Works' },
            { id: 'testimonials', label: 'Testimonials' }
          ].map((item) => (
            <a 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-slate-700 hover:text-brand-blue transition-colors cursor-pointer relative ${
                activeSection === item.id ? 'text-brand-blue font-medium' : ''
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-blue"></span>
              )}
            </a>
          ))}
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              className="transition-colors hover:border-brand-blue hover:text-brand-blue"
            >
              Log in
            </Button>
            <Button className="relative overflow-hidden group">
              <span className="relative z-10">Sign up</span>
              <span className="absolute inset-0 bg-brand-teal transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Button>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            className="hover:bg-slate-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg p-4 animate-fade-in border-t border-slate-100">
          <nav className="flex flex-col space-y-4">
            {[
              { id: 'features', label: 'Features' },
              { id: 'how-it-works', label: 'How It Works' },
              { id: 'testimonials', label: 'Testimonials' }
            ].map((item) => (
              <a 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-slate-700 hover:text-brand-blue transition-colors p-2 flex items-center justify-between ${
                  activeSection === item.id ? 'text-brand-blue bg-blue-50 rounded-lg font-medium' : ''
                }`}
              >
                {item.label}
                <ChevronDown className="h-4 w-4 transition-transform" />
              </a>
            ))}
            <div className="flex flex-col space-y-2 pt-2 border-t border-slate-100 mt-2">
              <Button variant="outline" className="w-full justify-start">Log in</Button>
              <Button className="w-full justify-start">Sign up</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
