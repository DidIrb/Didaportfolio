import React from 'react';
import mylogo from '../assets/mylogo.png';

const Navbar = () => {
    return (
        // Navbar for the whole page please add navigation 
        <div className="navbar">
            <div className="nav-items">
                <p className="Items" href="section-name">About Me</p>
                <p className="Items" href="section-name">Skill</p>
                <img src={mylogo} alt="mylogo" className="mylogo"/> 
                {/* <img src="h" alt="animage" /> */}
                <p className="Items" >Projects</p>
                <p className="Items" href="section-name">Contact</p>
            </div>
        </div>
        
    )
}

export default Navbar