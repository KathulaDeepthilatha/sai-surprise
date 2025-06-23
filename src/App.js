import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import MemorySlide from './components/MemorySlide';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(-1); // -1 means welcome

  const memories = [
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&h=600&fit=crop',
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
      src: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&h=600&fit=crop',
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

  if (currentSlide === -1) {
    return <WelcomeScreen onNext={handleNext} />;
  }

return (
 <div className="memory-slide-wrapper">
  <div className="memory-content-wrapper">
    <MemorySlide memory={memories[currentSlide]} />
    <div className="navigation-buttons">
      <button onClick={handlePrev} disabled={currentSlide === 0}>← Prev</button>
      <button onClick={handleNext} disabled={currentSlide === memories.length - 1}>Next →</button>
    </div>
  </div>
</div>
);
};

export default App;
