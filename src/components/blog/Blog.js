import React, { useEffect } from "react";
import "./Blog.css";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../footer/Footer";

const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
    <section id="subscribe">
      <div className="container subscribe" data-aos="fade-up">
        <h2>Coming soon</h2>
        <form>
          
        </form>
     
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Blog;
