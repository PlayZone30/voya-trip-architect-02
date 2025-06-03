
import React from 'react';
import { Mountain, Plus, Minus, Navigation } from 'lucide-react';

interface MapViewProps {
  destination?: string;
  className?: string;
  onClick?: () => void;
}

const MapView = ({ destination = "Paris", className = "", onClick }: MapViewProps) => {
  // Enhanced accommodation data with atmospheric pricing
  const accommodations = [
    { id: 1, price: "₹7,988", position: { top: "30%", right: "25%" }, tier: "premium" },
    { id: 2, price: "₹4,277", position: { top: "45%", right: "15%" }, tier: "standard" },
    { id: 3, price: "₹6,076", position: { top: "50%", right: "18%" }, tier: "deluxe" },
    { id: 4, price: "₹4,512", position: { top: "58%", left: "45%" }, tier: "standard" },
    { id: 5, price: "₹6,173", position: { bottom: "25%", right: "20%" }, tier: "deluxe" },
    { id: 6, price: "₹5,963", position: { bottom: "20%", left: "48%" }, tier: "deluxe" },
    { id: 7, price: "₹7,957", position: { bottom: "15%", left: "52%" }, tier: "premium" }
  ];

  const getTierStyle = (tier: string) => {
    switch (tier) {
      case 'premium':
        return 'bg-gradient-to-r from-accent-gold to-warm-copper text-white border-accent-gold/50 shadow-lg shadow-accent-gold/20';
      case 'deluxe':
        return 'bg-gradient-to-r from-sky-blue to-misty-blue text-white border-sky-blue/50 shadow-lg shadow-sky-blue/20';
      default:
        return 'bg-white border-stone-gray/30 text-deep-forest shadow-lg';
    }
  };

  const handleMarkerClick = (accommodationId: number) => {
    console.log(`Selected mountain haven ${accommodationId}`);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Enhanced map background with atmospheric overlay */}
      <div className="relative w-full h-full">
        <img 
          src="/lovable-uploads/e31825ea-58fa-4ab2-83eb-db19b8d7ba05.png" 
          alt="Journey Map"
          className="w-full h-full object-cover"
        />
        
        {/* Atmospheric overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-morning-mist/20 via-transparent to-fog-gray/10"></div>
      </div>
      
      {/* Enhanced price markers with mountain peak shapes */}
      {accommodations.map((accommodation) => (
        <button
          key={accommodation.id}
          onClick={() => handleMarkerClick(accommodation.id)}
          className={`absolute px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-110 hover:shadow-xl transform hover:-translate-y-1 backdrop-blur-sm border ${getTierStyle(accommodation.tier)}`}
          style={accommodation.position}
        >
          <span className="relative z-10 tracking-wide">
            {accommodation.price}
          </span>
          {/* Mountain peak indicator */}
          <Mountain className="w-3 h-3 inline ml-1 opacity-60" />
        </button>
      ))}
      
      {/* Enhanced map controls with glass morphism */}
      <div className="absolute bottom-16 right-4 flex flex-col space-y-2">
        <button className="w-10 h-10 bg-white/20 backdrop-blur-md shadow-lg rounded-xl flex items-center justify-center hover:bg-white/30 hover:shadow-xl transition-all duration-300 border border-white/30 group">
          <Plus className="w-5 h-5 text-deep-forest group-hover:text-accent-gold transition-colors" />
        </button>
        <button className="w-10 h-10 bg-white/20 backdrop-blur-md shadow-lg rounded-xl flex items-center justify-center hover:bg-white/30 hover:shadow-xl transition-all duration-300 border border-white/30 group">
          <Minus className="w-5 h-5 text-deep-forest group-hover:text-accent-gold transition-colors" />
        </button>
      </div>
      
      {/* Enhanced direction control */}
      <div className="absolute bottom-4 right-4">
        <button className="w-10 h-10 bg-white/20 backdrop-blur-md shadow-lg rounded-xl flex items-center justify-center hover:bg-white/30 hover:shadow-xl transition-all duration-300 border border-white/30 group">
          <Navigation className="w-5 h-5 text-deep-forest group-hover:text-accent-gold transition-colors" />
        </button>
      </div>
      
      {/* Enhanced destination label with mountain aesthetic */}
      {destination && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="bg-white/20 backdrop-blur-mountain px-6 py-4 rounded-2xl shadow-xl border border-white/30">
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Mountain className="w-4 h-4 text-accent-gold mr-2" />
                <div className="text-xs text-stone-gray uppercase tracking-wider font-medium">Mystical Journey</div>
              </div>
              <div className="font-bold text-lg text-deep-forest tracking-wide">{destination.toUpperCase()}</div>
              <div className="text-xs text-stone-gray uppercase tracking-wider font-medium mt-1">Sacred Lands</div>
            </div>
          </div>
        </div>
      )}
      
      {/* Floating mountain mist effect */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default MapView;
