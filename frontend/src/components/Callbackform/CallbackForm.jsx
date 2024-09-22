// import React, { useContext } from 'react';
// import { StoreContext } from "../Context/StoreContext";
// import Logo from "../../assets/logo.png";
// import './CallbackForm.css';

// const CallbackForm = ({ handleTitleClick, titleText }) => {
//     const { callbackFormData, handleFormChange, handleFormSubmit, toggleCallbackForm, showDateTime, } = useContext(StoreContext);

//     return (
//         <div className="callback-form-container">
//             <div className="callback-form-container-left">
//                 <img src={Logo} alt="" onClick={handleTitleClick} style={{ cursor: 'pointer' }} />
//                 <h2 className="callback-form-title">{titleText}</h2>
//             </div>
//             <div className="callback-form-container-right">
//                 <form onSubmit={handleFormSubmit}>
//                     <label>
//                         Name:
//                         <span className="required">*</span> {/* Red star */}
//                         <input
//                             type="text"
//                             name="name"
//                             value={callbackFormData.name || ''}
//                             onChange={handleFormChange}
//                             required
//                         />
//                     </label>
//                     <label>
//                         Email:
//                         <span className="required">*</span> {/* Red star */}
//                         <input
//                             type="email"
//                             name="email"
//                             value={callbackFormData.email || ''}
//                             onChange={handleFormChange}
//                             required
//                         />
//                     </label>
//                     <label>
//                         Phone:
//                         <span className="required">*</span> {/* Red star */}
//                         <input
//                             type="text"
//                             name="phone"
//                             value={callbackFormData.phone || ''}
//                             onChange={handleFormChange}
//                             required
//                         />
//                     </label>
//                     {showDateTime && (
//                         <div>
//                             <br />
//                             <label><b>Best time to call:</b></label>

//                             {/* Best day (Today or Tomorrow) */}
//                             <div className="best-day-call">
//                                 <p style={{ color: "blue" }}>(Select a day)</p>
//                                 <label>
//                                     <span>Today</span>
//                                     <input
//                                         type="radio"
//                                         name="bestDay"
//                                         value="Today"
//                                         checked={callbackFormData.bestDay === 'Today'}
//                                         onChange={handleFormChange}
//                                         required
//                                     />
//                                 </label>
//                                 <label>
//                                     <span>Tomorrow</span>
//                                     <input
//                                         type="radio"
//                                         name="bestDay"
//                                         value="Tomorrow"
//                                         checked={callbackFormData.bestDay === 'Tomorrow'}
//                                         onChange={handleFormChange}
//                                         required
//                                     />
//                                 </label>
//                             </div>

//                             {/* Best time (Morning, Lunch, Afternoon, Early Evening) */}
//                             <div className="best-time-call">
//                                 <p style={{ color: "blue" }}>(Select a time)</p>
//                                 <label>
//                                     <span>Morning</span>
//                                     <span>9.00AM - 12 Noon</span>
//                                     <input
//                                         type="radio"
//                                         name="bestTime"
//                                         value="Morning 9.00AM - 12 Noon"
//                                         checked={callbackFormData.bestTime === 'Morning 9.00AM - 12 Noon'}
//                                         onChange={handleFormChange}
//                                         required
//                                     />
//                                 </label>
//                                 <label>
//                                     <span>Lunch time</span>
//                                     <span>12 Noon - 2.00PM</span>
//                                     <input
//                                         type="radio"
//                                         name="bestTime"
//                                         value="Lunch time 12 Noon - 2.00PM"
//                                         checked={callbackFormData.bestTime === 'Lunch time 12 Noon - 2.00PM'}
//                                         onChange={handleFormChange}
//                                         required
//                                     />
//                                 </label>
//                                 <label>
//                                     <span>Afternoon</span>
//                                     <span>2.00PM - 5.00PM</span>
//                                     <input
//                                         type="radio"
//                                         name="bestTime"
//                                         value="Afternoon 2.00PM - 5.00PM"
//                                         checked={callbackFormData.bestTime === 'Afternoon 2.00PM - 5.00PM'}
//                                         onChange={handleFormChange}
//                                         required
//                                     />
//                                 </label>
//                                 <label>
//                                     <span>Early Evening</span>
//                                     <span>5.00PM - 7.00 PM</span>
//                                     <input
//                                         type="radio"
//                                         name="bestTime"
//                                         value="Early Evening 5.00PM - 7.00PM"
//                                         checked={callbackFormData.bestTime === 'Early Evening 5.00PM - 7.00PM'}
//                                         onChange={handleFormChange}
//                                         required
//                                     />
//                                 </label>
//                             </div>
//                         </div>
//                     )}

