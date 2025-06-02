import React, { useState } from 'react';
import { mockInvestor, mockStartups } from '../../lib/mockData';
import { Investor, Startup, InvestorAction } from '../../types';
import RecommendationFeed from '../../components/investor/RecommendationFeed';
import PreferenceCollector from '../../components/investor/PreferenceCollector';

const InvestorDashboard: React.FC = () => {
  const [investor, setInvestor] = useState<Investor>(mockInvestor);
  const [startups] = useState<Startup[]>(mockStartups);
  const [showPreferences, setShowPreferences] = useState(false);
  
  // Handle investor actions on recommendations
  const handleRecommendationAction = (action: InvestorAction, startupId: string) => {
    // In a real app, this would call an API to update the investor's actions
    console.log(`Action: ${action} on startup: ${startupId}`);
    
    // Update local state to reflect the action
    setInvestor(prev => {
      const updatedInvestor = { ...prev };
      
      if (action === 'save') {
        updatedInvestor.savedStartups = [...(prev.savedStartups || []), startupId];
        // Remove from passed if it was there
        if (updatedInvestor.passedStartups) {
          updatedInvestor.passedStartups = updatedInvestor.passedStartups.filter(id => id !== startupId);
        }
      } else if (action === 'pass') {
        updatedInvestor.passedStartups = [...(prev.passedStartups || []), startupId];
        // Remove from saved if it was there
        if (updatedInvestor.savedStartups) {
          updatedInvestor.savedStartups = updatedInvestor.savedStartups.filter(id => id !== startupId);
        }
      }
      
      // Always mark as viewed
      updatedInvestor.viewedStartups = [...(prev.viewedStartups || []), startupId];
      
      return updatedInvestor;
    });
  };
  
  // Handle preference updates
  const handlePreferenceUpdate = (updatedPreferences: any) => {
    setInvestor(prev => ({
      ...prev,
      preferences: updatedPreferences
    }));
    
    // Close the preferences panel
    setShowPreferences(false);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Investor Dashboard</h1>
          <button
            onClick={() => setShowPreferences(!showPreferences)}
            className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90"
          >
            {showPreferences ? 'Close Preferences' : 'Edit Preferences'}
          </button>
        </div>
        
        <p className="text-gray-600 mt-2">
          Discover AI-recommended startups tailored to your investment preferences
        </p>
      </header>
      
      {/* Preferences Panel (conditionally rendered) */}
      {showPreferences && (
        <div className="mb-8">
          <PreferenceCollector
            initialPreferences={investor.preferences}
            onSave={handlePreferenceUpdate}
          />
        </div>
      )}
      
      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="font-medium text-gray-500">Saved Startups</h3>
          <p className="text-2xl font-bold">{investor.savedStartups?.length || 0}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="font-medium text-gray-500">Viewed Startups</h3>
          <p className="text-2xl font-bold">{investor.viewedStartups?.length || 0}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="font-medium text-gray-500">Match Quality</h3>
          <p className="text-2xl font-bold">High</p>
        </div>
      </div>
      
      {/* Recommendation Feed */}
      <RecommendationFeed
        investor={investor}
        startups={startups}
        onActionPerformed={handleRecommendationAction}
      />
    </div>
  );
};

export default InvestorDashboard;
