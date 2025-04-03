
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Johnson",
      position: "Software Developer",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces&auto=format&q=80",
      quote: "I found my dream job within 2 weeks of using ResumeFinder. The job matching was incredibly accurate and saved me so much time in my search.",
      stars: 5
    },
    {
      name: "Sarah Chen",
      position: "Marketing Specialist",
      company: "Brand Solutions",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces&auto=format&q=80",
      quote: "The skill gap analysis feature helped me identify exactly what I needed to improve to land my target role. Three months later, I got the job!",
      stars: 5
    },
    {
      name: "David Rodriguez",
      position: "Project Manager",
      company: "Global Innovations",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces&auto=format&q=80",
      quote: "After months of applying to jobs manually with no success, ResumeFinder matched me with the perfect opportunity in just days.",
      stars: 4
    }
  ];
  
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how job seekers like you found success with our platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden hover-up">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="rounded-full h-14 w-14 object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-slate-500">{testimonial.position} at {testimonial.company}</p>
                  </div>
                </div>
                
                <div className="mb-4 flex">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  {[...Array(5 - testimonial.stars)].map((_, i) => (
                    <Star key={i + testimonial.stars} className="h-4 w-4 text-gray-300" />
                  ))}
                </div>
                
                <blockquote className="text-slate-700">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-slate-600 mb-4">Join thousands of satisfied job seekers</p>
          <div className="flex justify-center space-x-2">
            <div className="bg-slate-200 h-3 w-3 rounded-full"></div>
            <div className="bg-slate-400 h-3 w-3 rounded-full"></div>
            <div className="bg-slate-200 h-3 w-3 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
