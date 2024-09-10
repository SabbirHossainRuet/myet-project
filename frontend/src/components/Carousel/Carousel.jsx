import React, { useState, useEffect } from "react";
import { images } from "../../assets/assets";
import "./Carousel.css";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageList = images.image_list;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Auto transition every 3 seconds

        return () => clearInterval(interval);
    }, [imageList.length]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? imageList.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="carousel">
            {imageList.map((image, index) => (
                <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
                />
            ))}
            <div className="carousel-arrows">
                <button className="arrow prev" onClick={handlePrev}>
                    &#60;
                </button>
                <button className="arrow next" onClick={handleNext}>
                    &#62;
                </button>
            </div>
            <div className="carousel-bubbles">
                {imageList.map((_, index) => (
                    <span
                        key={index}
                        className={`bubble ${currentIndex === index ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
