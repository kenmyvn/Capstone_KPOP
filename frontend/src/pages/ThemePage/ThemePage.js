import * as React from "react";
import styled from "@emotion/styled";
import ThemeButton from "../../components/ThemeButton/ThemeButton";

const ThemePage = (props) => {
  return (
    <div>
      <ThemeButton theme="asap" setTheme={props.setTheme} />
      <ThemeButton theme="stereotype" setTheme={props.setTheme} />
      <ThemeButton theme="wnl" setTheme={props.setTheme} />
    </div>
  );
};

export default ThemePage;
