import { createStore, applyMiddleware, compose } from "redux";
import Index from "../reducer/index";
import thunk from "redux-thunk";
// import createLogger from "redux-logger";
// const logger = createLogger();

var store = createStore(
  Index,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
