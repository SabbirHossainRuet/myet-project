import React, { useContext } from 'react';
import './Contact.css';
import { AiTwotoneMail } from "react-icons/ai";
import { VscCallIncoming } from "react-icons/vsc";
import { PiPhoneCallFill } from "react-icons/pi";
import { StoreContext } from "../Context/StoreContext";
import CallbackForm from '../Callbackform/CallbackForm';
import InfoIcon from "../../assets/infoicon.jpg";

const Contact = () => {
    const iconStyle = { fontSize: '40px' };
    const { toggleCallbackForm, isCallbackFormVisible } = useContext(StoreContext);

    return (
        <div className='contact' id='contact'>
            <div className="contact-container">
                <h3>Ways to contact us</h3>
                <div className="contact-container-grid">
                    <div className="contact-item">
                        <PiPhoneCallFill style={iconStyle} />
                        <p onClick={toggleCallbackForm} style={{ cursor: 'pointer' }}>
                            Request a Callback
                        </p>
                    </div>
                    <div className="contact-item">
                        <img src={InfoIcon} alt="" />
                        <p>
                            <a style={{ textDecoration: 'none', color: 'inherit' }}>
                                Make an Enquiry
                            </a>
                        </p>
                    </div>
                    <div className="contact-item">
                        <VscCallIncoming style={iconStyle} />
                        <p>
                            <a style={{ textDecoration: 'none', color: 'inherit' }}>
                                Phone
                            </a>
                        </p>
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
            {isCallbackFormVisible && <CallbackForm />}
        </div>
    );
};

export default Contact;
