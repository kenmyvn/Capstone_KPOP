import "./ThemeButton.css";
import React from "react";

const ThemeButton = (props) => {
  function handleClick() {
    props.setTheme(props.theme);
  }

  return (
    <button className="themebutton" onClick={handleClick}>
      {props.theme}
    </button>
  );
};

export default ThemeButton;
