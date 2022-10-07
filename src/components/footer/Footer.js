import React from "react";
import "./Footer.css";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section id="footer"className="text-color bold">
     <div className="social-icons">
          <div className="social-icon">
            <TiSocialGooglePlus />
          </div>
          <div className="social-icon">
            <FaFacebookF />
          </div>
          <div className="social-icon">
           <FaTwitter href="" />
          </div>
          <div className="social-icon">
            <FaInstagram href="https://instagram.com/olaniyihoppee" />
          </div>
    
        </div>
    </section>
  );
};

export default Footer;
