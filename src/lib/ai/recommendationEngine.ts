/**
 * AI Recommendation Engine for StartHub
 * 
 * This module provides the core functionality for generating startup recommendations
 * for investors based on their preferences, behavior, and startup data.
 */

import { Startup, Investor, InvestorPreference, RecommendationResult } from '../../types';

/**
 * Main recommendation engine class that handles the generation of personalized
 * startup recommendations for investors.
 */
export class RecommendationEngine {
  /**
   * Generate recommendations for an investor based on their preferences and available startups
   * 
   * @param investor The investor to generate recommendations for
   * @param startups Array of available startups to consider
   * @param limit Maximum number of recommendations to return
   * @returns Array of recommendation results with match scores and explanations
   */
  public generateRecommendations(
    investor: Investor,
    startups: Startup[],
    limit: number = 10
  ): RecommendationResult[] {
    // Filter out startups the investor has already interacted with
    const filteredStartups = this.filterPreviousInteractions(investor, startups);
    
    // Calculate match scores for each startup
    const scoredStartups = filteredStartups.map(startup => {
      const score = this.calculateMatchScore(investor, startup);
      const explanations = this.generateMatchExplanations(investor, startup, score);
      
      return {
        startup,
        score,
        explanations
      };
    });
    
    // Sort by score (descending) and limit results
    return scoredStartups
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  }
  
  /**
   * Filter out startups that the investor has already interacted with
   * (viewed, saved, passed, etc.)
   */
  private filterPreviousInteractions(investor: Investor, startups: Startup[]): Startup[] {
    const interactedIds = new Set([
      ...investor.viewedStartups || [],
      ...investor.savedStartups || [],
      ...investor.passedStartups || []
    ]);
    
    return startups.filter(startup => !interactedIds.has(startup.id));
  }
  
  /**
   * Calculate a match score between an investor and a startup
   * Higher scores indicate better matches
   */
  private calculateMatchScore(investor: Investor, startup: Startup): number {
    let score = 0;
    const preferences = investor.preferences;
    
    // Industry/sector match (weighted heavily)
    if (preferences.industries && preferences.industries.includes(startup.industry)) {
      score += 30;
    }
    
    // Funding stage match
    if (preferences.fundingStages && preferences.fundingStages.includes(startup.fundingStage)) {
      score += 20;
    }
    
    // Location preference match
    if (preferences.locations && preferences.locations.includes(startup.location)) {
      score += 15;
    }
    
    // Market size preference
    if (this.matchesMarketSizePreference(preferences, startup)) {
      score += 10;
    }
    
    // Team size and composition
    if (this.matchesTeamPreference(preferences, startup)) {
      score += 10;
    }
    
    // Business model alignment
    if (preferences.businessModels && preferences.businessModels.includes(startup.businessModel)) {
      score += 15;
    }
    
    // Apply behavioral adjustments based on past interactions
    score = this.applyBehavioralAdjustments(investor, score);
    
    // Normalize score to 0-100 range
    return Math.min(Math.max(score, 0), 100);
  }
  
  /**
   * Check if a startup matches the investor's market size preferences
   */
  private matchesMarketSizePreference(preferences: InvestorPreference, startup: Startup): boolean {
    if (!preferences.marketSize || !startup.marketSize) return false;
    
    const preferredSizes = preferences.marketSize;
    return preferredSizes.includes(startup.marketSize);
  }
  
  /**
   * Check if a startup's team matches the investor's team preferences
   */
  private matchesTeamPreference(preferences: InvestorPreference, startup: Startup): boolean {
    if (!preferences.teamSize || !startup.teamSize) return true;
    
    // Simple range check for team size
    return startup.teamSize >= preferences.teamSize.min && 
           startup.teamSize <= preferences.teamSize.max;
  }
  
  /**
   * Apply adjustments to the score based on the investor's past behavior
   */
  private applyBehavioralAdjustments(investor: Investor, score: number): number {
    let adjustedScore = score;
    
    // Boost score for startups similar to ones the investor has saved
    if (investor.savedStartups && investor.savedStartups.length > 0) {
      const similaritySavedBoost = this.calculateSimilarityBoost(
        5 // Maximum boost points
      );
      adjustedScore += similaritySavedBoost;
    }
    
    // Reduce score for startups similar to ones the investor has passed on
    if (investor.passedStartups && investor.passedStartups.length > 0) {
      const similarityPassedPenalty = this.calculateSimilarityPenalty(
        10 // Maximum penalty points
      );
      adjustedScore -= similarityPassedPenalty;
    }
    
    // Adjust based on investor's explicit feedback if available
    if (investor.startupFeedback) {
      const feedbackAdjustment = this.calculateFeedbackAdjustment(
        15 // Maximum adjustment points
      );
      adjustedScore += feedbackAdjustment;
    }
    
    return adjustedScore;
  }
  
  /**
   * Calculate a boost for startups similar to ones the investor has shown interest in
   */
  private calculateSimilarityBoost(
    maxBoost: number
  ): number {
    // In a real implementation, this would use a similarity algorithm
    // For now, we'll use a placeholder implementation
    return Math.random() * maxBoost;
  }
  
  /**
   * Calculate a penalty for startups similar to ones the investor has passed on
   */
  private calculateSimilarityPenalty(
    maxPenalty: number
  ): number {
    // In a real implementation, this would use a similarity algorithm
    // For now, we'll use a placeholder implementation
    return Math.random() * maxPenalty;
  }
  
  /**
   * Calculate score adjustments based on explicit investor feedback
   */
  private calculateFeedbackAdjustment(
    maxAdjustment: number
  ): number {
    // In a real implementation, this would analyze feedback patterns
    // For now, we'll use a placeholder implementation
    return (Math.random() * 2 - 1) * maxAdjustment;
  }
  
  /**
   * Generate human-readable explanations for why a startup was recommended
   */
  private generateMatchExplanations(
    investor: Investor, 
    startup: Startup, 
    score: number
  ): string[] {
    const explanations: string[] = [];
    const preferences = investor.preferences;
    
    // Industry match explanation
    if (preferences.industries && preferences.industries.includes(startup.industry)) {
      explanations.push(`Matches your interest in ${startup.industry}`);
    }
    
    // Funding stage explanation
    if (preferences.fundingStages && preferences.fundingStages.includes(startup.fundingStage)) {
      explanations.push(`${startup.fundingStage} stage aligns with your investment preferences`);
    }
    
    // Location explanation
    if (preferences.locations && preferences.locations.includes(startup.location)) {
      explanations.push(`Located in ${startup.location}, which you've selected as a preferred region`);
    }
    
    // Business model explanation
    if (preferences.businessModels && preferences.businessModels.includes(startup.businessModel)) {
      explanations.push(`Uses a ${startup.businessModel} business model that matches your preferences`);
    }
    
    // Market size explanation
    if (this.matchesMarketSizePreference(preferences, startup)) {
      explanations.push(`Targets a market size that aligns with your investment strategy`);
    }
    
    // Add a general explanation if we don't have enough specific ones
    if (explanations.length < 2 && score > 50) {
      explanations.push(`Overall strong match based on your investment history and preferences`);
    }
    
    return explanations;
  }
}

/**
 * Factory function to create a recommendation engine instance
 */
export const createRecommendationEngine = (): RecommendationEngine => {
  return new RecommendationEngine();
};
