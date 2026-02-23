import doveIcon from '../assets/dove-white.svg';
import "../styles/hero.css";

function Hero() {
  return (
    <header className="hero" aria-label="Hero section">
      <div className="app-icon" aria-hidden="true">
        <img src={doveIcon} alt="" />
      </div>
      <h1>agon</h1>
      <p className="subtitle">Your personal coach</p>
    </header>
  );
}

export default Hero;
