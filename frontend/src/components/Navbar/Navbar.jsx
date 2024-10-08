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

import { useContext, useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
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
import CallbackForm from "../Callbackform/CallbackForm";
const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const { isCallbackFormVisible,
        toggleCallbackForm, setShowDateTime, setFormTitle, formTitle,
    } = useContext(StoreContext);

    const [activeLink, setActiveLink] = useState("");
    const [scrolling, setScrolling] = useState(false);

    const handleSetActive = (link) => {
        if (!scrolling) {
            setActiveLink(link);
        }
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setScrolling(true);
        setTimeout(() => setScrolling(false), 4000);
    };

    const handleCallbackClick = () => {
        setShowDateTime(true);
        setFormTitle('Request A Callback');
        toggleCallbackForm();
        setActiveLink("");
    };

    const handleEnquiryClick = () => {
        setShowDateTime(false);
        setFormTitle('Make An Enquiry');
        toggleCallbackForm();
        setActiveLink("");
    };

    const iconStyle = { fontSize: '40px' };
    const menuOptions = [
        { text: "Home", to: "home-section" },
        { text: "Mission", to: "mission-section" },
        { text: "Get Started", to: "get-started-section" },
        { text: "News", to: "news-events-section" },
        { text: "Services", to: "services" },
        { text: "InfoBriefs", to: "et-guides" },
        { text: "Contact us", to: "contact" },
        { text: "NewsLetter", to: "newsletter" },
        { text: "Employment Law", to: "employee-services" },
        { text: "Reviews", to: "clients" },
    ];

    // Handle resetting active link when the page reloads
    useEffect(() => {
        const handlePageReload = () => {
            window.scrollTo({ top: 0, behavior: 'auto' });
            setActiveLink("");
        };
        window.addEventListener("load", handlePageReload);
        return () => {
            window.removeEventListener("load", handlePageReload);
        };
    }, []);


    const handleTitleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top
        setActiveLink("");
        // Alternatively, you can use:
        // window.location.reload(); // Reload the page
    };

    return (
        <nav>
            <div className="navbar-top">
                <div className="navbar-left">
                    <img src={Logo} alt="" onClick={handleTitleClick} style={{ cursor: 'pointer' }} />
                    <div className="navbar-menu-container">
                        <HiOutlineBars3 style={iconStyle} onClick={() => setOpenMenu(true)} />
                    </div>
                </div>
                <div className="buttons">
                    <button style={{ backgroundColor: '#00AF6C' }} onClick={handleEnquiryClick}>Make An Enquiry</button>
                    <button style={{ backgroundColor: '#006DB2' }} onClick={handleCallbackClick}>Request A Callback</button>
                </div>
                <div className="search-container">
                    <CiSearch style={{ fontSize: '18px' }} />
                    <input type="text" className="search-box" placeholder="Search..." />
                </div>
            </div>
            <div className="navbar-bottom">
                <div className="navbar-links-container">
                    <Link className={`li ${activeLink === "home-section" ? "active" : ""}`} to="home-section" duration={500} offset={-200} spy={true} onSetActive={() => handleSetActive("home-section")} onClick={() => handleLinkClick("home-section")}>Home</Link>

                    <Link className={`li ${activeLink === "mission-section" ? "active" : ""}`} to="mission-section" duration={500} offset={-200} spy={true} onSetActive={() => handleSetActive("mission-section")} onClick={() => handleLinkClick("mission-section")}>Mission</Link>

                    <Link className={`li ${activeLink === "get-started-section" ? "active" : ""}`} to="get-started-section" duration={500} offset={-200} spy={true} onSetActive={() => handleSetActive("get-started-section")} onClick={() => handleLinkClick("get-started-section")}>Get Started</Link>

                    <Link className={`li ${activeLink === "News" ? "active" : ""}`} to="news-events-section" duration={500} offset={-200} spy={true} onSetActive={() => handleSetActive("News")} onClick={() => handleLinkClick("News")}>News</Link>

                    <Link className={`li ${activeLink === "Services" ? "active" : ""}`} to="services" duration={500} offset={-200} spy={true} onSetActive={() => handleSetActive("Services")} onClick={() => handleLinkClick("Services")}>Services</Link>

                    <Link className={`li ${activeLink === "InfoBriefs" ? "active" : ""}`} to="et-guides" duration={500} offset={-200} spy={true} onSetActive={() => handleSetActive("InfoBriefs")} onClick={() => handleLinkClick("InfoBriefs")}>InfoBriefs</Link>

                    <Link className={`li ${activeLink === "Contact us" ? "active" : ""}`} to="contact" duration={500} offset={-200} spy={true} onSetActive={() => handleSetActive("Contact us")} onClick={() => handleLinkClick("Contact us")}>Contact us</Link>

                    <Link className={`li ${activeLink === "Newsletter" ? "active" : ""}`} to="newsletter" duration={500} offset={-200} spy={true} onSetActive={() => handleSetActive("Newsletter")} onClick={() => handleLinkClick("Newsletter")}>Newsletter</Link>

                    <Link className={`li ${activeLink === "law" ? "active" : ""}`} to="employee-services" duration={500} offset={-200} spy={true} onSetActive={() => handleSetActive("law")} onClick={() => handleLinkClick("law")}>Employment Law</Link>

                    <Link className={`li ${activeLink === "Customers" ? "active" : ""}`} to="clients" duration={500} offset={-200} spy={true} onSetActive={() => handleSetActive("Customers")} onClick={() => handleLinkClick("Customers")}>Reviews</Link>
                </div>
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
                                    offset: -200, // Adjust the offset as needed
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
            {isCallbackFormVisible && <CallbackForm titleText={formTitle} />}
        </nav >
    );
};

export default Navbar;

