
import React, { useState } from 'react';
import Header from '../components/Header';
import MapView from '../components/MapView';

const StaySelected = () => {
  const [showRoute, setShowRoute] = useState(false);
  const [selectedAttractions, setSelectedAttractions] = useState<number[]>([]);

  const attractions = [
    { id: 1, name: 'The City Museum', rating: 4.5, distance: '1.2 mi', time: '2 hours' },
    { id: 2, name: 'Central Park', rating: 4.2, distance: '2.5 mi', time: '3 hours' },
    { id: 3, name: 'The Art Gallery', rating: 4.7, distance: '3.1 mi', time: '1.5 hours' },
    { id: 4, name: 'The Science Center', rating: 4.6, distance: '4.2 mi', time: '2.5 hours' },
    { id: 5, name: 'The Botanical Gardens', rating: 4.3, distance: '5.5 mi', time: '1 hour' }
  ];

  const toggleAttraction = (id: number) => {
    setSelectedAttractions(prev =>
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header showSearch searchValue="Paris, France" />
      
      <div className="flex h-[calc(100vh-64px)]">
        {/* Left Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
          <div className="p-4">
            {/* Selected Stay */}
            <div className="mb-6">
              <div className="text-sm text-blue-600 mb-1">Selected Stay</div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex mb-3">
                  <img
                    src="/lovable-uploads/11e8bfa5-0cf0-4962-93ff-c8b5841917fb.png"
                    alt="Hotel"
                    className="w-16 h-16 object-cover rounded-lg mr-3"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">The Grand Oasis Resort</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="text-yellow-500">★</span>
                      <span className="ml-1">4.5 · 1,234 reviews</span>
                    </div>
                    <div className="text-lg font-semibold text-gray-900">$250/night</div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                    Change Stay
                  </button>
                  <button className="flex-1 px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Route Options */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Route Options</h3>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Show Route</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showRoute}
                    onChange={(e) => setShowRoute(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>

            {/* Attractions */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Attractions</h3>
              <div className="space-y-3">
                {attractions.map((attraction) => (
                  <div key={attraction.id} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg mr-3 flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 text-sm">{attraction.name}</h4>
                        <div className="flex items-center text-xs text-gray-600 mt-1">
                          <span className="text-yellow-500">★</span>
                          <span className="ml-1">{attraction.rating}</span>
                          <span className="mx-2">·</span>
                          <span>{attraction.distance} from stay</span>
                          <span className="mx-2">·</span>
                          <span>{attraction.time}</span>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={selectedAttractions.includes(attraction.id)}
                        onChange={() => toggleAttraction(attraction.id)}
                        className="ml-2 rounded border-gray-300 text-blue-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Route Summary */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Route Summary</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <div>{selectedAttractions.length} attractions · 12.5 mi total · 8 hours suggested duration</div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="flex-1">
          <MapView destination="Manhattan" className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default StaySelected;
