import "bootstrap/dist/css/bootstrap.min.css";
import NoteContainer from "./components/NoteContainer";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoteDetails from "./components/NoteDetails";
import { NotesContextProvider } from "./components/Contexts/NotesContext";

const App = () => {
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
};

export default App;
