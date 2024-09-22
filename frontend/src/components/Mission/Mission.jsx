import { useContext } from "react";
import "./Mission.css";
import { MdOutlineStar } from "react-icons/md";
import videoCall from '../../assets/videocall.png';
import shuttle from '../../assets/shuttle.png';
import download from '../../assets/download.png'
import { StoreContext } from "../Context/StoreContext";
import CallbackForm from "../Callbackform/CallbackForm";
import { Element, Link } from 'react-scroll';
import Carousel from "../Carousel/Carousel";
import Phone from '../../assets/phone.png';

const Mission = () => {
    const iconStyle = { fontSize: '35px' };
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
        <div className="mission" id="mission">
            <Element name="home-section">
                <div className="carousel-section">
                    <Carousel />
                </div>
            </Element>
            <Element name="mission-section">
                <div className="mission-contents">
                    <div className="mission-texts">
                        <p className="title">Mission</p>
                        <h2>Welcome to the</h2>
                        <h2>Employment Rights Network</h2>
                        <div className="mission-texts-text">
                            <p>{`We're on a mission to help UK workers take control of their employment disputes.`}</p>
                            <p>{`Getting quality employment law advice is hard and expensive. We're making it easy and affordable.`}</p>
                            <p>{`We're here to provide support and practical no nonsense advice to everyone`}</p>
                            <p>{`that's affordable and accessible - no matter what their financial circumstances.`}</p>
                        </div>
                    </div>
                </div>
            </Element>
            <Element name="get-started-section">
                <div className="get-started-container">
                    <h3><u>Get started now</u></h3>
                    <div className="get-started-now">
                        <div className="get-started-now-item">
                            <div className="image-div">
                                <img src={videoCall} alt="" style={{ height: '37px', width: '37px' }} />
                            </div>
                            <p>Book a{' '}
                                <span
                                    style={{ textDecoration: 'underline', cursor: 'pointer' }}
                                    onClick={handleEnquiryClick}
                                >
                                    FREE 30 MINUTE
                                </span>{' '}Online Appointment <br />(or by Phone).</p>
                        </div>
                        <div className="get-started-now-item">
                            <div className="image-div">
                                <img src={download} alt="" style={{ height: '37px', width: '37px' }} />
                            </div>
                            <p>Download one of our helpful <Link className="link-services" to="et-guides" duration={500} offset={-200}>InfoBriefs/PremiumBriefs</Link>.</p>
                        </div>
                        <div className="get-started-now-item">
                            <div className="image-div">
                                <img src={shuttle} alt="" style={{ height: '37px', width: '37px' }} />
                            </div>
                            <p>For one to one advice and support click on any of our tailored <Link className="link-services" to="services" duration={500} offset={-200}>Services</Link> packages.</p>
                        </div>
                        <div className="get-started-now-item">
                            <div className="image-div">
                                <img src={Phone} alt="" style={{ height: '45px', width: '45px' }} />
                            </div>
                            <p>
                                Use the{' '}
                                <span
                                    style={{ textDecoration: 'underline', cursor: 'pointer' }}
                                    onClick={handleCallbackClick}
                                >
                                    Request A Callback
                                </span>{' '}
                                or{' '}
                                <span
                                    style={{ textDecoration: 'underline', cursor: 'pointer' }}
                                    onClick={handleCallbackClick}
                                >
                                    Contact Form
                                </span>{' '}
                                to get in touch with us if you have any questions.
                            </p>
                        </div>

                    </div>
                    <div className="bottom-text">
                        <div className="bottom-text-up">
                            <p>Low Cost</p>
                            <MdOutlineStar style={iconStyle} />
                            <p>Affordable</p>
                            <MdOutlineStar style={iconStyle} />
                            <p>Accessible</p>
                        </div>
                        <div className="bottom-text-down">
                            <p>Employment support for UK Workers</p>
                        </div>

                    </div>
                </div>
            </Element>
            {isCallbackFormVisible && <CallbackForm titleText={formTitle} />}
        </div >
    );
};

export default Mission;
