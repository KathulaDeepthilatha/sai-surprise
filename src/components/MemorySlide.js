import React, { useEffect, useState } from "react";
import "./MemorySlide.css";
import { Heart } from "lucide-react";
import TypingText from "./TypingText";

const MemorySlide = ({ memory }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    requestAnimationFrame(() => setAnimate(true));
  }, [memory]);

  const handleImageError = (e) => {
    console.log('Image failed to load:', memory.src);
  };

  const getSrc = () => {
    if (memory.type === 'image') {
      return `http://localhost:5000/uploads/${memory.src}`;
    }
    return memory.src;
  };

  if (memory.type === "final") {
    return (
      <div className="memory-final">
        <div>
          <div className="final-heart">
            <Heart className="final-heart-icon" />
          </div>
          <div className="final-message-text">
            <TypingText text={memory.message} speed={40} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="memory-slide">
      <div className={`memory-card ${animate ? "animate" : ""}`}>
        <div className="media-area">
          {memory.type === "image" ? (
            <img
              src={getSrc()}
              alt={memory.caption}
              className="memory-image"
              onError={handleImageError}
            />
          ) : (
            <video className="memory-image" controls>
              <source src={memory.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className="memory-content">
          <h2 className={`memory-caption ${animate ? "animate" : ""}`}>
            {memory.caption}
          </h2>
          <p className={`memory-message ${animate ? "animate" : ""}`}>
            {memory.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemorySlide;
