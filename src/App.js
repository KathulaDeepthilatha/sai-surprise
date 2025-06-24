import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import MemorySlide from './components/MemorySlide';
import Navigation from './components/Navigation';
import ProgressBar from './components/ProgressBar';
import './index.css';



const App = () => {
  const [currentSlide, setCurrentSlide] = useState(-1); // -1 means welcome

  const memories = [
    {
      type: 'image',
      src: '/trip.jpeg', 
      caption: 'Our first adventure together',
      message: 'Remember this beautiful day? You made everything perfect just by being there.'
    },
    {
      type: 'video',
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      caption: 'Just a small video for you',
      message: 'Because every second spent with you means the world to me.'
    },
    {
      type: 'image',
      src: '/IMG-20240604-WA0065.jpg',
      caption: 'Just because',
      message: 'Every moment with you feels like a dream I never want to wake up from.'
    },
    {
      type: 'final',
      message: 'Thank you for being the most amazing person in my life. I love you more than words can express. ❤️'
    }
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, memories.length - 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, -1));
  };

  return (
    <>
      {/* 🌌 Starry Night Background with Moon & Shooting Stars */}
      <div className="starry-background">
        <div className="moon" />

        {/* Twinkling stars */}
        {Array.from({ length: 100 }).map((_, i) => {
          const size = Math.random() * 2 + 1;
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const delay = Math.random() * 5;
          return (
            <div
              key={`star-${i}`}
              className="star"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${top}%`,
                left: `${left}%`,
                animationDelay: `${delay}s`
              }}
            />
          );
        })}
      </div>

      {/* Memory Content or Welcome */}
      {currentSlide === -1 ? (
        <WelcomeScreen onNext={handleNext} />
      ) : (
        <>
          <MemorySlide key={currentSlide} memory={memories[currentSlide]} />
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


