import React from 'react';
import { Link } from 'react-router-dom';

const FoundersPage: React.FC = () => {
  return (
    <div>
      {/* Enhanced Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="max-w-5xl mx-auto text-center">
            {/* Trust Badge */}
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur rounded-full text-sm font-medium mb-8">
              🏆 Trusted by 500+ Successful Founders
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Turn Your Vision Into 
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Reality</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-4xl mx-auto leading-relaxed">
              Join India's most active founder community. Find perfect co-founders, 
              connect with investors, and access everything you need to build your startup.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
              <Link 
                to="/founder/profile" 
                className="px-10 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl text-lg"
              >
                🚀 Start Building Now
              </Link>
              <Link 
                to="/startup/explore" 
                className="px-10 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white hover:bg-white/10 transition-all text-lg"
              >
                🔍 Explore Success Stories
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm text-gray-200">Active Founders</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">80%</div>
                <div className="text-sm text-gray-200">Find Co-founders</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">₹50Cr+</div>
                <div className="text-sm text-gray-200">Funding Raised</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why 500+ Founders Choose StartHub
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to go from idea to funded startup in one platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">AI-Powered Co-Founder Matching</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our smart algorithm analyzes skills, experience, and personality to find co-founders who perfectly complement your strengths.
              </p>
              <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
                <div className="text-sm font-semibold text-blue-700">⚡ 92% Success Rate</div>
                <div className="text-xs text-gray-600 mt-1">Average time to match: 7 days</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100 group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Direct Investor Access</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Skip the cold emails. Connect directly with 200+ active investors who are specifically looking for startups in your industry and stage.
              </p>
              <div className="bg-white/80 rounded-lg p-4 border border-green-200">
                <div className="text-sm font-semibold text-green-700">💰 ₹50Cr+ Funded</div>
                <div className="text-xs text-gray-600 mt-1">200+ active investors on platform</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100 group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Complete Startup Toolkit</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From pitch deck templates to legal documents, get access to 100+ proven resources that have helped startups raise millions.
              </p>
              <div className="bg-white/80 rounded-lg p-4 border border-purple-200">
                <div className="text-sm font-semibold text-purple-700">📚 100+ Resources</div>
                <div className="text-xs text-gray-600 mt-1">Templates, guides & expert advice</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your Journey to Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From idea to funded startup in 4 simple steps
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-all duration-300">
                    <span className="text-white font-bold text-2xl">1</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">⚡</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Create Profile</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Build your founder profile in 5 minutes. Showcase your skills, experience, and vision.
                </p>
                <div className="mt-4 text-xs text-gray-500 bg-white rounded-full px-3 py-1 inline-block">
                  5 min setup
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-all duration-300">
                    <span className="text-white font-bold text-2xl">2</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">🎯</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Find Matches</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our AI finds perfect co-founders and investors based on your needs and preferences.
                </p>
                <div className="mt-4 text-xs text-gray-500 bg-white rounded-full px-3 py-1 inline-block">
                  AI-powered
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-all duration-300">
                    <span className="text-white font-bold text-2xl">3</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">🤝</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Connect & Build</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Start meaningful conversations and build your founding team with the right people.
                </p>
                <div className="mt-4 text-xs text-gray-500 bg-white rounded-full px-3 py-1 inline-block">
                  Direct messaging
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-all duration-300">
                    <span className="text-white font-bold text-2xl">4</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">💰</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Get Funded</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Present to investors, raise funding, and scale your startup to new heights.
                </p>
                <div className="mt-4 text-xs text-gray-500 bg-white rounded-full px-3 py-1 inline-block">
                  Average: 3 months
                </div>
              </div>
            </div>

            {/* Progress Arrow */}
            <div className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 w-full">
              <div className="flex justify-between items-center px-20">
                <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link 
              to="/founder/profile" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Start Your Journey Today
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Enhanced Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Success Stories That Inspire
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real founders, real results, real impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Success Story 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl overflow-hidden border border-blue-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="flex -space-x-2 mr-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-white font-bold">J</span>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-white font-bold">A</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Rajesh & Priya</h3>
                    <p className="text-blue-600 font-medium">Co-founders, TechFlow AI</p>
                  </div>
                </div>
                
                <blockquote className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                  "StartHub's AI matched us perfectly - I had the technical skills, Priya had the business acumen. 
                  Within 6 months, we went from strangers to co-founders to raising our seed round!"
                </blockquote>
                
                <div className="bg-white/80 rounded-xl p-4 border border-blue-200">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">₹3.5Cr</div>
                      <div className="text-sm text-gray-600">Seed Funding</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">6 months</div>
                      <div className="text-sm text-gray-600">To funding</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Success Story 2 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl overflow-hidden border border-green-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="flex -space-x-2 mr-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-white font-bold">A</span>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-white font-bold">S</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">Arjun & Sneha</h3>
                    <p className="text-green-600 font-medium">Co-founders, GreenTech Solutions</p>
                  </div>
                </div>
                
                <blockquote className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                  "The investor connections on StartHub were incredible. We pitched to 5 VCs in our first month 
                  and closed our Series A with a fund that truly understands our mission."
                </blockquote>
                
                <div className="bg-white/80 rounded-xl p-4 border border-green-200">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-green-600">₹15Cr</div>
                      <div className="text-sm text-gray-600">Series A</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">50+</div>
                      <div className="text-sm text-gray-600">Employees</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* View More Success Stories */}
          <div className="text-center mt-12">
            <Link 
              to="/startup/explore" 
              className="inline-flex items-center px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 font-medium rounded-xl hover:border-gray-300 hover:shadow-lg transition-all"
            >
              View More Success Stories
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Ready to Build the 
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Next Big Thing?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Join 500+ ambitious founders who are already building the future. 
              Your perfect co-founder and first investor are waiting.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
              <Link 
                to="/founder/profile" 
                className="px-12 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl text-lg"
              >
                🚀 Start Building Today
              </Link>
              <Link 
                to="/startup/explore" 
                className="px-12 py-5 bg-white/10 backdrop-blur text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all text-lg"
              >
                🔍 Explore Startups
              </Link>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-300">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                100% Free Forever
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
                Setup in Under 5 Minutes
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-gray-300 mb-4">Trusted by founders from</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="text-lg font-semibold">🏢 IIT • NIT • BITS</div>
                <div className="text-lg font-semibold">🚀 Ex-Zomato • Flipkart • Paytm</div>
                <div className="text-lg font-semibold">💼 Ex-McKinsey • BCG • Bain</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoundersPage;
