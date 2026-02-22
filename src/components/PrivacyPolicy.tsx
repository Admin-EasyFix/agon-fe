import { ArrowLeft } from "lucide-react";

interface PrivacyPolicyProps {
  onBack: () => void;
}

function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="legal-page">
      <button className="back-button" onClick={onBack}>
        <ArrowLeft size={20} />
        Back
      </button>
      
      <h1>Privacy Policy</h1>
      <p className="last-updated">Last updated: February 7, 2026</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to agon. We respect your privacy and are committed to protecting your personal data. 
          This privacy policy explains how we collect, use, and safeguard your information when you use our service.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <p>When you use agon, we may collect the following types of information:</p>
        <ul>
          <li><strong>Strava Data:</strong> With your authorization, we access your Strava activity data including workouts, performance metrics, and profile information.</li>
          <li><strong>Authentication Data:</strong> We store authentication tokens to maintain your session and access your Strava data on your behalf.</li>
          <li><strong>Usage Data:</strong> We may collect information about how you interact with our application.</li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Display your Strava activities and performance data</li>
          <li>Provide AI-powered training recommendations</li>
          <li>Improve and optimize our service</li>
          <li>Maintain the security of our application</li>
        </ul>
      </section>

      <section>
        <h2>4. Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal information. 
          Your authentication tokens are stored securely and we use OAuth2 for secure authentication with Strava.
        </p>
      </section>

      <section>
        <h2>5. Third-Party Services</h2>
        <p>
          Our service integrates with Strava and uses their API. Your use of Strava is governed by 
          Strava's own privacy policy and terms of service. We also use AI services to provide 
          training recommendations.
        </p>
      </section>

      <section>
        <h2>6. Data Retention</h2>
        <p>
          We retain your data only as long as necessary to provide our services. You can disconnect 
          your Strava account at any time, which will remove your access tokens from our system.
        </p>
      </section>

      <section>
        <h2>7. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Request deletion of your data</li>
          <li>Revoke access to your Strava account</li>
          <li>Opt out of data collection where applicable</li>
        </ul>
      </section>

      <section>
        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us through our 
          official channels.
        </p>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
