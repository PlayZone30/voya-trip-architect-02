
import React from 'react';
import { Search, User, Compass } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  showSearch?: boolean;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
}

const Header = ({ showSearch = false, searchValue = "", onSearchChange }: HeaderProps) => {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <header className="relative">
      {/* Mountain silhouette background */}
      <div className="absolute inset-0 bg-gradient-to-r from-morning-mist via-fog-gray to-morning-mist opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20"></div>
      
      {/* Glass morphism header */}
      <div className="relative backdrop-blur-mountain bg-white/15 border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo with mountain integration */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Compass className="w-8 h-8 text-accent-gold group-hover:animate-compass-spin transition-all duration-300" />
                <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-sm group-hover:blur-md transition-all"></div>
              </div>
              <span className="text-2xl font-bold text-deep-forest tracking-wide">VOYA</span>
            </Link>
            
            {/* Search Bar with glass morphism */}
            {showSearch && (
              <div className="flex-1 max-w-md mx-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-white/10 rounded-full blur-sm group-hover:blur-md transition-all"></div>
                  <div className="relative bg-white/15 backdrop-blur-md rounded-full border border-white/20 hover:border-accent-gold/30 transition-all duration-300">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-gray h-4 w-4" />
                    <input
                      type="text"
                      value={searchValue}
                      onChange={(e) => onSearchChange?.(e.target.value)}
                      placeholder="Discover your next adventure..."
                      className="w-full pl-12 pr-4 py-3 bg-transparent text-mountain-shadow placeholder-stone-gray focus:outline-none focus:ring-2 focus:ring-accent-gold/30 rounded-full"
                    />
                  </div>
                </div>
              </div>
            )}
            
            {/* Navigation */}
            <nav className="flex items-center space-x-8">
              <Link 
                to="/trips" 
                className="relative text-deep-forest hover:text-accent-gold font-medium tracking-wide transition-all duration-300 group"
              >
                My Journeys
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-gold group-hover:w-full transition-all duration-300"></div>
              </Link>
              
              {isLanding && (
                <Link 
                  to="/search" 
                  className="relative bg-gradient-to-r from-sky-blue to-misty-blue text-white px-6 py-2 rounded-full hover:from-misty-blue hover:to-deep-forest transition-all duration-300 font-medium tracking-wide group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-sm group-hover:blur-md transition-all"></div>
                  <span className="relative">Begin Your Journey</span>
                </Link>
              )}
              
              <Link 
                to="/profile" 
                className="relative p-2 rounded-full hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="absolute inset-0 bg-accent-gold/20 rounded-full opacity-0 group-hover:opacity-100 transition-all"></div>
                <User className="relative w-6 h-6 text-deep-forest group-hover:text-accent-gold transition-colors" />
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
