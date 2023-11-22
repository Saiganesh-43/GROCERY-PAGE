import React from 'react'
import "./FreshFood.css"
import Iphone from "../ImagesFD/Iphone.png"
const FreshFood = () => {
    return (
        <div className='Gradient'>
            <div className='Info'>
                <div><h1>Start your day with Fresh Foods</h1></div>
                <div className='FDCP'>
                    <button>Free Delivery</button>
                    <button>Combo Packs</button>
                </div>
            </div>
            <div className='SMI'>
                <img src={Iphone} alt="Iphone" />
            </div>
        </div>
    )
}

export default FreshFood;