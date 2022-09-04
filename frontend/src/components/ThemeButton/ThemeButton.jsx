import "./ThemeButton.css";
import React from "react";
import Button from "@mui/material/Button";

const ThemeButton = (props) => {
  function handleClick() {
    props.setTheme(props.theme);
  }

  return (
    <Button className="themebutton" variant="contained" onClick={handleClick}>
      {props.theme}
    </Button>
  );
};

export default ThemeButton;
