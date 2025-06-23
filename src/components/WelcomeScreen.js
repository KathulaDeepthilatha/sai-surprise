import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import './WelcomeScreen.css'; // 👈 Link to CSS file
import App from '../App';

const WelcomeScreen = ({ onNext }) => (
  <div className="welcome">
    <div className="welcome-content">
      <div className="heart-container">
        <Heart className="heart-icon" />
      </div>
      <h1 className="welcome-title">A Little Surprise</h1>
      <p className="welcome-description">
        I made something special just for you. Click the button below to see what I've been working on...
      </p>
      <button
        onClick={onNext}
        className="welcome-button"
      >
        Start the Journey
        <ArrowRight className="arrow-icon" />
      </button>
    </div>
  </div>
);

export default WelcomeScreen;
