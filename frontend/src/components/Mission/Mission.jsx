import { useContext } from "react";
import "./Mission.css";
import { assets } from "../../assets/assets";
import { VscCallIncoming } from "react-icons/vsc";
import { MdOutlineStar } from "react-icons/md";
import videoCall from '../../assets/videocall.png';
import shuttle from '../../assets/shuttle.png';
import download from '../../assets/download.png'
import { StoreContext } from "../Context/StoreContext";
import CallbackForm from "../Callbackform/CallbackForm";
import { Link } from 'react-scroll';
const Mission = () => {
    const iconStyle = { fontSize: '35px' };
    const { toggleCallbackForm, isCallbackFormVisible, setShowDateTime, setFormTitle, formTitle } = useContext(StoreContext);

    const handleCallbackClick = () => {
        setShowDateTime(true);
        setFormTitle('Request A Callback');
        toggleCallbackForm();
    };
    return (
        <div className="mission" id="mission">
            <div className="mission-contents">
                <div className="mission-image">
                    <img src={assets.legal} alt="" />
                </div>
                <div className="mission-texts">
                    <p className="title">Mission</p>
                    <h2>Welcome to the</h2>
                    <h2>Employment Rights Network</h2>
                    <div className="mission-texts-text">
                        <p>{`We're on a mission to help UK workers take control of their employment disputes.`}</p>
                        <p>{`Getting quality employment law advice is hard and expensive. We're making it easy and affordable.`}</p>
                        <p>{`We're here to provide support and practical no nonsense advice to everyone - that's affordable and accessible - no matter what their financial circumstances.`}</p>
                    </div>
                </div>
                <h3><u>Get started now</u></h3>
                <div className="get-started-now">
                    <div className="get-started-now-item">
                        <img src={videoCall} alt="" />
                        <p>Book a FREE 30 MINUTE Online Appointment <br />(or by Phone).</p>
                    </div>
                    <div className="get-started-now-item">
                        <img src={download} alt="" />
                        <p>Download one of our helpful <Link className="link-services" to="et-guides" duration={500} offset={-200}>InfoBriefs/PremiumBriefs</Link>.</p>
                    </div>
                    <div className="get-started-now-item">
                        <img src={shuttle} alt="" />
                        <p>For one to one advice and support click on any of our tailored <Link className="link-services" to="services" duration={500} offset={-200}>Services</Link> packages.</p>
                    </div>
                    <div className="get-started-now-item">
                        <VscCallIncoming style={iconStyle} />
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
                        <p>Expert employment support for UK Workers</p>
                    </div>

                </div>
            </div>
            {isCallbackFormVisible && <CallbackForm titleText={formTitle} />}
        </div >
    );
};

export default Mission;
