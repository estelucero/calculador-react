import "../styles/calculadora.css";
import Boton from "./Boton";
import BotonClear from "./BotonClear";
import Pantalla from "./Pantalla";
import { useState } from "react";
import { evaluate } from "mathjs";
function Calculadora() {
  const [input, setInput] = useState("");

  const agregarInput = (valor) => {
    setInput(input + valor);
  };

  const calcularResultado = () => {
    if (input) {
      try {
        setInput(evaluate(input));
      } catch {
        setInput("");
        alert("Ingrese valores validos porfavor");
      }
    } else {
      alert("Ingrese valores porfavor");
    }
  };

  return (
    <div className="calculadora">
      <Pantalla input={input} />
      <div className="fila">
        <Boton manejarClick={agregarInput}>1</Boton>
        <Boton manejarClick={agregarInput}>2</Boton>
        <Boton manejarClick={agregarInput}>3</Boton>
        <Boton manejarClick={agregarInput}>+</Boton>
      </div>
      <div className="fila">
        <Boton manejarClick={agregarInput}>4</Boton>
        <Boton manejarClick={agregarInput}>5</Boton>
        <Boton manejarClick={agregarInput}>6</Boton>
        <Boton manejarClick={agregarInput}>-</Boton>
      </div>
      <div className="fila">
        <Boton manejarClick={agregarInput}>7</Boton>
        <Boton manejarClick={agregarInput}>8</Boton>
        <Boton manejarClick={agregarInput}>9</Boton>
        <Boton manejarClick={agregarInput}>*</Boton>
      </div>
      <div className="fila">
        <Boton manejarClick={calcularResultado}>=</Boton>
        <Boton manejarClick={agregarInput}>0</Boton>
        <Boton manejarClick={agregarInput}>.</Boton>
        <Boton manejarClick={agregarInput}>/</Boton>
      </div>
      <div className="fila">
        <BotonClear manejarClick={() => setInput("")}>Clear</BotonClear>
      </div>
    </div>
  );
}

export default Calculadora;
