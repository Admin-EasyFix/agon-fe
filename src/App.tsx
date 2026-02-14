import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LoginCard from "./components/LoginCard";
import { ActivityListCard } from "./components/ActivityListCard";
import { AIRecommendationCard } from "./components/AIRecommendationCard";
import Navbar from "./components/Navbar";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import { useEffect, useState } from "react";
import { apiClient } from "./api/apiClient";
import { useStravaActivities } from "./hooks/useStravaActivities";

type Page = "home" | "privacy" | "terms";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [token, setToken] = useState<string | null>(() => {
    const localToken = localStorage.getItem("auth_token");
    if (localToken) {
      apiClient.setToken(localToken);
      return localToken;
    }
    return null;
  });
  
  const { activities, loading, error: apiError, refetch } = useStravaActivities(token);

  const handleNavigate = (page: "privacy" | "terms") => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setCurrentPage("home");
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.replace(/^#\/?/, ""));
    const urlToken = params.get("token");

    if (urlToken) {
      localStorage.setItem("auth_token", urlToken);
      setToken(urlToken);
      apiClient.setToken(urlToken);
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  if (currentPage === "privacy") {
    return (
      <main>
        <div className="container">
          <PrivacyPolicy onBack={handleBack} />
          <Footer onNavigate={handleNavigate} />
        </div>
      </main>
    );
  }

  if (currentPage === "terms") {
    return (
      <main>
        <div className="container">
          <TermsOfService onBack={handleBack} />
          <Footer onNavigate={handleNavigate} />
        </div>
      </main>
    );
  }
  const isAuthenticated = apiClient.hasToken();

  return (
    <main>
      <div className="container">
        {!isAuthenticated ? (
          <div className="auth-layout">
            <Hero />
            <Features />
            <LoginCard />
          </div>
        ) : (
          <div>
            <Navbar />
            <section className="activity-center-wrapper" aria-label="Activities">
              {loading ? (
                <div className="loading-state">
                  <div className="loading-title">Loading activities...</div>
                  <div className="loading-subtitle">Fetching your latest workouts from Strava</div>
                </div>
              ) : apiError ? (
                <div className="error-state">
                  <div className="error-title">Error loading activities</div>
                  <div className="error-message">{apiError}</div>
                  <button className="retry-button" onClick={refetch}>
                    Retry
                  </button>
                </div>
              ) : (
                <div className="authenticated-content">
                  <AIRecommendationCard activities={activities} />
                  <ActivityListCard activities={activities} />
                </div>
              )}
            </section>
          </div>
        )}
        <Footer onNavigate={handleNavigate} />
      </div>
    </main>
  );
}

export default App;