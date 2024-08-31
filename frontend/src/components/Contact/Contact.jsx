import React, { useContext, useState } from 'react';
import './Contact.css';
import { AiTwotoneMail } from "react-icons/ai";
import { VscCallIncoming } from "react-icons/vsc";
import { PiPhoneCallFill } from "react-icons/pi";
import { StoreContext } from "../Context/StoreContext";
import InfoIcon from "../../assets/infoicon.jpg";
import CallbackForm from '../Callbackform/CallbackForm';

const Contact = () => {
    const iconStyle = { fontSize: '40px' };
    const { toggleCallbackForm, isCallbackFormVisible, setShowDateTime, setFormTitle, formTitle } = useContext(StoreContext);

    const handleCallbackClick = () => {
        setShowDateTime(true);
        setFormTitle('Request A Callback');
        toggleCallbackForm();
    };

    const handleEnquiryClick = () => {
        setShowDateTime(false);
        setFormTitle('Make An Enquiry');
        toggleCallbackForm();
    };

    return (
        <div className='contact' id='contact'>
            <div className="contact-container">
                <h3>Ways to contact us</h3>
                <div className="contact-container-grid">
                    <div className="contact-item">

                        <PiPhoneCallFill style={iconStyle} />
                        <p>
                            <a style={{ textDecoration: 'none', color: 'inherit' }}>
                                Phone
                            </a>
                        </p>
                    </div>
                    <div className="contact-item">
                        <img src={InfoIcon} alt="" />
                        <p onClick={handleEnquiryClick} style={{ cursor: 'pointer' }}>
                            Make an Enquiry
                        </p>
                    </div>
                    <div className="contact-item">
                        <VscCallIncoming style={iconStyle} />

                        <p onClick={handleCallbackClick} style={{ cursor: 'pointer' }}>Request a Callback</p>
                    </div>
                    <div className="contact-item">
                        <AiTwotoneMail style={iconStyle} />
                        <p>
                            <a style={{ textDecoration: 'none', color: 'inherit' }}>
                                Email
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Callback Form */}
            {isCallbackFormVisible && <CallbackForm titleText={formTitle} />}
        </div >
    );
};

export default Contact;
