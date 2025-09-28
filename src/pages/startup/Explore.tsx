import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, DocumentData } from 'firebase/firestore';

// --- ATTENTION: FILE PATH CORRECTION ---
// The error you are seeing is because this file path is incorrect for your project structure.
// You MUST fix this line to match the location of your `firebase-config.ts` file.
//
// Common examples based on where you placed `firebase-config.ts`:
//
// 1. If `firebase-config.ts` is in the main `src/` folder:
//    import { db } from '../../firebase-config';
//
// 2. If you created a `src/firebase/` folder for it:
//    import { db } from '../../firebase/firebase-config';
//
// 3. If it's in the same folder as this component (unlikely but possible):
//    import { db } from './firebase-config';
//
import { db } from '../../firebase-config'; // <--- This is the line you must verify and correct.

interface Startup {
  id: string;
  startupName: string;
  industry: string;
  description: string;
  location: string;
  fundingStage: string;
}

const StartupExplore: React.FC = () => {
  const [startups, setStartups] = useState<Startup[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStartups = async () => {
      try {
        const startupsCollectionRef = collection(db, 'startups');
        const querySnapshot = await getDocs(startupsCollectionRef);
        
        const startupsList = querySnapshot.docs.map((doc: DocumentData) => ({
          id: doc.id,
          ...doc.data()
        })) as Startup[];

        setStartups(startupsList);
      } catch (err) {
        console.error("Error fetching startups: ", err);
        setError('Failed to load startups. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchStartups();
  }, []);

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8 text-center"><p className="text-xl">Loading startups...</p></div>;
  }

  if (error) {
    return <div className="container mx-auto px-4 py-8 text-center text-red-700 bg-red-100 border border-red-400 rounded-lg"><p className="font-bold">Error</p><p>{error}</p></div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Explore Startups</h1>
      
      {startups.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {startups.map(startup => (
            <div key={startup.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">{startup.startupName.substring(0, 2).toUpperCase()}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{startup.startupName}</h3>
                    <div className="flex space-x-2 mt-1">
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">{startup.industry}</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">{startup.fundingStage}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 h-20 overflow-hidden">{startup.description}</p>
                <p className="text-sm text-gray-500 mb-4">{startup.location}</p>
                {/* --- THIS IS THE FIX --- */}
                <Link to={`/startup/${startup.id}`} className="w-full block text-center py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
         <div className="text-center py-16"><p className="text-lg text-gray-600">No startups have been submitted yet. Be the first to create one!</p></div>
      )}
    </div>
  );
};

export default StartupExplore;

