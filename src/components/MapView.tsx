
import React from 'react';

interface MapViewProps {
  destination?: string;
  className?: string;
}

const MapView = ({ destination = "Paris", className = "" }: MapViewProps) => {
  return (
    <div className={`bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg relative overflow-hidden ${className}`}>
      {/* Map grid pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Circular road pattern */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Concentric circles representing roads */}
          <div className="w-64 h-64 border-2 border-white/40 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-48 h-48 border-2 border-white/40 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-32 h-32 border-2 border-white/40 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          
          {/* Central marker */}
          <div className="w-4 h-4 bg-blue-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
      
      {/* Random markers */}
      <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-green-500 rounded-full"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-amber-500 rounded-full"></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full"></div>
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-red-500 rounded-full"></div>
      
      {/* Map controls */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2">
        <button className="w-8 h-8 bg-white shadow-md rounded flex items-center justify-center text-lg font-bold text-gray-600 hover:bg-gray-50">+</button>
        <button className="w-8 h-8 bg-white shadow-md rounded flex items-center justify-center text-lg font-bold text-gray-600 hover:bg-gray-50">−</button>
      </div>
      
      {/* Direction control */}
      <div className="absolute bottom-4 right-4">
        <button className="w-8 h-8 bg-white shadow-md rounded flex items-center justify-center text-gray-600 hover:bg-gray-50">
          ↗
        </button>
      </div>
      
      {destination && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-lg">
          <div className="text-center">
            <div className="text-xs text-gray-500 uppercase tracking-wide">Voyager</div>
            <div className="font-semibold text-gray-900">{destination.toUpperCase()}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapView;
