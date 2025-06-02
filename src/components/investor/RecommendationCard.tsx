/**
 * Recommendation Card Component
 * 
 * This component displays a single startup recommendation with match score,
 * explanations, and action buttons.
 */

import React, { useState } from 'react';
import { RecommendationResult, InvestorAction } from '../../types';

interface RecommendationCardProps {
  recommendation: RecommendationResult;
  onAction: (action: InvestorAction, startupId: string) => void;
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({
  recommendation,
  onAction
}) => {
  const { startup, score, explanations } = recommendation;
  const [expanded, setExpanded] = useState(false);

  // Format the match score as a percentage
  const formattedScore = `${Math.round(score)}%`;
  
  // Determine color class based on score
  const getScoreColorClass = () => {
    if (score >= 80) return 'bg-green-100 text-green-800';
    if (score >= 60) return 'bg-blue-100 text-blue-800';
    if (score >= 40) return 'bg-yellow-100 text-yellow-800';
    return 'bg-gray-100 text-gray-800';
  };

  // Handle user actions on the recommendation
  const handleAction = (action: InvestorAction) => {
    onAction(action, startup.id);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="p-5">
        {/* Header with logo and match score */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            {startup.logo ? (
              <img 
                src={startup.logo} 
                alt={`${startup.name} logo`} 
                className="w-12 h-12 rounded-full mr-3 object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                <span className="text-primary text-lg font-bold">
                  {startup.name.substring(0, 2).toUpperCase()}
                </span>
              </div>
            )}
            <div>
              <h3 className="text-lg font-bold">{startup.name}</h3>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-sm text-gray-600">{startup.location}</span>
                <span className="text-sm text-gray-600">•</span>
                <span className="text-sm text-gray-600">{startup.fundingStage}</span>
              </div>
            </div>
          </div>
          
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColorClass()}`}>
            {formattedScore} Match
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-700 mb-4 line-clamp-2">
          {startup.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
            {startup.industry}
          </span>
          {startup.tags?.slice(0, 3).map(tag => (
            <span 
              key={tag} 
              className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Match explanations (collapsible) */}
        <div className="mb-4">
          <button 
            onClick={() => setExpanded(!expanded)}
            className="text-sm text-primary flex items-center"
          >
            {expanded ? 'Hide match details' : 'Why this match?'}
            <svg 
              className={`ml-1 w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {expanded && (
            <div className="mt-3 p-3 bg-gray-50 rounded-md">
              <h4 className="font-medium text-sm mb-2">Why we recommended this startup:</h4>
              <ul className="space-y-1">
                {explanations.map((explanation, index) => (
                  <li key={index} className="text-sm flex items-start">
                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {explanation}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {/* Action buttons */}
        <div className="flex space-x-2">
          <button 
            onClick={() => handleAction('save')}
            className="flex-1 py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Save
          </button>
          <button 
            onClick={() => handleAction('contact')}
            className="flex-1 py-2 px-4 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors"
          >
            Contact
          </button>
          <button 
            onClick={() => handleAction('pass')}
            className="py-2 px-4 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
          >
            Pass
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;
