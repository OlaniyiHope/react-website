import React, { useEffect } from "react";
import "./Contact.css";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../footer/Footer";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
    <section id="subscribe">
      <div className="container subscribe" data-aos="fade-up">
      <h2>Get in touch</h2>
        
      </div>
    </section>
    <div>
    
        <form>
          <div className="formsss text-color bold">
            <input className="text-color bold" type="text" placeholder="Enter Your Email..." />
            <input className="text-color bold" type="text" placeholder="Enter Your Message" />
      <button >Send</button>
            
          </div>
        
        </form>
     
    </div>
    <Footer />
</>

  );
};

export default Contact;
