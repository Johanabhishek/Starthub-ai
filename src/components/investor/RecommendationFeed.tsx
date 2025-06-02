/**
 * Recommendation Feed Component
 * 
 * This component displays a list of startup recommendations for an investor
 * and handles user interactions with recommendations.
 */

import React, { useState, useEffect } from 'react';
import { Investor, Startup, RecommendationResult, InvestorAction } from '../../types';
import { createRecommendationEngine } from '../../lib/ai/recommendationEngine';
import RecommendationCard from './RecommendationCard';

interface RecommendationFeedProps {
  investor: Investor;
  startups: Startup[];
  onActionPerformed: (action: InvestorAction, startupId: string) => void;
}

export const RecommendationFeed: React.FC<RecommendationFeedProps> = ({
  investor,
  startups,
  onActionPerformed
}) => {
  const [recommendations, setRecommendations] = useState<RecommendationResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    minMatchScore: 0,
    industries: [] as string[],
    fundingStages: [] as string[]
  });

  // Generate recommendations when investor or startups change
  useEffect(() => {
    const generateRecommendations = async () => {
      try {
        setLoading(true);
        
        // Create recommendation engine
        const engine = createRecommendationEngine();
        
        // Generate recommendations
        const results = engine.generateRecommendations(investor, startups);
        
        setRecommendations(results);
        setError(null);
      } catch (err) {
        console.error('Error generating recommendations:', err);
        setError('Failed to generate recommendations. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    
    generateRecommendations();
  }, [investor, startups]);

  // Handle user actions on recommendations
  const handleAction = (action: InvestorAction, startupId: string) => {
    // Update local state to remove the recommendation if it was saved or passed
    if (action === 'save' || action === 'pass') {
      setRecommendations(prev => prev.filter(rec => rec.startup.id !== startupId));
    }
    
    // Propagate the action to parent component
    onActionPerformed(action, startupId);
  };

  // Filter recommendations based on current filters
  const filteredRecommendations = recommendations.filter(rec => {
    // Filter by minimum match score
    if (rec.score < filters.minMatchScore) return false;
    
    // Filter by selected industries (if any)
    if (filters.industries.length > 0 && !filters.industries.includes(rec.startup.industry)) {
      return false;
    }
    
    // Filter by selected funding stages (if any)
    if (filters.fundingStages.length > 0 && !filters.fundingStages.includes(rec.startup.fundingStage)) {
      return false;
    }
    
    return true;
  });

  // Get unique industries and funding stages for filter options
  const uniqueIndustries = [...new Set(recommendations.map(rec => rec.startup.industry))];
  const uniqueFundingStages = [...new Set(recommendations.map(rec => rec.startup.fundingStage))];

  // Handle filter changes
  const handleScoreFilterChange = (value: number) => {
    setFilters(prev => ({ ...prev, minMatchScore: value }));
  };

  const handleIndustryFilterChange = (industry: string, checked: boolean) => {
    setFilters(prev => {
      if (checked) {
        return { ...prev, industries: [...prev.industries, industry] };
      } else {
        return { ...prev, industries: prev.industries.filter(i => i !== industry) };
      }
    });
  };

  const handleFundingStageFilterChange = (stage: string, checked: boolean) => {
    setFilters(prev => {
      if (checked) {
        return { ...prev, fundingStages: [...prev.fundingStages, stage] };
      } else {
        return { ...prev, fundingStages: prev.fundingStages.filter(s => s !== stage) };
      }
    });
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      minMatchScore: 0,
      industries: [],
      fundingStages: []
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Filters sidebar */}
      <div className="w-full md:w-64 shrink-0">
        <div className="bg-white p-4 rounded-lg shadow-md sticky top-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Filters</h3>
            <button 
              onClick={resetFilters}
              className="text-sm text-primary hover:underline"
            >
              Reset
            </button>
          </div>
          
          {/* Match score filter */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Minimum Match Score: {filters.minMatchScore}%
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={filters.minMatchScore}
              onChange={(e) => handleScoreFilterChange(parseInt(e.target.value))}
              className="w-full"
            />
          </div>
          
          {/* Industry filter */}
          <div className="mb-6">
            <h4 className="font-medium text-sm mb-2">Industries</h4>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {uniqueIndustries.map(industry => (
                <div key={industry} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`industry-${industry}`}
                    checked={filters.industries.includes(industry)}
                    onChange={(e) => handleIndustryFilterChange(industry, e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 mr-2"
                  />
                  <label htmlFor={`industry-${industry}`} className="text-sm">
                    {industry}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Funding stage filter */}
          <div className="mb-6">
            <h4 className="font-medium text-sm mb-2">Funding Stages</h4>
            <div className="space-y-2">
              {uniqueFundingStages.map(stage => (
                <div key={stage} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`stage-${stage}`}
                    checked={filters.fundingStages.includes(stage)}
                    onChange={(e) => handleFundingStageFilterChange(stage, e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 mr-2"
                  />
                  <label htmlFor={`stage-${stage}`} className="text-sm">
                    {stage}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Recommendations feed */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-6">Recommended Startups</h2>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 p-4 rounded-md text-red-800">
            {error}
          </div>
        ) : filteredRecommendations.length === 0 ? (
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h3 className="text-xl font-medium mb-2">No matching recommendations</h3>
            <p className="text-gray-600 mb-4">
              {recommendations.length > 0 
                ? "Try adjusting your filters to see more startups." 
                : "We don't have any recommendations for you yet. Try updating your preferences."}
            </p>
            {recommendations.length > 0 && (
              <button 
                onClick={resetFilters}
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
              >
                Reset Filters
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredRecommendations.map(recommendation => (
              <RecommendationCard
                key={recommendation.startup.id}
                recommendation={recommendation}
                onAction={handleAction}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendationFeed;
