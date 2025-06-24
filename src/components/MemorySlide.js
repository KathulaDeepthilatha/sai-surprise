import React, { useEffect, useState } from "react";
import "./MemorySlide.css";
import { Heart } from "lucide-react";
import TypingText from "./TypingText";

const MemorySlide = ({ memory }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setAnimate(false); // reset
    requestAnimationFrame(() => setAnimate(true)); // next tick
  }, [memory]);

console.log('memory.src is:', memory.src);
 const handleImageError = (e) => {
      console.log('Image failed to load:', memory.src);
      console.log('Error:', e);
    };

    const handleImageLoad = () => {
      console.log('Image loaded successfully:', memory.src);
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
            <>
            <img
              src={memory.src}
              alt={memory.caption}
              className="memory-image"
              onError={handleImageError}
              onLoad={handleImageLoad}
            />
                </>
          ) : (
            <div className="media-area">
              <video
                className="memory-image"
                controls
                poster="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop"
              >
                <source src={memory.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
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
