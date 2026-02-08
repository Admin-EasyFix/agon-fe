import { Zap } from 'lucide-react';
import "../styles/feature.css";

/**
 * Features section showcasing the app's core capabilities
 */
function Features() {
  return (
    <section className="features" aria-label="Features">
      <div className="feature-card">
        <div className="feature-icon" aria-hidden="true">
          <Zap />
        </div>
        <div>
          <h3>Smart Training Plans</h3>
          <p className="description">AI-generated workouts based on your data</p>
        </div>
      </div>
    </section>
  );
}

export default Features;