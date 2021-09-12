import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../Contexts/ThemeContext";
const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const handleClick = (e) => {
    e.preventDefault();
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button
      id="btnTheme"
      className={`float-start theme-btn-${theme}`}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faMoon} />
    </button>
  );
};

export default ThemeButton;
