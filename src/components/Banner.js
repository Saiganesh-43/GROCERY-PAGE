import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.css'
import image1 from '../ImagesFD/FRUITS2.png';
import image2 from '../ImagesFD/BPT.png';
import image3 from '../ImagesFD/VEGIES.png';
import image4 from '../ImagesFD/FRUITS.png';
import image5 from '../ImagesFD/TOOYUM.png';
import image6 from '../ImagesFD/CHICMEAT.png';
// import image7 from '../Images/Banner0.png';
// import image8 from '../Images/Banner01.png';
// import './Carousel.css'

const Data = [  image1 , image2 , image3 , image4 , image5 , image6];

const Carousel = () => {

    return (
        <div className='SliderPro'>
            <Slider
                autoplay
                autoplaySpeed={2500}
                dots
                infinite
            >
                {
                    Data.map(item => (
                        <img
                            className='SliderImg'
                            src={item}
                            alt="SliderImages"

                        />
                    ))
                }
            </Slider>
        </div>

    )
}

export default Carousel