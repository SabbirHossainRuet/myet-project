import React from 'react'
import './Contact.css'
import { BsHeadsetVr } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { VscCallIncoming } from "react-icons/vsc";
import { MdPhoneCallback } from "react-icons/md";

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-container">
                <h3>Ways to contact us</h3>
                <div className="contact-container-grid">
                    <div className="contact-item">
                        <MdPhoneCallback />
                        <p>Request a Callback</p>
                    </div>
                    <div className="contact-item">
                        <BsHeadsetVr />
                        <p>Make an Enquiry</p>
                    </div>
                    <div className="contact-item">
                        <VscCallIncoming />
                        <p>Phone</p>
                    </div>
                    <div className="contact-item">
                        <AiTwotoneMail />
                        <p>Email</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact