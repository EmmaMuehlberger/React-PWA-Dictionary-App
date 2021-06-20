import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Word from "./pages/Word/Word";

const App = () => {  
  return (
    <div className="App">
      <Router >
        <Switch>
          <Route exact path="/:query">
            <Word />
          </Route >
          <Route exact path="/">
            <Homepage />
          </Route >
        </Switch >
      </Router>     
    </div>
  );
}

export default App;
