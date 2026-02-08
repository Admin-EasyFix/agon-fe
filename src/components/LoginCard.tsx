import { useState } from "react";
import { apiClient } from "../api/apiClient";
import "../styles/auth.css";

function LoginCard() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = () => {
    setIsLoggingIn(true);
    setError(null);
    
    apiClient
      .getAuthorizationUrl(window.location.origin)
      .then((response) => {
        const url = (response.data as { authorization_url?: string })?.authorization_url;
        if (!url) {
          throw new Error("Missing authorization_url in response");
        }
        window.location.href = url;
      })
      .catch((err) => {
        console.error("Failed to get authorization URL:", err);
        setError("Unable to connect to Strava. Please try again.");
        setIsLoggingIn(false);
      });
  };

  return (
    <section className="login-card" aria-label="Strava login">
      <h2>Connect with Strava</h2>
      <p className="subtitle">
        Connect your Strava account to start analyzing your training data
      </p>
      <button
        className="connect-button"
        onClick={handleLogin}
        disabled={isLoggingIn}
        aria-busy={isLoggingIn}
      >
        {isLoggingIn ? "Connecting..." : "Connect with Strava"}
      </button>
      {error && (
        <p className="error-message" role="alert">
          {error}
        </p>
      )}
      <p className="description">By connecting, you agree to share your activity data with Agon</p>
    </section>
  );
}

export default LoginCard;