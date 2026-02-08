import { useState, useEffect } from "react";
import type { Activity } from "../types/Activity";
import { apiClient } from "../api/apiClient";
import "../styles/ai-recommendation.css";
import { ActivityCard } from "./ui/activityCard";

interface AIRecommendationCardProps {
  activities: Activity[];
}

export const AIRecommendationCard: React.FC<AIRecommendationCardProps> = ({ activities }) => {
  /**
   * Generates an AI recommendation based on user's activities.
   * Falls back to encouraging message if API call fails.
   */
  const generateRecommendation = async (activities: Activity[]): Promise<Activity> => {
    const defaultMessage: Activity = {
      id: -1,
      name: "Ready to Start Your Journey?",
      date: new Date().toISOString(),
      distance: 0,
      pace: "--:--",
      duration: 0,
      description: "Welcome to Agon! Once you have some activities logged, I'll provide personalized training insights and recommendations based on your performance data.",
      elevation: undefined,
      heartRate: undefined,
      type: "other"
    };

    if (activities.length === 0) {
      return defaultMessage;
    }

    try {
      const response = await apiClient.getSuggestion();
      return response.data as Activity;
    } catch (error) {
      console.error("Error fetching AI recommendation:", error);
      return {
        ...defaultMessage,
        name: "Keep Up The Momentum! 🚀",
        description: `${activities.length} activities logged! Your commitment to training is paying off. Keep building consistency and listen to your body for optimal results.`,
      };
    }
  };
  
  const [recommendation, setRecommendation] = useState<Activity>({
    id: -1,
    name: "",
    date: new Date().toISOString(),
    distance: 0,
    pace: "--:--",
    duration: 0,
    description: "",
    elevation: undefined,
    heartRate: undefined,
    type: "other"
  });

  useEffect(() => {
    const fetchRecommendation = async () => {
      const result = await generateRecommendation(activities);
      setRecommendation(result);
    };
    fetchRecommendation();
  }, [activities]);

  return (
    <ActivityCard activity={recommendation} className="ai-recommendation-card" />
  ) ;
};