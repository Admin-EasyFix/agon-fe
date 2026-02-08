import { useState, useEffect, useCallback } from 'react';
import { apiClient } from '../api/apiClient';
import type { Activity } from '../types/Activity';
import { isAxiosError } from 'axios';
import { useLogout } from './useLogout';

interface UseStravaActivitiesResult {
  activities: Activity[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

/**
 * Hook to fetch and manage user's Strava activities
 * Handles authentication errors by logging out the user
 */
export function useStravaActivities(token: string | null): UseStravaActivitiesResult {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { logout } = useLogout();

  const fetchActivities = useCallback(async () => {
    if (!token) {
      setActivities([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await apiClient.getActivities();
      setActivities(response.data);
    } catch (err) {
      if (isAxiosError(err) && err.response?.status === 401) {
        setError('Your session has expired. Please log in again.');
        logout();
        return;
      }

      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch activities';
      console.error('Error fetching activities:', err);
      setError(errorMessage);
      setActivities([]);
    } finally {
      setLoading(false);
    }
  }, [token, logout]);

  useEffect(() => {
    fetchActivities();
  }, [fetchActivities]);

  return {
    activities,
    loading,
    error,
    refetch: fetchActivities
  };
}
