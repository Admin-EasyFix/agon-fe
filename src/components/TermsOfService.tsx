import { ArrowLeft } from "lucide-react";

interface TermsOfServiceProps {
  onBack: () => void;
}

function TermsOfService({ onBack }: TermsOfServiceProps) {
  return (
    <div className="legal-page">
      <button className="back-button" onClick={onBack}>
        <ArrowLeft size={20} />
        Back
      </button>
      
      <h1>Terms of Service</h1>
      <p className="last-updated">Last updated: February 7, 2026</p>

      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using Agon, you agree to be bound by these Terms of Service. 
          If you do not agree to these terms, please do not use our service.
        </p>
      </section>

      <section>
        <h2>2. Description of Service</h2>
        <p>
          Agon is a fitness application that integrates with Strava to display your activities 
          and provide AI-powered training recommendations. The service requires you to authorize 
          access to your Strava account.
        </p>
      </section>

      <section>
        <h2>3. User Responsibilities</h2>
        <p>As a user of Agon, you agree to:</p>
        <ul>
          <li>Provide accurate information when connecting your accounts</li>
          <li>Maintain the security of your authentication credentials</li>
          <li>Use the service in compliance with all applicable laws</li>
          <li>Not attempt to interfere with or disrupt the service</li>
        </ul>
      </section>

      <section>
        <h2>4. Strava Integration</h2>
        <p>
          Our service relies on the Strava API. Your use of Strava data through our application 
          is subject to both these terms and Strava's terms of service. We are not responsible 
          for any changes to the Strava API that may affect our service.
        </p>
      </section>

      <section>
        <h2>5. AI Recommendations</h2>
        <p>
          The AI-powered training recommendations provided by Agon are for informational purposes 
          only. They should not be considered as professional medical or fitness advice. Always 
          consult with qualified professionals before making significant changes to your training.
        </p>
      </section>

      <section>
        <h2>6. Intellectual Property</h2>
        <p>
          All content, features, and functionality of Agon are owned by us and are protected by 
          international copyright, trademark, and other intellectual property laws.
        </p>
      </section>

      <section>
        <h2>7. Limitation of Liability</h2>
        <p>
          Agon is provided "as is" without warranties of any kind. We are not liable for any 
          damages arising from your use of the service, including but not limited to direct, 
          indirect, incidental, or consequential damages.
        </p>
      </section>

      <section>
        <h2>8. Modifications to Service</h2>
        <p>
          We reserve the right to modify, suspend, or discontinue the service at any time without 
          notice. We may also update these terms from time to time, and continued use of the 
          service constitutes acceptance of any changes.
        </p>
      </section>

      <section>
        <h2>9. Termination</h2>
        <p>
          We may terminate or suspend your access to the service at any time, without prior notice, 
          for conduct that we believe violates these terms or is harmful to other users or the service.
        </p>
      </section>

      <section>
        <h2>10. Contact</h2>
        <p>
          If you have any questions about these Terms of Service, please contact us through our 
          official channels.
        </p>
      </section>
    </div>
  );
}

export default TermsOfService;
