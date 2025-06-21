import React from 'react';
import './MemorySlide.css';

const MemorySlide = ({ memory }) => {
  if (memory.type === 'final') {
    return (
      <div className="memory-final">
        <div className="final-heart">❤️</div>
        <p className="final-message">{memory.message}</p>
      </div>
    );
  }

  return (
    <div className="memory-slide-container">
      <div className="memory-card">
        <div className="media-area">
          {memory.type === 'image' ? (
            <img src={memory.src} alt={memory.caption} className="memory-image" />
          ) : (
            <video controls className="memory-image">
              <source src={memory.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className="memory-content">
          <h2 className="memory-caption">{memory.caption}</h2>
          <p className="memory-message">{memory.message}</p>
        </div>
      </div>
    </div>
  );
};

export default MemorySlide;
