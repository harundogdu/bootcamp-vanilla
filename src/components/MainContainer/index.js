import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NoteContainer from "../NoteContainer";
import "../../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoteDetails from "../NoteDetails";
import { NotesContextProvider } from "../Contexts/NotesContext";
function MainContainer() {
  return (
    <div className="App">
      <NotesContextProvider>
        <Router>
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
