import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import ContextApp from "../components/App"
import NotFoundPage from "../components/NotFoundPage";

export const history = createBrowserHistory();

const ContextRouter = props => (
  <Router history={history}>
    <div className="App">
      <Switch>
        <Route path="/" component={ContextApp} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)

export default ContextRouter;