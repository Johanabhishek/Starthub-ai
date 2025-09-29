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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Safe field getters (same as before)
  const getStartupName = (startup: Startup): string => {
    return startup.name || startup.startupName || 'Unnamed Startup';
  };

  const getStartupDescription = (startup: Startup): string => {
    const desc = startup.description || 'No description available';
    return desc.length > 120 ? desc.substring(0, 120) + '...' : desc;
  };

  const getStartupIndustry = (startup: Startup): string => {
    return startup.industry || 'Unknown';
  };

  const getStartupLocation = (startup: Startup): string => {
    return startup.location || 'Location not specified';
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

  const isValidStartup = (startup: any): boolean => {
    return startup && 
           typeof startup === 'object' && 
           (startup.name || startup.startupName) &&
           startup.id;
  };

  // FIXED: Use onSnapshot for real-time updates instead of getDocs
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    
    console.log("🔥 Setting up real-time listener...");
    
    const startupsCollectionRef = collection(db, 'startups');
    
    // This listens for real-time updates
    const unsubscribe = onSnapshot(
      startupsCollectionRef, 
      (querySnapshot) => {
        console.log("📊 Real-time update received:", {
          empty: querySnapshot.empty,
          size: querySnapshot.size,
          docs: querySnapshot.docs.length
        });

        if (querySnapshot.empty) {
          console.log("📭 No documents found in startups collection");
          setStartups([]);
          setIsLoading(false);
          return;
        }

        const startupsList: Startup[] = [];
        
        querySnapshot.docs.forEach((doc) => {
          const data = doc.data();
          console.log("📄 Document data:", { id: doc.id, ...data });
          
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

        console.log("✅ Final startups list:", startupsList);
        setStartups(startupsList);
        setIsLoading(false);
      },
      (err) => {
        console.error("💥 Firebase real-time error:", err);
        setError('Failed to load startups. Please check your internet connection and try again.');
        setIsLoading(false);
      }
    );

    // Cleanup function to unsubscribe when component unmounts
    return () => {
      console.log("🧹 Cleaning up real-time listener");
      unsubscribe();
    };
  }, []); // Empty dependency array is correct for real-time listeners

  // Rest of your component remains the same...
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-4"></div>
          <p className="text-xl text-gray-600">Loading startups...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center bg-red-50 border border-red-200 rounded-lg p-8">
          <div className="text-red-600 mb-4">
            <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-red-800 mb-2">Error Loading Startups</h2>
          <p className="text-red-700 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Explore Startups</h1>
        <p className="text-gray-600">Discover innovative startups and connect with founders</p>
      </div>
      
      {startups.length > 0 ? (
        <>
          <div className="mb-6 text-sm text-gray-500">
            Found {startups.length} startup{startups.length !== 1 ? 's' : ''}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {startups.map(startup => {
              if (!startup || !startup.id) {
                return null;
              }

              return (
                <div 
                  key={startup.id} 
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-white font-bold text-sm">
                          {getStartupInitials(startup)}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg text-gray-900 mb-1 truncate">
                          {getStartupName(startup)}
                        </h3>
                        <div className="flex flex-wrap gap-1 mb-2">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {getStartupIndustry(startup)}
                          </span>
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                            {getStartupFundingStage(startup)}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {getStartupDescription(startup)}
                    </p>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="truncate">{getStartupLocation(startup)}</span>
                    </div>
                    
                    <Link 
                      to={`/startup/${startup.id}`} 
                      className="w-full block text-center py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className="text-center py-16">
          <div className="mb-4">
            <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">No Startups Yet</h2>
          <p className="text-gray-600 mb-6">Be the first to create and share your startup!</p>
          <Link 
            to="/founder/profile" 
            className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium"
          >
            Create Your Startup
          </Link>
        </div>
      )}
    </div>
  );
};

export default StartupExplore;
