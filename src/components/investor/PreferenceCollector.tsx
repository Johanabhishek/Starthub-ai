/**
 * Investor Preference Collection Component
 * 
 * This component allows investors to set and update their preferences
 * for startup recommendations.
 */

import React, { useState } from 'react';
import { InvestorPreference } from '../../types';

interface PreferenceCollectorProps {
  initialPreferences?: InvestorPreference;
  onSave: (preferences: InvestorPreference) => void;
}

export const PreferenceCollector: React.FC<PreferenceCollectorProps> = ({
  initialPreferences,
  onSave
}) => {
  const [preferences, setPreferences] = useState<InvestorPreference>(
    initialPreferences || {
      industries: [],
      fundingStages: [],
      locations: [],
      marketSize: [],
      businessModels: [],
      teamSize: { min: 1, max: 50 },
      investmentSize: { min: 10000, max: 1000000 },
      riskTolerance: 'medium',
      returnTimeline: 'medium',
      preferredTags: []
    }
  );

  // Industry options (would come from a database in a real app)
  const industryOptions = [
    'FinTech', 'HealthTech', 'EdTech', 'CleanTech', 'AI/ML',
    'Blockchain', 'E-commerce', 'SaaS', 'IoT', 'Cybersecurity'
  ];

  // Funding stage options
  const fundingStageOptions = [
    'Pre-seed', 'Seed', 'Series A', 'Series B', 'Series C', 'Growth'
  ];

  // Business model options
  const businessModelOptions = [
    'SaaS', 'Marketplace', 'E-commerce', 'Subscription', 
    'Freemium', 'Ad-supported', 'B2B', 'B2C', 'D2C'
  ];

  // Location options (simplified for demo)
  const locationOptions = [
    'San Francisco, CA', 'New York, NY', 'Boston, MA', 
    'Austin, TX', 'Seattle, WA', 'London, UK', 'Berlin, DE',
    'Tel Aviv, IL', 'Singapore, SG', 'Remote'
  ];

  // Market size options
  const marketSizeOptions = [
    'Small (<$1B)', 'Medium ($1B-$10B)', 'Large ($10B-$100B)', 'Massive (>$100B)'
  ];

  // Handle checkbox changes for array-type preferences
  const handleCheckboxChange = (
    category: keyof InvestorPreference, 
    value: string, 
    checked: boolean
  ) => {
    setPreferences(prev => {
      const currentValues = prev[category] as string[] || [];
      
      if (checked) {
        return {
          ...prev,
          [category]: [...currentValues, value]
        };
      } else {
        return {
          ...prev,
          [category]: currentValues.filter(v => v !== value)
        };
      }
    });
  };

  // Handle range changes (for min/max values)
  const handleRangeChange = (
    category: 'teamSize' | 'investmentSize',
    field: 'min' | 'max',
    value: number
  ) => {
    setPreferences(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
  };

  // Handle radio button changes
  const handleRadioChange = (
    category: 'riskTolerance' | 'returnTimeline',
    value: string
  ) => {
    setPreferences(prev => ({
      ...prev,
      [category]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(preferences);
  };

  return (
    <div className="bg-background p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Investment Preferences</h2>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Industries Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Industries</h3>
          <p className="text-muted-foreground mb-4">
            Select industries you're interested in investing in
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {industryOptions.map(industry => (
              <div key={industry} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`industry-${industry}`}
                  checked={preferences.industries?.includes(industry) || false}
                  onChange={(e) => handleCheckboxChange('industries', industry, e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <label htmlFor={`industry-${industry}`} className="text-sm">
                  {industry}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Funding Stages Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Funding Stages</h3>
          <p className="text-muted-foreground mb-4">
            Select the funding stages you're interested in
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {fundingStageOptions.map(stage => (
              <div key={stage} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`stage-${stage}`}
                  checked={preferences.fundingStages?.includes(stage) || false}
                  onChange={(e) => handleCheckboxChange('fundingStages', stage, e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <label htmlFor={`stage-${stage}`} className="text-sm">
                  {stage}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Business Models Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Business Models</h3>
          <p className="text-muted-foreground mb-4">
            Select business models you prefer to invest in
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {businessModelOptions.map(model => (
              <div key={model} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`model-${model}`}
                  checked={preferences.businessModels?.includes(model) || false}
                  onChange={(e) => handleCheckboxChange('businessModels', model, e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <label htmlFor={`model-${model}`} className="text-sm">
                  {model}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Locations Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Locations</h3>
          <p className="text-muted-foreground mb-4">
            Select locations where you prefer to invest
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {locationOptions.map(location => (
              <div key={location} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`location-${location}`}
                  checked={preferences.locations?.includes(location) || false}
                  onChange={(e) => handleCheckboxChange('locations', location, e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <label htmlFor={`location-${location}`} className="text-sm">
                  {location}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Market Size Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Market Size</h3>
          <p className="text-muted-foreground mb-4">
            Select the market sizes you're interested in
          </p>
          <div className="grid grid-cols-2 gap-3">
            {marketSizeOptions.map(size => (
              <div key={size} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`size-${size}`}
                  checked={preferences.marketSize?.includes(size) || false}
                  onChange={(e) => handleCheckboxChange('marketSize', size, e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <label htmlFor={`size-${size}`} className="text-sm">
                  {size}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Team Size Range */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Team Size</h3>
          <p className="text-muted-foreground mb-4">
            Select the range of team sizes you prefer
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="team-min" className="block text-sm font-medium mb-1">
                Minimum
              </label>
              <input
                type="number"
                id="team-min"
                min="1"
                max={preferences.teamSize?.max || 50}
                value={preferences.teamSize?.min || 1}
                onChange={(e) => handleRangeChange('teamSize', 'min', parseInt(e.target.value))}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="team-max" className="block text-sm font-medium mb-1">
                Maximum
              </label>
              <input
                type="number"
                id="team-max"
                min={preferences.teamSize?.min || 1}
                value={preferences.teamSize?.max || 50}
                onChange={(e) => handleRangeChange('teamSize', 'max', parseInt(e.target.value))}
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Investment Size Range */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Investment Size ($)</h3>
          <p className="text-muted-foreground mb-4">
            Select your preferred investment range
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="investment-min" className="block text-sm font-medium mb-1">
                Minimum
              </label>
              <input
                type="number"
                id="investment-min"
                min="10000"
                max={preferences.investmentSize?.max || 1000000}
                step="10000"
                value={preferences.investmentSize?.min || 10000}
                onChange={(e) => handleRangeChange('investmentSize', 'min', parseInt(e.target.value))}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="investment-max" className="block text-sm font-medium mb-1">
                Maximum
              </label>
              <input
                type="number"
                id="investment-max"
                min={preferences.investmentSize?.min || 10000}
                step="10000"
                value={preferences.investmentSize?.max || 1000000}
                onChange={(e) => handleRangeChange('investmentSize', 'max', parseInt(e.target.value))}
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Risk Tolerance */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Risk Tolerance</h3>
          <p className="text-muted-foreground mb-4">
            Select your risk tolerance level
          </p>
          <div className="flex space-x-6">
            {['low', 'medium', 'high'].map(level => (
              <div key={level} className="flex items-center space-x-2">
                <input
                  type="radio"
                  id={`risk-${level}`}
                  name="risk-tolerance"
                  value={level}
                  checked={preferences.riskTolerance === level}
                  onChange={() => handleRadioChange('riskTolerance', level)}
                  className="h-4 w-4 border-gray-300"
                />
                <label htmlFor={`risk-${level}`} className="text-sm capitalize">
                  {level}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Return Timeline */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Return Timeline</h3>
          <p className="text-muted-foreground mb-4">
            Select your preferred investment return timeline
          </p>
          <div className="flex space-x-6">
            {['short', 'medium', 'long'].map(timeline => (
              <div key={timeline} className="flex items-center space-x-2">
                <input
                  type="radio"
                  id={`timeline-${timeline}`}
                  name="return-timeline"
                  value={timeline}
                  checked={preferences.returnTimeline === timeline}
                  onChange={() => handleRadioChange('returnTimeline', timeline)}
                  className="h-4 w-4 border-gray-300"
                />
                <label htmlFor={`timeline-${timeline}`} className="text-sm capitalize">
                  {timeline} term
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Save Preferences
          </button>
        </div>
      </form>
    </div>
  );
};

export default PreferenceCollector;
