import React from "react";
import ReactDOM from "react-dom";
import "@cloudscape-design/global-styles/index.css"

import "./index.scss";
// import Drawer from "./DrawerComponent";
import FFS from "./FFS";

const App = () => (
//  <Drawer/>
 <FFS/>
);
ReactDOM.render(<App />, document.getElementById("app"));
