
import React from 'react';
import { Search } from 'lucide-react';
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
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-600">✈</div>
            <span className="text-xl font-bold text-gray-900">VOYA</span>
          </Link>
          
          {showSearch && (
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => onSearchChange?.(e.target.value)}
                  placeholder="Search destinations..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          )}
          
          <nav className="flex items-center space-x-8">
            <Link to="/explore" className="text-gray-600 hover:text-gray-900 font-medium">Explore</Link>
            <Link to="/trips" className="text-gray-600 hover:text-gray-900 font-medium">My Trips</Link>
            <Link to="/saved" className="text-gray-600 hover:text-gray-900 font-medium">Saved</Link>
            <Link to="/collaborate" className="text-gray-600 hover:text-gray-900 font-medium">Collaborate</Link>
            {isLanding && (
              <Link 
                to="/search" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Start Planning
              </Link>
            )}
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
