import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, Star } from 'lucide-react';

type Question = {
  id: number;
  question: string;
  options: { id: string; text: string }[];
};

type Answer = {
  questionId: number;
  answerId: string;
};

const ProductRecommendation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "What type of running do you primarily do?",
      options: [
        { id: "road", text: "Road running" },
        { id: "trail", text: "Trail running" },
        { id: "track", text: "Track running" },
        { id: "treadmill", text: "Treadmill running" },
      ],
    },
    {
      id: 2,
      question: "How would you describe your running goals?",
      options: [
        { id: "casual", text: "Casual fitness" },
        { id: "training", text: "Training for a race" },
        { id: "performance", text: "Improving performance" },
        { id: "recovery", text: "Recovery or physical therapy" },
      ],
    },
    {
      id: 3,
      question: "What is your typical weekly mileage?",
      options: [
        { id: "low", text: "Less than 10 miles" },
        { id: "medium", text: "10-25 miles" },
        { id: "high", text: "25-50 miles" },
        { id: "very-high", text: "More than 50 miles" },
      ],
    },
    {
      id: 4,
      question: "Do you have any specific foot characteristics?",
      options: [
        { id: "neutral", text: "Neutral pronation" },
        { id: "overpronation", text: "Overpronation (foot rolls inward)" },
        { id: "supination", text: "Supination (foot rolls outward)" },
        { id: "unsure", text: "Not sure" },
      ],
    },
    {
      id: 5,
      question: "What is your budget range for running shoes?",
      options: [
        { id: "budget", text: "$50-$100" },
        { id: "mid", text: "$100-$150" },
        { id: "premium", text: "$150-$200" },
        { id: "luxury", text: "$200+" },
      ],
    },
  ];

  const handleAnswer = (questionId: number, answerId: string) => {
    const newAnswers = [...answers];
    const existingAnswerIndex = newAnswers.findIndex(a => a.questionId === questionId);
    
    if (existingAnswerIndex >= 0) {
      newAnswers[existingAnswerIndex].answerId = answerId;
    } else {
      newAnswers.push({ questionId, answerId });
    }
    
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetQuiz = () => {
    setAnswers([]);
    setCurrentStep(0);
    setShowResults(false);
  };

  const isAnswered = (questionId: number) => {
    return answers.some(a => a.questionId === questionId);
  };

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const renderRecommendations = () => {
    // In a real app, this would be based on answers
    // For now, we'll show mock recommendations
    return (
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Based on your responses, we recommend:</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
            <div className="p-4 border-b border-gray-200 bg-blue-50">
              <h4 className="font-semibold text-lg">Perfect Match: Running Shoes</h4>
            </div>
            <div className="p-4">
              <div className="flex mb-4">
                <img 
                  src="https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Nike Air Zoom Pegasus" 
                  className="w-24 h-24 object-cover rounded mr-4"
                />
                <div>
                  <h5 className="font-medium">Nike Air Zoom Pegasus</h5>
                  <p className="text-blue-700 font-semibold">$129.99</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-2" />
                  <span>Perfect for road running with neutral pronation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-2" />
                  <span>Excellent cushioning for your mileage</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-2" />
                  <span>Great durability for frequent runners</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded transition-colors">
                View Product
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
            <div className="p-4 border-b border-gray-200 bg-blue-50">
              <h4 className="font-semibold text-lg">Recommended Apparel</h4>
            </div>
            <div className="p-4">
              <div className="flex mb-4">
                <img 
                  src="https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Performance Running Shirt" 
                  className="w-24 h-24 object-cover rounded mr-4"
                />
                <div>
                  <h5 className="font-medium">DryFit Performance Tee</h5>
                  <p className="text-blue-700 font-semibold">$45.99</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400" fill={i < 4 ? "currentColor" : "none"} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-2" />
                  <span>Moisture-wicking fabric keeps you dry</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-2" />
                  <span>Lightweight and breathable for comfort</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={18} className="text-green-500 mr-2" />
                  <span>Reflective elements for visibility</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded transition-colors">
                View Product
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 mb-8">
          <div className="p-4 border-b border-gray-200 bg-blue-50">
            <h4 className="font-semibold text-lg">Also Consider</h4>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="border border-gray-200 rounded p-3 hover:shadow-sm transition-shadow">
                <h5 className="font-medium mb-1">Running Socks</h5>
                <p className="text-sm text-gray-600 mb-2">Prevent blisters and improve comfort</p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Learn More</button>
              </div>
              <div className="border border-gray-200 rounded p-3 hover:shadow-sm transition-shadow">
                <h5 className="font-medium mb-1">Hydration Belt</h5>
                <p className="text-sm text-gray-600 mb-2">Stay hydrated on longer runs</p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Learn More</button>
              </div>
              <div className="border border-gray-200 rounded p-3 hover:shadow-sm transition-shadow">
                <h5 className="font-medium mb-1">Running Watch</h5>
                <p className="text-sm text-gray-600 mb-2">Track performance and progress</p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Learn More</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button 
            onClick={resetQuiz}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-6 py-3 rounded-md transition-colors inline-flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Retake Quiz
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              {!showResults ? (
                <>
                  <h1 className="text-2xl md:text-3xl font-bold mb-6">Find Your Perfect Running Gear</h1>
                  
                  <div className="mb-8">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-600 transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-gray-500">
                      <span>Question {currentStep + 1} of {questions.length}</span>
                      <span>{Math.round(progress)}% Complete</span>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">{currentQuestion.question}</h2>
                    <div className="space-y-3">
                      {currentQuestion.options.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => handleAnswer(currentQuestion.id, option.id)}
                          className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                            answers.some(a => a.questionId === currentQuestion.id && a.answerId === option.id)
                              ? 'border-blue-600 bg-blue-50'
                              : 'border-gray-200 hover:border-blue-300'
                          }`}
                        >
                          {option.text}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    {currentStep > 0 ? (
                      <button
                        onClick={handlePrevious}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-6 py-3 rounded-md transition-colors inline-flex items-center"
                      >
                        <ArrowLeft size={18} className="mr-2" />
                        Back
                      </button>
                    ) : (
                      <div></div>
                    )}
                    
                    <button
                      onClick={handleNext}
                      disabled={!isAnswered(currentQuestion.id)}
                      className={`inline-flex items-center px-6 py-3 rounded-md font-medium transition-colors ${
                        isAnswered(currentQuestion.id)
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {currentStep === questions.length - 1 ? 'See Results' : 'Next'}
                      <ArrowRight size={18} className="ml-2" />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h1 className="text-2xl md:text-3xl font-bold mb-2">Your Personalized Recommendations</h1>
                  <p className="text-gray-600 mb-6">
                    Based on your running profile, we've selected the perfect gear to enhance your performance.
                  </p>
                  {renderRecommendations()}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRecommendation;