import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import { model } from "./reducers/model";
import App from "./app";

const middleware = [reduxThunk];

const store = createStore(
  combineReducers({ model: model }),
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
