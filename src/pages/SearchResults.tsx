
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import MapView from '../components/MapView';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const destination = searchParams.get('destination') || 'Paris, France';
  const [showAccommodations, setShowAccommodations] = useState(true);
  const [showAttractions, setShowAttractions] = useState(false);
  const [priceRange, setPriceRange] = useState([50, 500]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header showSearch searchValue={destination} />
      
      <div className="flex h-[calc(100vh-64px)]">
        {/* Left Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
          <div className="p-4">
            {/* Destination Info */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{destination}</h2>
              <p className="text-sm text-gray-600">
                Paris, the capital of France, is a major European city and a global center for art, fashion, gastronomy and culture.
              </p>
            </div>

            {/* Map Options */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Map Options</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Accommodations</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showAccommodations}
                      onChange={(e) => setShowAccommodations(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Attractions</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showAttractions}
                      onChange={(e) => setShowAttractions(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Filters</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Price range</label>
                  <div className="px-3">
                    <div className="relative">
                      <input
                        type="range"
                        min="0"
                        max="1000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Star rating</label>
                  <div className="flex space-x-2">
                    {[5, 4, 3, 2, 1].map((stars) => (
                      <button
                        key={stars}
                        className="px-3 py-1 text-xs border border-gray-300 rounded-full hover:bg-gray-50"
                      >
                        {stars} stars
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Property type</label>
                  <div className="space-y-2">
                    {['Hotels', 'Apartments', 'Hostels', 'Resorts', 'Villas'].map((type) => (
                      <label key={type} className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 mr-2" />
                        <span className="text-sm text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Review score</label>
                  <div className="flex space-x-2">
                    {['9+ Exceptional', '8+ Very Good', '7+ Good', '6+ Pleasant'].map((score) => (
                      <button
                        key={score}
                        className="px-3 py-1 text-xs border border-gray-300 rounded-full hover:bg-gray-50"
                      >
                        {score}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="text-sm text-gray-500">
              Showing 1,234 results
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="flex-1">
          <MapView destination="Paris" className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
