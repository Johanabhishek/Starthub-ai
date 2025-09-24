import React, { useState } from 'react';
import { Founder, FounderProfile, Startup, ChatMessage } from '../../types';

const defaultFounder: Founder = {
  id: 'founder-001',
  name: 'Your Name',
  email: 'you@example.com',
  profile: {
    bio: '',
    skills: [],
    interests: [],
    experience: [],
    linkedinUrl: '',
    websiteUrl: ''
  }
};

const defaultStartup: Startup = {
  id: '',
  name: '',
  description: '',
  industry: '',
  fundingStage: 'Pre-Seed',
  location: '',
  foundedYear: new Date().getFullYear(),
  teamSize: 1,
  businessModel: '',
  marketSize: '',
  logo: '',
  tags: [],
  traction: { users: 0, revenue: 0, growth: 0 },
  funding: { raised: 0, valuation: 0, investors: [] }
};

const FounderProfilePage: React.FC = () => {
  const [founder, setFounder] = useState<Founder>(defaultFounder);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState<FounderProfile>(founder.profile || {});

  // Startup creation state
  const [creatingStartup, setCreatingStartup] = useState(false);
  const [startupForm, setStartupForm] = useState<Startup>(defaultStartup);

  // Connection + Chat state (lightweight, local-only)
  const [isConnected, setIsConnected] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState('');

  const handleChange = (field: keyof FounderProfile, value: any) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setFounder(prev => ({ ...prev, profile: form }));
    setEditing(false);
  };

  const handleStartupChange = (field: keyof Startup, value: any) => {
    setStartupForm(prev => ({ ...prev, [field]: value }));
  };

  const handleStartupSave = () => {
    const newStartup: Startup = { ...startupForm, id: `startup-${Date.now()}` };
    setFounder(prev => ({ ...prev, startup: newStartup }));
    setCreatingStartup(false);
    setStartupForm(defaultStartup);
  };

  const handleStartupCancel = () => {
    setCreatingStartup(false);
    setStartupForm(defaultStartup);
  };

  // Simulate a connection request from a viewer (e.g., investor)
  const handleRequestConnect = () => {
    if (isConnected) return;
    setIsConnected(true);
    const greeting: ChatMessage = {
      id: `msg-${Date.now()}`,
      senderId: 'investor-guest',
      senderName: 'Investor (guest)',
      text: `Hi ${founder.name}, I'd love to connect and learn more about your startup!`,
      timestamp: Date.now()
    };
    setMessages([greeting]);
    setShowChat(true);
  };

  const handleSendMessage = () => {
    const trimmed = chatInput.trim();
    if (!trimmed) return;
    const myMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      senderId: founder.id,
      senderName: founder.name,
      text: trimmed,
      timestamp: Date.now()
    };
    setMessages(prev => [...prev, myMessage]);
    setChatInput('');
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Founder Profile</h1>

      {/* Profile Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold">{founder.name}</h2>
            <p className="text-gray-600 text-sm">{founder.email}</p>
          </div>
          <div className="flex items-center gap-2">
            {!isConnected && (
              <button
                onClick={handleRequestConnect}
                className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
              >
                Request to Connect
              </button>
            )}
            {isConnected && (
              <button
                onClick={() => setShowChat(v => !v)}
                className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90"
              >
                {showChat ? 'Hide Chat' : 'Open Chat'}
              </button>
            )}
            <button
              onClick={() => setEditing(!editing)}
              className="px-4 py-2 rounded-md border"
            >
              {editing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>
        </div>

        {!editing ? (
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Bio</h3>
              <p className="text-gray-700 whitespace-pre-wrap">{founder.profile?.bio || 'Add your bio'}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-1">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {(founder.profile?.skills || []).map(skill => (
                    <span key={skill} className="px-2 py-1 bg-gray-100 rounded-full text-sm">{skill}</span>
                  ))}
                  {(!founder.profile?.skills || founder.profile?.skills.length === 0) && (
                    <span className="text-gray-500">Add your skills</span>
                  )}
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-1">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {(founder.profile?.interests || []).map(int => (
                    <span key={int} className="px-2 py-1 bg-gray-100 rounded-full text-sm">{int}</span>
                  ))}
                  {(!founder.profile?.interests || founder.profile?.interests.length === 0) && (
                    <span className="text-gray-500">Add your interests</span>
                  )}
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-1">Links</h3>
              <div className="space-y-1 text-sm">
                <p className="text-gray-700">LinkedIn: {founder.profile?.linkedinUrl || '—'}</p>
                <p className="text-gray-700">Website: {founder.profile?.websiteUrl || '—'}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Bio</label>
              <textarea
                className="w-full border rounded-md p-2"
                rows={4}
                value={form.bio || ''}
                onChange={e => handleChange('bio', e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Skills (comma separated)</label>
                <input
                  className="w-full border rounded-md p-2"
                  value={(form.skills || []).join(', ')}
                  onChange={e => handleChange('skills', e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
                />
              </div>
              <div>
                <label className="block text sm font-medium mb-1">Interests (comma separated)</label>
                <input
                  className="w-full border rounded-md p-2"
                  value={(form.interests || []).join(', ')}
                  onChange={e => handleChange('interests', e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">LinkedIn URL</label>
                <input
                  className="w-full border rounded-md p-2"
                  value={form.linkedinUrl || ''}
                  onChange={e => handleChange('linkedinUrl', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Website URL</label>
                <input
                  className="w-full border rounded-md p-2"
                  value={form.websiteUrl || ''}
                  onChange={e => handleChange('websiteUrl', e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <button onClick={() => setEditing(false)} className="px-4 py-2 rounded-md border">Cancel</button>
              <button onClick={handleSave} className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90">Save</button>
            </div>
          </div>
        )}
      </div>

      {/* Startup Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Startup</h2>
          {!founder.startup && !creatingStartup && (
            <button
              onClick={() => setCreatingStartup(true)}
              className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
            >
              Create Startup
            </button>
          )}
        </div>

        {founder.startup && !creatingStartup ? (
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              {founder.startup.logo && (
                <img src={founder.startup.logo} alt={`${founder.startup.name} logo`} className="w-16 h-16 rounded-lg object-cover" />
              )}
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{founder.startup.name}</h3>
                <p className="text-gray-600 text-sm">{founder.startup.industry} • {founder.startup.fundingStage}</p>
                <p className="text-gray-600 text-sm">{founder.startup.location} • Founded {founder.startup.foundedYear}</p>
                <p className="mt-2 text-gray-700">{founder.startup.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {founder.startup.tags?.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div><span className="font-medium">Team Size:</span> {founder.startup.teamSize}</div>
                  <div><span className="font-medium">Business Model:</span> {founder.startup.businessModel}</div>
                  {founder.startup.traction?.users !== undefined && (
                    <div><span className="font-medium">Users:</span> {founder.startup.traction.users.toLocaleString()}</div>
                  )}
                  {founder.startup.funding?.raised !== undefined && (
                    <div><span className="font-medium">Raised:</span> ${founder.startup.funding.raised.toLocaleString()}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : creatingStartup ? (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Create Your Startup</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Startup Name *</label>
                <input type="text" className="w-full border rounded-md p-2" value={startupForm.name} onChange={e => handleStartupChange('name', e.target.value)} placeholder="Enter startup name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Industry *</label>
                <select className="w-full border rounded-md p-2" value={startupForm.industry} onChange={e => handleStartupChange('industry', e.target.value)}>
                  <option value="">Select industry</option>
                  <option value="FinTech">FinTech</option>
                  <option value="HealthTech">HealthTech</option>
                  <option value="EdTech">EdTech</option>
                  <option value="SaaS">SaaS</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="AI/ML">AI/ML</option>
                  <option value="Blockchain">Blockchain</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Funding Stage</label>
                <select className="w-full border rounded-md p-2" value={startupForm.fundingStage} onChange={e => handleStartupChange('fundingStage', e.target.value)}>
                  <option value="Pre-Seed">Pre-Seed</option>
                  <option value="Seed">Seed</option>
                  <option value="Series A">Series A</option>
                  <option value="Series B">Series B</option>
                  <option value="Series C+">Series C+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Location *</label>
                <input type="text" className="w-full border rounded-md p-2" value={startupForm.location} onChange={e => handleStartupChange('location', e.target.value)} placeholder="e.g., San Francisco, CA" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Founded Year</label>
                <input type="number" className="w-full border rounded-md p-2" value={startupForm.foundedYear} onChange={e => handleStartupChange('foundedYear', parseInt(e.target.value))} min={2000} max={new Date().getFullYear()} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Team Size</label>
                <input type="number" className="w-full border rounded-md p-2" value={startupForm.teamSize} onChange={e => handleStartupChange('teamSize', parseInt(e.target.value))} min={1} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Business Model</label>
                <select className="w-full border rounded-md p-2" value={startupForm.businessModel} onChange={e => handleStartupChange('businessModel', e.target.value)}>
                  <option value="">Select model</option>
                  <option value="SaaS">SaaS</option>
                  <option value="Marketplace">Marketplace</option>
                  <option value="Subscription">Subscription</option>
                  <option value="Freemium">Freemium</option>
                  <option value="Transaction">Transaction</option>
                  <option value="Advertising">Advertising</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Market Size</label>
                <select className="w-full border rounded-md p-2" value={startupForm.marketSize} onChange={e => handleStartupChange('marketSize', e.target.value)}>
                  <option value="">Select size</option>
                  <option value="Small (<$1B)">Small (&lt;$1B)</option>
                  <option value="Medium ($1B-$10B)">Medium ($1B-$10B)</option>
                  <option value="Large ($10B-$100B)">Large ($10B-$100B)</option>
                  <option value="Massive (>$100B)">Massive (&gt;$100B)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Description *</label>
              <textarea className="w-full border rounded-md p-2" rows={4} value={startupForm.description} onChange={e => handleStartupChange('description', e.target.value)} placeholder="Describe your startup, what problem it solves, and your solution..." />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Tags (comma separated)</label>
              <input type="text" className="w-full border rounded-md p-2" value={(startupForm.tags || []).join(', ')} onChange={e => handleStartupChange('tags', e.target.value.split(',').map(s => s.trim()).filter(Boolean))} placeholder="e.g., B2B, AI, Enterprise" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Current Users</label>
                <input type="number" className="w-full border rounded-md p-2" value={startupForm.traction?.users || 0} onChange={e => handleStartupChange('traction', { ...startupForm.traction, users: parseInt(e.target.value) || 0 })} min={0} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Monthly Revenue ($)</label>
                <input type="number" className="w-full border rounded-md p-2" value={startupForm.traction?.revenue || 0} onChange={e => handleStartupChange('traction', { ...startupForm.traction, revenue: parseInt(e.target.value) || 0 })} min={0} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Growth Rate (%)</label>
                <input type="number" className="w-full border rounded-md p-2" value={startupForm.traction?.growth || 0} onChange={e => handleStartupChange('traction', { ...startupForm.traction, growth: parseFloat(e.target.value) || 0 })} min={0} step={0.1} />
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button onClick={handleStartupCancel} className="px-4 py-2 rounded-md border">Cancel</button>
              <button onClick={handleStartupSave} disabled={!startupForm.name || !startupForm.industry || !startupForm.location || !startupForm.description} className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 disabled:bg-gray-400">Create Startup</button>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">You haven't created a startup yet. Click "Create Startup" to get started!</p>
        )}
      </div>

      {isConnected && showChat && (
        <div className="fixed bottom-6 right-6 w-80 bg-white rounded-lg shadow-lg border flex flex-col overflow-hidden">
          <div className="px-4 py-3 border-b flex items-center justify-between bg-gray-50">
            <div>
              <p className="text-sm font-semibold">Chat with Investor (guest)</p>
              <p className="text-xs text-gray-500">Connected</p>
            </div>
            <button className="text-xs text-gray-600 hover:text-gray-900" onClick={() => setShowChat(false)}>Close</button>
          </div>
          <div className="p-3 h-64 overflow-y-auto space-y-2">
            {messages.map(m => (
              <div key={m.id} className={`flex ${m.senderId === founder.id ? 'justify-end' : 'justify-start'}`}>
                <div className={`${m.senderId === founder.id ? 'bg-primary text-white' : 'bg-gray-100 text-gray-900'} px-3 py-2 rounded-lg max-w-[85%]`}>
                  <p className="text-xs font-medium mb-0.5">{m.senderName}</p>
                  <p className="text-sm whitespace-pre-wrap">{m.text}</p>
                  <p className="text-[10px] mt-1 opacity-70">{new Date(m.timestamp).toLocaleTimeString()}</p>
                </div>
              </div>
            ))}
            {messages.length === 0 && (
              <p className="text-xs text-gray-500 text-center">No messages yet. Say hello!</p>
            )}
          </div>
          <div className="p-2 border-t flex items-center gap-2">
            <input
              className="flex-1 border rounded-md px-2 py-1 text-sm"
              placeholder="Type a message..."
              value={chatInput}
              onChange={e => setChatInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <button
              className="px-3 py-1.5 rounded-md bg-primary text-white text-sm hover:bg-primary/90 disabled:bg-gray-300"
              onClick={handleSendMessage}
              disabled={!chatInput.trim()}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FounderProfilePage;
