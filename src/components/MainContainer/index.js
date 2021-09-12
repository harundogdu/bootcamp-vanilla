import "bootstrap/dist/css/bootstrap.min.css";
import NoteContainer from "../NoteContainer";
import "../../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoteDetails from "../NoteDetails";
import { NotesContextProvider } from "../Contexts/NotesContext";
import { useTheme } from "../Contexts/ThemeContext";
import ThemeButton from "../ThemeButton";

const MainContainer = () => {
  const { theme } = useTheme();
  return (
    <div className={`App ${theme}`}>
      <NotesContextProvider>
        <Router>
          <ThemeButton />
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

export default MainContainer;
