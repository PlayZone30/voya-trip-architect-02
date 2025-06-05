
import React from 'react';
import Header from '../components/Header';
import { sampleAccommodations } from '../data/accommodations';
import { Mountain, Calendar, MapPin, Users, Clock, Download, Share2, Edit3, Bookmark, Camera, Navigation } from 'lucide-react';
import { Button } from '../components/ui/button';

const TripSummary = () => {
  const selectedStay = sampleAccommodations[0];
  
  const itinerary = [
    { 
      day: 1,
      time: '2h', 
      name: 'Auroville', 
      category: 'Spiritual Sanctuary',
      description: 'Experience the mystical energy of this experimental city'
    },
    { 
      day: 1,
      time: '1h 30m', 
      name: 'French Quarter', 
      category: 'Cultural Heritage',
      description: 'Wander through colonial architecture and vintage charm'
    },
    { 
      day: 2,
      time: '3h', 
      name: 'Paradise Beach', 
      category: 'Natural Wonder',
      description: 'Discover pristine shores and crystal-clear waters'
    },
    { 
      day: 2,
      time: '2h', 
      name: 'Manakula Vinayagar Temple', 
      category: 'Sacred Site',
      description: 'Connect with ancient traditions and spiritual energy'
    }
  ];

  const journeyStats = {
    totalAttractions: 12,
    estimatedBudget: '₹15,000',
    totalDays: 5,
    accommodation: selectedStay.name
  };

  return (
    <div className="min-h-screen bg-mountain-silhouette relative">
      {/* Atmospheric background layers */}
      <div className="absolute inset-0 bg-misty-depth"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-deep-forest/20 via-misty-blue/10 to-transparent animate-mist-float"></div>
      
      <Header showSearch searchValue="Puducherry" />
      
      <div className="flex h-[calc(100vh-64px)] relative">
        {/* Enhanced Left Sidebar - Journey Command Center */}
        <div className="w-96 relative">
          {/* Mountain mist background */}
          <div className="absolute inset-0 bg-gradient-to-b from-deep-forest/30 via-misty-blue/20 to-cloud-white/10"></div>
          <div className="absolute inset-0 bg-[url('/lovable-uploads/c3e2ab30-37fd-4ee2-8fa5-af14f2377bf5.png')] bg-cover bg-center opacity-10"></div>
          
          <div className="relative backdrop-blur-md bg-white/15 border-r border-white/20 overflow-y-auto h-full">
            <div className="p-6 space-y-6">
              {/* Trip Overview Card - Hero Style with Reverse Hover */}
              <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-deep-forest/80 via-misty-blue/60 to-transparent"></div>
                
                {/* Default state: Show image only */}
                <div className="group-hover:opacity-0 transition-opacity duration-300 relative">
                  <img
                    src="/lovable-uploads/11e8bfa5-0cf0-4962-93ff-c8b5841917fb.png"
                    alt="Journey Destination"
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mountain-shadow/90 via-transparent to-transparent"></div>
                </div>
                
                {/* Hover state: Show text content */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="/lovable-uploads/11e8bfa5-0cf0-4962-93ff-c8b5841917fb.png"
                    alt="Journey Destination"
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mountain-shadow/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center mb-3">
                      <Mountain className="w-6 h-6 text-accent-gold mr-2" />
                      <span className="text-sm uppercase tracking-wider text-accent-gold font-medium">Epic Journey</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-wide mb-3">PUDUCHERRY ODYSSEY</h2>
                    <div className="flex items-center space-x-4 text-sm mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-accent-gold mr-2" />
                        <span className="font-medium">Oct 20 - Oct 25, 2024</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 text-accent-gold mr-2" />
                        <span className="font-medium">2 Travelers</span>
                      </div>
                    </div>
                    <div className="text-sm text-cloud-white/90 leading-relaxed">
                      A mystical journey through French colonial heritage, spiritual sanctuaries, and pristine coastal beauty.
                    </div>
                  </div>
                </div>
              </div>

              {/* Journey Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30 text-center">
                  <div className="text-2xl font-bold text-accent-gold">{journeyStats.totalAttractions}</div>
                  <div className="text-sm text-stone-gray font-medium">Sacred Sites</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30 text-center">
                  <div className="text-2xl font-bold text-misty-blue">{journeyStats.estimatedBudget}</div>
                  <div className="text-sm text-stone-gray font-medium">Journey Cost</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30 text-center">
                  <div className="text-2xl font-bold text-deep-forest">{journeyStats.totalDays}</div>
                  <div className="text-sm text-stone-gray font-medium">Epic Days</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30 text-center">
                  <div className="text-2xl font-bold text-warm-copper">★★★★★</div>
                  <div className="text-sm text-stone-gray font-medium">Haven Rating</div>
                </div>
              </div>

              {/* Stay Information */}
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                <div className="flex items-center mb-4">
                  <Mountain className="w-5 h-5 text-accent-gold mr-3" />
                  <h3 className="text-lg font-bold text-deep-forest tracking-wide">Mountain Haven</h3>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-misty-blue/20 to-deep-forest/20 rounded-xl flex items-center justify-center">
                    <Mountain className="w-8 h-8 text-accent-gold" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-deep-forest text-lg">{selectedStay.name}</h4>
                    <p className="text-sm text-stone-gray">Oct 20 - Oct 25 • 5 Nights</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Mountain 
                          key={i} 
                          className={`w-3 h-3 ${i < Math.floor(selectedStay.rating) ? 'text-accent-gold fill-current' : 'text-stone-gray'}`} 
                        />
                      ))}
                      <span className="ml-2 text-sm font-medium text-deep-forest">{selectedStay.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Daily Itinerary - Elevated Timeline */}
              <div>
                <h3 className="text-xl font-bold text-deep-forest tracking-wide mb-4">Sacred Journey Timeline</h3>
                <div className="space-y-4 max-h-80 overflow-y-auto custom-scrollbar">
                  {itinerary.map((item, index) => (
                    <div key={index} className="relative">
                      {/* Day separator */}
                      {index === 0 || item.day !== itinerary[index - 1].day ? (
                        <div className="flex items-center mb-4">
                          <div className="bg-gradient-to-r from-accent-gold to-warm-copper text-white px-4 py-2 rounded-full text-sm font-bold tracking-wide">
                            Day {item.day}
                          </div>
                          <div className="flex-1 h-px bg-gradient-to-r from-accent-gold/50 to-transparent ml-4"></div>
                        </div>
                      ) : null}
                      
                      <div className="group bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30 ml-8 hover:bg-white/30 transition-all duration-300 cursor-pointer relative overflow-hidden">
                        {/* Default state: Show image only */}
                        <div className="group-hover:opacity-0 transition-opacity duration-300">
                          <div className="w-full h-32 bg-gradient-to-br from-misty-blue/40 to-deep-forest/40 rounded-xl flex items-center justify-center">
                            <Mountain className="w-12 h-12 text-accent-gold" />
                          </div>
                        </div>
                        
                        {/* Hover state: Show text content */}
                        <div className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/25 backdrop-blur-md rounded-xl">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-misty-blue/20 to-deep-forest/20 rounded-xl flex items-center justify-center flex-shrink-0">
                              <Mountain className="w-6 h-6 text-accent-gold" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <h4 className="font-semibold text-deep-forest text-lg tracking-wide">{item.name}</h4>
                                  <p className="text-sm text-accent-gold font-medium">{item.category}</p>
                                </div>
                                <div className="flex items-center text-sm text-stone-gray">
                                  <Clock className="w-4 h-4 mr-1" />
                                  {item.time}
                                </div>
                              </div>
                              <p className="text-sm text-stone-gray leading-relaxed">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Journey Actions - Premium Controls */}
              <div className="space-y-3">
                <Button 
                  className="w-full bg-gradient-to-r from-accent-gold to-warm-copper hover:from-warm-copper hover:to-accent-gold text-white font-medium tracking-wide rounded-xl py-6"
                >
                  <Download className="w-5 h-5 mr-3" />
                  Download Journey Map
                </Button>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    variant="outline"
                    className="bg-white/20 backdrop-blur-md border-white/30 text-deep-forest hover:bg-white/30 hover:border-accent-gold/30 rounded-xl font-medium tracking-wide"
                  >
                    <Edit3 className="w-4 h-4 mr-2" />
                    Refine Journey
                  </Button>
                  <Button 
                    variant="outline"
                    className="bg-white/20 backdrop-blur-md border-white/30 text-deep-forest hover:bg-white/30 hover:border-misty-blue/30 rounded-xl font-medium tracking-wide"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Adventure
                  </Button>
                </div>
                
                <Button 
                  variant="outline"
                  className="w-full bg-white/20 backdrop-blur-md border-white/30 text-deep-forest hover:bg-white/30 hover:border-deep-forest/30 rounded-xl font-medium tracking-wide"
                >
                  <Bookmark className="w-4 h-4 mr-2" />
                  Save to My Journeys
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Map Container - Epic Visualization */}
        <div className="flex-1 relative">
          <div className="h-full relative overflow-hidden">
            {/* Map background image with atmospheric overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-deep-forest/10 via-misty-blue/5 to-transparent"></div>
            <img 
              src="/lovable-uploads/e31825ea-58fa-4ab2-83eb-db19b8d7ba05.png" 
              alt="Journey Map"
              className="w-full h-full object-cover"
            />
            
            {/* Atmospheric overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-morning-mist/20 via-transparent to-fog-gray/10"></div>
            
            {/* Enhanced route lines overlay */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8"/>
                  <stop offset="50%" stopColor="#B8860B" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#A67C52" stopOpacity="0.4"/>
                </linearGradient>
              </defs>
              <path
                d="M 200 150 Q 300 200 400 180 Q 500 160 600 200 Q 700 240 800 220"
                stroke="url(#routeGradient)"
                strokeWidth="4"
                fill="none"
                strokeDasharray="15,10"
                className="opacity-80"
              />
            </svg>
            
            {/* Journey markers */}
            <div className="absolute top-32 left-48">
              <div className="bg-accent-gold text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg animate-golden-pulse">
                Day 1 Start
              </div>
            </div>
            
            <div className="absolute top-44 right-80">
              <div className="bg-misty-blue text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg">
                Sacred Sites
              </div>
            </div>
            
            <div className="absolute bottom-52 left-1/2 transform -translate-x-1/2">
              <div className="bg-deep-forest text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg">
                Journey's End
              </div>
            </div>
            
            {/* Enhanced map controls */}
            <div className="absolute top-6 right-6 flex flex-col space-y-3">
              <button className="w-12 h-12 bg-white/20 backdrop-blur-md shadow-lg rounded-xl flex items-center justify-center text-xl font-bold text-deep-forest hover:bg-white/30 hover:text-accent-gold transition-all duration-300 border border-white/30">
                +
              </button>
              <button className="w-12 h-12 bg-white/20 backdrop-blur-md shadow-lg rounded-xl flex items-center justify-center text-xl font-bold text-deep-forest hover:bg-white/30 hover:text-accent-gold transition-all duration-300 border border-white/30">
                −
              </button>
              <button className="w-12 h-12 bg-white/20 backdrop-blur-md shadow-lg rounded-xl flex items-center justify-center text-deep-forest hover:bg-white/30 hover:text-accent-gold transition-all duration-300 border border-white/30">
                <Camera className="w-5 h-5" />
              </button>
            </div>
            
            <div className="absolute bottom-6 right-6">
              <button className="w-12 h-12 bg-white/20 backdrop-blur-md shadow-lg rounded-xl flex items-center justify-center text-deep-forest hover:bg-white/30 hover:text-accent-gold transition-all duration-300 border border-white/30">
                <Navigation className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripSummary;
