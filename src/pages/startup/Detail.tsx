import React from 'react';
import { useParams } from 'react-router-dom';
import { mockStartups } from '../../lib/mockData';

const StartupDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const startup = mockStartups.find(s => s.id === id) || mockStartups[0];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mr-4 mb-4 md:mb-0">
                <span className="text-primary text-xl font-bold">
                  {startup.name.substring(0, 2).toUpperCase()}
                </span>
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">{startup.name}</h1>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {startup.industry}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
                    {startup.fundingStage}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
                    {startup.location}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="border-b pb-6 mb-6">
              <h2 className="text-xl font-semibold mb-3">About</h2>
              <p className="text-gray-700">
                {startup.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h2 className="text-xl font-semibold mb-3">Company Details</h2>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Founded</span>
                    <span className="font-medium">{startup.foundedYear}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Team Size</span>
                    <span className="font-medium">{startup.teamSize} employees</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Business Model</span>
                    <span className="font-medium">{startup.businessModel}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Market Size</span>
                    <span className="font-medium">{startup.marketSize}</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">Funding</h2>
                {startup.funding ? (
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Total Raised</span>
                      <span className="font-medium">${(startup.funding.raised || 0).toLocaleString()}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Valuation</span>
                      <span className="font-medium">${(startup.funding.valuation || 0).toLocaleString()}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Investors</span>
                      <span className="font-medium">{startup.funding.investors?.length || 0}</span>
                    </li>
                  </ul>
                ) : (
                  <p className="text-gray-600">Funding information not available</p>
                )}
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Traction</h2>
              {startup.traction ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary">
                      {startup.traction.users?.toLocaleString() || 'N/A'}
                    </div>
                    <div className="text-sm text-gray-600">Users</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary">
                      ${startup.traction.revenue?.toLocaleString() || 'N/A'}
                    </div>
                    <div className="text-sm text-gray-600">Annual Revenue</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary">
                      {startup.traction.growth ? `${startup.traction.growth}%` : 'N/A'}
                    </div>
                    <div className="text-sm text-gray-600">Monthly Growth</div>
                  </div>
                </div>
              ) : (
                <p className="text-gray-600">Traction information not available</p>
              )}
            </div>
            
            <div className="flex justify-center">
              <button className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors">
                Contact Startup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupDetail;
