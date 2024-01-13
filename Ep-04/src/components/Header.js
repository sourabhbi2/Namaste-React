import React, { useEffect, useState } from 'react'
import { CDN_img_logo } from '../utils/constants';



const Header = () => {
    const [btnName, setBtnName] = useState("LogIn")

    // console.log('Header rendered');

    // if no dependency [] => useEffect called every time .
    // if dependency [] is empty = [] => useEffect called on initial render(just once)
    // if dependency array is [btnName] => useEffect called everytime when btnName updated 

    useEffect(() => {
        // console.log('useEffect called');
    }, [])

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