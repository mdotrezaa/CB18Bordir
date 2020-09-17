import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavbarComponent from "./components/NavbarComponent";
import HomeComponent from "./components/HomeComponent";
import FooterComponent from "./components/FooterComponents";
import { BrowserRouter, Route } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import AboutPage from "./components/AboutComponent";
import ServicePage from "./components/ServiceComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent/>
          <Switch>
            <Route exact path="/" component={HomeComponent}/>
            <Route path="/tentang-kami" component={AboutPage}/>
            <Route path="/layanan" component={ServicePage}/>
          </Switch>
          <FooterComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
