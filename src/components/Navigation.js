  import React from 'react';
  import { ArrowLeft, ArrowRight } from 'lucide-react';
  import './Navigation.css';

  const Navigation = ({ currentSlide, totalSlides, onPrev, onNext, canGoPrev, canGoNext }) => (
    <div className="navigation">
      <div className="nav-container">
        <button
          onClick={onPrev}
          className="nav-button"
          disabled={!canGoPrev}
          style={{ opacity: canGoPrev ? 1 : 0.5 }}
        >
          <ArrowLeft className="nav-icon" />
        </button>

        <span className="counter">
          {currentSlide + 1} of {totalSlides}
        </span>

        <button
          onClick={onNext}
          className="nav-button"
          disabled={!canGoNext}
          style={{ opacity: canGoNext ? 1 : 0.5 }}
        >
          <ArrowRight className="nav-icon" />
        </button>
      </div>
    </div>
  );

  export default Navigation;