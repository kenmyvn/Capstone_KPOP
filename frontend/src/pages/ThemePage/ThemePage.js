import * as React from "react";
import styled from "@emotion/styled";

const ThemePage = () => {
  function ThemeToggler() {
    const [theme, setTheme] = React.useState("");
    const nextTheme = theme === "stereotype" ? "asap" : "stereotype";

    React.useEffect(() => {
      document.body.dataset.theme = theme;
    }, [theme]);

    return (
      <button onClick={() => setTheme(nextTheme)}>
        Change to {nextTheme} mode
      </button>
    );
  }

  return (
    <div>
      <ThemeToggler />
    </div>
  );
};

export default ThemePage;
