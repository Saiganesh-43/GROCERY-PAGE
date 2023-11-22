import React from 'react'
import './AllProducts.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import P1 from '../ImagesFD/MILK.png'
import P2 from '../ImagesFD/BANANA.png'
import P3 from '../ImagesFD/TANGERINES.png'
import P4 from '../ImagesFD/EGGS.png'
import P5 from '../ImagesFD/STRAWBERRY.png'
import P6 from '../ImagesFD/TOMATO.png'
import P7 from '../ImagesFD/CHICKEN.png'
import P8 from '../ImagesFD/GARLIC.png'
import P9 from '../ImagesFD/GINGER.png'
import P10 from '../ImagesFD/BROCOLLI.png'
import P11 from '../ImagesFD/CABBAGE.png'
import P12 from '../ImagesFD/MEAT.png'
import P13 from '../ImagesFD/POMEGRANATE.png'
import P14 from '../ImagesFD/POTATO.png'
import P15 from '../ImagesFD/WATERMELON.png'
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
                <button className='PMCB'>Add To Cart</button>
            </div>
        </div>
    )
}
const ProductMC = () => {
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
            <div className='PMCH'><h3 >Featured Items</h3><h5>Show All</h5></div>
            <Carousel responsive={responsive}>
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
                    title='WATERMELON'
                />
            </Carousel>
        </div>
    )
}

export default ProductMC;