import async from "middlewares/async";
import React from "react";
import { Provider } from "react-redux";
import reducers from "reducers";
import { applyMiddleware, createStore } from "redux";
// import reduxPromise from "redux-promise";

export default ({ children, initialState = {} }) => {
  const store = createStore(reducers, initialState, applyMiddleware(async));
  return <Provider store={store}>{children}</Provider>;
};
