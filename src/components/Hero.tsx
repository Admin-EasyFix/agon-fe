import doveIcon from '../assets/dove.svg';
import "../styles/hero.css";

function Hero() {
  return (
    <header className="hero" aria-label="Hero section">
      <div className="app-icon" aria-hidden="true">
        <img src={doveIcon} alt="" />
      </div>
      <h1>Agon</h1>
      <p className="subtitle">AI-powered training insights for athletes</p>
    </header>
  );
}

export default Hero;
