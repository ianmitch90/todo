import React from "react";
import ReactDOM from "react-dom";
import { Theme } from "./shared";
import { Provider } from "react-redux";
import config from "./components/store/store";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const store = config();

ReactDOM.render(
  <Provider store={store}>
    <Theme>
      <App />
    </Theme>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.register();
