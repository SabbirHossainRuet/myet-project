import React from "react";
import "./Mission.css";
import { assets } from "../../assets/assets";
import { TiTick } from "react-icons/ti";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import { VscCallIncoming } from "react-icons/vsc";
import { GrServices } from "react-icons/gr";
import { RxDotFilled } from "react-icons/rx";
import videoCall from '../../assets/videocall.png';
import shuttle from '../../assets/shuttle.png';
import download from '../../assets/download.png'
const Mission = () => {
    const iconStyle = { fontSize: '35px' };
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
                        <p>{`We're on a mission to help UK workers take cost effective control of their employment disputes.`}</p>
                        <p>{`We're here to provide support and practical employment advice for everyone - that's affordable and accessible - no matter what their financial circumstances.`}</p>
                    </div>
                </div>
                <h3><u>Get started now</u></h3>
                <div className="get-started-now">
                    <div className="get-started-now-item">
                        <img src={videoCall} alt="" />
                        <p>Book a FREE 30 MINUTE Online (or by Phone) Appointment</p>
                    </div>
                    <div className="get-started-now-item">
                        <img src={download} alt="" />
                        <p>Download one of our helpful InfoBriefs/PremiumBriefs</p>
                    </div>
                    <div className="get-started-now-item">
                        <img src={shuttle} alt="" />
                        <p>For one to one advice and support click on any of our tailored Services packages.</p>
                    </div>
                    <div className="get-started-now-item">
                        <VscCallIncoming style={iconStyle} />
                        <p>Use the Request a Callback or Contact form to get in touch with us if you have any questions.</p>
                    </div>
                </div>
                <div className="bottom-text">
                    <div className="bottom-text-up">
                        <p>Low Cost</p>
                        <RxDotFilled style={iconStyle} />
                        <p>Affordable</p>
                        <RxDotFilled style={iconStyle} />
                        <p>Accesible</p>
                    </div>
                    <div className="bottom-text-down">
                        <p>Expert employment support for UK Workers</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Mission;
