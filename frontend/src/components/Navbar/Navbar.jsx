import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-left">
                <p>MyET1.com</p>
            </div>
            <div className="navbar-right">
                <ul>
                    <li>Mission</li>
                    <li>ET1 Guides</li>
                    <li>Services</li>
                    <li>Contact us</li>
                    <li>Newsletter</li>
                    <li>Clients</li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar