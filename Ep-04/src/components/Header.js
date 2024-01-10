import React, { useState } from 'react'
import { CDN_img_logo } from '../utils/constants';



const Header = () => {
    const [btnName, setBtnName] = useState("LogIn")

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
                  <li><button className='btn-login' onClick={() => {
                  btnName === "LogIn" ? setBtnName('LogOut') : setBtnName('LogIn');
                  }}>{btnName}</button></li>
                </ul>
                
            </div>
        </div>
    )
};

export default Header;