import React from "react";
import "./Mission.css";
import { assets } from "../../assets/assets";

const Mission = () => {
    return (
        <div className="mission">
            <div className="mission-contents">
                <div className="mission-image">
                    <img src={assets.legal} alt="" />
                </div>
                <div className="mission-texts">
                    <p className="title">Mission</p>
                    <h2>Welcome to MyET1.com</h2>
                    <div className="mission-texts-text">
                        <p>{`We're on a mission to help workers take cost effective control of their employment disputes, especially where lawyers and law firms are too expensive and not a realistic option for many ordinary workers.`}</p>
                        <p>{`We're here to provide support and practical employment advice for everyone, no matter what their financial circumstances.`}</p>
                        <p>{`To get started now, download one of our three helpful ET1 guides. For one to one advice and support, click on one of our tailored services packages. Use the Contact form to get in touch if you have any questions.`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;
