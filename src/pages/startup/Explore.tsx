import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase-config';

interface Startup {
  id: string;
  name?: string;
  startupName?: string;
  industry?: string;
  description?: string;
  location?: string;
  fundingStage?: string;
  founderId?: string;
  createdAt?: any;
}

const StartupExplore: React.FC = () => {
  const [startups, setStartups] = useState<Startup[]>([]);
  const [filteredStartups, setFilteredStartups] = useState<Startup[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [industryFilter, setIndustryFilter] = useState('');
  const [stageFilter, setStageFilter] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  // Safe field getters
  const getStartupName = (startup: Startup): string => {
    return startup.name || startup.startupName || 'Unnamed Startup';
  };

  const getStartupDescription = (startup: Startup): string => {
    const desc = startup.description || 'Building something amazing. Connect to learn more about our vision and join our journey.';
    return desc.length > 140 ? desc.substring(0, 140) + '...' : desc;
  };

  const getStartupIndustry = (startup: Startup): string => {
    return startup.industry || 'Tech';
  };

  const getStartupLocation = (startup: Startup): string => {
    return startup.location || 'Remote';
  };

  const getStartupFundingStage = (startup: Startup): string => {
    return startup.fundingStage || 'Pre-Seed';
  };

  const getStartupInitials = (startup: Startup): string => {
    const name = getStartupName(startup);
    if (name.length >= 2) {
      return name.substring(0, 2).toUpperCase();
    }
    return name.charAt(0).toUpperCase() || 'S';
  };

  // Get random funding amount for demo
  const getRandomFunding = (): string => {
    const amounts = ['₹50L', '₹1Cr', '₹2Cr', '₹5Cr', '₹10Cr', '₹25Cr'];
    return amounts[Math.floor(Math.random() * amounts.length)];
  };

  // Get random team size
  const getRandomTeamSize = (): number => {
    return Math.floor(Math.random() * 8) + 1;
  };

  // Get industry color
  const getIndustryColor = (industry: string): string => {
    const colors: { [key: string]: string } = {
      'FinTech': 'from-blue-500 to-blue-600',
      'HealthTech': 'from-green-500 to-green-600', 
      'SaaS': 'from-purple-500 to-purple-600',
      'E-commerce': 'from-orange-500 to-orange-600',
      'EdTech': 'from-indigo-500 to-indigo-600',
      'AI': 'from-pink-500 to-pink-600',
      'CleanTech': 'from-emerald-500 to-emerald-600',
      'default': 'from-gray-500 to-gray-600'
    };
    return colors[industry] || colors['default'];
  };

  // Get stage color
  const getStageColor = (stage: string): string => {
    const colors: { [key: string]: string } = {
      'Pre-Seed': 'bg-yellow-100 text-yellow-800',
      'Seed': 'bg-green-100 text-green-800',
      'Series A': 'bg-blue-100 text-blue-800',
      'Series B': 'bg-purple-100 text-purple-800',
      'default': 'bg-gray-100 text-gray-800'
    };
    return colors[stage] || colors['default'];
  };

  const isValidStartup = (startup: any): boolean => {
    return startup && 
           typeof startup === 'object' && 
           startup.id;
  };

  // Filter and sort function
  useEffect(() => {
    let filtered = [...startups];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(startup => 
        getStartupName(startup).toLowerCase().includes(searchTerm.toLowerCase()) ||
        getStartupDescription(startup).toLowerCase().includes(searchTerm.toLowerCase()) ||
        getStartupIndustry(startup).toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Industry filter
    if (industryFilter) {
      filtered = filtered.filter(startup => 
        getStartupIndustry(startup) === industryFilter
      );
    }

    // Stage filter
    if (stageFilter) {
      filtered = filtered.filter(startup => 
        getStartupFundingStage(startup) === stageFilter
      );
    }

    // Sorting
    if (sortBy === 'newest') {
      filtered.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
    } else if (sortBy === 'name') {
      filtered.sort((a, b) => getStartupName(a).localeCompare(getStartupName(b)));
    }

    setFilteredStartups(filtered);
  }, [startups, searchTerm, industryFilter, stageFilter, sortBy]);

  // Firebase listener
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    
    const startupsCollectionRef = collection(db, 'startups');
    
    const unsubscribe = onSnapshot(
      startupsCollectionRef, 
      (querySnapshot) => {
        if (querySnapshot.empty) {
          setStartups([]);
          setIsLoading(false);
          return;
        }

        const startupsList: Startup[] = [];
        
        querySnapshot.docs.forEach((doc) => {
          const data = doc.data();
          
          if (isValidStartup({ ...data, id: doc.id })) {
            startupsList.push({
              id: doc.id,
              ...data,
              name: data.name || data.startupName || '',
              startupName: data.startupName || data.name || '',
              description: data.description || '',
              industry: data.industry || '',
              location: data.location || '',
              fundingStage: data.fundingStage || 'Pre-Seed'
            });
          }
        });

        setStartups(startupsList);
        setIsLoading(false);
      },
      (err) => {
        console.error("Firebase error:", err);
        setError('Failed to load startups. Please check your internet connection and try again.');
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // Enhanced loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          {/* Loading header */}
          <div className="mb-8">
            <div className="h-8 bg-gray-200 rounded-lg w-64 mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-96 animate-pulse"></div>
          </div>
          
          {/* Loading filters */}
          <div className="bg-white rounded-xl p-6 mb-8 border">
            <div className="flex gap-4">
              <div className="h-10 bg-gray-200 rounded-lg w-64 animate-pulse"></div>
              <div className="h-10 bg-gray-200 rounded-lg w-32 animate-pulse"></div>
              <div className="h-10 bg-gray-200 rounded-lg w-32 animate-pulse"></div>
            </div>
          </div>
          
          {/* Loading cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="bg-white rounded-2xl p-6 border animate-pulse">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gray-200 rounded-xl mr-4"></div>
                  <div className="flex-1">
                    <div className="h-5 bg-gray-200 rounded w-32 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-20"></div>
                  </div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-10 bg-gray-200 rounded-lg w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-white rounded-2xl shadow-lg p-12 max-w-md mx-4">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-8">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const uniqueIndustries = [...new Set(startups.map(s => getStartupIndustry(s)))].filter(Boolean);
  const uniqueStages = [...new Set(startups.map(s => getStartupFundingStage(s)))].filter(Boolean);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Discover Amazing 
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Startups</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              Connect with innovative founders and join the next unicorn
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center bg-white/10 backdrop-blur rounded-full px-4 py-2">
                <span className="text-green-400 mr-2">✓</span>
                {startups.length}+ Active Startups
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur rounded-full px-4 py-2">
                <span className="text-green-400 mr-2">✓</span>
                {uniqueIndustries.length}+ Industries
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur rounded-full px-4 py-2">
                <span className="text-green-400 mr-2">✓</span>
                Real-time Updates
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8 relative z-10">
        {/* Enhanced Filters */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search startups, industries, or keywords..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Industry Filter */}
            <div>
              <select
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                value={industryFilter}
                onChange={(e) => setIndustryFilter(e.target.value)}
              >
                <option value="">All Industries</option>
                {uniqueIndustries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>

            {/* Stage Filter */}
            <div>
              <select
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                value={stageFilter}
                onChange={(e) => setStageFilter(e.target.value)}
              >
                <option value="">All Stages</option>
                {uniqueStages.map(stage => (
                  <option key={stage} value={stage}>{stage}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Filters */}
          {(searchTerm || industryFilter || stageFilter) && (
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
              <span className="text-sm text-gray-600 mr-2">Active filters:</span>
              {searchTerm && (
                <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Search: "{searchTerm}"
                  <button onClick={() => setSearchTerm('')} className="ml-2 text-blue-600 hover:text-blue-800">
                    ×
                  </button>
                </span>
              )}
              {industryFilter && (
                <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {industryFilter}
                  <button onClick={() => setIndustryFilter('')} className="ml-2 text-green-600 hover:text-green-800">
                    ×
                  </button>
                </span>
              )}
              {stageFilter && (
                <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                  {stageFilter}
                  <button onClick={() => setStageFilter('')} className="ml-2 text-purple-600 hover:text-purple-800">
                    ×
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-gray-600">
            <span className="font-semibold text-gray-900">{filteredStartups.length}</span> startup{filteredStartups.length !== 1 ? 's' : ''} found
            {(searchTerm || industryFilter || stageFilter) && (
              <span className="text-sm text-gray-500 ml-2">
                (filtered from {startups.length} total)
              </span>
            )}
          </div>
          
          <select
            className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="name">Name A-Z</option>
          </select>
        </div>

        {filteredStartups.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
            {filteredStartups.map(startup => {
              if (!startup || !startup.id) return null;

              const industry = getStartupIndustry(startup);
              const stage = getStartupFundingStage(startup);
              const funding = getRandomFunding();
              const teamSize = getRandomTeamSize();

              return (
                <div 
                  key={startup.id} 
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`w-14 h-14 bg-gradient-to-r ${getIndustryColor(industry)} rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform`}>
                          <span className="text-white font-bold text-lg">
                            {getStartupInitials(startup)}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                            {getStartupName(startup)}
                          </h3>
                          <div className="text-sm text-gray-500">
                            👥 {teamSize} member{teamSize !== 1 ? 's' : ''}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm font-bold text-green-600">🔥 Hot</div>
                        <div className="text-xs text-gray-500">{Math.floor(Math.random() * 50) + 10}+ views</div>
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                        {industry}
                      </span>
                      <span className={`px-3 py-1 text-sm rounded-full font-medium ${getStageColor(stage)}`}>
                        {stage}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                      {getStartupDescription(startup)}
                    </p>
                    
                    {/* Stats */}
                    <div className="bg-gray-50 rounded-xl p-4 mb-6">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center">
                          <span className="text-gray-400 mr-2">💰</span>
                          <span className="font-medium">Seeking: {funding}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-400 mr-2">📍</span>
                          <span className="truncate">{getStartupLocation(startup)}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <Link 
                      to={`/startup/${startup.id}`} 
                      className="w-full block text-center py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform group-hover:scale-105 shadow-lg"
                    >
                      Connect Now →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {(searchTerm || industryFilter || stageFilter) ? 'No matches found' : 'No Startups Yet'}
              </h2>
              <p className="text-gray-600 mb-8">
                {(searchTerm || industryFilter || stageFilter) 
                  ? 'Try adjusting your filters or search terms'
                  : 'Be the first to create and share your startup!'
                }
              </p>
              {(searchTerm || industryFilter || stageFilter) ? (
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setIndustryFilter('');
                    setStageFilter('');
                  }}
                  className="px-8 py-3 bg-gray-600 text-white font-bold rounded-xl hover:bg-gray-700 transition-all"
                >
                  Clear All Filters
                </button>
              ) : (
                <Link 
                  to="/founder/profile" 
                  className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
                >
                  Create Your Startup
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StartupExplore;
