import React, { useState, useEffect } from "react";

const TypingText = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    let timeout;

    const typeNextChar = () => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(typeNextChar, speed);
      }
    };

    typeNextChar(); // Start typing

    return () => clearTimeout(timeout);
  }, [text, speed]);

  return (
    <div
      style={{
        color: "#f1f5f9", // soft white-gray for dark background
        fontSize: "clamp(1.1rem, 4vw, 1.7rem)",
        lineHeight: 1.7,
        textAlign: "center",
        padding: "1rem",
        fontWeight: 300,
        wordBreak: "break-word",
        whiteSpace: "pre-wrap",
        maxWidth: "90%",
        margin: "0 auto",
        overflowWrap: "break-word",
      }}
    >
      {displayedText}
    </div>
  );
};

export default TypingText;
