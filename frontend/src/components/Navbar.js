import React from 'react';
import mylogo from '../assets/mylogo.png';

const Navbar = () => {
    return (
        // Navbar for the whole page
        <div className="navbar">
            <div className="nav-items">
                <p className="Items" href="section-name">About Me</p>
                <p className="Items" href="section-name">Skill</p>
                <img src={mylogo} alt="mylogo" className="mylogo"/>
                <p className="Items" >Projects</p>
                <p className="Items" href="section-name">Contact</p>
            </div>
        </div>
        // adding the design element here this is for decoration purposes only
        
    )
}

export default Navbar