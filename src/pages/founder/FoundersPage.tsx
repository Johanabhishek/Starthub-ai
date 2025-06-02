import React from 'react';
import { Link } from 'react-router-dom';

const FoundersPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/90 to-secondary/90 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build Your Startup with StartHub
            </h1>
            <p className="text-xl md:text-2xl mb-10">
              Access resources, find co-founders, and connect with investors to turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/signup" 
                className="px-8 py-3 bg-white text-primary font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                Create Founder Profile
              </Link>
              <Link 
                to="/signin" 
                className="px-8 py-3 bg-transparent text-white font-medium rounded-md border border-white hover:bg-white/10 transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Founders Choose StartHub
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Co-Founder Matching</h3>
              <p className="text-gray-600">
                Find the perfect co-founder with complementary skills and shared vision through our AI-powered matching system.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Investor Access</h3>
              <p className="text-gray-600">
                Connect with investors who are specifically interested in your industry, stage, and business model.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Startup Resources</h3>
              <p className="text-gray-600">
                Access templates, tools, and guides for every stage of your startup journey, from ideation to scaling.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How It Works for Founders
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20"></div>
              
              {/* Step 1 */}
              <div className="relative mb-16">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right order-2 md:order-1">
                    <h3 className="text-2xl font-bold mb-2">Create Your Profile</h3>
                    <p className="text-gray-600">
                      Build a comprehensive founder profile highlighting your skills, experience, and vision for your startup.
                    </p>
                  </div>
                  <div className="mb-4 md:mb-0 order-1 md:order-2 z-10">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                      <span className="font-bold">1</span>
                    </div>
                  </div>
                  <div className="flex-1 md:pl-8 order-3">
                    {/* Empty div for layout */}
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative mb-16">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 order-2">
                    {/* Empty div for layout */}
                  </div>
                  <div className="mb-4 md:mb-0 order-1 z-10">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                      <span className="font-bold">2</span>
                    </div>
                  </div>
                  <div className="flex-1 md:pl-8 md:text-left order-3">
                    <h3 className="text-2xl font-bold mb-2">Describe Your Startup</h3>
                    <p className="text-gray-600">
                      Share details about your startup idea, current stage, team needs, and funding requirements.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative mb-16">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right order-2 md:order-1">
                    <h3 className="text-2xl font-bold mb-2">Connect with Co-Founders</h3>
                    <p className="text-gray-600">
                      Browse potential co-founders or receive AI-powered recommendations based on your needs.
                    </p>
                  </div>
                  <div className="mb-4 md:mb-0 order-1 md:order-2 z-10">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                      <span className="font-bold">3</span>
                    </div>
                  </div>
                  <div className="flex-1 md:pl-8 order-3">
                    {/* Empty div for layout */}
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 order-2">
                    {/* Empty div for layout */}
                  </div>
                  <div className="mb-4 md:mb-0 order-1 z-10">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                      <span className="font-bold">4</span>
                    </div>
                  </div>
                  <div className="flex-1 md:pl-8 md:text-left order-3">
                    <h3 className="text-2xl font-bold mb-2">Get Funded</h3>
                    <p className="text-gray-600">
                      Showcase your startup to investors and receive interest from those aligned with your vision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Founder Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">JD</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Jane Doe</h3>
                    <p className="text-sm text-gray-500">Founder, TechSolutions</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "StartHub helped me find my technical co-founder within weeks. Our complementary skills made all the difference, and we've now raised our seed round and launched our product."
                </p>
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Result:</span> $1.2M seed funding
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold">MS</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Michael Smith</h3>
                    <p className="text-sm text-gray-500">Founder, GreenEnergy</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "The investor matching on StartHub connected us with VCs who specifically focus on cleantech. The platform's resources also helped us refine our pitch and business model."
                </p>
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Result:</span> $3M Series A funding
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to start your founder journey?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join thousands of founders who are building the future on StartHub.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/signup" 
                className="px-8 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                Create Your Profile
              </Link>
              <Link 
                to="/signin" 
                className="px-8 py-3 bg-transparent text-white font-medium rounded-md border border-white hover:bg-white/10 transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoundersPage;
