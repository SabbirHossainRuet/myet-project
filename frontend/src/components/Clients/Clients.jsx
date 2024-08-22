import React from "react";
import ProfilePic from "../../assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";
import './Clients.css';

const Clients = () => {
  return (
    <div className="clients" id="clients">
      <div className="clients-section-top">
        <p className="primary-subheading">Testimonial</p>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectrfd. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <br />
      <div className="clients-section-bottom">
        <img src={ProfilePic} alt="" />
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <div className="clients-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
};

export default Clients;
