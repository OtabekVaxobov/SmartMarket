import * as React from "react";
import * as ReactDOM from "react-dom";
import "./style.css";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
