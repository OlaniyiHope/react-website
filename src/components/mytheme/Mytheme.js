import React, { useState } from "react";
import {Link} from "react-router-dom"
import "./Mytheme.css";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../theme';
import { GlobalStyles } from '../../global';
const Mytheme = () => {
 
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <>
      <GlobalStyles />
      // Pass the toggle functionality to the button
      <button onClick={toggleTheme}>Toggle theme</button>
      <h1>It's a light theme!</h1>
      <footer>
      </footer>
    </>
  </ThemeProvider>

  );
};

export default Mytheme;