//                     <label>
//                         Subject:
//                         <span className="required">*</span> {/* Red star */}
//                         <input
//                             type="text"
//                             name="subject"
//                             value={callbackFormData.subject || ''}
//                             onChange={handleFormChange}
//                             required
//                         />
//                     </label>
//                     <label>
//                         Message:
//                         <span className="required">*</span> {/* Red star */}
//                         <textarea
//                             name="message"
//                             value={callbackFormData.message || ''}
//                             onChange={handleFormChange}
//                             required
//                         />
//                     </label>
//                     <label>
//                         How did you hear about us?
//                         <select
//                             name="source"
//                             value={callbackFormData.source || ''}
//                             onChange={handleFormChange}
//                             required
//                         >
//                             <option value="" disabled>Select an option</option>
//                             <option value="Facebook">Facebook</option>
//                             <option value="Google Search">Google Search</option>
//                             <option value="Linked In">Linked In</option>
//                             <option value="Twitter">Twitter</option>
//                             <option value="Instagram">Instagram</option>
//                             <option value="Law Society Website">Law Society Website</option>
//                             <option value="Other">Other</option>
//                         </select>
//                     </label>

//                     <button type="submit">Send</button>
//                     <button type="button" onClick={toggleCallbackForm}>Cancel</button>
//                 </form>
//                 <br />

//             </div>

//         </div>
//     );
// };

// export default CallbackForm;



//NEW VERSION WITH CMS
//
//
//

