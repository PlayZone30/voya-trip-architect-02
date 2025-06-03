
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

const Landing = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?destination=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/c3e2ab30-37fd-4ee2-8fa5-af14f2377bf5.png" 
          alt="Tropical mountains with fog"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6">
        <div className="text-2xl font-bold text-white tracking-wide">VOYA</div>
        <div className="flex space-x-8">
          <button className="text-white/80 hover:text-white transition-colors">Home</button>
          <button className="text-white/80 hover:text-white transition-colors">Explore</button>
          <button className="text-white/80 hover:text-white transition-colors">My Trips</button>
          <button className="text-white/80 hover:text-white transition-colors">Profile</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-16">
        {/* Subtitle */}
        <p className="text-white/90 text-lg tracking-[0.3em] mb-8 text-center">
          Discover, Stay, Explore.
        </p>
        
        {/* Main Title */}
        <h1 className="text-white text-[8rem] md:text-[12rem] font-bold tracking-wide mb-12 text-center leading-none">
          VOYA
        </h1>
        
        {/* Description */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-white/80 text-center text-lg leading-relaxed px-8">
            Voya is your intelligent travel planning companion, designed to create perfectly curated travel experiences. We combine beautiful destinations, comfortable accommodations, and exciting attractions into seamless itineraries tailored just for you. Whether you're seeking adventure, relaxation, or cultural immersion, VOYA helps you discover and plan your ideal journey with ease.
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="w-full max-w-2xl mx-auto">
          <div className="flex bg-black/40 backdrop-blur-sm rounded-full overflow-hidden border border-white/20">
            <div className="flex-1 flex items-center px-6 py-4">
              <Search className="text-white/60 mr-4 h-5 w-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter your next destination"
                className="flex-1 outline-none text-white bg-transparent placeholder-white/60 text-lg"
              />
            </div>
            <button
              onClick={handleSearch}
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 hover:bg-white/30 transition-colors font-medium border-l border-white/20"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
