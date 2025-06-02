import React from 'react';
import PreferenceCollector from '../../components/investor/PreferenceCollector';
import { mockInvestor } from '../../lib/mockData';

const PreferencesPage: React.FC = () => {
  const handlePreferenceUpdate = (updatedPreferences: any) => {
    console.log('Preferences updated:', updatedPreferences);
    // In a real app, this would save to backend
    alert('Preferences saved successfully!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Investment Preferences</h1>
        <p className="text-gray-600 mb-8">
          Customize your investment preferences to receive personalized startup recommendations
          that match your investment strategy and interests.
        </p>
        
        <PreferenceCollector
          initialPreferences={mockInvestor.preferences}
          onSave={handlePreferenceUpdate}
        />
      </div>
    </div>
  );
};

export default PreferencesPage;
