import React from "react";
import "./Feature.css";
import { FaAccessibleIcon } from "react-icons/fa";
import { BsCircle } from "react-icons/bs";

const Feature = ({ icon, heading, text }) => {
  return (
    <div className="feature">
      <div className="feature-icon text-color bold">
        <BsCircle color="#fc5412" className="text-color bold" size={30} />
        
      </div>

      <div className="feature-text">
        <h3 className="text-color bold">{heading}</h3>
        <p className="u-text-small text-color bold">{text}</p>
      </div>
    </div>
  );
};

export default Feature;
