
import React from 'react';
import Header from '../components/Header';
import MapView from '../components/MapView';

const TripSummary = () => {
  const itinerary = [
    { time: '2h', name: 'Louvre Museum' },
    { time: '1h 30m', name: 'Notre Dame Cathedral' },
    { time: '3h', name: 'Eiffel Tower' },
    { time: '2h', name: 'Arc de Triomphe' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header showSearch searchValue="Paris" />
      
      <div className="flex h-[calc(100vh-64px)]">
        {/* Left Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
          <div className="p-4">
            {/* Trip Header */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <img
                  src="/lovable-uploads/11e8bfa5-0cf0-4962-93ff-c8b5841917fb.png"
                  alt="Paris"
                  className="w-12 h-12 object-cover rounded-lg mr-3"
                />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Trip to Paris</h2>
                  <p className="text-sm text-gray-600">Oct 20 - Oct 25</p>
                </div>
              </div>
            </div>

            {/* Stay Info */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Stay</h3>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-lg mr-3"></div>
                <div>
                  <h4 className="font-medium text-gray-900">Hotel Le Marais</h4>
                  <p className="text-sm text-gray-600">Oct 20 - Oct 25</p>
                </div>
              </div>
            </div>

            {/* Trip Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="text-sm text-gray-600">Total Attractions</div>
                <div className="text-lg font-semibold text-gray-900">12</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Estimated Budget</div>
                <div className="text-lg font-semibold text-gray-900">$1,500</div>
              </div>
            </div>

            {/* Day-by-day Itinerary */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Day-by-day Itinerary</h3>
              <div className="space-y-4">
                {itinerary.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium mr-3">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{item.name}</div>
                      <div className="text-sm text-gray-600">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                Modify
              </button>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Export to PDF
              </button>
              <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                Share Trip
              </button>
            </div>
          </div>
        </div>

        {/* Map Container with stylized Paris map */}
        <div className="flex-1 relative">
          <div className="h-full bg-gradient-to-br from-amber-50 to-green-100 relative overflow-hidden">
            {/* Stylized Paris map background */}
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%" className="absolute inset-0">
                <defs>
                  <pattern id="paris-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#paris-grid)" />
              </svg>
            </div>
            
            {/* Seine River representation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-96 h-96">
                <div className="absolute top-1/3 left-0 right-0 h-16 bg-blue-200/40 rounded-full transform -rotate-12"></div>
                <div className="absolute bottom-1/3 left-1/4 right-0 h-12 bg-blue-200/40 rounded-full transform rotate-6"></div>
              </div>
            </div>
            
            {/* Landmark markers */}
            <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
            <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-blue-600 rounded-full shadow-lg"></div>
            <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
            <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-purple-500 rounded-full shadow-lg"></div>
            
            {/* Route lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <path
                d="M 200 150 Q 300 200 400 180 Q 500 160 600 200"
                stroke="#3B82F6"
                strokeWidth="3"
                fill="none"
                strokeDasharray="10,5"
                className="opacity-60"
              />
            </svg>
            
            {/* Map title */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-lg shadow-lg border-2 border-gray-200">
              <div className="text-center">
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Vintage</div>
                <div className="text-xl font-bold text-gray-900 tracking-wider">PARIS</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Directory</div>
              </div>
            </div>
            
            {/* Map controls */}
            <div className="absolute top-4 right-4 flex flex-col space-y-2">
              <button className="w-10 h-10 bg-white shadow-md rounded flex items-center justify-center text-lg font-bold text-gray-600 hover:bg-gray-50">+</button>
              <button className="w-10 h-10 bg-white shadow-md rounded flex items-center justify-center text-lg font-bold text-gray-600 hover:bg-gray-50">−</button>
            </div>
            
            <div className="absolute bottom-4 right-4">
              <button className="w-10 h-10 bg-white shadow-md rounded flex items-center justify-center text-gray-600 hover:bg-gray-50">
                ↗
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripSummary;
