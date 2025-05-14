import React, { useState } from 'react';
import { Sliders, Search, Star, X, ChevronDown } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  subcategory: string;
  price: number;
  rating: number;
  image: string;
  tags: string[];
  bestFor: string[];
}

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300]);
  const [showFilters, setShowFilters] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "UltraBoost Pro Runner",
      brand: "Adidas",
      category: "Footwear",
      subcategory: "Running Shoes",
      price: 159.99,
      rating: 4.8,
      image: "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["cushioned", "neutral", "road"],
      bestFor: ["Road running", "Long distance"]
    },
    {
      id: 2,
      name: "AirFlex Performance",
      brand: "Nike",
      category: "Footwear",
      subcategory: "Running Shoes",
      price: 129.99,
      rating: 4.7,
      image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["lightweight", "responsive", "race-day"],
      bestFor: ["Speed training", "Racing"]
    },
    {
      id: 3,
      name: "CloudWalker Comfort",
      brand: "Hoka",
      category: "Footwear",
      subcategory: "Running Shoes",
      price: 179.99,
      rating: 4.9,
      image: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["max-cushion", "stability", "long-distance"],
      bestFor: ["Long distance", "Recovery runs"]
    },
    {
      id: 4,
      name: "DryFit Performance Tee",
      brand: "Nike",
      category: "Apparel",
      subcategory: "Shirts",
      price: 45.99,
      rating: 4.5,
      image: "https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["breathable", "moisture-wicking", "lightweight"],
      bestFor: ["Hot weather", "Racing"]
    },
    {
      id: 5,
      name: "Winter Thermal Jacket",
      brand: "Brooks",
      category: "Apparel",
      subcategory: "Outerwear",
      price: 129.99,
      rating: 4.6,
      image: "https://images.pexels.com/photos/6550818/pexels-photo-6550818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["water-resistant", "insulated", "reflective"],
      bestFor: ["Cold weather", "Night running"]
    },
    {
      id: 6,
      name: "Compression Running Tights",
      brand: "Under Armour",
      category: "Apparel",
      subcategory: "Bottoms",
      price: 79.99,
      rating: 4.7,
      image: "https://images.pexels.com/photos/7672103/pexels-photo-7672103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["compression", "moisture-wicking", "muscle-support"],
      bestFor: ["Recovery", "Long distance"]
    },
    {
      id: 7,
      name: "Trail Runner Pro",
      brand: "Salomon",
      category: "Footwear",
      subcategory: "Trail Shoes",
      price: 149.99,
      rating: 4.8,
      image: "https://images.pexels.com/photos/8857180/pexels-photo-8857180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["trail", "grippy", "protective"],
      bestFor: ["Trail running", "Technical terrain"]
    },
    {
      id: 8,
      name: "Hydration Vest Pack",
      brand: "Nathan",
      category: "Accessories",
      subcategory: "Hydration",
      price: 99.99,
      rating: 4.7,
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["hydration", "storage", "lightweight"],
      bestFor: ["Long distance", "Trail running"]
    },
    {
      id: 9,
      name: "Running GPS Watch",
      brand: "Garmin",
      category: "Accessories",
      subcategory: "Electronics",
      price: 249.99,
      rating: 4.9,
      image: "https://images.pexels.com/photos/437038/pexels-photo-437038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["GPS", "heart-rate", "battery-life"],
      bestFor: ["Training", "Race tracking"]
    },
    {
      id: 10,
      name: "Anti-Blister Running Socks",
      brand: "Balega",
      category: "Accessories",
      subcategory: "Socks",
      price: 16.99,
      rating: 4.6,
      image: "https://images.pexels.com/photos/4639579/pexels-photo-4639579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["anti-blister", "cushioned", "moisture-wicking"],
      bestFor: ["Long distance", "Everyday running"]
    },
    {
      id: 11,
      name: "Reflective Running Cap",
      brand: "Brooks",
      category: "Accessories",
      subcategory: "Headwear",
      price: 28.99,
      rating: 4.5,
      image: "https://images.pexels.com/photos/1183209/pexels-photo-1183209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["reflective", "breathable", "adjustable"],
      bestFor: ["Sunny days", "Night running"]
    },
    {
      id: 12,
      name: "Recovery Massage Roller",
      brand: "TriggerPoint",
      category: "Accessories",
      subcategory: "Recovery",
      price: 34.99,
      rating: 4.7,
      image: "https://images.pexels.com/photos/6552298/pexels-photo-6552298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["foam-roller", "muscle-recovery", "portable"],
      bestFor: ["Recovery", "Injury prevention"]
    },
  ];

  const categories = Array.from(new Set(products.map(p => p.category)));
  const brands = Array.from(new Set(products.map(p => p.brand)));

  const filteredProducts = products.filter(product => {
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === null || product.category === selectedCategory;
    const matchesBrand = selectedBrand === null || product.brand === selectedBrand;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
  });

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedBrand(null);
    setPriceRange([0, 300]);
    setSearchQuery('');
  };

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
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Our Products</h1>
        <p className="text-gray-600 mb-8">
          Browse our selection of premium running gear from top brands.
        </p>

        {/* Search and Filter Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
              <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </div>
          
          <div className="flex items-center">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Sliders size={20} />
              <span className="font-medium">Filters</span>
              <ChevronDown size={16} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            
            {(selectedCategory || selectedBrand || priceRange[0] > 0 || priceRange[1] < 300) && (
              <button
                onClick={clearFilters}
                className="ml-2 text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
        
        {/* Expanded Filters */}
        {showFilters && (
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            {/* Category Filter */}
            <div>
              <h3 className="font-medium mb-2">Category</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">{category}</span>
                  </label>
                ))}
                {selectedCategory && (
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Clear category
                  </button>
                )}
              </div>
            </div>
            
            {/* Brand Filter */}
            <div>
              <h3 className="font-medium mb-2">Brand</h3>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <label key={brand} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="brand"
                      checked={selectedBrand === brand}
                      onChange={() => setSelectedBrand(brand)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">{brand}</span>
                  </label>
                ))}
                {selectedBrand && (
                  <button
                    onClick={() => setSelectedBrand(null)}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Clear brand
                  </button>
                )}
              </div>
            </div>
            
            {/* Price Range */}
            <div>
              <h3 className="font-medium mb-2">Price Range</h3>
              <div className="px-2">
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={300}
                  step={10}
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="w-full"
                />
                <input
                  type="range"
                  min={0}
                  max={300}
                  step={10}
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        )}

        {/* Result Count */}
        <p className="text-gray-600 mb-6">
          Showing {filteredProducts.length} out of {products.length} products
        </p>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
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
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-medium text-gray-900">{product.name}</h3>
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-2">{product.subcategory}</p>
                  
                  <div className="mb-3">
                    {renderRating(product.rating)}
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.tags.slice(0, 3).map((tag) => (
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
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria.</p>
            <button
              onClick={clearFilters}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;