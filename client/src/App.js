import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={LoginPage} />
        {/*         <Route component={NotFound} /> */}
      </Switch>
    </Router>
  );
}

export default App;
