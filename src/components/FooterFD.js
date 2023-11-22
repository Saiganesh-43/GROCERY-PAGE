import React from 'react'
import './FooterFD.css'
import GFP from '../ImagesFD/GF Logo.png'
import { teal } from '@mui/material/colors';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const FooterFD = () => {
  return (
    <div className='FooterFD'>
        <div className='OuterDiv'>
            <div className='Div1'>
                <img src={GFP} alt="Footer GIGA Logo" />
                <h3><LocationOnOutlinedIcon sx={{ color:teal[300], fontSize:33 }} />Bengaluru, India</h3>
                <h3><CallOutlinedIcon sx={{ color:teal[300], fontSize:31 }}/>(+91) 8660688752</h3>
                <h3><EmailOutlinedIcon sx={{ color:teal[300], fontSize:30 }}/>contact@mindstaytechnology.com</h3>
            </div>
            <div className='Div5'>
            <div className='Div2'>
                <h3>Categories</h3>
                <h5>Dairy & milk</h5>
                <h5>Fresh Product</h5>
                <h5>Meat</h5>
                <h5>Snacks</h5>
                <h5>Frozen</h5>
                <h5>Vegetables</h5>
            </div>
            <div className='Div3'>
                <h3>Company</h3>
                <h5>About Us</h5>
                <h5>Contact Us</h5>
                <h5>Privacy & Policy</h5>
                <h5>Payment Method</h5>
            </div>
            </div>
            <div className='Div4'>
                <h3>Join Our Newsletter</h3>
                <h5>Your Email</h5>
                <input type="text" placeholder='Enter Your Email' />
                <h5><button>Subscribe</button></h5>
            </div>
        </div>
        <div className='License'>@2023 Gigafiberplay.All Rights Reserved.</div>
    </div>
  )
}

export default FooterFD