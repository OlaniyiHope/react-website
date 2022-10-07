import React, { useContext } from "react";
import {Link} from "react-router-dom"
import { THEME_TYPE } from "../constants";
import {ThemeContext} from "../providers/ThemeProvider";
const Try = () => {
  // No need to change *return* part
  // You have to set theme based on context
 
  return (
    <>

    <li>
    <a><Link to='/features' className="text-color bold">About</Link></a>
    <h2 className="text-color bold">overdose</h2>
    </li>
    </>
  );
};

export default Try;
