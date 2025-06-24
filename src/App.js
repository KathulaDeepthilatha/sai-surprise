import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import MemorySlide from './components/MemorySlide';
import Navigation from './components/Navigation';
import ProgressBar from './components/ProgressBar';
import './index.css';
import { BASE_URL } from "./config";

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(-1);
  const [memories, setMemories] = useState([]);

 useEffect(() => {
  fetch(`${BASE_URL}/api/memories`)
    .then(res => res.json())
    .then(data => {
      console.log("Fetched memories:", data); // <-- ADD THIS
      setMemories(data);
    })
    .catch(err => console.error('Error loading memories:', err));
}, []);

  const handleNext = () => {
    setCurrentSlide(prev => Math.min(prev + 1, memories.length - 1));
  };

  const handlePrev = () => {
    setCurrentSlide(prev => Math.max(prev - 1, -1));
  };

  return (
    <>
      <div className="starry-background">
        <div className="moon" />
        {Array.from({ length: 100 }).map((_, i) => {
          const size = Math.random() * 2 + 1;
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const delay = Math.random() * 5;
          return (
            <div key={i} className="star" style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${top}%`,
              left: `${left}%`,
              animationDelay: `${delay}s`
            }} />
          );
        })}
      </div>

      {currentSlide === -1 ? (
        <WelcomeScreen onNext={handleNext} />
      ) : (
        <>
          <MemorySlide memory={memories[currentSlide]} />
          <Navigation
            currentSlide={currentSlide}
            totalSlides={memories.length}
            onPrev={handlePrev}
            onNext={handleNext}
            canGoPrev={currentSlide > 0}
            canGoNext={currentSlide < memories.length - 1}
          />
          <ProgressBar currentSlide={currentSlide} totalSlides={memories.length} />
        </>
      )}
    </>
  );
};

export default App;
