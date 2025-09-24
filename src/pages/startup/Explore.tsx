import React, { useEffect, useMemo, useState } from 'react';
import { mockStartups } from '../../lib/mockData';
import { useLocation } from 'react-router-dom';

const StartupExplore: React.FC = () => {
  const locationHook = useLocation();
  const params = useMemo(() => new URLSearchParams(locationHook.search), [locationHook.search]);

  const [search, setSearch] = useState('');
  const [industry, setIndustry] = useState('');
  const [stage, setStage] = useState('');
  const [location, setLocation] = useState('');
  const [businessModel, setBusinessModel] = useState('');
  const [tagQuery, setTagQuery] = useState('');
  const [connectedIds, setConnectedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const industryParam = params.get('industry');
    if (industryParam) setIndustry(industryParam);
  }, [params]);

  const industries = useMemo(() => Array.from(new Set(mockStartups.map(s => s.industry))).sort(), []);
  const stages = useMemo(() => Array.from(new Set(mockStartups.map(s => s.fundingStage))).sort(), []);
  const locations = useMemo(() => Array.from(new Set(mockStartups.map(s => s.location))).sort(), []);
  const businessModels = useMemo(() => Array.from(new Set(mockStartups.map(s => s.businessModel))).sort(), []);

  const filtered = useMemo(() => {
    const tags = tagQuery
      .split(',')
      .map(t => t.trim().toLowerCase())
      .filter(Boolean);

    return mockStartups.filter(s => {
      const matchesSearch = !search ||
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.description.toLowerCase().includes(search.toLowerCase());
      const matchesIndustry = !industry || s.industry === industry;
      const matchesStage = !stage || s.fundingStage === stage;
      const matchesLocation = !location || s.location === location;
      const matchesBusinessModel = !businessModel || s.businessModel === businessModel;
      const matchesTags = tags.length === 0 || (s.tags || []).some(t => tags.includes(t.toLowerCase()));
      return matchesSearch && matchesIndustry && matchesStage && matchesLocation && matchesBusinessModel && matchesTags;
    });
  }, [search, industry, stage, location, businessModel, tagQuery]);

  const clearFilters = () => {
    setSearch('');
    setIndustry('');
    setStage('');
    setLocation('');
    setBusinessModel('');
    setTagQuery('');
  };

  const handleConnect = (startupId: string) => {
    setConnectedIds(prev => new Set(prev).add(startupId));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Explore Startups</h1>
      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <input
            className="border rounded-md px-3 py-2 text-sm"
            placeholder="Search name or description"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <select className="border rounded-md px-3 py-2 text-sm" value={industry} onChange={e => setIndustry(e.target.value)}>
            <option value="">Industry</option>
            {industries.map(ind => (
              <option key={ind} value={ind}>{ind}</option>
            ))}
          </select>
          <select className="border rounded-md px-3 py-2 text-sm" value={stage} onChange={e => setStage(e.target.value)}>
            <option value="">Stage</option>
            {stages.map(st => (
              <option key={st} value={st}>{st}</option>
            ))}
          </select>
          <select className="border rounded-md px-3 py-2 text-sm" value={location} onChange={e => setLocation(e.target.value)}>
            <option value="">Location</option>
            {locations.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
          <select className="border rounded-md px-3 py-2 text-sm" value={businessModel} onChange={e => setBusinessModel(e.target.value)}>
            <option value="">Business Model</option>
            {businessModels.map(bm => (
              <option key={bm} value={bm}>{bm}</option>
            ))}
          </select>
          <input
            className="border rounded-md px-3 py-2 text-sm"
            placeholder="Tags (comma-separated)"
            value={tagQuery}
            onChange={e => setTagQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between mt-3 text-sm">
          <p className="text-gray-600">{filtered.length} result{filtered.length === 1 ? '' : 's'}</p>
          <button className="px-3 py-1.5 border rounded-md hover:bg-gray-50" onClick={clearFilters}>Clear</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(startup => (
          <div key={startup.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">
                    {startup.name.substring(0, 2).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{startup.name}</h3>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                      {startup.industry}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                      {startup.fundingStage}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                      {startup.businessModel}
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
              <div className="flex items-center justify-between gap-2">
                <button className="flex-1 py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                  View Details
                </button>
                <button
                  onClick={() => handleConnect(startup.id)}
                  disabled={connectedIds.has(startup.id)}
                  className={`flex-1 py-2 px-4 rounded-md transition-colors ${connectedIds.has(startup.id) ? 'bg-gray-200 text-gray-600 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'}`}
                >
                  {connectedIds.has(startup.id) ? 'Requested' : 'Connect'}
                </button>
              </div>
              {startup.tags && startup.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {startup.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center text-gray-600">No startups match your filters.</div>
        )}
      </div>
    </div>
  );
};

export default StartupExplore;
