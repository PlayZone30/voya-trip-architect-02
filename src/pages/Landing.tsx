
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import Header from '../components/Header';

const Landing = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?destination=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative">
        {/* Background image container */}
        <div className="relative h-96 bg-gradient-to-r from-teal-400 to-blue-500 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Beach scene illustration */}
          <div className="absolute bottom-0 left-0 right-0 h-32">
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-yellow-200 to-transparent"></div>
            <div className="absolute bottom-4 left-1/4 w-8 h-8 bg-red-400 rounded-full"></div>
            <div className="absolute bottom-6 right-1/3 w-6 h-6 bg-blue-600 rounded-full"></div>
            <div className="absolute bottom-8 left-1/2 w-4 h-4 bg-white rounded-full"></div>
          </div>
          
          <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Plan Your Perfect Trip in Minutes
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Discover, Stay, Explore - All Connected Intelligently
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="flex bg-white rounded-lg shadow-lg p-2">
                  <div className="flex-1 flex items-center px-4">
                    <Search className="text-gray-400 mr-3 h-5 w-5" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Where do you want to go?"
                      className="flex-1 outline-none text-lg"
                    />
                  </div>
                  <button
                    onClick={handleSearch}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Search Destination
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-lg text-gray-600">
              Explore the core functionalities that make trip planning seamless and efficient.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <div className="text-blue-600 text-xl">🏨</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Accommodation Mapping</h3>
              <p className="text-gray-600">
                Find the best places to stay with our smart mapping feature, ensuring convenience and comfort.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <div className="text-green-600 text-xl">🎯</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Curated Tourist Attractions</h3>
              <p className="text-gray-600">
                Discover top-rated attractions and hidden gems, curated for an unforgettable travel experience.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <div className="text-amber-600 text-xl">🗺️</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Intelligent Route Planning</h3>
              <p className="text-gray-600">
                Optimize your travel routes with our intelligent planning tool, saving time and maximizing your journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center space-x-8 mb-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a>
          </div>
          <div className="text-center text-gray-500">
            © 2024 VOYA. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
