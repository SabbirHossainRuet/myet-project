import React, { useContext } from 'react';
import { StoreContext } from "../Context/StoreContext";
import Logo from "../../assets/logo.jpg";
import './CallbackForm.css';

const CallbackForm = ({ handleTitleClick }) => {
    const { callbackFormData, handleFormChange, handleFormSubmit, toggleCallbackForm } = useContext(StoreContext);

    return (
        <div className="callback-form-container">
            <div className="callback-form-container-left">
                <img src={Logo} alt="" onClick={handleTitleClick} style={{ cursor: 'pointer' }} />
            </div>
            <div className="callback-form-container-right">
                <form onSubmit={handleFormSubmit}>
                    <label>
                        Name:
                        <span className="required">*</span> {/* Red star */}
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
                        <span className="required">*</span> {/* Red star */}
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
                        <span className="required">*</span> {/* Red star */}
                        <input
                            type="text"
                            name="phone"
                            value={callbackFormData.phone || ''}
                            onChange={handleFormChange}
                            required
                        />
                    </label>
                    <div>
                        <label>Best time to call:</label>

                        {/* Best day (Today or Tomorrow) */}
                        <div className="best-day-call">
                            <p style={{ color: "blue" }}>(Select Day Below)</p>
                            <label>
                                <span>Today</span>
                                <input
                                    type="radio"
                                    name="bestDay"
                                    value="Today"
                                    checked={callbackFormData.bestDay === 'Today'}
                                    onChange={handleFormChange}
                                    required
                                />
                            </label>
                            <label>
                                <span>Tomorrow</span>
                                <input
                                    type="radio"
                                    name="bestDay"
                                    value="Tomorrow"
                                    checked={callbackFormData.bestDay === 'Tomorrow'}
                                    onChange={handleFormChange}
                                    required
                                />
                            </label>
                        </div>

                        {/* Best time (Morning, Lunch, Afternoon, Early Evening) */}
                        <div className="best-time-call">
                            <p style={{ color: "blue" }}>(Select Time Below)</p>
                            <label>
                                <span>Morning</span>
                                <span>9.00AM - 12 Noon</span>
                                <input
                                    type="radio"
                                    name="bestTime"
                                    value="Morning 9.00AM - 12 Noon"
                                    checked={callbackFormData.bestTime === 'Morning 9.00AM - 12 Noon'}
                                    onChange={handleFormChange}
                                    required
                                />
                            </label>
                            <label>
                                <span>Lunch time</span>
                                <span>12 Noon - 2PM</span>
                                <input
                                    type="radio"
                                    name="bestTime"
                                    value="Lunch time 12 Noon - 2PM"
                                    checked={callbackFormData.bestTime === 'Lunch time 12 Noon - 2PM'}
                                    onChange={handleFormChange}
                                    required
                                />
                            </label>
                            <label>
                                <span>Afternoon</span>
                                <span>2.00 - 5.00PM</span>
                                <input
                                    type="radio"
                                    name="bestTime"
                                    value="Afternoon 2.00PM - 5.00PM"
                                    checked={callbackFormData.bestTime === 'Afternoon 2.00 - 5.00PM'}
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
                                    value="Early Evening 5.00PM - 7.00 PM"
                                    checked={callbackFormData.bestTime === 'Early Evening 5.00PM - 7.00 PM'}
                                    onChange={handleFormChange}
                                    required
                                />
                            </label>
                        </div>
                    </div>

                    <label>
                        Subject:
                        <span className="required">*</span> {/* Red star */}
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
                        <span className="required">*</span> {/* Red star */}
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
                            <option value="Facebook">Facebook</option>
                            <option value="Google Search">Google Search</option>
                            <option value="Linked In">Linked In</option>
                            <option value="Twitter">Twitter</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Law Society Website">Law Society Website</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>

                    <button type="submit">Send</button>
                    <button type="button" onClick={toggleCallbackForm}>Cancel</button>
                </form>
                <br />

            </div>

        </div>
    );
};

export default CallbackForm;
