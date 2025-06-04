import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { MapPin, Calendar, Star, Settings, Camera, Share2, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Profile edit state
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    bio: 'Travel Enthusiast • Explorer',
    location: 'Mumbai, India',
    email: 'john.doe@example.com',
    phone: '+91 98765 43210'
  });

  // Trip details state
  const [selectedTrip, setSelectedTrip] = useState(null);

  const userTrips = [
    {
      id: 1,
      destination: 'Puducherry, India',
      dates: 'Oct 20 - Oct 25, 2024',
      status: 'Completed',
      image: '/lovable-uploads/11e8bfa5-0cf0-4962-93ff-c8b5841917fb.png',
      attractions: 12,
      budget: '₹15,000',
      stays: [
        { name: 'Heritage Villa', nights: 3, price: '₹8,000' },
        { name: 'Beach Resort', nights: 2, price: '₹7,000' }
      ],
      itinerary: [
        { day: 1, activities: ['Arrival', 'French Quarter Walk', 'Promenade Beach'] },
        { day: 2, activities: ['Auroville Visit', 'Matrimandir', 'Local Markets'] },
        { day: 3, activities: ['Paradise Beach', 'Chunnambar Boat House'] },
        { day: 4, activities: ['Heritage Buildings', 'Bharathi Park'] },
        { day: 5, activities: ['Shopping', 'Departure'] }
      ]
    },
    {
      id: 2,
      destination: 'Paris, France',
      dates: 'Dec 15 - Dec 22, 2024',
      status: 'Upcoming',
      image: '/placeholder.svg',
      attractions: 18,
      budget: '€2,400',
      stays: [
        { name: 'Hotel Louvre', nights: 4, price: '€800' },
        { name: 'Montmartre Boutique', nights: 3, price: '€600' }
      ],
      itinerary: [
        { day: 1, activities: ['Arrival', 'Eiffel Tower', 'Seine River Cruise'] },
        { day: 2, activities: ['Louvre Museum', 'Champs-Élysées'] },
        { day: 3, activities: ['Versailles Day Trip'] },
        { day: 4, activities: ['Montmartre', 'Sacré-Cœur'] },
        { day: 5, activities: ['Notre-Dame', 'Latin Quarter'] },
        { day: 6, activities: ['Musée d\'Orsay', 'Shopping'] },
        { day: 7, activities: ['Arc de Triomphe', 'Departure'] }
      ]
    },
    {
      id: 3,
      destination: 'Tokyo, Japan',
      dates: 'Aug 10 - Aug 17, 2024',
      status: 'Completed',
      image: '/placeholder.svg',
      attractions: 25,
      budget: '¥180,000',
      stays: [
        { name: 'Tokyo Station Hotel', nights: 4, price: '¥80,000' },
        { name: 'Shibuya Sky Hotel', nights: 3, price: '¥70,000' }
      ],
      itinerary: [
        { day: 1, activities: ['Arrival', 'Shibuya Crossing', 'Harajuku'] },
        { day: 2, activities: ['Tokyo Skytree', 'Asakusa Temple'] },
        { day: 3, activities: ['Tsukiji Market', 'Imperial Palace'] },
        { day: 4, activities: ['Akihabara', 'Tokyo Station'] },
        { day: 5, activities: ['Ueno Park', 'Tokyo National Museum'] },
        { day: 6, activities: ['Ginza Shopping', 'Tokyo Tower'] },
        { day: 7, activities: ['Meiji Shrine', 'Departure'] }
      ]
    }
  ];

  const userStats = {
    totalTrips: 8,
    countriesVisited: 12,
    totalBudget: '₹2,50,000',
    favoriteDestination: 'Europe'
  };

  const upcomingTrips = userTrips.filter(trip => trip.status === 'Upcoming');
  const completedTrips = userTrips.filter(trip => trip.status === 'Completed');

  const handlePlanNewTrip = () => {
    navigate('/');
  };

  const handleProfileSave = () => {
    setIsEditingProfile(false);
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
  };

  const handleShareTrip = (trip) => {
    navigator.clipboard.writeText(`Check out my amazing trip to ${trip.destination}! ${trip.dates}`);
    toast({
      title: "Trip Shared",
      description: "Trip link copied to clipboard!",
    });
  };

  const TripCard = ({ trip, onViewDetails }) => (
    <div className="flex items-center space-x-4 p-4 border border-white/20 rounded-lg hover:shadow-md transition-shadow bg-white/15 backdrop-blur-sm shadow-lg">
      <img 
        src={trip.image} 
        alt={trip.destination}
        className="w-20 h-20 object-cover rounded-lg border border-white/30"
      />
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white mb-1 drop-shadow-sm">{trip.destination}</h3>
            <p className="text-white/90 mb-2 font-medium drop-shadow-sm">{trip.dates}</p>
            <div className="flex items-center space-x-4 text-sm text-white/85 font-medium">
              <span className="drop-shadow-sm">{trip.attractions} attractions</span>
              <span className="drop-shadow-sm">Budget: {trip.budget}</span>
            </div>
          </div>
          <div className="text-right">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border-2 ${
              trip.status === 'Completed' 
                ? 'bg-green-500/30 text-green-100 border-green-300/50 shadow-md' 
                : 'bg-blue-500/30 text-blue-100 border-blue-300/50 shadow-md'
            }`}>
              {trip.status}
            </span>
            <div className="mt-2 space-x-2">
              <Button variant="outline" size="sm" onClick={() => onViewDetails(trip)} className="bg-white/20 border-white/40 text-white hover:bg-white/30 font-medium shadow-md">
                View Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-mountain-silhouette relative">
      {/* Atmospheric background overlay */}
      <div className="fixed inset-0 bg-misty-depth pointer-events-none" />
      
      {/* Subtle mist floating effect */}
      <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-morning-mist/5 to-transparent pointer-events-none animate-mist-float" />
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-morning-mist/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        <Header />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Profile Header */}
          <div className="bg-white/15 backdrop-blur-mountain rounded-lg shadow-xl border border-white/30 p-6 mb-8">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <Avatar className="w-24 h-24 border-2 border-white/30">
                    <AvatarImage src="/placeholder.svg" alt="Profile" />
                    <AvatarFallback className="text-2xl font-semibold bg-accent-gold/20 text-cloud-white">JD</AvatarFallback>
                  </Avatar>
                  <button className="absolute bottom-0 right-0 bg-accent-gold text-cloud-white rounded-full p-2 hover:bg-golden-glow transition-colors shadow-lg">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-cloud-white mb-2">{profileData.name}</h1>
                  <p className="text-fog-gray mb-4">{profileData.bio}</p>
                  <div className="flex items-center space-x-4 text-sm text-fog-gray">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {profileData.location}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      Joined March 2024
                    </span>
                  </div>
                </div>
              </div>
              
              <Dialog open={isEditingProfile} onOpenChange={setIsEditingProfile}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="flex items-center space-x-2 bg-white/10 border-white/20 text-cloud-white hover:bg-white/20">
                    <Settings className="w-4 h-4" />
                    <span>Edit Profile</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-white/10 backdrop-blur-mountain border-white/20">
                  <DialogHeader>
                    <DialogTitle className="text-cloud-white">Edit Profile</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-fog-gray">Name</Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                        className="bg-white/5 border-white/20 text-cloud-white placeholder:text-fog-gray"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio" className="text-fog-gray">Bio</Label>
                      <Input
                        id="bio"
                        value={profileData.bio}
                        onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                        className="bg-white/5 border-white/20 text-cloud-white placeholder:text-fog-gray"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-fog-gray">Location</Label>
                      <Input
                        id="location"
                        value={profileData.location}
                        onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                        className="bg-white/5 border-white/20 text-cloud-white placeholder:text-fog-gray"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-fog-gray">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        className="bg-white/5 border-white/20 text-cloud-white placeholder:text-fog-gray"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-fog-gray">Phone</Label>
                      <Input
                        id="phone"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                        className="bg-white/5 border-white/20 text-cloud-white placeholder:text-fog-gray"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setIsEditingProfile(false)} className="bg-white/10 border-white/20 text-cloud-white hover:bg-white/20">
                      Cancel
                    </Button>
                    <Button onClick={handleProfileSave} className="bg-accent-gold hover:bg-golden-glow text-cloud-white">
                      Save Changes
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-white/15 backdrop-blur-mountain border-white/30">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent-gold mb-2">{userStats.totalTrips}</div>
                <div className="text-sm text-fog-gray">Total Trips</div>
              </CardContent>
            </Card>
            <Card className="bg-white/15 backdrop-blur-mountain border-white/30">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-sky-blue mb-2">{userStats.countriesVisited}</div>
                <div className="text-sm text-fog-gray">Countries Visited</div>
              </CardContent>
            </Card>
            <Card className="bg-white/15 backdrop-blur-mountain border-white/30">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-golden-glow mb-2">{userStats.totalBudget}</div>
                <div className="text-sm text-fog-gray">Total Spent</div>
              </CardContent>
            </Card>
            <Card className="bg-white/15 backdrop-blur-mountain border-white/30">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-warm-copper mb-2">{userStats.favoriteDestination}</div>
                <div className="text-sm text-fog-gray">Favorite Region</div>
              </CardContent>
            </Card>
          </div>

          {/* Trip History with Tabs */}
          <Card className="bg-white/15 backdrop-blur-mountain border-white/30 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-white drop-shadow-sm">
                <span>My Trips</span>
                <Button onClick={handlePlanNewTrip} className="bg-accent-gold hover:bg-golden-glow text-white font-semibold shadow-lg">
                  Plan New Trip
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-white/10 border border-white/30 shadow-md">
                  <TabsTrigger value="all" className="text-white/80 font-medium data-[state=active]:text-white data-[state=active]:bg-white/25 data-[state=active]:shadow-sm">All Trips</TabsTrigger>
                  <TabsTrigger value="upcoming" className="text-white/80 font-medium data-[state=active]:text-white data-[state=active]:bg-white/25 data-[state=active]:shadow-sm">Upcoming ({upcomingTrips.length})</TabsTrigger>
                  <TabsTrigger value="completed" className="text-white/80 font-medium data-[state=active]:text-white data-[state=active]:bg-white/25 data-[state=active]:shadow-sm">Completed ({completedTrips.length})</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="space-y-6 mt-6">
                  {userTrips.map((trip) => (
                    <TripCard key={trip.id} trip={trip} onViewDetails={setSelectedTrip} />
                  ))}
                </TabsContent>
                
                <TabsContent value="upcoming" className="space-y-6 mt-6">
                  {upcomingTrips.map((trip) => (
                    <TripCard key={trip.id} trip={trip} onViewDetails={setSelectedTrip} />
                  ))}
                </TabsContent>
                
                <TabsContent value="completed" className="space-y-6 mt-6">
                  {completedTrips.map((trip) => (
                    <TripCard key={trip.id} trip={trip} onViewDetails={setSelectedTrip} />
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Trip Details Dialog */}
          <Dialog open={!!selectedTrip} onOpenChange={() => setSelectedTrip(null)}>
            <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto bg-white/15 backdrop-blur-mountain border-white/30 shadow-xl">
              {selectedTrip && (
                <>
                  <DialogHeader>
                    <DialogTitle className="flex items-center justify-between text-white drop-shadow-sm">
                      <span>{selectedTrip.destination}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleShareTrip(selectedTrip)}
                        className="flex items-center space-x-1 bg-white/15 border-white/30 text-white hover:bg-white/25 shadow-md"
                      >
                        <Share2 className="w-4 h-4" />
                        <span>Share</span>
                      </Button>
                    </DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={selectedTrip.image}
                        alt={selectedTrip.destination}
                        className="w-16 h-16 object-cover rounded-lg border border-white/30"
                      />
                      <div>
                        <p className="text-white/90 font-medium drop-shadow-sm">{selectedTrip.dates}</p>
                        <p className="text-sm text-white/85 font-medium drop-shadow-sm">
                          {selectedTrip.attractions} attractions • Budget: {selectedTrip.budget}
                        </p>
                      </div>
                    </div>

                    {/* Stays */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-white drop-shadow-sm">Accommodations</h3>
                      <div className="space-y-2">
                        {selectedTrip.stays.map((stay, index) => (
                          <div key={index} className="flex justify-between items-center p-3 bg-white/10 rounded-lg border border-white/20 shadow-md">
                            <div>
                              <p className="font-medium text-white drop-shadow-sm">{stay.name}</p>
                              <p className="text-sm text-white/85 drop-shadow-sm">{stay.nights} nights</p>
                            </div>
                            <p className="font-semibold text-accent-gold drop-shadow-sm">{stay.price}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Itinerary */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-white drop-shadow-sm">Day-by-Day Itinerary</h3>
                      <div className="space-y-4">
                        {selectedTrip.itinerary.map((day) => (
                          <div key={day.day} className="border-l-4 border-accent-gold pl-4">
                            <h4 className="font-medium text-accent-gold mb-2 drop-shadow-sm">Day {day.day}</h4>
                            <ul className="space-y-1">
                              {day.activities.map((activity, index) => (
                                <li key={index} className="text-sm text-white/85 flex items-center font-medium drop-shadow-sm">
                                  <span className="w-2 h-2 bg-accent-gold rounded-full mr-2"></span>
                                  {activity}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Button className="flex-1 bg-accent-gold hover:bg-golden-glow text-white font-semibold shadow-lg" onClick={() => navigate('/trips')}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Full Trip
                      </Button>
                      <Button variant="outline" onClick={() => handleShareTrip(selectedTrip)} className="bg-white/15 border-white/30 text-white hover:bg-white/25 shadow-md">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share Trip
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Profile;
