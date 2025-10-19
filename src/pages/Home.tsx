/**
 * Home Page Component - "GitHub for Startups" Version
 * 
 * Updated with the powerful GitHub positioning and honest traction metrics
 */

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* GitHub for Startups Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* New Positioning Badge */}
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm font-medium mb-6">
              🚀 The GitHub for world's Startup Ecosystem
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Where Startups
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Come to Life</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto">
              Just like GitHub transformed how developers collaborate, StartHub is transforming how founders build companies. 
              Showcase your venture, find co-founders, connect with investors.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link 
                to="/founder/profile" 
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg text-lg"
              >
                🚀 Create Your Profile
              </Link>
              <Link 
                to="/startup/explore" 
                className="px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white/10 transition-all text-lg"
              >
                🔍 Explore Startups
              </Link>
            </div>

            {/* Updated Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-200">
              <div className="flex items-center">
                <span className="text-green-400 mr-1">✓</span>
                Open Source for Startups
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-1">✓</span>
                Community-Driven
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-1">✓</span>
                Transparent & Collaborative
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Honest Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Early Traction & Vision</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've proven the foundation works. Here's our current progress and where we're heading.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">60+</div>
              <div className="text-gray-600 font-medium">Early Adopters</div>
              <div className="text-sm text-gray-400">Creating profiles daily</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">25+</div>
              <div className="text-gray-600 font-medium">Startup Profiles</div>
              <div className="text-sm text-gray-400">Real founder ventures</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">100%</div>
              <div className="text-gray-600 font-medium">Engagement Rate</div>
              <div className="text-sm text-gray-400">All users create profiles</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform">∞</div>
              <div className="text-gray-600 font-medium">Potential</div>
              <div className="text-sm text-gray-400">With proper scaling</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* GitHub Analogy Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              GitHub for Startups
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Just like GitHub revolutionized software development by making code social and collaborative, 
              we're doing the same for entrepreneurship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* GitHub Column */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">GH</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">GitHub</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Developers showcase code repositories</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Discover and collaborate on projects</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Recruiters find talented developers</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Transparent contribution history</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Community-driven development</span>
                </div>
              </div>
            </div>

            {/* StartHub Column */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">SH</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">StartHub</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Founders showcase startup ventures</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Discover and collaborate on startups</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Investors find promising ventures</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Transparent traction & progress</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Community-driven entrepreneurship</span>
                </div>
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">The Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                GitHub created the world's largest developer community and became a $7.5B company. 
                We're building the same for India's startup ecosystem - where transparency, collaboration, 
                and community drive innovation. Your startup profile becomes your living pitch deck, 
                updated in real-time as you grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Updated */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How StartHub Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to join India's startup community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Create Your Repository</h3>
              <p className="text-gray-600 mb-6">
                Like a GitHub repo, create your startup profile. Showcase your vision, progress, and what you're building.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm font-medium text-blue-800">⚡ Live & transparent</div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Discover & Connect</h3>
              <p className="text-gray-600 mb-6">
                Explore other startups, find complementary co-founders, and connect with investors who share your vision.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-sm font-medium text-green-800">🎯 AI-powered matching</div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Build Together</h3>
              <p className="text-gray-600 mb-6">
                Collaborate openly, update your progress, and build your startup with the community supporting you.
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="text-sm font-medium text-orange-800">🚀 Community-driven growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Platform Demo */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">See the Platform in Action</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our 60+ early adopters are already creating amazing startup profiles. 
              This is what the platform looks like today, with enhanced features coming soon.
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-4">✅ What's Live Now</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      User authentication & profiles
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Startup profile creation
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Real-time startup discovery
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Responsive design
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      25+ active user profiles
                    </li>
                  </ul>
                </div>
                
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-4">🚀 Coming in future</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">○</span>
                      AI-powered co-founder matching
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">○</span>
                      Direct messaging system
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">○</span>
                      Investor dashboard & connections
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">○</span>
                      Advanced analytics
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">○</span>
                      Tokenized equity integration
                    </li>
                  </ul>
                </div>
              </div>
              
              <Link 
                to="/startup/explore" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Explore Live Platform
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Join the
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Startup Revolution</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Just like GitHub transformed software development, StartHub is transforming entrepreneurship. 
              Be part of building India's startup future.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
              <Link 
                to="/founder/profile" 
                className="px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl text-lg"
              >
                🚀 Create Your Startup Profile
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
                Open Source for Startups
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Transparent & Collaborative
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Community-Driven Growth
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
