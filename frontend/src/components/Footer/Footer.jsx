import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <h3>{`Can't find what you are looking for?`}</h3>
            <button className='footer-button'>Email Us</button>
        </div>
    </div>
  )
}

export default Footer