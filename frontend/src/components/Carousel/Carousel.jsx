import React, { useEffect, useState } from "react";
import { images } from "../../assets/assets";
import "./Carousel.css";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Current image index
    const imageList = images.image_list; // Access image array

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === imageList.length - 1 ? 0 : prevIndex + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [imageList.length]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? imageList.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === imageList.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carousel">
            <div className="carousel-image">
                <img src={imageList[currentIndex].src} alt={imageList[currentIndex].alt} />
                <div className="carousel-arrows">
                    <button className="arrow prev" onClick={handlePrev}>←</button>
                    <button className="arrow next" onClick={handleNext}>→</button>
                </div>
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
