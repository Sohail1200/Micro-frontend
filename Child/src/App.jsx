import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Contact from "./Contact";
import "@cloudscape-design/global-styles/index.css"


const App = () => (
  <Contact />
);
ReactDOM.render(<App />, document.getElementById("app"));

