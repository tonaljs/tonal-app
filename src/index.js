import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { initRouter } from "./router";
import store from "./store";
import App from "./App";

initRouter(store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
