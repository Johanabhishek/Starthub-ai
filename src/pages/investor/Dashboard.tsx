import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase-config';

interface Startup {
  id: string;
  name: string;
  description: string;
  industry: string;
  stage: string;
  location: string;
  funding: string;
  team: number;
  match?: number;
}

interface Investor {
  id: string;
  name: string;
  email: string;
  savedStartups?: string[];
  viewedStartups?: string[];
  passedStartups?: string[];
  preferences?: any;
}

const InvestorDashboard: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [investor, setInvestor] = useState<Investor | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock startups data (replace with real Firebase data later)
  const [startups] = useState<Startup[]>([
    {
      id: '1',
      name: 'TechFlow AI',
      description: 'AI-powered workflow automation for enterprises. Helping companies reduce manual work by 80% through intelligent process automation.',
      industry: 'AI/ML',
      stage: 'Seed',
      location: 'Bangalore',
      funding: '₹5Cr',
      team: 12,
      match: 95
    },
    {
      id: '2',
      name: 'GreenTech Solutions',
      description: 'Sustainable energy solutions for urban environments. Building the future of clean energy with innovative solar and wind technologies.',
      industry: 'CleanTech',
      stage: 'Series A',
      location: 'Mumbai',
      funding: '₹15Cr',
      team: 28,
      match: 88
    },
    {
      id: '3',
      name: 'HealthCare Plus',
      description: 'Telemedicine platform connecting patients with specialists. Making healthcare accessible to rural communities across India.',
      industry: 'HealthTech',
      stage: 'Pre-Seed',
      location: 'Delhi',
      funding: '₹2Cr',
      team: 8,
      match: 92
    },
    {
      id: '4',
      name: 'FinSecure',
      description: 'Digital banking solutions for SMEs. Providing comprehensive financial services tailored for small and medium enterprises.',
      industry: 'FinTech',
      stage: 'Seed',
      location: 'Hyderabad',
      funding: '₹8Cr',
      team: 15,
      match: 85
    }
  ]);

  const [activeTab, setActiveTab] = useState<'recommended' | 'saved' | 'portfolio'>('recommended');
  const [showPreferences, setShowPreferences] = useState(false);

  // Get real user data from Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        
        // Get investor data from Firestore
        try {
          const investorDocRef = doc(db, 'investors', user.uid);
          const docSnap = await getDoc(investorDocRef);
          
          if (docSnap.exists()) {
            const investorData = docSnap.data() as Investor;
            setInvestor({
              ...investorData,
              name: investorData.name || user.displayName || user.email?.split('@')[0] || 'Investor'
            });
          } else {
            // Create a new investor profile if doesn't exist
            setInvestor({
              id: user.uid,
              name: user.displayName || user.email?.split('@')[0] || 'Investor',
              email: user.email || '',
              savedStartups: ['1', '3'], // Mock saved startups
              viewedStartups: ['1', '2', '3', '4'],
              passedStartups: ['2'],
            });
          }
        } catch (error) {
          console.error("Error fetching investor data:", error);
          // Fallback to basic user info
          setInvestor({
            id: user.uid,
            name: user.displayName || user.email?.split('@')[0] || 'Investor',
            email: user.email || '',
            savedStartups: ['1', '3'],
            viewedStartups: ['1', '2', '3', '4'],
            passedStartups: ['2'],
          });
        }
      } else {
        setInvestor(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const getIndustryColor = (industry: string): string => {
    const colors: { [key: string]: string } = {
      'AI/ML': 'from-purple-500 to-pink-600',
      'FinTech': 'from-blue-500 to-indigo-600',
      'HealthTech': 'from-green-500 to-emerald-600',
      'CleanTech': 'from-emerald-500 to-teal-600',
      'default': 'from-gray-500 to-gray-600'
    };
    return colors[industry] || colors['default'];
  };

  const getStageColor = (stage: string): string => {
    const colors: { [key: string]: string } = {
      'Pre-Seed': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Seed': 'bg-green-100 text-green-800 border-green-200',
      'Series A': 'bg-blue-100 text-blue-800 border-blue-200',
      'Series B': 'bg-purple-100 text-purple-800 border-purple-200',
      'default': 'bg-gray-100 text-gray-800 border-gray-200'
    };
    return colors[stage] || colors['default'];
  };

  const handleSaveStartup = (startupId: string) => {
    console.log('Saved startup:', startupId);
    // Add save logic here - update Firebase
  };

  const handlePassStartup = (startupId: string) => {
    console.log('Passed startup:', startupId);
    // Add pass logic here - update Firebase
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mb-4"></div>
          <p className="text-xl text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // Not logged in state
  if (!currentUser || !investor) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please Sign In</h2>
          <p className="text-gray-600 mb-8">You need to be logged in to access the investor dashboard.</p>
          <Link 
            to="/signin" 
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  const filteredStartups = startups.filter(startup => {
    if (activeTab === 'recommended') return !investor.savedStartups?.includes(startup.id);
    if (activeTab === 'saved') return investor.savedStartups?.includes(startup.id);
    if (activeTab === 'portfolio') return investor.savedStartups?.includes(startup.id); // Mock portfolio
    return false;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome back, 
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> {investor.name}</span>
              </h1>
              <p className="text-xl text-gray-100 mb-6 lg:mb-0">
                Discover your next unicorn investment with AI-powered recommendations
              </p>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => setShowPreferences(!showPreferences)}
                className="px-6 py-3 bg-white/20 backdrop-blur text-white font-medium rounded-xl border border-white/20 hover:bg-white/30 transition-all"
              >
                ⚙️ Preferences
              </button>
              <Link
                to="/startup/explore"
                className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-xl hover:bg-gray-100 transition-all"
              >
                🔍 Explore All
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-6 relative z-10">
        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all group">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-500 text-sm font-medium mb-2">Portfolio Value</h3>
                <p className="text-3xl font-bold text-gray-900">₹125Cr</p>
                <div className="flex items-center mt-2">
                  <span className="text-green-600 text-sm font-medium">+12.5%</span>
                  <span className="text-gray-400 text-sm ml-1">this month</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white text-xl">💰</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all group">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-500 text-sm font-medium mb-2">Active Investments</h3>
                <p className="text-3xl font-bold text-gray-900">{investor.savedStartups?.length || 0}</p>
                <div className="flex items-center mt-2">
                  <span className="text-blue-600 text-sm font-medium">2 new</span>
                  <span className="text-gray-400 text-sm ml-1">this week</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white text-xl">📊</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all group">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-500 text-sm font-medium mb-2">Deals Reviewed</h3>
                <p className="text-3xl font-bold text-gray-900">{investor.viewedStartups?.length || 0}</p>
                <div className="flex items-center mt-2">
                  <span className="text-purple-600 text-sm font-medium">{startups.length} pending</span>
                  <span className="text-gray-400 text-sm ml-1">review</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white text-xl">👁️</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all group">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-500 text-sm font-medium mb-2">Match Quality</h3>
                <p className="text-3xl font-bold text-gray-900">94%</p>
                <div className="flex items-center mt-2">
                  <span className="text-orange-600 text-sm font-medium">AI-powered</span>
                  <span className="text-gray-400 text-sm ml-1">matching</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white text-xl">🎯</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Navigation Tabs */}
        <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100 mb-8">
          <div className="flex space-x-2">
            {[
              { id: 'recommended', label: '🔥 Recommended', count: startups.filter(s => !investor.savedStartups?.includes(s.id)).length },
              { id: 'saved', label: '💾 Saved', count: investor.savedStartups?.length || 0 },
              { id: 'portfolio', label: '📈 Portfolio', count: investor.savedStartups?.length || 0 }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {tab.label}
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  activeTab === tab.id
                    ? 'bg-white/20'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Startup Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
          {filteredStartups.map((startup) => (
            <div key={startup.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Header with Match Score */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${getIndustryColor(startup.industry)} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                      <span className="text-white font-bold text-xl">
                        {startup.name.substring(0, 2)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{startup.name}</h3>
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStageColor(startup.stage)}`}>
                          {startup.stage}
                        </span>
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                          {startup.industry}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Match Score */}
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-600">{startup.match}%</div>
                    <div className="text-sm text-gray-500">Match Score</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {startup.description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-gray-900">{startup.funding}</div>
                    <div className="text-sm text-gray-500">Seeking</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-gray-900">👥 {startup.team}</div>
                    <div className="text-sm text-gray-500">Team Size</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-gray-900">📍 {startup.location}</div>
                    <div className="text-sm text-gray-500">Location</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button
                    onClick={() => handlePassStartup(startup.id)}
                    className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-all"
                  >
                    👎 Pass
                  </button>
                  <button
                    onClick={() => handleSaveStartup(startup.id)}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-lg"
                  >
                    💾 Save & Connect
                  </button>
                  <Link
                    to={`/startup/${startup.id}`}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all"
                  >
                    📊 Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredStartups.length === 0 && (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {activeTab === 'recommended' && 'All caught up!'}
                {activeTab === 'saved' && 'No saved startups yet'}
                {activeTab === 'portfolio' && 'No portfolio companies yet'}
              </h2>
              <p className="text-gray-600 mb-8">
                {activeTab === 'recommended' && 'Check back tomorrow for new recommendations'}
                {activeTab === 'saved' && 'Start saving interesting startups to review later'}
                {activeTab === 'portfolio' && 'Your invested companies will appear here'}
              </p>
              <Link
                to="/startup/explore"
                className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                Explore All Startups
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Preferences Panel (slide-in from right) */}
      {showPreferences && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
          <div className="w-full max-w-md bg-white h-full overflow-y-auto transform transition-transform">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Investment Preferences</h2>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Industries</label>
                  <div className="space-y-2">
                    {['FinTech', 'HealthTech', 'AI/ML', 'CleanTech', 'SaaS'].map(industry => (
                      <label key={industry} className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 mr-3" defaultChecked />
                        <span>{industry}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Funding Stage</label>
                  <div className="space-y-2">
                    {['Pre-Seed', 'Seed', 'Series A', 'Series B'].map(stage => (
                      <label key={stage} className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 mr-3" defaultChecked />
                        <span>{stage}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Investment Range</label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                    <option>₹50L - ₹2Cr</option>
                    <option>₹2Cr - ₹10Cr</option>
                    <option>₹10Cr - ₹50Cr</option>
                    <option>₹50Cr+</option>
                  </select>
                </div>
              </div>
              
              <button
                onClick={() => setShowPreferences(false)}
                className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestorDashboard;
