import React from 'react'
import { CDN_img_logo } from '../utils/constants';



const Header = () => {
    return (
        <div className="header">
            <div className='logo-container'>
                <img src= {CDN_img_logo} alt='FoodLogo'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;