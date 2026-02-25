import { ListChecks, Sparkles } from 'lucide-react';
import "../styles/feature.css";

/**
 * Features section showcasing the app's core capabilities
 */
function Features() {
  return (
    <section className="features" aria-label="Features">
      <div className="feature-card">
        <div className="feature-row">
          <div className="feature-icon" aria-hidden="true">
            <ListChecks />
          </div>
          <div>
            <h3>Descriptions</h3>
            <p className="description">AI-generated descriptions for your activities</p>
          </div>
        </div>
      </div>
      <div className="feature-row">
        <div className="feature-card">
          <div className="feature-icon" aria-hidden="true">
            <Sparkles />
          </div>
          <div>
            <h3>Suggestion</h3>
            <p className="description">AI-powered suggestion for your next activity</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;