import React from 'react';
import Hero from '../components/Hero';
import BrandShowcase from '../components/BrandShowcase';
import FeaturedProducts from '../components/FeaturedProducts';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <BrandShowcase />
      <FeaturedProducts />
      
      {/* Recommendation Banner */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl overflow-hidden shadow-xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="p-8 md:p-12 md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Not sure what gear you need?
                </h2>
                <p className="text-blue-100 mb-6">
                  Answer a few quick questions and we'll recommend the perfect running equipment for your specific needs, style, and goals.
                </p>
                <Link
                  to="/recommendation"
                  className="inline-flex items-center bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Take the Quiz <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.pexels.com/photos/5038820/pexels-photo-5038820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Runner with equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Why Choose Runwise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Advice</h3>
              <p className="text-gray-600">
                Our recommendations are based on years of running expertise and scientific research to find your perfect match.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
              <p className="text-gray-600">
                We only carry premium brands and thoroughly test all products to ensure they meet our high standards.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Get your running gear quickly with our expedited shipping options and start improving your performance right away.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">What Runners Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "The shoe recommendation quiz was spot-on! I've never had running shoes that fit my stride so perfectly."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">JM</span>
                </div>
                <div>
                  <h4 className="font-medium">Jamie Morgan</h4>
                  <p className="text-sm text-gray-500">Marathon Runner</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "Great selection of products and the staff recommendations helped me find gear that improved my trail running experience."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">AS</span>
                </div>
                <div>
                  <h4 className="font-medium">Alex Smith</h4>
                  <p className="text-sm text-gray-500">Trail Runner</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className={i < 4 ? "text-yellow-400" : "text-yellow-400 opacity-50"} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "Fast shipping and excellent customer service. The running jacket I bought has been perfect for my early morning runs."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">TP</span>
                </div>
                
                <div>
                  <h4 className="font-medium">Taylor Park</h4>
                  <p className="text-sm text-gray-500">5K Enthusiast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;