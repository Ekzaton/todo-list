import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";

import App from "./app";

import store from "./store/store";

import "./index.css";

render(
  <Provider store={store}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
