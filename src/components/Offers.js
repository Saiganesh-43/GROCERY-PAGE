import React from 'react'
import O1 from '../ImagesFD/O1.png'
import O2 from '../ImagesFD/O2.png'
import O3 from '../ImagesFD/O3.png'
import "./Offers.css"

const Offers = () => {
    return (
        <div className='Offers'>
            <div className='O1'>
                <img src={O1} alt="" />
                <h4>Buy 5 or more Save 2%<br />each</h4>
                <a href="/" >Shop Now </a>
            </div>
            <div className='O2'><img src={O2} alt="" />
                <h4>Collect items worth 99 for <br />Free Delivery</h4>
                <a href="/" >Shop Now </a>
            </div>
            <div className='O3'><img src={O3} alt="" />
                <h4>50% Off on Fresh<br />Vegetables</h4>
                <a href="/" >Shop Now </a>
            </div>
        </div>
    )
}

export default Offers