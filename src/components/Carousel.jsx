import React, { useState } from "react";
import "./Carousel.scss";
import carousel_1 from "../assets/carousel_1.png";
import carousel_2 from "../assets/carousel_2.png";
import carousel_3 from "../assets/carousel_3.png";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: carousel_1,
    },
    {
      id: 2,
      image: carousel_2,
    },
    {
      id: 3,
      image: carousel_3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img src={slide.image} alt={slide.title} />
            <div className="carousel-caption">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button className="carousel-control prev" onClick={handlePrev}>
        ❮
      </button>
      <button className="carousel-control next" onClick={handleNext}>
        ❯
      </button>
    </div>
  );
};

export default Carousel;