import React from "react";
import "./Tech.css";
import { TiSocialGooglePlus } from "react-icons/ti";
import { IoLogoNodejs } from "react-icons/io";
import { DiJavascript1, DiNodejs, DiSass } from "react-icons/di";
import { ImHtmlFive } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import { SiNextdotjs, SiVisualstudiocode, SiNetlify, SiHeroku } from "react-icons/si";
import { FaFacebookF, FaTwitter, FaCss3, FaInstagram, FaReact, FaAccessibleIcon } from "react-icons/fa";

const Tech = () => {
  return (
    <>
    <div className="mytext">
    <h2 className="text-color bold">Tech Stack</h2>
    <h5 className="text-color bold">Here is a few technologu i've been working with recently</h5>
    </div>
         
    <div className="tech-icon container" > 

         <div className="tech-icons" >
         <DiJavascript1 className="text-color bold" />
         </div>
         <div className="tech-icons">
           <FaReact className="text-color bold"/>
         </div>
         <div className="tech-icons">
         <ImHtmlFive className="text-color bold"/>
         </div>
         <div className="tech-icons">
         <DiSass className="text-color bold"/>
         </div>
         <div className="tech-icons">
           <DiNodejs className="text-color bold"/>
         </div>
         <div className="tech-icons">
           <SiNextdotjs className="text-color bold" />
         </div>
         <div className="tech-icons">
           <FaCss3 className="text-color bold"/>
         </div>
         <div className="tech-icons">
           <FaInstagram className="text-color bold"/>
         </div>
       </div>
 


       <div className="mytext">
    <h3 className="text-color bold">Tech Tools</h3>
    
    </div>
   <section className="text-color bold container">
    <div className="tech-icon" > 
         <div className="tech-icons" >
         <SiVisualstudiocode className="text-color bold"/>
         </div>
         <div className="tech-icons">
           <AiFillGithub className="text-color bold"/>
         </div>
         <div className="tech-icons">
         <SiNetlify className="text-color bold" />
         </div>
         <div className="tech-icons">
         <SiHeroku className="text-color bold"/>
         </div>
       </div>
   </section>
   
   </>
  );
};

export default Tech;
