import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import carouselImage from '../../assets/images/solveProblems.svg';

import './ArtWorkCarousel.css';

const ArtWorkCarousel = () => {
    return(
        <div className="carousel">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carouselImage}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carouselImage}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carouselImage}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ArtWorkCarousel;