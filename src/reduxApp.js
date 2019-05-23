import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/styles.scss";

import AppRouter from "./router/ReduxRouter";
import configureStore from "./ReduxComponents/store/configureStore";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"))