import React, { useState, useContext } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { SiAnaconda } from "react-icons/si";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import ThemeSwitcher from "../ThemeSwitcher"
import {Link} from "react-router-dom"
import "./Navbar.css";
import { RiMoonClearFill } from "react-icons/ri";
import { Helmet } from "react-helmet";
import Styles from "../../data/Styles";
import { THEME_TYPE } from "../../constants";
import {ThemeContext} from "../../providers/ThemeProvider";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const StyleTag = () => {
    const [themeMode, setTheme] = useContext(ThemeContext);
    console.log(themeMode.theme);
    return (
      <Helmet>
        <style>{Styles(themeMode.theme)}</style>
      </Helmet>
    );
  };
  return (
    
    <nav className="bars container text-color bold">
      
      <div className="logo text-color bold">
        <SiAnaconda className="text-color bold" size={33} />
        <p className="logo-text text-color bold">
          laniyi<span >Hope</span>
        </p>
      </div>
      <menu>
    
        <ul
          className="bars-links text-color bold"
          id={showMenu ? "bars-links-mobile" : "bars-links-mobile-hide"}
        >
          <li>
          
          <ThemeSwitcher/>
     
          </li>
          <li >
            <a ><Link to='/' className="text-color bold">Home</Link></a>
          </li>
         
          <li>
          <a><Link to='/about' className="text-color bold">About</Link></a>
          </li>
          <li>
            <a><Link to="/project" className="text-color bold">Project</Link></a>
          </li>
          <li>
            <a><Link to='/contact' className="text-color bold">Contact</Link> </a>
          </li>

          {/* <li>
            <a href="#" className="btn btn-dark">
              Get Started
            </a>
          </li> */}
          <li className="bars-btn text-color bold" >
            <Link to='/lay' className="text-color bold"><Button text={"Blog"} btnClass={"btn-dark text-color bold" }  className="text-color bold"/></Link>
          </li>
        </ul>
      </menu>
      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? 
        (
           
          <RiCloseLine className="text-color bold" size={30} />
        ) : (
          <AiOutlineBars className="text-color bold" size={27} />
        )
        }
      </div>
    </nav>
  );
};

export default Navbar;
