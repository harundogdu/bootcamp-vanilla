import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NoteContainer from "../NoteContainer";
import "../../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoteDetails from "../NoteDetails";
import { NotesContextProvider } from "../Contexts/NotesContext";
import { useTheme } from "../Contexts/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
function MainContainer() {
  const { theme, setTheme } = useTheme();
  const handleClick = (e) => {
    e.preventDefault();
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className={`App ${theme}`}>
      <NotesContextProvider>
        <Router>
          <button
            id="btnTheme"
            className={`float-start theme-btn-${theme}`}
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faMoon} />
          </button>
          <Switch>
            <Route exact path="/posts/:postId">
              <NoteDetails />
            </Route>
            <Route exact path="/">
              <NoteContainer />
            </Route>
          </Switch>
        </Router>
      </NotesContextProvider>
    </div>
  );
}

export default MainContainer;
