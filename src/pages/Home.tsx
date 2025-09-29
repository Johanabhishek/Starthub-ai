/**
 * Home Page Component - Enhanced Version
 * 
 * Updated with high-impact features: stats section, improved hero,
 * better CTAs, and mobile-optimized design for maximum engagement.
 */

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Enhanced Hero Section with Better Copy */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Attention-grabbing badge */}
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm font-medium mb-6">
              🚀 Join 500+ Founders Building the Future
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Find Your Perfect
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Co-Founder</span>
              <br />in Minutes
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto">
              Connect with passionate founders, pitch to investors, and scale your startup. 
              Your unicorn journey starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link 
                to="/startup/explore" 
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg text-lg"
              >
                🔍 Find Co-Founders
              </Link>
              <Link 
                to="/founder/profile" 
                className="px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white/10 transition-all text-lg"
              >
                🚀 Start Building
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-200">
              <div className="flex items-center">
                <span className="text-green-400 mr-1">✓</span>
                Free to join
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-1">✓</span>
                Verified founders
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-1">✓</span>
                Real connections
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - High Impact Addition */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-gray-600 font-medium">Active Founders</div>
              <div className="text-sm text-gray-400">Building daily</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">150+</div>
              <div className="text-gray-600 font-medium">Startups Listed</div>
              <div className="text-sm text-gray-400">Across 15+ industries</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">80+</div>
              <div className="text-gray-600 font-medium">Successful Matches</div>
              <div className="text-sm text-gray-400">Co-founders found</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform">₹25Cr+</div>
              <div className="text-gray-600 font-medium">Funding Raised</div>
              <div className="text-sm text-gray-400">By our startups</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section - Simplified & Visual */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How StartHub Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From idea to unicorn in 3 simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Create Your Profile</h3>
              <p className="text-gray-600 mb-6">
                Showcase your skills, experience, and startup vision. Get discovered by the right co-founders.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm font-medium text-blue-800">⚡ Takes only 5 minutes</div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Connect & Match</h3>
              <p className="text-gray-600 mb-6">
                Our AI finds co-founders who complement your skills and share your passion for success.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-sm font-medium text-green-800">🎯 92% success rate</div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Build & Scale</h3>
              <p className="text-gray-600 mb-6">
                Launch your startup together, access funding opportunities, and join our founder community.
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="text-sm font-medium text-orange-800">🚀 Average time to launch: 3 months</div>
              </div>
            </div>
          </div>

          {/* Quick CTA */}
          <div className="text-center mt-12">
            <Link 
              to="/founder/profile" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Start Your Journey Now
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Success Story - Social Proof */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600">Real founders, real results</p>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-gray-100">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="flex -space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      R
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      P
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <blockquote className="text-xl md:text-2xl font-medium text-gray-800 mb-4">
                    "We found each other on StartHub and raised ₹2Cr seed funding within 6 months. 
                    The platform's matching algorithm is incredible!"
                  </blockquote>
                  <div className="text-gray-600">
                    <div className="font-semibold">Rahul & Priya</div>
                    <div>Co-founders of EcoTech Solutions</div>
                    <div className="text-sm mt-2 flex items-center justify-center md:justify-start">
                      <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                      <span className="ml-2">Raised ₹2Cr Seed Funding</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trending Startups - Improved */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">🔥 Trending Startups</h2>
            <p className="text-xl text-gray-600">Discover the next unicorns before they take off</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Enhanced startup cards with more visual appeal */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold">ET</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">EcoTech Solutions</h3>
                      <div className="text-sm text-gray-500">2 co-founders</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-green-600">🔥 Hot</div>
                    <div className="text-xs text-gray-500">50+ views today</div>
                  </div>
                </div>
                
                <div className="flex space-x-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">CleanTech</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">Seed</span>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Sustainable technology for reducing carbon footprints in urban environments.
                </p>
                
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <div className="flex justify-between text-sm">
                    <span>💰 Seeking: ₹5Cr</span>
                    <span>📍 San Francisco</span>
                  </div>
                </div>
                
                <Link 
                  to="/startup/explore" 
                  className="w-full block text-center py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-teal-700 transition-all"
                >
                  Connect Now
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold">MA</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">MindfulAI</h3>
                      <div className="text-sm text-gray-500">3 co-founders</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-purple-600">⚡ Rising</div>
                    <div className="text-xs text-gray-500">30+ views today</div>
                  </div>
                </div>
                
                <div className="flex space-x-2 mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full font-medium">HealthTech</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full font-medium">Pre-seed</span>
                </div>
                
                <p className="text-gray-600 mb-4">
                  AI-powered mental health platform for personalized wellness journeys.
                </p>
                
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <div className="flex justify-between text-sm">
                    <span>💰 Seeking: ₹2Cr</span>
                    <span>📍 Boston</span>
                  </div>
                </div>
                
                <Link 
                  to="/startup/explore" 
                  className="w-full block text-center py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all"
                >
                  Connect Now
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold">FF</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">FinFlow</h3>
                      <div className="text-sm text-gray-500">4 co-founders</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-blue-600">🚀 Funded</div>
                    <div className="text-xs text-gray-500">Series A</div>
                  </div>
                </div>
                
                <div className="flex space-x-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">FinTech</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">Series A</span>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Democratizing financial services for underserved communities globally.
                </p>
                
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <div className="flex justify-between text-sm">
                    <span>💰 Raised: ₹15Cr</span>
                    <span>📍 New York</span>
                  </div>
                </div>
                
                <Link 
                  to="/startup/explore" 
                  className="w-full block text-center py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              to="/startup/explore" 
              className="inline-flex items-center px-8 py-4 bg-white text-gray-800 font-bold rounded-lg border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all"
            >
              View All 150+ Startups
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* Background animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Ready to Build the
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Next Unicorn?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Join thousands of ambitious founders who are already building the future. 
              Your perfect co-founder is waiting.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
              <Link 
                to="/founder/profile" 
                className="px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl text-lg"
              >
                🚀 Start Building Now
              </Link>
              <Link 
                to="/startup/explore" 
                className="px-10 py-5 bg-white/10 backdrop-blur text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all text-lg"
              >
                🔍 Explore Startups
              </Link>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-300">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                100% Free to Join
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No Credit Card Required
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Join in Under 5 Minutes
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
