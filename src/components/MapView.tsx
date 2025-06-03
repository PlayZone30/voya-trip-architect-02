
import React from 'react';

interface MapViewProps {
  destination?: string;
  className?: string;
  onClick?: () => void;
}

const MapView = ({ destination = "Paris", className = "", onClick }: MapViewProps) => {
  // Sample accommodation data with price markers
  const accommodations = [
    { id: 1, price: "₹7,988", position: { top: "30%", right: "25%" } },
    { id: 2, price: "₹4,277", position: { top: "45%", right: "15%" } },
    { id: 3, price: "₹6,076", position: { top: "50%", right: "18%" } },
    { id: 4, price: "₹4,512", position: { top: "58%", left: "45%" } },
    { id: 5, price: "₹6,173", position: { bottom: "25%", right: "20%" } },
    { id: 6, price: "₹5,963", position: { bottom: "20%", left: "48%" } },
    { id: 7, price: "₹7,957", position: { bottom: "15%", left: "52%" } }
  ];

  const handleMarkerClick = (accommodationId: number) => {
    console.log(`Clicked accommodation ${accommodationId}`);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Map background image */}
      <img 
        src="/lovable-uploads/e31825ea-58fa-4ab2-83eb-db19b8d7ba05.png" 
        alt="Map"
        className="w-full h-full object-cover"
      />
      
      {/* Price markers overlay */}
      {accommodations.map((accommodation) => (
        <button
          key={accommodation.id}
          onClick={() => handleMarkerClick(accommodation.id)}
          className="absolute bg-white rounded-full px-3 py-1 shadow-lg border border-gray-200 hover:shadow-xl transform hover:scale-105 transition-all duration-200 cursor-pointer"
          style={accommodation.position}
        >
          <span className="text-sm font-semibold text-gray-900">
            {accommodation.price}
          </span>
        </button>
      ))}
      
      {/* Map controls - moved to bottom right */}
      <div className="absolute bottom-16 right-4 flex flex-col space-y-2">
        <button className="w-8 h-8 bg-white shadow-md rounded flex items-center justify-center text-lg font-bold text-gray-600 hover:bg-gray-50">+</button>
        <button className="w-8 h-8 bg-white shadow-md rounded flex items-center justify-center text-lg font-bold text-gray-600 hover:bg-gray-50">−</button>
      </div>
      
      {/* Direction control */}
      <div className="absolute bottom-4 right-4">
        <button className="w-8 h-8 bg-white shadow-md rounded flex items-center justify-center text-gray-600 hover:bg-gray-50">
          ↗
        </button>
      </div>
      
      {/* Destination label */}
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
