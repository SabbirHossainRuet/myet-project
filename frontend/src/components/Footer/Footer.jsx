import React from 'react';
import './Footer.css';
import { Element } from 'react-scroll';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <Element name='footer-content'>
        <div className="footer-content">
          <h3>{`Can't find what you are looking for?`}</h3>
          <button className='footer-button'>Email Us</button>
        </div>
      </Element>
      <Element name='footer-end-panel'>
        <div className="end-panel-container">
          <div className="end-panel-top">
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>
          <div className="end-panel-middle">
            <div className="middle-left">
              <h2>Legal Information</h2>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
            <div className="middle-center">
              <h2>Support and Help</h2>
              <ul>
                <li>FAQs</li>
                <li>Help Center</li>
              </ul>

            </div>
            <div className="middle-right">
              <h2>Connect with us</h2>
              <ul>
                <li>Email Address</li>
                <li>Phone</li>
                <li>Live Chat</li>
              </ul>

            </div>
          </div>
          <div className="end-panel-end">
            <h3>Employment Rights Network @2024. All rights reserved</h3>
          </div>
        </div>
      </Element>
    </div>
  )
}

export default Footer