import { useContext, useEffect, useState } from 'react';
import { StoreContext } from "../Context/StoreContext";
import Logo from "../../assets/logo.png";
import './CallbackForm.css';
import { submitCallbackForm } from '../../apiService';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const CallbackForm = ({ handleTitleClick, titleText }) => {
    const { callbackFormData, handleFormChange, toggleCallbackForm, showDateTime } = useContext(StoreContext);
    const [isLoading, setIsLoading] = useState(false);
    // const [isCursorInsideForm, setCursorInsideForm] = useState(false);

    // useEffect(() => {
    //     const handleScroll = (event) => {
    //         if (isCursorInsideForm) {
    //             event.preventDefault();
    //         }
    //     };

    //     if (isCursorInsideForm) {
    //         window.addEventListener('wheel', handleScroll, { passive: false });
    //         window.addEventListener('touchmove', handleScroll, { passive: false });
    //     } else {
    //         window.removeEventListener('wheel', handleScroll);
    //         window.removeEventListener('touchmove', handleScroll);
    //     }

    //     return () => {
    //         window.removeEventListener('wheel', handleScroll);
    //         window.removeEventListener('touchmove', handleScroll);
    //     };
    // }, [isCursorInsideForm]);

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         await submitCallbackForm(callbackFormData, showDateTime);
    //         alert('Form submitted successfully');
    //         toggleCallbackForm();
    //     } catch (error) {
    //         alert('Failed to submit form');
    //     }
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            // Submit the form
            await submitCallbackForm(callbackFormData, showDateTime);

            // Notify user immediately after form submission
            toast.success('Thank you! Form submitted successfully');
            toggleCallbackForm();

            const now = new Date();
            const ukDateTime = now.toLocaleString('en-GB', {
                timeZone: 'Europe/London',
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            });

            const templateParams = {
                name: callbackFormData.name,
                email: callbackFormData.email,
                phone: callbackFormData.phone,
                subject: callbackFormData.subject,
                message: callbackFormData.message,
                submissionDateTime: ukDateTime,
            };

            emailjs.send(
                'service_mqvxm7m', // Replace with your EmailJS service ID
                'template_3pxpf95', // Replace with your EmailJS template ID
                templateParams,
                'QTqyMNRoh1SL2LShi'
            )
                .then(() => {
                    console.log('Email sent successfully');
                })
                .catch((error) => {
                    console.error('Failed to send email:', error);
                    alert('Form submitted, but failed to send email.');
                });

        } catch (error) {
            toast.error('Failed to submit form. Please enter valid email');
        }
        finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="callback-form-container">
            <div className="callback-form-container-left">
                <img src={Logo} alt="" onClick={handleTitleClick} style={{ cursor: 'pointer' }} />
                <h2 className="callback-form-title">{titleText}</h2>
                <span className="close-icon" onClick={toggleCallbackForm}>
                    &times;
                </span>
            </div>
            <div className="callback-form-container-right">
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <span className="required">*</span>
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
                        <span className="required">*</span>
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
                        <span className="required">*</span>
                        <input
                            type="text"
                            name="phone"
                            value={callbackFormData.phone || ''}
                            onChange={handleFormChange}
                            required
                        />
                    </label>
                    {showDateTime && (
                        <div>
                            <br />
                            <label><b>Best time to call:</b></label>
                            <div className="best-day-call">
                                <p style={{ color: "blue" }}>(Select a day)</p>
                                <label>
                                    <span>Today</span>
                                    <input
                                        type="radio"
                                        name="bestDay"
                                        value="today"
                                        checked={callbackFormData.bestDay === 'today'}
                                        onChange={handleFormChange}
                                        required
                                    />
                                </label>
                                <label>
                                    <span>Tomorrow</span>
                                    <input
                                        type="radio"
                                        name="bestDay"
                                        value="tomorrow"
                                        checked={callbackFormData.bestDay === 'tomorrow'}
                                        onChange={handleFormChange}
                                        required
                                    />
                                </label>
                            </div>
                            <div className="best-time-call">
                                <p style={{ color: "blue" }}>(Select a time)</p>
                                <label>
                                    <span>Morning</span>
                                    <span>9.00AM - 12 Noon</span>
                                    <input
                                        type="radio"
                                        name="bestTime"
                                        value="Morning"
                                        checked={callbackFormData.bestTime === 'Morning'}
                                        onChange={handleFormChange}
                                        required
                                    />
                                </label>
                                <label>
                                    <span>Lunch time</span>
                                    <span>12 Noon - 2.00PM</span>
                                    <input
                                        type="radio"
                                        name="bestTime"
                                        value="Lunch time"
                                        checked={callbackFormData.bestTime === 'Lunch time'}
                                        onChange={handleFormChange}
                                        required
                                    />
                                </label>
                                <label>
                                    <span>Afternoon</span>
                                    <span>2.00PM - 5.00PM</span>
                                    <input
                                        type="radio"
                                        name="bestTime"
                                        value="Afternoon"
                                        checked={callbackFormData.bestTime === 'Afternoon'}
                                        onChange={handleFormChange}
                                        required
                                    />
                                </label>
                                <label>
                                    <span>Early Evening</span>
                                    <span>5.00PM - 7.00 PM</span>
                                    <input
                                        type="radio"
                                        name="bestTime"
                                        value="Early Evening"
                                        checked={callbackFormData.bestTime === 'Early Evening'}
                                        onChange={handleFormChange}
                                        required
                                    />
                                </label>
                            </div>
                        </div>
                    )}
                    <label>
                        Subject:
                        <span className="required">*</span>
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
                        <span className="required">*</span>
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
                            <option value="Publicity Flyer/Leaflet">Publicity Flyer/Leaflet</option>
                            <option value="Recommendation">Recommendation</option>
                            <option value="Google search result">Google search result</option>
                            <option value="News search result">News search result</option>
                            <option value="You Tube">You Tube</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Tik Tok">Tik Tok</option>
                            <option value="Twitter/X">Twitter/X</option>
                            <option value="Link from Advice Agency/Charity">Link from Advice Agency/Charity</option>
                            <option value="Law Society Website">Law Society Website</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? 'Submitting...' : 'Send'}
                    </button>
                    <button type="button" onClick={toggleCallbackForm}>Cancel</button>
                </form>
                <br />
            </div>
        </div>
    );
};

export default CallbackForm;

