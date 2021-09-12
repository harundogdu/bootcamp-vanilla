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
  return (
    <div className={`App ${theme}`}>
      <NotesContextProvider>
        <Router>
          <a
            href="#!"
            id="btnTheme"
            className={`float-start theme-btn-${theme}`}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <FontAwesomeIcon icon={faMoon} />
          </a>
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
