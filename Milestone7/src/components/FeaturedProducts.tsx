import React from 'react';
import { Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  tags: string[];
}

const FeaturedProducts = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "UltraBoost Pro Runner",
      brand: "Adidas",
      category: "Running Shoes",
      price: 159.99,
      rating: 4.8,
      image: "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["cushioned", "neutral", "road"]
    },
    {
      id: 2,
      name: "AirFlex Performance",
      brand: "Nike",
      category: "Running Shoes",
      price: 129.99,
      rating: 4.7,
      image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["lightweight", "responsive", "race-day"]
    },
    {
      id: 3,
      name: "CloudWalker Comfort",
      brand: "Hoka",
      category: "Running Shoes",
      price: 179.99,
      rating: 4.9,
      image: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["max-cushion", "stability", "long-distance"]
    },
    {
      id: 4,
      name: "DryFit Performance Tee",
      brand: "Nike",
      category: "Apparel",
      price: 45.99,
      rating: 4.5,
      image: "https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["breathable", "moisture-wicking", "lightweight"]
    },
  ];

  const renderRating = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            size={16}
            className={`${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'} 
                        ${i === Math.floor(rating) && rating % 1 > 0 ? 'text-yellow-400 opacity-70' : ''}`}
            fill={i < Math.floor(rating) || (i === Math.floor(rating) && rating % 1 > 0) ? 'currentColor' : 'none'}
          />
        ))}
        <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center transition-colors">
            View all
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-blue-600 text-white text-xs font-bold uppercase px-2 py-1 rounded-sm">
                    {product.brand}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-gray-900">{product.name}</h3>
                </div>
                
                <div className="mb-3">
                  {renderRating(product.rating)}
                </div>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-blue-700 font-semibold">${product.price.toFixed(2)}</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;