import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ currentSlide, totalSlides }) => {
  const widthPercent = ((currentSlide + 1) / totalSlides) * 100;
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${widthPercent}%` }}></div>
    </div>
  );
};

export default ProgressBar;
