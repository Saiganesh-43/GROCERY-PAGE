import React from 'react'
import './AllProducts.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import P1 from '../ImagesFD/AHAAR TOORDAL.png'
import P2 from '../ImagesFD/CHUTNEY GINGER.png'
import P3 from '../ImagesFD/ASHIRWAAD AATA.png'
import P4 from '../ImagesFD/MADHUR SUGAR.png'
import P5 from '../ImagesFD/TATA SALT.png'
import P6 from '../ImagesFD/FORTUNE SUN OIL.png'
import P7 from '../ImagesFD/MTR SPICY.png'
import P8 from '../ImagesFD/FORTUNE SUNLIGHT.png'
import P9 from '../ImagesFD/TATA SAMPPAN.png'
import P10 from '../ImagesFD/MTR SAMBAR.png'
import P11 from '../ImagesFD/MTR RASSAM.png'
import P12 from '../ImagesFD/IDLI RAVA.png'
import P13 from '../ImagesFD/TATA BESAN.png'
import P14 from '../ImagesFD/ASHIRVAAD SELECT.png'
import P15 from '../ImagesFD/EASTERN.png'
import P16 from '../ImagesFD/MAGGI MASALA NOODLES.png'
const Productdetails = ({ image, price, title }) => {
    return (
        <div className='Product_Details'>
            <div className='Product_Image'>
                <img src={image} alt="Product_Image" />
                <h6 className='Product_Price'>
                    <strong>$</strong>
                    <strong>{price}</strong>
                </h6>
                <h4 className='Product_Title'>{title}</h4>
                <button className='PMCB'><p>Add To Cart</p></button>
            </div>
        </div>
    )
}
const BestSeller = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2.4
        }
    };
    return (
        <div className='PMC'>
            <div><h3 className='PMCH'>Best Seller In Your Area</h3></div>
            <Carousel responsive={responsive} >
                <Productdetails
                    image={P1}
                    price={12.6}
                    title='MILK'
                />
                <Productdetails
                    image={P2}
                    price={98.5}
                    title='BANANA'
                />
                <Productdetails
                    image={P3}
                    price={3.5}
                    title='TANGERINES'
                />
                <Productdetails
                    image={P4}
                    price={11}
                    title='EGGS'
                />
                <Productdetails
                    image={P5}
                    price={18}
                    title='STRAWBERRY'
                />
                <Productdetails
                    image={P6}
                    price={70}
                    title='TOMATO'
                />
                <Productdetails
                    image={P7}
                    price={90}
                    title='CHICKEN'
                />
                <Productdetails
                    image={P8}
                    price={12.30}
                    title='GARLIC'
                />
                <Productdetails
                    image={P9}
                    price={10}
                    title='GINGER'
                />
                <Productdetails
                    image={P10}
                    price={50.6}
                    title='BROCOLLI'
                />
                <Productdetails
                    image={P11}
                    price={10.9}
                    title='CABBAGE'
                />
                <Productdetails
                    image={P12}
                    price={10.56}
                    title='MEAT'
                />
                <Productdetails
                    image={P13}
                    price={14.9}
                    title='POMEGRANATE'
                />
                <Productdetails
                    image={P14}
                    price={89}
                    title='POTATO'
                />
                <Productdetails
                    image={P15}
                    price={56}
                    title='WATER MELON'
                />
                 <Productdetails
                    image={P16}
                    price={98.5}
                    title='MAGGI'
                />
            </Carousel>
        </div>
    )
}

export default BestSeller;