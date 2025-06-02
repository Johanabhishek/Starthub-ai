/**
 * Mock data for the AI recommendation system
 */

import { Investor, Startup } from '../types';

// Mock investor data
export const mockInvestor: Investor = {
  id: 'inv-001',
  name: 'Alex Johnson',
  email: 'alex@example.com',
  preferences: {
    industries: ['FinTech', 'AI/ML', 'SaaS'],
    fundingStages: ['Seed', 'Series A'],
    locations: ['San Francisco, CA', 'New York, NY', 'Boston, MA'],
    marketSize: ['Medium ($1B-$10B)', 'Large ($10B-$100B)'],
    businessModels: ['SaaS', 'Marketplace', 'Subscription'],
    teamSize: { min: 5, max: 50 },
    investmentSize: { min: 250000, max: 2000000 },
    riskTolerance: 'medium',
    returnTimeline: 'medium',
    preferredTags: ['B2B', 'Enterprise', 'Data Analytics']
  },
  savedStartups: ['startup-003', 'startup-007'],
  passedStartups: ['startup-002', 'startup-005'],
  viewedStartups: ['startup-002', 'startup-003', 'startup-005', 'startup-007']
};

// Mock startup data
export const mockStartups: Startup[] = [
  {
    id: 'startup-001',
    name: 'FinFlow',
    description: 'AI-powered financial management platform for small businesses, automating bookkeeping and providing cash flow predictions.',
    industry: 'FinTech',
    fundingStage: 'Seed',
    location: 'New York, NY',
    foundedYear: 2023,
    teamSize: 8,
    businessModel: 'SaaS',
    marketSize: 'Medium ($1B-$10B)',
    logo: 'https://placehold.co/400x400/4F46E5/FFFFFF?text=FF',
    traction: {
      users: 1200,
      revenue: 180000,
      growth: 15
    },
    funding: {
      raised: 750000,
      valuation: 5000000,
      investors: ['Angel Group A', 'Seed Fund X']
    },
    tags: ['Finance', 'AI', 'SMB', 'B2B']
  },
  {
    id: 'startup-002',
    name: 'MindfulAI',
    description: 'Mental health platform using AI to personalize therapy and wellness journeys, with real-time mood tracking and interventions.',
    industry: 'HealthTech',
    fundingStage: 'Series A',
    location: 'Boston, MA',
    foundedYear: 2021,
    teamSize: 24,
    businessModel: 'Subscription',
    marketSize: 'Large ($10B-$100B)',
    logo: 'https://placehold.co/400x400/22C55E/FFFFFF?text=MA',
    traction: {
      users: 45000,
      revenue: 1200000,
      growth: 22
    },
    funding: {
      raised: 8500000,
      valuation: 40000000,
      investors: ['Health Ventures', 'Tech Capital', 'Wellness Fund']
    },
    tags: ['Mental Health', 'AI', 'B2C', 'Healthcare']
  },
  {
    id: 'startup-003',
    name: 'DataSphere',
    description: 'Enterprise data analytics platform that unifies disparate data sources and provides AI-powered insights for business intelligence.',
    industry: 'AI/ML',
    fundingStage: 'Seed',
    location: 'San Francisco, CA',
    foundedYear: 2022,
    teamSize: 12,
    businessModel: 'SaaS',
    marketSize: 'Large ($10B-$100B)',
    logo: 'https://placehold.co/400x400/3B82F6/FFFFFF?text=DS',
    traction: {
      users: 35,
      revenue: 420000,
      growth: 28
    },
    funding: {
      raised: 2500000,
      valuation: 12000000,
      investors: ['Data Ventures', 'AI Capital', 'Enterprise Fund']
    },
    tags: ['Data Analytics', 'Enterprise', 'B2B', 'AI']
  },
  {
    id: 'startup-004',
    name: 'EcoTech Solutions',
    description: 'Sustainable technology for reducing carbon footprints in urban environments through smart building management systems.',
    industry: 'CleanTech',
    fundingStage: 'Series A',
    location: 'San Francisco, CA',
    foundedYear: 2020,
    teamSize: 32,
    businessModel: 'SaaS',
    marketSize: 'Medium ($1B-$10B)',
    logo: 'https://placehold.co/400x400/10B981/FFFFFF?text=ETS',
    traction: {
      users: 120,
      revenue: 3200000,
      growth: 18
    },
    funding: {
      raised: 12000000,
      valuation: 60000000,
      investors: ['Green Capital', 'Climate Fund', 'Urban Tech Ventures']
    },
    tags: ['Sustainability', 'IoT', 'Smart Buildings', 'B2B']
  },
  {
    id: 'startup-005',
    name: 'RetailAI',
    description: 'AI-powered inventory and demand forecasting platform for retail businesses, reducing waste and optimizing stock levels.',
    industry: 'AI/ML',
    fundingStage: 'Pre-seed',
    location: 'Austin, TX',
    foundedYear: 2023,
    teamSize: 5,
    businessModel: 'SaaS',
    marketSize: 'Medium ($1B-$10B)',
    logo: 'https://placehold.co/400x400/F59E0B/FFFFFF?text=RA',
    traction: {
      users: 18,
      revenue: 90000,
      growth: 25
    },
    funding: {
      raised: 350000,
      valuation: 3000000,
      investors: ['Retail Tech Angels', 'Founder Fund']
    },
    tags: ['Retail', 'AI', 'Inventory Management', 'B2B']
  },
  {
    id: 'startup-006',
    name: 'SecureChain',
    description: 'Blockchain-based security solution for enterprise data protection and compliance, with zero-knowledge proof verification.',
    industry: 'Cybersecurity',
    fundingStage: 'Seed',
    location: 'New York, NY',
    foundedYear: 2022,
    teamSize: 9,
    businessModel: 'SaaS',
    marketSize: 'Large ($10B-$100B)',
    logo: 'https://placehold.co/400x400/6366F1/FFFFFF?text=SC',
    traction: {
      users: 12,
      revenue: 320000,
      growth: 30
    },
    funding: {
      raised: 1800000,
      valuation: 9000000,
      investors: ['Cyber Ventures', 'Blockchain Capital']
    },
    tags: ['Cybersecurity', 'Blockchain', 'Enterprise', 'B2B']
  },
  {
    id: 'startup-007',
    name: 'CloudScale',
    description: 'Multi-cloud infrastructure optimization platform that reduces costs and improves performance for enterprise deployments.',
    industry: 'SaaS',
    fundingStage: 'Series A',
    location: 'Seattle, WA',
    foundedYear: 2021,
    teamSize: 28,
    businessModel: 'SaaS',
    marketSize: 'Large ($10B-$100B)',
    logo: 'https://placehold.co/400x400/8B5CF6/FFFFFF?text=CS',
    traction: {
      users: 85,
      revenue: 2800000,
      growth: 35
    },
    funding: {
      raised: 9500000,
      valuation: 45000000,
      investors: ['Cloud Ventures', 'Enterprise Tech Fund', 'Scale Capital']
    },
    tags: ['Cloud Infrastructure', 'DevOps', 'Enterprise', 'B2B']
  },
  {
    id: 'startup-008',
    name: 'FinFlow',
    description: 'Democratizing financial services for underserved communities globally through mobile-first banking and microloans.',
    industry: 'FinTech',
    fundingStage: 'Series A',
    location: 'New York, NY',
    foundedYear: 2020,
    teamSize: 42,
    businessModel: 'Marketplace',
    marketSize: 'Massive (>$100B)',
    logo: 'https://placehold.co/400x400/EC4899/FFFFFF?text=FF',
    traction: {
      users: 180000,
      revenue: 4500000,
      growth: 40
    },
    funding: {
      raised: 15000000,
      valuation: 80000000,
      investors: ['Impact Ventures', 'Financial Inclusion Fund', 'Global Tech Partners']
    },
    tags: ['Financial Inclusion', 'Mobile Banking', 'Microfinance', 'B2C']
  },
  {
    id: 'startup-009',
    name: 'EdTech Innovators',
    description: 'Personalized learning platform using AI to adapt educational content to individual student needs and learning styles.',
    industry: 'EdTech',
    fundingStage: 'Seed',
    location: 'Boston, MA',
    foundedYear: 2022,
    teamSize: 15,
    businessModel: 'Subscription',
    marketSize: 'Large ($10B-$100B)',
    logo: 'https://placehold.co/400x400/06B6D4/FFFFFF?text=ETI',
    traction: {
      users: 8500,
      revenue: 650000,
      growth: 28
    },
    funding: {
      raised: 3200000,
      valuation: 15000000,
      investors: ['Education Ventures', 'Learning Fund', 'AI in Education']
    },
    tags: ['Education', 'AI', 'Personalized Learning', 'B2B2C']
  },
  {
    id: 'startup-010',
    name: 'SupplyChainAI',
    description: 'AI-powered supply chain optimization platform that predicts disruptions and automatically suggests mitigation strategies.',
    industry: 'AI/ML',
    fundingStage: 'Series A',
    location: 'Chicago, IL',
    foundedYear: 2021,
    teamSize: 23,
    businessModel: 'SaaS',
    marketSize: 'Large ($10B-$100B)',
    logo: 'https://placehold.co/400x400/0EA5E9/FFFFFF?text=SCA',
    traction: {
      users: 42,
      revenue: 3800000,
      growth: 32
    },
    funding: {
      raised: 11000000,
      valuation: 55000000,
      investors: ['Supply Chain Ventures', 'Logistics Fund', 'AI Capital']
    },
    tags: ['Supply Chain', 'Logistics', 'AI', 'B2B']
  }
];
