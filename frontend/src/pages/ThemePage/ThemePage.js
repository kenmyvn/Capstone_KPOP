import * as React from "react";
import ThemeButton from "../../components/ThemeButton/ThemeButton";
import "./ThemePage.css";

const ThemePage = (props) => {
  return (
    <div className="container">
      <div className="buttontheme">
        <div className="profilebutton">
          <ThemeButton
            theme="ASAP"
            className="themebutton"
            setTheme={props.setTheme}
          />
          <ThemeButton
            theme="Stereotype"
            className="themebutton"
            setTheme={props.setTheme}
          />
          <ThemeButton
            theme="We Need Love"
            className="themebutton"
            setTheme={props.setTheme}
          />
        </div>
      </div>
    </div>
  );
};

export default ThemePage;
