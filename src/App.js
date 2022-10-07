import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useState, useContext } from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { Helmet } from "react-helmet";
import Styles from "./data/Styles";
import {
  Navbar,
  Header,
  Features,
  Download,
  Faq,
  Footer,
} from "./components";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import { ThemeProvider, ThemeContext } from "./providers/ThemeProvider";
import Try from "./components/Try";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
const StyleTag = () => {
  const [themeMode, setTheme] = useContext(ThemeContext);
  console.log(themeMode.theme);
  return (
    <Helmet>
      <style>{Styles(themeMode.theme)}</style>
    </Helmet>
  );
};

function App() {
  
  return (
    <ThemeProvider>
      <StyleTag />
      
<Router>
  <Navbar />
<Routes>

<Route exact path="/" element={<Header />}/>
  <Route exact path="/features" element={<Features />}/>
  <Route exact path="/about" element={<About />}/>
  <Route exact path="/contact" element={<Contact />}/>
  <Route exact path="/faq" element={<Faq />}/>
  <Route exact path="/try" element={<Try />}/>
  <Route exact path="/project" element={<Projects />}/>
  <Route exact path="/blog" element={<Blog />}/>
  <Route exact path="" element={<Footer />}/>
  <Route exact path="" element={<Download />}/>
</Routes>
</Router>
</ThemeProvider>
  );
}

export default App;
