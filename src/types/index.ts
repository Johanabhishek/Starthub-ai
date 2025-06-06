/**
 * Types for the AI recommendation system
 */

// Startup entity
export interface Startup {
  id: string;
  name: string;
  description: string;
  industry: string;
  fundingStage: string;
  location: string;
  foundedYear: number;
  teamSize: number;
  businessModel: string;
  marketSize?: string;
  logo?: string;
  traction?: {
    users?: number;
    revenue?: number;
    growth?: number;
  };
  funding?: {
    raised?: number;
    valuation?: number;
    investors?: string[];
  };
  tags?: string[];
}

// Investor entity
export interface Investor {
  id: string;
  name: string;
  email: string;
  preferences: InvestorPreference;
  savedStartups?: string[];
  passedStartups?: string[];
  viewedStartups?: string[];
  startupFeedback?: Record<string, number>; // startup ID to rating
}

// Investor preferences
export interface InvestorPreference {
  industries?: string[];
  fundingStages?: string[];
  locations?: string[];
  marketSize?: string[];
  businessModels?: string[];
  teamSize?: {
    min: number;
    max: number;
  };
  investmentSize?: {
    min: number;
    max: number;
  };
  riskTolerance?: 'low' | 'medium' | 'high';
  returnTimeline?: 'short' | 'medium' | 'long';
  preferredTags?: string[];
}

// Recommendation result
export interface RecommendationResult {
  startup: Startup;
  score: number;
  explanations: string[];
}

// Investor action on recommendation
export type InvestorAction = 'save' | 'pass' | 'contact' | 'view';

// Feedback on recommendation quality
export interface RecommendationFeedback {
  investorId: string;
  startupId: string;
  relevanceRating: number; // 1-5
  comments?: string;
  timestamp: Date;
}
