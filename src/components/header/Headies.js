import React from "react";
import "./Headies.css";
import { FaAccessibleIcon } from "react-icons/fa";
import { BsHexagon } from "react-icons/bs";

const Headies = ({ icon, heading, text }) => {
  return (
    <div className="headies">
      <div className="headies-icon text-color bold">
        <BsHexagon color="#fc5412" className="text-color bold" size={55} />
        <div className="inner-icon text-color bold">{icon}</div>
      </div>

      <div className="headies-text">
        <h3 className="text-color bold">{heading}</h3>
        <p className="u-text-small text-color bold">{text}</p>
      </div>
    </div>
  );
};

export default Headies;
