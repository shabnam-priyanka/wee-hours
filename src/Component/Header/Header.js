import React from 'react';
import logo from '../../image/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt=""/>
            <nav>
                <a href="/course">Courses</a>
                <a href="/description">Course Description</a>
                <a href="/price">Price</a>
            </nav>
            <marquee>Limited time offer 92% off from all courses</marquee>
        </div>
    );
};

export default Header;