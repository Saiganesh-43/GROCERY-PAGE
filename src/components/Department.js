import React from 'react'
import './Department.css'
import I1 from '../ImagesFD/NEW ARRIVALS.png';
import I2 from '../ImagesFD/MILKK.png';
import I3 from '../ImagesFD/FRESH PRODUCT.png';
import I4 from '../ImagesFD/MEATT.png';
import I5 from '../ImagesFD/SNACKS.png';
import I6 from '../ImagesFD/FROZEN.png';
const Department = () => {
    return (
        <div className='Department'>
            <div className='H3'><h3>Shop By Department</h3></div>
            <div className='DEPARTMENT'>
            <div className='DEPART'><img src={I1} alt="" /><h4>New Arrivals</h4></div>
            <div className='DEPART'><img src={I2} alt="" /><h4>Dairy & Milk</h4></div>
            <div className='DEPART'><img src={I3} alt="" /><h4>Fresh Product</h4></div>
            <div className='DEPART'><img src={I4} alt="" /><h4>Meat</h4></div>
            <div className='DEPART'><img src={I5} alt="" /><h4>Snacks</h4></div>
            <div className='DEPART'><img src={I6} alt="" /><h4>Frozen</h4></div>
            </div>
        </div>
    )
}

export default Department