import React, { useState } from 'react';
import './ImageSlider.css'; 

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-container">
      <button className="slider-button prev" onClick={handlePrevClick}>
        &#10094;
      </button>
      <img src={images[currentIndex]} alt="slider" className="slider-image" />
      <button className="slider-button next" onClick={handleNextClick}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
