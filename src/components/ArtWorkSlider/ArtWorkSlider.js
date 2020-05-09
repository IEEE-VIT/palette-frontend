import React from 'react';
import Slider from "react-slick";

import carouselImage from '../../assets/images/solveProblems.svg';
import random from '../../assets/images/238.png';

import './ArtWorkSlider.css';

var settings = {
    dots: true,
    className: "center slick-center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 1
  };

class ArtWorkSlider extends React.Component {
    render() {
        return(
            <div>
                <Slider {...settings}>
                    <div>
                        <img src={carouselImage} alt='carousel-images' className="image-size"/>
                    </div>
                    <div>
                        <img src={random} alt='carousel-images' />
                    </div>
                    <div>
                        <img src={carouselImage} alt='carousel-images' />
                    </div>
                    <div>
                    <img src={random} alt='carousel-images' />
                    </div>
                    <div>
                    <img src={carouselImage} alt='carousel-images' />
                    </div>
                    <div>
                    <img src={random} alt='carousel-images' />
                    </div>
                </Slider>
            </div>
        )
    }
    
}

export default ArtWorkSlider;