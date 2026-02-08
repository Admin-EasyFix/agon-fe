import type { AxiosInstance } from "axios";
import axios from "axios";
import type { Activity } from "../types/Activity";
import type { User } from "../types/User";

export class ApiClient {
  private client: AxiosInstance;

  constructor() {
    const baseUrl = import.meta.env.VITE_API_URL;
    if (!baseUrl) {
      throw new Error(
        "VITE_API_URL is not set! Please add it to your .env file."
      );
    }

    this.client = axios.create({
      baseURL: baseUrl
    });
  }

  /**
   * Set the authentication token for API requests
   */
  setToken(token: string | null): void {
    if (token) {
      this.client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete this.client.defaults.headers.common["Authorization"];
    }
  }

  /**
   * Check if an authentication token is set
   */
  hasToken(): boolean {
    return !!this.client.defaults.headers.common["Authorization"];
  }

  /**
   * Get Strava authorization URL for OAuth flow
   */
  getAuthorizationUrl(redirectUri: string) {
    return this.client.get("/api/strava/auth/authorize", {
      params: { redirect_uri: redirectUri }
    });
  }

  /**
   * Deauthorize and revoke the current token
   */
  deauthorize() {
    return this.client.post<void>("/api/strava/auth/deauthorize");
  }

  /**
   * Fetch user's Strava activities
   */
  getActivities() {
    return this.client.get<Activity[]>("/api/strava/activities");
  }

  /**
   * Get AI-generated training suggestion based on activities
   */
  getSuggestion() {
    return this.client.get<Activity>("/api/suggest");
  }

  /**
   * Fetch user profile information
   */
  getUserProfile() {
    return this.client.get<User>("/api/users/profile");
  }
}

export const apiClient = new ApiClient();