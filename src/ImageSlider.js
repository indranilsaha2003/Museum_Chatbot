import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

function ImageSlider() {
  const images = [
    '/Images(slide)/global-summit.jpg',
    '/Images(slide)/Indian-Museum-Kolkata.webp',
    '/Images(slide)/Inside-Sarnath-Museum-Varanasi.jpg',
    '/Images(slide)/museums-in-india.jpg',
    '/Images(slide)/people-walking-on-wooden-floor-inside-green-walled-building-34633.jpg',
    '/Images(slide)/Museum-heading.jpg',
    '/Images(slide)/ahmedabad.jpg',
    '/Images(slide)/Heritage transport Museum 1_Sahapedia.org_.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="image-slider">
      <div className="slide-container">
        {images.map((src, index) => {
          const position = (index - currentIndex + images.length) % images.length;
          const zIndex = images.length - Math.abs(position); // Calculate z-index
          return (
            <div 
              key={index} 
              className={`slide ${position === 0 ? 'active' : ''}`}
              style={{
                '--position': position - Math.floor(images.length / 2),
                zIndex: zIndex, // Apply z-index inline
              }}
            >
              <img src={src} alt={`Slide ${index + 1}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ImageSlider;
