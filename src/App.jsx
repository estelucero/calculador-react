import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import Calculadora from "./components/Calculadora";
function App() {
  return (
    <div className="App">
      <div className="react-logo-contenedor">
        <img src={reactLogo} className="react-logo" alt="logo-react" />
      </div>
      <div className="calculadora-cotenedor">
        <Calculadora />
      </div>
    </div>
  );
}

export default App;
