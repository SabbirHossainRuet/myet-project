// import React, { useState } from 'react'
// import './Navbar.css'
// import { Link } from 'react-scroll';
// import { FaBars } from 'react-icons/fa';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };
//     return (
//         <div className='navbar'>
//             <div className="navbar-left">
//                 <p>MyET1.com</p>
//             </div>
//             <div className="navbar-right">
//                 <button className='menu-toggle' onClick={toggleMenu}>
//                     <FaBars />
//                 </button>
//                 <ul className={`nav-links ${isOpen ? 'open' : 'close'} g`}>
//                     <li><Link to='mission' duration={500} offset={-100}>Mission</Link></li>
//                     <li><Link to='et-guides' duration={500} offset={-100}>ET1 Guides</Link></li>
//                     <li><Link to='services' duration={500} offset={-100}>Services</Link></li>
//                     <li><Link to='contact' duration={500} offset={-100}>Contact us</Link></li>
//                     <li><Link to='newsletter' duration={500} offset={-100}>Newsletter</Link></li>
//                     <li><Link to='clients' duration={500} offset={-100}>Clients</Link></li>
//                 </ul>
//             </div>

//         </div>
//     )
// }

// export default Navbar

//Second version of the code

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import Logo from "../../assets/logo.jpg";
import './Navbar.css'
import { Link, scroller } from 'react-scroll';
import { HiOutlineBars3 } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { StoreContext } from "../Context/StoreContext";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const { isCallbackFormVisible,
        callbackFormData,
        toggleCallbackForm,
        handleFormChange,
        handleFormSubmit
    } = useContext(StoreContext);

    const iconStyle = { fontSize: '40px' };
    const menuOptions = [
        { text: "Mission", to: "mission" },
        { text: "ET1 Guides", to: "et-guides" },
        { text: "Services", to: "services" },
        { text: "Contact us", to: "contact" },
        { text: "NewsLetter", to: "newsletter" },
        { text: "Clients", to: "clients" },
    ];

    const handleTitleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top
        // Alternatively, you can use:
        // window.location.reload(); // Reload the page
    };

    return (
        <nav>
            <div className="navbar-top">
                <img src={Logo} alt="" onClick={handleTitleClick} style={{ cursor: 'pointer' }} />
                <div className="buttons">
                    <button style={{ backgroundColor: '#00AF6C' }}>Make An Enquiry</button>
                    <button style={{ backgroundColor: '#006DB2' }} onClick={toggleCallbackForm}>Request A Callback</button>
                </div>
                <div className="search-container">
                    <CiSearch style={{ fontSize: '18px' }} />
                    <input type="text" className="search-box" placeholder="Search..." />
                </div>

            </div>
            <div className="navbar-bottom">
                <div className="navbar-links-container">
                    <Link className="li" to="mission" duration={500} offset={-100}>Mission</Link>
                    <Link className="li" to="et-guides" duration={500} offset={-100}>ET1 Guides</Link>
                    <Link className="li" to="services" duration={500} offset={-100}>Services</Link>
                    <Link className="li" to="contact" duration={500} offset={-150}>Contact us</Link>
                    <Link className="li" to="newsletter" duration={500} offset={-200}>Newsletter</Link>
                    <Link className="li" to="clients" duration={500} offset={-100}>Clients</Link>
                </div>
            </div>
            <div className="navbar-menu-container">
                <HiOutlineBars3 style={iconStyle} onClick={() => setOpenMenu(true)} />
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right" >
                <Box
                    sx={{ width: 250, backgroundColor: 'orange', height: '100%', color: 'black' }}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding onClick={() => {
                                scroller.scrollTo(item.to, {
                                    duration: 500,
                                    offset: -100, // Adjust the offset as needed
                                });
                                setOpenMenu(false); // Close the drawer when an item is clicked
                            }}>
                                <ListItemButton>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>
            </Drawer>
            {/* Callback Form */}
            {isCallbackFormVisible && (
                <div className="callback-form-container">
                    <div className="callback-form-container-left">
                        <img src={Logo} alt="" onClick={handleTitleClick} style={{ cursor: 'pointer' }} />
                    </div>
                    <div className="callback-form-container-right">
                        <form onSubmit={handleFormSubmit}>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={callbackFormData.name || ''}
                                    onChange={handleFormChange}
                                    required
                                />
                            </label>
                            <label>
                                Email:
                                <input
                                    type="email"
                                    name="email"
                                    value={callbackFormData.email || ''}
                                    onChange={handleFormChange}
                                    required
                                />
                            </label>
                            <label>
                                Phone:
                                <input
                                    type="text"
                                    name="phone"
                                    value={callbackFormData.phone || ''}
                                    onChange={handleFormChange}
                                    required
                                />
                            </label>
                            <div>
                                <label>Best time for call:</label>
                                <div className="best-time-call">
                                    <label>
                                        AM
                                        <input
                                            type="radio"
                                            name="bestTime"
                                            value="AM"
                                            checked={callbackFormData.bestTime === 'AM'}
                                            onChange={handleFormChange}
                                            required
                                        />
                                    </label>
                                    <label>
                                        PM
                                        <input
                                            type="radio"
                                            name="bestTime"
                                            value="PM"
                                            checked={callbackFormData.bestTime === 'PM'}
                                            onChange={handleFormChange}
                                            required
                                        />
                                    </label>
                                </div>
                            </div>
                            <label>
                                Subject:
                                <input
                                    type="text"
                                    name="subject"
                                    value={callbackFormData.subject || ''}
                                    onChange={handleFormChange}
                                    required
                                />
                            </label>
                            <label>
                                Message:
                                <textarea
                                    name="message"
                                    value={callbackFormData.message || ''}
                                    onChange={handleFormChange}
                                    required
                                />
                            </label>
                            <label>
                                How did you hear about us?
                                <select
                                    name="source"
                                    value={callbackFormData.source || ''}
                                    onChange={handleFormChange}
                                    required
                                >
                                    <option value="" disabled>Select an option</option>
                                    <option value="Facebook">Facebook</option>
                                    <option value="Google Search">Google Search</option>
                                    <option value="Linked In">Linked In</option>
                                    <option value="Twitter">Twitter</option>
                                    <option value="Instagram">Instagram</option>
                                    <option value="Law Society Website">Law Society Website</option>
                                    <option value="Other">Other</option>
                                </select>
                            </label>

                            <button type="submit">Send</button>
                            <button type="button" onClick={toggleCallbackForm}>Cancel</button>
                        </form>

                    </div>

                </div>
            )}
        </nav >
    );
};

export default Navbar;

