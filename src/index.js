import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { changePath } from "./actions";
import App from "./App";

window.onhashchange = () => {
  store.dispatch(changePath(window.location.hash.slice(2)));
};
window.onhashchange();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
