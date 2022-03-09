import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import logger from "redux-logger";
import rootReducer from "./redux/reducers";

export const configureStore = (): Store => {
  const middlewares = [logger];
  const store = createStore(rootReducer, applyMiddleware(...middlewares));

  return store;
};

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
