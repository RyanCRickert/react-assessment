import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import optionsReducer from "../reducers/options";
import namesReducer from "../reducers/names";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(combineReducers({
    names: namesReducer,
    options: optionsReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};