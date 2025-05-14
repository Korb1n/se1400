import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const faqItems: FaqItem[] = [
    {
      question: "How do I find the right running shoe size?",
      answer: "We recommend measuring your feet in the evening when they're at their largest, and trying on shoes with the socks you plan to run in. Your running shoes should have a thumb's width of space between your longest toe and the end of the shoe. Remember that sizes can vary between brands, so always check the specific brand's size guide.",
      category: "Shoes"
    },
    {
      question: "How often should I replace my running shoes?",
      answer: "Most running shoes should be replaced every 300-500 miles (480-800 km). However, this varies based on your running style, body weight, and the surfaces you run on. Signs that you need new shoes include worn-out treads, compressed midsoles, or new aches and pains in your feet, knees, or hips.",
      category: "Shoes"
    },
    {
      question: "What's the difference between road and trail running shoes?",
      answer: "Road running shoes are designed for pavement with even surfaces, offering cushioning and support for repetitive strides. Trail running shoes have aggressive tread patterns for traction on uneven terrain, rock plates to protect against sharp objects, and more durable construction to withstand off-road conditions.",
      category: "Shoes"
    },
    {
      question: "What should I wear for cold weather running?",
      answer: "For cold weather, dress in layers: a moisture-wicking base layer, an insulating middle layer, and a windproof/waterproof outer shell if needed. Don't forget gloves, a hat, and appropriate socks. A good rule of thumb is to dress as if it's 10-15°F warmer than the actual temperature, as your body will warm up once you start running.",
      category: "Apparel"
    },
    {
      question: "How should I care for my technical running clothes?",
      answer: "Wash your technical running clothes in cold water on a gentle cycle, avoiding fabric softeners which can clog the moisture-wicking properties. Air dry when possible, or use low heat in the dryer. For stubborn odors, try soaking in a mixture of water and white vinegar before washing.",
      category: "Apparel"
    },
    {
      question: "Do I need special socks for running?",
      answer: "Yes, running-specific socks are highly recommended. They provide cushioning in high-impact areas, have seamless toes to prevent blisters, and use moisture-wicking materials to keep feet dry. Look for socks made from synthetic fibers or merino wool rather than cotton, which retains moisture.",
      category: "Apparel"
    },
    {
      question: "How do I choose a good sports watch for running?",
      answer: "Consider what metrics are important to you (pace, distance, heart rate, etc.), battery life, GPS accuracy, and compatibility with your phone or other devices. Also think about whether you want additional features like music storage, contactless payments, or advanced training analytics.",
      category: "Accessories"
    },
    {
      question: "What hydration options are best for long runs?",
      answer: "For runs under an hour, a water bottle might suffice. For longer runs, consider hydration belts, handheld bottles, or hydration vests/packs. Choose based on comfort, water capacity needed, and whether you want additional storage for items like keys, phone, or nutrition.",
      category: "Accessories"
    },
    {
      question: "Are compression socks/sleeves worth it?",
      answer: "Many runners find compression socks or calf sleeves helpful for improving circulation, reducing muscle vibration, and potentially enhancing recovery. They may be particularly beneficial during long runs or for recovery after intense workouts. However, benefits can vary by individual, so consider trying them to see if they work for you.",
      category: "Accessories"
    },
    {
      question: "What's your return policy?",
      answer: "We offer a 30-day return policy for unworn items in original packaging. For running shoes, we extend this to a 60-day trial period where you can return them even if they've been worn, as long as they're not excessively worn or damaged. Please see our full return policy page for more details.",
      category: "Store Policies"
    },
    {
      question: "Do you offer free shipping?",
      answer: "Yes, we offer free standard shipping on all orders over $75. Orders under this amount incur a flat $7.95 shipping fee. Expedited shipping options are available at checkout for an additional charge.",
      category: "Store Policies"
    },
    {
      question: "Can I try on shoes in-store before buying?",
      answer: "Absolutely! We encourage customers to visit our physical locations to get properly fitted by our running specialists. No appointment is necessary, but if you'd like dedicated one-on-one service, you can schedule a fitting appointment through our website.",
      category: "Store Policies"
    },
  ];

  const categories = Array.from(new Set(faqItems.map(item => item.category)));

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
    setSearchQuery('');
  };

  const filteredFaqs = faqItems.filter(faq => {
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === null || faq.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Frequently Asked Questions</h1>
          <p className="text-center text-gray-600 mb-8">
            Find answers to common questions about running gear, our products, and policies.
          </p>

          <div className="flex flex-col md:flex-row gap-8 mb-8">
            {/* Search Bar */}
            <div className="md:flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
                <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
              {activeCategory && (
                <button
                  onClick={() => setActiveCategory(null)}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  Clear Filter
                </button>
              )}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
                >
                  <button
                    className="w-full text-left p-5 flex justify-between items-center focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                    {activeIndex === index ? 
                      <ChevronUp className="h-5 w-5 text-gray-500" /> : 
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    }
                  </button>
                  {activeIndex === index && (
                    <div className="px-5 pb-5 pt-0 animate-fadeIn">
                      <div className="border-t border-gray-200 pt-3">
                        <p className="text-gray-600">{faq.answer}</p>
                        <div className="mt-2">
                          <span className="inline-block text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            {faq.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">No FAQs found matching your search.</p>
                <button
                  onClick={() => {setSearchQuery(''); setActiveCategory(null);}}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 md:p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="mb-6">
              Our team of running experts is here to help with any questions you might have about finding the right gear.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:support@runwise.com" 
                className="bg-white text-blue-700 hover:bg-blue-50 transition-colors font-medium py-3 px-6 rounded-lg text-center"
              >
                Email Us
              </a>
              <a 
                href="tel:+15551234567" 
                className="bg-transparent border-2 border-white hover:bg-white/10 transition-colors font-medium py-3 px-6 rounded-lg text-center"
              >
                Call Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;