
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, ToggleLeft, ToggleRight } from 'lucide-react';
import Header from '../components/Header';
import MapView from '../components/MapView';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../components/ui/sheet';
import { Switch } from '../components/ui/switch';
import { Checkbox } from '../components/ui/checkbox';
import { sampleAccommodations, getAccommodationById } from '../data/accommodations';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const destination = searchParams.get('destination') || 'Puducherry, India';
  const [showAccommodations, setShowAccommodations] = useState(true);
  const [showAttractions, setShowAttractions] = useState(false);
  const [priceRange, setPriceRange] = useState([50, 500]);
  const [selectedStayId, setSelectedStayId] = useState<number | null>(null);

  const selectedStay = selectedStayId ? getAccommodationById(selectedStayId) : null;

  const handleStayClick = () => {
    // Select the first accommodation as default when map is clicked
    setSelectedStayId(1);
  };

  const handleProceed = () => {
    // Navigate to stay selected page
    window.location.href = '/stays';
  };

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
                Puducherry, a former French colony, is known for its French architecture, serene beaches, and spiritual atmosphere.
              </p>
            </div>

            {/* Selected Stay Details or Default Message */}
            {selectedStay ? (
              <Card className="mb-6">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{selectedStay.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img 
                    src={selectedStay.image} 
                    alt={selectedStay.name}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">★</span>
                      <span className="font-medium">{selectedStay.rating}</span>
                      <span className="text-sm text-gray-500">({selectedStay.reviews} reviews)</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{selectedStay.currency}{selectedStay.price}</div>
                      <div className="text-sm text-gray-500">per night</div>
                    </div>
                  </div>

                  <div className="text-sm text-gray-600 mb-3">
                    📍 {selectedStay.location}
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Amenities</h4>
                    <div className="grid grid-cols-2 gap-1 text-sm text-gray-600">
                      {selectedStay.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center space-x-1">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Description</h4>
                    <p className="text-sm text-gray-600">{selectedStay.description}</p>
                  </div>

                  <Button 
                    onClick={handleProceed}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Proceed with this Stay
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="mb-6 p-6 bg-gray-50 rounded-lg text-center">
                <h3 className="font-medium text-gray-900 mb-2">Select a Stay</h3>
                <p className="text-sm text-gray-600">Click on any accommodation price marker on the map to view details and proceed.</p>
              </div>
            )}

            <div className="text-sm text-gray-500">
              Showing {sampleAccommodations.length} results
            </div>
          </div>
        </div>

        {/* Map Container with Controls */}
        <div className="flex-1 relative">
          {/* Map Controls Overlay */}
          <div className="absolute top-4 right-4 z-10 flex items-center space-x-2">
            {/* Accommodations Toggle */}
            <div className="bg-white rounded-lg shadow-md px-3 py-2 flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Hotels</span>
              <Switch
                checked={showAccommodations}
                onCheckedChange={setShowAccommodations}
              />
            </div>

            {/* Attractions Toggle */}
            <div className="bg-white rounded-lg shadow-md px-3 py-2 flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Attractions</span>
              <Switch
                checked={showAttractions}
                onCheckedChange={setShowAttractions}
              />
            </div>

            {/* Filter Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="bg-white shadow-md">
                  <Filter className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-6">
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
                        <span>₹{priceRange[0]}</span>
                        <span>₹{priceRange[1]}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Star rating</label>
                    <div className="flex flex-wrap gap-2">
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
                      {['Hotels', 'Resorts', 'Villas', 'Suites', 'Inns'].map((type) => (
                        <label key={type} className="flex items-center">
                          <Checkbox className="mr-2" />
                          <span className="text-sm text-gray-700">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Review score</label>
                    <div className="flex flex-wrap gap-2">
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
              </SheetContent>
            </Sheet>
          </div>

          {/* Map with click handler */}
          <MapView destination="Puducherry" className="h-full" onClick={handleStayClick} />
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
