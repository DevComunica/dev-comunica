import React, { useState } from 'react'
import './styles.css'

export default function Slider({images}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="slider-container-main">
            <button onClick={prevSlide}>&#10094;</button>
            <div className="image-container">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
            </div>
            <button onClick={nextSlide}>&#10095;</button>
        </div>
    )
}

