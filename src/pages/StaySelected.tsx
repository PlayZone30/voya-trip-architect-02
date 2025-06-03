
import React, { useState } from 'react';
import Header from '../components/Header';
import MapView from '../components/MapView';
import { sampleAccommodations } from '../data/accommodations';
import { Mountain, Clock, MapPin, Calendar, Compass, Star, Route, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Switch } from '../components/ui/switch';

const StaySelected = () => {
  const [showRoute, setShowRoute] = useState(false);
  const [selectedAttractions, setSelectedAttractions] = useState<number[]>([]);

  // Use the first accommodation as selected stay
  const selectedStay = sampleAccommodations[0];

  const attractions = [
    { id: 1, name: 'Auroville', rating: 4.5, distance: '1.2 mi', time: '2 hours', category: 'Spiritual Sanctuary' },
    { id: 2, name: 'French Quarter', rating: 4.2, distance: '2.5 mi', time: '3 hours', category: 'Cultural Heritage' },
    { id: 3, name: 'Paradise Beach', rating: 4.7, distance: '3.1 mi', time: '1.5 hours', category: 'Natural Wonder' },
    { id: 4, name: 'Manakula Vinayagar Temple', rating: 4.6, distance: '4.2 mi', time: '2.5 hours', category: 'Sacred Site' },
    { id: 5, name: 'Pondicherry Museum', rating: 4.3, distance: '5.5 mi', time: '1 hour', category: 'Cultural Discovery' }
  ];

  const toggleAttraction = (id: number) => {
    setSelectedAttractions(prev =>
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-morning-mist via-fog-gray to-cloud-white">
      <Header showSearch searchValue="Puducherry, India" />
      
      <div className="flex h-[calc(100vh-64px)]">
        {/* Enhanced Left Sidebar with Atmospheric Design */}
        <div className="w-80 relative">
          {/* Mountain mist background */}
          <div className="absolute inset-0 bg-gradient-to-b from-fog-gray/50 via-morning-mist to-white/90"></div>
          <div className="absolute inset-0 bg-[url('/lovable-uploads/c3e2ab30-37fd-4ee2-8fa5-af14f2377bf5.png')] bg-cover bg-center opacity-5"></div>
          
          <div className="relative backdrop-blur-sm bg-white/20 border-r border-white/30 overflow-y-auto h-full">
            <div className="p-6 space-y-6">
              {/* Selected Stay - Hero Treatment */}
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-deep-forest/80 via-misty-blue/60 to-transparent"></div>
                <div className="relative">
                  <img
                    src="/lovable-uploads/11e8bfa5-0cf0-4962-93ff-c8b5841917fb.png"
                    alt="Selected Haven"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mountain-shadow/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center mb-2">
                      <Mountain className="w-5 h-5 text-accent-gold mr-2" />
                      <span className="text-sm uppercase tracking-wider text-accent-gold font-medium">Selected Haven</span>
                    </div>
                    <h3 className="text-2xl font-bold tracking-wide mb-2">{selectedStay.name}</h3>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Mountain 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(selectedStay.rating) ? 'text-accent-gold fill-current' : 'text-stone-gray'}`} 
                          />
                        ))}
                        <span className="ml-2 font-medium">{selectedStay.rating}</span>
                        <span className="text-cloud-white/80 ml-1">({selectedStay.reviews} journeys)</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="text-right">
                        <div className="text-3xl font-bold text-accent-gold">{selectedStay.currency}{selectedStay.price}</div>
                        <div className="text-sm text-cloud-white/90">per night</div>
                      </div>
                      <div className="flex items-center text-sm text-cloud-white/90">
                        <MapPin className="w-4 h-4 mr-1 text-accent-gold" />
                        Sacred Shores
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <Button 
                  variant="outline"
                  className="flex-1 bg-white/20 backdrop-blur-md border-white/30 text-deep-forest hover:bg-white/30 hover:border-accent-gold/30 rounded-xl font-medium tracking-wide"
                >
                  Change Haven
                </Button>
                <Button 
                  className="flex-1 bg-gradient-to-r from-accent-gold to-warm-copper hover:from-warm-copper hover:to-accent-gold text-white font-medium tracking-wide rounded-xl"
                >
                  Book Journey
                </Button>
              </div>

              {/* Route Toggle - Premium Control */}
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Route className="w-5 h-5 text-accent-gold" />
                    <span className="text-lg font-medium text-deep-forest tracking-wide">Journey Path</span>
                  </div>
                  <Switch
                    checked={showRoute}
                    onCheckedChange={setShowRoute}
                    className="data-[state=checked]:bg-accent-gold"
                  />
                </div>
                <p className="text-sm text-stone-gray mt-2 leading-relaxed">
                  Visualize your mystical route connecting all sacred destinations
                </p>
              </div>

              {/* Attractions Gallery - Elevated Cards */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-deep-forest tracking-wide">Sacred Mysteries</h3>
                  <div className="text-sm text-stone-gray">
                    {selectedAttractions.length} selected
                  </div>
                </div>
                
                <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                  {attractions.map((attraction) => (
                    <div 
                      key={attraction.id} 
                      className={`bg-white/20 backdrop-blur-md border rounded-xl p-4 transition-all duration-300 cursor-pointer hover:shadow-xl hover:bg-white/30 ${
                        selectedAttractions.includes(attraction.id) 
                          ? 'border-accent-gold/50 bg-accent-gold/10' 
                          : 'border-white/30'
                      }`}
                      onClick={() => toggleAttraction(attraction.id)}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-misty-blue/20 to-deep-forest/20 rounded-xl flex items-center justify-center">
                          <Compass className="w-8 h-8 text-accent-gold" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-semibold text-deep-forest text-lg tracking-wide">{attraction.name}</h4>
                              <p className="text-sm text-accent-gold font-medium">{attraction.category}</p>
                            </div>
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                              selectedAttractions.includes(attraction.id)
                                ? 'bg-accent-gold border-accent-gold'
                                : 'border-stone-gray'
                            }`}>
                              {selectedAttractions.includes(attraction.id) && (
                                <Mountain className="w-3 h-3 text-white fill-current" />
                              )}
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm text-stone-gray">
                            <div className="flex items-center">
                              <Mountain className="w-3 h-3 text-accent-gold fill-current mr-1" />
                              <span className="font-medium">{attraction.rating}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-3 h-3 text-misty-blue mr-1" />
                              <span>{attraction.distance}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-3 h-3 text-deep-forest mr-1" />
                              <span>{attraction.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Route Summary - Cinematic Panel */}
              <div className="bg-gradient-to-br from-deep-forest/10 via-misty-blue/10 to-transparent backdrop-blur-md rounded-2xl p-6 border border-white/30">
                <div className="flex items-center mb-4">
                  <Mountain className="w-6 h-6 text-accent-gold mr-3" />
                  <h3 className="text-xl font-bold text-deep-forest tracking-wide">Journey Summary</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/30 rounded-xl p-4">
                    <div className="text-2xl font-bold text-accent-gold">{selectedAttractions.length}</div>
                    <div className="text-sm text-stone-gray font-medium">Sacred Sites</div>
                  </div>
                  <div className="bg-white/30 rounded-xl p-4">
                    <div className="text-2xl font-bold text-misty-blue">12.5 mi</div>
                    <div className="text-sm text-stone-gray font-medium">Total Distance</div>
                  </div>
                  <div className="bg-white/30 rounded-xl p-4">
                    <div className="text-2xl font-bold text-deep-forest">8 hrs</div>
                    <div className="text-sm text-stone-gray font-medium">Journey Time</div>
                  </div>
                  <div className="bg-white/30 rounded-xl p-4">
                    <div className="text-2xl font-bold text-warm-copper">3 days</div>
                    <div className="text-sm text-stone-gray font-medium">Suggested</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Map Container */}
        <div className="flex-1">
          <MapView destination="Puducherry" className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default StaySelected;
