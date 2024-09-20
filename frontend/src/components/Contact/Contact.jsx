import { useContext } from 'react';
import './Contact.css';
import { PiPhoneCallFill } from "react-icons/pi";
import { StoreContext } from "../Context/StoreContext";
import CallbackForm from '../Callbackform/CallbackForm';
import Email from '../../assets/email.png';
import Enquiry from '../../assets/enquiry.png';
import Phone from '../../assets/phone.png';

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
                        <img src={Enquiry} alt="" />
                        <p onClick={handleEnquiryClick} style={{ cursor: 'pointer' }} className='enquiry'>
                            Make an Enquiry
                        </p>
                    </div>
                    <div className="contact-item">
                        <img src={Phone} alt="" />
                        {/* <p onClick={handleCallbackClick} style={{ cursor: 'pointer' }} onMouseEnter={(e) => {
                            e.target.style.textDecoration = 'underline';
                        }}
                            onMouseLeave={(e) => {
                                e.target.style.textDecoration = 'none';
                            }} className='callback'>Request a Callback</p> */}
                        <p onClick={handleCallbackClick} style={{ cursor: 'pointer' }} className='callback'>Request a Callback</p>
                    </div>
                    <div className="contact-item">
                        <img src={Email} alt="" />
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
