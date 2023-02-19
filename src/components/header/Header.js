import React, { useEffect } from "react";
import "./Header.css";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import phoneHeader from "../../assets/about.png";
import { BsMouse } from "react-icons/bs";
import { FeatureList } from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import Faq from "../faq/Faq";
import Features from "../features/Features";
import Footer from "../footer/Footer";
import Feature from "../features/Feature";
import Headies from "./Headies";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <section id="header">
        <div className="container header">
          <div className="header-left" data-aos="fade-right">
            <h1>
              <span className="text-color bold">Hi There I'm</span>
              <span className="text-color bold">Hope Olaniyi</span>
              <span className="text-color bold">
                I'm a Software developer for web and mobile, and a tech savvy. I
                spend most of my days coding
              </span>
            </h1>
            <p className="u-text-small text-color bold">
              Welcome to my site, I will be sharing some of my experiences here
            </p>
          </div>
          <div className="header-right" data-aos="fade-left">
            <img src={phoneHeader} alt="phone" />
          </div>
        </div>
      </section>
      <div className="my-content container">
        <div className="my-right" data-aos="fade-left">
          {FeatureList.map((headies) => (
            <Headies
              key={headies.id}
              icon={headies.icon}
              heading={headies.heading}
              text={headies.text}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Header;
