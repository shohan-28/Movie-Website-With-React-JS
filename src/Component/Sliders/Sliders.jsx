import React from 'react';
import './Slider.css'; // CSS file for animation
import banner from "../../assets/images/banner.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import movie from "../../assets/images/movie.jpg";
import squad from "../../assets/images/squad.webp";
import Wednesday from "../../assets/images/Wednesday.webp";

const images = [
    banner,
    banner2,
    movie,
    squad,
    Wednesday,
];

const Sliders = () => {
    return (
        <div className="slider-container">
            {images.map((src, index) => (
                <div
                    key={index}
                    className="slide"
                    style={{ animationDelay: `${index * 2}s` }}
                >
                    <img src={src} alt={`Slide ${index}`} />
                </div>
            ))}
        </div>
    );
};

export default Sliders;