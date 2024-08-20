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
import React, { useState } from "react";
import './Navbar.css'
import { Link, scroller } from 'react-scroll';
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
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
            <h3 onClick={handleTitleClick} style={{ cursor: 'pointer' }}>MyET1.com</h3>
            <div className="navbar-links-container">
                <Link className="li" to="mission" duration={500} offset={-100}>Mission</Link>
                <Link className="li" to="et-guides" duration={500} offset={-100}>ET1 Guides</Link>
                <Link className="li" to="services" duration={500} offset={-100}>Services</Link>
                <Link className="li" to="contact" duration={500} offset={-100}>Contact us</Link>
                <Link className="li" to="newsletter" duration={500} offset={-100}>Newsletter</Link>
                <Link className="li" to="clients" duration={500} offset={-100}>Clients</Link>
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
        </nav >
    );
};

export default Navbar;
