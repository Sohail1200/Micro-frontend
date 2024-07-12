import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Suspense, lazy } from 'react';

import "./index.scss";
import Header from "./Header";
// import Contact from "./Contact";
// import Contact from "child/Contact";
import './App.css';
//import { importRemote } from "module-federation-import-remote";

// import DrawerComponent from "child_2/DrawerComponent";
//  const Contact = lazy(() => import("child/Contact"));
//  const DrawerComponent = lazy(() => import("child_2/DrawerComponent"));
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { importRemote } from "module-federation-import-remote";
import LayoutContainer from "./LayoutContainer";
import { Button } from "@mui/material";
// import Cloudescape from "./Cloudescape";
const Contact = lazy(() => importRemote({ url: "http://localhost:3003", scope: "Child", module: "Contact" }));
const FFS = lazy(() => importRemote({ url: "http://localhost:3004", scope: "child_2", module: "FFS" }));
// import "@cloudscape-design/global-styles/index.css";

//const Childapp = lazy(() => importRemote({ url: "@http://localhost:3003/remoteEntry.js", scope: "remote-app", module: "child" }));


const App = () => {

  const [showcontact, setShowContact] = useState(false);
  const [drawer, setDrawer] = useState(false);
  return (

    <div className="mt-10 text-3xl mx-auto max-w-6xl">


      <Header setShowContact={setShowContact} setDrawer={setDrawer}/>
      

      <div  style={{flexDirection:"row",display:"flex"}}>
      <Suspense fallback={<div> Loading FFS Form...</div>}>
      {drawer && <div style={{paddingTop : "1em",width:"50%"}}><FFS />  </div>}
      </Suspense>
        {/* {!drawer && <Button onClick={() => { setDrawer(true) }}>Load DrawerComponent</Button>}
        {!showcontact && <Button onClick={() => { setShowContact(true) }}>Load FormComponent</Button>} */}
        <Suspense fallback={<div> Loading Contact...</div>}>
          {showcontact && <div style={{paddingTop:"1em",width:"100%"}}> <Contact /></div> }
        </Suspense>

       

      </div>

      {/* <div style={{paddingTop:"1em",width:"50%"}}>
         <Cloudescape/>
      </div> */}

    </div>
  )


  // <Router>
  //     <Routes>

  //     <Route path="/"  element={<Suspense fallback={<div>loading</div>}><LayoutContainer Component={Contact}/></Suspense>} />
  //     <Route path="/about" element={<Suspense fallback={<div>loading</div>}><LayoutContainer Component={DrawerComponent}/></Suspense>} />
  //     </Routes>



  //   </Router>

};
ReactDOM.render(<App />, document.getElementById("app"));
