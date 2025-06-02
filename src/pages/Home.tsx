/**
 * Home Page Component
 * 
 * This component serves as the landing page for the application,
 * showcasing the platform's features and AI-powered capabilities.
 */

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/90 to-secondary/90 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Where ideas meet resources
            </h1>
            <p className="text-xl md:text-2xl mb-10">
              The platform for passionate founders to connect, build teams, and get funded. 
              Your startup journey starts here.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/founder/profile" 
                className="px-8 py-3 bg-white text-primary font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                Start Your Journey
              </Link>
              <Link 
                to="/startup/explore" 
                className="px-8 py-3 bg-transparent text-white font-medium rounded-md border border-white hover:bg-white/10 transition-colors"
              >
                Explore Startups
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How StartHub Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Find Co-Founders</h3>
              <p className="text-gray-600">
                Connect with talented individuals who share your vision and complement your skills.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Showcase Ideas</h3>
              <p className="text-gray-600">
                Present your startup concept to a community of innovators, mentors, and investors.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Access Resources</h3>
              <p className="text-gray-600">
                Get templates, tools, and guidance to build your MVP and scale your startup.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Find Mentorship</h3>
              <p className="text-gray-600">
                Learn from experienced entrepreneurs who've been through the startup journey.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Funding</h3>
              <p className="text-gray-600">
                Connect with angel investors and VCs looking for promising early-stage startups.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Build Community</h3>
              <p className="text-gray-600">
                Join a supportive network of founders facing similar challenges and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Investor Corner Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Investor Corner
            </h2>
            <p className="text-xl text-gray-600">
              Discover promising early-stage startups before they take off. Connect directly with 
              passionate founders and be part of the next big thing.
            </p>
          </div>
          
          {/* AI Feature Highlight */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  New AI Feature
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  AI-Powered Startup Recommendations
                </h3>
                <p className="text-gray-600 mb-6">
                  Our advanced AI analyzes your investment preferences, past behavior, and market trends 
                  to recommend startups that perfectly match your investment strategy.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Personalized recommendations based on your preferences</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Discover startups that match your investment criteria</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Transparent match explanations for informed decisions</span>
                  </li>
                </ul>
                <Link 
                  to="/investor/dashboard" 
                  className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
                >
                  Explore Investment Opportunities
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              <div className="bg-gray-100 flex items-center justify-center p-8">
                <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-4 border-b">
                    <h4 className="font-bold">AI Recommendation Example</h4>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-bold">DS</span>
                      </div>
                      <div>
                        <h5 className="font-bold">DataSphere</h5>
                        <div className="text-sm text-gray-500">AI/ML • San Francisco, CA</div>
                      </div>
                      <div className="ml-auto px-2 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                        92% Match
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Enterprise data analytics platform that unifies disparate data sources and provides AI-powered insights.
                    </p>
                    <div className="bg-gray-50 p-3 rounded-md text-sm">
                      <div className="font-medium mb-2">Why this match:</div>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Matches your interest in AI/ML</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Seed stage aligns with your investment preferences</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Uses a SaaS business model that matches your preferences</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trending Startups Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Trending Startups
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold">ET</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">EcoTech Solutions</h3>
                    <div className="flex space-x-2 mt-1">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">CleanTech</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Seed</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Sustainable technology for reducing carbon footprints in urban environments.
                </p>
                <p className="text-sm text-gray-500">
                  San Francisco, CA
                </p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">MA</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">MindfulAI</h3>
                    <div className="flex space-x-2 mt-1">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">HealthTech</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Pre-seed</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  AI-powered mental health platform for personalized wellness journeys.
                </p>
                <p className="text-sm text-gray-500">
                  Boston, MA
                </p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">FF</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">FinFlow</h3>
                    <div className="flex space-x-2 mt-1">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">FinTech</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Series A</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Democratizing financial services for underserved communities globally.
                </p>
                <p className="text-sm text-gray-500">
                  New York, NY
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              to="/startup/explore" 
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
            >
              View all startups
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to launch your startup?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join thousands of founders who are building the future on StartHub.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/founder/profile" 
                className="px-8 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                Create Your Profile
              </Link>
              <Link 
                to="/investor/dashboard" 
                className="px-8 py-3 bg-transparent text-white font-medium rounded-md border border-white hover:bg-white/10 transition-colors"
              >
                Join as Investor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
