import { THEME_TYPE } from "../constants";

const Theme = {
  [THEME_TYPE.LIGHT]: {
    background: "#fafafa",
    text: "#000",
    divider: "rgba(0, 0, 0, 0.12)",
  },
  [THEME_TYPE.DARK]: {
    background: "#0a1930",
    text: "#fff",
    divider: "rgba(255, 255, 255, 0.12)",
  },
};

const Styles = (theme) => `
body {background-color: ${Theme[theme].background};}
.text-color {color: ${Theme[theme].text};}
.box {border: 1px solid ${Theme[theme].divider}}
`;

export default Styles;
