import React, { useEffect, useMemo, useState } from 'react';
import { mockStartups } from '../../lib/mockData';
import { useLocation } from 'react-router-dom';

const StartupExplore: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Explore Startups</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(startup => (
          <div key={startup.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">{startup.name.substring(0, 2).toUpperCase()}</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{startup.name}</h3>
                  <div className="flex space-x-2 mt-1">
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                      {startup.industry}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                      {startup.fundingStage}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                {startup.description}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                {startup.location}
              </p>
              <button className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartupExplore;
