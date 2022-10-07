import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import kingg from "../../assets/good.JPG";
import Toolstack from "./Toolstack";
import Feature from "./Feature";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { FeatureList } from "./data";
import { FeatureList2 } from "./data2";
import Footer from "../footer/Footer";
function About() {
  return (
    <>
     <section id="subscribe">
      <div className="container subscribe" data-aos="fade-up">
      <h2>About Me</h2>
        
      </div>
    </section>
    <section id="features">
      
      <div className="container features">
        <div className="title" data-aos="fade-up">
          <BsFillBookmarkStarFill color="orangered" size={30} />
          <h2 className="text-color bold">About Me</h2>
          <p className=" text-color bold" >
          Hi Everyone, I am Hope Olaniyi from Lagos, Nigeria.
I am a software developer, I build great mobile apps and web apps for companies, individuals and organization
I love React Native and I use it for mobile app development, I'm also proficient in other Javascript framework like React Js, Next Js for Web App, Ionic and Expo for mobile app, bootstrap, tailwind css etc
I am a graduate of Osun State University, Studied Physics with Electronics
Apart from coding, some other activities that I love to do!
          </p>
        </div>
      
      </div>
      
    </section>

<Techstack />
<Toolstack />
 <div className="mytext">
 <h3 className="text-color bold">Interest</h3>
 
 </div>
 <div className="features-content container">
       
       <div className="features-right" data-aos="fade-left">
         {FeatureList2.map((feature) => (
           <Feature
             key={feature.id}
             icon={feature.icon}
             heading={feature.heading}
             text={feature.text}
           />
         ))}
       </div>
     </div>
 <Footer />
    </>
  );
}

export default About;
