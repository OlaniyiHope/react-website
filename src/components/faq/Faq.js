import React, { useEffect } from "react";
import { questions } from "./data.js";
import Question from "./Question";
import { MdOutlineLibraryBooks } from "react-icons/md";

import AOS from "aos";
import "aos/dist/aos.css";



const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="faq">
      <div className="container faq">
        <div className="u-title" data-aos="fade-up">
          <MdOutlineLibraryBooks color="orangered" size={30} />
          <h2>I'm Hope Olaniyi</h2>
          <p style={{fontSize: 15}}>
          Hi Everyone, I am Hope Olaniyi from Lagos, Nigeria.
I am a software developer, I build great mobile apps and web apps for companies, individuals and organization
I love React Native and I use it for mobile app development, I'm also proficient in other Javascript framework like React Js, Next Js for Web App, Ionic and Expo for mobile app, bootstrap, tailwind css etc
I am a graduate of Osun State University, Studied Physics with Electronics
Apart from coding, some other activities that I love to do!
          </p>
        </div>
        <div className="questions">
          {questions.map((question) => (
            <Question
              key={question.id}
              title={question.title}
              answer={question.answer}
            />
        
          ))}
        </div>
        <div>
    
        </div>
      </div>
    </section>
  );
};

export default Faq;
