import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    };
    return (
        <div className='navbar'>
            <div className="navbar-left">
                <p>MyET1.com</p>
            </div>
            <div className="navbar-right">
                <button className='menu-toggle' onClick={toggleMenu}>
                    <FaBars />
                </button>
                <ul className={`nav-links ${isOpen?'open':'close'}`}>
                    <li><Link to='mission' duration={500} offset={-100}>Mission</Link></li>
                    <li><Link to='et-guides' duration={500} offset={-100}>ET1 Guides</Link></li>
                    <li><Link to='services' duration={500} offset={-100}>Services</Link></li>
                    <li><Link to='contact' duration={500} offset={-100}>Contact us</Link></li>
                    <li><Link to='newsletter' duration={500} offset={-100}>Newsletter</Link></li>
                    <li><Link to='clients' duration={500} offset={-100}>Clients</Link></li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar