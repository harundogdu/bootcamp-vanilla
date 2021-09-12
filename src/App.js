import "bootstrap/dist/css/bootstrap.min.css";
import NoteContainer from "./components/NoteContainer";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoteDetails from "./components/NoteDetails";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/posts/:postId">
            <NoteDetails data={data} />
          </Route>
          <Route path="/">
            <NoteContainer data={data} setData={setData} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
