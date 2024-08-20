import React from 'react'
import './Contact.css'
import { BsHeadsetVr } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { VscCallIncoming } from "react-icons/vsc";
import { PiPhoneCallFill } from "react-icons/pi";

const Contact = () => {
    const iconStyle = { fontSize: '40px' };
    return (
        <div className='contact' id='contact'>
            <div className="contact-container">
                <h3>Ways to contact us</h3>
                <div className="contact-container-grid">
                    <div className="contact-item">
                        <PiPhoneCallFill style={iconStyle}/>
                        <p>Request a Callback</p>
                    </div>
                    <div className="contact-item">
                        <BsHeadsetVr style={iconStyle}/>
                        <p>Make an Enquiry</p>
                    </div>
                    <div className="contact-item">
                        <VscCallIncoming style={iconStyle}/>
                        <p>Phone</p>
                    </div>
                    <div className="contact-item">
                        <AiTwotoneMail style={iconStyle}/>
                        <p>Email</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact