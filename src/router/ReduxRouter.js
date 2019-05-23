import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from "../ReduxComponents/App";
import NotFoundPage from "../components/NotFoundPage";

export const history = createBrowserHistory();

const ReduxRouter = props => (
  <Router history={history}>
    <div className="App">
      <Switch>
        <Route path="/" component={App} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)

export default ReduxRouter;