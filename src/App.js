import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavbarComponent from "./components/NavbarComponent";
import HomeComponent from "./components/HomeComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HomeComponent />
    </div>
  );
}

export default App;
