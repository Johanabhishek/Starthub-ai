import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, getDoc, setDoc, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../../firebase-config'; // Adjust path as needed
import { Founder, FounderProfile, Startup, _ChatMessage } from '../../types';

// Default empty states
const defaultFounder: Founder = { id: '', name: 'Founder', email: '', profile: {} };
const defaultStartup: Startup = {
  id: '', name: '', description: '', industry: '', fundingStage: 'Pre-Seed',
  location: '', foundedYear: new Date().getFullYear(), teamSize: 1,
  businessModel: '', marketSize: '', logo: '', tags: [],
  traction: { users: 0, revenue: 0, growth: 0 },
  funding: { raised: 0, valuation: 0, investors: [] }
};

const FounderProfilePage: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [founder, setFounder] = useState<Founder>(defaultFounder);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState<FounderProfile>({});
  
  const [creatingStartup, setCreatingStartup] = useState(false);
  const [startupForm, setStartupForm] = useState<Startup>(defaultStartup);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        const founderDocRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(founderDocRef);
        if (docSnap.exists()) {
          const founderData = docSnap.data() as any;
          setFounder({
              ...founderData,
              name: `${founderData.firstName || ''} ${founderData.lastName || ''}`.trim() || founderData.name || 'Founder'
          });
          setForm(founderData.profile || {});
        }
      } else {
        console.log("User is not signed in.");
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleProfileChange = (field: keyof FounderProfile, value: any) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleProfileSave = async () => {
    if (!currentUser) return;
    const founderDocRef = doc(db, 'users', currentUser.uid);
    try {
      await setDoc(founderDocRef, { profile: form }, { merge: true });
      setFounder(prev => ({ ...prev, profile: form }));
      setEditing(false);
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  const handleStartupChange = (field: keyof Startup, value: any) => {
    setStartupForm(prev => ({ ...prev, [field]: value }));
  };

  const handleStartupSave = async () => {
    if (!currentUser) {
      console.error("No user is logged in.");
      return;
    }
    if (!startupForm.name || !startupForm.industry || !startupForm.location || !startupForm.description) {
      alert("Please fill in all required startup fields.");
      return;
    }
    setIsLoading(true);
    try {
      const { id, ...startupDataToSave } = startupForm; // Exclude 'id' from the object to save
      const newStartupData = {
        ...startupDataToSave,
        founderId: currentUser.uid,
        createdAt: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, "startups"), newStartupData);
      console.log("Startup successfully created with ID: ", docRef.id);
      
      const founderDocRef = doc(db, 'users', currentUser.uid);
      await setDoc(founderDocRef, { startupId: docRef.id }, { merge: true });
      
      setFounder(prev => ({ ...prev, startupId: docRef.id } as any));
      setCreatingStartup(false);
      alert("Startup created successfully!");
    } catch (error) {
      console.error("Error creating startup: ", error);
      alert("Failed to create startup. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartupCancel = () => {
    setCreatingStartup(false);
    setStartupForm(defaultStartup);
  };

  if (isLoading) {
    return <div>Loading profile...</div>;
  }
  
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
                onChange={e => handleProfileChange('bio', e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Skills (comma separated)</label>
                <input
                  className="w-full border rounded-md p-2"
                  value={(form.skills || []).join(', ')}
                  onChange={e => handleProfileChange('skills', e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Interests (comma separated)</label>
                <input
                  className="w-full border rounded-md p-2"
                  value={(form.interests || []).join(', ')}
                  onChange={e => handleProfileChange('interests', e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">LinkedIn URL</label>
                <input
                  className="w-full border rounded-md p-2"
                  value={form.linkedinUrl || ''}
                  onChange={e => handleProfileChange('linkedinUrl', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Website URL</label>
                <input
                  className="w-full border rounded-md p-2"
                  value={form.websiteUrl || ''}
                  onChange={e => handleProfileChange('websiteUrl', e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <button onClick={() => setEditing(false)} className="px-4 py-2 rounded-md border">Cancel</button>
              <button onClick={handleProfileSave} className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90">Save</button>
            </div>
          </div>
        )}
      </div>

      {/* Startup Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Startup</h2>
          {!(founder as any).startupId && !creatingStartup && (
            <button
              onClick={() => setCreatingStartup(true)}
              className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
            >
              Create Startup
            </button>
          )}
        </div>

        {creatingStartup ? (
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
                   <option value="SaaS">SaaS</option>
                 </select>
               </div>
               <div>
                 <label className="block text-sm font-medium mb-1">Funding Stage</label>
                 <select className="w-full border rounded-md p-2" value={startupForm.fundingStage} onChange={e => handleStartupChange('fundingStage', e.target.value)}>
                   <option value="Pre-Seed">Pre-Seed</option>
                   <option value="Seed">Seed</option>
                 </select>
               </div>
               <div>
                 <label className="block text-sm font-medium mb-1">Location *</label>
                 <input type="text" className="w-full border rounded-md p-2" value={startupForm.location} onChange={e => handleStartupChange('location', e.target.value)} placeholder="e.g., San Francisco, CA" />
               </div>
             </div>
             <div>
               <label className="block text-sm font-medium mb-1">Description *</label>
               <textarea className="w-full border rounded-md p-2" rows={4} value={startupForm.description} onChange={e => handleStartupChange('description', e.target.value)} placeholder="Describe your startup..." />
             </div>
             <div className="flex justify-end gap-2">
               <button onClick={handleStartupCancel} className="px-4 py-2 rounded-md border">Cancel</button>
               <button onClick={handleStartupSave} disabled={isLoading} className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 disabled:bg-gray-400">
                 {isLoading ? 'Saving...' : 'Create Startup'}
               </button>
             </div>
           </div>
        ) : (
          <p className="text-gray-600">{(founder as any).startupId ? 'You have created a startup.' : 'You haven\'t created a startup yet.'}</p>
        )}
      </div>
    </div>
  );
};

export default FounderProfilePage;
