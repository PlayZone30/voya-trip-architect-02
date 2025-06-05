import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Mountain, Compass, Star, MapPin } from 'lucide-react';
import Header from '../components/Header';
import MapView from '../components/MapView';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../components/ui/sheet';
import { Switch } from '../components/ui/switch';
import { Checkbox } from '../components/ui/checkbox';
import { Slider } from '../components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { sampleAccommodations, getAccommodationById } from '../data/accommodations';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const destination = searchParams.get('destination') || 'Puducherry, India';
  const [showAccommodations, setShowAccommodations] = useState(true);
  const [showAttractions, setShowAttractions] = useState(false);
  const [priceRange, setPriceRange] = useState([50, 500]);
  const [selectedStayId, setSelectedStayId] = useState<number | null>(null);
  
  // Filter states
  const [selectedStarRatings, setSelectedStarRatings] = useState<number[]>([]);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>([]);
  const [selectedReviewScores, setSelectedReviewScores] = useState<string[]>([]);

  const selectedStay = selectedStayId ? getAccommodationById(selectedStayId) : null;

  const handleStayClick = () => {
    setSelectedStayId(1);
  };

  const handleProceed = () => {
    window.location.href = '/stays';
  };

  const handleStarRatingToggle = (stars: number) => {
    setSelectedStarRatings(prev => 
      prev.includes(stars) 
        ? prev.filter(s => s !== stars)
        : [...prev, stars]
    );
  };

  const handlePropertyTypeToggle = (type: string) => {
    setSelectedPropertyTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const handleReviewScoreToggle = (score: string) => {
    setSelectedReviewScores(prev => 
      prev.includes(score) 
        ? prev.filter(s => s !== score)
        : [...prev, score]
    );
  };

  const handleApplyFilters = () => {
    console.log('Applying filters:', {
      priceRange,
      selectedStarRatings,
      selectedPropertyTypes,
      selectedReviewScores
    });
  };

  return (
    <div className="min-h-screen bg-mountain-silhouette relative">
      {/* Atmospheric background layers */}
      <div className="absolute inset-0 bg-misty-depth"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-deep-forest/20 via-misty-blue/10 to-transparent animate-mist-float"></div>
      
      <Header showSearch searchValue={destination} />
      
      <div className="flex h-[calc(100vh-64px)] relative">
        {/* Enhanced Left Sidebar */}
        <div className="w-80 relative">
          {/* Mountain mist background */}
          <div className="absolute inset-0 bg-gradient-to-b from-deep-forest/30 via-misty-blue/20 to-cloud-white/10"></div>
          <div className="absolute inset-0 bg-[url('/lovable-uploads/c3e2ab30-37fd-4ee2-8fa5-af14f2377bf5.png')] bg-cover bg-center opacity-10"></div>
          
          <div className="relative backdrop-blur-md bg-white/15 border-r border-white/20 overflow-y-auto h-full">
            <div className="p-4 space-y-6">
              {/* Destination Info - Hero Style */}
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-deep-forest/80 via-misty-blue/60 to-transparent group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="relative p-6 text-white group-hover:opacity-0 transition-opacity duration-300">
                  <div className="flex items-center mb-3">
                    <Mountain className="w-6 h-6 text-accent-gold mr-2" />
                    <span className="text-sm uppercase tracking-wider text-accent-gold">Destination</span>
                  </div>
                  <h2 className="text-2xl font-bold tracking-wide mb-3">{destination.toUpperCase()}</h2>
                  <p className="text-sm text-cloud-white/90 leading-relaxed">
                    A mystical blend of French colonial charm and spiritual serenity, where ancient temples meet pristine beaches in perfect harmony.
                  </p>
                </div>
              </div>

              {/* Enhanced Tabs */}
              <Tabs defaultValue="selected" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl">
                  <TabsTrigger 
                    value="selected" 
                    className="data-[state=active]:bg-accent-gold/20 data-[state=active]:text-deep-forest font-medium tracking-wide"
                  >
                    Selected Haven
                  </TabsTrigger>
                  <TabsTrigger 
                    value="all"
                    className="data-[state=active]:bg-accent-gold/20 data-[state=active]:text-deep-forest font-medium tracking-wide"
                  >
                    All Havens
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="selected" className="mt-4">
                  {selectedStay ? (
                    <Card className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl overflow-hidden shadow-xl">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-deep-forest font-bold tracking-wide">{selectedStay.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="relative overflow-hidden rounded-xl">
                          <img 
                            src={selectedStay.image} 
                            alt={selectedStay.name}
                            className="w-full h-40 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-mountain-shadow/50 to-transparent"></div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            {[...Array(5)].map((_, i) => (
                              <Mountain 
                                key={i} 
                                className={`w-4 h-4 ${i < Math.floor(selectedStay.rating) ? 'text-accent-gold fill-current' : 'text-stone-gray'}`} 
                              />
                            ))}
                            <span className="font-medium text-deep-forest">{selectedStay.rating}</span>
                            <span className="text-sm text-stone-gray">({selectedStay.reviews} journeys)</span>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-accent-gold">{selectedStay.currency}{selectedStay.price}</div>
                            <div className="text-sm text-stone-gray">per night</div>
                          </div>
                        </div>

                        <div className="flex items-center text-sm text-stone-gray mb-3">
                          <MapPin className="w-4 h-4 mr-1 text-misty-blue" />
                          {selectedStay.location}
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-medium text-deep-forest">Mountain Amenities</h4>
                          <div className="grid grid-cols-2 gap-1 text-sm text-stone-gray">
                            {selectedStay.amenities.map((amenity, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-accent-gold rounded-full"></div>
                                <span>{amenity}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-medium text-deep-forest">Journey Description</h4>
                          <p className="text-sm text-stone-gray leading-relaxed">{selectedStay.description}</p>
                        </div>

                        <Button 
                          onClick={handleProceed}
                          className="w-full bg-gradient-to-r from-sky-blue to-misty-blue hover:from-misty-blue hover:to-deep-forest text-white font-medium tracking-wide rounded-xl py-3 transition-all duration-300"
                        >
                          Begin This Journey
                        </Button>
                      </CardContent>
                    </Card>
                  ) : (
                    <div className="p-8 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl text-center">
                      <Compass className="w-12 h-12 text-accent-gold mx-auto mb-4 animate-compass-spin" />
                      <h3 className="font-bold text-deep-forest mb-2 tracking-wide">Choose Your Haven</h3>
                      <p className="text-sm text-stone-gray leading-relaxed">
                        Navigate the map and discover your perfect mountain sanctuary. Click any golden marker to begin your journey.
                      </p>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="all" className="mt-4">
                  <div className="space-y-4">
                    <h3 className="font-bold text-deep-forest tracking-wide">Available Mountain Havens</h3>
                    {sampleAccommodations.map((stay) => (
                      <Card key={stay.id} className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl cursor-pointer hover:shadow-xl hover:bg-white/30 transition-all duration-300 group relative overflow-hidden">
                        <CardContent className="p-4">
                          {/* Image shown by default */}
                          <div className="relative overflow-hidden rounded-lg group-hover:opacity-0 transition-opacity duration-300">
                            <img 
                              src={stay.image} 
                              alt={stay.name}
                              className="w-full h-32 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-mountain-shadow/50 to-transparent"></div>
                          </div>
                          
                          {/* Text content shown on hover */}
                          <div className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/30 backdrop-blur-md flex flex-col justify-center">
                            <h4 className="font-medium text-deep-forest mb-2 tracking-wide text-lg">{stay.name}</h4>
                            <div className="flex items-center space-x-1 mb-2">
                              <Mountain className="w-4 h-4 text-accent-gold fill-current" />
                              <span className="text-sm font-medium text-deep-forest">{stay.rating}</span>
                              <span className="text-xs text-stone-gray">({stay.reviews})</span>
                            </div>
                            <p className="text-sm text-stone-gray mb-3">{stay.location}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-lg font-bold text-accent-gold">{stay.currency}{stay.price}/night</span>
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => setSelectedStayId(stay.id)}
                                className="border-accent-gold/30 text-deep-forest hover:bg-accent-gold/20 rounded-lg"
                              >
                                Select Haven
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              <div className="text-sm text-stone-gray bg-white/20 backdrop-blur-md rounded-lg p-3 border border-white/30">
                <Compass className="w-4 h-4 inline mr-2 text-accent-gold" />
                Showing {sampleAccommodations.length} mountain havens
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Map Container */}
        <div className="flex-1 relative">
          {/* Atmospheric controls overlay */}
          <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
            {/* Filter Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 hover:border-accent-gold/30 rounded-xl transition-all duration-300"
                >
                  <Filter className="h-4 w-4 text-deep-forest" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-80 bg-white/95 backdrop-blur-mountain border-l border-white/30">
                <SheetHeader>
                  <SheetTitle className="text-deep-forest tracking-wide">Journey Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-6">
                  {/* Price Range */}
                  <div>
                    <label className="text-sm font-medium text-deep-forest mb-3 block tracking-wide">Price range</label>
                    <div className="px-3">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={1000}
                        min={0}
                        step={10}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-stone-gray mt-2">
                        <span>₹{priceRange[0]}</span>
                        <span>₹{priceRange[1]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div>
                    <label className="text-sm font-medium text-deep-forest mb-3 block tracking-wide">Mountain Rating</label>
                    <div className="flex flex-wrap gap-2">
                      {[5, 4, 3, 2, 1].map((stars) => (
                        <button
                          key={stars}
                          onClick={() => handleStarRatingToggle(stars)}
                          className={`px-3 py-2 text-xs border rounded-full transition-all duration-300 ${
                            selectedStarRatings.includes(stars)
                              ? 'bg-accent-gold text-white border-accent-gold'
                              : 'border-stone-gray/30 hover:bg-fog-gray text-deep-forest'
                          }`}
                        >
                          {stars} peaks
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Property Type */}
                  <div>
                    <label className="text-sm font-medium text-deep-forest mb-3 block tracking-wide">Haven Type</label>
                    <div className="space-y-3">
                      {['Mountain Lodges', 'Mystic Resorts', 'Sacred Villas', 'Temple Suites', 'Coastal Retreats'].map((type) => (
                        <label key={type} className="flex items-center cursor-pointer group">
                          <Checkbox 
                            checked={selectedPropertyTypes.includes(type)}
                            onCheckedChange={() => handlePropertyTypeToggle(type)}
                            className="mr-3 border-accent-gold/50 data-[state=checked]:bg-accent-gold" 
                          />
                          <span className="text-sm text-deep-forest group-hover:text-accent-gold transition-colors">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Review Score */}
                  <div>
                    <label className="text-sm font-medium text-deep-forest mb-3 block tracking-wide">Journey Reviews</label>
                    <div className="flex flex-wrap gap-2">
                      {['9+ Mystical', '8+ Wonderful', '7+ Great', '6+ Good'].map((score) => (
                        <button
                          key={score}
                          onClick={() => handleReviewScoreToggle(score)}
                          className={`px-3 py-2 text-xs border rounded-full transition-all duration-300 ${
                            selectedReviewScores.includes(score)
                              ? 'bg-sky-blue text-white border-sky-blue'
                              : 'border-stone-gray/30 hover:bg-fog-gray text-deep-forest'
                          }`}
                        >
                          {score}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="pt-4 border-t border-stone-gray/20">
                    <Button 
                      onClick={handleApplyFilters}
                      className="w-full bg-gradient-to-r from-sky-blue to-misty-blue hover:from-misty-blue hover:to-deep-forest text-white tracking-wide"
                    >
                      Apply Mountain Filters
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Enhanced Toggle Controls */}
            <div className="flex items-center space-x-3">
              {/* Hotels Toggle */}
              <div className="bg-white/20 backdrop-blur-md rounded-xl shadow-lg px-4 py-3 flex items-center space-x-3 border border-white/30">
                <Mountain className="w-4 h-4 text-accent-gold" />
                <span className="text-sm font-medium text-deep-forest tracking-wide">Havens</span>
                <Switch
                  checked={showAccommodations}
                  onCheckedChange={setShowAccommodations}
                  className="data-[state=checked]:bg-sky-blue"
                />
              </div>

              {/* Attractions Toggle */}
              <div className="bg-white/20 backdrop-blur-md rounded-xl shadow-lg px-4 py-3 flex items-center space-x-3 border border-white/30">
                <Compass className="w-4 h-4 text-accent-gold" />
                <span className="text-sm font-medium text-deep-forest tracking-wide">Mysteries</span>
                <Switch
                  checked={showAttractions}
                  onCheckedChange={setShowAttractions}
                  className="data-[state=checked]:bg-accent-gold"
                />
              </div>
            </div>
          </div>

          {/* Enhanced Map with mountain backdrop */}
          <div className="h-full relative">
            <div className="absolute inset-0 bg-gradient-to-br from-deep-forest/10 via-misty-blue/5 to-transparent"></div>
            <MapView destination="Puducherry" className="h-full" onClick={handleStayClick} hideDestinationCard={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
