import * as React from "react";
import styled from "@emotion/styled";
import ThemeButton from "../../components/ThemeButton/ThemeButton";
import "./ThemePage.css";

const ThemePage = (props) => {
  return (
    <div className="buttonstyle">
      <ThemeButton theme="ASAP" setTheme={props.setTheme} />
      <ThemeButton theme="Stereotype" setTheme={props.setTheme} />
      <ThemeButton theme="We Need Love" setTheme={props.setTheme} />
    </div>
  );
};

export default ThemePage;
