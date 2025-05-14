import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-fadeIn">
            Find Your Perfect Running Gear
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 animate-fadeIn animation-delay-100">
            At Runwise, we help you discover the ideal equipment for your running style, 
            goals, and preferences. Elevate your run with expert recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn animation-delay-200">
            <Link to="/recommendation" className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors">
              Find Your Gear <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link to="/products" className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;