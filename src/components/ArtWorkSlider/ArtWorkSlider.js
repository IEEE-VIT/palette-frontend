import React from 'react';
import Slider from "react-slick";

import pic2 from '../../assets/images/pic2.svg';
import pic3 from '../../assets/images/pic3.svg';
import pic4 from '../../assets/images/pic4.svg';
import pic5 from '../../assets/images/pic5.svg';


import './ArtWorkSlider.css';

  var settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0
  };

class ArtWorkSlider extends React.Component {
    render() {
        return(
            <div className="artworkslider">
                <Slider {...settings}>
                    <div>
                        <img src={pic2} alt='carousel-images'/>
                    </div>
                    <div>
                        <img src={pic3} alt='carousel-images' />
                    </div>
                    <div>
                        <img src={pic4} alt='carousel-images' />
                    </div>
                    <div>
                        <img src={pic5} alt='carousel-images' />
                    </div>
                </Slider>
            </div>
        )
    }
    
}

export default ArtWorkSlider;