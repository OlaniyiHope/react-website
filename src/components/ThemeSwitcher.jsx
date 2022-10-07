import React, { useContext } from "react";
import { THEME_TYPE } from "../constants";
import {ThemeContext} from "../providers/ThemeProvider";
import { RiMoonClearFill } from "react-icons/ri";
const ThemeSwitcher = () => {
  // No need to change *return* part
  // You have to set theme based on context
  const [themeMode, setTheme] = useContext(ThemeContext);
  
  const handleThemeChange = (e) => {
    console.log("current Value: "+ themeMode.theme);
    if(themeMode.theme === THEME_TYPE.LIGHT) {
      setTheme({ theme:THEME_TYPE.DARK });
    }
    else {
      setTheme({ theme:THEME_TYPE.LIGHT });
    }
    console.log("new Value: "+ themeMode.theme);
  };
  
  return (
    <div className="switch-container">
      <label className="switch">
      <RiMoonClearFill size={20} className="text-color bold"/> 
        <input
        style={{fontSize: 1}}
          data-testid="theme-changer"
          type="checkbox"
        className=""
          defaultChecked={themeMode.theme === THEME_TYPE.DARK}
          onChange={handleThemeChange}
        />
        <span className="slider round"></span>
      </label>
  
    </div>
  );
};

export default ThemeSwitcher;
