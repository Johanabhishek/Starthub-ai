import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, DocumentData } from 'firebase/firestore';

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

interface StartupDetails {
  startupName?: string;
  industry?: string;
  fundingStage?: string;
  location?: string;
  foundedYear?: number;
  teamSize?: number;
  businessModel?: string;
  marketSize?: string;
  description?: string;
  // We're not including fields like 'Total Raised' yet
}

const StartupDetail: React.FC = () => {
  const { startupId } = useParams<{ startupId: string }>();
  const [startup, setStartup] = useState<StartupDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStartupDetails = async () => {
      if (!startupId) return;

      try {
        const startupDocRef = doc(db, 'startups', startupId);
        const docSnap = await getDoc(startupDocRef);

        if (docSnap.exists()) {
          setStartup(docSnap.data() as StartupDetails);
        } else {
          setError("Startup not found.");
        }
      } catch (err) {
        console.error("Error fetching startup details:", err);
        setError("Failed to load startup details.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchStartupDetails();
  }, [startupId]);

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8 text-center"><p className="text-xl">Loading details...</p></div>;
  }

  if (error) {
    return <div className="container mx-auto px-4 py-8 text-center text-red-700"><p>{error}</p></div>;
  }
  
  if (!startup) {
     return <div className="container mx-auto px-4 py-8 text-center"><p>No startup data available.</p></div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mr-6">
            <span className="text-primary text-2xl font-bold">{startup.startupName?.substring(0, 2).toUpperCase()}</span>
          </div>
          <div>
            <h1 className="text-4xl font-bold">{startup.startupName}</h1>
            <div className="flex space-x-2 mt-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">{startup.industry}</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">{startup.fundingStage}</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">{startup.location}</span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">About</h2>
          <p className="text-gray-700 leading-relaxed">{startup.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Company Details</h3>
            <ul className="space-y-2 text-gray-600">
              <li><strong>Founded:</strong> {startup.foundedYear}</li>
              <li><strong>Team Size:</strong> {startup.teamSize} employees</li>
              <li><strong>Business Model:</strong> {startup.businessModel}</li>
              <li><strong>Market Size:</strong> {startup.marketSize}</li>
            </ul>
          </div>
          {/* Note: We are hiding the Funding and Traction sections for now
              since we don't have that data in our database yet. */}
        </div>
        
        <div className="mt-8 text-center">
            <button className="py-3 px-8 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-bold">
              Contact Startup
            </button>
        </div>
      </div>
    </div>
  );
};

export default StartupDetail;

