
import React from 'react';
import Header from '../components/Header';
import { MapPin, Calendar, Star, Settings, Camera } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';

const Profile = () => {
  const userTrips = [
    {
      id: 1,
      destination: 'Puducherry, India',
      dates: 'Oct 20 - Oct 25, 2024',
      status: 'Completed',
      image: '/lovable-uploads/11e8bfa5-0cf0-4962-93ff-c8b5841917fb.png',
      attractions: 12,
      budget: '₹15,000'
    },
    {
      id: 2,
      destination: 'Paris, France',
      dates: 'Dec 15 - Dec 22, 2024',
      status: 'Upcoming',
      image: '/placeholder.svg',
      attractions: 18,
      budget: '€2,400'
    },
    {
      id: 3,
      destination: 'Tokyo, Japan',
      dates: 'Aug 10 - Aug 17, 2024',
      status: 'Completed',
      image: '/placeholder.svg',
      attractions: 25,
      budget: '¥180,000'
    }
  ];

  const userStats = {
    totalTrips: 8,
    countriesVisited: 12,
    totalBudget: '₹2,50,000',
    favoriteDestination: 'Europe'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/placeholder.svg" alt="Profile" />
                  <AvatarFallback className="text-2xl font-semibold">JD</AvatarFallback>
                </Avatar>
                <button className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition-colors">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">John Doe</h1>
                <p className="text-gray-600 mb-4">Travel Enthusiast • Explorer</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Mumbai, India
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Joined March 2024
                  </span>
                </div>
              </div>
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span>Edit Profile</span>
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{userStats.totalTrips}</div>
              <div className="text-sm text-gray-600">Total Trips</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{userStats.countriesVisited}</div>
              <div className="text-sm text-gray-600">Countries Visited</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">{userStats.totalBudget}</div>
              <div className="text-sm text-gray-600">Total Spent</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">{userStats.favoriteDestination}</div>
              <div className="text-sm text-gray-600">Favorite Region</div>
            </CardContent>
          </Card>
        </div>

        {/* Trip History */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>My Trips</span>
              <Button className="bg-blue-600 hover:bg-blue-700">Plan New Trip</Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {userTrips.map((trip) => (
                <div key={trip.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <img 
                    src={trip.image} 
                    alt={trip.destination}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{trip.destination}</h3>
                        <p className="text-gray-600 mb-2">{trip.dates}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{trip.attractions} attractions</span>
                          <span>Budget: {trip.budget}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          trip.status === 'Completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {trip.status}
                        </span>
                        <div className="mt-2">
                          <Button variant="outline" size="sm">View Details</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
