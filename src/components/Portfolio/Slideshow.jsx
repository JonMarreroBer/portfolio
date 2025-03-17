import React, { useState, useEffect } from "react";
import styles from "./Portfolio.module.css"; // Make sure to use the correct path

const Slideshow = ({ images, autoPlay = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // Automatically transition to the next slide
  useEffect(() => {
    if (!autoPlay) return; // Stop autoplay if disabled

    const fadeTimer = setTimeout(() => setFade(true), interval - 1000); // Start fade effect
    const intervalTimer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 500);
    }, interval);

    return () => {
      clearTimeout(fadeTimer);
      clearInterval(intervalTimer);
    };
  }, [currentIndex, autoPlay, interval, images.length]);

  // Handle manual selection
  const handleSelect = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(index);
    }, 500);
  };

  return (
    <div className={styles.slideshowContainer}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`${styles.slide} ${index === currentIndex ? styles.active : ""}`}
        />
      ))}

      {/* Manual selection buttons */}
      <div className={styles.slideshowControls}>
        {images.map((_, index) => (
          <button
            key={index}
            className={styles.controlButton}
            onClick={() => handleSelect(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
