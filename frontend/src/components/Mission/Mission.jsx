import React from "react";
import "./Mission.css";
import { assets } from "../../assets/assets";
import { TiTick } from "react-icons/ti";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import { PiPhoneCallFill } from "react-icons/pi";
import { GrServices } from "react-icons/gr";

const Mission = () => {
    const iconStyle = { fontSize: '40px' };
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
                        <p>{`We're on a mission to help UK workers take cost effective control of their employment tribunal disputes.`}</p>
                        <p>{`We're here to provide support and practical employment advice for everyone - that's affordable and accessible - no matter what their financial circumstances.`}</p>
                    </div>
                </div>
                <h3><u>Get started now</u></h3>
                <div className="get-started-now">
                    <div className="get-started-now-item">
                        <TiTick style={iconStyle} />
                        <p>Book a FREE 30 MINUTE appointment</p>
                    </div>
                    <div className="get-started-now-item">
                        <BsFillCloudDownloadFill style={iconStyle} />
                        <p>Download one of our helpful ET1 Information leaflets</p>
                    </div>
                    <div className="get-started-now-item">
                        <GrServices style={iconStyle} />
                        <p>For one to one advice and support click on any of our tailored Services packages.</p>
                    </div>
                    <div className="get-started-now-item">
                        <PiPhoneCallFill style={iconStyle} />
                        <p>Use the Request a Callback or Contact form to get in touch with us if you have any questions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;
